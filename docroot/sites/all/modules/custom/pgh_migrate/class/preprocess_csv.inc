<?php

/**
 * @file
 * Preprocesses CSV data so it can be imported by the Migration.
 */

/**
 * MigratePGHPreprocessCSVMigration
 *
 * Combines separate csv files into single sets of entries which can then be processed by the
 * migration classes.
 *
 * PGH_MIGRATE_DATA_DIR is a folder containing a set of CSV files which will be migrated into the site. The
 * exact location of this folder should be specified in local.settings.php.
 *
 * This folder contains several subfolders, one for each content type migration (e.g. applications,
 * categories, questions). Each of those subfolders may contain any number of CSV files. This is useful to
 * allow several different CSV files containing different sets of questions.
 *
 * When this preprocessing migration runs it will combine all of the CSV files in a given subdirectory into a single
 * CSV file for that content type and it will place this file in the compiled subfolder.
 *
 * The individual migrations which follow the preprocessing step will read these compiled CSV files, rather than the
 * individual ones. Doing it this way, with the additional pre-processing step, allows us to use the standard CSV
 * migration source, which only supports a single CSV file per migration, rather than writing a completely custom source.
 *
 * Rolling back this migration will delete the CSV files in the compiled directory.
 *
 * @author Jay Roberts <jay@designhammer.com>
 */
class MigratePGHPreprocessCSVMigration extends MigrationBase {

  /**
   * This migration is considered complete if the /compiled directory is not empty.
   *
   * @return bool
   *   TRUE if the migration is complete, FALSE otherwise.
   * @author Jay Roberts <jay@designhammer.com>
   */
  public function isComplete() {
    $directory = new DirectoryIterator(PGH_MIGRATE_DATA_DIR . '/compiled');
    return count($directory) > 0;
  }

  /**
   * Performs preprocessing step, combining separate CSV files into a single file for each migration.
   *
   * @return MigrationBase::RESULT
   *   A result specifier. Uses static constants defined in MIgrationBase.
   *
   * @author Jay Roberts <jay@designhammer.com>
   */
  public function import() {
    // Ensure 'compiled' folder exists.
    if (!is_dir(PGH_MIGRATE_DATA_DIR . '/compiled')) {
      $result = @mkdir(PGH_MIGRATE_DATA_DIR . '/compiled');
      if ($result === FALSE) {
        self::displayMessage('Compiled CSV directory does not exist and could not be created.');
        return MigrationBase::RESULT_FAILED;
      }
    }

    // Compile the CSV files in each of these folders into a single file for each folder.
    $dirs = array(
      'applications',
      'apptypes',
      'business_units',
      'users',
      'work_groups',
      'categories',
      'questions',
      'responses',
      'sections',
      'containers',
      'metrics',
    );

    foreach ($dirs as $dir) {
      if (is_dir(PGH_MIGRATE_DATA_DIR . '/' . $dir)) {
        $csv_header = array();
        $csv_data = array();

        $directory = new DirectoryIterator(PGH_MIGRATE_DATA_DIR . '/' . $dir);
        foreach ($directory as $fileinfo) {
          if (preg_match('/\.csv$/', $fileinfo->getFilename())) {
            $csv_handle = @fopen($fileinfo->getPathname(), 'r');

            if ($csv_handle === FALSE) {
              self::displayMessage('Couldn\'t open CSV file for reading. ' . $fileinfo->getFilename());
              return MigrationBase::RESULT_FAILED;
            }

            // Build up the array of all rows in $csv_data. Skip the first line of each file.
            // Each file should have identical header rows. In any case, the header of the last
            // file read will be used as the header in the compiled file.
            $count = 0;
            while ($row = fgetcsv($csv_handle)) {
              if ($count == 0) {
                $csv_header = $row;
              }
              else {
                $csv_data[] = $row;
              }
              $count++;
            }
          }
        }

        // Put the header at the top.
        array_unshift($csv_data, $csv_header);

        // Write the data to the compiled folder.
        $output_handle = @fopen(PGH_MIGRATE_DATA_DIR . '/compiled/' . $dir . '.csv', 'w');
        if ($output_handle === FALSE) {
          self::displayMessage('Couldn\'t open CSV file for writing. ' . PGH_MIGRATE_DATA_DIR . '/compiled/' . $dir . '.csv');
          return MigrationBase::RESULT_FAILED;
        }

        foreach ($csv_data as $row) {
          fputcsv($output_handle, $row);
        }

        fclose($csv_handle);
        fclose($output_handle);
      }
    }

    return MigrationBase::RESULT_COMPLETED;
  }

  /**
   * Delete the products of the compilation process.
   *
   * @return MigrationBase::RESULT
   *   A result specifier. Uses static constants defined in MIgrationBase.
   *
   * @author Jay Roberts <jay@designhammer.com>
   */
  public function rollback() {
    if (!is_dir(PGH_MIGRATE_DATA_DIR . '/compiled')) {
      return MigrationBase::RESULT_COMPLETED;
    }

    $directory = new DirectoryIterator(PGH_MIGRATE_DATA_DIR . '/compiled');
    foreach ($directory as $fileinfo) {
      if (!$fileinfo->isDot()) {
        $result = unlink($fileinfo->getPathname());
        if ($result === FALSE) {
          self::displayMessage('Couldn\'t delete compiled CSV file. ' . $fileinfo->getPathname());
          return MigrationBase::RESULT_FAILED;
        }
      }
    }
  }
}
