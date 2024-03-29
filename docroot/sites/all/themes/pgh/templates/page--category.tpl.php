<?php
/**
 * @file
 * Returns the HTML for a single Drupal page.
 *
 * Complete documentation for this file is available online.
 * @see https://drupal.org/node/1728148
 */
?>

<div id="page">

  <div id="header-wrap"><div id="header-wrap-inner">
  <header class="header" id="header" role="banner">

    <?php $application_type = isset($node->field_application_type['und'][0]['value']) ? $node->field_application_type['und'][0]['value'] : NULL; ?>
    <?php if ($logo): ?>
      <a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" rel="home" class="header__logo <?php print $application_type; ?>" id="logo"><img src="<?php print $logo; ?>" alt="<?php print t('Home'); ?>" class="header__logo-image" width="250" height="108"></a>
    <?php endif; ?>

    <?php if ($site_name || $site_slogan): ?>
      <div class="header__name-and-slogan" id="name-and-slogan">
        <?php if ($site_name): ?>
          <div class="header__site-name" id="site-name">
            <a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" class="header__site-link" rel="home"><span><?php print $site_name; ?></span></a>
          </div>
        <?php endif; ?>

        <?php if ($site_slogan): ?>
          <div class="header__site-slogan" id="site-slogan"><?php print $site_slogan; ?></div>
        <?php endif; ?>
      </div>
    <?php endif; ?>

    <?php if ($secondary_menu): ?>
      <nav class="header__secondary-menu" id="secondary-menu" role="navigation">
        <?php print theme('links__system_secondary_menu', array(
          'links' => $secondary_menu,
          'attributes' => array(
            'class' => array('links', 'inline', 'clearfix'),
          ),
          'heading' => array(
            'text' => $secondary_menu_heading,
            'level' => 'h2',
            'class' => array('element-invisible'),
          ),
        )); ?>
      </nav>
    <?php endif; ?>


    <?php if ($logged_in): ?>

      <?php
        $block_user_info = block_load('pgh_user_info', 'pgh_user_info');
        $block_user_info_render = _block_render_blocks(array($block_user_info));
        $block_user_info_array = _block_get_renderable_array($block_user_info_render);
        print drupal_render($block_user_info_array);
      ?>

    <?php endif; ?>

    <?php print render($page['header']); ?>

    <?php print render($page['navigation']); ?>

  </header>
  </div></div>

  <div id="application-menu-container">

  <div id="app-menu-wrap"><div id="app-menu-wrap-inner">
  <div id="app-menu">
    <?php
      $block_menu = block_load('pgh_application', 'application_category_menu');
      $block_menu_render = _block_render_blocks(array($block_menu));
      $block_menu_array = _block_get_renderable_array($block_menu_render);
      print drupal_render($block_menu_array);
    ?>
  </div>
  </div></div>

  <div id="cat-menu-wrap"><div id="cat-menu-wrap-inner">
  <div id="cat-menu">
    <?php
      $block_categories = block_load('pgh_application', 'application_category_menu');
      $block_categories_render = _block_render_blocks(array($block_categories));
      $block_categories_array = _block_get_renderable_array($block_categories_render);
      $output_categories = drupal_render($block_categories_array);
      print $output_categories;
    ?>
  </div>
  </div></div>

  </div><!-- /#application-menu-container -->

  <?php if ($application_type == 'dehp_free'): ?>
    <div id="sponsor-wrap"><div id="sponsor-wrap-inner">
    <div id="sponsor">
        <a class="bbraun" href="http://bbraun.com/" target="_blank">
        <span class="sponsor-img"><img src="/sites/all/themes/pgh/images/sponsor-logos/bbraun.png" alt="B. Braun Medical Inc. (logo)" width="185" height="46"></span>
        <span class="sponsor-text">This award generously made possible by B. Braun Medical Inc., a company committed to supplying solution containers not made with natural rubber latex, DEHP or PVC.</span>
        </a>
    </div>
    </div></div>
  <?php elseif ($application_type == 'greening_the_or' || substr(arg(3), -strlen('_gor')) == '_gor'): ?>
    <div id="sponsor-wrap"><div id="sponsor-wrap-inner">
    <div id="sponsor">
      <a class="sterilmed" href="http://www.sterilmed.com/" target="_blank">
      <span class="sponsor-img"><img src="/sites/all/themes/pgh/images/sponsor-logos/sterilmed.png" alt="Sterilmed (logo)" width="115" height="71"></span>
      <span class="sponsor-text">Sterilmed is the proud sponsor of this Award.</span>
      </a>
    </div>
    </div></div>
  <?php endif; ?>

  <?php if ($logged_in): ?>
  <div id="review-submit-wrap"><div id="review-submit-wrap-inner">
    <div class="progress-wrap">

    <div class="bu-info">
    <?php if (isset($business_unit->title) && $business_unit->title != ''): ?>
      <span class="bu-name"><?php print $business_unit->title; ?></span> —
    <?php endif; ?>no.<?php print arg(1); ?></div>

    <div class="cat-progress">
      <span class="label">Category Progress:</span>
      <?php print pgh_progress_bar($category_progress); ?>
    </div>

    <a class="review-btn" href="../submit">Review and submit this application</a>

  </div>
  </div></div>
  <?php endif; ?>

  <div id="main-wrap"><div id="main-wrap-inner">
  <div id="main">

    <div id="content" class="column" role="main">
      <?php print render($page['highlighted']); ?>
      <a id="main-content"></a>

      <?php print render($title_prefix); ?>
      <?php if ($title): ?>
        <h1 class="page__title title" id="page-title"><?php print $title; ?></h1>
      <?php endif; ?>
      <?php print render($title_suffix); ?>

      <?php print $messages; ?>
      <?php print render($tabs); ?>
      <?php print render($page['help']); ?>
      <?php if ($action_links): ?>
        <ul class="action-links"><?php print render($action_links); ?></ul>
      <?php endif; ?>

      <?php print render($page['content_top']); ?>
      <?php print render($page['content']); ?>
      <?php print render($page['content_bottom']); ?>

    </div>

    <div class="print-page"><span class="icon">Print this page</span></div>
    <div class="back-top"><a href="#page">↑ Back to top</a></div>

    <?php
      // Render the sidebars to see if there's anything in them.
      $sidebar_first  = render($page['sidebar_first']);
      $sidebar_second = render($page['sidebar_second']);
    ?>

    <?php if ($sidebar_first || $sidebar_second): ?>
      <aside class="sidebars">
        <?php print $sidebar_first; ?>
        <?php print $sidebar_second; ?>
      </aside>
    <?php endif; ?>

  </div><!-- /#main -->
  </div></div>


  <div id="footer-wrap"><div id="footer-wrap-inner">
    <?php print render($page['footer']); ?>
  </div></div>

</div><!-- /#page -->

<?php print render($page['bottom']); ?>
