<?php
/**
 * @file
 * pgh_awards_roles_permissions.features.user_permission.inc
 */

/**
 * Implements hook_user_default_permissions().
 */
function pgh_awards_roles_permissions_user_default_permissions() {
  $permissions = array();

  // Exported permission: 'review awards application'.
  $permissions['review awards application'] = array(
    'name' => 'review awards application',
    'roles' => array(
      'Reviewer' => 'Reviewer',
      'administrator' => 'administrator',
    ),
    'module' => 'pgh_awards_review',
  );

  return $permissions;
}
