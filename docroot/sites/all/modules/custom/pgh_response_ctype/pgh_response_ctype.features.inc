<?php
/**
 * @file
 * pgh_response_ctype.features.inc
 */

/**
 * Implements hook_node_info().
 */
function pgh_response_ctype_node_info() {
  $items = array(
    'response' => array(
      'name' => t('Response'),
      'base' => 'node_content',
      'description' => t('Use <em>Response</em> to store pre-populate or store answers of questions'),
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
  );
  return $items;
}
