<?php


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
 * @author  Jay Roberts <jay@designhammer.com>
 */
class MigratePGHPreprocessCSVMigration extends MigrationBase {
  public function __construct($arguments) {
    parent::__construct($arguments);

  }

  public function isComplete() {
    $directory = new DirectoryIterator(PGH_MIGRATE_DATA_DIR . '/compiled');
    return count($directory) > 0;
  }

  public function import() {
    // Ensure compiled folder exists
    if (!is_dir(PGH_MIGRATE_DATA_DIR . 'compiled')) {
      mkdir(PGH_MIGRATE_DATA_DIR . 'compiled', 755);
    }
    if (!is_dir(PGH_MIGRATE_DATA_DIR . 'compiled')) {
      $self->displayMessage('Compiled CSV directory doesn\'t exist and could not be created.');
      return MigrationBase::RESULT_FAILED;
    }

    // Perform compilation
    $dirs = array(
      'applications',
      'apptypes',
      'categories',
      'questions',
      'responses',
      'sections',
    );
    foreach ($dirs as $dir) {
      // TEMP: Just copy the contents over to compiled for now
      if (is_dir(PGH_MIGRATE_DATA_DIR . '/' . $dir)) {
        $directory = new DirectoryIterator(PGH_MIGRATE_DATA_DIR . '/' . $dir);
        foreach ($directory as $fileinfo) {
          if (preg_match('/\.csv$/', $fileinfo->getFilename())) {
            $oldpath = PGH_MIGRATE_DATA_DIR . '/' . $dir . '/' . $fileinfo->getFilename();
            $newpath = PGH_MIGRATE_DATA_DIR . '/compiled/' . $fileinfo->getFilename();
            $result = copy($oldpath, $newpath);
            if ($result === FALSE) {
              $self->displayMessage('Couldn\'t copy file to complied CSV folder. ' . $oldpath);
              return MigrationBase::RESULT_FAILED;
            }
          }
        }
      }
    }

    return MigrationBase::RESULT_COMPLETED;
  }

  /**
   * Delete the products of the compilation process.
   * @return MigrationBase::RESULT
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
          $self->displayMessage('COuldn\'t delete compiled CSV file. ' . $fileinfo->getPathname());
          return MigrationBase::RESULT_FAILED;
        }
      }
    }
  }

}
