<?php
/**
 * @file
 * pgh_awards_metric_response_ctype.features.inc
 */

/**
 * Implements hook_node_info().
 */
function pgh_awards_metric_response_ctype_node_info() {
  $items = array(
    'metric_response' => array(
      'name' => t('Metric Response'),
      'base' => 'node_content',
      'description' => t('Use <em>Metric Response</em> to store application metric calculated values.'),
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
  );
  return $items;
}
