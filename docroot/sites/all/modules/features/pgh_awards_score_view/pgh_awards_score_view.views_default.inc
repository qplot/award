<?php
/**
 * @file
 * pgh_awards_score_view.views_default.inc
 */

/**
 * Implements hook_views_default_views().
 */
function pgh_awards_score_view_views_default_views() {
  $export = array();

  $view = new view();
  $view->name = 'score';
  $view->description = '';
  $view->tag = 'default';
  $view->base_table = 'node';
  $view->human_name = 'Score for apptype';
  $view->core = 7;
  $view->api_version = '3.0';
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

  /* Display: Master */
  $handler = $view->new_display('default', 'Master', 'default');
  $handler->display->display_options['title'] = 'Score';
  $handler->display->display_options['use_more_always'] = FALSE;
  $handler->display->display_options['access']['type'] = 'role';
  $handler->display->display_options['access']['role'] = array(
    3 => '3',
    4 => '4',
  );
  $handler->display->display_options['cache']['type'] = 'none';
  $handler->display->display_options['query']['type'] = 'views_query';
  $handler->display->display_options['exposed_form']['type'] = 'basic';
  $handler->display->display_options['exposed_form']['options']['reset_button'] = TRUE;
  $handler->display->display_options['pager']['type'] = 'full';
  $handler->display->display_options['pager']['options']['items_per_page'] = '20';
  $handler->display->display_options['pager']['options']['offset'] = '0';
  $handler->display->display_options['pager']['options']['id'] = '0';
  $handler->display->display_options['pager']['options']['quantity'] = '9';
  $handler->display->display_options['style_plugin'] = 'table';
  $handler->display->display_options['style_options']['columns'] = array(
    'nid' => 'nid',
    'title' => 'title',
    'body' => 'body',
    'field_application_threshold_met' => 'field_application_threshold_met',
    'field_application_qualify' => 'field_application_qualify',
    'field_cat_response_automatic_p' => 'field_cat_response_automatic_p',
    'field_cat_response_automatic' => 'field_cat_response_automatic',
    'field_cat_response_metric_p' => 'field_cat_response_metric_p',
    'field_cat_response_metric' => 'field_cat_response_metric',
    'field_cat_response_kpi_p' => 'field_cat_response_kpi_p',
    'field_cat_response_kpi' => 'field_cat_response_kpi',
    'field_cat_response_quality_p' => 'field_cat_response_quality_p',
    'field_cat_response_quality' => 'field_cat_response_quality',
    'field_cat_response_final' => 'field_cat_response_final',
  );
  $handler->display->display_options['style_options']['default'] = '-1';
  $handler->display->display_options['style_options']['info'] = array(
    'nid' => array(
      'sortable' => 1,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'title' => array(
      'sortable' => 1,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'body' => array(
      'sortable' => 1,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'field_application_threshold_met' => array(
      'sortable' => 1,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'field_application_qualify' => array(
      'sortable' => 1,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'field_cat_response_automatic_p' => array(
      'sortable' => 1,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'field_cat_response_automatic' => array(
      'sortable' => 1,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'field_cat_response_metric_p' => array(
      'sortable' => 1,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'field_cat_response_metric' => array(
      'sortable' => 1,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'field_cat_response_kpi_p' => array(
      'sortable' => 1,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'field_cat_response_kpi' => array(
      'sortable' => 1,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'field_cat_response_quality_p' => array(
      'sortable' => 1,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'field_cat_response_quality' => array(
      'sortable' => 1,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'field_cat_response_final' => array(
      'sortable' => 1,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
  );
  /* Relationship: Category */
  $handler->display->display_options['relationships']['field_cat_response_category_target_id']['id'] = 'field_cat_response_category_target_id';
  $handler->display->display_options['relationships']['field_cat_response_category_target_id']['table'] = 'field_data_field_cat_response_category';
  $handler->display->display_options['relationships']['field_cat_response_category_target_id']['field'] = 'field_cat_response_category_target_id';
  $handler->display->display_options['relationships']['field_cat_response_category_target_id']['ui_name'] = 'Category';
  $handler->display->display_options['relationships']['field_cat_response_category_target_id']['label'] = 'Category';
  /* Relationship: Application */
  $handler->display->display_options['relationships']['field_cat_response_application_target_id']['id'] = 'field_cat_response_application_target_id';
  $handler->display->display_options['relationships']['field_cat_response_application_target_id']['table'] = 'field_data_field_cat_response_application';
  $handler->display->display_options['relationships']['field_cat_response_application_target_id']['field'] = 'field_cat_response_application_target_id';
  $handler->display->display_options['relationships']['field_cat_response_application_target_id']['ui_name'] = 'Application';
  $handler->display->display_options['relationships']['field_cat_response_application_target_id']['label'] = 'Application';
  /* Relationship: Business Unit */
  $handler->display->display_options['relationships']['reverse_field_applications_node']['id'] = 'reverse_field_applications_node';
  $handler->display->display_options['relationships']['reverse_field_applications_node']['table'] = 'node';
  $handler->display->display_options['relationships']['reverse_field_applications_node']['field'] = 'reverse_field_applications_node';
  $handler->display->display_options['relationships']['reverse_field_applications_node']['relationship'] = 'field_cat_response_application_target_id';
  $handler->display->display_options['relationships']['reverse_field_applications_node']['ui_name'] = 'Business Unit';
  $handler->display->display_options['relationships']['reverse_field_applications_node']['label'] = 'Business Unit';
  /* Relationship: Workgroup */
  $handler->display->display_options['relationships']['reverse_field_business_units_node']['id'] = 'reverse_field_business_units_node';
  $handler->display->display_options['relationships']['reverse_field_business_units_node']['table'] = 'node';
  $handler->display->display_options['relationships']['reverse_field_business_units_node']['field'] = 'reverse_field_business_units_node';
  $handler->display->display_options['relationships']['reverse_field_business_units_node']['relationship'] = 'reverse_field_applications_node';
  $handler->display->display_options['relationships']['reverse_field_business_units_node']['ui_name'] = 'Workgroup';
  $handler->display->display_options['relationships']['reverse_field_business_units_node']['label'] = 'Workgroup';
  /* Field: Content: Nid */
  $handler->display->display_options['fields']['nid']['id'] = 'nid';
  $handler->display->display_options['fields']['nid']['table'] = 'node';
  $handler->display->display_options['fields']['nid']['field'] = 'nid';
  $handler->display->display_options['fields']['nid']['relationship'] = 'field_cat_response_application_target_id';
  $handler->display->display_options['fields']['nid']['label'] = 'Application ID';
  /* Field: Content: Title */
  $handler->display->display_options['fields']['title']['id'] = 'title';
  $handler->display->display_options['fields']['title']['table'] = 'node';
  $handler->display->display_options['fields']['title']['field'] = 'title';
  $handler->display->display_options['fields']['title']['relationship'] = 'reverse_field_applications_node';
  $handler->display->display_options['fields']['title']['label'] = 'Business Unit';
  $handler->display->display_options['fields']['title']['link_to_node'] = FALSE;
  /* Field: Content: Body */
  $handler->display->display_options['fields']['body']['id'] = 'body';
  $handler->display->display_options['fields']['body']['table'] = 'field_data_body';
  $handler->display->display_options['fields']['body']['field'] = 'body';
  $handler->display->display_options['fields']['body']['relationship'] = 'field_cat_response_category_target_id';
  $handler->display->display_options['fields']['body']['label'] = 'Category';
  $handler->display->display_options['fields']['body']['type'] = 'text_plain';
  /* Field: Content: Threshold Met */
  $handler->display->display_options['fields']['field_application_threshold_met']['id'] = 'field_application_threshold_met';
  $handler->display->display_options['fields']['field_application_threshold_met']['table'] = 'field_data_field_application_threshold_met';
  $handler->display->display_options['fields']['field_application_threshold_met']['field'] = 'field_application_threshold_met';
  $handler->display->display_options['fields']['field_application_threshold_met']['relationship'] = 'field_cat_response_application_target_id';
  /* Field: Content: System Qualify */
  $handler->display->display_options['fields']['field_application_qualify']['id'] = 'field_application_qualify';
  $handler->display->display_options['fields']['field_application_qualify']['table'] = 'field_data_field_application_qualify';
  $handler->display->display_options['fields']['field_application_qualify']['field'] = 'field_application_qualify';
  $handler->display->display_options['fields']['field_application_qualify']['relationship'] = 'field_cat_response_application_target_id';
  /* Field: Content: Automatic potential point */
  $handler->display->display_options['fields']['field_cat_response_automatic_p']['id'] = 'field_cat_response_automatic_p';
  $handler->display->display_options['fields']['field_cat_response_automatic_p']['table'] = 'field_data_field_cat_response_automatic_p';
  $handler->display->display_options['fields']['field_cat_response_automatic_p']['field'] = 'field_cat_response_automatic_p';
  $handler->display->display_options['fields']['field_cat_response_automatic_p']['label'] = 'Auto P';
  /* Field: Content: Automatic score */
  $handler->display->display_options['fields']['field_cat_response_automatic']['id'] = 'field_cat_response_automatic';
  $handler->display->display_options['fields']['field_cat_response_automatic']['table'] = 'field_data_field_cat_response_automatic';
  $handler->display->display_options['fields']['field_cat_response_automatic']['field'] = 'field_cat_response_automatic';
  $handler->display->display_options['fields']['field_cat_response_automatic']['label'] = 'Auto';
  /* Field: Content: Metric potential point */
  $handler->display->display_options['fields']['field_cat_response_metric_p']['id'] = 'field_cat_response_metric_p';
  $handler->display->display_options['fields']['field_cat_response_metric_p']['table'] = 'field_data_field_cat_response_metric_p';
  $handler->display->display_options['fields']['field_cat_response_metric_p']['field'] = 'field_cat_response_metric_p';
  $handler->display->display_options['fields']['field_cat_response_metric_p']['label'] = 'Metric P';
  /* Field: Content: Metric score */
  $handler->display->display_options['fields']['field_cat_response_metric']['id'] = 'field_cat_response_metric';
  $handler->display->display_options['fields']['field_cat_response_metric']['table'] = 'field_data_field_cat_response_metric';
  $handler->display->display_options['fields']['field_cat_response_metric']['field'] = 'field_cat_response_metric';
  $handler->display->display_options['fields']['field_cat_response_metric']['label'] = 'Metric';
  /* Field: Content: KPI potential point */
  $handler->display->display_options['fields']['field_cat_response_kpi_p']['id'] = 'field_cat_response_kpi_p';
  $handler->display->display_options['fields']['field_cat_response_kpi_p']['table'] = 'field_data_field_cat_response_kpi_p';
  $handler->display->display_options['fields']['field_cat_response_kpi_p']['field'] = 'field_cat_response_kpi_p';
  $handler->display->display_options['fields']['field_cat_response_kpi_p']['label'] = 'KPI P';
  /* Field: Content: KPI score */
  $handler->display->display_options['fields']['field_cat_response_kpi']['id'] = 'field_cat_response_kpi';
  $handler->display->display_options['fields']['field_cat_response_kpi']['table'] = 'field_data_field_cat_response_kpi';
  $handler->display->display_options['fields']['field_cat_response_kpi']['field'] = 'field_cat_response_kpi';
  $handler->display->display_options['fields']['field_cat_response_kpi']['label'] = 'KPI';
  /* Field: Content: Quality potential point */
  $handler->display->display_options['fields']['field_cat_response_quality_p']['id'] = 'field_cat_response_quality_p';
  $handler->display->display_options['fields']['field_cat_response_quality_p']['table'] = 'field_data_field_cat_response_quality_p';
  $handler->display->display_options['fields']['field_cat_response_quality_p']['field'] = 'field_cat_response_quality_p';
  $handler->display->display_options['fields']['field_cat_response_quality_p']['label'] = 'Quality P';
  /* Field: Content: Quality score */
  $handler->display->display_options['fields']['field_cat_response_quality']['id'] = 'field_cat_response_quality';
  $handler->display->display_options['fields']['field_cat_response_quality']['table'] = 'field_data_field_cat_response_quality';
  $handler->display->display_options['fields']['field_cat_response_quality']['field'] = 'field_cat_response_quality';
  $handler->display->display_options['fields']['field_cat_response_quality']['label'] = 'Quality';
  /* Field: Content: Final score */
  $handler->display->display_options['fields']['field_cat_response_final']['id'] = 'field_cat_response_final';
  $handler->display->display_options['fields']['field_cat_response_final']['table'] = 'field_data_field_cat_response_final';
  $handler->display->display_options['fields']['field_cat_response_final']['field'] = 'field_cat_response_final';
  /* Sort criterion: Content: Nid */
  $handler->display->display_options['sorts']['nid']['id'] = 'nid';
  $handler->display->display_options['sorts']['nid']['table'] = 'node';
  $handler->display->display_options['sorts']['nid']['field'] = 'nid';
  $handler->display->display_options['sorts']['nid']['relationship'] = 'field_cat_response_category_target_id';
  /* Contextual filter: Application Type */
  $handler->display->display_options['arguments']['field_application_type_value']['id'] = 'field_application_type_value';
  $handler->display->display_options['arguments']['field_application_type_value']['table'] = 'field_data_field_application_type';
  $handler->display->display_options['arguments']['field_application_type_value']['field'] = 'field_application_type_value';
  $handler->display->display_options['arguments']['field_application_type_value']['relationship'] = 'field_cat_response_application_target_id';
  $handler->display->display_options['arguments']['field_application_type_value']['ui_name'] = 'Application Type';
  $handler->display->display_options['arguments']['field_application_type_value']['default_argument_type'] = 'fixed';
  $handler->display->display_options['arguments']['field_application_type_value']['summary']['number_of_records'] = '0';
  $handler->display->display_options['arguments']['field_application_type_value']['summary']['format'] = 'default_summary';
  $handler->display->display_options['arguments']['field_application_type_value']['summary_options']['items_per_page'] = '25';
  $handler->display->display_options['arguments']['field_application_type_value']['limit'] = '0';
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
    'category_response' => 'category_response',
  );
  /* Filter criterion: Content: Title */
  $handler->display->display_options['filters']['title']['id'] = 'title';
  $handler->display->display_options['filters']['title']['table'] = 'node';
  $handler->display->display_options['filters']['title']['field'] = 'title';
  $handler->display->display_options['filters']['title']['relationship'] = 'reverse_field_applications_node';
  $handler->display->display_options['filters']['title']['operator'] = 'word';
  $handler->display->display_options['filters']['title']['exposed'] = TRUE;
  $handler->display->display_options['filters']['title']['expose']['operator_id'] = 'title_op';
  $handler->display->display_options['filters']['title']['expose']['label'] = 'Search by Business Unit';
  $handler->display->display_options['filters']['title']['expose']['operator'] = 'title_op';
  $handler->display->display_options['filters']['title']['expose']['identifier'] = 'title';
  $handler->display->display_options['filters']['title']['expose']['remember_roles'] = array(
    2 => '2',
    1 => 0,
    6 => 0,
    5 => 0,
    4 => 0,
    3 => 0,
    7 => 0,
  );
  /* Filter criterion: Content: Title */
  $handler->display->display_options['filters']['title_1']['id'] = 'title_1';
  $handler->display->display_options['filters']['title_1']['table'] = 'node';
  $handler->display->display_options['filters']['title_1']['field'] = 'title';
  $handler->display->display_options['filters']['title_1']['relationship'] = 'reverse_field_business_units_node';
  $handler->display->display_options['filters']['title_1']['operator'] = 'word';
  $handler->display->display_options['filters']['title_1']['exposed'] = TRUE;
  $handler->display->display_options['filters']['title_1']['expose']['operator_id'] = 'title_1_op';
  $handler->display->display_options['filters']['title_1']['expose']['label'] = 'Search by Workgroup';
  $handler->display->display_options['filters']['title_1']['expose']['operator'] = 'title_1_op';
  $handler->display->display_options['filters']['title_1']['expose']['identifier'] = 'title_1';
  $handler->display->display_options['filters']['title_1']['expose']['remember_roles'] = array(
    2 => '2',
    1 => 0,
    6 => 0,
    5 => 0,
    4 => 0,
    3 => 0,
    7 => 0,
  );
  /* Filter criterion: Content: Nid */
  $handler->display->display_options['filters']['nid']['id'] = 'nid';
  $handler->display->display_options['filters']['nid']['table'] = 'node';
  $handler->display->display_options['filters']['nid']['field'] = 'nid';
  $handler->display->display_options['filters']['nid']['relationship'] = 'field_cat_response_application_target_id';
  $handler->display->display_options['filters']['nid']['exposed'] = TRUE;
  $handler->display->display_options['filters']['nid']['expose']['operator_id'] = 'nid_op';
  $handler->display->display_options['filters']['nid']['expose']['label'] = 'Application ID';
  $handler->display->display_options['filters']['nid']['expose']['operator'] = 'nid_op';
  $handler->display->display_options['filters']['nid']['expose']['identifier'] = 'nid';
  $handler->display->display_options['filters']['nid']['expose']['remember_roles'] = array(
    2 => '2',
    1 => 0,
    6 => 0,
    5 => 0,
    4 => 0,
    3 => 0,
    7 => 0,
  );

  /* Display: Page */
  $handler = $view->new_display('page', 'Page', 'page');
  $handler->display->display_options['path'] = 'admin/score/apptype/%/score';
  $export['score'] = $view;

  $view = new view();
  $view->name = 'score_application';
  $view->description = '';
  $view->tag = 'default';
  $view->base_table = 'node';
  $view->human_name = 'Score Application';
  $view->core = 7;
  $view->api_version = '3.0';
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

  /* Display: Master */
  $handler = $view->new_display('default', 'Master', 'default');
  $handler->display->display_options['title'] = 'Score';
  $handler->display->display_options['use_more_always'] = FALSE;
  $handler->display->display_options['access']['type'] = 'perm';
  $handler->display->display_options['cache']['type'] = 'none';
  $handler->display->display_options['query']['type'] = 'views_query';
  $handler->display->display_options['exposed_form']['type'] = 'basic';
  $handler->display->display_options['pager']['type'] = 'none';
  $handler->display->display_options['style_plugin'] = 'table';
  /* Relationship: Category */
  $handler->display->display_options['relationships']['field_cat_response_category_target_id']['id'] = 'field_cat_response_category_target_id';
  $handler->display->display_options['relationships']['field_cat_response_category_target_id']['table'] = 'field_data_field_cat_response_category';
  $handler->display->display_options['relationships']['field_cat_response_category_target_id']['field'] = 'field_cat_response_category_target_id';
  $handler->display->display_options['relationships']['field_cat_response_category_target_id']['ui_name'] = 'Category';
  $handler->display->display_options['relationships']['field_cat_response_category_target_id']['label'] = 'Category';
  /* Field: Content: Body */
  $handler->display->display_options['fields']['body']['id'] = 'body';
  $handler->display->display_options['fields']['body']['table'] = 'field_data_body';
  $handler->display->display_options['fields']['body']['field'] = 'body';
  $handler->display->display_options['fields']['body']['relationship'] = 'field_cat_response_category_target_id';
  $handler->display->display_options['fields']['body']['label'] = 'Category';
  $handler->display->display_options['fields']['body']['type'] = 'text_plain';
  /* Field: Content: Automatic potential point */
  $handler->display->display_options['fields']['field_cat_response_automatic_p']['id'] = 'field_cat_response_automatic_p';
  $handler->display->display_options['fields']['field_cat_response_automatic_p']['table'] = 'field_data_field_cat_response_automatic_p';
  $handler->display->display_options['fields']['field_cat_response_automatic_p']['field'] = 'field_cat_response_automatic_p';
  $handler->display->display_options['fields']['field_cat_response_automatic_p']['label'] = 'Auto P';
  /* Field: Content: Automatic score */
  $handler->display->display_options['fields']['field_cat_response_automatic']['id'] = 'field_cat_response_automatic';
  $handler->display->display_options['fields']['field_cat_response_automatic']['table'] = 'field_data_field_cat_response_automatic';
  $handler->display->display_options['fields']['field_cat_response_automatic']['field'] = 'field_cat_response_automatic';
  $handler->display->display_options['fields']['field_cat_response_automatic']['label'] = 'Auto';
  /* Field: Content: Metric potential point */
  $handler->display->display_options['fields']['field_cat_response_metric_p']['id'] = 'field_cat_response_metric_p';
  $handler->display->display_options['fields']['field_cat_response_metric_p']['table'] = 'field_data_field_cat_response_metric_p';
  $handler->display->display_options['fields']['field_cat_response_metric_p']['field'] = 'field_cat_response_metric_p';
  $handler->display->display_options['fields']['field_cat_response_metric_p']['label'] = 'Metric P';
  /* Field: Content: Metric score */
  $handler->display->display_options['fields']['field_cat_response_metric']['id'] = 'field_cat_response_metric';
  $handler->display->display_options['fields']['field_cat_response_metric']['table'] = 'field_data_field_cat_response_metric';
  $handler->display->display_options['fields']['field_cat_response_metric']['field'] = 'field_cat_response_metric';
  $handler->display->display_options['fields']['field_cat_response_metric']['label'] = 'Metric';
  /* Field: Content: KPI potential point */
  $handler->display->display_options['fields']['field_cat_response_kpi_p']['id'] = 'field_cat_response_kpi_p';
  $handler->display->display_options['fields']['field_cat_response_kpi_p']['table'] = 'field_data_field_cat_response_kpi_p';
  $handler->display->display_options['fields']['field_cat_response_kpi_p']['field'] = 'field_cat_response_kpi_p';
  $handler->display->display_options['fields']['field_cat_response_kpi_p']['label'] = 'KPI P';
  /* Field: Content: KPI score */
  $handler->display->display_options['fields']['field_cat_response_kpi']['id'] = 'field_cat_response_kpi';
  $handler->display->display_options['fields']['field_cat_response_kpi']['table'] = 'field_data_field_cat_response_kpi';
  $handler->display->display_options['fields']['field_cat_response_kpi']['field'] = 'field_cat_response_kpi';
  $handler->display->display_options['fields']['field_cat_response_kpi']['label'] = 'KPI';
  /* Field: Content: Quality potential point */
  $handler->display->display_options['fields']['field_cat_response_quality_p']['id'] = 'field_cat_response_quality_p';
  $handler->display->display_options['fields']['field_cat_response_quality_p']['table'] = 'field_data_field_cat_response_quality_p';
  $handler->display->display_options['fields']['field_cat_response_quality_p']['field'] = 'field_cat_response_quality_p';
  $handler->display->display_options['fields']['field_cat_response_quality_p']['label'] = 'Quality P';
  /* Field: Content: Quality score */
  $handler->display->display_options['fields']['field_cat_response_quality']['id'] = 'field_cat_response_quality';
  $handler->display->display_options['fields']['field_cat_response_quality']['table'] = 'field_data_field_cat_response_quality';
  $handler->display->display_options['fields']['field_cat_response_quality']['field'] = 'field_cat_response_quality';
  $handler->display->display_options['fields']['field_cat_response_quality']['label'] = 'Quality';
  /* Field: Content: Final score */
  $handler->display->display_options['fields']['field_cat_response_final']['id'] = 'field_cat_response_final';
  $handler->display->display_options['fields']['field_cat_response_final']['table'] = 'field_data_field_cat_response_final';
  $handler->display->display_options['fields']['field_cat_response_final']['field'] = 'field_cat_response_final';
  /* Sort criterion: Content: Nid */
  $handler->display->display_options['sorts']['nid']['id'] = 'nid';
  $handler->display->display_options['sorts']['nid']['table'] = 'node';
  $handler->display->display_options['sorts']['nid']['field'] = 'nid';
  $handler->display->display_options['sorts']['nid']['relationship'] = 'field_cat_response_category_target_id';
  /* Contextual filter: Content: Application (field_cat_response_application) */
  $handler->display->display_options['arguments']['field_cat_response_application_target_id']['id'] = 'field_cat_response_application_target_id';
  $handler->display->display_options['arguments']['field_cat_response_application_target_id']['table'] = 'field_data_field_cat_response_application';
  $handler->display->display_options['arguments']['field_cat_response_application_target_id']['field'] = 'field_cat_response_application_target_id';
  $handler->display->display_options['arguments']['field_cat_response_application_target_id']['title_enable'] = TRUE;
  $handler->display->display_options['arguments']['field_cat_response_application_target_id']['title'] = 'Score for %1';
  $handler->display->display_options['arguments']['field_cat_response_application_target_id']['default_argument_type'] = 'fixed';
  $handler->display->display_options['arguments']['field_cat_response_application_target_id']['summary']['number_of_records'] = '0';
  $handler->display->display_options['arguments']['field_cat_response_application_target_id']['summary']['format'] = 'default_summary';
  $handler->display->display_options['arguments']['field_cat_response_application_target_id']['summary_options']['items_per_page'] = '25';
  $handler->display->display_options['arguments']['field_cat_response_application_target_id']['specify_validation'] = TRUE;
  $handler->display->display_options['arguments']['field_cat_response_application_target_id']['validate']['type'] = 'node';
  $handler->display->display_options['arguments']['field_cat_response_application_target_id']['validate_options']['types'] = array(
    'application' => 'application',
  );
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
    'category_response' => 'category_response',
  );

  /* Display: Page */
  $handler = $view->new_display('page', 'Page', 'page');
  $handler->display->display_options['path'] = 'admin/score/application/%';
  $export['score_application'] = $view;

  return $export;
}
