<?php
/**
 * @file
 * pgh_business_unit_ctype.features.field_base.inc
 */

/**
 * Implements hook_field_default_field_bases().
 */
function pgh_business_unit_ctype_field_default_field_bases() {
  $field_bases = array();

  // Exported field_base: 'field_business_unit_type'
  $field_bases['field_business_unit_type'] = array(
    'active' => 1,
    'cardinality' => 1,
    'deleted' => 0,
    'entity_types' => array(),
    'field_name' => 'field_business_unit_type',
    'foreign keys' => array(),
    'indexes' => array(
      'value' => array(
        0 => 'value',
      ),
    ),
    'locked' => 0,
    'module' => 'list',
    'settings' => array(
      'allowed_values' => array(
        'health_system' => 'Health System',
        'hospital' => 'Hospital',
        'long_term_care' => 'Long Term Care',
      ),
      'allowed_values_function' => '',
    ),
    'translatable' => 0,
    'type' => 'list_text',
  );

  return $field_bases;
}
