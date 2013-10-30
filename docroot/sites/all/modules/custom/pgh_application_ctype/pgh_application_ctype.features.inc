<?php
/**
 * @file
 * pgh_application_ctype.features.inc
 */

/**
 * Implements hook_node_info().
 */
function pgh_application_ctype_node_info() {
  $items = array(
    'application' => array(
      'name' => t('Application'),
      'base' => 'node_content',
      'description' => t('Use <em>Application</em> to store each individual active application.'),
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
  );
  return $items;
}
