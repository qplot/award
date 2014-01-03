<?php
/**
 * @file
 * pgh_user_profile.features.user_permission.inc
 */

/**
 * Implements hook_user_default_permissions().
 */
function pgh_user_profile_user_default_permissions() {
  $permissions = array();

  // Exported permission: 'create field_user_sfid'.
  $permissions['create field_user_sfid'] = array(
    'name' => 'create field_user_sfid',
    'roles' => array(
      'administrator' => 'administrator',
      'anonymous user' => 'anonymous user',
    ),
    'module' => 'field_permissions',
  );

  // Exported permission: 'edit field_user_sfid'.
  $permissions['edit field_user_sfid'] = array(
    'name' => 'edit field_user_sfid',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'field_permissions',
  );

  // Exported permission: 'edit own field_user_sfid'.
  $permissions['edit own field_user_sfid'] = array(
    'name' => 'edit own field_user_sfid',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'field_permissions',
  );

  // Exported permission: 'view field_user_sfid'.
  $permissions['view field_user_sfid'] = array(
    'name' => 'view field_user_sfid',
    'roles' => array(
      'PGH Administrator' => 'PGH Administrator',
      'administrator' => 'administrator',
    ),
    'module' => 'field_permissions',
  );

  // Exported permission: 'view own field_user_sfid'.
  $permissions['view own field_user_sfid'] = array(
    'name' => 'view own field_user_sfid',
    'roles' => array(
      'PGH Administrator' => 'PGH Administrator',
      'administrator' => 'administrator',
    ),
    'module' => 'field_permissions',
  );

  return $permissions;
}
