<?php

class MigratePGHResponseMigration extends Migration {
  public function __construct($arguments) {
    parent::__construct($arguments);

    // create CSV source
    $columns = array(
      0 => array('id', 'id'),
      1 => array('appid', 'app id'),
      2 => array('questionid', 'question id'),
      3 => array('answer', 'answer'),
    );

    $this->source = new MigrateSourceCSV(
      drupal_get_path('module', 'pgh_migrate') . '/sample/response.csv',
      $columns,
      array('header_rows' => 1)
    );

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
