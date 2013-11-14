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


// To understand behaviors, see https://drupal.org/node/756722#behaviors
Drupal.behaviors.my_custom_behavior = {
  attach: function(context, settings) {


      // Show / hide business units on the dashboard
    	// ======================================================================

      // set toggle arrow
    	$('.business-unit-block').addClass('bu-closed').prepend('<a href="#" class="toggle">Toggle</a>');

    	// toggle show/hide class
    	$('.business-unit-block a.toggle').click(function() {
        if ($(this).parent().hasClass('bu-closed')) {
            $(this).parent().removeClass('bu-closed');
            $(this).parent().addClass('bu-opened');
        } else {
            $(this).parent().removeClass('bu-opened');
            $(this).parent().addClass('bu-closed');
        }
        return false;
      });

  }
};


})(jQuery, Drupal, this, this.document);
