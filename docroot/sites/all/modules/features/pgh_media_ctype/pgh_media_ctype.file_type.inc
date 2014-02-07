<?php
/**
 * @file
 * pgh_media_ctype.file_type.inc
 */

/**
 * Implements hook_file_default_types().
 */
function pgh_media_ctype_file_default_types() {
  $export = array();

  $file_type = new stdClass();
  $file_type->disabled = FALSE; /* Edit this to true to make a default file_type disabled initially */
  $file_type->api_version = 1;
  $file_type->type = 'archive';
  $file_type->label = 'Archive';
  $file_type->description = 'An <em>Archive</em> file is a compressed archive of one or more files.';
  $file_type->mimetypes = array(
    0 => 'application/rar',
    1 => 'application/x-stuffit',
    2 => 'application/zip',
  );
  $export['archive'] = $file_type;

  return $export;
}
