<?php
/**
 * @file
 * pgh_section_ctype.features.inc
 */

/**
 * Implements hook_node_info().
 */
function pgh_section_ctype_node_info() {
  $items = array(
    'section' => array(
      'name' => t('Section'),
      'base' => 'node_content',
      'description' => t('Use <em>Section</em> content type to store sections info for pages of application type.'),
      'has_title' => '1',
      'title_label' => t('Section ID'),
      'help' => '',
    ),
  );
  return $items;
}
