<?php
/**
 * @file
 * pgh_business_unit_ctype.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function pgh_business_unit_ctype_ctools_plugin_api($module = NULL, $api = NULL) {
  if ($module == "field_group" && $api == "field_group") {
    return array("version" => "1");
  }
}

/**
 * Implements hook_node_info().
 */
function pgh_business_unit_ctype_node_info() {
  $items = array(
    'business_unit' => array(
      'name' => t('Business Unit'),
      'base' => 'node_content',
      'description' => '',
      'has_title' => '1',
      'title_label' => t('Business Unit Title'),
      'help' => t('The "Business Unit Title" field is used when this Business Unit is displayed on the website.'),
    ),
  );
  return $items;
}
