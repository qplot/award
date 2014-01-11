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


  <?php
    // Check if user is part of a work group.
    if ($work_group):
  ?>

  <div id="workgroup-wrap"><div id="workgroup-wrap-inner">
  <div id="workgroup">

    <div id="workgroup-content" class="column">
      <p class="dashboard-label">Work Group</p>
      <?php if (entity_access('update', 'node', $work_group)): ?>
        <span class="edit-content"><a href="/node/<?php print $work_group->vid; ?>/edit">Edit</a></span>
      <?php endif; ?>
      <h1 class="page__title title"><?php print $work_group->title; ?></h1>

      <?php $field_group_body = field_view_field('node', $work_group, 'body', array('label' => 'hidden')); print render($field_group_body); ?>

      <?php if (in_array('administrator', array_values($user->roles)) && in_array('PGH Administrator', array_values($user->roles))): ?>
      <?php
        // Check to see if user has the correct role.
        $options = array(
          'query' => array(
            'wgid' => $work_group->nid,
          ),
        );
        print l(t('Add a new Business Unit'), 'node/add/business-unit', $options);
      ?>
    <?php endif; ?>
    </div>

  </div><!-- /#workgroup -->
  </div></div>

  <div id="business-unit-wrap"><div id="business-unit-wrap-inner">
  <div id="business-unit">

  <?php if ($business_units): ?>

    <div id="business-unit-content" class="column">

    <?php foreach ($business_units as $business_unit): ?>

      <div class="business-unit-block">

        <div class="bu-container-top">

        <?php
        $business_unit_type = field_view_field('node', $business_unit, 'field_business_unit_type', array('label' => 'hidden'));
        print $business_unit_type ? render($business_unit_type) : '<div class="field-not-specified">Not specified</div>';
        ?>
        <?php if (entity_access('update', 'node', $business_unit)): ?>
          <span class="edit-content"><a href="/node/<?php print $business_unit->vid; ?>/edit">Edit</a></span>
        <?php endif; ?>
        <h2><?php print $business_unit->title; ?></h2>

        <?php
          $options = array(
            'label' => 'hidden',
            'type' => 'text_summary_or_trimmed',
            'settings' => array('trim_length' => 225),
          );
          $field_bu_body = field_view_field('node', $business_unit, 'body', $options);
          print render($field_bu_body);
        ?>

        <div class="info-block">
          <?php $shipping_city = field_view_field('node', $business_unit, 'field_shipping_city', array('label' => 'hidden')); print render($shipping_city); ?>
          <?php $shipping_state = field_view_field('node', $business_unit, 'field_shipping_state', array('label' => 'hidden')); print render($shipping_state); ?>
          <?php $number_beds = field_view_field('node', $business_unit, 'field_number_beds'); print render($number_beds); ?>
          <?php $number_ors = field_view_field('node', $business_unit, 'field_number_ors'); print render($number_ors); ?>
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

        <div class="ie-clear-fix"></div>
        </div><!-- /.bu-container-top -->
        <div class="bu-container-bottom">


        <?php if(!($business_unit_type)): ?>
            <p class="needs-bu">
              Before adding an application, a Business Unit type needs to be identified.
              <a href="/node/<?php print $business_unit->vid; ?>/edit#edit-field-business-unit-type">Please update this Business Unit</a>
            </p>
        <?php else: ?>

        <div class="applications">
          <?php
            /* Hiding archive link till it's needed.
            <a class="application-archive" href="#">View application archive</a>
            */
          ?>
          <h3>Applications</h3>
          <?php
            // @codingStandardsIgnoreStart
            // Ignore coding style warnings so we can use curly brace conditionals in this .tpl.php file.
            $business_unit_wrapper = entity_metadata_wrapper('node', $business_unit);

            if ($business_unit_wrapper->field_applications->count()) {
              $table_params = array(
                'header' => array('Application', 'Progress', 'Status'),
                'rows' => array(),
              );

              foreach ($business_unit_wrapper->field_applications->getIterator() as $application_wrapper) {
                $application_title = $application_wrapper->title->value();

                // Link to edit the application if the user has permission to do so. This will be FALSE
                // if the application's status is in one of the locked states.
                if (entity_access('update', 'node', $application_wrapper->value())) {
                  $application_title = l($application_wrapper->title->value(), 'application/' . $application_wrapper->nid->value());
                }

                $status_options = $application_wrapper->field_application_status->optionsList();
                $status = isset($status_options[$application_wrapper->field_application_status->value()]) ? $status_options[$application_wrapper->field_application_status->value()] : '-';
                $table_params['rows'][] = array(
                  $application_title,
                  pgh_progress_bar(pgh_api_progress_for_application($application_wrapper->nid->value())),
                  $status,
                );
              }

              print theme('table', $table_params);
              $options = array(
                'query' => array(
                  'bid' => $business_unit->nid,
                ),
                'attributes' => array(
                  'class' => 'start-application',
                ),
              );
              if (node_access('create', 'application')) {
                print l(t('Start a new application'), 'node/add/application', $options);
              }
            } else {
              $options = array(
                'query' => array(
                  'bid' => $business_unit->nid,
                ),
                'attributes' => array(
                  'class' => 'start-application',
                ),
              );
              if (node_access('create', 'application')) {
                print '<p>No current applications.</p> ' . l(t('Start a new application'), 'node/add/application', $options);
              }
            }
            // @codingStandardsIgnoreEnd
          ?>
        </div>

        <div class="users">
          <?php if (user_access('invite users business unit')): ?>
          <?php
            $options = array(
              'query' => array(
                'bid' => $business_unit->nid,
              ),
              'attributes' => array(
                'class' => 'invite-user',
              ),
            );
            print l(t('Invite users to this Business Unit'), 'invite', $options);
          ?>
          <?php endif; ?>
          <h3>Users</h3>

          <ul>
            <?php
              // @codingStandardsIgnoreStart
              // Ignore coding style warnings so we can use curly brace conditionals in this .tpl.php file.
              $users = array();
              foreach ($business_unit_wrapper->field_users->getIterator() as $user) {
                $users[] = $user;
              }
              usort($users, 'pgh_sort_users_by_last_access');

              foreach ($users as $user) {
                $last_access = 'Never logged in';
                if ($user->last_access->value()) {
                  $last_access = format_date($user->last_access->value(), 'short');
                }

                print '<li class="item-user">';
                print '<span class="view-user">' . l('View', 'user/' . $user->uid->value()) . '</span>';
                print '<span class="user-name">' . $user->name->value() . '<span class="access-time">Last access: ' . $last_access . '</span></span>';
                print '</li>';
              }
              // @codingStandardsIgnoreEnd
            ?>
          </ul>

          <p class="user-message">
            <?php print t('Please contact a PGH Administrator if you need help with a user account.'); ?>
          </p>
        </div>

        <?php endif; ?>
        </div><!-- /.bu-container-bottom -->

      </div>

    <?php endforeach; ?>

    </div>

    <?php else: ?>

      <article class="node node-business-unit clearfix">

        <p>This Work Group doesn't have any <strong>Business Units</strong>.</p>
        <p class="add-content"><a href="#">Add one now</a></p>

      </article>

    <?php
      // End check if user is part of a business unit.
      endif;
    ?>

  </div><!-- /#business-unit -->
  </div></div>

  <?php else: ?>

  <div id="main-wrap"><div id="main-wrap-inner">
  <div id="main">

    <div id="content" class="column" role="main">

      <a id="main-content"></a>
      <h1 class="page__title title" id="page-title">No Work Group Access</h1>

      <article class="node clearfix">

        <p><?php print t('You are currently not an administrator of any Work Group or Business Unit.'); ?></p>
        <br />
        <p><?php print t('Please contact a Practice Greenhealth administrator for help.'); ?></p>

      </article>

    </div>

  </div><!-- /#main -->
  </div></div>

  <?php
    // End check if user is part of a work group.
    endif;
  ?>

  <div id="footer-wrap"><div id="footer-wrap-inner">
    <p>&copy;<?php print date('Y'); ?> Practice Greenhealth Environmental Excellence Awards</p>
    <?php print render($page['footer']); ?>
  </div></div>

</div><!-- /#page -->

<?php print render($page['bottom']); ?>
