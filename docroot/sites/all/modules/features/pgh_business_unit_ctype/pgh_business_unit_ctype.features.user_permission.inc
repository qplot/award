<?php
/**
 * @file
 * pgh_business_unit_ctype.features.user_permission.inc
 */

/**
 * Implements hook_user_default_permissions().
 */
function pgh_business_unit_ctype_user_default_permissions() {
  $permissions = array();

  // Exported permission: 'create field_applications'.
  $permissions['create field_applications'] = array(
    'name' => 'create field_applications',
    'roles' => array(
      'PGH Administrator' => 'PGH Administrator',
      'administrator' => 'administrator',
    ),
    'module' => 'field_permissions',
  );

  // Exported permission: 'create field_business_unit_type'.
  $permissions['create field_business_unit_type'] = array(
    'name' => 'create field_business_unit_type',
    'roles' => array(
      'PGH Administrator' => 'PGH Administrator',
      'administrator' => 'administrator',
    ),
    'module' => 'field_permissions',
  );

  // Exported permission: 'create field_users'.
  $permissions['create field_users'] = array(
    'name' => 'create field_users',
    'roles' => array(
      'PGH Administrator' => 'PGH Administrator',
      'administrator' => 'administrator',
    ),
    'module' => 'field_permissions',
  );

  // Exported permission: 'edit field_applications'.
  $permissions['edit field_applications'] = array(
    'name' => 'edit field_applications',
    'roles' => array(
      'PGH Administrator' => 'PGH Administrator',
      'administrator' => 'administrator',
    ),
    'module' => 'field_permissions',
  );

  // Exported permission: 'edit field_business_unit_type'.
  $permissions['edit field_business_unit_type'] = array(
    'name' => 'edit field_business_unit_type',
    'roles' => array(
      'PGH Administrator' => 'PGH Administrator',
      'administrator' => 'administrator',
    ),
    'module' => 'field_permissions',
  );

  // Exported permission: 'edit field_users'.
  $permissions['edit field_users'] = array(
    'name' => 'edit field_users',
    'roles' => array(
      'PGH Administrator' => 'PGH Administrator',
      'administrator' => 'administrator',
    ),
    'module' => 'field_permissions',
  );

  // Exported permission: 'edit own field_applications'.
  $permissions['edit own field_applications'] = array(
    'name' => 'edit own field_applications',
    'roles' => array(
      'PGH Administrator' => 'PGH Administrator',
      'administrator' => 'administrator',
    ),
    'module' => 'field_permissions',
  );

  // Exported permission: 'edit own field_business_unit_type'.
  $permissions['edit own field_business_unit_type'] = array(
    'name' => 'edit own field_business_unit_type',
    'roles' => array(
      'PGH Administrator' => 'PGH Administrator',
      'administrator' => 'administrator',
    ),
    'module' => 'field_permissions',
  );

  // Exported permission: 'edit own field_users'.
  $permissions['edit own field_users'] = array(
    'name' => 'edit own field_users',
    'roles' => array(
      'PGH Administrator' => 'PGH Administrator',
      'administrator' => 'administrator',
    ),
    'module' => 'field_permissions',
  );

  // Exported permission: 'view field_applications'.
  $permissions['view field_applications'] = array(
    'name' => 'view field_applications',
    'roles' => array(
      'PGH Administrator' => 'PGH Administrator',
      'administrator' => 'administrator',
    ),
    'module' => 'field_permissions',
  );

  // Exported permission: 'view field_business_unit_type'.
  $permissions['view field_business_unit_type'] = array(
    'name' => 'view field_business_unit_type',
    'roles' => array(
      'Client Administrator' => 'Client Administrator',
      'PGH Administrator' => 'PGH Administrator',
      'administrator' => 'administrator',
    ),
    'module' => 'field_permissions',
  );

  // Exported permission: 'view field_users'.
  $permissions['view field_users'] = array(
    'name' => 'view field_users',
    'roles' => array(
      'PGH Administrator' => 'PGH Administrator',
      'administrator' => 'administrator',
    ),
    'module' => 'field_permissions',
  );

  // Exported permission: 'view own field_applications'.
  $permissions['view own field_applications'] = array(
    'name' => 'view own field_applications',
    'roles' => array(
      'PGH Administrator' => 'PGH Administrator',
      'administrator' => 'administrator',
    ),
    'module' => 'field_permissions',
  );

  // Exported permission: 'view own field_business_unit_type'.
  $permissions['view own field_business_unit_type'] = array(
    'name' => 'view own field_business_unit_type',
    'roles' => array(
      'Client Administrator' => 'Client Administrator',
      'PGH Administrator' => 'PGH Administrator',
      'administrator' => 'administrator',
    ),
    'module' => 'field_permissions',
  );

  // Exported permission: 'view own field_users'.
  $permissions['view own field_users'] = array(
    'name' => 'view own field_users',
    'roles' => array(
      'PGH Administrator' => 'PGH Administrator',
      'administrator' => 'administrator',
    ),
    'module' => 'field_permissions',
  );

  return $permissions;
}
