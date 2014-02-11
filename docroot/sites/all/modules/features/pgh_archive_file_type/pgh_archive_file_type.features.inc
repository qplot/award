<?php
/**
 * @file
 * pgh_archive_file_type.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function pgh_archive_file_type_ctools_plugin_api($module = NULL, $api = NULL) {
  if ($module == "file_entity" && $api == "file_type") {
    return array("version" => "1");
  }
}
