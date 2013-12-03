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

  //
  // Takes one or more sets of numbers as arguments and returns their sum.
  //
  var sum = function() {
    var i;
    var sum = 0;
    for (i = 0; i < arguments.length; i += 1) {
      sum += arguments[i];
    }
    return sum;
  };

  //
  // Divides the first argument by the second. Returns 0 if the second argument is 0.
  //
  var divide = function(a, b) {
    if (b === 0) {
      return 0;
    }
    return a / b;
  };

  var formulas = {
    'pghq_PFC_waste_4_8_tB_9': {
      'args': [
        'pghq_PFC_waste_4_8_tB_1',
        'pghq_PFC_waste_4_8_tB_5'
      ],
      'calculation': sum
    },
    'pghq_PFC_waste_4_8_tB_10': {
      'args': [
        'pghq_PFC_waste_4_8_tB_2',
        'pghq_PFC_waste_4_8_tB_6'
      ],
      'calculation': sum
    }
  };

  //
  // Returns a float value for the supplied question id. Returns 0 if not found.
  //
  var valueForQuestion = function(question_id) {
    var $form_field = $('#question-' + question_id).find('input');
    if ($form_field.length === 0) {
      console.log('No value for #question-' + question_id);
      return 0;
    }
    var textValue = $form_field.val();
    textValue = textValue.replace(/[^\d\.\-]/g, "");
    return parseFloat(textValue);
  };

  //
  // Takes an array of question ids and returns a matching array of values.
  //
  var fetchArgValues = function(question_ids) {
    var i;
    var argValues = [];
    for (i = 0; i < question_ids.length; i += 1) {
      var question_id = question_ids[i];
      var value = valueForQuestion(question_id);
      argValues.push(value);
    }
    return argValues;
  };

  //
  // Iterates through all questions on the page. If the question has a formula specified
  // it fetches the relevant values from other questions, performs the calculation, and
  // sets the question value to match.
  //
  var calculateQuestionValues = function() {
    // Process calculations
    $('.question').each(function(index, element) {
      var question_id = $(element).attr('id').substring(9);

      if (!(question_id in formulas)) {
        return;
      }

      var formula = formulas[question_id];
      var argValues = fetchArgValues(formula.args);
      var value = formula.calculation.apply(this, argValues);

      $('#question-' + question_id).find('input').val(value);
    });
  };

  $(document).ready(function() {
    // Add AJAX save status message.
    $('#application-menu-container').append('<div class="pgh-form-status-container"><div class="pgh-form-status">All changes saved</div></div>');

    // Hide the submit button.
    $('#pgh-application-form').find('input[type="submit"]').hide();

    // Process formula questions.
    calculateQuestionValues();
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

    calculateQuestionValues();
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
