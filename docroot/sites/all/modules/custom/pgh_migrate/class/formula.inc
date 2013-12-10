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
class MigratePGHFormulaMigration extends Migration {
  /**
   * Prepare the migration.
   */
  public function __construct($arguments) {
    parent::__construct($arguments);

    // Update content
    $this->systemOfRecord = Migration::DESTINATION;

    // Create a CSV source.
    $columns = array(
      0 => array('qid', 'Question id'),
      1 => array('handler', 'Handler'),
      2 => array('done', 'Done'),
      3 => array('populated_qid', 'Populated Question id'),
      4 => array('formula', 'Formula'),
    );

    // Load compiled CSV data if it's available (created in preprocess_csv.inc) or an empty source if not.
    if (file_exists(PGH_MIGRATE_DATA_DIR . '/compiled/formulas.csv')) {
      $this->source = new MigrateSourceCSV(
        PGH_MIGRATE_DATA_DIR . '/compiled/formulas.csv',
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
        'qid' => array(
          'type' => 'varchar',
          'length' => 255,
          'not null' => TRUE,
        )
      ),
      MigrateDestinationNode::getKeySchema()
    );

    $this->addFieldMapping('nid', 'qid');
    $this->addFieldMapping('field_question_handler', 'handler');
    $this->addFieldMapping('field_question_formula', 'formula');
    $this->addFieldMapping('field_question_populated', 'populated_qid');
  }

  public function prepareRow($row) {
    if (parent::prepareRow($row) === FALSE) {
      return FALSE;
    }

    // find the qid by id
    if (!($row->qid = pgh_api_find_nid($row->qid, 'question')))
      return FALSE;

    return TRUE;
  }

}
