//
// pgh_form_submission.js
//
// Provides front-end functionality for the application review and submission page.
//
// @author Jay Roberts <jay@designhammer.com>
//
(function($) {
  'use strict';

  //
  // Show/hide category errors.
  //
  $(document).ready(function () {

    // Set the column width of tables. Using JS so nth-child works in IE7.
    $('.page-application-submit table thead th').css('width', '14%');
    $('.page-application-submit table thead th:first-child').css('width', '34%');
    $('.page-application-submit table thead th:last-child').css('width', '52%');

    // Toggle error links.
    $('<span class="show-errors">Show errors</span>').insertBefore('.error-list').click(function () {

      $(this).each(function() {
        $(this).next().toggle('medium');
        $(this).text(
          ($(this).text() == 'Show errors' ? 'Hide errors' : 'Show errors')
        );
      });

    });

    $('.error-list').hide();
  });

})(jQuery);