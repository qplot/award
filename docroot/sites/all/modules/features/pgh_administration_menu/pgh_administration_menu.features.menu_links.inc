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
    'weight' => -47,
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
    'weight' => -48,
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
    'weight' => -46,
    'customized' => 1,
  );
  // Exported menu link: menu-awards-administration_work-groups:admin/work-groups
  $menu_links['menu-awards-administration_work-groups:admin/work-groups'] = array(
    'menu_name' => 'menu-awards-administration',
    'link_path' => 'admin/work-groups',
    'router_path' => 'admin',
    'link_title' => 'Work Groups',
    'options' => array(
      'attributes' => array(
        'title' => '',
      ),
      'identifier' => 'menu-awards-administration_work-groups:admin/work-groups',
    ),
    'module' => 'menu',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -49,
    'customized' => 1,
  );
  // Translatables
  // Included for use with string extractors like potx.
  t('All Work Groups');
  t('Applications');
  t('Business Units by Work Group');
  t('My PGH Admin Work Groups');
  t('Work Group Administrators');
  t('Work Groups');


  return $menu_links;
}
