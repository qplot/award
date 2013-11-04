<?php

class MigratePGHApplicationMigration extends Migration {
  public function __construct($arguments) {
    parent::__construct($arguments);

    // create CSV source
    $columns = array(
      0 => array('id', 'id'),
      1 => array('apptype', 'application type'),
    );

    $this->source = new MigrateSourceCSV(
      PGH_MIGRATE_DATA_DIR . 'application.csv',
      $columns,
      array('header_rows' => 1)
    );

    // create Node destination
    $this->destination = new MigrateDestinationNode('application');

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
    $this->addFieldMapping('field_application_type', 'apptype')
         ->sourceMigration('ApplicationType');
  }
}
