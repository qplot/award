<?php
/**
 * @file
 * Contains the theme's functions to manipulate Drupal's default markup.
 *
 * Complete documentation for this file is available online.
 * @see https://drupal.org/node/1728096
 */


/**
 * Override or insert variables into the maintenance page template.
 *
 * @param $variables
 *   An array of variables to pass to the theme template.
 * @param $hook
 *   The name of the template being rendered ("maintenance_page" in this case.)
 */
/* -- Delete this line if you want to use this function
function pgh_preprocess_maintenance_page(&$variables, $hook) {
  // When a variable is manipulated or added in preprocess_html or
  // preprocess_page, that same work is probably needed for the maintenance page
  // as well, so we can just re-use those functions to do that work here.
  pgh_preprocess_html($variables, $hook);
  pgh_preprocess_page($variables, $hook);
}
// */

/**
 * Override or insert variables into the html templates.
 *
 * @param $variables
 *   An array of variables to pass to the theme template.
 * @param $hook
 *   The name of the template being rendered ("html" in this case.)
 */
/* -- Delete this line if you want to use this function
function pgh_preprocess_html(&$variables, $hook) {
  $variables['sample_variable'] = t('Lorem ipsum.');

  // The body tag's classes are controlled by the $classes_array variable. To
  // remove a class from $classes_array, use array_diff().
  //$variables['classes_array'] = array_diff($variables['classes_array'], array('class-to-remove'));
}
// */

/**
 * Override or insert variables into the page templates.
 *
 * @param array $variables
 *   An array of variables to pass to the theme template.
 *
 * @param string $hook
 *   The name of the template being rendered ("page" in this case.)
 */
function pgh_preprocess_page(&$variables, $hook) {
  // Use category page template for application categories.
  if (arg(0) == 'application' && arg(2) == 'category') {
    $variables['theme_hook_suggestions'][] = 'page__category';
  }

  if ($variables['theme_hook_suggestions'][0] == 'page__dashboard') {
    drupal_set_title('Work Group Dashboard');

    $variables['work_group'] = FALSE;
    $variables['business_units'] = array();

    $work_groups = pgh_api_work_groups_for_user();

    if ($work_groups) {
      $variables['work_group'] = $work_groups[0];
      $work_group_wrapper = entity_metadata_wrapper('node', $work_groups[0]);

      $variables['business_units'] = array();
      foreach ($work_group_wrapper->field_business_units->getIterator() as $business_unit) {
        if (entity_access('view', 'node', $business_unit->value())) {
          $variables['business_units'][] = $business_unit->value();
        }
      }
    }
  }
}
// */

/**
 * Override or insert variables into the node templates.
 *
 * @param $variables
 *   An array of variables to pass to the theme template.
 * @param $hook
 *   The name of the template being rendered ("node" in this case.)
 */
/* -- Delete this line if you want to use this function
function pgh_preprocess_node(&$variables, $hook) {
  $variables['sample_variable'] = t('Lorem ipsum.');

  // Optionally, run node-type-specific preprocess functions, like
  // pgh_preprocess_node_page() or pgh_preprocess_node_story().
  $function = __FUNCTION__ . '_' . $variables['node']->type;
  if (function_exists($function)) {
    $function($variables, $hook);
  }
}
// */

/**
 * Override or insert variables into the comment templates.
 *
 * @param $variables
 *   An array of variables to pass to the theme template.
 * @param $hook
 *   The name of the template being rendered ("comment" in this case.)
 */
/* -- Delete this line if you want to use this function
function pgh_preprocess_comment(&$variables, $hook) {
  $variables['sample_variable'] = t('Lorem ipsum.');
}
// */

/**
 * Override or insert variables into the region templates.
 *
 * @param $variables
 *   An array of variables to pass to the theme template.
 * @param $hook
 *   The name of the template being rendered ("region" in this case.)
 */
/* -- Delete this line if you want to use this function
function pgh_preprocess_region(&$variables, $hook) {
  // Don't use Zen's region--sidebar.tpl.php template for sidebars.
  //if (strpos($variables['region'], 'sidebar_') === 0) {
  //  $variables['theme_hook_suggestions'] = array_diff($variables['theme_hook_suggestions'], array('region__sidebar'));
  //}
}
// */

/**
 * Override or insert variables into the block templates.
 *
 * @param $variables
 *   An array of variables to pass to the theme template.
 * @param $hook
 *   The name of the template being rendered ("block" in this case.)
 */
/* -- Delete this line if you want to use this function
function pgh_preprocess_block(&$variables, $hook) {
  // Add a count to all the blocks in the region.
  // $variables['classes_array'][] = 'count-' . $variables['block_id'];

  // By default, Zen will use the block--no-wrapper.tpl.php for the main
  // content. This optional bit of code undoes that:
  //if ($variables['block_html_id'] == 'block-system-main') {
  //  $variables['theme_hook_suggestions'] = array_diff($variables['theme_hook_suggestions'], array('block__no_wrapper'));
  //}
}
// */


/**
 * Implementation of hook_js_alter().
 */
function pgh_js_alter(&$js) {
  unset($js['misc/tableheader.js']);
}

/**
 * Return markup for an application progress bar.
 *
 * @param float $progress
 *   A float value form 0 to 1 representing the progress of an Application. Use
 *   pgh_api_progress_for_application() to fetch this.
 *
 * @return string
 *   Markup for a progress bar.
 *
 * @author  Jay Roberts <jay@designhammer.com>
 */
function pgh_progress_bar($progress) {
  $range = 'low';
  if ($progress > 0.3) {
    $range = 'mid';
  }
  if ($progress > 0.7) {
    $range = 'high';
  }

  $output = '<div class="progress-bar ' . $range . '">';
  $output .= '  <span class="percentage">' . sprintf('%.0f', $progress * 100) . '%</span>';
  $output .= '  <span class="bar-container">';
  $output .= '    <span class="progress" style="width:' . sprintf('%.0f', $progress * 100) . '%"></span>';
  $output .= '  </span>';
  $output .= '</div>';

  return $output;
}

/**
 * Render a glossify link.
 */
function pgh_glossify_links($vars) {
  // don't load module's CSS, will add styles in PGH theme
  // drupal_add_css(drupal_get_path('module', 'glossify') . '/glossify.css');

  if ($vars['type'] == 'taxonomy') {
    $path = 'taxonomy/term/' . $vars['id'];
  }
  else {
    $path = 'node/' . $vars['id'];
  }

  if ($vars['tip']) {
    return l($vars['text'], $path, array('attributes' => array('class' => array('glossify-link'), 'title' => $vars['tip'])));
  }
  else {
    return l($vars['text'], $path, array('attributes' => array('class' => array('glossify-link'))));
  }
}

/**
 * Custom sort function for Entity Metadata Wrapper users, sorts by last_access.
 *
 * See: http://php.net/manual/en/function.usort.php
 *
 * @param object $a
 *   An EMW wrapping a Drupal user object.
 *
 * @param object $b
 *   An EMW wrapping a Drupal user object.
 *
 * @return int
 *   An int value indicating the cardinality of the supplied arguments.
 *
 * @author  Jay Roberts <jay@designhammer.com>
 */
function pgh_sort_users_by_last_access($a, $b) {
  return $a->last_access->value() > $b->last_access->value() ? -1 : 1;
}
