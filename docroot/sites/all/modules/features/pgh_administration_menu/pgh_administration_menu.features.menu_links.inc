<?php
/**
 * @file
 * pgh_administration_menu.features.menu_links.inc
 */

/**
 * Implements hook_menu_default_menu_links().
 */
function pgh_administration_menu_menu_default_menu_links() {
  $menu_links = array();

  // Exported menu link: menu-awards-administration_all-work-groups:admin/work-groups
  $menu_links['menu-awards-administration_all-work-groups:admin/work-groups'] = array(
    'menu_name' => 'menu-awards-administration',
    'link_path' => 'admin/work-groups',
    'router_path' => 'admin/work-groups',
    'link_title' => 'All Work Groups',
    'options' => array(
      'attributes' => array(
        'title' => '',
      ),
      'identifier' => 'menu-awards-administration_all-work-groups:admin/work-groups',
    ),
    'module' => 'menu',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -50,
    'customized' => 1,
  );
  // Exported menu link: menu-awards-administration_application-types:admin/apptypes
  $menu_links['menu-awards-administration_application-types:admin/apptypes'] = array(
    'menu_name' => 'menu-awards-administration',
    'link_path' => 'admin/apptypes',
    'router_path' => 'admin/apptypes',
    'link_title' => 'Application Types',
    'options' => array(
      'attributes' => array(
        'title' => '',
      ),
      'identifier' => 'menu-awards-administration_application-types:admin/apptypes',
    ),
    'module' => 'menu',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -46,
    'customized' => 1,
  );
  // Exported menu link: menu-awards-administration_applications:admin/applications
  $menu_links['menu-awards-administration_applications:admin/applications'] = array(
    'menu_name' => 'menu-awards-administration',
    'link_path' => 'admin/applications',
    'router_path' => 'admin/applications',
    'link_title' => 'Applications',
    'options' => array(
      'attributes' => array(
        'title' => '',
      ),
      'identifier' => 'menu-awards-administration_applications:admin/applications',
    ),
    'module' => 'menu',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -45,
    'customized' => 1,
  );
  // Exported menu link: menu-awards-administration_business-units-by-work-group:admin/work-groups-and-business-units
  $menu_links['menu-awards-administration_business-units-by-work-group:admin/work-groups-and-business-units'] = array(
    'menu_name' => 'menu-awards-administration',
    'link_path' => 'admin/work-groups-and-business-units',
    'router_path' => 'admin/work-groups-and-business-units',
    'link_title' => 'Business Units by Work Group',
    'options' => array(
      'attributes' => array(
        'title' => '',
      ),
      'identifier' => 'menu-awards-administration_business-units-by-work-group:admin/work-groups-and-business-units',
    ),
    'module' => 'menu',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -48,
    'customized' => 1,
  );
  // Exported menu link: menu-awards-administration_metrics:admin/metric
  $menu_links['menu-awards-administration_metrics:admin/metric'] = array(
    'menu_name' => 'menu-awards-administration',
    'link_path' => 'admin/metric',
    'router_path' => 'admin/metric',
    'link_title' => 'Metrics',
    'options' => array(
      'attributes' => array(
        'title' => '',
      ),
      'identifier' => 'menu-awards-administration_metrics:admin/metric',
    ),
    'module' => 'menu',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -43,
    'customized' => 1,
  );
  // Exported menu link: menu-awards-administration_my-pgh-admin-work-groups:admin/my-pgh-work-groups
  $menu_links['menu-awards-administration_my-pgh-admin-work-groups:admin/my-pgh-work-groups'] = array(
    'menu_name' => 'menu-awards-administration',
    'link_path' => 'admin/my-pgh-work-groups',
    'router_path' => 'admin',
    'link_title' => 'My PGH Admin Work Groups',
    'options' => array(
      'attributes' => array(
        'title' => '',
      ),
      'identifier' => 'menu-awards-administration_my-pgh-admin-work-groups:admin/my-pgh-work-groups',
    ),
    'module' => 'menu',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -49,
    'customized' => 1,
  );
  // Exported menu link: menu-awards-administration_reviewers:admin/reviewers
  $menu_links['menu-awards-administration_reviewers:admin/reviewers'] = array(
    'menu_name' => 'menu-awards-administration',
    'link_path' => 'admin/reviewers',
    'router_path' => 'admin/reviewers',
    'link_title' => 'Reviewers',
    'options' => array(
      'attributes' => array(
        'title' => '',
      ),
      'identifier' => 'menu-awards-administration_reviewers:admin/reviewers',
    ),
    'module' => 'menu',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -44,
    'customized' => 1,
  );
  // Exported menu link: menu-awards-administration_user-business-units:admin/user-business-units
  $menu_links['menu-awards-administration_user-business-units:admin/user-business-units'] = array(
    'menu_name' => 'menu-awards-administration',
    'link_path' => 'admin/user-business-units',
    'router_path' => 'admin/user-business-units',
    'link_title' => 'User Business Units',
    'options' => array(
      'attributes' => array(
        'title' => 'Allows PGH Admins to view users and the business units they are in. Allows filtering by user email address.',
      ),
      'identifier' => 'menu-awards-administration_user-business-units:admin/user-business-units',
    ),
    'module' => 'menu',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -42,
    'customized' => 1,
  );
  // Exported menu link: menu-awards-administration_user-work-groups:admin/user-work-groups
  $menu_links['menu-awards-administration_user-work-groups:admin/user-work-groups'] = array(
    'menu_name' => 'menu-awards-administration',
    'link_path' => 'admin/user-work-groups',
    'router_path' => 'admin/user-work-groups',
    'link_title' => 'User Work Groups',
    'options' => array(
      'attributes' => array(
        'title' => 'Allow PGH Admins to view users and see what workgroups they are in. Allows filtering by user email address.',
      ),
      'identifier' => 'menu-awards-administration_user-work-groups:admin/user-work-groups',
    ),
    'module' => 'menu',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -41,
    'customized' => 1,
  );
  // Exported menu link: menu-awards-administration_work-group-administrators:admin/work-group-administrators
  $menu_links['menu-awards-administration_work-group-administrators:admin/work-group-administrators'] = array(
    'menu_name' => 'menu-awards-administration',
    'link_path' => 'admin/work-group-administrators',
    'router_path' => 'admin/work-group-administrators',
    'link_title' => 'Work Group Administrators',
    'options' => array(
      'attributes' => array(
        'title' => '',
      ),
      'identifier' => 'menu-awards-administration_work-group-administrators:admin/work-group-administrators',
    ),
    'module' => 'menu',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -47,
    'customized' => 1,
  );
  // Translatables
  // Included for use with string extractors like potx.
  t('All Work Groups');
  t('Application Types');
  t('Applications');
  t('Business Units by Work Group');
  t('Metrics');
  t('My PGH Admin Work Groups');
  t('Reviewers');
  t('User Business Units');
  t('User Work Groups');
  t('Work Group Administrators');


  return $menu_links;
}
