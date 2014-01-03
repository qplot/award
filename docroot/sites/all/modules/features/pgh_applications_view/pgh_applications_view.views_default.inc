<?php
/**
 * @file
 * pgh_applications_view.views_default.inc
 */

/**
 * Implements hook_views_default_views().
 */
function pgh_applications_view_views_default_views() {
  $export = array();

  $view = new view();
  $view->name = 'applications';
  $view->description = '';
  $view->tag = 'default';
  $view->base_table = 'node';
  $view->human_name = 'Applications';
  $view->core = 7;
  $view->api_version = '3.0';
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

  /* Display: Master */
  $handler = $view->new_display('default', 'Master', 'default');
  $handler->display->display_options['title'] = 'Applications';
  $handler->display->display_options['use_more_always'] = FALSE;
  $handler->display->display_options['access']['type'] = 'perm';
  $handler->display->display_options['access']['perm'] = 'administer awards system';
  $handler->display->display_options['cache']['type'] = 'none';
  $handler->display->display_options['query']['type'] = 'views_query';
  $handler->display->display_options['exposed_form']['type'] = 'basic';
  $handler->display->display_options['pager']['type'] = 'full';
  $handler->display->display_options['pager']['options']['items_per_page'] = '100';
  $handler->display->display_options['pager']['options']['offset'] = '0';
  $handler->display->display_options['pager']['options']['id'] = '0';
  $handler->display->display_options['pager']['options']['quantity'] = '9';
  $handler->display->display_options['style_plugin'] = 'table';
  $handler->display->display_options['style_options']['columns'] = array(
    'title' => 'title',
  );
  $handler->display->display_options['style_options']['default'] = '-1';
  $handler->display->display_options['style_options']['info'] = array(
    'title' => array(
      'sortable' => 0,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
  );
  /* Header: Global: Text area */
  $handler->display->display_options['header']['area']['id'] = 'area';
  $handler->display->display_options['header']['area']['table'] = 'views';
  $handler->display->display_options['header']['area']['field'] = 'area';
  $handler->display->display_options['header']['area']['content'] = 'This view shows all Applications in the system.';
  $handler->display->display_options['header']['area']['format'] = 'filtered_html';
  /* Header: Global: Result summary */
  $handler->display->display_options['header']['result']['id'] = 'result';
  $handler->display->display_options['header']['result']['table'] = 'views';
  $handler->display->display_options['header']['result']['field'] = 'result';
  /* Relationship: Entity Reference: Referencing entity */
  $handler->display->display_options['relationships']['reverse_field_applications_node']['id'] = 'reverse_field_applications_node';
  $handler->display->display_options['relationships']['reverse_field_applications_node']['table'] = 'node';
  $handler->display->display_options['relationships']['reverse_field_applications_node']['field'] = 'reverse_field_applications_node';
  $handler->display->display_options['relationships']['reverse_field_applications_node']['label'] = 'Business Unit';
  /* Relationship: Entity Reference: Referencing entity */
  $handler->display->display_options['relationships']['reverse_field_business_units_node']['id'] = 'reverse_field_business_units_node';
  $handler->display->display_options['relationships']['reverse_field_business_units_node']['table'] = 'node';
  $handler->display->display_options['relationships']['reverse_field_business_units_node']['field'] = 'reverse_field_business_units_node';
  $handler->display->display_options['relationships']['reverse_field_business_units_node']['relationship'] = 'reverse_field_applications_node';
  $handler->display->display_options['relationships']['reverse_field_business_units_node']['label'] = 'Work Group';
  /* Field: Content: Nid */
  $handler->display->display_options['fields']['nid']['id'] = 'nid';
  $handler->display->display_options['fields']['nid']['table'] = 'node';
  $handler->display->display_options['fields']['nid']['field'] = 'nid';
  $handler->display->display_options['fields']['nid']['label'] = '';
  $handler->display->display_options['fields']['nid']['exclude'] = TRUE;
  $handler->display->display_options['fields']['nid']['element_label_colon'] = FALSE;
  /* Field: Content: Title */
  $handler->display->display_options['fields']['title']['id'] = 'title';
  $handler->display->display_options['fields']['title']['table'] = 'node';
  $handler->display->display_options['fields']['title']['field'] = 'title';
  $handler->display->display_options['fields']['title']['label'] = 'Name';
  $handler->display->display_options['fields']['title']['alter']['make_link'] = TRUE;
  $handler->display->display_options['fields']['title']['alter']['path'] = 'application/[nid]';
  $handler->display->display_options['fields']['title']['alter']['word_boundary'] = FALSE;
  $handler->display->display_options['fields']['title']['alter']['ellipsis'] = FALSE;
  $handler->display->display_options['fields']['title']['link_to_node'] = FALSE;
  /* Field: Content: Application Type */
  $handler->display->display_options['fields']['field_application_type']['id'] = 'field_application_type';
  $handler->display->display_options['fields']['field_application_type']['table'] = 'field_data_field_application_type';
  $handler->display->display_options['fields']['field_application_type']['field'] = 'field_application_type';
  $handler->display->display_options['fields']['field_application_type']['element_label_colon'] = FALSE;
  /* Field: Content: Status */
  $handler->display->display_options['fields']['field_application_status']['id'] = 'field_application_status';
  $handler->display->display_options['fields']['field_application_status']['table'] = 'field_data_field_application_status';
  $handler->display->display_options['fields']['field_application_status']['field'] = 'field_application_status';
  $handler->display->display_options['fields']['field_application_status']['element_label_colon'] = FALSE;
  /* Field: Content: Post date */
  $handler->display->display_options['fields']['created']['id'] = 'created';
  $handler->display->display_options['fields']['created']['table'] = 'node';
  $handler->display->display_options['fields']['created']['field'] = 'created';
  $handler->display->display_options['fields']['created']['label'] = 'Created date';
  $handler->display->display_options['fields']['created']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['created']['date_format'] = 'short';
  /* Field: Content: Title */
  $handler->display->display_options['fields']['title_1']['id'] = 'title_1';
  $handler->display->display_options['fields']['title_1']['table'] = 'node';
  $handler->display->display_options['fields']['title_1']['field'] = 'title';
  $handler->display->display_options['fields']['title_1']['relationship'] = 'reverse_field_applications_node';
  $handler->display->display_options['fields']['title_1']['label'] = 'Business Unit';
  $handler->display->display_options['fields']['title_1']['element_label_colon'] = FALSE;
  /* Field: Content: Title */
  $handler->display->display_options['fields']['title_2']['id'] = 'title_2';
  $handler->display->display_options['fields']['title_2']['table'] = 'node';
  $handler->display->display_options['fields']['title_2']['field'] = 'title';
  $handler->display->display_options['fields']['title_2']['relationship'] = 'reverse_field_business_units_node';
  $handler->display->display_options['fields']['title_2']['label'] = 'Work Group';
  $handler->display->display_options['fields']['title_2']['element_label_colon'] = FALSE;
  /* Sort criterion: Content: Post date */
  $handler->display->display_options['sorts']['created']['id'] = 'created';
  $handler->display->display_options['sorts']['created']['table'] = 'node';
  $handler->display->display_options['sorts']['created']['field'] = 'created';
  $handler->display->display_options['sorts']['created']['order'] = 'DESC';
  /* Filter criterion: Content: Published */
  $handler->display->display_options['filters']['status']['id'] = 'status';
  $handler->display->display_options['filters']['status']['table'] = 'node';
  $handler->display->display_options['filters']['status']['field'] = 'status';
  $handler->display->display_options['filters']['status']['value'] = 1;
  $handler->display->display_options['filters']['status']['group'] = 1;
  $handler->display->display_options['filters']['status']['expose']['operator'] = FALSE;
  /* Filter criterion: Content: Type */
  $handler->display->display_options['filters']['type']['id'] = 'type';
  $handler->display->display_options['filters']['type']['table'] = 'node';
  $handler->display->display_options['filters']['type']['field'] = 'type';
  $handler->display->display_options['filters']['type']['value'] = array(
    'application' => 'application',
  );
  /* Filter criterion: Content: Status (field_application_status) */
  $handler->display->display_options['filters']['field_application_status_value']['id'] = 'field_application_status_value';
  $handler->display->display_options['filters']['field_application_status_value']['table'] = 'field_data_field_application_status';
  $handler->display->display_options['filters']['field_application_status_value']['field'] = 'field_application_status_value';
  $handler->display->display_options['filters']['field_application_status_value']['value'] = array(
    'new' => 'new',
    'in-progress' => 'in-progress',
    'submitted' => 'submitted',
    'assigned-for-review' => 'assigned-for-review',
    'review-in-progress' => 'review-in-progress',
    'final-scoring-complete' => 'final-scoring-complete',
    'initial-award-recommended' => 'initial-award-recommended',
    'review-complete' => 'review-complete',
    'final-award-determined' => 'final-award-determined',
  );
  $handler->display->display_options['filters']['field_application_status_value']['exposed'] = TRUE;
  $handler->display->display_options['filters']['field_application_status_value']['expose']['operator_id'] = 'field_application_status_value_op';
  $handler->display->display_options['filters']['field_application_status_value']['expose']['label'] = 'Status';
  $handler->display->display_options['filters']['field_application_status_value']['expose']['operator'] = 'field_application_status_value_op';
  $handler->display->display_options['filters']['field_application_status_value']['expose']['identifier'] = 'field_application_status_value';
  $handler->display->display_options['filters']['field_application_status_value']['expose']['remember_roles'] = array(
    2 => '2',
    1 => 0,
    6 => 0,
    5 => 0,
    4 => 0,
    3 => 0,
  );
  $handler->display->display_options['filters']['field_application_status_value']['group_info']['label'] = 'Status (field_application_status)';
  $handler->display->display_options['filters']['field_application_status_value']['group_info']['identifier'] = 'field_application_status_value';
  $handler->display->display_options['filters']['field_application_status_value']['group_info']['remember'] = FALSE;
  $handler->display->display_options['filters']['field_application_status_value']['group_info']['group_items'] = array(
    1 => array(),
    2 => array(),
    3 => array(),
  );
  /* Filter criterion: Content: Application Type (field_application_type) */
  $handler->display->display_options['filters']['field_application_type_value']['id'] = 'field_application_type_value';
  $handler->display->display_options['filters']['field_application_type_value']['table'] = 'field_data_field_application_type';
  $handler->display->display_options['filters']['field_application_type_value']['field'] = 'field_application_type_value';
  $handler->display->display_options['filters']['field_application_type_value']['value'] = array(
    'partner_for_change' => 'partner_for_change',
    'partner_recognition' => 'partner_recognition',
    'long_term_care' => 'long_term_care',
    'champion_for_change_gpo' => 'champion_for_change_gpo',
    'champion_for_change_nongpo' => 'champion_for_change_nongpo',
    'chc_partner_for_change' => 'chc_partner_for_change',
    'chc_partner_recognition' => 'chc_partner_recognition',
    'greening_the_or' => 'greening_the_or',
    'dehp_free' => 'dehp_free',
  );
  $handler->display->display_options['filters']['field_application_type_value']['exposed'] = TRUE;
  $handler->display->display_options['filters']['field_application_type_value']['expose']['operator_id'] = 'field_application_type_value_op';
  $handler->display->display_options['filters']['field_application_type_value']['expose']['label'] = 'Application Type';
  $handler->display->display_options['filters']['field_application_type_value']['expose']['operator'] = 'field_application_type_value_op';
  $handler->display->display_options['filters']['field_application_type_value']['expose']['identifier'] = 'field_application_type_value';
  $handler->display->display_options['filters']['field_application_type_value']['expose']['remember_roles'] = array(
    2 => '2',
    1 => 0,
    6 => 0,
    5 => 0,
    4 => 0,
    3 => 0,
  );

  /* Display: Page */
  $handler = $view->new_display('page', 'Page', 'page');
  $handler->display->display_options['path'] = 'admin/applications';
  $export['applications'] = $view;

  return $export;
}
