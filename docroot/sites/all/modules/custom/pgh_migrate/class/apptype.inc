<?php

/**
 * @file
 * Application Type migration.
 *
 * @author  Fang Jin <fang@designhammer.com>
 */

/**
 * Migrates application types from CSV data.
 */
class MigratePGHAppTypeMigration extends Migration {

  /**
   * Prepare the migration.
   */
  public function __construct($arguments) {
    parent::__construct($arguments);

    $this->dependencies = array('PreprocessCSV');

    // Create a CSV source.
    $columns = array(
      0 => array('id', 'id'),
      1 => array('name', 'name'),
      2 => array('categories', 'categories'),
    );

    // Load compiled CSV data if it's available (created in preprocess_csv.inc) or an empty source if not.
    if (file_exists(PGH_MIGRATE_DATA_DIR . '/compiled/apptypes.csv')) {
      $this->source = new MigrateSourceCSV(
        PGH_MIGRATE_DATA_DIR . '/compiled/apptypes.csv',
        $columns,
        array('header_rows' => 1)
      );
    }
    else {
      $this->source = new MigrateSourceList(new PGHMigrateEmptyList(), new PGHMigrateEmptyItem());
    }

    // Create a Node destination.
    $this->destination = new MigrateDestinationNode('apptype');

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
    $this->addFieldMapping('body', 'name');
    $this->addFieldMapping('field_apptype_categories', 'categories')
         ->separator(',')
         ->sourceMigration('Category');
  }
}
