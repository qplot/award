<?php
/**
 * @file
 * pgh_work_group_ctype.features.inc
 */

/**
 * Implements hook_node_info().
 */
function pgh_work_group_ctype_node_info() {
  $items = array(
    'work_group' => array(
      'name' => t('Work Group'),
      'base' => 'node_content',
      'description' => '',
      'has_title' => '1',
      'title_label' => t('Name'),
      'help' => '',
    ),
  );
  return $items;
}
