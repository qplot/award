<?php
/**
 * @file
 * pgh_user_profile.field_group.inc
 */

/**
 * Implements hook_field_group_info().
 */
function pgh_user_profile_field_group_info() {
  $export = array();

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_user_account_info|user|user|form';
  $field_group->group_name = 'group_user_account_info';
  $field_group->entity_type = 'user';
  $field_group->bundle = 'user';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Account Info',
    'weight' => '2',
    'children' => array(
      0 => 'account',
      1 => 'timezone',
      2 => 'overlay_control',
    ),
    'format_type' => 'div',
    'format_settings' => array(
      'label' => 'Account Info',
      'instance_settings' => array(
        'required_fields' => 1,
        'id' => '',
        'classes' => '',
        'description' => '',
        'show_label' => '1',
        'label_element' => 'h2',
        'effect' => 'none',
        'speed' => 'none',
      ),
      'formatter' => 'open',
    ),
  );
  $export['group_user_account_info|user|user|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_user_company_ino|user|user|form';
  $field_group->group_name = 'group_user_company_ino';
  $field_group->entity_type = 'user';
  $field_group->bundle = 'user';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Company Info',
    'weight' => '1',
    'children' => array(
      0 => 'field_user_company',
      1 => 'field_user_department',
      2 => 'field_user_phone',
      3 => 'field_user_position_title',
    ),
    'format_type' => 'div',
    'format_settings' => array(
      'label' => 'Company Info',
      'instance_settings' => array(
        'required_fields' => 1,
        'id' => '',
        'classes' => '',
        'description' => '',
        'show_label' => '1',
        'label_element' => 'h2',
        'effect' => 'none',
        'speed' => 'none',
      ),
      'formatter' => 'open',
    ),
  );
  $export['group_user_company_ino|user|user|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_user_personal_info|user|user|form';
  $field_group->group_name = 'group_user_personal_info';
  $field_group->entity_type = 'user';
  $field_group->bundle = 'user';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Personal Info',
    'weight' => '0',
    'children' => array(
      0 => 'field_user_first_name',
      1 => 'field_user_last_name',
      2 => 'field_user_title',
      3 => 'picture',
    ),
    'format_type' => 'div',
    'format_settings' => array(
      'label' => 'Personal Info',
      'instance_settings' => array(
        'required_fields' => 1,
        'id' => '',
        'classes' => '',
        'description' => '',
        'show_label' => '1',
        'label_element' => 'h2',
        'effect' => 'none',
        'speed' => 'none',
      ),
      'formatter' => 'open',
    ),
  );
  $export['group_user_personal_info|user|user|form'] = $field_group;

  return $export;
}
