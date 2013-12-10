<?php
/**
 * @file
 * Returns the HTML for a node.
 *
 * Complete documentation for this file is available online.
 * @see https://drupal.org/node/1728164
 */
?>
<article class="node-<?php print $node->nid; ?> <?php print $classes; ?> clearfix"<?php print $attributes; ?>>

  <?php if ($title_prefix || $title_suffix || $display_submitted || $unpublished || !$page && $title): ?>
    <header>
      <?php print render($title_prefix); ?>
      <?php if (!$page && $title): ?>
        <h2<?php print $title_attributes; ?>><a href="<?php print $node_url; ?>"><?php print $title; ?></a></h2>
      <?php endif; ?>
      <?php print render($title_suffix); ?>

      <?php if ($unpublished): ?>
        <mark class="unpublished"><?php print t('Unpublished'); ?></mark>
      <?php endif; ?>
    </header>
  <?php endif; ?>

  <?php
    // We hide the comments and links now so that we can render them later.
    hide($content['comments']);
    hide($content['links']);
    // billing addresses
    hide($content['field_billing_address_1']);
    hide($content['field_billing_address_2']);
    hide($content['field_billing_city']);
    hide($content['field_billing_state']);
    hide($content['field_billing_zipcode']);
    // shipping address
    hide($content['field_same_as_billing']);
    hide($content['field_shipping_address_1']);
    hide($content['field_shipping_address_2']);
    hide($content['field_shipping_city']);
    hide($content['field_shipping_state']);
    hide($content['field_shipping_zipcode']);
    // additional info
    hide($content['field_business_unit_type']);
    hide($content['field_number_beds']);
    hide($content['field_facility_users']);
    hide($content['field_website_url']);
    hide($content['field_phone']);

    print render($content);
  ?>

  <div class="info-block">
    <?php print render($content['field_business_unit_type']); ?>

    <?php $shipping_city = field_get_items('node', $node, 'field_shipping_city'); ?>
    <?php if ($shipping_city): ?>
      <?php print render($content['field_shipping_city']); ?>
    <?php endif; ?>

    <?php $shipping_state = field_get_items('node', $node, 'field_shipping_state'); ?>
    <?php if ($shipping_state): ?>
      <?php print render($content['field_shipping_state']); ?>
    <?php endif; ?>

    <?php $number_beds = field_get_items('node', $node, 'field_number_beds'); ?>
    <?php if ($number_beds): ?>
      <?php print render($content['field_number_beds']); ?>
    <?php endif; ?>

    <?php $facility_users = field_get_items('node', $node, 'field_facility_users'); ?>
    <?php if ($facility_users): ?>
      <?php print render($content['field_facility_users']); ?>
    <?php endif; ?>

  </div>

  <div class="billing-address">
    <?php $billing_address = (
      field_get_items('node', $node, 'field_billing_address_1') ||
      field_get_items('node', $node, 'field_billing_address_2') ||
      field_get_items('node', $node, 'field_billing_city') ||
      field_get_items('node', $node, 'field_billing_state') ||
      field_get_items('node', $node, 'field_billing_zipcode')
    ); ?>
    <?php if ($billing_address): ?>
      <p class="label">Billing Address</p>
      <?php print render($content['field_billing_address_1']); ?>
      <?php print render($content['field_billing_address_2']); ?>
      <?php print render($content['field_billing_city']); ?>
      <?php print render($content['field_billing_state']); ?>
      <?php print render($content['field_billing_zipcode']); ?>
    <?php endif; ?>

  </div>

  <div class="shipping-address">
    <?php $shipping_address = (
      field_get_items('node', $node, 'field_shipping_address_1') ||
      field_get_items('node', $node, 'field_shipping_address_2') ||
      field_get_items('node', $node, 'field_shipping_city') ||
      field_get_items('node', $node, 'field_shipping_state') ||
      field_get_items('node', $node, 'field_shipping_zipcode')
    ); ?>
    <?php if ($shipping_address): ?>
      <p class="label">Shipping Address</p>
      <?php print render($content['field_shipping_address_1']); ?>
      <?php print render($content['field_shipping_address_2']); ?>
      <?php print render($content['field_shipping_city']); ?>
      <?php print render($content['field_shipping_state']); ?>
      <?php print render($content['field_shipping_zipcode']); ?>
    <?php endif; ?>

  </div>

  <div class="other-info">
    <p class="label">&nbsp;</p>
    <?php print render($content['field_website_url']); ?>
    <?php print render($content['field_phone']); ?>
  </div>

  <?php print render($content['links']); ?>
  <?php print render($content['comments']); ?>

</article>
