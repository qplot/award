<?php

function pgh_migrate_migrate_api() {
  $api = array(
    'api' => 2,
    'groups' => array(
      'PGH' => array(
        'title' => t('PGH Migration'),
      ),
    ),
    'migrations' => array(
      'Question' => array(
        'class_name' => 'MigratePGHQuestionMigration',
        'group_name' => 'PGH',
      ),
      'Section' => array(
        'class_name' => 'MigratePGHSectionMigration',
        'group_name' => 'PGH',
        'soft_dependencies' => array('Question')
      ),
      'Category' => array(
        'class_name' => 'MigratePGHCategoryMigration',
        'group_name' => 'PGH',
        'soft_dependencies' => array('Section')
      ),
      'ApplicationType' => array(
        'class_name' => 'MigratePGHAppTypeMigration',
        'group_name' => 'PGH',
        'soft_dependencies' => array('Category')
      ),
      'Application' => array(
        'class_name' => 'MigratePGHApplicationMigration',
        'group_name' => 'PGH',
        'soft_dependencies' => array('ApplicationType')
      ),
      'Response' => array(
        'class_name' => 'MigratePGHResponseMigration',
        'group_name' => 'PGH',
        'soft_dependencies' => array('Application', 'Question')
      ),
    ),
  );
  return $api;
}

?>