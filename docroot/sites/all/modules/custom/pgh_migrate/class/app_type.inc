<?php

class MigratePGHAppTypeMigration extends Migration {
  public function __construct($arguments) {
    parent::__construct($arguments);

    // create CSV source
    $columns = array(
      0 => array('id', 'id'),
      1 => array('name', 'name'),
      2 => array('pages', 'pages'),
    );

    $this->source = new MigrateSourceCSV(
      drupal_get_path('module', 'pgh_migrate') . '/sample/app_type.csv',
      $columns,
      array('header_rows' => 1)
    );

    // create Node destination
    $this->destination = new MigrateDestinationNode('question');

    // create Entity destination
    // $this->destination = new MigrateDestinationEntityAPI('question', 'text');

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
    $this->addFieldMapping('field_question_parent_qid', 'pid');
    $this->addFieldMapping('field_question_parent_value', 'pvalue');
    $this->addFieldMapping('field_question_type', 'type');
    $this->addFieldMapping('field_question_style', 'style');
    $this->addFieldMapping('field_question_layout', 'layout');
    $this->addFieldMapping('field_question_prompt', 'prompt');
    $this->addFieldMapping('field_question_post_prompt', 'pprompt');
    $this->addFieldMapping('field_question_options', 'options')
         ->separator(',');
    $this->addFieldMapping('field_question_validation', 'validation');
    $this->addFieldMapping('field_question_default', 'dvalue');
    $this->addFieldMapping('field_question_formula', 'dformula');
  }
}

?>