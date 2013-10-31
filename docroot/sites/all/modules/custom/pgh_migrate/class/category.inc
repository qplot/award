<?php

class MigratePGHCategoryMigration extends Migration {
  public function __construct($arguments) {
    parent::__construct($arguments);

    // create CSV source
    $columns = array(
      0 => array('id', 'id'),
      1 => array('name', 'name'),
      2 => array('sections', 'sections'),
    );

    $this->source = new MigrateSourceCSV(
      drupal_get_path('module', 'pgh_migrate') . '/sample/category.csv',
      $columns,
      array('header_rows' => 1)
    );

    // create Node destination
    $this->destination = new MigrateDestinationNode('category');

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
    $this->addFieldMapping('field_category_sections', 'sections')
         ->separator(', ')
         ->sourceMigration('Section');
  }
}
