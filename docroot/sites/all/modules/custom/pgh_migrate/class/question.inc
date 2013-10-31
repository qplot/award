<?php

class MigratePGHQuestionMigration extends Migration {
  public function __construct($arguments) {
    parent::__construct($arguments);

    // create CSV source
    $columns = array(
      0 => array('id', 'id'),
      1 => array('pid', 'parent id'),
      2 => array('pvalue', 'parent required value'),
      3 => array('type', 'type'),
      4 => array('style', 'style'),
      5 => array('layout', 'layout'),
      6 => array('prompt', 'prompt'),
      7 => array('options', 'options'),
      8 => array('validation', 'validation'),
      9 => array('dformula', 'default value from question'),
      10 => array('dvalue', 'default value'),
      11 => array('pprompt', 'post prompt')
    );

    $this->source = new MigrateSourceCSV(
      drupal_get_path('module', 'pgh_migrate') . '/sample/question.csv',
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
