<?php
/**
 * @file
 * pgh_business_unit_ctype.features.inc
 */

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
      'title_label' => t('Name'),
      'help' => '',
    ),
  );
  return $items;
}
