<?php

/**
 * @file
 *   Example local.settings.php file
 *   Copy this file and rename it to local.settings.php.
 *   Adjust the values in the DB array below to match your environment.
 */

$databases = array (
  'default' =>
  array (
    'default' =>
    array (
      'database' => 'pgh_awards',
      'username' => 'root',
      'password' => '',
      'host' => 'localhost',
      'port' => '',
      'driver' => 'mysql',
      'prefix' => '',
    ),
  ),
);

$base_url = 'http://pghawards.localhost';

// Path to migrate csv files. NO trailing slash
// $conf['pgh_migrate_data_dir'] = '/path/to/migration/data';

// Maximum number of questions to render, set to lower values for faster debugging, otherwise, ignore
// $conf['pgh_form_max_questions'] = 1;