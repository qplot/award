<?php
/**
 * @file
 * pgh_work_group_ctype.features.user_permission.inc
 */

/**
 * Implements hook_user_default_permissions().
 */
function pgh_work_group_ctype_user_default_permissions() {
  $permissions = array();

  // Exported permission: 'create field_administrators'.
  $permissions['create field_administrators'] = array(
    'name' => 'create field_administrators',
    'roles' => array(
      'PGH Administrator' => 'PGH Administrator',
      'administrator' => 'administrator',
    ),
    'module' => 'field_permissions',
  );

  // Exported permission: 'create field_business_units'.
  $permissions['create field_business_units'] = array(
    'name' => 'create field_business_units',
    'roles' => array(
      'PGH Administrator' => 'PGH Administrator',
      'administrator' => 'administrator',
    ),
    'module' => 'field_permissions',
  );

  // Exported permission: 'edit field_administrators'.
  $permissions['edit field_administrators'] = array(
    'name' => 'edit field_administrators',
    'roles' => array(
      'PGH Administrator' => 'PGH Administrator',
      'administrator' => 'administrator',
    ),
    'module' => 'field_permissions',
  );

  // Exported permission: 'edit field_business_units'.
  $permissions['edit field_business_units'] = array(
    'name' => 'edit field_business_units',
    'roles' => array(
      'PGH Administrator' => 'PGH Administrator',
      'administrator' => 'administrator',
    ),
    'module' => 'field_permissions',
  );

  // Exported permission: 'edit own field_administrators'.
  $permissions['edit own field_administrators'] = array(
    'name' => 'edit own field_administrators',
    'roles' => array(
      'PGH Administrator' => 'PGH Administrator',
      'administrator' => 'administrator',
    ),
    'module' => 'field_permissions',
  );

  // Exported permission: 'edit own field_business_units'.
  $permissions['edit own field_business_units'] = array(
    'name' => 'edit own field_business_units',
    'roles' => array(
      'PGH Administrator' => 'PGH Administrator',
      'administrator' => 'administrator',
    ),
    'module' => 'field_permissions',
  );

  // Exported permission: 'view field_administrators'.
  $permissions['view field_administrators'] = array(
    'name' => 'view field_administrators',
    'roles' => array(
      'PGH Administrator' => 'PGH Administrator',
      'administrator' => 'administrator',
    ),
    'module' => 'field_permissions',
  );

  // Exported permission: 'view field_business_units'.
  $permissions['view field_business_units'] = array(
    'name' => 'view field_business_units',
    'roles' => array(
      'PGH Administrator' => 'PGH Administrator',
      'administrator' => 'administrator',
    ),
    'module' => 'field_permissions',
  );

  // Exported permission: 'view own field_administrators'.
  $permissions['view own field_administrators'] = array(
    'name' => 'view own field_administrators',
    'roles' => array(
      'PGH Administrator' => 'PGH Administrator',
      'administrator' => 'administrator',
    ),
    'module' => 'field_permissions',
  );

  // Exported permission: 'view own field_business_units'.
  $permissions['view own field_business_units'] = array(
    'name' => 'view own field_business_units',
    'roles' => array(
      'PGH Administrator' => 'PGH Administrator',
      'administrator' => 'administrator',
    ),
    'module' => 'field_permissions',
  );

  return $permissions;
}
