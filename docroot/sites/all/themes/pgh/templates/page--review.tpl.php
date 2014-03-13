<?php
/**
 * @file
 * Returns the HTML for a single Drupal page.
 *
 * Complete documentation for this file is available online.
 * @see https://drupal.org/node/1728148
 */
  dsm($app);
?>

<div id="page">

  <div id="header-wrap"><div id="header-wrap-inner">
  <header class="header" id="header" role="banner">

    <?php if ($logo): ?>
      <a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" rel="home" class="header__logo" id="logo"><img src="<?php print $logo; ?>" alt="<?php print t('Home'); ?>" class="header__logo-image" width="250" height="108"></a>
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

    <?php print render($page['header']); ?>
    <?php print render($page['navigation']); ?>

  </header>
  </div></div>

  <div id="breadcrumb-wrap"><div id="breadcrumb-wrap-inner">
    <?php print $breadcrumb; ?>
  </div></div>

  <div id="drupal-messages"><div id="drupal-messages-inner">
    <?php print render($page['highlighted']); ?>
    <?php print $messages; ?>
    <?php print render($tabs); ?>
    <?php print render($page['help']); ?>
    <?php if ($action_links): ?>
      <ul class="action-links"><?php print render($action_links); ?></ul>
    <?php endif; ?>
  </div></div>

  <div id="workgroup-wrap"><div id="workgroup-wrap-inner">
  <div id="workgroup">

    <?php print render($page['content_top']); ?>

    <div id="workgroup-content" class="column">
      <p class="dashboard-label">Work Group</p>
      <h1 class="page__title title">Review</h1>


      <div id="hospital-wrap"><div id="hospital-wrap-inner">

        <div id="hospital-content-left" class="column">
          <p><?php echo $app['apptype'] ?></p>
          <h2><?php echo $app['institution'] ?></h2>
          <p><?php echo $app['institution_name'] ?></p>
          <h3>Primary Contact:</h3>
          <p></p>
          <p><?php echo $app['city'] . ' ' . $app['state'] . ', ' . $app['zipcode'] ?></p>
          <p><span class="semi-bold">Staffed Beds:</span> <?php echo $app['beds'] ?></p>
          <p><span class="semi-bold">ORs:</span> <?php echo $app['ors'] ?></p>
          <p><span class="semi-bold">FE Liaison:</span></p>
          <p><span class="semi-bold">Reviewer(s):</span></p>
        </div>

        <div id="hospital-content-mid" class="column">
          <h2>Application Name</h2>
          <p><span class="semi-bold">Number of Acute Care Hospitals in Systems:</span> <?php echo $app['cares'] ?></p>
          <p><span class="semi-bold">Number of Hospitals winning PFC or above:</span></p>
          <p><span class="semi-bold">Does System qualify:</span></p>
          <p><span class="semi-bold">Does application meet the metrics thresholds for award applied for ?</span></p>
        </div>

        <div id="hospital-content-right" class="column">
          <h2>Suggested Awards</h2>
          <h2>Final Awards:</h2>
        </div>

        <div class="pull-right">
          <span class="edit-content">
            <a href="">Save</a>
          </span>
        </div>

      </div></div>
    </div>

  </div><!-- /#workgroup -->
  </div></div>


  <div id="footer-wrap"><div id="footer-wrap-inner">
    <p>&copy;<?php print date('Y'); ?> Practice Greenhealth Environmental Excellence Awards</p>
    <?php print render($page['footer']); ?>
  </div></div>

</div><!-- /#page -->

<?php print render($page['bottom']); ?>
