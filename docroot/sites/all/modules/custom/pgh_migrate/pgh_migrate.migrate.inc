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
      ),
    ),
  );
  return $api;
}

?>