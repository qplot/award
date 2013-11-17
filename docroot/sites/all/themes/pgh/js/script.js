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

  // To understand behaviors, see https://drupal.org/node/756722#behaviors
  Drupal.behaviors.my_custom_behavior = {
    attach: function(context, settings) {



        // Show / hide business units on the dashboard
      	// ======================================================================

        // add open height to each
      	$('.business-unit-block').each(function() {
      	  var $height_opened = $(this).height();
          $(this).css('height', $height_opened);
        });

        // set toggle arrow
      	$('.business-unit-block').addClass('bu-closed')
      	                         .prepend('<a href="#" class="toggle"><span>Toggle</span></a>');

      	// toggle show/hide class
      	$('.business-unit-block a.toggle').click(function() {
          if ($(this).parent().hasClass('bu-closed')) {
              $(this).parent().removeClass('bu-closed').addClass('bu-opened');
          } else {
              $(this).parent().removeClass('bu-opened').addClass('bu-closed');
          }
          return false;
        });



        // Application menu
        // ======================================================================

        // Wrap application drop-down in active section UL parent for theming
        var $app_menu = '#block-pgh-application-application-category-menu';

        // check is app menu block exist
        if ($($app_menu).hasClass('block')) {

          $($app_menu + ' ul.category-menu li a.active').clone().prependTo($app_menu + ' .item-list').wrap('<ul class="selected-item"><li />');
          $($app_menu + ' ul.category-menu').appendTo($app_menu + ' .item-list ul.selected-item li');

          // add back and next arrows
          var $app_menu_arrows = $('#block-pgh-application-application-category-menu ul.category-menu li a.active').parent('li');
          if ($app_menu_arrows.next('li')) {
              $app_menu_arrows.next().children('a').clone().prependTo($app_menu + ' .item-list').wrap('<span class="next" />');
          }
          if ($app_menu_arrows.prev('li')) {
              $app_menu_arrows.prev().children('a').clone().prependTo($app_menu + ' .item-list').wrap('<span class="prev" />');
          }

          // add active class to h1
          var $cat_classes = $('#block-pgh-application-application-category-menu ul.category-menu li a.active');
          $('h1#page-title').attr('class', ($($cat_classes, $(this)).attr('class')))
                       //.removeClass('category-link active')
                       //.addClass('page__title title')
                       .prepend('<span />');

        }

        // App menu - hover intent
        $($app_menu + ' ul.selected-item > li').hoverIntent({
          sensitivity: 7, // number = sensitivity threshold (must be 1 or higher)
          interval: 100, // number = milliseconds for onMouseOver polling interval
          timeout: 140, // number = milliseconds delay before onMouseOut
          over: showNav,  // function = onMouseOver callback (required)
          out: hideNav    // function = onMouseOut callback (required)
        });
        function showNav(){$(this).addClass('hihover');}
        function hideNav(){$(this).removeClass('hihover');}


        // Replace the fieldset legend with an H3 so it's easier to style
      	// ======================================================================
      	$('legend').replaceWith( '<h3 class="legend">' + $('legend').html() + '</h3>' );

    }
  };


})(jQuery, Drupal, this, this.document);
