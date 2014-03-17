<?php
/**
 * @file
 * pgh_awards_metric_ctype.features.inc
 */

/**
 * Implements hook_node_info().
 */
function pgh_awards_metric_ctype_node_info() {
  $items = array(
    'metric' => array(
      'name' => t('Metric'),
      'base' => 'node_content',
      'description' => t('Use <em>Metric</em> to document spec of each metric calculation formulas'),
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
  );
  return $items;
}
