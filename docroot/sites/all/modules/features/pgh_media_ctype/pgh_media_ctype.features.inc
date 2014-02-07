<?php
/**
 * @file
 * pgh_media_ctype.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function pgh_media_ctype_ctools_plugin_api($module = NULL, $api = NULL) {
  if ($module == "file_entity" && $api == "file_type") {
    return array("version" => "1");
  }
}
