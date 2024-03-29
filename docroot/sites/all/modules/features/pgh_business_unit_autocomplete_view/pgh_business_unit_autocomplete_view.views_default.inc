<?php
/**
 * @file
 * pgh_business_unit_autocomplete_view.views_default.inc
 */

/**
 * Implements hook_views_default_views().
 */
function pgh_business_unit_autocomplete_view_views_default_views() {
  $export = array();

  $view = new view();
  $view->name = 'business_unit_search';
  $view->description = 'Provides a view for searching Business Units which can be used by the Work Group Business Unit entity reference.';
  $view->tag = 'default';
  $view->base_table = 'node';
  $view->human_name = 'Business Unit Search';
  $view->core = 7;
  $view->api_version = '3.0';
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

  /* Display: Master */
  $handler = $view->new_display('default', 'Master', 'default');
  $handler->display->display_options['use_more_always'] = FALSE;
  $handler->display->display_options['access']['type'] = 'perm';
  $handler->display->display_options['cache']['type'] = 'none';
  $handler->display->display_options['query']['type'] = 'views_query';
  $handler->display->display_options['exposed_form']['type'] = 'basic';
  $handler->display->display_options['pager']['type'] = 'full';
  $handler->display->display_options['style_plugin'] = 'default';
  $handler->display->display_options['row_plugin'] = 'fields';
  /* Field: Content: Title */
  $handler->display->display_options['fields']['title']['id'] = 'title';
  $handler->display->display_options['fields']['title']['table'] = 'node';
  $handler->display->display_options['fields']['title']['field'] = 'title';
  $handler->display->display_options['fields']['title']['label'] = '';
  $handler->display->display_options['fields']['title']['alter']['word_boundary'] = FALSE;
  $handler->display->display_options['fields']['title']['alter']['ellipsis'] = FALSE;
  $handler->display->display_options['fields']['title']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['title']['link_to_node'] = FALSE;
  /* Field: Content: Billing city */
  $handler->display->display_options['fields']['field_billing_city']['id'] = 'field_billing_city';
  $handler->display->display_options['fields']['field_billing_city']['table'] = 'field_data_field_billing_city';
  $handler->display->display_options['fields']['field_billing_city']['field'] = 'field_billing_city';
  $handler->display->display_options['fields']['field_billing_city']['label'] = '';
  $handler->display->display_options['fields']['field_billing_city']['element_label_colon'] = FALSE;
  /* Field: Content: Billing state */
  $handler->display->display_options['fields']['field_billing_state']['id'] = 'field_billing_state';
  $handler->display->display_options['fields']['field_billing_state']['table'] = 'field_data_field_billing_state';
  $handler->display->display_options['fields']['field_billing_state']['field'] = 'field_billing_state';
  $handler->display->display_options['fields']['field_billing_state']['label'] = '';
  $handler->display->display_options['fields']['field_billing_state']['element_label_colon'] = FALSE;
  /* Sort criterion: Content: Title */
  $handler->display->display_options['sorts']['title']['id'] = 'title';
  $handler->display->display_options['sorts']['title']['table'] = 'node';
  $handler->display->display_options['sorts']['title']['field'] = 'title';
  $handler->display->display_options['sorts']['title']['order'] = 'DESC';
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
    'business_unit' => 'business_unit',
  );

  /* Display: Entity Reference */
  $handler = $view->new_display('entityreference', 'Entity Reference', 'entityreference_1');
  $handler->display->display_options['defaults']['title'] = FALSE;
  $handler->display->display_options['pager']['type'] = 'none';
  $handler->display->display_options['pager']['options']['offset'] = '0';
  $handler->display->display_options['defaults']['style_plugin'] = FALSE;
  $handler->display->display_options['style_plugin'] = 'entityreference_style';
  $handler->display->display_options['style_options']['search_fields'] = array(
    'title' => 'title',
  );
  $handler->display->display_options['defaults']['style_options'] = FALSE;
  $handler->display->display_options['defaults']['row_plugin'] = FALSE;
  $handler->display->display_options['row_plugin'] = 'entityreference_fields';
  $handler->display->display_options['defaults']['row_options'] = FALSE;
  $export['business_unit_search'] = $view;

  return $export;
}
