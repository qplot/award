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
    'field_cat_response_automatic' => 'auto',
    'field_cat_response_automatic_p' => 'auto_p',
    'nothing' => 'auto_pc',
    'nothing_1' => 'auto_w',
    'field_cat_response_kpi' => 'kpi',
    'field_cat_response_kpi_p' => 'kpi_p',
    'nothing_2' => 'kpi_pc',
    'nothing_3' => 'kpi_w',
    'field_cat_response_metric' => 'metric',
    'field_cat_response_metric_p' => 'metric_p',
    'nothing_4' => 'metric_pc',
    'nothing_5' => 'metric_w',
  );
  // Fields that needs to be disabled.
  $hiddens = array(
    'field_cat_response_automatic_p',
    'field_cat_response_kpi_p',
    'field_cat_response_metric_p'
  );

  // Weight for this app type.
  $weight = array(0.45,0.25,0.15,0.15);
  $apptype_tag = arg(3);
  if ($apptype_id = pgh_api_find_nodes(array('type' => 'apptype', 'title' => $apptype_tag))) {
    $apptype = node_load($apptype_id);
    $apptype_wrapper = entity_metadata_wrapper('node', $apptype);
    $value = $apptype_wrapper->field_apptype_score_weights->value();
    if ($value) {
      $weight = explode('|', $weight);
    }
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
      // Assign values
      $values = array();
      foreach ($row as $key => $value) {
        if (array_key_exists($key, $fields)) {
          $values[$fields[$key]] = $value;
        }
      }
      // dsm($values);

      if ($values['auto_p']) {
        $output = $values['auto'] / $values['auto_p'] * 100;
      }
      $row['nothing'] = round($output, 0) . '%';
      $row['nothing_1'] = round($output * $weight[0], 2);

      if ($values['kpi_p']) {
        $output = $values['kpi'] / $values['kpi_p'] * 100;
      }
      $row['nothing_2'] = round($output, 0) . '%';
      $row['nothing_3'] = round($output * $weight[1], 2);

      if ($values['metric_p']) {
        $output = $values['metric'] / $values['metric_p'] * 100;
      }
      $row['nothing_4'] = round($output, 0) . '%';
      $row['nothing_5'] = round($output * $weight[2], 2);
      // break;
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
