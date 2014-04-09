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
        'attributes' => array('class' => 'avatar', 'width' => '72', 'height' => '72')
      )
    );
?>
<?php endif; ?>

</div></div>

<div class="users-name">
  <?php if (!empty($variables['user']->realname)): ?>
    <?php print l($variables['user']->realname, 'user/' . $variables['user']->uid); ?>
  <?php else: ?>
    <?php print l($variables['user']->name, 'user/' . $variables['user']->uid); ?>
  <?php endif; ?>
  <br />
  <div class="users-employer">
    <?php
    $user_company = field_view_field('user', $variables['user'], 'field_user_company', array('label' => 'hidden'));
    print drupal_render($user_company);
    ?>
  </div>
  <div class="user-links">
    <span class="edit-user">
      <?php
        print l(
          'Edit',
          'user/' . $variables['user']->uid . '/edit',
          array('query' => drupal_get_destination())
        );
      ?>
    </span>
    <span class="logout-user"><a href="/user/logout">Log out</a></span>
    <span class="dashboard-user"><a href="/dashboard">Dashboard</a></span>
    <?php if (in_array('Reviewer', $variables['user']->roles) && count($variables['user']->roles) > 2): ?>
      <span class="reviewer-user"><a href="/review">Review</a></span>
    <?php endif; ?>
  </div>
</div>
