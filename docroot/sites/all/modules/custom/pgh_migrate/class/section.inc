<?php

class MigratePGHSectionMigration extends Migration {
  public function __construct($arguments) {
    parent::__construct($arguments);

    // create CSV source
    $columns = array(
      0 => array('id', 'id'),
      1 => array('name', 'name'),
      2 => array('questions', 'questions'),
    );

    $this->source = new MigrateSourceCSV(
      drupal_get_path('module', 'pgh_migrate') . '/sample/section.csv',
      $columns,
      array('header_rows' => 1)
    );

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

?>