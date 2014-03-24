<?php

/**
 * @file
 * Question migration.
 *
 * @author  Fang Jin <fang@designhammer.com>
 */

/**
 * Migrates questions from CSV data.
 */
class MigratePGHMetricMigration extends Migration {

  /**
   * Prepare the migration.
   */
  public function __construct($arguments) {
    parent::__construct($arguments);

    $this->dependencies = array('PreprocessCSV');

    // Create a CSV source.
    $columns = array(
      0 => array('raw_id', 'Raw ID'),
      1 => array('id', 'ID'),
      2 => array('category_id', 'Category ID'),
      3 => array('title', 'Title'),
      4 => array('formula', 'Formula'),
      5 => array('reference', 'Reference'),
      6 => array('orientation', 'Orientation'),
      7 => array('normalization', 'Normalization'),
      8 => array('weight', 'Weight'),
    );

    // Load compiled CSV data if it's available (created in preprocess_csv.inc) or an empty source if not.
    if (file_exists(PGH_MIGRATE_DATA_DIR . '/compiled/metrics.csv')) {
      $this->source = new MigrateSourceCSV(
        PGH_MIGRATE_DATA_DIR . '/compiled/metrics.csv',
        $columns,
        array('header_rows' => 1)
      );
    }
    else {
      $this->source = new MigrateSourceList(new PGHMigrateEmptyList(), new PGHMigrateEmptyItem());
    }

    // Create a Node destination.
    $this->destination = new MigrateDestinationNode('metric');

    $this->map = new MigrateSQLMap($this->machineName,
      array(
        'id' => array(
          'type' => 'varchar',
          'length' => 255,
          'not null' => TRUE,
        )
      ),
      MigrateDestinationNode::getKeySchema()
    );

    $this->addFieldMapping('title', 'id');
    $this->addFieldMapping('field_metric_category', 'category_id')
         ->sourceMigration('Category');
    $this->addFieldMapping('body', 'title');
    $this->addFieldMapping('body:format')
         ->defaultValue('plain_text');
    $this->addFieldMapping('field_metric_formula', 'formula');
    $this->addFieldMapping('field_metric_reference', 'reference');
    $this->addFieldMapping('field_metric_orientation', 'orientation');
    $this->addFieldMapping('field_metric_normalization', 'normalization');
    $this->addFieldMapping('field_metric_weight', 'weight');
  }

  public function prepareRow($row) {
    if (parent::prepareRow($row) === FALSE) {
      return FALSE;
    }

    // skip for empty row
    if (empty($row->id))
      return FALSE;

    return TRUE;
  }

}
