<?php

/**
 * @file
 * Points migration.
 *
 * @author Fang Jin <fang@designhammer.com>
 */

/**
 * Migrates questions from CSV data.
 */
class MigratePGHPointsMigration extends Migration {

  /**
   * {@inheritdoc}
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

    // Load compiled CSV data if it's available (created in preprocess_csv.inc)
    // or an empty source if not.
    if (file_exists(PGH_MIGRATE_DATA_DIR . '/compiled/points.csv')) {
      $this->source = new MigrateSourceCSV(
        PGH_MIGRATE_DATA_DIR . '/compiled/points.csv',
        $columns,
        array('header_rows' => 1),
        $this->fields()
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
        ),
      ),
      MigrateDestinationNode::getKeySchema()
    );

    $this->addFieldMapping('nid', 'nid_lookup')
         ->description(t('Lookup the node ID from the ID. See prepareRow().'));
    $this->addFieldMapping('title', 'id');
    $this->addFieldMapping('field_question_point', 'point')
         ->separator('|');
    $this->addFieldMapping('field_question_score', 'score')
         ->separator('|');
    $this->addFieldMapping('field_question_kpi', 'kpi')
         ->separator('|');
    $this->addFieldMapping('uid')
         ->defaultValue(1);
    $this->addFieldMapping('status')
         ->defaultValue(1);
    $this->addUnmigratedDestinations(array(
      'created',
      'changed',
      'promote',
      'sticky',
      'revision',
      'log',
      'language',
      'tnid',
      'translate',
      'revision_uid',
      'is_new',
      'body',
      'body:summary',
      'body:language',
      'field_question_default',
      'field_question_default:language',
      'field_question_formula',
      'field_question_formula:language',
      'field_question_layout',
      'field_question_layout:language',
      'field_question_options',
      'field_question_options:language',
      'field_question_parent_qid',
      'field_question_parent_qid:language',
      'field_question_parent_value',
      'field_question_parent_value:language',
      'field_question_post_prompt',
      'field_question_post_prompt:language',
      'field_question_prompt',
      'field_question_prompt:language',
      'field_question_style',
      'field_question_style:language',
      'field_question_type',
      'field_question_type:language',
      'field_question_validation',
      'field_question_validation:language',
      'field_question_points',
      'field_question_points:language',
      'field_question_epp',
      'field_question_kpi:language',
      'field_question_point:language',
      'field_question_score:language',
      'path',
      'comment',
    ));
    $this->addUnmigratedSources(array(
      'raw_id',
      'pid',
      'pvalue',
      'type',
      'style',
      'layout',
      'prompt',
      'options',
      'validation',
      'dformula',
      'dvalue',
      'pprompt',
    ));

  }

  /**
   * {@inheritdoc}
   */
  public function fields() {
    return array(
      'nid_lookup' => 'Look up the node ID to update from the source ID.',
    );
  }

  /**
   * {@inheritdoc}
   */
  public function prepareRow($row) {
    if (parent::prepareRow($row) === FALSE) {
      return FALSE;
    }

    // Skip for empty row.
    if (empty($row->id)) {
      return FALSE;
    }

    // Find the qid by id.
    $nid = pgh_api_find_nid($row->id, 'question');
    if (!$nid) {
      return FALSE;
    }
    else {
      $row->nid_lookup = $nid;
    }
    return TRUE;
  }

  /**
   * {@inheritdoc}
   */
  public function complete($entity, stdClass $row) {
    // After the question score is saved find all responses associated with this
    // question.
    $rids = pgh_api_find_nodes(
      array(
        'type' => 'response',
        'field_response_question' => array('target_id', $entity->nid, '='),
      ),
      NULL,
      TRUE
    );
    foreach ($rids as $rid) {
      $response = node_load($rid);
      if (!empty($response->field_response_updated['und'][0]['value'])) {
        $response_wrapper = entity_metadata_wrapper('node', $response);
        $app_id = $response_wrapper->field_response_application->raw();
        $qid = $response_wrapper->field_response_question->raw();
        $value = $response_wrapper->body->value() ? $response_wrapper->body->value->raw() : '';
        pgh_api_save_response($app_id, $qid, $value);
      }
    }
  }

}
