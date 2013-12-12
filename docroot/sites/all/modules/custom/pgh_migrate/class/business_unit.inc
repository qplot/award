<?php

/**
 * @file
 * Business Unit migration.
 *
 * @author Jay Robert <jay@designhammer.com>
 */

/**
 * Migrates Business Units from CSV data.
 */
class MigratePGHBusinessUnitMigration extends Migration {

  /**
   * Prepare the migration.
   */
  public function __construct($arguments) {
    parent::__construct($arguments);

    $this->dependencies = array('PreprocessCSV');

    // Create a CSV source.
    $columns = array(
      array('name', 'Name'),
      array('sfid', 'Id'),
      array('website', 'Website'),
      array('phone', 'Phone'),
      array('billing_street', 'BillingStreet'),
      array('billing_city', 'BillingCity'),
      array('billing_state', 'Billing_State_Code_for_Mailings__c'),
      array('billing_country', 'BillingCountry'),
      array('billing_postal_code', 'BillingPostalCode'),
      array('shipping_street', 'ShippingStreet'),
      array('shipping_city', 'ShippingCity'),
      array('shipping_state', 'Shipping_State_Code_for_Mailings__c'),
      array('shipping_country', 'ShippingCountry'),
      array('shipping_postal_code', 'ShippingPostalCode'),
    );

    // Load compiled CSV data if it's available (created in preprocess_csv.inc) or an empty source if not.
    if (file_exists(PGH_MIGRATE_DATA_DIR . '/compiled/business_units.csv')) {
      $this->source = new MigrateSourceCSV(
        PGH_MIGRATE_DATA_DIR . '/compiled/business_units.csv',
        $columns,
        array('header_rows' => 1)
      );
    }
    else {
      $this->source = new MigrateSourceList(new PGHMigrateEmptyList(), new PGHMigrateEmptyItem());
    }

    // Create a Node destination.
    $this->destination = new MigrateDestinationNode('business_unit');

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

    $this->addFieldMapping('field_business_unit_sfid', 'sfid');
    $this->addFieldMapping('title', 'name');
    $this->addFieldMapping('field_website_url', 'website');
    $this->addFieldMapping('field_phone', 'phone');
    $this->addFieldMapping('field_billing_address_1', 'billing_street');
    $this->addFieldMapping('field_billing_city', 'billing_city');
    $this->addFieldMapping('field_billing_state', 'billing_state');
    $this->addFieldMapping('field_billing_country', 'billing_country');
    $this->addFieldMapping('field_billing_zipcode', 'billing_postal_code');
    $this->addFieldMapping('field_shipping_address_1', 'shipping_street');
    $this->addFieldMapping('field_shipping_city', 'shipping_city');
    $this->addFieldMapping('field_shipping_state', 'shipping_state');
    $this->addFieldMapping('field_shipping_country', 'shipping_country');
    $this->addFieldMapping('field_shipping_zipcode', 'shipping_postal_code');
  }

  public function prepareRow($row) {
    if (!$row->shipping_street) {
      $row->shipping_street = $row->billing_street;
      $row->shipping_city = $row->billing_city;
      $row->shipping_state = $row->billing_state;
      $row->shipping_country = $row->billing_country;
      $row->shipping_postal_code = $row->billing_postal_code;
    }
  }
}
