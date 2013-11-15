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
          <h1 class="header__site-name" id="site-name">
            <a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" class="header__site-link" rel="home"><span><?php print $site_name; ?></span></a>
          </h1>
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

      <?php //print all array keys in a template
        // die(print_r(get_defined_vars()));
      ?>

  <div id="app-menu-wrap"><div id="app-menu-wrap-inner">
  <div id="app-menu">
    <?php
/*
      $block_menu = block_load('pgh_application', 'application_category_menu');
      $output_menu = drupal_render(_block_get_renderable_array(_block_render_blocks(array($block_menu))));
      print $output_menu;
*/
    ?>

<div class="block block-pgh-application first odd" id="block-pgh-application-application-category-menu">
	<h2 class="block__title block-title">Application Category Menu</h2>
	<div class="item-list">
		<ul class="category-menu">
			<li class="first"><a class="category-link pfc-leadership" href="/application/1765/category/1758/edit">Leadership</a></li>
			<li><a class="category-link pfc-waste active" href="/application/1765/category/1759/edit">Waste</a></li>
			<li><a class="category-link pfc-chemicals" href="/application/1765/category/1760/edit">Chemicals</a></li>
      <li><a class="category-link pfc-gor" href="/application/1765/category/1761/edit">Greening the OR</a></li>
      <li><a class="category-link pfc-food" href="/application/1765/category/edit">Food</a></li>
      <li><a class="category-link pfc-epp" href="/application/1765/category/edit">Environmentally Preferable Purchasing</a></li>
      <li><a class="category-link pfc-energy" href="/application/1765/category/edit">Energy</a></li>
      <li><a class="category-link pfc-water" href="/application/1765/category/edit">Water</a></li>
      <li><a class="category-link pfc-climate" href="/application/1765/category/edit">Climate</a></li>
      <li class="last"><a class="category-link pfc-green-building" href="/application/1765/category/edit">Green Building</a></li>
		</ul>
	</div>
</div>

  </div>
  </div></div>

  <div id="cat-menu-wrap"><div id="cat-menu-wrap-inner">
  <div id="cat-menu">
    <?php
/*
      $block_categories = block_load('pgh_application', 'application_category_menu');
      $output_categories = drupal_render(_block_get_renderable_array(_block_render_blocks(array($block_categories))));
      print $output_categories;
*/
    ?>

<div class="block block-pgh-application first odd" id="block-pgh-application-application-category-menu--2">
	<h2 class="block__title block-title">Application Category Menu</h2>
	<div class="item-list">
		<ul class="category-menu">
			<li class="first"><a class="category-link pfc-leadership active" href="/application/1765/category/1758/edit">Leadership</a></li>
			<li><a class="category-link pfc-waste" href="/application/1765/category/1759/edit">Waste</a></li>
			<li><a class="category-link pfc-chemicals" href="/application/1765/category/1760/edit">Chemicals</a></li>
      <li><a class="category-link pfc-gor" href="/application/1765/category/1761/edit">Greening the OR</a></li>
      <li><a class="category-link pfc-food" href="/application/1765/category/edit">Food</a></li>
      <li><a class="category-link pfc-epp" href="/application/1765/category/edit">Environmentally Preferable Purchasing</a></li>
      <li><a class="category-link pfc-energy" href="/application/1765/category/edit">Energy</a></li>
      <li><a class="category-link pfc-water" href="/application/1765/category/edit">Water</a></li>
      <li><a class="category-link pfc-climate" href="/application/1765/category/edit">Climate</a></li>
      <li class="last"><a class="category-link pfc-green-building" href="/application/1765/category/edit">Green Building</a></li>
		</ul>
	</div>
</div>

  </div>
  </div></div>

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

      <?php print render($page['content']); ?>

    </div>

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

  </div><!--- /#main -->
  </div></div>


  </div></div>


  <div id="footer-wrap"><div id="footer-wrap-inner">
    <p>&copy;<?php print date('Y'); ?> Practice Greenhealth Environmental Excellence Awards</p>
    <?php print render($page['footer']); ?>
  </div></div>

</div><!--- /#page --->

<?php print render($page['bottom']); ?>
