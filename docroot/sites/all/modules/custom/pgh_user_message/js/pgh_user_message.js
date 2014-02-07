//
// pgh_user_message.js
//
// Provides front-end functionality for the User Message form.
//
// @author Jay Roberts <jay@designhammer.com>
//

(function($) {
  'use strict';

  // A user can appear in the list multiple times. When the checked value of one changes,
  // change them all.
  $('input[type=checkbox]').change(function() {
    var value = $(this).val();
    var checked = $(this).attr('checked');
    console.log(value);

    $('input[value="' + value + '"]').attr('checked', checked);
  });

})(jQuery);
