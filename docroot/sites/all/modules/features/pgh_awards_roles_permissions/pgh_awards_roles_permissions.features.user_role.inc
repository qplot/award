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

  // Exported role: Business Unit User.
  $roles['Business Unit User'] = array(
    'name' => 'Business Unit User',
    'weight' => 2,
  );

  // Exported role: Client Administrator.
  $roles['Client Administrator'] = array(
    'name' => 'Client Administrator',
    'weight' => 3,
  );

  // Exported role: PGH Administrator.
  $roles['PGH Administrator'] = array(
    'name' => 'PGH Administrator',
    'weight' => 4,
  );

  // Exported role: Reviewer.
  $roles['Reviewer'] = array(
    'name' => 'Reviewer',
    'weight' => 6,
  );

  return $roles;
}
