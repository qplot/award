<?php
/**
 * @file
 * pgh_glossary_vocabulary.features.filter.inc
 */

/**
 * Implements hook_filter_default_formats().
 */
function pgh_glossary_vocabulary_filter_default_formats() {
  $formats = array();

  // Exported format: Question Text.
  $formats['question_text'] = array(
    'format' => 'question_text',
    'name' => 'Question Text',
    'cache' => 1,
    'status' => 1,
    'weight' => 0,
    'filters' => array(
      'filter_autop' => array(
        'weight' => -48,
        'status' => 1,
        'settings' => array(),
      ),
      'filter_url' => array(
        'weight' => -47,
        'status' => 1,
        'settings' => array(
          'filter_url_length' => 72,
        ),
      ),
      'filter_htmlcorrector' => array(
        'weight' => -45,
        'status' => 1,
        'settings' => array(),
      ),
      'glossify_taxonomy' => array(
        'weight' => 0,
        'status' => 1,
        'settings' => array(
          'glossify_taxonomy_vocabs' => array(
            2 => 2,
            1 => 0,
          ),
          'glossify_taxonomy_case_sensitivity' => 0,
          'glossify_taxonomy_first_only' => 0,
          'glossify_taxonomy_tooltips' => 1,
        ),
      ),
    ),
  );

  return $formats;
}
