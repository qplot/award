//
// pgh_form.js
//
// Provides front-end functionality for the application form. Display's save staus
// messages and hides the default submit button.
//
// @author Jay Roberts <jay@designhammer.com>
//

(function($) {
  'use strict';

  $(document).ready(function() {
    // Add AJAX save status message.
    $('#application-menu-container').append('<div class="pgh-form-status-container"><div class="pgh-form-status">All changes saved</div></div>');

    // Hide submit button
    $('#pgh-application-form').find('input[type="submit"]').hide();
  });

  Drupal.pghApplicationForm = {
    form_id: 'pgh-application-form',
  };

  Drupal.behaviors.pghApplicationForm = {
    attach: function(context, settings) {
      // We extend Drupal.ajax objects for all AJAX elements in our form
      for (var ajax_el in settings.ajax) {
        if (typeof Drupal.ajax[ajax_el] != 'undefined' && Drupal.ajax[ajax_el].element.form) {
          if (Drupal.ajax[ajax_el].element.form.id === Drupal.pghApplicationForm.form_id) {
            Drupal.ajax[ajax_el].beforeSend = Drupal.pghApplicationForm.beforeSend;
            Drupal.ajax[ajax_el].success = Drupal.pghApplicationForm.success;
            Drupal.ajax[ajax_el].error = Drupal.pghApplicationForm.error;
          }
        }
      }
    }
  };

  Drupal.pghApplicationForm.beforeSend = function (first, second) {
    $('.pgh-form-status').addClass('saving')
                         .text('Saving changes...');

    if (typeof Drupal.ajax.prototype.beforeSend === 'function') {
      Drupal.ajax.prototype.beforeSend.call(this, first, second);
    }
  }

  Drupal.pghApplicationForm.success = function (response, status) {
    $('.pgh-form-status').removeClass('saving')
                         .addClass('saved')
                         .text('All changes saved');
    setTimeout(function() {
      $('.pgh-form-status').removeClass('saved');
    }, 2000);

    if (typeof Drupal.ajax.prototype.success === 'function') {
      Drupal.ajax.prototype.success.call(this, response, status);
    }
  }

  Drupal.pghApplicationForm.error = function (response, uri) {
    $('.pgh-form-status').removeClass('saving')
                         .text('Problem saving changes');

    if (typeof Drupal.ajax.prototype.error === 'function') {
      Drupal.ajax.prototype.error.call(this, response, uri);
    }
  }

})(jQuery);
