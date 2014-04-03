<?php
/**
 * @file
 * pgh_awards_designation_vocabulary.features.field_instance.inc
 */

/**
 * Implements hook_field_default_field_instances().
 */
function pgh_awards_designation_vocabulary_field_default_field_instances() {
  $field_instances = array();

  // Exported field_instance: 'taxonomy_term-award_designation-field_designation_suggested'
  $field_instances['taxonomy_term-award_designation-field_designation_suggested'] = array(
    'bundle' => 'award_designation',
    'default_value' => array(
      0 => array(
        'value' => 0,
      ),
    ),
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'list',
        'settings' => array(),
        'type' => 'list_default',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'taxonomy_term',
    'field_name' => 'field_designation_suggested',
    'label' => 'Suggested',
    'required' => 0,
    'settings' => array(
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'options',
      'settings' => array(
        'display_label' => 1,
      ),
      'type' => 'options_onoff',
      'weight' => 1,
    ),
  );

  // Translatables
  // Included for use with string extractors like potx.
  t('Suggested');

  return $field_instances;
}
