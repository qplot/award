//
// pgh_comment.js
//
// Provides front-end functionality for comment submission.
//
// @author Fang Jin <fang@designhammer.com>
//
(function($) {
  'use strict';

  $(document).ready(function () {

    $('.use-custom-ajax').click(function(event) {
      // get link
      var link = $(this).attr('href');
      // find question id
      var id = link.split("/").pop();
      // find corresponding body
      var body = $('#comment_' + id + ' .form-textarea').val();
      // submit the value
      $.post(link, {'body': body}, function(data) {
        console.log(data);
      });

      // call submission

      event.preventDefault();
    });

  });

})(jQuery);