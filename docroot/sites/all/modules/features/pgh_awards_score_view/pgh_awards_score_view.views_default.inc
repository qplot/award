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
  $view->description = 'Admin view displaying total score for one application type';
  $view->tag = 'admin';
  $view->base_table = 'node';
  $view->human_name = 'Score for apptype';
  $view->core = 7;
  $view->api_version = '3.0';
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

  /* Display: Master */
  $handler = $view->new_display('default', 'Master', 'default');
  $handler->display->display_options['title'] = 'Score';
  $handler->display->display_options['use_more_always'] = FALSE;
  $handler->display->display_options['access']['type'] = 'perm';
  $handler->display->display_options['access']['perm'] = 'administer awards system';
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
  $handler->display->display_options['style_options']['default_row_class'] = FALSE;
  $handler->display->display_options['style_options']['row_class_special'] = FALSE;
  $handler->display->display_options['style_options']['columns'] = array(
    'nid' => 'nid',
    'title' => 'title',
    'title_1' => 'title_1',
    'field_application_automatic_p' => 'field_application_automatic_p',
    'field_application_automatic' => 'field_application_automatic',
    'field_application_kpi_p' => 'field_application_kpi_p',
    'field_application_kpi' => 'field_application_kpi',
    'field_application_metric_p' => 'field_application_metric_p',
    'field_application_metric' => 'field_application_metric',
    'field_application_quality_p' => 'field_application_quality_p',
    'field_application_quality' => 'field_application_quality',
    'field_application_final' => 'field_application_final',
    'nothing' => 'nothing',
    'edit_node' => 'edit_node',
    'field_application_final_p' => 'field_application_final_p',
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
    'title_1' => array(
      'sortable' => 1,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'field_application_automatic_p' => array(
      'sortable' => 1,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'field_application_automatic' => array(
      'sortable' => 1,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'field_application_kpi_p' => array(
      'sortable' => 1,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'field_application_kpi' => array(
      'sortable' => 1,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'field_application_metric_p' => array(
      'sortable' => 1,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'field_application_metric' => array(
      'sortable' => 1,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'field_application_quality_p' => array(
      'sortable' => 1,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'field_application_quality' => array(
      'sortable' => 1,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'field_application_final' => array(
      'sortable' => 1,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'nothing' => array(
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'edit_node' => array(
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'field_application_final_p' => array(
      'sortable' => 1,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
  );
  /* Relationship: Business Unit */
  $handler->display->display_options['relationships']['reverse_field_applications_node']['id'] = 'reverse_field_applications_node';
  $handler->display->display_options['relationships']['reverse_field_applications_node']['table'] = 'node';
  $handler->display->display_options['relationships']['reverse_field_applications_node']['field'] = 'reverse_field_applications_node';
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
  $handler->display->display_options['fields']['nid']['label'] = 'ID';
  /* Field: Content: Title */
  $handler->display->display_options['fields']['title']['id'] = 'title';
  $handler->display->display_options['fields']['title']['table'] = 'node';
  $handler->display->display_options['fields']['title']['field'] = 'title';
  $handler->display->display_options['fields']['title']['relationship'] = 'reverse_field_applications_node';
  $handler->display->display_options['fields']['title']['label'] = 'Business Unit';
  $handler->display->display_options['fields']['title']['link_to_node'] = FALSE;
  /* Field: Content: Title */
  $handler->display->display_options['fields']['title_1']['id'] = 'title_1';
  $handler->display->display_options['fields']['title_1']['table'] = 'node';
  $handler->display->display_options['fields']['title_1']['field'] = 'title';
  $handler->display->display_options['fields']['title_1']['relationship'] = 'reverse_field_business_units_node';
  $handler->display->display_options['fields']['title_1']['label'] = 'Workgroup';
  $handler->display->display_options['fields']['title_1']['link_to_node'] = FALSE;
  /* Field: Content: Automatic potential point */
  $handler->display->display_options['fields']['field_application_automatic_p']['id'] = 'field_application_automatic_p';
  $handler->display->display_options['fields']['field_application_automatic_p']['table'] = 'field_data_field_application_automatic_p';
  $handler->display->display_options['fields']['field_application_automatic_p']['field'] = 'field_application_automatic_p';
  $handler->display->display_options['fields']['field_application_automatic_p']['relationship'] = 'field_cat_response_application_target_id';
  $handler->display->display_options['fields']['field_application_automatic_p']['label'] = 'Automatic P';
  /* Field: Content: Automatic score */
  $handler->display->display_options['fields']['field_application_automatic']['id'] = 'field_application_automatic';
  $handler->display->display_options['fields']['field_application_automatic']['table'] = 'field_data_field_application_automatic';
  $handler->display->display_options['fields']['field_application_automatic']['field'] = 'field_application_automatic';
  $handler->display->display_options['fields']['field_application_automatic']['relationship'] = 'field_cat_response_application_target_id';
  $handler->display->display_options['fields']['field_application_automatic']['label'] = 'Automatic';
  /* Field: Content: KPI potential point */
  $handler->display->display_options['fields']['field_application_kpi_p']['id'] = 'field_application_kpi_p';
  $handler->display->display_options['fields']['field_application_kpi_p']['table'] = 'field_data_field_application_kpi_p';
  $handler->display->display_options['fields']['field_application_kpi_p']['field'] = 'field_application_kpi_p';
  $handler->display->display_options['fields']['field_application_kpi_p']['label'] = 'KPI P';
  /* Field: Content: KPI score */
  $handler->display->display_options['fields']['field_application_kpi']['id'] = 'field_application_kpi';
  $handler->display->display_options['fields']['field_application_kpi']['table'] = 'field_data_field_application_kpi';
  $handler->display->display_options['fields']['field_application_kpi']['field'] = 'field_application_kpi';
  $handler->display->display_options['fields']['field_application_kpi']['label'] = 'KPI';
  /* Field: Content: Metric potential point */
  $handler->display->display_options['fields']['field_application_metric_p']['id'] = 'field_application_metric_p';
  $handler->display->display_options['fields']['field_application_metric_p']['table'] = 'field_data_field_application_metric_p';
  $handler->display->display_options['fields']['field_application_metric_p']['field'] = 'field_application_metric_p';
  $handler->display->display_options['fields']['field_application_metric_p']['label'] = 'Metric P';
  /* Field: Content: Metric score */
  $handler->display->display_options['fields']['field_application_metric']['id'] = 'field_application_metric';
  $handler->display->display_options['fields']['field_application_metric']['table'] = 'field_data_field_application_metric';
  $handler->display->display_options['fields']['field_application_metric']['field'] = 'field_application_metric';
  $handler->display->display_options['fields']['field_application_metric']['label'] = 'Metric';
  /* Field: Content: Quality potential point */
  $handler->display->display_options['fields']['field_application_quality_p']['id'] = 'field_application_quality_p';
  $handler->display->display_options['fields']['field_application_quality_p']['table'] = 'field_data_field_application_quality_p';
  $handler->display->display_options['fields']['field_application_quality_p']['field'] = 'field_application_quality_p';
  $handler->display->display_options['fields']['field_application_quality_p']['label'] = 'Quality P';
  /* Field: Content: Quality score */
  $handler->display->display_options['fields']['field_application_quality']['id'] = 'field_application_quality';
  $handler->display->display_options['fields']['field_application_quality']['table'] = 'field_data_field_application_quality';
  $handler->display->display_options['fields']['field_application_quality']['field'] = 'field_application_quality';
  $handler->display->display_options['fields']['field_application_quality']['label'] = 'Qualit';
  /* Field: Content: Final score */
  $handler->display->display_options['fields']['field_application_final']['id'] = 'field_application_final';
  $handler->display->display_options['fields']['field_application_final']['table'] = 'field_data_field_application_final';
  $handler->display->display_options['fields']['field_application_final']['field'] = 'field_application_final';
  $handler->display->display_options['fields']['field_application_final']['label'] = 'Final';
  /* Field: Final % */
  $handler->display->display_options['fields']['nothing']['id'] = 'nothing';
  $handler->display->display_options['fields']['nothing']['table'] = 'views';
  $handler->display->display_options['fields']['nothing']['field'] = 'nothing';
  $handler->display->display_options['fields']['nothing']['ui_name'] = 'Final %';
  $handler->display->display_options['fields']['nothing']['label'] = 'Final %';
  $handler->display->display_options['fields']['nothing']['exclude'] = TRUE;
  /* Field: Content: Edit link */
  $handler->display->display_options['fields']['edit_node']['id'] = 'edit_node';
  $handler->display->display_options['fields']['edit_node']['table'] = 'views_entity_node';
  $handler->display->display_options['fields']['edit_node']['field'] = 'edit_node';
  $handler->display->display_options['fields']['edit_node']['label'] = 'Edit';
  $handler->display->display_options['fields']['edit_node']['exclude'] = TRUE;
  /* Field: Content: Final potential point */
  $handler->display->display_options['fields']['field_application_final_p']['id'] = 'field_application_final_p';
  $handler->display->display_options['fields']['field_application_final_p']['table'] = 'field_data_field_application_final_p';
  $handler->display->display_options['fields']['field_application_final_p']['field'] = 'field_application_final_p';
  $handler->display->display_options['fields']['field_application_final_p']['label'] = 'Final %';
  $handler->display->display_options['fields']['field_application_final_p']['settings'] = array(
    'thousand_separator' => ' ',
    'decimal_separator' => '.',
    'scale' => '2',
    'prefix_suffix' => 1,
  );
  /* Sort criterion: Content: Nid */
  $handler->display->display_options['sorts']['nid']['id'] = 'nid';
  $handler->display->display_options['sorts']['nid']['table'] = 'node';
  $handler->display->display_options['sorts']['nid']['field'] = 'nid';
  $handler->display->display_options['sorts']['nid']['relationship'] = 'field_cat_response_category_target_id';
  /* Contextual filter: Content: Application Type (field_application_type) */
  $handler->display->display_options['arguments']['field_application_type_value']['id'] = 'field_application_type_value';
  $handler->display->display_options['arguments']['field_application_type_value']['table'] = 'field_data_field_application_type';
  $handler->display->display_options['arguments']['field_application_type_value']['field'] = 'field_application_type_value';
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
    'application' => 'application',
  );
  /* Filter criterion: Content: Title */
  $handler->display->display_options['filters']['title']['id'] = 'title';
  $handler->display->display_options['filters']['title']['table'] = 'node';
  $handler->display->display_options['filters']['title']['field'] = 'title';
  $handler->display->display_options['filters']['title']['relationship'] = 'reverse_field_applications_node';
  $handler->display->display_options['filters']['title']['operator'] = 'word';
  $handler->display->display_options['filters']['title']['exposed'] = TRUE;
  $handler->display->display_options['filters']['title']['expose']['operator_id'] = 'title_op';
  $handler->display->display_options['filters']['title']['expose']['label'] = 'in Business Unit';
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
  /* Filter criterion: Content: Nid */
  $handler->display->display_options['filters']['nid']['id'] = 'nid';
  $handler->display->display_options['filters']['nid']['table'] = 'node';
  $handler->display->display_options['filters']['nid']['field'] = 'nid';
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

  /* Display: Data export */
  $handler = $view->new_display('views_data_export', 'Data export', 'views_data_export_1');
  $handler->display->display_options['pager']['type'] = 'none';
  $handler->display->display_options['pager']['options']['offset'] = '0';
  $handler->display->display_options['style_plugin'] = 'views_data_export_csv';
  $handler->display->display_options['style_options']['provide_file'] = 1;
  $handler->display->display_options['style_options']['filename'] = 'scores.csv';
  $handler->display->display_options['style_options']['parent_sort'] = 0;
  $handler->display->display_options['style_options']['quote'] = 1;
  $handler->display->display_options['style_options']['trim'] = 0;
  $handler->display->display_options['style_options']['replace_newlines'] = 0;
  $handler->display->display_options['style_options']['header'] = 1;
  $handler->display->display_options['style_options']['keep_html'] = 0;
  $handler->display->display_options['defaults']['fields'] = FALSE;
  /* Field: Content: Nid */
  $handler->display->display_options['fields']['nid']['id'] = 'nid';
  $handler->display->display_options['fields']['nid']['table'] = 'node';
  $handler->display->display_options['fields']['nid']['field'] = 'nid';
  $handler->display->display_options['fields']['nid']['label'] = 'ID';
  /* Field: Content: Title */
  $handler->display->display_options['fields']['title']['id'] = 'title';
  $handler->display->display_options['fields']['title']['table'] = 'node';
  $handler->display->display_options['fields']['title']['field'] = 'title';
  $handler->display->display_options['fields']['title']['relationship'] = 'reverse_field_applications_node';
  $handler->display->display_options['fields']['title']['label'] = 'Business Unit';
  $handler->display->display_options['fields']['title']['link_to_node'] = FALSE;
  /* Field: Content: Title */
  $handler->display->display_options['fields']['title_1']['id'] = 'title_1';
  $handler->display->display_options['fields']['title_1']['table'] = 'node';
  $handler->display->display_options['fields']['title_1']['field'] = 'title';
  $handler->display->display_options['fields']['title_1']['relationship'] = 'reverse_field_business_units_node';
  $handler->display->display_options['fields']['title_1']['label'] = 'Workgroup';
  $handler->display->display_options['fields']['title_1']['link_to_node'] = FALSE;
  /* Field: Content: Automatic potential point */
  $handler->display->display_options['fields']['field_application_automatic_p']['id'] = 'field_application_automatic_p';
  $handler->display->display_options['fields']['field_application_automatic_p']['table'] = 'field_data_field_application_automatic_p';
  $handler->display->display_options['fields']['field_application_automatic_p']['field'] = 'field_application_automatic_p';
  $handler->display->display_options['fields']['field_application_automatic_p']['relationship'] = 'field_cat_response_application_target_id';
  $handler->display->display_options['fields']['field_application_automatic_p']['label'] = 'Automatic P';
  /* Field: Content: Automatic score */
  $handler->display->display_options['fields']['field_application_automatic']['id'] = 'field_application_automatic';
  $handler->display->display_options['fields']['field_application_automatic']['table'] = 'field_data_field_application_automatic';
  $handler->display->display_options['fields']['field_application_automatic']['field'] = 'field_application_automatic';
  $handler->display->display_options['fields']['field_application_automatic']['relationship'] = 'field_cat_response_application_target_id';
  $handler->display->display_options['fields']['field_application_automatic']['label'] = 'Automatic';
  /* Field: Content: KPI potential point */
  $handler->display->display_options['fields']['field_application_kpi_p']['id'] = 'field_application_kpi_p';
  $handler->display->display_options['fields']['field_application_kpi_p']['table'] = 'field_data_field_application_kpi_p';
  $handler->display->display_options['fields']['field_application_kpi_p']['field'] = 'field_application_kpi_p';
  $handler->display->display_options['fields']['field_application_kpi_p']['label'] = 'KPI P';
  /* Field: Content: KPI score */
  $handler->display->display_options['fields']['field_application_kpi']['id'] = 'field_application_kpi';
  $handler->display->display_options['fields']['field_application_kpi']['table'] = 'field_data_field_application_kpi';
  $handler->display->display_options['fields']['field_application_kpi']['field'] = 'field_application_kpi';
  $handler->display->display_options['fields']['field_application_kpi']['label'] = 'KPI';
  /* Field: Content: Metric potential point */
  $handler->display->display_options['fields']['field_application_metric_p']['id'] = 'field_application_metric_p';
  $handler->display->display_options['fields']['field_application_metric_p']['table'] = 'field_data_field_application_metric_p';
  $handler->display->display_options['fields']['field_application_metric_p']['field'] = 'field_application_metric_p';
  $handler->display->display_options['fields']['field_application_metric_p']['label'] = 'Metric P';
  /* Field: Content: Metric score */
  $handler->display->display_options['fields']['field_application_metric']['id'] = 'field_application_metric';
  $handler->display->display_options['fields']['field_application_metric']['table'] = 'field_data_field_application_metric';
  $handler->display->display_options['fields']['field_application_metric']['field'] = 'field_application_metric';
  $handler->display->display_options['fields']['field_application_metric']['label'] = 'Metric';
  /* Field: Content: Quality potential point */
  $handler->display->display_options['fields']['field_application_quality_p']['id'] = 'field_application_quality_p';
  $handler->display->display_options['fields']['field_application_quality_p']['table'] = 'field_data_field_application_quality_p';
  $handler->display->display_options['fields']['field_application_quality_p']['field'] = 'field_application_quality_p';
  $handler->display->display_options['fields']['field_application_quality_p']['label'] = 'Quality P';
  /* Field: Content: Quality score */
  $handler->display->display_options['fields']['field_application_quality']['id'] = 'field_application_quality';
  $handler->display->display_options['fields']['field_application_quality']['table'] = 'field_data_field_application_quality';
  $handler->display->display_options['fields']['field_application_quality']['field'] = 'field_application_quality';
  $handler->display->display_options['fields']['field_application_quality']['label'] = 'Qualit';
  /* Field: Content: Final score */
  $handler->display->display_options['fields']['field_application_final']['id'] = 'field_application_final';
  $handler->display->display_options['fields']['field_application_final']['table'] = 'field_data_field_application_final';
  $handler->display->display_options['fields']['field_application_final']['field'] = 'field_application_final';
  $handler->display->display_options['fields']['field_application_final']['label'] = 'Final';
  /* Field: Final % */
  $handler->display->display_options['fields']['nothing']['id'] = 'nothing';
  $handler->display->display_options['fields']['nothing']['table'] = 'views';
  $handler->display->display_options['fields']['nothing']['field'] = 'nothing';
  $handler->display->display_options['fields']['nothing']['ui_name'] = 'Final %';
  $handler->display->display_options['fields']['nothing']['label'] = 'Final %';
  $handler->display->display_options['fields']['nothing']['exclude'] = TRUE;
  /* Field: Content: Edit link */
  $handler->display->display_options['fields']['edit_node']['id'] = 'edit_node';
  $handler->display->display_options['fields']['edit_node']['table'] = 'views_entity_node';
  $handler->display->display_options['fields']['edit_node']['field'] = 'edit_node';
  $handler->display->display_options['fields']['edit_node']['label'] = 'Edit';
  $handler->display->display_options['fields']['edit_node']['exclude'] = TRUE;
  /* Field: Content: Final potential point */
  $handler->display->display_options['fields']['field_application_final_p']['id'] = 'field_application_final_p';
  $handler->display->display_options['fields']['field_application_final_p']['table'] = 'field_data_field_application_final_p';
  $handler->display->display_options['fields']['field_application_final_p']['field'] = 'field_application_final_p';
  $handler->display->display_options['fields']['field_application_final_p']['label'] = 'Final %';
  $handler->display->display_options['fields']['field_application_final_p']['type'] = 'number_unformatted';
  $handler->display->display_options['fields']['field_application_final_p']['settings'] = array(
    'thousand_separator' => ' ',
    'decimal_separator' => '.',
    'scale' => '2',
    'prefix_suffix' => 1,
  );
  $handler->display->display_options['path'] = 'admin/score/apptype/%/export';
  $handler->display->display_options['displays'] = array(
    'page' => 'page',
    'default' => 0,
  );
  $handler->display->display_options['use_batch'] = 'batch';
  $handler->display->display_options['segment_size'] = '100';
  $export['score'] = $view;

  $view = new view();
  $view->name = 'score_category';
  $view->description = 'Admin view displaying category score for one application';
  $view->tag = 'admin';
  $view->base_table = 'node';
  $view->human_name = 'Category Score for app';
  $view->core = 7;
  $view->api_version = '3.0';
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

  /* Display: Master */
  $handler = $view->new_display('default', 'Master', 'default');
  $handler->display->display_options['title'] = 'Score';
  $handler->display->display_options['use_more_always'] = FALSE;
  $handler->display->display_options['access']['type'] = 'perm';
  $handler->display->display_options['access']['perm'] = 'administer awards system';
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
  $handler->display->display_options['arguments']['field_cat_response_application_target_id']['default_action'] = 'empty';
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
  /* Filter criterion: Content: Quality potential point (field_cat_response_quality_p) */
  $handler->display->display_options['filters']['field_cat_response_quality_p_value']['id'] = 'field_cat_response_quality_p_value';
  $handler->display->display_options['filters']['field_cat_response_quality_p_value']['table'] = 'field_data_field_cat_response_quality_p';
  $handler->display->display_options['filters']['field_cat_response_quality_p_value']['field'] = 'field_cat_response_quality_p_value';
  $handler->display->display_options['filters']['field_cat_response_quality_p_value']['operator'] = '!=';
  $handler->display->display_options['filters']['field_cat_response_quality_p_value']['value'] = '0';

  /* Display: Page */
  $handler = $view->new_display('page', 'Page', 'page');
  $handler->display->display_options['path'] = 'admin/score/application/%/category';
  $export['score_category'] = $view;

  $view = new view();
  $view->name = 'score_category_apptype';
  $view->description = 'Admin view displaying category score for one application type';
  $view->tag = 'admin';
  $view->base_table = 'node';
  $view->human_name = 'Category Score for apptype';
  $view->core = 7;
  $view->api_version = '3.0';
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

  /* Display: Master */
  $handler = $view->new_display('default', 'Master', 'default');
  $handler->display->display_options['title'] = 'Score';
  $handler->display->display_options['use_more_always'] = FALSE;
  $handler->display->display_options['access']['type'] = 'perm';
  $handler->display->display_options['access']['perm'] = 'administer awards system';
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
    'nothing' => 'nothing',
    'nothing_1' => 'nothing_1',
    'field_cat_response_metric_p' => 'field_cat_response_metric_p',
    'field_cat_response_metric' => 'field_cat_response_metric',
    'nothing_4' => 'nothing_4',
    'nothing_5' => 'nothing_5',
    'field_cat_response_kpi_p' => 'field_cat_response_kpi_p',
    'field_cat_response_kpi' => 'field_cat_response_kpi',
    'nothing_2' => 'nothing_2',
    'nothing_3' => 'nothing_3',
    'field_cat_response_quality_p' => 'field_cat_response_quality_p',
    'field_cat_response_quality' => 'field_cat_response_quality',
    'nothing_8' => 'nothing_8',
    'nothing_7' => 'nothing_7',
    'field_cat_response_final' => 'field_cat_response_final',
    'nothing_6' => 'nothing_6',
    'field_cat_response_final_p' => 'field_cat_response_final_p',
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
    'nothing' => array(
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'nothing_1' => array(
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
    'nothing_4' => array(
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'nothing_5' => array(
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
    'nothing_2' => array(
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'nothing_3' => array(
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
    'nothing_8' => array(
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'nothing_7' => array(
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
    'nothing_6' => array(
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'field_cat_response_final_p' => array(
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
  /* Field: Automatic P */
  $handler->display->display_options['fields']['field_cat_response_automatic_p']['id'] = 'field_cat_response_automatic_p';
  $handler->display->display_options['fields']['field_cat_response_automatic_p']['table'] = 'field_data_field_cat_response_automatic_p';
  $handler->display->display_options['fields']['field_cat_response_automatic_p']['field'] = 'field_cat_response_automatic_p';
  $handler->display->display_options['fields']['field_cat_response_automatic_p']['ui_name'] = 'Automatic P';
  $handler->display->display_options['fields']['field_cat_response_automatic_p']['label'] = 'Auto P';
  /* Field: Automatic */
  $handler->display->display_options['fields']['field_cat_response_automatic']['id'] = 'field_cat_response_automatic';
  $handler->display->display_options['fields']['field_cat_response_automatic']['table'] = 'field_data_field_cat_response_automatic';
  $handler->display->display_options['fields']['field_cat_response_automatic']['field'] = 'field_cat_response_automatic';
  $handler->display->display_options['fields']['field_cat_response_automatic']['ui_name'] = 'Automatic';
  $handler->display->display_options['fields']['field_cat_response_automatic']['label'] = 'Auto';
  /* Field: Automatic % */
  $handler->display->display_options['fields']['nothing']['id'] = 'nothing';
  $handler->display->display_options['fields']['nothing']['table'] = 'views';
  $handler->display->display_options['fields']['nothing']['field'] = 'nothing';
  $handler->display->display_options['fields']['nothing']['ui_name'] = 'Automatic %';
  $handler->display->display_options['fields']['nothing']['label'] = 'Auto %';
  /* Field: Automatic Weight */
  $handler->display->display_options['fields']['nothing_1']['id'] = 'nothing_1';
  $handler->display->display_options['fields']['nothing_1']['table'] = 'views';
  $handler->display->display_options['fields']['nothing_1']['field'] = 'nothing';
  $handler->display->display_options['fields']['nothing_1']['ui_name'] = 'Automatic Weight';
  $handler->display->display_options['fields']['nothing_1']['label'] = 'Auto weight';
  /* Field: Metric P */
  $handler->display->display_options['fields']['field_cat_response_metric_p']['id'] = 'field_cat_response_metric_p';
  $handler->display->display_options['fields']['field_cat_response_metric_p']['table'] = 'field_data_field_cat_response_metric_p';
  $handler->display->display_options['fields']['field_cat_response_metric_p']['field'] = 'field_cat_response_metric_p';
  $handler->display->display_options['fields']['field_cat_response_metric_p']['ui_name'] = 'Metric P';
  $handler->display->display_options['fields']['field_cat_response_metric_p']['label'] = 'Metric P';
  /* Field: Metric */
  $handler->display->display_options['fields']['field_cat_response_metric']['id'] = 'field_cat_response_metric';
  $handler->display->display_options['fields']['field_cat_response_metric']['table'] = 'field_data_field_cat_response_metric';
  $handler->display->display_options['fields']['field_cat_response_metric']['field'] = 'field_cat_response_metric';
  $handler->display->display_options['fields']['field_cat_response_metric']['ui_name'] = 'Metric';
  $handler->display->display_options['fields']['field_cat_response_metric']['label'] = 'Metric';
  /* Field: Metric % */
  $handler->display->display_options['fields']['nothing_4']['id'] = 'nothing_4';
  $handler->display->display_options['fields']['nothing_4']['table'] = 'views';
  $handler->display->display_options['fields']['nothing_4']['field'] = 'nothing';
  $handler->display->display_options['fields']['nothing_4']['ui_name'] = 'Metric %';
  $handler->display->display_options['fields']['nothing_4']['label'] = 'Metric %';
  /* Field: Metric Weight */
  $handler->display->display_options['fields']['nothing_5']['id'] = 'nothing_5';
  $handler->display->display_options['fields']['nothing_5']['table'] = 'views';
  $handler->display->display_options['fields']['nothing_5']['field'] = 'nothing';
  $handler->display->display_options['fields']['nothing_5']['ui_name'] = 'Metric Weight';
  $handler->display->display_options['fields']['nothing_5']['label'] = 'Metric Weight';
  /* Field: KPI P */
  $handler->display->display_options['fields']['field_cat_response_kpi_p']['id'] = 'field_cat_response_kpi_p';
  $handler->display->display_options['fields']['field_cat_response_kpi_p']['table'] = 'field_data_field_cat_response_kpi_p';
  $handler->display->display_options['fields']['field_cat_response_kpi_p']['field'] = 'field_cat_response_kpi_p';
  $handler->display->display_options['fields']['field_cat_response_kpi_p']['ui_name'] = 'KPI P';
  $handler->display->display_options['fields']['field_cat_response_kpi_p']['label'] = 'KPI P';
  /* Field: KPI */
  $handler->display->display_options['fields']['field_cat_response_kpi']['id'] = 'field_cat_response_kpi';
  $handler->display->display_options['fields']['field_cat_response_kpi']['table'] = 'field_data_field_cat_response_kpi';
  $handler->display->display_options['fields']['field_cat_response_kpi']['field'] = 'field_cat_response_kpi';
  $handler->display->display_options['fields']['field_cat_response_kpi']['ui_name'] = 'KPI';
  $handler->display->display_options['fields']['field_cat_response_kpi']['label'] = 'KPI';
  /* Field: KPI % */
  $handler->display->display_options['fields']['nothing_2']['id'] = 'nothing_2';
  $handler->display->display_options['fields']['nothing_2']['table'] = 'views';
  $handler->display->display_options['fields']['nothing_2']['field'] = 'nothing';
  $handler->display->display_options['fields']['nothing_2']['ui_name'] = 'KPI %';
  $handler->display->display_options['fields']['nothing_2']['label'] = 'KPI %';
  /* Field: KPI Weight */
  $handler->display->display_options['fields']['nothing_3']['id'] = 'nothing_3';
  $handler->display->display_options['fields']['nothing_3']['table'] = 'views';
  $handler->display->display_options['fields']['nothing_3']['field'] = 'nothing';
  $handler->display->display_options['fields']['nothing_3']['ui_name'] = 'KPI Weight';
  $handler->display->display_options['fields']['nothing_3']['label'] = 'KPI weight';
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
  /* Field: Quality % */
  $handler->display->display_options['fields']['nothing_8']['id'] = 'nothing_8';
  $handler->display->display_options['fields']['nothing_8']['table'] = 'views';
  $handler->display->display_options['fields']['nothing_8']['field'] = 'nothing';
  $handler->display->display_options['fields']['nothing_8']['ui_name'] = 'Quality %';
  $handler->display->display_options['fields']['nothing_8']['label'] = 'Quality %';
  /* Field: Quality Weight */
  $handler->display->display_options['fields']['nothing_7']['id'] = 'nothing_7';
  $handler->display->display_options['fields']['nothing_7']['table'] = 'views';
  $handler->display->display_options['fields']['nothing_7']['field'] = 'nothing';
  $handler->display->display_options['fields']['nothing_7']['ui_name'] = 'Quality Weight';
  $handler->display->display_options['fields']['nothing_7']['label'] = 'Quality Weight';
  /* Field: Final Category Score */
  $handler->display->display_options['fields']['field_cat_response_final']['id'] = 'field_cat_response_final';
  $handler->display->display_options['fields']['field_cat_response_final']['table'] = 'field_data_field_cat_response_final';
  $handler->display->display_options['fields']['field_cat_response_final']['field'] = 'field_cat_response_final';
  $handler->display->display_options['fields']['field_cat_response_final']['ui_name'] = 'Final Category Score';
  $handler->display->display_options['fields']['field_cat_response_final']['label'] = 'Final category score';
  /* Field: Final Category % */
  $handler->display->display_options['fields']['nothing_6']['id'] = 'nothing_6';
  $handler->display->display_options['fields']['nothing_6']['table'] = 'views';
  $handler->display->display_options['fields']['nothing_6']['field'] = 'nothing';
  $handler->display->display_options['fields']['nothing_6']['ui_name'] = 'Final Category %';
  $handler->display->display_options['fields']['nothing_6']['label'] = 'Final category %';
  $handler->display->display_options['fields']['nothing_6']['exclude'] = TRUE;
  /* Field: Content: Final potential point */
  $handler->display->display_options['fields']['field_cat_response_final_p']['id'] = 'field_cat_response_final_p';
  $handler->display->display_options['fields']['field_cat_response_final_p']['table'] = 'field_data_field_cat_response_final_p';
  $handler->display->display_options['fields']['field_cat_response_final_p']['field'] = 'field_cat_response_final_p';
  $handler->display->display_options['fields']['field_cat_response_final_p']['label'] = 'Final category %';
  $handler->display->display_options['fields']['field_cat_response_final_p']['settings'] = array(
    'thousand_separator' => ' ',
    'decimal_separator' => '.',
    'scale' => '2',
    'prefix_suffix' => 1,
  );
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
  $handler->display->display_options['path'] = 'admin/score/apptype/%/category';

  /* Display: Data export */
  $handler = $view->new_display('views_data_export', 'Data export', 'views_data_export_1');
  $handler->display->display_options['pager']['type'] = 'none';
  $handler->display->display_options['pager']['options']['offset'] = '0';
  $handler->display->display_options['style_plugin'] = 'views_data_export_csv';
  $handler->display->display_options['style_options']['provide_file'] = 1;
  $handler->display->display_options['style_options']['filename'] = 'scores.csv';
  $handler->display->display_options['style_options']['parent_sort'] = 0;
  $handler->display->display_options['style_options']['quote'] = 1;
  $handler->display->display_options['style_options']['trim'] = 0;
  $handler->display->display_options['style_options']['replace_newlines'] = 0;
  $handler->display->display_options['style_options']['header'] = 1;
  $handler->display->display_options['style_options']['keep_html'] = 0;
  $handler->display->display_options['defaults']['fields'] = FALSE;
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
  /* Field: Automatic P */
  $handler->display->display_options['fields']['field_cat_response_automatic_p']['id'] = 'field_cat_response_automatic_p';
  $handler->display->display_options['fields']['field_cat_response_automatic_p']['table'] = 'field_data_field_cat_response_automatic_p';
  $handler->display->display_options['fields']['field_cat_response_automatic_p']['field'] = 'field_cat_response_automatic_p';
  $handler->display->display_options['fields']['field_cat_response_automatic_p']['ui_name'] = 'Automatic P';
  $handler->display->display_options['fields']['field_cat_response_automatic_p']['label'] = 'Auto P';
  /* Field: Automatic */
  $handler->display->display_options['fields']['field_cat_response_automatic']['id'] = 'field_cat_response_automatic';
  $handler->display->display_options['fields']['field_cat_response_automatic']['table'] = 'field_data_field_cat_response_automatic';
  $handler->display->display_options['fields']['field_cat_response_automatic']['field'] = 'field_cat_response_automatic';
  $handler->display->display_options['fields']['field_cat_response_automatic']['ui_name'] = 'Automatic';
  $handler->display->display_options['fields']['field_cat_response_automatic']['label'] = 'Auto';
  /* Field: Automatic % */
  $handler->display->display_options['fields']['nothing']['id'] = 'nothing';
  $handler->display->display_options['fields']['nothing']['table'] = 'views';
  $handler->display->display_options['fields']['nothing']['field'] = 'nothing';
  $handler->display->display_options['fields']['nothing']['ui_name'] = 'Automatic %';
  $handler->display->display_options['fields']['nothing']['label'] = 'Auto %';
  $handler->display->display_options['fields']['nothing']['exclude'] = TRUE;
  /* Field: Automatic Weight */
  $handler->display->display_options['fields']['nothing_1']['id'] = 'nothing_1';
  $handler->display->display_options['fields']['nothing_1']['table'] = 'views';
  $handler->display->display_options['fields']['nothing_1']['field'] = 'nothing';
  $handler->display->display_options['fields']['nothing_1']['ui_name'] = 'Automatic Weight';
  $handler->display->display_options['fields']['nothing_1']['label'] = 'Auto weight';
  $handler->display->display_options['fields']['nothing_1']['exclude'] = TRUE;
  /* Field: Metric P */
  $handler->display->display_options['fields']['field_cat_response_metric_p']['id'] = 'field_cat_response_metric_p';
  $handler->display->display_options['fields']['field_cat_response_metric_p']['table'] = 'field_data_field_cat_response_metric_p';
  $handler->display->display_options['fields']['field_cat_response_metric_p']['field'] = 'field_cat_response_metric_p';
  $handler->display->display_options['fields']['field_cat_response_metric_p']['ui_name'] = 'Metric P';
  $handler->display->display_options['fields']['field_cat_response_metric_p']['label'] = 'Metric P';
  /* Field: Metric */
  $handler->display->display_options['fields']['field_cat_response_metric']['id'] = 'field_cat_response_metric';
  $handler->display->display_options['fields']['field_cat_response_metric']['table'] = 'field_data_field_cat_response_metric';
  $handler->display->display_options['fields']['field_cat_response_metric']['field'] = 'field_cat_response_metric';
  $handler->display->display_options['fields']['field_cat_response_metric']['ui_name'] = 'Metric';
  $handler->display->display_options['fields']['field_cat_response_metric']['label'] = 'Metric';
  /* Field: Metric % */
  $handler->display->display_options['fields']['nothing_4']['id'] = 'nothing_4';
  $handler->display->display_options['fields']['nothing_4']['table'] = 'views';
  $handler->display->display_options['fields']['nothing_4']['field'] = 'nothing';
  $handler->display->display_options['fields']['nothing_4']['ui_name'] = 'Metric %';
  $handler->display->display_options['fields']['nothing_4']['label'] = 'Metric %';
  $handler->display->display_options['fields']['nothing_4']['exclude'] = TRUE;
  /* Field: Metric Weight */
  $handler->display->display_options['fields']['nothing_5']['id'] = 'nothing_5';
  $handler->display->display_options['fields']['nothing_5']['table'] = 'views';
  $handler->display->display_options['fields']['nothing_5']['field'] = 'nothing';
  $handler->display->display_options['fields']['nothing_5']['ui_name'] = 'Metric Weight';
  $handler->display->display_options['fields']['nothing_5']['label'] = 'Metric Weight';
  $handler->display->display_options['fields']['nothing_5']['exclude'] = TRUE;
  /* Field: KPI P */
  $handler->display->display_options['fields']['field_cat_response_kpi_p']['id'] = 'field_cat_response_kpi_p';
  $handler->display->display_options['fields']['field_cat_response_kpi_p']['table'] = 'field_data_field_cat_response_kpi_p';
  $handler->display->display_options['fields']['field_cat_response_kpi_p']['field'] = 'field_cat_response_kpi_p';
  $handler->display->display_options['fields']['field_cat_response_kpi_p']['ui_name'] = 'KPI P';
  $handler->display->display_options['fields']['field_cat_response_kpi_p']['label'] = 'KPI P';
  /* Field: KPI */
  $handler->display->display_options['fields']['field_cat_response_kpi']['id'] = 'field_cat_response_kpi';
  $handler->display->display_options['fields']['field_cat_response_kpi']['table'] = 'field_data_field_cat_response_kpi';
  $handler->display->display_options['fields']['field_cat_response_kpi']['field'] = 'field_cat_response_kpi';
  $handler->display->display_options['fields']['field_cat_response_kpi']['ui_name'] = 'KPI';
  $handler->display->display_options['fields']['field_cat_response_kpi']['label'] = 'KPI';
  /* Field: KPI % */
  $handler->display->display_options['fields']['nothing_2']['id'] = 'nothing_2';
  $handler->display->display_options['fields']['nothing_2']['table'] = 'views';
  $handler->display->display_options['fields']['nothing_2']['field'] = 'nothing';
  $handler->display->display_options['fields']['nothing_2']['ui_name'] = 'KPI %';
  $handler->display->display_options['fields']['nothing_2']['label'] = 'KPI %';
  $handler->display->display_options['fields']['nothing_2']['exclude'] = TRUE;
  /* Field: KPI Weight */
  $handler->display->display_options['fields']['nothing_3']['id'] = 'nothing_3';
  $handler->display->display_options['fields']['nothing_3']['table'] = 'views';
  $handler->display->display_options['fields']['nothing_3']['field'] = 'nothing';
  $handler->display->display_options['fields']['nothing_3']['ui_name'] = 'KPI Weight';
  $handler->display->display_options['fields']['nothing_3']['label'] = 'KPI weight';
  $handler->display->display_options['fields']['nothing_3']['exclude'] = TRUE;
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
  /* Field: Quality % */
  $handler->display->display_options['fields']['nothing_8']['id'] = 'nothing_8';
  $handler->display->display_options['fields']['nothing_8']['table'] = 'views';
  $handler->display->display_options['fields']['nothing_8']['field'] = 'nothing';
  $handler->display->display_options['fields']['nothing_8']['ui_name'] = 'Quality %';
  $handler->display->display_options['fields']['nothing_8']['label'] = 'Quality %';
  $handler->display->display_options['fields']['nothing_8']['exclude'] = TRUE;
  /* Field: Quality Weight */
  $handler->display->display_options['fields']['nothing_7']['id'] = 'nothing_7';
  $handler->display->display_options['fields']['nothing_7']['table'] = 'views';
  $handler->display->display_options['fields']['nothing_7']['field'] = 'nothing';
  $handler->display->display_options['fields']['nothing_7']['ui_name'] = 'Quality Weight';
  $handler->display->display_options['fields']['nothing_7']['label'] = 'Quality Weight';
  $handler->display->display_options['fields']['nothing_7']['exclude'] = TRUE;
  /* Field: Final Category Score */
  $handler->display->display_options['fields']['field_cat_response_final']['id'] = 'field_cat_response_final';
  $handler->display->display_options['fields']['field_cat_response_final']['table'] = 'field_data_field_cat_response_final';
  $handler->display->display_options['fields']['field_cat_response_final']['field'] = 'field_cat_response_final';
  $handler->display->display_options['fields']['field_cat_response_final']['ui_name'] = 'Final Category Score';
  $handler->display->display_options['fields']['field_cat_response_final']['label'] = 'Final category score';
  /* Field: Final Category % */
  $handler->display->display_options['fields']['nothing_6']['id'] = 'nothing_6';
  $handler->display->display_options['fields']['nothing_6']['table'] = 'views';
  $handler->display->display_options['fields']['nothing_6']['field'] = 'nothing';
  $handler->display->display_options['fields']['nothing_6']['ui_name'] = 'Final Category %';
  $handler->display->display_options['fields']['nothing_6']['label'] = 'Final category %';
  $handler->display->display_options['fields']['nothing_6']['exclude'] = TRUE;
  /* Field: Content: Final potential point */
  $handler->display->display_options['fields']['field_cat_response_final_p']['id'] = 'field_cat_response_final_p';
  $handler->display->display_options['fields']['field_cat_response_final_p']['table'] = 'field_data_field_cat_response_final_p';
  $handler->display->display_options['fields']['field_cat_response_final_p']['field'] = 'field_cat_response_final_p';
  $handler->display->display_options['fields']['field_cat_response_final_p']['label'] = 'Final category %';
  $handler->display->display_options['fields']['field_cat_response_final_p']['type'] = 'number_unformatted';
  $handler->display->display_options['fields']['field_cat_response_final_p']['settings'] = array(
    'thousand_separator' => ' ',
    'decimal_separator' => '.',
    'scale' => '2',
    'prefix_suffix' => 1,
  );
  $handler->display->display_options['path'] = 'admin/score/apptype/%/category/export';
  $handler->display->display_options['displays'] = array(
    'page' => 'page',
    'default' => 0,
  );
  $handler->display->display_options['use_batch'] = 'batch';
  $handler->display->display_options['segment_size'] = '100';
  $export['score_category_apptype'] = $view;

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
  $handler->display->display_options['access']['type'] = 'role';
  $handler->display->display_options['access']['role'] = array(
    3 => '3',
    4 => '4',
  );
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
  $handler->display->display_options['arguments']['field_cat_response_application_target_id']['default_action'] = 'empty';
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
  /* Filter criterion: Content: Quality potential point (field_cat_response_quality_p) */
  $handler->display->display_options['filters']['field_cat_response_quality_p_value']['id'] = 'field_cat_response_quality_p_value';
  $handler->display->display_options['filters']['field_cat_response_quality_p_value']['table'] = 'field_data_field_cat_response_quality_p';
  $handler->display->display_options['filters']['field_cat_response_quality_p_value']['field'] = 'field_cat_response_quality_p_value';
  $handler->display->display_options['filters']['field_cat_response_quality_p_value']['operator'] = '!=';
  $handler->display->display_options['filters']['field_cat_response_quality_p_value']['value'] = '0';

  /* Display: Page */
  $handler = $view->new_display('page', 'Page', 'page');
  $handler->display->display_options['path'] = 'admin/score/application/%';
  $export['score_application'] = $view;

  return $export;
}
