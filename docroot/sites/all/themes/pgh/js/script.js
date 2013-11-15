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

        // set toggle arrow
      	$('.business-unit-block').addClass('bu-closed').prepend('<a href="#" class="toggle">Toggle</a>');

      	// toggle show/hide class
      	$('.business-unit-block a.toggle').click(function() {
      	  var $bu_container = $(this).parent();

          if ($bu_container.hasClass('bu-closed')) {
              $bu_container.removeClass('bu-closed')
                              .addClass('bu-opened');
          } else {
              $bu_container.removeClass('bu-opened')
                              .addClass('bu-closed');
          }
          return false;
        });



        // Wrap application drop-down in active section UL parent for theming
        // ======================================================================
        //var $app_drop_menu = '#block-pgh-application-application-category-menu';
        $('#block-pgh-application-application-category-menu ul.category-menu li a.active').clone().prependTo('#block-pgh-application-application-category-menu .item-list').wrap('<ul class="selected-item"><li />');
        $('#block-pgh-application-application-category-menu ul.category-menu').appendTo('#block-pgh-application-application-category-menu .item-list ul.selected-item li');



        // Replace the fieldset legend with an H3 so it's easier to style
      	// ======================================================================
      	$('legend').replaceWith( '<h3 class="legend">' + $('legend').html() + '</h3>' );

    }
  };


})(jQuery, Drupal, this, this.document);
