<?php
/**
 * @file
 * pgh_application_ctype.features.field_base.inc
 */

/**
 * Implements hook_field_default_field_bases().
 */
function pgh_application_ctype_field_default_field_bases() {
  $field_bases = array();

  // Exported field_base: 'field_application_status'
  $field_bases['field_application_status'] = array(
    'active' => 1,
    'cardinality' => 1,
    'deleted' => 0,
    'entity_types' => array(),
    'field_name' => 'field_application_status',
    'field_permissions' => array(
      'type' => 2,
    ),
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
        'new' => 'New',
        'in-progress' => 'In progress',
        'submitted' => 'Submitted',
        'assigned-for-review' => 'Assigned for review',
        'review-in-progress' => 'Review in progress',
        'final-scoring-complete' => 'Final scoring complete',
        'initial-award-recommended' => 'Initial award recommended',
        'review-complete' => 'Review complete',
        'final-award-determined' => 'Final award determined',
      ),
      'allowed_values_function' => '',
    ),
    'translatable' => 0,
    'type' => 'list_text',
  );

  // Exported field_base: 'field_application_type'
  $field_bases['field_application_type'] = array(
    'active' => 1,
    'cardinality' => 1,
    'deleted' => 0,
    'entity_types' => array(),
    'field_name' => 'field_application_type',
    'field_permissions' => array(
      'type' => 0,
    ),
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
        'partner_for_change' => 'Partner for Change',
        'partner_recognition' => 'Partner Recognition',
        'long_term_care' => 'Long Term Care',
        'champion_for_change_gpo' => 'Champion for Change (GPO)',
        'champion_for_change_nongpo' => 'Champion for Change (Non-GPO)',
        'chc_partner_for_change' => 'CHC Partner for Change',
        'chc_partner_recognition' => 'CHC Partner Recognition',
        'greening_the_or' => 'Greening the OR',
        'dehp_free' => 'DEHP Free',
        'system_for_change' => 'System for Change',
        'mmmf' => 'Making Medicine Mercury Free',
      ),
      'allowed_values_function' => '',
    ),
    'translatable' => 0,
    'type' => 'list_text',
  );

  return $field_bases;
}
