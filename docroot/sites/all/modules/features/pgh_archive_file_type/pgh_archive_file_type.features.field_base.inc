<?php
/**
 * @file
 * pgh_archive_file_type.features.field_base.inc
 */

/**
 * Implements hook_field_default_field_bases().
 */
function pgh_archive_file_type_field_default_field_bases() {
  $field_bases = array();

  // Exported field_base: 'field_media_description'
  $field_bases['field_media_description'] = array(
    'active' => 1,
    'cardinality' => 1,
    'deleted' => 0,
    'entity_types' => array(),
    'field_name' => 'field_media_description',
    'foreign keys' => array(
      'format' => array(
        'columns' => array(
          'format' => 'format',
        ),
        'table' => 'filter_format',
      ),
    ),
    'indexes' => array(
      'format' => array(
        0 => 'format',
      ),
    ),
    'locked' => 0,
    'module' => 'text',
    'settings' => array(
      'max_length' => 255,
    ),
    'translatable' => 0,
    'type' => 'text',
  );

  return $field_bases;
}
