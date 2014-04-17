<?php

/**
 * @file
 * Modify the value by adding calculations.
 *
 * - $title : The title of this group of rows.  May be empty.
 * - $header: An array of header labels keyed by field id.
 * - $caption: The caption for this table. May be empty.
 * - $header_classes: An array of header classes keyed by field id.
 * - $fields: An array of CSS IDs to use for each field id.
 * - $classes: A class or classes to apply to the table, based on settings.
 * - $row_classes: An array of classes to apply to each row, indexed by row
 *   number. This matches the index in $rows.
 * - $rows: An array of row items. Each row is an array of content.
 *   $rows are keyed by row number, fields within rows are keyed by field ID.
 * - $field_classes: An array of classes to apply to each field, indexed by
 *   field id, then row number. This matches the index in $rows.
 * @ingroup views_templates
 */

  // Fields that stores the score.
  $fields = array(
    'field_application_automatic' => 'automatic',
    'field_application_automatic_p' => 'automatic_p',
    'field_application_kpi' => 'kpi',
    'field_application_kpi_p' => 'kpi_p',
    'field_application_metric' => 'metric',
    'field_application_metric_p' => 'metric_p',
    'field_application_quality' => 'quality',
    'field_application_quality_p' => 'quality_p',
  );
  // Fields that needs to be disabled.
  $hiddens = array(
  );

  // Weight for this app type.
  $apptype_tag = arg(3);
  if ($apptype_id = pgh_api_find_nodes(array('type' => 'apptype', 'title' => $apptype_tag))) {
    $apptype = node_load($apptype_id);
    $apptype_wrapper = entity_metadata_wrapper('node', $apptype);
    $value = $apptype_wrapper->field_apptype_score_weights->value();
    $w = pgh_awards_score_application_weight($value);
  }
?>
<table <?php if ($classes) { print 'class="'. $classes . '" '; } ?><?php print $attributes; ?>>
   <?php if (!empty($title) || !empty($caption)) : ?>
     <caption><?php print $caption . $title; ?></caption>
  <?php endif; ?>
  <?php if (!empty($header)) : ?>
    <thead>
      <tr>
        <?php foreach ($header as $field => $label): ?>
          <?php if (in_array($field, $hiddens)) continue; ?>
          <th <?php if ($header_classes[$field]) { print 'class="'. $header_classes[$field] . '" '; } ?>>
            <?php print $label; ?>
          </th>
        <?php endforeach; ?>
      </tr>
    </thead>
  <?php endif; ?>
  <tbody>
    <?php foreach ($rows as $row_count => $row): ?>

    <?php 
      // // Assign values
      $values = array();
      foreach ($row as $key => $value) {
        if (array_key_exists($key, $fields)) {
          $values[$fields[$key]] = $value;
        }
      }
      // Calculate more scores
      pgh_awards_review_percentage_score($values, $w);
      // Change row values
      $row['field_application_metric'] = round($values['metric'], 2);
      $row['field_application_final'] = round($values['final2'], 2);
      $row['nothing'] = round($values['final2_pc'], 2);
    ?>
      <tr <?php if ($row_classes[$row_count]) { print 'class="' . implode(' ', $row_classes[$row_count]) .'"';  } ?>>
        <?php foreach ($row as $field => $content): ?>
          <?php if (in_array($field, $hiddens)) continue; ?>
          <td <?php if ($field_classes[$field][$row_count]) { print 'class="'. $field_classes[$field][$row_count] . '" '; } ?><?php print drupal_attributes($field_attributes[$field][$row_count]); ?>>
            <?php print $content; ?>
          </td>
        <?php endforeach; ?>
      </tr>
    <?php endforeach; ?>
  </tbody>
</table>
