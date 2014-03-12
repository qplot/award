<?php

/**
 * @file
 * Points migration.
 *
 * @author  Fang Jin <fang@designhammer.com>
 */

/**
 * Migrates questions from CSV data.
 */
class MigratePGHPointsMigration extends Migration {

  /**
   * Prepare the migration.
   */
  public function __construct($arguments) {
    parent::__construct($arguments);

    $this->dependencies = array('PreprocessCSV');

    // Create a CSV source.
    $columns = array(
      0 => array('raw_id', 'raw id'),
      1 => array('id', 'id'),
      2 => array('pid', 'parent id'),
      3 => array('pvalue', 'parent required value'),
      4 => array('type', 'type'),
      5 => array('style', 'style'),
      6 => array('layout', 'layout'),
      7 => array('prompt', 'prompt'),
      8 => array('options', 'options'),
      9 => array('point', 'points'),
      10 => array('score', 'score'),
      11 => array('kpi', 'kpi'),
      12 => array('validation', 'validation'),
      13 => array('dformula', 'default value from question'),
      14 => array('dvalue', 'default value'),
      15 => array('pprompt', 'post prompt'),
    );

    // Load compiled CSV data if it's available (created in preprocess_csv.inc) or an empty source if not.
    if (file_exists(PGH_MIGRATE_DATA_DIR . '/compiled/points.csv')) {
      $this->source = new MigrateSourceCSV(
        PGH_MIGRATE_DATA_DIR . '/compiled/points.csv',
        $columns,
        array('header_rows' => 1)
      );
    }
    else {
      $this->source = new MigrateSourceList(new PGHMigrateEmptyList(), new PGHMigrateEmptyItem());
    }

    // Create a Node destination.
    $this->destination = new MigrateDestinationNode('question');

    $this->map = new MigrateSQLMap($this->machineName,
      array(
        'id' => array(
          'type' => 'varchar',
          'length' => 255,
          'not null' => TRUE,
        )
      ),
      MigrateDestinationNode::getKeySchema()
    );

    $this->addFieldMapping('nid', 'id');
    $this->addFieldMapping('field_question_point', 'point')
         ->separator('|');
    $this->addFieldMapping('field_question_score', 'score')
         ->separator('|');
    $this->addFieldMapping('field_question_kpi', 'kpi')
         ->separator('|');
  }

  public function prepareRow($row) {
    if (parent::prepareRow($row) === FALSE) {
      return FALSE;
    }

    // skip for empty row
    if (empty($row->id))
      return FALSE;

    // find the qid by id
    if (!($row->id = pgh_api_find_nid($row->id, 'question')))
      return FALSE;

    return TRUE;
  }

  public function complete($entity, stdClass $row) {
    // after the question score is saved,
    // find all response associated with this question
    $rids = pgh_api_find_nodes(
      array(
        'type' => 'response',
        'field_response_question' => array('target_id', $entity->nid, '=')
      ),
      NULL,
      TRUE
    );
    foreach ($rids as $rid) {
      $response = node_load($rid);
      $response_wrapper = entity_metadata_wrapper('node', $response);
      $app_id = $response_wrapper->field_response_application->raw();
      $qid = $response_wrapper->field_response_question->raw();
      $value = $response_wrapper->body->value() ? $response_wrapper->body->value->raw() : '';
      pgh_api_save_response($app_id, $qid, $value);
    }
  }

}
