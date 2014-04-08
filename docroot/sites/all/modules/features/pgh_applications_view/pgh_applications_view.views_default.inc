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
  $view->name = 'admin_reviewers';
  $view->description = 'Admin view displaying application and reviewers';
  $view->tag = 'admin';
  $view->base_table = 'node';
  $view->human_name = 'Reviewers';
  $view->core = 7;
  $view->api_version = '3.0';
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

  /* Display: Master */
  $handler = $view->new_display('default', 'Master', 'default');
  $handler->display->display_options['title'] = 'Admin Reviewers';
  $handler->display->display_options['use_more_always'] = FALSE;
  $handler->display->display_options['access']['type'] = 'perm';
  $handler->display->display_options['access']['perm'] = 'review awards application';
  $handler->display->display_options['cache']['type'] = 'none';
  $handler->display->display_options['query']['type'] = 'views_query';
  $handler->display->display_options['exposed_form']['type'] = 'basic';
  $handler->display->display_options['exposed_form']['options']['reset_button'] = TRUE;
  $handler->display->display_options['pager']['type'] = 'full';
  $handler->display->display_options['pager']['options']['items_per_page'] = '20';
  $handler->display->display_options['style_plugin'] = 'table';
  $handler->display->display_options['style_options']['columns'] = array(
    'views_bulk_operations' => 'views_bulk_operations',
    'nid' => 'nid',
    'title' => 'title',
    'field_business_unit_name' => 'field_business_unit_name',
    'field_primary_first_name' => 'field_primary_first_name',
    'field_primary_last_name' => 'field_primary_last_name',
    'field_primary_phone' => 'field_primary_phone',
    'field_primary_email' => 'field_primary_email',
    'field_billing_city' => 'field_billing_city',
    'field_billing_state' => 'field_billing_state',
    'field_number_beds' => 'field_number_beds',
    'field_number_ors' => 'field_number_ors',
    'field_application_type' => 'field_application_type',
    'field_application_reviewers' => 'field_application_reviewers',
    'field_application_status' => 'field_application_status',
  );
  $handler->display->display_options['style_options']['default'] = '-1';
  $handler->display->display_options['style_options']['info'] = array(
    'views_bulk_operations' => array(
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
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
    'field_business_unit_name' => array(
      'sortable' => 1,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'field_primary_first_name' => array(
      'sortable' => 1,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'field_primary_last_name' => array(
      'sortable' => 1,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'field_primary_phone' => array(
      'sortable' => 1,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'field_primary_email' => array(
      'sortable' => 1,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'field_billing_city' => array(
      'sortable' => 1,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'field_billing_state' => array(
      'sortable' => 1,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'field_number_beds' => array(
      'sortable' => 1,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'field_number_ors' => array(
      'sortable' => 1,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'field_application_type' => array(
      'sortable' => 1,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'field_application_reviewers' => array(
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'field_application_status' => array(
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
  /* Field: Bulk operations: Content */
  $handler->display->display_options['fields']['views_bulk_operations']['id'] = 'views_bulk_operations';
  $handler->display->display_options['fields']['views_bulk_operations']['table'] = 'node';
  $handler->display->display_options['fields']['views_bulk_operations']['field'] = 'views_bulk_operations';
  $handler->display->display_options['fields']['views_bulk_operations']['label'] = '';
  $handler->display->display_options['fields']['views_bulk_operations']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['views_bulk_operations']['vbo_settings']['display_type'] = '1';
  $handler->display->display_options['fields']['views_bulk_operations']['vbo_settings']['enable_select_all_pages'] = 1;
  $handler->display->display_options['fields']['views_bulk_operations']['vbo_settings']['force_single'] = 0;
  $handler->display->display_options['fields']['views_bulk_operations']['vbo_settings']['entity_load_capacity'] = '10';
  $handler->display->display_options['fields']['views_bulk_operations']['vbo_operations'] = array(
    'action::node_assign_owner_action' => array(
      'selected' => 0,
      'postpone_processing' => 0,
      'skip_confirmation' => 0,
      'override_label' => 0,
      'label' => '',
    ),
    'action::views_bulk_operations_delete_item' => array(
      'selected' => 0,
      'postpone_processing' => 0,
      'skip_confirmation' => 0,
      'override_label' => 0,
      'label' => '',
    ),
    'action::views_bulk_operations_script_action' => array(
      'selected' => 0,
      'postpone_processing' => 0,
      'skip_confirmation' => 0,
      'override_label' => 0,
      'label' => '',
    ),
    'action::node_make_sticky_action' => array(
      'selected' => 0,
      'postpone_processing' => 0,
      'skip_confirmation' => 0,
      'override_label' => 0,
      'label' => '',
    ),
    'action::node_make_unsticky_action' => array(
      'selected' => 0,
      'postpone_processing' => 0,
      'skip_confirmation' => 0,
      'override_label' => 0,
      'label' => '',
    ),
    'action::views_bulk_operations_modify_action' => array(
      'selected' => 1,
      'postpone_processing' => 0,
      'skip_confirmation' => 0,
      'override_label' => 1,
      'label' => 'Change Reviewers',
      'settings' => array(
        'show_all_tokens' => 1,
        'display_values' => array(
          'application::field_application_reviewers' => 'application::field_application_reviewers',
        ),
      ),
    ),
    'action::views_bulk_operations_argument_selector_action' => array(
      'selected' => 0,
      'skip_confirmation' => 0,
      'override_label' => 0,
      'label' => '',
      'settings' => array(
        'url' => '',
      ),
    ),
    'action::node_promote_action' => array(
      'selected' => 0,
      'postpone_processing' => 0,
      'skip_confirmation' => 0,
      'override_label' => 0,
      'label' => '',
    ),
    'action::node_publish_action' => array(
      'selected' => 0,
      'postpone_processing' => 0,
      'skip_confirmation' => 0,
      'override_label' => 0,
      'label' => '',
    ),
    'action::node_unpromote_action' => array(
      'selected' => 0,
      'postpone_processing' => 0,
      'skip_confirmation' => 0,
      'override_label' => 0,
      'label' => '',
    ),
    'action::node_save_action' => array(
      'selected' => 0,
      'postpone_processing' => 0,
      'skip_confirmation' => 0,
      'override_label' => 0,
      'label' => '',
    ),
    'action::system_send_email_action' => array(
      'selected' => 0,
      'postpone_processing' => 0,
      'skip_confirmation' => 0,
      'override_label' => 0,
      'label' => '',
    ),
    'action::node_unpublish_action' => array(
      'selected' => 0,
      'postpone_processing' => 0,
      'skip_confirmation' => 0,
      'override_label' => 0,
      'label' => '',
    ),
    'action::node_unpublish_by_keyword_action' => array(
      'selected' => 0,
      'postpone_processing' => 0,
      'skip_confirmation' => 0,
      'override_label' => 0,
      'label' => '',
    ),
  );
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
  /* Field: Content: Name of Institution */
  $handler->display->display_options['fields']['field_business_unit_name']['id'] = 'field_business_unit_name';
  $handler->display->display_options['fields']['field_business_unit_name']['table'] = 'field_data_field_business_unit_name';
  $handler->display->display_options['fields']['field_business_unit_name']['field'] = 'field_business_unit_name';
  $handler->display->display_options['fields']['field_business_unit_name']['relationship'] = 'reverse_field_applications_node';
  /* Field: Content: First name */
  $handler->display->display_options['fields']['field_primary_first_name']['id'] = 'field_primary_first_name';
  $handler->display->display_options['fields']['field_primary_first_name']['table'] = 'field_data_field_primary_first_name';
  $handler->display->display_options['fields']['field_primary_first_name']['field'] = 'field_primary_first_name';
  $handler->display->display_options['fields']['field_primary_first_name']['relationship'] = 'reverse_field_applications_node';
  /* Field: Content: Last name */
  $handler->display->display_options['fields']['field_primary_last_name']['id'] = 'field_primary_last_name';
  $handler->display->display_options['fields']['field_primary_last_name']['table'] = 'field_data_field_primary_last_name';
  $handler->display->display_options['fields']['field_primary_last_name']['field'] = 'field_primary_last_name';
  $handler->display->display_options['fields']['field_primary_last_name']['relationship'] = 'reverse_field_applications_node';
  /* Field: Content: Phone */
  $handler->display->display_options['fields']['field_primary_phone']['id'] = 'field_primary_phone';
  $handler->display->display_options['fields']['field_primary_phone']['table'] = 'field_data_field_primary_phone';
  $handler->display->display_options['fields']['field_primary_phone']['field'] = 'field_primary_phone';
  $handler->display->display_options['fields']['field_primary_phone']['relationship'] = 'reverse_field_applications_node';
  /* Field: Content: Email */
  $handler->display->display_options['fields']['field_primary_email']['id'] = 'field_primary_email';
  $handler->display->display_options['fields']['field_primary_email']['table'] = 'field_data_field_primary_email';
  $handler->display->display_options['fields']['field_primary_email']['field'] = 'field_primary_email';
  $handler->display->display_options['fields']['field_primary_email']['relationship'] = 'reverse_field_applications_node';
  /* Field: Content: Billing city */
  $handler->display->display_options['fields']['field_billing_city']['id'] = 'field_billing_city';
  $handler->display->display_options['fields']['field_billing_city']['table'] = 'field_data_field_billing_city';
  $handler->display->display_options['fields']['field_billing_city']['field'] = 'field_billing_city';
  $handler->display->display_options['fields']['field_billing_city']['relationship'] = 'reverse_field_applications_node';
  $handler->display->display_options['fields']['field_billing_city']['label'] = 'City';
  /* Field: Content: Billing state */
  $handler->display->display_options['fields']['field_billing_state']['id'] = 'field_billing_state';
  $handler->display->display_options['fields']['field_billing_state']['table'] = 'field_data_field_billing_state';
  $handler->display->display_options['fields']['field_billing_state']['field'] = 'field_billing_state';
  $handler->display->display_options['fields']['field_billing_state']['relationship'] = 'reverse_field_applications_node';
  $handler->display->display_options['fields']['field_billing_state']['label'] = 'State';
  /* Field: Content: Number of Beds */
  $handler->display->display_options['fields']['field_number_beds']['id'] = 'field_number_beds';
  $handler->display->display_options['fields']['field_number_beds']['table'] = 'field_data_field_number_beds';
  $handler->display->display_options['fields']['field_number_beds']['field'] = 'field_number_beds';
  $handler->display->display_options['fields']['field_number_beds']['relationship'] = 'reverse_field_applications_node';
  $handler->display->display_options['fields']['field_number_beds']['label'] = '#Beds';
  /* Field: Content: Number of ORs */
  $handler->display->display_options['fields']['field_number_ors']['id'] = 'field_number_ors';
  $handler->display->display_options['fields']['field_number_ors']['table'] = 'field_data_field_number_ors';
  $handler->display->display_options['fields']['field_number_ors']['field'] = 'field_number_ors';
  $handler->display->display_options['fields']['field_number_ors']['relationship'] = 'reverse_field_applications_node';
  $handler->display->display_options['fields']['field_number_ors']['label'] = '#ORs';
  /* Field: Content: Application Type */
  $handler->display->display_options['fields']['field_application_type']['id'] = 'field_application_type';
  $handler->display->display_options['fields']['field_application_type']['table'] = 'field_data_field_application_type';
  $handler->display->display_options['fields']['field_application_type']['field'] = 'field_application_type';
  /* Field: Content: Reviewers */
  $handler->display->display_options['fields']['field_application_reviewers']['id'] = 'field_application_reviewers';
  $handler->display->display_options['fields']['field_application_reviewers']['table'] = 'field_data_field_application_reviewers';
  $handler->display->display_options['fields']['field_application_reviewers']['field'] = 'field_application_reviewers';
  $handler->display->display_options['fields']['field_application_reviewers']['settings'] = array(
    'link' => 0,
  );
  $handler->display->display_options['fields']['field_application_reviewers']['delta_offset'] = '0';
  /* Field: Content: Status */
  $handler->display->display_options['fields']['field_application_status']['id'] = 'field_application_status';
  $handler->display->display_options['fields']['field_application_status']['table'] = 'field_data_field_application_status';
  $handler->display->display_options['fields']['field_application_status']['field'] = 'field_application_status';
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
  /* Filter criterion: Content: Title */
  $handler->display->display_options['filters']['title']['id'] = 'title';
  $handler->display->display_options['filters']['title']['table'] = 'node';
  $handler->display->display_options['filters']['title']['field'] = 'title';
  $handler->display->display_options['filters']['title']['relationship'] = 'reverse_field_business_units_node';
  $handler->display->display_options['filters']['title']['operator'] = 'word';
  $handler->display->display_options['filters']['title']['exposed'] = TRUE;
  $handler->display->display_options['filters']['title']['expose']['operator_id'] = 'title_op';
  $handler->display->display_options['filters']['title']['expose']['label'] = 'in Workgroup';
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
  /* Filter criterion: Content: Title */
  $handler->display->display_options['filters']['title_1']['id'] = 'title_1';
  $handler->display->display_options['filters']['title_1']['table'] = 'node';
  $handler->display->display_options['filters']['title_1']['field'] = 'title';
  $handler->display->display_options['filters']['title_1']['relationship'] = 'reverse_field_applications_node';
  $handler->display->display_options['filters']['title_1']['operator'] = 'word';
  $handler->display->display_options['filters']['title_1']['exposed'] = TRUE;
  $handler->display->display_options['filters']['title_1']['expose']['operator_id'] = 'title_1_op';
  $handler->display->display_options['filters']['title_1']['expose']['label'] = 'in Business Unit ';
  $handler->display->display_options['filters']['title_1']['expose']['operator'] = 'title_1_op';
  $handler->display->display_options['filters']['title_1']['expose']['identifier'] = 'title_1';
  $handler->display->display_options['filters']['title_1']['expose']['remember_roles'] = array(
    2 => '2',
    1 => 0,
    6 => 0,
    5 => 0,
    4 => 0,
    3 => 0,
  );
  /* Filter criterion: Content: Billing state (field_billing_state) */
  $handler->display->display_options['filters']['field_billing_state_value']['id'] = 'field_billing_state_value';
  $handler->display->display_options['filters']['field_billing_state_value']['table'] = 'field_data_field_billing_state';
  $handler->display->display_options['filters']['field_billing_state_value']['field'] = 'field_billing_state_value';
  $handler->display->display_options['filters']['field_billing_state_value']['relationship'] = 'reverse_field_applications_node';
  $handler->display->display_options['filters']['field_billing_state_value']['exposed'] = TRUE;
  $handler->display->display_options['filters']['field_billing_state_value']['expose']['operator_id'] = 'field_billing_state_value_op';
  $handler->display->display_options['filters']['field_billing_state_value']['expose']['label'] = 'State';
  $handler->display->display_options['filters']['field_billing_state_value']['expose']['operator'] = 'field_billing_state_value_op';
  $handler->display->display_options['filters']['field_billing_state_value']['expose']['identifier'] = 'field_billing_state_value';
  $handler->display->display_options['filters']['field_billing_state_value']['expose']['remember_roles'] = array(
    2 => '2',
    1 => 0,
    6 => 0,
    5 => 0,
    4 => 0,
    3 => 0,
  );
  /* Filter criterion: Content: Reviewers (field_application_reviewers) */
  $handler->display->display_options['filters']['field_application_reviewers_target_id']['id'] = 'field_application_reviewers_target_id';
  $handler->display->display_options['filters']['field_application_reviewers_target_id']['table'] = 'field_data_field_application_reviewers';
  $handler->display->display_options['filters']['field_application_reviewers_target_id']['field'] = 'field_application_reviewers_target_id';
  $handler->display->display_options['filters']['field_application_reviewers_target_id']['exposed'] = TRUE;
  $handler->display->display_options['filters']['field_application_reviewers_target_id']['expose']['operator_id'] = 'field_application_reviewers_target_id_op';
  $handler->display->display_options['filters']['field_application_reviewers_target_id']['expose']['label'] = 'Reviewers';
  $handler->display->display_options['filters']['field_application_reviewers_target_id']['expose']['operator'] = 'field_application_reviewers_target_id_op';
  $handler->display->display_options['filters']['field_application_reviewers_target_id']['expose']['identifier'] = 'field_application_reviewers_target_id';
  $handler->display->display_options['filters']['field_application_reviewers_target_id']['expose']['remember_roles'] = array(
    2 => '2',
    1 => 0,
    6 => 0,
    5 => 0,
    4 => 0,
    3 => 0,
  );
  /* Filter criterion: Content: Status (field_application_status) */
  $handler->display->display_options['filters']['field_application_status_value']['id'] = 'field_application_status_value';
  $handler->display->display_options['filters']['field_application_status_value']['table'] = 'field_data_field_application_status';
  $handler->display->display_options['filters']['field_application_status_value']['field'] = 'field_application_status_value';
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
  /* Filter criterion: Content: Application Type (field_application_type) */
  $handler->display->display_options['filters']['field_application_type_value']['id'] = 'field_application_type_value';
  $handler->display->display_options['filters']['field_application_type_value']['table'] = 'field_data_field_application_type';
  $handler->display->display_options['filters']['field_application_type_value']['field'] = 'field_application_type_value';
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
  /* Filter criterion: Content: Number of Beds (field_number_beds) */
  $handler->display->display_options['filters']['field_number_beds_value']['id'] = 'field_number_beds_value';
  $handler->display->display_options['filters']['field_number_beds_value']['table'] = 'field_data_field_number_beds';
  $handler->display->display_options['filters']['field_number_beds_value']['field'] = 'field_number_beds_value';
  $handler->display->display_options['filters']['field_number_beds_value']['exposed'] = TRUE;
  $handler->display->display_options['filters']['field_number_beds_value']['expose']['operator_id'] = 'field_number_beds_value_op';
  $handler->display->display_options['filters']['field_number_beds_value']['expose']['label'] = 'Beds';
  $handler->display->display_options['filters']['field_number_beds_value']['expose']['operator'] = 'field_number_beds_value_op';
  $handler->display->display_options['filters']['field_number_beds_value']['expose']['identifier'] = 'field_number_beds_value';
  $handler->display->display_options['filters']['field_number_beds_value']['expose']['remember_roles'] = array(
    2 => '2',
    1 => 0,
    6 => 0,
    5 => 0,
    4 => 0,
    3 => 0,
  );

  /* Display: Page */
  $handler = $view->new_display('page', 'Page', 'page');
  $handler->display->display_options['path'] = 'admin/reviewers';

  /* Display: Data export */
  $handler = $view->new_display('views_data_export', 'Data export', 'views_data_export_1');
  $handler->display->display_options['pager']['type'] = 'none';
  $handler->display->display_options['pager']['options']['offset'] = '0';
  $handler->display->display_options['style_plugin'] = 'views_data_export_csv';
  $handler->display->display_options['style_options']['provide_file'] = 1;
  $handler->display->display_options['style_options']['filename'] = 'applications.csv';
  $handler->display->display_options['style_options']['parent_sort'] = 0;
  $handler->display->display_options['style_options']['quote'] = 1;
  $handler->display->display_options['style_options']['trim'] = 0;
  $handler->display->display_options['style_options']['replace_newlines'] = 0;
  $handler->display->display_options['style_options']['header'] = 1;
  $handler->display->display_options['style_options']['keep_html'] = 0;
  $handler->display->display_options['path'] = 'admin/reviewers/export';
  $handler->display->display_options['displays'] = array(
    'page' => 'page',
    'default' => 0,
  );
  $handler->display->display_options['use_batch'] = 'batch';
  $handler->display->display_options['segment_size'] = '100';
  $export['admin_reviewers'] = $view;

  $view = new view();
  $view->name = 'applications';
  $view->description = 'Admin view displaying all applications';
  $view->tag = 'admin';
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
  $handler->display->display_options['exposed_form']['options']['reset_button'] = TRUE;
  $handler->display->display_options['pager']['type'] = 'full';
  $handler->display->display_options['pager']['options']['items_per_page'] = '100';
  $handler->display->display_options['pager']['options']['offset'] = '0';
  $handler->display->display_options['pager']['options']['id'] = '0';
  $handler->display->display_options['pager']['options']['quantity'] = '9';
  $handler->display->display_options['style_plugin'] = 'table';
  $handler->display->display_options['style_options']['columns'] = array(
    'nid' => 'nid',
    'title' => 'title',
    'field_application_type' => 'field_application_type',
    'field_application_status' => 'field_application_status',
    'created' => 'created',
    'title_1' => 'title_1',
    'title_2' => 'title_2',
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
    'field_application_type' => array(
      'sortable' => 1,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'field_application_status' => array(
      'sortable' => 1,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'created' => array(
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
    'title_2' => array(
      'sortable' => 1,
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
  /* Relationship: Business Unit */
  $handler->display->display_options['relationships']['reverse_field_applications_node']['id'] = 'reverse_field_applications_node';
  $handler->display->display_options['relationships']['reverse_field_applications_node']['table'] = 'node';
  $handler->display->display_options['relationships']['reverse_field_applications_node']['field'] = 'reverse_field_applications_node';
  $handler->display->display_options['relationships']['reverse_field_applications_node']['ui_name'] = 'Business Unit';
  $handler->display->display_options['relationships']['reverse_field_applications_node']['label'] = 'Business Unit';
  /* Relationship: Work Group */
  $handler->display->display_options['relationships']['reverse_field_business_units_node']['id'] = 'reverse_field_business_units_node';
  $handler->display->display_options['relationships']['reverse_field_business_units_node']['table'] = 'node';
  $handler->display->display_options['relationships']['reverse_field_business_units_node']['field'] = 'reverse_field_business_units_node';
  $handler->display->display_options['relationships']['reverse_field_business_units_node']['relationship'] = 'reverse_field_applications_node';
  $handler->display->display_options['relationships']['reverse_field_business_units_node']['ui_name'] = 'Work Group';
  $handler->display->display_options['relationships']['reverse_field_business_units_node']['label'] = 'Work Group';
  /* Field: Content: Nid */
  $handler->display->display_options['fields']['nid']['id'] = 'nid';
  $handler->display->display_options['fields']['nid']['table'] = 'node';
  $handler->display->display_options['fields']['nid']['field'] = 'nid';
  $handler->display->display_options['fields']['nid']['label'] = 'ID';
  $handler->display->display_options['fields']['nid']['alter']['make_link'] = TRUE;
  $handler->display->display_options['fields']['nid']['alter']['path'] = 'application/[nid]';
  $handler->display->display_options['fields']['nid']['element_label_colon'] = FALSE;
  /* Field: Content: Post date */
  $handler->display->display_options['fields']['created']['id'] = 'created';
  $handler->display->display_options['fields']['created']['table'] = 'node';
  $handler->display->display_options['fields']['created']['field'] = 'created';
  $handler->display->display_options['fields']['created']['label'] = 'Created date';
  $handler->display->display_options['fields']['created']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['created']['date_format'] = 'custom';
  $handler->display->display_options['fields']['created']['custom_date_format'] = 'm.d.y';
  /* Field: Content: Application Type */
  $handler->display->display_options['fields']['field_application_type']['id'] = 'field_application_type';
  $handler->display->display_options['fields']['field_application_type']['table'] = 'field_data_field_application_type';
  $handler->display->display_options['fields']['field_application_type']['field'] = 'field_application_type';
  $handler->display->display_options['fields']['field_application_type']['element_label_colon'] = FALSE;
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
  /* Field: Content: Title */
  $handler->display->display_options['fields']['title']['id'] = 'title';
  $handler->display->display_options['fields']['title']['table'] = 'node';
  $handler->display->display_options['fields']['title']['field'] = 'title';
  $handler->display->display_options['fields']['title']['label'] = 'Name';
  $handler->display->display_options['fields']['title']['exclude'] = TRUE;
  $handler->display->display_options['fields']['title']['alter']['make_link'] = TRUE;
  $handler->display->display_options['fields']['title']['alter']['path'] = 'application/[nid]';
  $handler->display->display_options['fields']['title']['alter']['word_boundary'] = FALSE;
  $handler->display->display_options['fields']['title']['alter']['ellipsis'] = FALSE;
  $handler->display->display_options['fields']['title']['link_to_node'] = FALSE;
  /* Field: Content: Status */
  $handler->display->display_options['fields']['field_application_status']['id'] = 'field_application_status';
  $handler->display->display_options['fields']['field_application_status']['table'] = 'field_data_field_application_status';
  $handler->display->display_options['fields']['field_application_status']['field'] = 'field_application_status';
  $handler->display->display_options['fields']['field_application_status']['element_label_colon'] = FALSE;
  /* Field: score */
  $handler->display->display_options['fields']['nothing']['id'] = 'nothing';
  $handler->display->display_options['fields']['nothing']['table'] = 'views';
  $handler->display->display_options['fields']['nothing']['field'] = 'nothing';
  $handler->display->display_options['fields']['nothing']['ui_name'] = 'score';
  $handler->display->display_options['fields']['nothing']['label'] = 'Score';
  $handler->display->display_options['fields']['nothing']['exclude'] = TRUE;
  $handler->display->display_options['fields']['nothing']['alter']['text'] = 'Score';
  $handler->display->display_options['fields']['nothing']['alter']['make_link'] = TRUE;
  $handler->display->display_options['fields']['nothing']['alter']['path'] = 'admin/score/application/[nid]/category';
  /* Field: review */
  $handler->display->display_options['fields']['nothing_1']['id'] = 'nothing_1';
  $handler->display->display_options['fields']['nothing_1']['table'] = 'views';
  $handler->display->display_options['fields']['nothing_1']['field'] = 'nothing';
  $handler->display->display_options['fields']['nothing_1']['ui_name'] = 'review';
  $handler->display->display_options['fields']['nothing_1']['label'] = 'Review';
  $handler->display->display_options['fields']['nothing_1']['exclude'] = TRUE;
  $handler->display->display_options['fields']['nothing_1']['alter']['text'] = 'review';
  $handler->display->display_options['fields']['nothing_1']['alter']['make_link'] = TRUE;
  $handler->display->display_options['fields']['nothing_1']['alter']['path'] = 'review/[nid]';
  /* Field: edit */
  $handler->display->display_options['fields']['edit_node']['id'] = 'edit_node';
  $handler->display->display_options['fields']['edit_node']['table'] = 'views_entity_node';
  $handler->display->display_options['fields']['edit_node']['field'] = 'edit_node';
  $handler->display->display_options['fields']['edit_node']['ui_name'] = 'edit';
  $handler->display->display_options['fields']['edit_node']['label'] = 'Edit';
  $handler->display->display_options['fields']['edit_node']['exclude'] = TRUE;
  $handler->display->display_options['fields']['edit_node']['text'] = 'edit';
  /* Field: calculate */
  $handler->display->display_options['fields']['nothing_2']['id'] = 'nothing_2';
  $handler->display->display_options['fields']['nothing_2']['table'] = 'views';
  $handler->display->display_options['fields']['nothing_2']['field'] = 'nothing';
  $handler->display->display_options['fields']['nothing_2']['ui_name'] = 'calculate';
  $handler->display->display_options['fields']['nothing_2']['label'] = 'Calculate';
  $handler->display->display_options['fields']['nothing_2']['exclude'] = TRUE;
  $handler->display->display_options['fields']['nothing_2']['alter']['text'] = 'Calculate';
  $handler->display->display_options['fields']['nothing_2']['alter']['make_link'] = TRUE;
  $handler->display->display_options['fields']['nothing_2']['alter']['path'] = 'admin/score/application/[nid]/calculate?destination=admin/applications';
  /* Field: metric */
  $handler->display->display_options['fields']['nothing_4']['id'] = 'nothing_4';
  $handler->display->display_options['fields']['nothing_4']['table'] = 'views';
  $handler->display->display_options['fields']['nothing_4']['field'] = 'nothing';
  $handler->display->display_options['fields']['nothing_4']['ui_name'] = 'metric';
  $handler->display->display_options['fields']['nothing_4']['exclude'] = TRUE;
  $handler->display->display_options['fields']['nothing_4']['alter']['text'] = 'Metric';
  $handler->display->display_options['fields']['nothing_4']['alter']['make_link'] = TRUE;
  $handler->display->display_options['fields']['nothing_4']['alter']['path'] = 'admin/metric/application/[nid]/score';
  /* Field: Actions */
  $handler->display->display_options['fields']['nothing_3']['id'] = 'nothing_3';
  $handler->display->display_options['fields']['nothing_3']['table'] = 'views';
  $handler->display->display_options['fields']['nothing_3']['field'] = 'nothing';
  $handler->display->display_options['fields']['nothing_3']['ui_name'] = 'Actions';
  $handler->display->display_options['fields']['nothing_3']['label'] = 'Actions';
  $handler->display->display_options['fields']['nothing_3']['alter']['text'] = '[nothing_2] ([nothing]|[nothing_4]) [nothing_1] [edit_node]';
  /* Field: Form */
  $handler->display->display_options['fields']['nothing_5']['id'] = 'nothing_5';
  $handler->display->display_options['fields']['nothing_5']['table'] = 'views';
  $handler->display->display_options['fields']['nothing_5']['field'] = 'nothing';
  $handler->display->display_options['fields']['nothing_5']['ui_name'] = 'Form';
  $handler->display->display_options['fields']['nothing_5']['exclude'] = TRUE;
  $handler->display->display_options['fields']['nothing_5']['alter']['text'] = 'Form';
  $handler->display->display_options['fields']['nothing_5']['alter']['make_link'] = TRUE;
  $handler->display->display_options['fields']['nothing_5']['alter']['path'] = 'application/[nid]';
  /* Field: Readonly */
  $handler->display->display_options['fields']['nothing_6']['id'] = 'nothing_6';
  $handler->display->display_options['fields']['nothing_6']['table'] = 'views';
  $handler->display->display_options['fields']['nothing_6']['field'] = 'nothing';
  $handler->display->display_options['fields']['nothing_6']['ui_name'] = 'Readonly';
  $handler->display->display_options['fields']['nothing_6']['exclude'] = TRUE;
  $handler->display->display_options['fields']['nothing_6']['alter']['text'] = 'Readonly';
  $handler->display->display_options['fields']['nothing_6']['alter']['make_link'] = TRUE;
  $handler->display->display_options['fields']['nothing_6']['alter']['path'] = 'review/[nid]/readonly';
  /* Field: Global: Custom text */
  $handler->display->display_options['fields']['nothing_7']['id'] = 'nothing_7';
  $handler->display->display_options['fields']['nothing_7']['table'] = 'views';
  $handler->display->display_options['fields']['nothing_7']['field'] = 'nothing';
  $handler->display->display_options['fields']['nothing_7']['label'] = 'Form';
  $handler->display->display_options['fields']['nothing_7']['alter']['text'] = '[nothing_5] [nothing_6]';
  /* Sort criterion: Content: Nid */
  $handler->display->display_options['sorts']['nid']['id'] = 'nid';
  $handler->display->display_options['sorts']['nid']['table'] = 'node';
  $handler->display->display_options['sorts']['nid']['field'] = 'nid';
  $handler->display->display_options['sorts']['nid']['order'] = 'DESC';
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
    7 => 0,
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
    7 => 0,
  );
  /* Filter criterion: Content: Title */
  $handler->display->display_options['filters']['title']['id'] = 'title';
  $handler->display->display_options['filters']['title']['table'] = 'node';
  $handler->display->display_options['filters']['title']['field'] = 'title';
  $handler->display->display_options['filters']['title']['relationship'] = 'reverse_field_applications_node';
  $handler->display->display_options['filters']['title']['operator'] = 'word';
  $handler->display->display_options['filters']['title']['exposed'] = TRUE;
  $handler->display->display_options['filters']['title']['expose']['operator_id'] = 'title_op';
  $handler->display->display_options['filters']['title']['expose']['label'] = 'Search by business unit';
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
  $handler->display->display_options['filters']['title_1']['expose']['label'] = 'Search by workgroup';
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
  $handler->display->display_options['filters']['nid']['exposed'] = TRUE;
  $handler->display->display_options['filters']['nid']['expose']['operator_id'] = 'nid_op';
  $handler->display->display_options['filters']['nid']['expose']['label'] = 'Search by application ID';
  $handler->display->display_options['filters']['nid']['expose']['operator'] = 'nid_op';
  $handler->display->display_options['filters']['nid']['expose']['identifier'] = 'nid';
  $handler->display->display_options['filters']['nid']['expose']['remember'] = TRUE;
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
  $handler->display->display_options['path'] = 'admin/applications';
  $export['applications'] = $view;

  return $export;
}
