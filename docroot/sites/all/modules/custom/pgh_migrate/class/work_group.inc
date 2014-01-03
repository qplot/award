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
      array('client_admin_id', 'SF_Contact_Id if member'),
      array('unused-2', 'is member (manual update - disregard)'),
      array('business_unit_sfid', 'salesforce_account_id'),
      array('unused-3', 'year'),
      array('unused-4', ''),
      array('unused-5', 'org query ->'),
      array('unused-6', 'Organization Name'),
      array('unused-7', 'Health System'),
      array('name', 'workgroup'),
      array('unused-8', 'Street Address '),
      array('unused-9', 'City'),
      array('unused-10', 'State'),
      array('unused-11', 'Postal Code'),
      array('unused-12', 'Primary Contact - First Name'),
      array('unused-13', 'Primary Contact- Last Name'),
      array('unused-14', 'Title'),
      array('unused-15', 'Department'),
      array('unused-16', 'Phone'),
      array('unused-17', 'E-Mail'),
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

    $this->addFieldMapping('field_business_units', 'business_unit_sfid')
         ->sourceMigration('BusinessUnit');
    $this->addFieldMapping('field_administrators', 'client_admin_id')
         ->sourceMigration('User');
  }
}
