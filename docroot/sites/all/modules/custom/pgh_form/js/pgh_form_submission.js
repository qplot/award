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
    $('<a>Show errors</a>').insertBefore('.error-list').click(function () {
      $(this).next().toggle('medium');
    });
    $('.error-list').hide();
  });

})(jQuery);