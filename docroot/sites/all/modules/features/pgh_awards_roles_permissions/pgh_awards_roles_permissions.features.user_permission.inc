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

  // Exported permission: 'access administration menu'.
  $permissions['access administration menu'] = array(
    'name' => 'access administration menu',
    'roles' => array(
      'PGH Administrator' => 'PGH Administrator',
      'administrator' => 'administrator',
    ),
    'module' => 'admin_menu',
  );

  // Exported permission: 'access administration pages'.
  $permissions['access administration pages'] = array(
    'name' => 'access administration pages',
    'roles' => array(
      'PGH Administrator' => 'PGH Administrator',
      'administrator' => 'administrator',
    ),
    'module' => 'system',
  );

  // Exported permission: 'access comments'.
  $permissions['access comments'] = array(
    'name' => 'access comments',
    'roles' => array(
      'administrator' => 'administrator',
      'anonymous user' => 'anonymous user',
      'authenticated user' => 'authenticated user',
    ),
    'module' => 'comment',
  );

  // Exported permission: 'access content'.
  $permissions['access content'] = array(
    'name' => 'access content',
    'roles' => array(
      'administrator' => 'administrator',
      'anonymous user' => 'anonymous user',
      'authenticated user' => 'authenticated user',
    ),
    'module' => 'node',
  );

  // Exported permission: 'access content overview'.
  $permissions['access content overview'] = array(
    'name' => 'access content overview',
    'roles' => array(
      'PGH Administrator' => 'PGH Administrator',
      'administrator' => 'administrator',
    ),
    'module' => 'node',
  );

  // Exported permission: 'access dashboard'.
  $permissions['access dashboard'] = array(
    'name' => 'access dashboard',
    'roles' => array(
      'PGH Administrator' => 'PGH Administrator',
      'administrator' => 'administrator',
    ),
    'module' => 'dashboard',
  );

  // Exported permission: 'access site in maintenance mode'.
  $permissions['access site in maintenance mode'] = array(
    'name' => 'access site in maintenance mode',
    'roles' => array(
      'PGH Administrator' => 'PGH Administrator',
      'administrator' => 'administrator',
    ),
    'module' => 'system',
  );

  // Exported permission: 'access site reports'.
  $permissions['access site reports'] = array(
    'name' => 'access site reports',
    'roles' => array(
      'PGH Administrator' => 'PGH Administrator',
      'administrator' => 'administrator',
    ),
    'module' => 'system',
  );

  // Exported permission: 'access user profiles'.
  $permissions['access user profiles'] = array(
    'name' => 'access user profiles',
    'roles' => array(
      'Business Unit User' => 'Business Unit User',
      'Client Administrator' => 'Client Administrator',
      'PGH Administrator' => 'PGH Administrator',
      'administrator' => 'administrator',
    ),
    'module' => 'user',
  );

  // Exported permission: 'administer awards system'.
  $permissions['administer awards system'] = array(
    'name' => 'administer awards system',
    'roles' => array(
      'PGH Administrator' => 'PGH Administrator',
      'administrator' => 'administrator',
    ),
    'module' => 'pgh_permissions',
  );

  // Exported permission: 'administer blocks'.
  $permissions['administer blocks'] = array(
    'name' => 'administer blocks',
    'roles' => array(
      'PGH Administrator' => 'PGH Administrator',
      'administrator' => 'administrator',
    ),
    'module' => 'block',
  );

  // Exported permission: 'administer nodes'.
  $permissions['administer nodes'] = array(
    'name' => 'administer nodes',
    'roles' => array(
      'PGH Administrator' => 'PGH Administrator',
      'administrator' => 'administrator',
    ),
    'module' => 'node',
  );

  // Exported permission: 'administer permissions'.
  $permissions['administer permissions'] = array(
    'name' => 'administer permissions',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'user',
  );

  // Exported permission: 'administer taxonomy'.
  $permissions['administer taxonomy'] = array(
    'name' => 'administer taxonomy',
    'roles' => array(
      'PGH Administrator' => 'PGH Administrator',
      'administrator' => 'administrator',
    ),
    'module' => 'taxonomy',
  );

  // Exported permission: 'administer users'.
  $permissions['administer users'] = array(
    'name' => 'administer users',
    'roles' => array(
      'PGH Administrator' => 'PGH Administrator',
      'administrator' => 'administrator',
    ),
    'module' => 'user',
  );

  // Exported permission: 'assign Business Unit User role'.
  $permissions['assign Business Unit User role'] = array(
    'name' => 'assign Business Unit User role',
    'roles' => array(
      'PGH Administrator' => 'PGH Administrator',
      'administrator' => 'administrator',
    ),
    'module' => 'role_delegation',
  );

  // Exported permission: 'assign Client Administrator role'.
  $permissions['assign Client Administrator role'] = array(
    'name' => 'assign Client Administrator role',
    'roles' => array(
      'PGH Administrator' => 'PGH Administrator',
      'administrator' => 'administrator',
    ),
    'module' => 'role_delegation',
  );

  // Exported permission: 'create application content'.
  $permissions['create application content'] = array(
    'name' => 'create application content',
    'roles' => array(
      'Client Administrator' => 'Client Administrator',
      'PGH Administrator' => 'PGH Administrator',
    ),
    'module' => 'node',
  );

  // Exported permission: 'create business_unit content'.
  $permissions['create business_unit content'] = array(
    'name' => 'create business_unit content',
    'roles' => array(
      'PGH Administrator' => 'PGH Administrator',
    ),
    'module' => 'node',
  );

  // Exported permission: 'create field_business_unit_sfid'.
  $permissions['create field_business_unit_sfid'] = array(
    'name' => 'create field_business_unit_sfid',
    'roles' => array(
      'PGH Administrator' => 'PGH Administrator',
      'administrator' => 'administrator',
    ),
    'module' => 'field_permissions',
  );

  // Exported permission: 'create files'.
  $permissions['create files'] = array(
    'name' => 'create files',
    'roles' => array(
      'Business Unit User' => 'Business Unit User',
      'Client Administrator' => 'Client Administrator',
      'PGH Administrator' => 'PGH Administrator',
      'administrator' => 'administrator',
    ),
    'module' => 'file_entity',
  );

  // Exported permission: 'create work_group content'.
  $permissions['create work_group content'] = array(
    'name' => 'create work_group content',
    'roles' => array(
      'PGH Administrator' => 'PGH Administrator',
    ),
    'module' => 'node',
  );

  // Exported permission: 'delete any business_unit content'.
  $permissions['delete any business_unit content'] = array(
    'name' => 'delete any business_unit content',
    'roles' => array(
      'PGH Administrator' => 'PGH Administrator',
    ),
    'module' => 'node',
  );

  // Exported permission: 'delete any category content'.
  $permissions['delete any category content'] = array(
    'name' => 'delete any category content',
    'roles' => array(),
    'module' => 'node',
  );

  // Exported permission: 'delete any work_group content'.
  $permissions['delete any work_group content'] = array(
    'name' => 'delete any work_group content',
    'roles' => array(
      'PGH Administrator' => 'PGH Administrator',
    ),
    'module' => 'node',
  );

  // Exported permission: 'delete own business_unit content'.
  $permissions['delete own business_unit content'] = array(
    'name' => 'delete own business_unit content',
    'roles' => array(
      'PGH Administrator' => 'PGH Administrator',
    ),
    'module' => 'node',
  );

  // Exported permission: 'delete own category content'.
  $permissions['delete own category content'] = array(
    'name' => 'delete own category content',
    'roles' => array(),
    'module' => 'node',
  );

  // Exported permission: 'delete own work_group content'.
  $permissions['delete own work_group content'] = array(
    'name' => 'delete own work_group content',
    'roles' => array(
      'PGH Administrator' => 'PGH Administrator',
    ),
    'module' => 'node',
  );

  // Exported permission: 'delete terms in tags'.
  $permissions['delete terms in tags'] = array(
    'name' => 'delete terms in tags',
    'roles' => array(
      'PGH Administrator' => 'PGH Administrator',
      'administrator' => 'administrator',
    ),
    'module' => 'taxonomy',
  );

  // Exported permission: 'download any document files'.
  $permissions['download any document files'] = array(
    'name' => 'download any document files',
    'roles' => array(
      'PGH Administrator' => 'PGH Administrator',
      'Reviewer' => 'Reviewer',
      'administrator' => 'administrator',
    ),
    'module' => 'file_entity',
  );

  // Exported permission: 'download any image files'.
  $permissions['download any image files'] = array(
    'name' => 'download any image files',
    'roles' => array(
      'PGH Administrator' => 'PGH Administrator',
      'Reviewer' => 'Reviewer',
      'administrator' => 'administrator',
    ),
    'module' => 'file_entity',
  );

  // Exported permission: 'download own document files'.
  $permissions['download own document files'] = array(
    'name' => 'download own document files',
    'roles' => array(
      'PGH Administrator' => 'PGH Administrator',
      'administrator' => 'administrator',
    ),
    'module' => 'file_entity',
  );

  // Exported permission: 'download own image files'.
  $permissions['download own image files'] = array(
    'name' => 'download own image files',
    'roles' => array(
      'PGH Administrator' => 'PGH Administrator',
      'administrator' => 'administrator',
    ),
    'module' => 'file_entity',
  );

  // Exported permission: 'edit any application content'.
  $permissions['edit any application content'] = array(
    'name' => 'edit any application content',
    'roles' => array(
      'PGH Administrator' => 'PGH Administrator',
    ),
    'module' => 'node',
  );

  // Exported permission: 'edit any business_unit content'.
  $permissions['edit any business_unit content'] = array(
    'name' => 'edit any business_unit content',
    'roles' => array(
      'PGH Administrator' => 'PGH Administrator',
    ),
    'module' => 'node',
  );

  // Exported permission: 'edit any page content'.
  $permissions['edit any page content'] = array(
    'name' => 'edit any page content',
    'roles' => array(
      'PGH Administrator' => 'PGH Administrator',
      'administrator' => 'administrator',
    ),
    'module' => 'node',
  );

  // Exported permission: 'edit any response content'.
  $permissions['edit any response content'] = array(
    'name' => 'edit any response content',
    'roles' => array(
      'PGH Administrator' => 'PGH Administrator',
    ),
    'module' => 'node',
  );

  // Exported permission: 'edit any work_group content'.
  $permissions['edit any work_group content'] = array(
    'name' => 'edit any work_group content',
    'roles' => array(
      'PGH Administrator' => 'PGH Administrator',
    ),
    'module' => 'node',
  );

  // Exported permission: 'edit field_business_unit_sfid'.
  $permissions['edit field_business_unit_sfid'] = array(
    'name' => 'edit field_business_unit_sfid',
    'roles' => array(
      'PGH Administrator' => 'PGH Administrator',
      'administrator' => 'administrator',
    ),
    'module' => 'field_permissions',
  );

  // Exported permission: 'edit own application content'.
  $permissions['edit own application content'] = array(
    'name' => 'edit own application content',
    'roles' => array(
      'Client Administrator' => 'Client Administrator',
      'PGH Administrator' => 'PGH Administrator',
    ),
    'module' => 'node',
  );

  // Exported permission: 'edit own business_unit content'.
  $permissions['edit own business_unit content'] = array(
    'name' => 'edit own business_unit content',
    'roles' => array(
      'Client Administrator' => 'Client Administrator',
      'PGH Administrator' => 'PGH Administrator',
    ),
    'module' => 'node',
  );

  // Exported permission: 'edit own field_business_unit_sfid'.
  $permissions['edit own field_business_unit_sfid'] = array(
    'name' => 'edit own field_business_unit_sfid',
    'roles' => array(
      'PGH Administrator' => 'PGH Administrator',
      'administrator' => 'administrator',
    ),
    'module' => 'field_permissions',
  );

  // Exported permission: 'edit own page content'.
  $permissions['edit own page content'] = array(
    'name' => 'edit own page content',
    'roles' => array(
      'PGH Administrator' => 'PGH Administrator',
      'administrator' => 'administrator',
    ),
    'module' => 'node',
  );

  // Exported permission: 'edit own response content'.
  $permissions['edit own response content'] = array(
    'name' => 'edit own response content',
    'roles' => array(
      'PGH Administrator' => 'PGH Administrator',
    ),
    'module' => 'node',
  );

  // Exported permission: 'edit own work_group content'.
  $permissions['edit own work_group content'] = array(
    'name' => 'edit own work_group content',
    'roles' => array(
      'PGH Administrator' => 'PGH Administrator',
    ),
    'module' => 'node',
  );

  // Exported permission: 'edit terms in tags'.
  $permissions['edit terms in tags'] = array(
    'name' => 'edit terms in tags',
    'roles' => array(
      'PGH Administrator' => 'PGH Administrator',
      'administrator' => 'administrator',
    ),
    'module' => 'taxonomy',
  );

  // Exported permission: 'import media'.
  $permissions['import media'] = array(
    'name' => 'import media',
    'roles' => array(
      'PGH Administrator' => 'PGH Administrator',
      'administrator' => 'administrator',
    ),
    'module' => 'media',
  );

  // Exported permission: 'invite users business unit'.
  $permissions['invite users business unit'] = array(
    'name' => 'invite users business unit',
    'roles' => array(
      'Client Administrator' => 'Client Administrator',
      'PGH Administrator' => 'PGH Administrator',
      'administrator' => 'administrator',
    ),
    'module' => 'pgh_user_invite',
  );

  // Exported permission: 'post comments'.
  $permissions['post comments'] = array(
    'name' => 'post comments',
    'roles' => array(
      'administrator' => 'administrator',
      'authenticated user' => 'authenticated user',
    ),
    'module' => 'comment',
  );

  // Exported permission: 'review awards application'.
  $permissions['review awards application'] = array(
    'name' => 'review awards application',
    'roles' => array(
      'Reviewer' => 'Reviewer',
      'administrator' => 'administrator',
    ),
    'module' => 'pgh_awards_review',
  );

  // Exported permission: 'skip comment approval'.
  $permissions['skip comment approval'] = array(
    'name' => 'skip comment approval',
    'roles' => array(
      'administrator' => 'administrator',
      'authenticated user' => 'authenticated user',
    ),
    'module' => 'comment',
  );

  // Exported permission: 'use text format filtered_html'.
  $permissions['use text format filtered_html'] = array(
    'name' => 'use text format filtered_html',
    'roles' => array(
      'administrator' => 'administrator',
      'anonymous user' => 'anonymous user',
      'authenticated user' => 'authenticated user',
    ),
    'module' => 'filter',
  );

  // Exported permission: 'view field_business_unit_sfid'.
  $permissions['view field_business_unit_sfid'] = array(
    'name' => 'view field_business_unit_sfid',
    'roles' => array(
      'PGH Administrator' => 'PGH Administrator',
      'administrator' => 'administrator',
    ),
    'module' => 'field_permissions',
  );

  // Exported permission: 'view files'.
  $permissions['view files'] = array(
    'name' => 'view files',
    'roles' => array(
      'PGH Administrator' => 'PGH Administrator',
      'administrator' => 'administrator',
      'anonymous user' => 'anonymous user',
      'authenticated user' => 'authenticated user',
    ),
    'module' => 'file_entity',
  );

  // Exported permission: 'view own field_business_unit_sfid'.
  $permissions['view own field_business_unit_sfid'] = array(
    'name' => 'view own field_business_unit_sfid',
    'roles' => array(
      'PGH Administrator' => 'PGH Administrator',
      'administrator' => 'administrator',
    ),
    'module' => 'field_permissions',
  );

  // Exported permission: 'view own files'.
  $permissions['view own files'] = array(
    'name' => 'view own files',
    'roles' => array(
      'PGH Administrator' => 'PGH Administrator',
      'administrator' => 'administrator',
    ),
    'module' => 'file_entity',
  );

  // Exported permission: 'view own private files'.
  $permissions['view own private files'] = array(
    'name' => 'view own private files',
    'roles' => array(
      'PGH Administrator' => 'PGH Administrator',
      'administrator' => 'administrator',
    ),
    'module' => 'file_entity',
  );

  // Exported permission: 'view private files'.
  $permissions['view private files'] = array(
    'name' => 'view private files',
    'roles' => array(
      'PGH Administrator' => 'PGH Administrator',
      'administrator' => 'administrator',
    ),
    'module' => 'file_entity',
  );

  // Exported permission: 'view the administration theme'.
  $permissions['view the administration theme'] = array(
    'name' => 'view the administration theme',
    'roles' => array(
      'PGH Administrator' => 'PGH Administrator',
      'administrator' => 'administrator',
    ),
    'module' => 'system',
  );

  return $permissions;
}
