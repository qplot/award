<?php

/**
 * @file
 * Question migration.
 *
 * @author  Fang Jin <fang@designhammer.com>
 */

/**
 * Migrates questions from CSV data.
 */
class MigratePGHQuestionMigration extends Migration {

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
      12 => array('validation', 'validation'),
      13 => array('dformula', 'default value from question'),
      14 => array('dvalue', 'default value'),
      15 => array('pprompt', 'post prompt'),
      9 => array('points', 'points')
    );

    // Load compiled CSV data if it's available (created in preprocess_csv.inc) or an empty source if not.
    if (file_exists(PGH_MIGRATE_DATA_DIR . '/compiled/questions.csv')) {
      $this->source = new MigrateSourceCSV(
        PGH_MIGRATE_DATA_DIR . '/compiled/questions.csv',
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

    $this->addFieldMapping('title', 'id');
    $this->addFieldMapping('field_question_parent_qid', 'pid');
    $this->addFieldMapping('field_question_parent_value', 'pvalue');
    $this->addFieldMapping('field_question_type', 'type');
    $this->addFieldMapping('field_question_style', 'style');
    $this->addFieldMapping('field_question_layout', 'layout');
    $this->addFieldMapping('field_question_prompt', 'prompt');
    $this->addFieldMapping('field_question_post_prompt', 'pprompt');
    $this->addFieldMapping('field_question_options', 'options')
         ->separator('|');
    $this->addFieldMapping('field_question_validation', 'validation');
    $this->addFieldMapping('field_question_default', 'dvalue');
    $this->addFieldMapping('field_question_formula', 'dformula');
    $this->addFieldMapping('field_question_points', 'points')
         ->separator('|');
  }
}
