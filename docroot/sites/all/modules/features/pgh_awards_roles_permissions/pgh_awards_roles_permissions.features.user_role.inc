<?php
/**
 * @file
 * pgh_awards_roles_permissions.features.user_role.inc
 */

/**
 * Implements hook_user_default_roles().
 */
function pgh_awards_roles_permissions_user_default_roles() {
  $roles = array();

  // Exported role: Reviewer.
  $roles['Reviewer'] = array(
    'name' => 'Reviewer',
    'weight' => 6,
  );

  return $roles;
}
