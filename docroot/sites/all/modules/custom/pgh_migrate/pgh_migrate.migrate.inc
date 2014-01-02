<?php

/**
 * @file
 * Define individual migrations for the PGH MIgrate module.
 *
 * @author  Jay Roberts <jay@designhammer.com>
 * @author  Fang Jin <fang@designhammer.com>
 */

/**
 * Migrate parameter definitions.
 *
 * Specifies which version of the Migrate API this module is designed for and specifies the names and file locations
 * of individual migration classes.
 *
 * @return array
 *   An array of MIgrate configuration parameters.
 */
function pgh_migrate_migrate_api() {
  $api = array(
    'api' => 2,
    'groups' => array(
      'PGH' => array(
        'title' => t('PGH Migration'),
      ),
    ),
    'migrations' => array(
      'PreprocessCSV' => array(
        'class_name' => 'MigratePGHPreprocessCSVMigration',
        'group_name' => 'PGH',
      ),
      'Question' => array(
        'class_name' => 'MigratePGHQuestionMigration',
        'group_name' => 'PGH',
        'soft_dependencies' => array('PreprocessCSV')
      ),
      'Section' => array(
        'class_name' => 'MigratePGHSectionMigration',
        'group_name' => 'PGH',
        'soft_dependencies' => array('PreprocessCSV', 'Question')
      ),
      'Category' => array(
        'class_name' => 'MigratePGHCategoryMigration',
        'group_name' => 'PGH',
        'soft_dependencies' => array('PreprocessCSV', 'Section')
      ),
      'ApplicationType' => array(
        'class_name' => 'MigratePGHAppTypeMigration',
        'group_name' => 'PGH',
        'soft_dependencies' => array('PreprocessCSV', 'Category')
      ),
      'Container' => array(
        'class_name' => 'MigratePGHContainerMigration',
        'group_name' => 'PGH',
        'soft_dependencies' => array('PreprocessCSV', 'Question')
      ),
      'BusinessUnit' => array(
        'class_name' => 'MigratePGHBusinessUnitMigration',
        'group_name' => 'PGH',
        'soft_dependencies' => array('PreprocessCSV')
      ),
      'WorkGroup' => array(
        'class_name' => 'MigratePGHWorkGroupMigration',
        'group_name' => 'PGH',
        'soft_dependencies' => array('PreprocessCSV')
      ),
    ),
  );
  return $api;
}
