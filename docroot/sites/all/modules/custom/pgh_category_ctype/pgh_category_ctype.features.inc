<?php
/**
 * @file
 * pgh_category_ctype.features.inc
 */

/**
 * Implements hook_node_info().
 */
function pgh_category_ctype_node_info() {
  $items = array(
    'category' => array(
      'name' => t('Category'),
      'base' => 'node_content',
      'description' => t('Use <em>Category</em> content type to store bundled list of sections'),
      'has_title' => '1',
      'title_label' => t('Category ID'),
      'help' => '',
    ),
  );
  return $items;
}
