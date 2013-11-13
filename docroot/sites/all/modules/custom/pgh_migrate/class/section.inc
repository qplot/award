<?php

/**
 * @file
 * Section migration.
 *
 * @author  Fang Jin <fang@designhammer.com>
 */

/**
 * Migrates sections from CSV data.
 */
class MigratePGHSectionMigration extends Migration {

  /**
   * Prepare the migration.
   */
  public function __construct($arguments) {
    parent::__construct($arguments);

    $this->dependencies = array('PreprocessCSV');

    // Create a CSV source.
    $columns = array(
      0 => array('id', 'id'),
      1 => array('label', 'label'),
      2 => array('questions', 'questions'),
      3 => array('html', 'html'),
    );

    // Load compiled CSV data if it's available (created in preprocess_csv.inc) or an empty source if not.
    if (file_exists(PGH_MIGRATE_DATA_DIR . '/compiled/sections.csv')) {
      $this->source = new MigrateSourceCSV(
        PGH_MIGRATE_DATA_DIR . '/compiled/sections.csv',
        $columns,
        array('header_rows' => 1)
      );
    }
    else {
      $this->source = new MigrateSourceList(new PGHMigrateEmptyList(), new PGHMigrateEmptyItem());
    }

    // Create a Node destination.
    $this->destination = new MigrateDestinationNode('section');

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
    $this->addFieldMapping('field_section_label', 'label')
         ->defaultValue('empty');
    $this->addFieldMapping('field_section_questions', 'questions')
         ->separator(',')
         ->sourceMigration('Question');
    $this->addFieldMapping('body', 'html');
    $this->addFieldMapping('body:format')
         ->defaultValue('full_html');
  }
}
