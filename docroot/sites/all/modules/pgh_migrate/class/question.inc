<?php

class MigratePGHQuestionMigration extends Migration {
  public function __construct($arguments) {
    parent::__construct($arguments);

    // create CSV source
    $columns = array(
      0 => array('id', 'id'),
      3 => array('type', 'type'),
      6 => array('prompty', 'prompt')
    );

    $this->source = new MigrateSourceCSV(
      drupal_get_path('module', 'pgh_migrate') . '/sample/sample.csv',
      $columns,
      array('header_rows' => 1)
    );

    // create Node destination
    $this->destination = new MigrateDestinationNode('page');

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

    $this->addFieldMapping('title', 'type');
  }
}

?>