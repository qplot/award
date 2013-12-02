//
// pgh_form.js
//
// Provides front-end functionality for the application form. Displays save status
// messages, question numbering, and hides the default submit button.
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
    form_id: 'pgh-application-form'
  };

  Drupal.behaviors.pghApplicationForm = {
    attach: function (context, settings) {
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
    $('.pgh-form-status').addClass('saving').text('Saving changes...');

    if (typeof Drupal.ajax.prototype.beforeSend === 'function') {
      Drupal.ajax.prototype.beforeSend.call(this, first, second);
    }
  };

  Drupal.pghApplicationForm.success = function (response, status) {
    $('.pgh-form-status').removeClass('saving').addClass('saved').text('All changes saved');
    setTimeout(function() {
      $('.pgh-form-status').removeClass('saved');
    }, 2000);

    if (typeof Drupal.ajax.prototype.success === 'function') {
      Drupal.ajax.prototype.success.call(this, response, status);
    }
  };

  Drupal.pghApplicationForm.error = function (response, uri) {
    $('.pgh-form-status').removeClass('saving').text('Problem saving changes');

    if (typeof Drupal.ajax.prototype.error === 'function') {
      Drupal.ajax.prototype.error.call(this, response, uri);
    }
  };

// Array of letters for dependent question labeling.
var letters = 'abcdefghijklmnopqrstuvwxyz'.split('');

Drupal.behaviors.pghApplicationNumbering = {
  attach: function (context, settings) {
    // Remove any existing number markup.
    $('.question-number').remove();

    var $all_questions = $('.question');
    var $top_level_questions = $('.question:not(.question-dependent,.question-type-html)');

    // Add an ordinal to the first form-item of each top-level question.
    $top_level_questions.each(function(top_index, top_element) {
      // We prepend the number divs to the form-items so that numbering for dependent questions is
      // properly hidden by Drupal's form system. A question may contain multiple form-items so we
      // only add a number to the first matched element.

      var top_number = top_index + 1;
      $(top_element).find('.form-item:eq(0)').prepend('<div class="question-number">' + top_number.toString() + '.</div>');

      // Add an alphabetic ordinal to each question which is a dependent question of the current
      // top-level question.
      $all_questions.filter('[data-parent-id="' + $(top_element).attr('id') + '"]').each(function(sub_index, sub_element) {
        $(sub_element).find('.form-item:eq(0)').prepend('<div class="question-number sub">' + top_number.toString() + '.' + letters[sub_index] + '</div>');
      });
    });
  }
};



})(jQuery);
