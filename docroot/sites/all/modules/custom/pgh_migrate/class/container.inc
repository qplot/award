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
class MigratePGHContainerMigration extends Migration {
  // private layout variable
  private $layouts = array();

  /**
   * Prepare the migration.
   */
  public function __construct($arguments) {
    parent::__construct($arguments);

    // Update content
    $this->systemOfRecord = Migration::DESTINATION;

    // Create a CSV source.
    $columns = array(
      0 => array('qid', 'qid'),
      1 => array('id', 'id'),
      2 => array('rows', 'rows'),
      3 => array('c1', 'column 1'),
      4 => array('c2', 'column 2'),
      5 => array('c3', 'column 3'),
      6 => array('c4', 'column 4'),
      7 => array('c5', 'column 5'),
      8 => array('c6', 'column 6'),
      9 => array('c7', 'column 7'),
    );

    // Load compiled CSV data if it's available (created in preprocess_csv.inc) or an empty source if not.
    if (file_exists(PGH_MIGRATE_DATA_DIR . '/compiled/containers.csv')) {
      $this->source = new MigrateSourceCSV(
        PGH_MIGRATE_DATA_DIR . '/compiled/containers.csv',
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

    $this->addFieldMapping('nid', 'qid');
    $this->addFieldMapping('field_question_layout', 'rows');
  }

  public function prepareRow($row) {
    if (parent::prepareRow($row) === FALSE) {
      return FALSE;
    }

    // skip empty rows
    if (empty($row->rows))
      return FALSE;

    // find the qid by id
    if (!($row->qid = pgh_api_find_nid($row->qid, 'question')))
      return FALSE;

    // assemble the cols
    $cols = array(
      $row->c1,
      $row->c2,
      $row->c3,
      $row->c4,
      $row->c5,
      $row->c6,
      $row->c7,
    );
    $cols = implode('|', array_filter($cols));

    // assemble with previous row
    $this->layouts[$row->qid][] = $cols;
    $row->rows = implode('||', array_filter($this->layouts[$row->qid]));

    return TRUE;
  }

}
