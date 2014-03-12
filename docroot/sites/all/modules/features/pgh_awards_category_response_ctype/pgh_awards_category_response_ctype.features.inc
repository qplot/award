<?php
/**
 * @file
 * pgh_awards_category_response_ctype.features.inc
 */

/**
 * Implements hook_node_info().
 */
function pgh_awards_category_response_ctype_node_info() {
  $items = array(
    'category_response' => array(
      'name' => t('Category Response'),
      'base' => 'node_content',
      'description' => t('Use <em>Category Response</em> to capture summary of points for each category of questions'),
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
  );
  return $items;
}
