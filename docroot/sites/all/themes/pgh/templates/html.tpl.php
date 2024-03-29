<?php
/**
 * @file
 * Returns the HTML for the basic html structure of a single Drupal page.
 *
 * Complete documentation for this file is available online.
 * @see https://drupal.org/node/1728208
 */
?><!DOCTYPE html>
<!--[if IEMobile 7]><html class="iem7" <?php print $html_attributes; ?>><![endif]-->
<!--[if lte IE 6]><html class="lt-ie9 lt-ie8 lt-ie7" <?php print $html_attributes; ?>><![endif]-->
<!--[if (IE 7)&(!IEMobile)]><html class="lt-ie9 lt-ie8" <?php print $html_attributes; ?>><![endif]-->
<!--[if IE 8]><html class="lt-ie9" <?php print $html_attributes; ?>><![endif]-->
<!--[if (gte IE 9)|(gt IEMobile 7)]><!--><html <?php print $html_attributes . $rdf_namespaces; ?>><!--<![endif]-->

<head>
  <?php print $head; ?>
  <title><?php print $head_title; ?></title>

  <?php if ($default_mobile_metatags): ?>
    <meta name="MobileOptimized" content="width">
    <meta name="HandheldFriendly" content="true">
    <meta name="viewport" content="width=device-width">
  <?php endif; ?>
  <meta http-equiv="X-UA-Compatible" content="IE=Edge">
  <meta http-equiv="cleartype" content="on">

  <?php print $styles; ?>
  <?php print $scripts; ?>
  <?php if ($add_html5_shim and !$add_respond_js): ?>
    <!--[if lt IE 9]>
    <script src="<?php print $base_path . $path_to_zen; ?>/js/html5.js"></script>
    <![endif]-->
  <?php elseif ($add_html5_shim and $add_respond_js): ?>
    <!--[if lt IE 9]>
    <script src="<?php print $base_path . $path_to_zen; ?>/js/html5-respond.js"></script>
    <![endif]-->
  <?php elseif ($add_respond_js): ?>
    <!--[if lt IE 9]>
    <script src="<?php print $base_path . $path_to_zen; ?>/js/respond.js"></script>
    <![endif]-->
  <?php endif; ?>
</head>
<body class="<?php print $classes; ?>" <?php print $attributes;?>>
  <!--[if lt IE 9]>
  <p id="browser-message" style="display:none;">
    <?php print t('This website uses features that are not supported by your browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.'); ?>
  </p>
  <div id="browser-message-modal">
    <h1>
    <?php print t('Your browser is not compatible with this website!'); ?>
    </h1>
    <h4>
    <?php print t('This PGH Awards system is accessible through Internet Explorer (Version 9 or above), Firefox, Chrome, or Safari.'); ?>
    </h4>
    <p>
    <?php print t('If you are using Internet Explorer 7 or 8, you will need to upgrade your browser to utilize this website. You can check your browser by going here: <a href="http://whatbrowser.org">whatbrowser.org</a> and / or <a href="http://browsehappy.com/">download an alternative browser</a> if necessary.'); ?>
    </p>
    <p class="confirm"><span>OK</span></p>
  </div>
  <div id="browser-message-modal-bg"></div>

  <script type="text/javascript">
    jQuery(document).ready(function() {
      jQuery('#browser-message-modal .confirm').click(function() {
        jQuery('#browser-message-modal, #browser-message-modal-bg').hide();
        jQuery('#browser-message').show();
      });
    });
  </script>
  <![endif]-->

  <?php if ($skip_link_text && $skip_link_anchor): ?>
    <p id="skip-link">
      <a href="#<?php print $skip_link_anchor; ?>" class="element-invisible element-focusable"><?php print $skip_link_text; ?></a>
    </p>
  <?php endif; ?>
  <?php print $page_top; ?>
  <?php print $page; ?>
  <?php print $page_bottom; ?>
</body>
</html>
