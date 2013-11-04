<?php

class MigratePGHResponseMigration extends Migration {
  public function __construct($arguments) {
    parent::__construct($arguments);

    $this->dependencies = array('PreprocessCSV');

    // create CSV source
    $columns = array(
      0 => array('id', 'id'),
      1 => array('appid', 'app id'),
      2 => array('questionid', 'question id'),
      3 => array('answer', 'answer'),
    );

    // Load compiled CSV data if it's available (created in preprocess_csv.inc) or an empty source if not.
    if (file_exists(PGH_MIGRATE_DATA_DIR . '/compiled/responses.csv')) {
      $this->source = new MigrateSourceCSV(
        PGH_MIGRATE_DATA_DIR . '/compiled/responses.csv',
        $columns,
        array('header_rows' => 1)
      );
    } else {
      $this->source = new MigrateSourceList(new PGHMigrateEmptyList(), new PGHMigrateEmptyItem());
    }

    // create Node destination
    $this->destination = new MigrateDestinationNode('response');

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
    $this->addFieldMapping('field_response_application', 'appid')
         ->sourceMigration('Application');
    $this->addFieldMapping('field_response_question', 'questionid')
         ->sourceMigration('Question');
    $this->addFieldMapping('body', 'answer');
  }
}
