<?php
/**
 * @file
 * pgh_business_unit_ctype.field_group.inc
 */

/**
 * Implements hook_field_group_info().
 */
function pgh_business_unit_ctype_field_group_info() {
  $export = array();

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_award_notification_letter|node|business_unit|form';
  $field_group->group_name = 'group_award_notification_letter';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'business_unit';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Award Notification Letter',
    'weight' => '11',
    'children' => array(
      0 => 'field_award_letter_first_name',
      1 => 'field_award_letter_last_name',
      2 => 'field_award_letter_title',
      3 => 'field_award_letter_organization',
      4 => 'field_award_letter_address_1',
      5 => 'field_award_letter_address_2',
      6 => 'field_award_letter_city',
      7 => 'field_award_letter_state',
      8 => 'field_award_letter_zipcode',
    ),
    'format_type' => 'fieldset',
    'format_settings' => array(
      'label' => 'Award Notification Letter',
      'instance_settings' => array(
        'required_fields' => 1,
        'classes' => 'group-award-notification-letter field-group-fieldset',
        'description' => '',
      ),
      'formatter' => 'open',
    ),
  );
  $export['group_award_notification_letter|node|business_unit|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_billing_address|node|business_unit|form';
  $field_group->group_name = 'group_billing_address';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'business_unit';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Billing address',
    'weight' => '8',
    'children' => array(
      0 => 'field_billing_address_1',
      1 => 'field_billing_address_2',
      2 => 'field_billing_city',
      3 => 'field_billing_state',
      4 => 'field_billing_zipcode',
      5 => 'field_billing_country',
    ),
    'format_type' => 'fieldset',
    'format_settings' => array(
      'label' => 'Billing address',
      'instance_settings' => array(
        'required_fields' => 1,
        'classes' => 'group-billing-address field-group-fieldset',
        'description' => '',
      ),
      'formatter' => 'open',
    ),
  );
  $export['group_billing_address|node|business_unit|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_primary_contact|node|business_unit|form';
  $field_group->group_name = 'group_primary_contact';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'business_unit';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Primary Contact',
    'weight' => '10',
    'children' => array(
      0 => 'field_primary_email',
      1 => 'field_primary_first_name',
      2 => 'field_primary_last_name',
      3 => 'field_primary_phone',
      4 => 'field_primary_title',
    ),
    'format_type' => 'fieldset',
    'format_settings' => array(
      'label' => 'Primary Contact',
      'instance_settings' => array(
        'required_fields' => 1,
        'classes' => 'group-primary-contact field-group-fieldset',
        'description' => '',
      ),
      'formatter' => 'open',
    ),
  );
  $export['group_primary_contact|node|business_unit|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_shipping_address|node|business_unit|form';
  $field_group->group_name = 'group_shipping_address';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'business_unit';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Shipping address',
    'weight' => '9',
    'children' => array(
      0 => 'field_shipping_address_1',
      1 => 'field_shipping_address_2',
      2 => 'field_shipping_city',
      3 => 'field_shipping_state',
      4 => 'field_shipping_zipcode',
      5 => 'field_shipping_country',
    ),
    'format_type' => 'fieldset',
    'format_settings' => array(
      'label' => 'Shipping address',
      'instance_settings' => array(
        'required_fields' => 1,
        'classes' => 'group-shipping-address field-group-fieldset',
        'description' => 'This is the address to which you would like an award plaque shipped.',
      ),
      'formatter' => 'open',
    ),
  );
  $export['group_shipping_address|node|business_unit|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_unit_info|node|business_unit|form';
  $field_group->group_name = 'group_unit_info';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'business_unit';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Unit info',
    'weight' => '7',
    'children' => array(
      0 => 'field_number_beds',
      1 => 'field_phone',
      2 => 'field_website_url',
      3 => 'field_number_ors',
    ),
    'format_type' => 'fieldset',
    'format_settings' => array(
      'label' => 'Unit info',
      'instance_settings' => array(
        'required_fields' => 1,
        'classes' => 'group-unit-info field-group-fieldset',
        'description' => '',
      ),
      'formatter' => 'open',
    ),
  );
  $export['group_unit_info|node|business_unit|form'] = $field_group;

  return $export;
}
