/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - https://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function ($, Drupal, window, document, undefined) {
  'use strict';

  $(document).ready(function () {
      // Application menu.
      // ======================================================================

      var app_menu_id = '#block-pgh-application-application-category-menu';

      // Check is app menu block exist.
      if ($(app_menu_id).length) {

        // Wrap application drop-down in active section UL parent for theming.
        if ($(app_menu_id + ' ul.category-menu li a').hasClass('active')) {
          $(app_menu_id + ' ul.category-menu li a.active').clone().prependTo(app_menu_id + ' .item-list').wrap('<ul class="selected-item"><li />');
          $(app_menu_id + ' ul.category-menu').appendTo(app_menu_id + ' .item-list ul.selected-item li');

          // Add back and next arrows.
          var $app_menu_arrows = $('#block-pgh-application-application-category-menu ul.category-menu li a.active').parent('li');
          if ($app_menu_arrows.prev('li')) {
            $app_menu_arrows.prev().children('a').clone().prependTo(app_menu_id + ' .item-list').wrap('<span class="prev" />');
          }
          if ($app_menu_arrows.next('li')) {
            $app_menu_arrows.next().children('a').clone().prependTo(app_menu_id + ' .item-list').wrap('<span class="next" />');
          }

          // Add the active category class to h1 by first grabbing the classes needed.
          var active_classes = $('#block-pgh-application-application-category-menu ul.category-menu li a.active').attr('class');

          // Second, apply classes to h1. Remove unnecessary class and put back the original classes.
          $('h1#page-title').attr('class', active_classes)
                            .removeClass('category-link active')
                            .addClass('page__title title')
                            .prepend('<span />'); // Add an empty SPAN to put the category icon into.

        } else {
          $(app_menu_id + ' ul.category-menu').wrap('<ul class="selected-item"><li />').parent().prepend('<a href="#">Select a section</a>');
          $(app_menu_id + ' ul.category-menu li.first a').clone()
                                                       .prependTo(app_menu_id + ' .item-list')
                                                       .wrap('<span class="next" />');
          $('h1#page-title').addClass('no-category');
        }

      }


      // App menu - hover intent
      $(app_menu_id + ' ul.selected-item > li').hoverIntent({
        sensitivity: 7, // number = sensitivity threshold (must be 1 or higher)
        interval: 100, // number = milliseconds for onMouseOver polling interval
        timeout: 140, // number = milliseconds delay before onMouseOut
        over: showNav,  // function = onMouseOver callback (required)
        out: hideNav    // function = onMouseOut callback (required)
      });

      function showNav() {
        $(this).addClass('hihover');
      }

      function hideNav() {
        $(this).removeClass('hihover');
      }


      // Show / hide business units on the dashboard.
    	// ======================================================================

      // Add open height state to each block.
    	$('.business-unit-block').each(function() {
    	  var $height_opened = $(this).height();
        $(this).css('height', $height_opened);
      });

      // Set clickable toggle arrow.
    	$('.business-unit-block').addClass('bu-closed')
    	                         .prepend('<a href="#" class="toggle"><span>Toggle</span></a>');

    	// Toggle show/hide class.
    	$('.business-unit-block a.toggle').click(function() {
        if ($(this).parent().hasClass('bu-closed')) {
          $(this).parent().removeClass('bu-closed').addClass('bu-opened');
        } else {
          $(this).parent().removeClass('bu-opened').addClass('bu-closed');
        }
        return false;
      });


      // Replace the fieldset legends with H3s so they are easier to style
    	// ======================================================================
    	$('legend').each(function() {
        $(this).replaceWith('<h3 class="legend">' + $(this).html() + '</h3>');
      });

  });

})(jQuery, Drupal, this, this.document);
