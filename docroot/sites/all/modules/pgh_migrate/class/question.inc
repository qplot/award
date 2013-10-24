<?php

class MigratePGHQuestionMigration extends Migration {
  public function __construct($arguments) {
    parent::__construct($arguments);

    // create source
    $query = Database::getConnection('default', 'pgh_migrate')
      ->select('text_question', 'p')
      ->fields('p', array('id', 'label'));
    $this->source = new MigrateSourceSQL($query);

    // create destination
    $this->destination = new MigrateDestinationNode('page');

    $this->map = new MigrateSQLMap($this->machineName,
      array(
        'id' => array('type' => 'int')
      ),
      MigrateDestinationNode::getKeySchema()
    );

    $this->addFieldMapping('title', 'label');
    // $this->addFieldMapping('body', 'page_body');
  }
}

?>