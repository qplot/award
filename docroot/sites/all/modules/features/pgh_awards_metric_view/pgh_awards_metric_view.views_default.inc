<?php
/**
 * @file
 * pgh_awards_metric_view.views_default.inc
 */

/**
 * Implements hook_views_default_views().
 */
function pgh_awards_metric_view_views_default_views() {
  $export = array();

  $view = new view();
  $view->name = 'metric';
  $view->description = '';
  $view->tag = 'default';
  $view->base_table = 'node';
  $view->human_name = 'Metric';
  $view->core = 7;
  $view->api_version = '3.0';
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

  /* Display: Master */
  $handler = $view->new_display('default', 'Master', 'default');
  $handler->display->display_options['title'] = 'Metric Spec';
  $handler->display->display_options['use_more_always'] = FALSE;
  $handler->display->display_options['access']['type'] = 'perm';
  $handler->display->display_options['access']['perm'] = 'administer awards system';
  $handler->display->display_options['cache']['type'] = 'none';
  $handler->display->display_options['query']['type'] = 'views_query';
  $handler->display->display_options['exposed_form']['type'] = 'basic';
  $handler->display->display_options['pager']['type'] = 'full';
  $handler->display->display_options['pager']['options']['items_per_page'] = '10';
  $handler->display->display_options['style_plugin'] = 'table';
  $handler->display->display_options['style_options']['default_row_class'] = FALSE;
  $handler->display->display_options['style_options']['row_class_special'] = FALSE;
  $handler->display->display_options['style_options']['columns'] = array(
    'field_metric_category' => 'field_metric_category',
    'title' => 'title',
    'body' => 'body',
    'field_metric_formula' => 'field_metric_formula',
    'field_metric_reference' => 'field_metric_reference',
    'field_metric_orientation' => 'field_metric_orientation',
    'field_metric_weight' => 'field_metric_weight',
  );
  $handler->display->display_options['style_options']['default'] = '-1';
  $handler->display->display_options['style_options']['info'] = array(
    'field_metric_category' => array(
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
    'field_metric_formula' => array(
      'sortable' => 1,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'field_metric_reference' => array(
      'sortable' => 1,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'field_metric_orientation' => array(
      'sortable' => 1,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'field_metric_weight' => array(
      'sortable' => 1,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
  );
  /* Field: Content: Category */
  $handler->display->display_options['fields']['field_metric_category']['id'] = 'field_metric_category';
  $handler->display->display_options['fields']['field_metric_category']['table'] = 'field_data_field_metric_category';
  $handler->display->display_options['fields']['field_metric_category']['field'] = 'field_metric_category';
  $handler->display->display_options['fields']['field_metric_category']['settings'] = array(
    'link' => 0,
  );
  /* Field: Content: Title */
  $handler->display->display_options['fields']['title']['id'] = 'title';
  $handler->display->display_options['fields']['title']['table'] = 'node';
  $handler->display->display_options['fields']['title']['field'] = 'title';
  $handler->display->display_options['fields']['title']['exclude'] = TRUE;
  $handler->display->display_options['fields']['title']['alter']['word_boundary'] = FALSE;
  $handler->display->display_options['fields']['title']['alter']['ellipsis'] = FALSE;
  /* Field: Content: Body */
  $handler->display->display_options['fields']['body']['id'] = 'body';
  $handler->display->display_options['fields']['body']['table'] = 'field_data_body';
  $handler->display->display_options['fields']['body']['field'] = 'body';
  $handler->display->display_options['fields']['body']['label'] = 'Metric Description';
  /* Field: Content: Formula */
  $handler->display->display_options['fields']['field_metric_formula']['id'] = 'field_metric_formula';
  $handler->display->display_options['fields']['field_metric_formula']['table'] = 'field_data_field_metric_formula';
  $handler->display->display_options['fields']['field_metric_formula']['field'] = 'field_metric_formula';
  /* Field: Content: Reference */
  $handler->display->display_options['fields']['field_metric_reference']['id'] = 'field_metric_reference';
  $handler->display->display_options['fields']['field_metric_reference']['table'] = 'field_data_field_metric_reference';
  $handler->display->display_options['fields']['field_metric_reference']['field'] = 'field_metric_reference';
  /* Field: Content: Orientation */
  $handler->display->display_options['fields']['field_metric_orientation']['id'] = 'field_metric_orientation';
  $handler->display->display_options['fields']['field_metric_orientation']['table'] = 'field_data_field_metric_orientation';
  $handler->display->display_options['fields']['field_metric_orientation']['field'] = 'field_metric_orientation';
  /* Field: Content: Weight */
  $handler->display->display_options['fields']['field_metric_weight']['id'] = 'field_metric_weight';
  $handler->display->display_options['fields']['field_metric_weight']['table'] = 'field_data_field_metric_weight';
  $handler->display->display_options['fields']['field_metric_weight']['field'] = 'field_metric_weight';
  /* Field: Content: Edit link */
  $handler->display->display_options['fields']['edit_node']['id'] = 'edit_node';
  $handler->display->display_options['fields']['edit_node']['table'] = 'views_entity_node';
  $handler->display->display_options['fields']['edit_node']['field'] = 'edit_node';
  $handler->display->display_options['fields']['edit_node']['label'] = 'Edit';
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
    'metric' => 'metric',
  );

  /* Display: Page */
  $handler = $view->new_display('page', 'Page', 'page');
  $handler->display->display_options['path'] = 'admin/metric';
  $export['metric'] = $view;

  $view = new view();
  $view->name = 'metric_score';
  $view->description = '';
  $view->tag = 'default';
  $view->base_table = 'node';
  $view->human_name = 'Metric Score';
  $view->core = 7;
  $view->api_version = '3.0';
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

  /* Display: Master */
  $handler = $view->new_display('default', 'Master', 'default');
  $handler->display->display_options['title'] = 'Metric Score';
  $handler->display->display_options['use_more_always'] = FALSE;
  $handler->display->display_options['access']['type'] = 'perm';
  $handler->display->display_options['cache']['type'] = 'none';
  $handler->display->display_options['query']['type'] = 'views_query';
  $handler->display->display_options['exposed_form']['type'] = 'basic';
  $handler->display->display_options['pager']['type'] = 'none';
  $handler->display->display_options['pager']['options']['offset'] = '0';
  $handler->display->display_options['style_plugin'] = 'table';
  $handler->display->display_options['style_options']['default_row_class'] = FALSE;
  $handler->display->display_options['style_options']['row_class_special'] = FALSE;
  $handler->display->display_options['style_options']['columns'] = array(
    'field_metric_formula' => 'field_metric_formula',
    'field_metric_category' => 'field_metric_category',
    'title' => 'title',
    'field_metric_response_weight' => 'field_metric_response_weight',
    'field_metric_response_value' => 'field_metric_response_value',
    'field_metric_response_score' => 'field_metric_response_score',
  );
  $handler->display->display_options['style_options']['default'] = '-1';
  $handler->display->display_options['style_options']['info'] = array(
    'field_metric_formula' => array(
      'sortable' => 1,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'field_metric_category' => array(
      'sortable' => 1,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'title' => array(
      'sortable' => 0,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'field_metric_response_weight' => array(
      'sortable' => 1,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'field_metric_response_value' => array(
      'sortable' => 1,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'field_metric_response_score' => array(
      'sortable' => 1,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
  );
  /* Relationship: Metric */
  $handler->display->display_options['relationships']['field_metric_response_metric_target_id']['id'] = 'field_metric_response_metric_target_id';
  $handler->display->display_options['relationships']['field_metric_response_metric_target_id']['table'] = 'field_data_field_metric_response_metric';
  $handler->display->display_options['relationships']['field_metric_response_metric_target_id']['field'] = 'field_metric_response_metric_target_id';
  $handler->display->display_options['relationships']['field_metric_response_metric_target_id']['ui_name'] = 'Metric';
  $handler->display->display_options['relationships']['field_metric_response_metric_target_id']['label'] = 'Metric';
  /* Field: Content: Body */
  $handler->display->display_options['fields']['body']['id'] = 'body';
  $handler->display->display_options['fields']['body']['table'] = 'field_data_body';
  $handler->display->display_options['fields']['body']['field'] = 'body';
  $handler->display->display_options['fields']['body']['relationship'] = 'field_metric_response_metric_target_id';
  $handler->display->display_options['fields']['body']['label'] = 'Metric';
  /* Field: Content: Formula */
  $handler->display->display_options['fields']['field_metric_formula']['id'] = 'field_metric_formula';
  $handler->display->display_options['fields']['field_metric_formula']['table'] = 'field_data_field_metric_formula';
  $handler->display->display_options['fields']['field_metric_formula']['field'] = 'field_metric_formula';
  $handler->display->display_options['fields']['field_metric_formula']['relationship'] = 'field_metric_response_metric_target_id';
  /* Field: Content: Category */
  $handler->display->display_options['fields']['field_metric_category']['id'] = 'field_metric_category';
  $handler->display->display_options['fields']['field_metric_category']['table'] = 'field_data_field_metric_category';
  $handler->display->display_options['fields']['field_metric_category']['field'] = 'field_metric_category';
  $handler->display->display_options['fields']['field_metric_category']['relationship'] = 'field_metric_response_metric_target_id';
  $handler->display->display_options['fields']['field_metric_category']['settings'] = array(
    'link' => 0,
  );
  /* Field: Content: Title */
  $handler->display->display_options['fields']['title']['id'] = 'title';
  $handler->display->display_options['fields']['title']['table'] = 'node';
  $handler->display->display_options['fields']['title']['field'] = 'title';
  $handler->display->display_options['fields']['title']['label'] = '';
  $handler->display->display_options['fields']['title']['exclude'] = TRUE;
  $handler->display->display_options['fields']['title']['alter']['word_boundary'] = FALSE;
  $handler->display->display_options['fields']['title']['alter']['ellipsis'] = FALSE;
  $handler->display->display_options['fields']['title']['element_label_colon'] = FALSE;
  /* Field: Content: Weight */
  $handler->display->display_options['fields']['field_metric_response_weight']['id'] = 'field_metric_response_weight';
  $handler->display->display_options['fields']['field_metric_response_weight']['table'] = 'field_data_field_metric_response_weight';
  $handler->display->display_options['fields']['field_metric_response_weight']['field'] = 'field_metric_response_weight';
  /* Field: Content: Value */
  $handler->display->display_options['fields']['field_metric_response_value']['id'] = 'field_metric_response_value';
  $handler->display->display_options['fields']['field_metric_response_value']['table'] = 'field_data_field_metric_response_value';
  $handler->display->display_options['fields']['field_metric_response_value']['field'] = 'field_metric_response_value';
  $handler->display->display_options['fields']['field_metric_response_value']['label'] = 'Evaluated';
  /* Field: Content: Score */
  $handler->display->display_options['fields']['field_metric_response_score']['id'] = 'field_metric_response_score';
  $handler->display->display_options['fields']['field_metric_response_score']['table'] = 'field_data_field_metric_response_score';
  $handler->display->display_options['fields']['field_metric_response_score']['field'] = 'field_metric_response_score';
  /* Field: Content: Edit link */
  $handler->display->display_options['fields']['edit_node']['id'] = 'edit_node';
  $handler->display->display_options['fields']['edit_node']['table'] = 'views_entity_node';
  $handler->display->display_options['fields']['edit_node']['field'] = 'edit_node';
  $handler->display->display_options['fields']['edit_node']['label'] = 'Edit';
  /* Sort criterion: Content: Post date */
  $handler->display->display_options['sorts']['created']['id'] = 'created';
  $handler->display->display_options['sorts']['created']['table'] = 'node';
  $handler->display->display_options['sorts']['created']['field'] = 'created';
  $handler->display->display_options['sorts']['created']['order'] = 'DESC';
  /* Contextual filter: Content: Application (field_metric_response_app) */
  $handler->display->display_options['arguments']['field_metric_response_app_target_id']['id'] = 'field_metric_response_app_target_id';
  $handler->display->display_options['arguments']['field_metric_response_app_target_id']['table'] = 'field_data_field_metric_response_app';
  $handler->display->display_options['arguments']['field_metric_response_app_target_id']['field'] = 'field_metric_response_app_target_id';
  $handler->display->display_options['arguments']['field_metric_response_app_target_id']['default_action'] = 'empty';
  $handler->display->display_options['arguments']['field_metric_response_app_target_id']['title_enable'] = TRUE;
  $handler->display->display_options['arguments']['field_metric_response_app_target_id']['title'] = 'Metric score for application: %1';
  $handler->display->display_options['arguments']['field_metric_response_app_target_id']['default_argument_type'] = 'fixed';
  $handler->display->display_options['arguments']['field_metric_response_app_target_id']['summary']['number_of_records'] = '0';
  $handler->display->display_options['arguments']['field_metric_response_app_target_id']['summary']['format'] = 'default_summary';
  $handler->display->display_options['arguments']['field_metric_response_app_target_id']['summary_options']['items_per_page'] = '25';
  $handler->display->display_options['arguments']['field_metric_response_app_target_id']['specify_validation'] = TRUE;
  $handler->display->display_options['arguments']['field_metric_response_app_target_id']['validate']['type'] = 'node';
  $handler->display->display_options['arguments']['field_metric_response_app_target_id']['validate_options']['types'] = array(
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
    'metric_response' => 'metric_response',
  );

  /* Display: Page */
  $handler = $view->new_display('page', 'Page', 'page');
  $handler->display->display_options['path'] = 'admin/metric/application/%/score';
  $export['metric_score'] = $view;

  $view = new view();
  $view->name = 'metric_score_for_apptype';
  $view->description = '';
  $view->tag = 'default';
  $view->base_table = 'node';
  $view->human_name = 'Metric Score for apptype';
  $view->core = 7;
  $view->api_version = '3.0';
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

  /* Display: Master */
  $handler = $view->new_display('default', 'Master', 'default');
  $handler->display->display_options['title'] = 'Metric Score';
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
  $handler->display->display_options['style_options']['default_row_class'] = FALSE;
  $handler->display->display_options['style_options']['row_class_special'] = FALSE;
  $handler->display->display_options['style_options']['columns'] = array(
    'nid' => 'nid',
    'title_1' => 'title_1',
    'body_1' => 'body_1',
    'body' => 'body',
    'field_metric_formula' => 'field_metric_formula',
    'title' => 'title',
    'field_metric_response_weight' => 'field_metric_response_weight',
    'field_metric_response_value' => 'field_metric_response_value',
    'field_metric_response_score' => 'field_metric_response_score',
    'edit_node' => 'edit_node',
  );
  $handler->display->display_options['style_options']['default'] = '-1';
  $handler->display->display_options['style_options']['info'] = array(
    'nid' => array(
      'sortable' => 0,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'title_1' => array(
      'sortable' => 0,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'body_1' => array(
      'sortable' => 0,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'body' => array(
      'sortable' => 0,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'field_metric_formula' => array(
      'sortable' => 0,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'title' => array(
      'sortable' => 0,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'field_metric_response_weight' => array(
      'sortable' => 0,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'field_metric_response_value' => array(
      'sortable' => 0,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'field_metric_response_score' => array(
      'sortable' => 0,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'edit_node' => array(
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
  );
  /* Relationship: Metric */
  $handler->display->display_options['relationships']['field_metric_response_metric_target_id']['id'] = 'field_metric_response_metric_target_id';
  $handler->display->display_options['relationships']['field_metric_response_metric_target_id']['table'] = 'field_data_field_metric_response_metric';
  $handler->display->display_options['relationships']['field_metric_response_metric_target_id']['field'] = 'field_metric_response_metric_target_id';
  $handler->display->display_options['relationships']['field_metric_response_metric_target_id']['ui_name'] = 'Metric';
  $handler->display->display_options['relationships']['field_metric_response_metric_target_id']['label'] = 'Metric';
  /* Relationship: Application */
  $handler->display->display_options['relationships']['field_metric_response_app_target_id']['id'] = 'field_metric_response_app_target_id';
  $handler->display->display_options['relationships']['field_metric_response_app_target_id']['table'] = 'field_data_field_metric_response_app';
  $handler->display->display_options['relationships']['field_metric_response_app_target_id']['field'] = 'field_metric_response_app_target_id';
  $handler->display->display_options['relationships']['field_metric_response_app_target_id']['ui_name'] = 'Application';
  $handler->display->display_options['relationships']['field_metric_response_app_target_id']['label'] = 'Application';
  /* Relationship: Category */
  $handler->display->display_options['relationships']['field_metric_category_target_id']['id'] = 'field_metric_category_target_id';
  $handler->display->display_options['relationships']['field_metric_category_target_id']['table'] = 'field_data_field_metric_category';
  $handler->display->display_options['relationships']['field_metric_category_target_id']['field'] = 'field_metric_category_target_id';
  $handler->display->display_options['relationships']['field_metric_category_target_id']['relationship'] = 'field_metric_response_metric_target_id';
  $handler->display->display_options['relationships']['field_metric_category_target_id']['ui_name'] = 'Category';
  $handler->display->display_options['relationships']['field_metric_category_target_id']['label'] = 'Category';
  /* Relationship: Business Unit */
  $handler->display->display_options['relationships']['reverse_field_applications_node']['id'] = 'reverse_field_applications_node';
  $handler->display->display_options['relationships']['reverse_field_applications_node']['table'] = 'node';
  $handler->display->display_options['relationships']['reverse_field_applications_node']['field'] = 'reverse_field_applications_node';
  $handler->display->display_options['relationships']['reverse_field_applications_node']['relationship'] = 'field_metric_response_app_target_id';
  $handler->display->display_options['relationships']['reverse_field_applications_node']['ui_name'] = 'Business Unit';
  $handler->display->display_options['relationships']['reverse_field_applications_node']['label'] = 'Business Unit';
  /* Field: Content: Nid */
  $handler->display->display_options['fields']['nid']['id'] = 'nid';
  $handler->display->display_options['fields']['nid']['table'] = 'node';
  $handler->display->display_options['fields']['nid']['field'] = 'nid';
  $handler->display->display_options['fields']['nid']['relationship'] = 'field_metric_response_app_target_id';
  $handler->display->display_options['fields']['nid']['label'] = 'Application ID';
  $handler->display->display_options['fields']['nid']['link_to_node'] = TRUE;
  /* Field: Content: Title */
  $handler->display->display_options['fields']['title_1']['id'] = 'title_1';
  $handler->display->display_options['fields']['title_1']['table'] = 'node';
  $handler->display->display_options['fields']['title_1']['field'] = 'title';
  $handler->display->display_options['fields']['title_1']['relationship'] = 'reverse_field_applications_node';
  $handler->display->display_options['fields']['title_1']['label'] = 'Business Unit';
  $handler->display->display_options['fields']['title_1']['link_to_node'] = FALSE;
  /* Field: Content: Body */
  $handler->display->display_options['fields']['body_1']['id'] = 'body_1';
  $handler->display->display_options['fields']['body_1']['table'] = 'field_data_body';
  $handler->display->display_options['fields']['body_1']['field'] = 'body';
  $handler->display->display_options['fields']['body_1']['relationship'] = 'field_metric_category_target_id';
  $handler->display->display_options['fields']['body_1']['label'] = 'Category';
  /* Field: Description */
  $handler->display->display_options['fields']['body']['id'] = 'body';
  $handler->display->display_options['fields']['body']['table'] = 'field_data_body';
  $handler->display->display_options['fields']['body']['field'] = 'body';
  $handler->display->display_options['fields']['body']['relationship'] = 'field_metric_response_metric_target_id';
  $handler->display->display_options['fields']['body']['ui_name'] = 'Description';
  $handler->display->display_options['fields']['body']['label'] = 'Metric';
  /* Field: Formula */
  $handler->display->display_options['fields']['field_metric_formula']['id'] = 'field_metric_formula';
  $handler->display->display_options['fields']['field_metric_formula']['table'] = 'field_data_field_metric_formula';
  $handler->display->display_options['fields']['field_metric_formula']['field'] = 'field_metric_formula';
  $handler->display->display_options['fields']['field_metric_formula']['relationship'] = 'field_metric_response_metric_target_id';
  $handler->display->display_options['fields']['field_metric_formula']['ui_name'] = 'Formula';
  /* Field: Content: Weight */
  $handler->display->display_options['fields']['field_metric_response_weight']['id'] = 'field_metric_response_weight';
  $handler->display->display_options['fields']['field_metric_response_weight']['table'] = 'field_data_field_metric_response_weight';
  $handler->display->display_options['fields']['field_metric_response_weight']['field'] = 'field_metric_response_weight';
  $handler->display->display_options['fields']['field_metric_response_weight']['relationship'] = 'field_metric_response_metric_target_id';
  /* Field: Content: Value */
  $handler->display->display_options['fields']['field_metric_response_value']['id'] = 'field_metric_response_value';
  $handler->display->display_options['fields']['field_metric_response_value']['table'] = 'field_data_field_metric_response_value';
  $handler->display->display_options['fields']['field_metric_response_value']['field'] = 'field_metric_response_value';
  $handler->display->display_options['fields']['field_metric_response_value']['label'] = 'Evaluated';
  /* Field: Content: Score */
  $handler->display->display_options['fields']['field_metric_response_score']['id'] = 'field_metric_response_score';
  $handler->display->display_options['fields']['field_metric_response_score']['table'] = 'field_data_field_metric_response_score';
  $handler->display->display_options['fields']['field_metric_response_score']['field'] = 'field_metric_response_score';
  /* Field: Content: Edit link */
  $handler->display->display_options['fields']['edit_node']['id'] = 'edit_node';
  $handler->display->display_options['fields']['edit_node']['table'] = 'views_entity_node';
  $handler->display->display_options['fields']['edit_node']['field'] = 'edit_node';
  $handler->display->display_options['fields']['edit_node']['label'] = 'Edit';
  /* Sort criterion: Content: Post date */
  $handler->display->display_options['sorts']['created']['id'] = 'created';
  $handler->display->display_options['sorts']['created']['table'] = 'node';
  $handler->display->display_options['sorts']['created']['field'] = 'created';
  $handler->display->display_options['sorts']['created']['order'] = 'DESC';
  /* Contextual filter: Type */
  $handler->display->display_options['arguments']['field_application_type_value']['id'] = 'field_application_type_value';
  $handler->display->display_options['arguments']['field_application_type_value']['table'] = 'field_data_field_application_type';
  $handler->display->display_options['arguments']['field_application_type_value']['field'] = 'field_application_type_value';
  $handler->display->display_options['arguments']['field_application_type_value']['relationship'] = 'field_metric_response_app_target_id';
  $handler->display->display_options['arguments']['field_application_type_value']['ui_name'] = 'Type';
  $handler->display->display_options['arguments']['field_application_type_value']['title_enable'] = TRUE;
  $handler->display->display_options['arguments']['field_application_type_value']['title'] = 'Metric score for apptype: %1';
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
    'metric_response' => 'metric_response',
  );
  /* Filter criterion: Content: Nid */
  $handler->display->display_options['filters']['nid']['id'] = 'nid';
  $handler->display->display_options['filters']['nid']['table'] = 'node';
  $handler->display->display_options['filters']['nid']['field'] = 'nid';
  $handler->display->display_options['filters']['nid']['relationship'] = 'field_metric_response_app_target_id';
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
  );
  /* Filter criterion: Content: Title */
  $handler->display->display_options['filters']['title']['id'] = 'title';
  $handler->display->display_options['filters']['title']['table'] = 'node';
  $handler->display->display_options['filters']['title']['field'] = 'title';
  $handler->display->display_options['filters']['title']['relationship'] = 'reverse_field_applications_node';
  $handler->display->display_options['filters']['title']['operator'] = 'word';
  $handler->display->display_options['filters']['title']['exposed'] = TRUE;
  $handler->display->display_options['filters']['title']['expose']['operator_id'] = 'title_op';
  $handler->display->display_options['filters']['title']['expose']['label'] = 'Business Unit';
  $handler->display->display_options['filters']['title']['expose']['operator'] = 'title_op';
  $handler->display->display_options['filters']['title']['expose']['identifier'] = 'title';
  $handler->display->display_options['filters']['title']['expose']['remember_roles'] = array(
    2 => '2',
    1 => 0,
    6 => 0,
    5 => 0,
    4 => 0,
    3 => 0,
  );
  /* Filter criterion: Content: Body (body) */
  $handler->display->display_options['filters']['body_value']['id'] = 'body_value';
  $handler->display->display_options['filters']['body_value']['table'] = 'field_data_body';
  $handler->display->display_options['filters']['body_value']['field'] = 'body_value';
  $handler->display->display_options['filters']['body_value']['relationship'] = 'field_metric_response_metric_target_id';
  $handler->display->display_options['filters']['body_value']['operator'] = 'word';
  $handler->display->display_options['filters']['body_value']['exposed'] = TRUE;
  $handler->display->display_options['filters']['body_value']['expose']['operator_id'] = 'body_value_op';
  $handler->display->display_options['filters']['body_value']['expose']['label'] = 'Metric contains';
  $handler->display->display_options['filters']['body_value']['expose']['operator'] = 'body_value_op';
  $handler->display->display_options['filters']['body_value']['expose']['identifier'] = 'body_value';
  $handler->display->display_options['filters']['body_value']['expose']['remember_roles'] = array(
    2 => '2',
    1 => 0,
    6 => 0,
    5 => 0,
    4 => 0,
    3 => 0,
  );
  /* Filter criterion: Content: Category (field_metric_category) */
  $handler->display->display_options['filters']['field_metric_category_target_id']['id'] = 'field_metric_category_target_id';
  $handler->display->display_options['filters']['field_metric_category_target_id']['table'] = 'field_data_field_metric_category';
  $handler->display->display_options['filters']['field_metric_category_target_id']['field'] = 'field_metric_category_target_id';
  $handler->display->display_options['filters']['field_metric_category_target_id']['relationship'] = 'field_metric_response_metric_target_id';
  $handler->display->display_options['filters']['field_metric_category_target_id']['value'] = array(
    365833 => '365833',
    365834 => '365834',
    365835 => '365835',
    365836 => '365836',
    365837 => '365837',
    365838 => '365838',
    365839 => '365839',
    365840 => '365840',
    365841 => '365841',
    365842 => '365842',
    365843 => '365843',
    365844 => '365844',
    365845 => '365845',
    365846 => '365846',
    365847 => '365847',
    365848 => '365848',
    365849 => '365849',
    365850 => '365850',
    365851 => '365851',
    365852 => '365852',
    365853 => '365853',
    365854 => '365854',
    365855 => '365855',
    365856 => '365856',
    365857 => '365857',
    365858 => '365858',
    365859 => '365859',
    365860 => '365860',
    365861 => '365861',
    365862 => '365862',
    365863 => '365863',
    365864 => '365864',
    365865 => '365865',
    365866 => '365866',
    365867 => '365867',
    365868 => '365868',
    365869 => '365869',
    365870 => '365870',
    365871 => '365871',
    365872 => '365872',
    365873 => '365873',
    365874 => '365874',
    365875 => '365875',
    365876 => '365876',
    365877 => '365877',
    365878 => '365878',
    365879 => '365879',
    365880 => '365880',
    365881 => '365881',
    365882 => '365882',
    365883 => '365883',
    365884 => '365884',
    365885 => '365885',
    365886 => '365886',
    365887 => '365887',
    365888 => '365888',
    365889 => '365889',
    365890 => '365890',
    365891 => '365891',
    365892 => '365892',
    365893 => '365893',
    365894 => '365894',
    365895 => '365895',
    365896 => '365896',
    365897 => '365897',
    365898 => '365898',
    365899 => '365899',
    365900 => '365900',
    365901 => '365901',
    365902 => '365902',
    365903 => '365903',
    365904 => '365904',
    365905 => '365905',
    365906 => '365906',
    365907 => '365907',
    365908 => '365908',
    365909 => '365909',
    365910 => '365910',
    365911 => '365911',
  );
  $handler->display->display_options['filters']['field_metric_category_target_id']['exposed'] = TRUE;
  $handler->display->display_options['filters']['field_metric_category_target_id']['expose']['operator_id'] = 'field_metric_category_target_id_op';
  $handler->display->display_options['filters']['field_metric_category_target_id']['expose']['label'] = 'Category';
  $handler->display->display_options['filters']['field_metric_category_target_id']['expose']['operator'] = 'field_metric_category_target_id_op';
  $handler->display->display_options['filters']['field_metric_category_target_id']['expose']['identifier'] = 'field_metric_category_target_id';
  $handler->display->display_options['filters']['field_metric_category_target_id']['expose']['remember_roles'] = array(
    2 => '2',
    1 => 0,
    6 => 0,
    5 => 0,
    4 => 0,
    3 => 0,
    7 => 0,
  );
  $handler->display->display_options['filters']['field_metric_category_target_id']['expose']['reduce'] = TRUE;

  /* Display: Page */
  $handler = $view->new_display('page', 'Page', 'page');
  $handler->display->display_options['path'] = 'admin/metric/apptype/%/score';

  /* Display: Data export */
  $handler = $view->new_display('views_data_export', 'Data export', 'views_data_export_1');
  $handler->display->display_options['pager']['type'] = 'none';
  $handler->display->display_options['pager']['options']['offset'] = '0';
  $handler->display->display_options['style_plugin'] = 'views_data_export_csv';
  $handler->display->display_options['style_options']['provide_file'] = 1;
  $handler->display->display_options['style_options']['filename'] = 'metrics.csv';
  $handler->display->display_options['style_options']['parent_sort'] = 0;
  $handler->display->display_options['style_options']['quote'] = 1;
  $handler->display->display_options['style_options']['trim'] = 0;
  $handler->display->display_options['style_options']['replace_newlines'] = 0;
  $handler->display->display_options['style_options']['header'] = 1;
  $handler->display->display_options['style_options']['keep_html'] = 0;
  $handler->display->display_options['path'] = 'admin/metric/apptype/%/export';
  $handler->display->display_options['displays'] = array(
    'page' => 'page',
    'default' => 0,
  );
  $handler->display->display_options['use_batch'] = 'batch';
  $handler->display->display_options['segment_size'] = '100';
  $export['metric_score_for_apptype'] = $view;

  return $export;
}
