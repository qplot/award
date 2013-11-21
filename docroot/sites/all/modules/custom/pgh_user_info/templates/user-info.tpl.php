<?php

/**
 * @file
 * Teplate for user info block.
 *
 * @author Jay Roberts <jay@designhammer.com>
 */

?>

<div class="user-picture-wrap"><div class="user-picture">

<?php if ($variables['user']->picture): ?>
<?php
  print theme('image_style',
      array(
        'style_name' => 'thumbnail',
        'path' => $user->picture->uri,
        'attributes' => array('class' => 'avatar')
      )
    );
?>
<?php endif; ?>

</div></div>

<div class="users-name">
  <?php print $variables['user']->name; ?>
  <br />
  <span class="users-employer">
    <?php
    $user_company = field_view_field('user', $variables['user'], 'field_company', array('label' => 'hidden'));
    print drupal_render($user_company); ?>
  </span>
  <div class="user-links">
    <span class="edit-user"><a href="/user/<?php print $variables['user']->uid; ?>/edit">Edit</a></span>
    <span class="logout-user"><a href="/user/logout">Log out</a></span>
    <span class="dashboard-user"><a href="/dashboard">Dashboard</a></span>
  </div>
</div>
