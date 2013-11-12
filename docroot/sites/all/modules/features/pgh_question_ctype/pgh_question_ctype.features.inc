<?php
/**
 * @file
 * pgh_question_ctype.features.inc
 */

/**
 * Implements hook_node_info().
 */
function pgh_question_ctype_node_info() {
  $items = array(
    'question' => array(
      'name' => t('Question'),
      'base' => 'node_content',
      'description' => t('Use <em>Question</em> content type to store question settings'),
      'has_title' => '1',
      'title_label' => t('Question ID'),
      'help' => '',
    ),
  );
  return $items;
}
