<?php

/**
 * @file
 * Export XML after entire import
 */

/**
 * MigratePGHPreprocessCSVMigration
 *
 *
 * @author Fang Jin <fang@designhammer.com>
 */
class MigratePGHExportXMLMigration extends MigrationBase {

  public function isComplete() {
    return TRUE;
  }

  /**
   * Go through all import and make final check
   */
  public function import() {
    // Save xml to directory
    // This algorithm can be moved to api in the future
    $root = new SimpleXMLElement('<root name="pgh"></root>');

    // Hierachy
    $hierachy = array(
      'apptype',
      'category',
      'section',
      'question'
    );

    // find all application types
    $apptype_ids = pgh_api_node_ids(array(
      'type' => 'apptype'
    ), array(), TRUE);
    foreach ($apptype_ids as $aid) {
      $node = node_load($aid);
      $apptype_wrapper = entity_metadata_wrapper('node', $node);

      // Populate apptype attribute and property
      $apptype = $root->addChild('apptype');
      $apptype->addAttribute('id', $apptype_wrapper->title->value());
      $apptype->addAttribute('name', $apptype_wrapper->body->value->raw());

      // Find all cateogries
      foreach ($apptype_wrapper->field_apptype_categories->getIterator() as $category_wrapper) {

        // Populdate category attribute and property
        $category = $apptype->addChild('category');
        $category->addAttribute('id', $category_wrapper->title->value());
        $category->addAttribute('name', $category_wrapper->body->value->raw());

        // Find all sections
        foreach ($category_wrapper->field_category_sections->getIterator() as $section_wrapper) {

          // Populdate category attribute and property
          $section = $category->addChild('section');
          $section->addAttribute('id', $section_wrapper->title->value());
          $section->addAttribute('name', $section_wrapper->body->value->raw());

          // Find all questions
          foreach ($section_wrapper->field_section_questions->getIterator() as $question_wrapper) {

            // Populdate category attribute and property
            $question = $section->addChild('question');
            $question->addAttribute('id', $question_wrapper->title->value());
            $question->addAttribute('type', $question_wrapper->field_question_type->value());
            $question->addAttribute('style', $question_wrapper->field_question_style->value());
            $question->addChild('prompt', $question_wrapper->field_question_prompt->value());

            // $question->addAttribute('name', $question_wrapper->body->value->raw());
          }


        }

      }
    }
    // dsm($root);
    // dsm($root->asXML());

    $dom = new DOMDocument('1.0');
    $dom->preserveWhiteSpace = FALSE;
    $dom->formatOutput = true;
    $dom->loadXML($root->asXML());
    $dom->save(PGH_MIGRATE_DATA_DIR . '/compiled/output.xml');

    return MigrationBase::RESULT_COMPLETED;
  }

}
