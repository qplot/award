<?php

/**
 * @file
 * Work Group migration.
 *
 * @author Jay Roberts <jay@designhammer.com>
 */

/**
 * Migrates Work Groups from CSV data.
 */
class MigratePGHWorkGroupMigration extends Migration {

  /**
   * Prepare the migration.
   */
  public function __construct($arguments) {
    parent::__construct($arguments);

    $this->dependencies = array('PreprocessCSV');

    // Create a CSV source.
    $columns = array(
      array('author', 'FET'),
      array('name', 'workgroup name'),
    );

    // Load compiled CSV data if it's available (created in preprocess_csv.inc) or an empty source if not.
    if (file_exists(PGH_MIGRATE_DATA_DIR . '/compiled/work_groups.csv')) {
      $this->source = new MigrateSourceCSV(
        PGH_MIGRATE_DATA_DIR . '/compiled/work_groups.csv',
        $columns,
        array('header_rows' => 1)
      );
    }
    else {
      $this->source = new MigrateSourceList(new PGHMigrateEmptyList(), new PGHMigrateEmptyItem());
    }

    // Create a Node destination.
    $this->destination = new MigrateDestinationNode('work_group');

    $this->map = new MigrateSQLMap($this->machineName,
      array(
        'name' => array(
          'type' => 'varchar',
          'length' => 255,
          'not null' => TRUE,
        ),
      ),
      MigrateDestinationNode::getKeySchema()
    );

    $this->addFieldMapping('title', 'name');
    $this->addFieldMapping('uid', 'author_uid');
  }

  /**
   * Loads existing users to map as authors for Work Groups. These users will be responsible for setting up the work group.
   *
   * @param object $row
   *   An object for the row about to be imported. Passed by reference.
   */
  public function prepareRow($row) {
    static $seen = array();
    $author = user_load_by_mail($row->author);
    if ($author->uid) {
      $row->author_uid = $author->uid;
    }
    else {
      if (!$seen[$row->author]) {
        $seen[$row->author] = TRUE;
        dsm('No user for ' . $row->author);
      }

      $row->author_uid = 1;
    }
  }
}
