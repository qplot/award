<?php
/**
 * @file
 * pgh_administration_menu.features.menu_custom.inc
 */

/**
 * Implements hook_menu_default_menu_custom().
 */
function pgh_administration_menu_menu_default_menu_custom() {
  $menus = array();

  // Exported menu: menu-awards-administration.
  $menus['menu-awards-administration'] = array(
    'menu_name' => 'menu-awards-administration',
    'title' => 'Awards Administration',
    'description' => 'Links to Awards System administration pages.',
  );
  // Translatables
  // Included for use with string extractors like potx.
  t('Awards Administration');
  t('Links to Awards System administration pages.');


  return $menus;
}
