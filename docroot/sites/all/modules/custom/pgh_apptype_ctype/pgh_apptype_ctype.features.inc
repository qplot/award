<?php
/**
 * @file
 * pgh_apptype_ctype.features.inc
 */

/**
 * Implements hook_node_info().
 */
function pgh_apptype_ctype_node_info() {
  $items = array(
    'apptype' => array(
      'name' => t('Application Type'),
      'base' => 'node_content',
      'description' => t('Use <em>Application Type</em> to store application type setting'),
      'has_title' => '1',
      'title_label' => t('Application Type ID'),
      'help' => '',
    ),
  );
  return $items;
}
