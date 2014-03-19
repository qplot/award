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
  $view->human_name = 'Score';
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
    'category_response' => 'category_response',
  );

  /* Display: Page */
  $handler = $view->new_display('page', 'Page', 'page');
  $handler->display->display_options['path'] = 'admin/score';
  $export['score'] = $view;

  return $export;
}
