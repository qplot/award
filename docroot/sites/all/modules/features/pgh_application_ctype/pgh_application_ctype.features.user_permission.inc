<?php
/**
 * @file
 * pgh_application_ctype.features.user_permission.inc
 */

/**
 * Implements hook_user_default_permissions().
 */
function pgh_application_ctype_user_default_permissions() {
  $permissions = array();

  // Exported permission: 'create field_application_status'.
  $permissions['create field_application_status'] = array(
    'name' => 'create field_application_status',
    'roles' => array(
      'Client Administrator' => 'Client Administrator',
      'PGH Administrator' => 'PGH Administrator',
      'administrator' => 'administrator',
    ),
    'module' => 'field_permissions',
  );

  // Exported permission: 'edit field_application_status'.
  $permissions['edit field_application_status'] = array(
    'name' => 'edit field_application_status',
    'roles' => array(
      'PGH Administrator' => 'PGH Administrator',
      'administrator' => 'administrator',
    ),
    'module' => 'field_permissions',
  );

  // Exported permission: 'edit own field_application_status'.
  $permissions['edit own field_application_status'] = array(
    'name' => 'edit own field_application_status',
    'roles' => array(
      'PGH Administrator' => 'PGH Administrator',
      'administrator' => 'administrator',
    ),
    'module' => 'field_permissions',
  );

  // Exported permission: 'view field_application_status'.
  $permissions['view field_application_status'] = array(
    'name' => 'view field_application_status',
    'roles' => array(
      'Client Administrator' => 'Client Administrator',
      'PGH Administrator' => 'PGH Administrator',
      'administrator' => 'administrator',
    ),
    'module' => 'field_permissions',
  );

  // Exported permission: 'view own field_application_status'.
  $permissions['view own field_application_status'] = array(
    'name' => 'view own field_application_status',
    'roles' => array(
      'Client Administrator' => 'Client Administrator',
      'PGH Administrator' => 'PGH Administrator',
      'administrator' => 'administrator',
    ),
    'module' => 'field_permissions',
  );

  return $permissions;
}
