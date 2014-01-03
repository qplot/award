<?php

/**
 * @file
 * User migration.
 *
 * @author Jay Roberts <jay@designhammer.com>
 */

/**
 * Migrates Users from CSV data.
 */
class MigratePGHUserMigration extends Migration {

  /**
   * Prepare the migration.
   */
  public function __construct($arguments) {
    parent::__construct($arguments);

    $this->dependencies = array('PreprocessCSV');

    // Create a CSV source.
    $columns = array(
      array('sfid', 'SF_Contact_Id if member'),
      array('unused-1', 'is member (manual update - disregard)'),
      array('unused-2', 'salesforce_account_id'),
      array('unused-3', 'year'),
      array('unused-4', ''),
      array('unused-5', 'org query ->'),
      array('organization', 'Organization Name'),
      array('unused-7', 'Health System'),
      array('unused-8', 'workgroup'),
      array('unused-8', 'Street Address '),
      array('unused-9', 'City'),
      array('unused-10', 'State'),
      array('unused-11', 'Postal Code'),
      array('first_name', 'Primary Contact - First Name'),
      array('last_name', 'Primary Contact- Last Name'),
      array('title', 'Title'),
      array('departent', 'Department'),
      array('phone', 'Phone'),
      array('email', 'E-Mail'),
    );

    // Load compiled CSV data if it's available (created in preprocess_csv.inc) or an empty source if not.
    if (file_exists(PGH_MIGRATE_DATA_DIR . '/compiled/users.csv')) {
      $this->source = new MigrateSourceCSV(
        PGH_MIGRATE_DATA_DIR . '/compiled/users.csv',
        $columns,
        array('header_rows' => 1)
      );
    }
    else {
      $this->source = new MigrateSourceList(new PGHMigrateEmptyList(), new PGHMigrateEmptyItem());
    }

    // Create a Node destination.
    $this->destination = new MigrateDestinationUser();

    $this->map = new MigrateSQLMap($this->machineName,
      array(
        'sfid' => array(
          'type' => 'varchar',
          'length' => 255,
          'not null' => TRUE,
        ),
      ),
      MigrateDestinationNode::getKeySchema()
    );

    $this->addFieldMapping('name', 'email');
    $this->addFieldMapping('role_names')->defaultValue(array('Client Administrator'));

    $this->addFieldMapping('is_new')->defaultValue(TRUE);
    $this->addFieldMapping('status')->defaultValue(FALSE);

    $this->addFieldMapping('field_user_sfid', 'sfid');
    $this->addFieldMapping('mail', 'email');
    $this->addFieldMapping('field_user_first_name', 'first_name');
    $this->addFieldMapping('field_user_last_name', 'last_name');
    $this->addFieldMapping('field_user_phone', 'phone');
    $this->addFieldMapping('field_user_department', 'department');
    $this->addFieldMapping('field_user_position_title', 'title');
    $this->addFieldMapping('field_user_company', 'organization');
  }

  /**
   * Check incoming row data.
   *
   * Skip rows with empty email addresses or where there is already a User account with the same email.
   *
   * @param object $row
   *   A row of data to process.
   */
  public function prepareRow($row) {
    // Skip entries with no email/
    if (!$row->email) {
      return FALSE;
    }

    // Skip entries which already exist.
    $existing_user = user_load_by_mail($row->email);
    if ($existing_user) {
      dsm('Skipping ' . $row->email);
      return FALSE;
    }
  }
}
