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
  $handler->display->display_options['pager']['type'] = 'some';
  $handler->display->display_options['pager']['options']['items_per_page'] = '10';
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
  $handler->display->display_options['access']['type'] = 'perm';
  $handler->display->display_options['cache']['type'] = 'none';
  $handler->display->display_options['query']['type'] = 'views_query';
  $handler->display->display_options['exposed_form']['type'] = 'basic';
  $handler->display->display_options['pager']['type'] = 'full';
  $handler->display->display_options['pager']['options']['items_per_page'] = '100';
  $handler->display->display_options['pager']['options']['offset'] = '0';
  $handler->display->display_options['pager']['options']['id'] = '0';
  $handler->display->display_options['pager']['options']['quantity'] = '9';
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
  /* Relationship: Application */
  $handler->display->display_options['relationships']['field_metric_response_app_target_id']['id'] = 'field_metric_response_app_target_id';
  $handler->display->display_options['relationships']['field_metric_response_app_target_id']['table'] = 'field_data_field_metric_response_app';
  $handler->display->display_options['relationships']['field_metric_response_app_target_id']['field'] = 'field_metric_response_app_target_id';
  $handler->display->display_options['relationships']['field_metric_response_app_target_id']['ui_name'] = 'Application';
  $handler->display->display_options['relationships']['field_metric_response_app_target_id']['label'] = 'Application';
  /* Field: Content: Nid */
  $handler->display->display_options['fields']['nid']['id'] = 'nid';
  $handler->display->display_options['fields']['nid']['table'] = 'node';
  $handler->display->display_options['fields']['nid']['field'] = 'nid';
  $handler->display->display_options['fields']['nid']['relationship'] = 'field_metric_response_app_target_id';
  $handler->display->display_options['fields']['nid']['label'] = 'Application ID';
  $handler->display->display_options['fields']['nid']['link_to_node'] = TRUE;
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

  /* Display: Page */
  $handler = $view->new_display('page', 'Page', 'page');
  $handler->display->display_options['path'] = 'admin/metric/apptype/%/score';
  $export['metric_score_for_apptype'] = $view;

  return $export;
}
