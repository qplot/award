<?php
/**
 * @file
 * pgh_awards_designation_vocabulary.features.taxonomy.inc
 */

/**
 * Implements hook_taxonomy_default_vocabularies().
 */
function pgh_awards_designation_vocabulary_taxonomy_default_vocabularies() {
  return array(
    'award_designation' => array(
      'name' => 'Award Designation',
      'machine_name' => 'award_designation',
      'description' => 'Use award designation for application',
      'hierarchy' => 0,
      'module' => 'taxonomy',
      'weight' => -10,
      'rdf_mapping' => array(
        'rdftype' => array(
          0 => 'skos:ConceptScheme',
        ),
        'name' => array(
          'predicates' => array(
            0 => 'dc:title',
          ),
        ),
        'description' => array(
          'predicates' => array(
            0 => 'rdfs:comment',
          ),
        ),
      ),
    ),
    'suggested_designation' => array(
      'name' => 'Suggested Award Designation',
      'machine_name' => 'suggested_designation',
      'description' => 'Use suggested designation for reviewers',
      'hierarchy' => 0,
      'module' => 'taxonomy',
      'weight' => -9,
      'rdf_mapping' => array(
        'rdftype' => array(
          0 => 'skos:ConceptScheme',
        ),
        'name' => array(
          'predicates' => array(
            0 => 'dc:title',
          ),
        ),
        'description' => array(
          'predicates' => array(
            0 => 'rdfs:comment',
          ),
        ),
      ),
    ),
  );
}
