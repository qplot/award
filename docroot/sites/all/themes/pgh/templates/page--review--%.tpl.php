<?php
/**
 * @file
 * Provides template for displaying review.
 *
 * @author Fang Jin <fang@designhammer.com>
 */

  dsm($app);
  dsm($form);
?>

<div id="page" class="page-application page-application-category">

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

  <!-- form header printed  -->
  <?php echo $form['header'] ?>

  <div id="workgroup-wrap"><div id="workgroup-wrap-inner">
  <div id="workgroup">

    <?php print render($page['content_top']); ?>

    <div id="workgroup-content" class="column">
      <p class="dashboard-label"><?php echo $app['apptype'] ?></p>
      <h1 class="page__title title">Review</h1>

      <hr />

      <!-- Hospital Info Section -->
      <div id="hospital-wrap"><div id="hospital-wrap-inner">

        <div id="hospital-content-left" class="column">
          <h2><?php echo $app['institution'] ?>, <?php echo $app['city'] . ' ' . $app['state'] . ', ' . $app['zipcode'] ?></h2>
          <p><?php echo $app['institution_name'] ?></p>
          <h3>Primary Contact:</h3>
          <p><span class="semi-bold">Staffed Beds:</span> <?php echo $app['beds'] ?></p>
          <p><span class="semi-bold">ORs:</span> <?php echo $app['ors'] ?></p>
          <p><span class="semi-bold">FE Liaison:</span></p>
          <p><span class="semi-bold">Reviewer(s):</span> <?php echo $app['reviewers'] ?></p>
        </div>

        <div id="hospital-content-mid" class="column">
          <h2>Application Name</h2>
          <p><span class="semi-bold">Number of Acute Care Hospitals in Systems:</span> <?php echo $app['cares'] ?> 36</p>
          <p><span class="semi-bold">Number of Hospitals winning PFC or above:</span> 14</p>
          <?php //echo $app['app_info_form'] ?>
          <?php echo $form['qualify'] ?>
          <?php echo $form['threshold_met'] ?>
        </div>

        <div id="hospital-content-right" class="column">
          <h2>Final Awards</h2>
          <?php echo $form['submit'] ?>
        </div>

      </div></div>

      <hr />

      <!-- Scoring Roll-Up Section -->
      <div id="scores-wrap"><div id="scores-wrap-inner">
        <h2>Scoring Roll-Up/Overview</h2>
        <?php echo $app['score_view'] ?>
        <?php echo $form['comment'] ?>

      </div></div>

      <hr />      

      <!-- Category Section -->
      <h2>Metric and Quality</h2>
      <div id="categories-wrap"><div id="categories-wrap-inner">
        <?php foreach ($app['scores'] as $cat): ?>
          <?php if ($cat): ?>
            <hr />
            <h1 class="<?php echo $cat['category_class'] ?>" id="page-title"><span></span><?php echo $cat['category_name'] ?></h1>

            <p><span class="semi-bold">Auto Score:</span> <?php echo $cat['automatic'] ?> of <?php echo $cat['automatic_p'] ?> pts (<?php echo $cat['automatic_pc'] ?>%)</p>
            <p><span class="semi-bold">KPI Score:</span> <?php echo $cat['kpi'] ?> of <?php echo $cat['kpi_p'] ?> pts (<?php echo $cat['kpi_pc'] ?>%)</p>
            <p><span class="semi-bold">Metric Score:</span> <?php echo $cat['metric'] ?> of <?php echo $cat['metric_p'] ?> pts (<?php echo $cat['metric_pc'] ?>%)</p>
            <p><?php echo $form['quality_' . $cat['category_id']] ?></p>
            <p><span class="semi-bold">Category Score:</span> <?php echo $cat['final'] ?></p>
            <p><?php echo $form['case_study_' . $cat['category_id']] ?></p>

            <div class="metric-wrap"><div class="metric_wrap-inner">
              <?php if (!empty($cat['metrics'])): ?>
              <h4>Metrics Overview</h4>
                <ul>
                  <?php foreach ($cat['metrics'] as $metric): ?>
                    <li><span class="semi-bold"><?php echo $metric['description'] ?></span><?php echo $metric['value'] ?></li>
                  <?php endforeach ?>
                </ul>
                <?php echo $form['comment_' . $cat['category_id']] ?>
              <?php endif ?>
            </div></div>

          <?php endif ?>
        <?php endforeach ?>
      </div></div>

      <hr />

      <!-- Goals Section -->
      <div id="goals-wrap"><div id="goals-wrap-inner">
        <h2>Goals</h2>
        <?php foreach ($app['goals'] as $year => $goals): ?>          
          <table>
            <thead>
              <?php foreach ($goals['headers'] as $header): ?>
                <th><?php echo $header ?></th> 
              <?php endforeach ?>
            </thead>
            <tbody>
              <?php foreach ($goals['question_vals'] as $row): ?>
                <tr>
                  <?php foreach ($row as $value): ?>
                    <td><?php echo $value ?></td>
                  <?php endforeach ?>
                </tr>
              <?php endforeach ?>
            </tbody>
          </table>
        <?php endforeach ?>

      </div></div>

    </div>

    <?php echo $form['submit']; ?>

    <hr />

  </div><!-- /#workgroup -->
  </div></div>

  <?php echo $form['footer']; ?>

  <div id="footer-wrap"><div id="footer-wrap-inner">
    <p>&copy;<?php print date('Y'); ?> Practice Greenhealth Environmental Excellence Awards</p>
    <?php print render($page['footer']); ?>
  </div></div>

</div><!-- /#page -->

<?php print render($page['bottom']); ?>
