#!/usr/bin/env drush
<?php

/**
 * @file
 * Drush script for updating Questions.
 *
 * @author Kosta Harlan
 */

/**
 * About:
 *
 * This script mimics the functionality in the Points migration class.
 *
 * Usage:
 *
 * Set `memory_limit = 1024M` in ~/.drush/drush.ini
 * Run `drush @pgh.local scr /path/to/points-update.php`.
 *
 * Options:
 *
 *`--file={filepath}` option to load a file instead of
 * /compiled/points.csv. Useful* for testing.
 *
 * `--app-id={app_id}` option to update a specific app ID for testing.
 *
 * `--start-row={row}` option lets you (re)start update at a certain row.
 *
 * `--limit=10` Process only ten items.
 */


/**
 * Read a CSV and return an array of its contents.
 */
function readCSV($file) {
  if (file_exists($file)) {
    $file_handle = fopen($file, 'r');
    while (!feof($file_handle)) {
      $data[] = fgetcsv($file_handle);
    }
    fclose($file_handle);
    return $data;
  }
}

$file = drush_get_option('file');
if (!$file) {
  $file = PGH_MIGRATE_DATA_DIR . '/compiled/points.csv';
}
$app_id = drush_get_option('app-id');
$start_row = drush_get_option('start-row');
$limit = drush_get_option('limit');

drush_log(dt('Loading file !file', array('!file' => $file)), 'ok');
if (!file_exists($file)) {
  return drush_set_error(dt('The file !file does not exist.', array('!file' => $file)));
}

$data = readCSV($file);

$total = count($data) - 1;
$ignore = $error = $success = array();
$count = 0;
// Loop through data.
foreach ($data as $index => $row) {
  if ($index == 0) {
    // Ignore CSV headers.
    continue;
  }
  // Allow (re)starting the migration at a particular row.
  if ($start_row && $index < $start_row) {
    continue;
  }
  if ($count > $limit) {
    drush_log(dt('Reached max limit of !limit. Exiting at row !row.', array(
      '!limit' => $limit,
      '!row' => $index,
    )), 'ok');
    break;
  }
  $count++;
  drush_log(dt('### Processing row !row of total !total ###', array('!row' => $index, '!total' => $total)), 'ok');
  if (empty($row[1])) {
    drush_log(dt('- Skipping row !row, it does not have an ID.', array('!row' => $index)), 'ok');
    $ignore[] = $index;
    continue;
  }
  $id = $row[1];
  $nid = pgh_api_find_nid($id, 'question');
  if (!$nid) {
    drush_set_error(dt('- Could not find node ID from id !id', array('!id' => $id)));
    $ignore[] = $index;
    continue;
  }
  // Set these to default to an array.
  $point = !empty($row[9]) ? explode('|', $row[9]) : array();
  $score = !empty($row[10]) ? explode('|', $row[10]) : array();
  $kpi = !empty($row[11]) ? explode('|', $row[11]) : array();
  if (!$point && !$score && !$kpi) {
    drush_set_error(dt('- KPI, point, and score are all blank in row !row', array('!row' => $index)));
    $error[] = $index;
    continue;
  }
  $node = node_load($nid);
  drush_log(dt('- Loaded node !title', array('!title' => $node->title)), 'success');
  $wrapper = entity_metadata_wrapper('node', $node);
  $wrapper->field_question_point->set($point);
  $wrapper->field_question_score->set($score);
  $wrapper->field_question_kpi->set($kpi);
  $wrapper->save();

  // After the question score is saved find all responses associated with this
  // question.
  $find = array(
    'type' => 'response',
    'field_response_question' => array('target_id', $node->nid, '='),
  );
  if ($app_id) {
    $debug_find = array(
      'field_response_application' => array('target_id', $app_id, '='),
    );
    $find = array_merge($find, $debug_find);
  }

  $rids = pgh_api_find_nodes(
    $find,
    NULL,
    TRUE
  );
  $saved_responses = 0;
  drush_log(dt('  - Found !count response IDs.', array('!count' => count($rids))), 'ok');
  foreach ($rids as $rid) {
    $response = node_load($rid);
    if (!empty($response->field_response_updated['und'][0]['value'])) {
      $response_wrapper = entity_metadata_wrapper('node', $response);
      $app_id = $response_wrapper->field_response_application->raw();
      $qid = $response_wrapper->field_response_question->raw();
      $value = $response_wrapper->body->value() ? $response_wrapper->body->value->raw() : '';
      drush_log(dt('    - Saving response for app ID !id with body !body', array(
        '!id' => $app_id,
        '!body' => !empty($value) ? 'value set.' : '*NOT* set.',
      )), !empty($value) ? 'ok' : 'warning');
      pgh_api_save_response($app_id, $qid, $value);
      $saved_responses++;
      $success[] = $index;
    }
  }
  drush_log(dt('  - Saved !count responses for question !qid.', array(
    '!count' => $saved_responses,
    '!qid' => $qid)), 'success');
}

drush_log(dt('Finished with updating questions.'), 'success');
drush_log(dt('There were !count rows ignored due to missing IDs.', array('!count' => count($ignore))), 'ok');
drush_log(dt('There were !count errors due to required fields missing.', array('!count' => count($error))), 'ok');
drush_log(dt('There were !count successes', array('!count' => count($success))), 'ok');
