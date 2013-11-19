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

    <?php if ($logo): ?>
      <a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" rel="home" class="header__logo" id="logo"><img src="<?php print $logo; ?>" alt="<?php print t('Home'); ?>" class="header__logo-image" /></a>
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
    <div id="loggedin-user-block">
    <?php $user = user_load($user->uid); ?>

      <div class="user-picture-wrap"><div class="user-picture">
      <?php if($user->picture) {
        print theme('image_style',
            array(
              'style_name' => 'thumbnail',
              'path' => $user->picture->uri,
              'attributes' => array('class' => 'avatar')
            )
          );
        }
      ?>
      </div></div>

      <span class="edit-user"><a href="/user/<?php print $user->uid; ?>/edit">Edit</a></span>
      <div class="users-name"><?php print $user->name; ?><br>
      <span class="users-employer"><?php print $user->field_company['und'][0]['value']; ?></span></div>

    </div>
    <?php endif; ?>


    <?php print render($page['header']); ?>

    <?php print render($page['navigation']); ?>

  </header>
  </div></div>

  <div id="breadcrumb-wrap"><div id="breadcrumb-wrap-inner">
    <?php print $breadcrumb; ?>
  </div></div>



  <?php // Check if user is part of a work group.
    if ($work_group):
  ?>

  <div id="workgroup-wrap"><div id="workgroup-wrap-inner">
  <div id="workgroup">

    <div id="workgroup-content" class="column">

    <?php //print all array keys in a template
      //var_dump(get_defined_vars());
    ?>


      <p class="dashboard-label">Working Group</p>
      <?php if ($logged_in): ?>
        <span class="edit-content"><a href="/node/<?php print $work_group->vid; ?>/edit">Edit</a></span>
      <?php endif; ?>
      <h1 class="page__title title"><?php print $work_group->title; ?></h1>

      <?php $field_group_body = field_view_field('node', $work_group, 'body', array('label' => 'hidden')); print render($field_group_body); ?>

    </div>


  </div><!--- /#workgroup --->
  </div></div>

  <div id="business-unit-wrap"><div id="business-unit-wrap-inner">
  <div id="business-unit">

  <?php // Check if user is part of a business unit.
    if ($business_units):
  ?>

    <div id="business-unit-content" class="column">

    <?php foreach ($business_units as $business_unit): ?>

      <div class="business-unit-block">

        <?php print render(field_view_field('node', $business_unit, 'field_business_unit_type', array('label' => 'hidden'))); ?>
        <?php if ($logged_in): ?>
          <span class="edit-content"><a href="/node/<?php print $business_unit->vid; ?>/edit">Edit</a></span>
        <?php endif; ?>
        <h2><?php print $business_unit->title; ?></h2>

        <?php $field_bu_body = field_view_field('node', $business_unit, 'body', array('label' => 'hidden', 'type' => 'text_summary_or_trimmed', 'settings' => array('trim_length' => 225)));
          print render($field_bu_body);
        ?>

        <div class="info-block">
          <?php $shipping_city = field_view_field('node', $business_unit, 'field_shipping_city', array('label' => 'hidden')); print render($shipping_city); ?>
          <?php $shipping_state = field_view_field('node', $business_unit, 'field_shipping_state', array('label' => 'hidden')); print render($shipping_state); ?>
          <?php $number_beds = field_view_field('node', $business_unit, 'field_number_beds'); print render($number_beds); ?>
          <?php $facility_users = field_view_field('node', $business_unit, 'field_facility_users'); print render($facility_users); ?>
        </div>

        <div class="billing-address">
          <p class="label">Billing Address</p>
          <?php $billing_address_1 = field_view_field('node', $business_unit, 'field_billing_address_1', array('label' => 'hidden')); print render($billing_address_1); ?>
          <?php $billing_address_2 = field_view_field('node', $business_unit, 'field_billing_address_2', array('label' => 'hidden')); print render($billing_address_2); ?>
          <?php $billing_city = field_view_field('node', $business_unit, 'field_billing_city', array('label' => 'hidden')); print render($billing_city); ?>
          <?php $billing_state = field_view_field('node', $business_unit, 'field_billing_state', array('label' => 'hidden')); print render($billing_state); ?>
          <?php $billing_zipcode = field_view_field('node', $business_unit, 'field_billing_zipcode', array('label' => 'hidden')); print render($billing_zipcode); ?>
        </div>

        <div class="shipping-address">
          <p class="label">Shipping Address</p>
          <?php $shipping_address_1 = field_view_field('node', $business_unit, 'field_shipping_address_1', array('label' => 'hidden')); print render($shipping_address_1); ?>
          <?php $shipping_address_2 = field_view_field('node', $business_unit, 'field_shipping_address_2', array('label' => 'hidden')); print render($shipping_address_2); ?>
          <?php $shipping_city = field_view_field('node', $business_unit, 'field_shipping_city', array('label' => 'hidden')); print render($shipping_city); ?>
          <?php $shipping_state = field_view_field('node', $business_unit, 'field_shipping_state', array('label' => 'hidden')); print render($shipping_state); ?>
          <?php $shipping_zipcode = field_view_field('node', $business_unit, 'field_shipping_zipcode', array('label' => 'hidden')); print render($shipping_zipcode); ?>
        </div>

        <div class="other-info">
          <p class="label">&nbsp;</p>
          <?php $website_url = field_view_field('node', $business_unit, 'field_website_url', array('label' => 'hidden')); print render($website_url); ?>
          <?php $phone_bu = field_view_field('node', $business_unit, 'field_phone', array('label' => 'hidden')); print render($phone_bu); ?>
        </div>

      </div>

    <?php endforeach; ?>

    </div>

    <?php else: ?>

      <article class="node node-business-unit clearfix">

        <p>This Work Group doesn't have any <strong>Business Units</strong>.</p>
        <p class="add-content"><a href="#">Add one now</a></p>

      </article>

    <?php  // End check if user is part of a business unit.
      endif;
    ?>

  </div><!--- /#business-unit --->
  </div></div>

  <?php else: ?>

  <div id="main-wrap"><div id="main-wrap-inner">
  <div id="main">

    <div id="content" class="column" role="main">
      <?php print render($page['highlighted']); ?>

      <a id="main-content"></a>
      <h1 class="page__title title" id="page-title">No Work Group Access</h1>

      <?php print $messages; ?>
      <?php print render($tabs); ?>
      <?php print render($page['help']); ?>
      <?php if ($action_links): ?>
        <ul class="action-links"><?php print render($action_links); ?></ul>
      <?php endif; ?>

      <article class="node clearfix">

        <p>You are currently not an admin of any Work Group or Business Unit.<br>
        Please contact a Practive Greenhealth administrator for help.</p>

      </article>

    </div>

  </div><!--- /#main --->
  </div></div>

  <?php  // End check if user is part of a work group.
    endif;
  ?>

  <div id="footer-wrap"><div id="footer-wrap-inner">
    <p>&copy;<?php print date('Y'); ?> Practice Greenhealth Environmental Excellence Awards</p>
    <?php print render($page['footer']); ?>
  </div></div>

</div><!--- /#page --->

<?php print render($page['bottom']); ?>
