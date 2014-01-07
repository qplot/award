<?php
/**
 * @file
 * pgh_apptype_ctype.features.user_permission.inc
 */

/**
 * Implements hook_user_default_permissions().
 */
function pgh_apptype_ctype_user_default_permissions() {
  $permissions = array();

  // Exported permission: 'create field_category_progress'.
  $permissions['create field_category_progress'] = array(
    'name' => 'create field_category_progress',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'field_permissions',
  );

  // Exported permission: 'edit field_category_progress'.
  $permissions['edit field_category_progress'] = array(
    'name' => 'edit field_category_progress',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'field_permissions',
  );

  // Exported permission: 'edit own field_category_progress'.
  $permissions['edit own field_category_progress'] = array(
    'name' => 'edit own field_category_progress',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'field_permissions',
  );

  // Exported permission: 'view field_category_progress'.
  $permissions['view field_category_progress'] = array(
    'name' => 'view field_category_progress',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'field_permissions',
  );

  // Exported permission: 'view own field_category_progress'.
  $permissions['view own field_category_progress'] = array(
    'name' => 'view own field_category_progress',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'field_permissions',
  );

  return $permissions;
}
