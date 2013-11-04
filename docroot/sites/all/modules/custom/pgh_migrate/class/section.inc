<?php

class MigratePGHSectionMigration extends Migration {
  public function __construct($arguments) {
    parent::__construct($arguments);

    $this->dependencies = array('PreprocessCSV');

    // create CSV source
    $columns = array(
      0 => array('id', 'id'),
      1 => array('name', 'name'),
      2 => array('questions', 'questions'),
    );

    // Load compiled CSV data if it's available (created in preprocess_csv.inc) or an empty source if not.
    if (file_exists(PGH_MIGRATE_DATA_DIR . '/compiled/sections.csv')) {
      $this->source = new MigrateSourceCSV(
        PGH_MIGRATE_DATA_DIR . '/compiled/sections.csv',
        $columns,
        array('header_rows' => 1)
      );
    } else {
      $this->source = new MigrateSourceList(new PGHMigrateEmptyList(), new PGHMigrateEmptyItem());
    }

    // create Node destination
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
      // $this->destination->getKeySchema()
    );

    $this->addFieldMapping('title', 'id');
    $this->addFieldMapping('body', 'name');
    $this->addFieldMapping('field_section_questions', 'questions')
         ->separator(', ')
         ->sourceMigration('Question');
    // $this->addFieldMapping('field_question_parent_value', 'pvalue');
  }
}
