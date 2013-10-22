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
