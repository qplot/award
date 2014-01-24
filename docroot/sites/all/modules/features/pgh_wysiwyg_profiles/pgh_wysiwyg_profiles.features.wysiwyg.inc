<?php
/**
 * @file
 * pgh_wysiwyg_profiles.features.wysiwyg.inc
 */

/**
 * Implements hook_wysiwyg_default_profiles().
 */
function pgh_wysiwyg_profiles_wysiwyg_default_profiles() {
  $profiles = array();

  // Exported profile: filtered_html
  $profiles['filtered_html'] = array(
    'format' => 'filtered_html',
    'editor' => 'tinymce',
    'settings' => array(
      'default' => 1,
      'user_choose' => 0,
      'show_toggle' => 1,
      'theme' => '',
      'language' => 'en',
      'buttons' => array(
        'default' => array(
          'bold' => 1,
          'italic' => 1,
          'underline' => 1,
          'strikethrough' => 1,
          'justifyleft' => 1,
          'justifycenter' => 1,
          'justifyright' => 1,
          'justifyfull' => 1,
          'bullist' => 1,
          'numlist' => 1,
          'outdent' => 1,
          'indent' => 1,
          'link' => 1,
          'unlink' => 1,
          'cleanup' => 1,
          'formatselect' => 1,
          'blockquote' => 1,
          'code' => 1,
          'hr' => 1,
        ),
      ),
      'theme_advanced_toolbar_location' => 'top',
      'theme_advanced_toolbar_align' => 'left',
      'theme_advanced_statusbar_location' => 'bottom',
      'theme_advanced_resizing' => 1,
      'verify_html' => 1,
      'preformatted' => 0,
      'convert_fonts_to_spans' => 1,
      'remove_linebreaks' => 1,
      'apply_source_formatting' => 0,
      'css_setting' => 'none',
      'css_path' => '',
      'theme_advanced_styles' => '',
      'theme_advanced_blockformats' => 'p,address,pre,h2,h3,h4,h5,h6,div',
      'advanced__active_tab' => 'edit-paste',
      'paste_auto_cleanup_on_paste' => 1,
    ),
    'rdf_mapping' => array(),
  );

  return $profiles;
}
