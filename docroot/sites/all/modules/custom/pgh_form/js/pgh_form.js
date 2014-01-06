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
  // Shim for String.trim() in older browsers.
  //
  if (!String.prototype.trim){
    String.prototype.trim = function(){
      return this.replace(/^\s+|\s+$/g,'');
    };
  }

  // Stub console.
  if (!window.console) {
    window.console = {};
  }
  if (!window.console.log) {
    window.console.log = function () { };
  }

  //
  // Returns a float value for the supplied question id. Returns 0 if not found.
  //
  var valueForQuestion = function(question_id) {
    var $question = $('#question-' + question_id);
    var $form_field;

    // Fetch the form
    if ($question.hasClass('question-type-text')) {
      if ($question.hasClass('question-style-default') || $question.hasClass('question-style-date')) {
        $form_field = $question.find('input');

        if ($form_field.length === 0) {
          console.log('No value for #question-' + question_id);
          return 0;
        }

        var textValue = $.trim($form_field.val());
        textValue = textValue.replace(/[^\d\.\-]/g, "");
        return parseFloat(textValue);

      } else {
        console.log('Unsupported text style');
        return 0;
      }

    } else if ($question.hasClass('question-type-selection')) {
      if ($question.hasClass('question-style-dropdown')) {
        $form_field = $question.find('select');

        if ($form_field.length === 0) {
          console.log('No value for #question-' + question_id);
          return 0;
        }

        return $form_field.find('option:selected').html().trim();

      } else if ($question.hasClass('question-style-radios')) {
        $form_field = $question.find('input:radio:checked');

        if ($form_field.length === 0) {
          console.log('No value for #question-' + question_id);
          return '';
        }

        return $question.find('input:radio:checked').next('label:first').html().trim();

      } else {
        console.log('Unsupported selection style');
        return 0;
      }

    } else {
      console.log('Unsupported question type: #' + question_id + ', ' + $question.attr('class'));
      return 0;
    }
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

      var formulas = Drupal.settings.pghForm.formulas;

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

    // Drupal's FAPI state handling doesn't allow us to bind a state to the visibility of an element. We need
    // that behavior because dependent questions may be dependees of other questions. When the parent question
    // is hidden its children should be hidden as well.
    //
    // Drupal's state.js provides the 'states:visible' event which we can bind to. This event will fire on a dependent
    // question when its visibility is changed by FAPI. This code will show/hide the child questions appropriately.
    //
    // Note: this code only goes one level below the FAPI's change so if there is a chain of dependent questions
    // longer than three, all questions after the third one will be unaffected when the top level item changes.
    $('.question').bind('state:visible', function(e) {
      if (e.trigger) {
        var id = $(this).closest('.question').attr('id');
        $(e.target).closest('.form-item, .form-submit, .form-wrapper')[e.value ? 'slideDown' : 'slideUp']();
        $('.data-parent-id-' + id)[e.value ? 'slideDown' : 'slideUp']();
        return false;
      }
    });

    // Ensure that third level dependent questions are properly hidden on page load.
    $('.question > .form-item').each(function() {
      var id = $(this).closest('.question').attr('id');
      $('.data-parent-id-' + id).toggle($(this).css('display') !== 'none');
    });

    // Add date pickers. If there are no date style questions in the form the UI component might not be available.
    if ($.isFunction($.datepicker)) {
      $('.question-style-date input').datepicker({
        dateFormat: 'yy-mm-dd'
      });
    }

    // Add currency prefix.
    $('.question-style-currency input').before('<span class="currency-prefix">$</span> ');
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

  // Keep track of the number of active save operations. When the number is positive we show a
  // "saving" message. When the number drops to 0 we momentarily show a "Saved" message.
  var activities = 0;

  Drupal.pghApplicationForm.beforeSend = function (first, options) {
    activities += 1;
    $('.pgh-form-status').addClass('saving').text('Saving changes...');

    $('input[type="checkbox"]').attr('disabled', 'disabled');

    if (typeof Drupal.ajax.prototype.beforeSend === 'function') {
      Drupal.ajax.prototype.beforeSend.call(this, first, options);
    }
  };

  Drupal.pghApplicationForm.success = function (response, status) {
    activities -= 1;
    if (activities <= 0) {
      $('.pgh-form-status').removeClass('saving').addClass('saved').text('All changes saved');
      $('input[type="checkbox"]').removeAttr('disabled');

      setTimeout(function() {
        $('.pgh-form-status').removeClass('saved');
      }, 2000);
    }

    if (typeof Drupal.ajax.prototype.success === 'function') {
      Drupal.ajax.prototype.success.call(this, response, status);
    }

    calculateQuestionValues();
  };

  Drupal.pghApplicationForm.error = function (response, uri) {
    activities -= 1;
    if (activities <= 0) {
      $('.pgh-form-status').removeClass('saving').text('Problem saving changes');
      $('input[type="checkbox"]').removeAttr('disabled');

      setTimeout(function() {
        $('.pgh-form-status').removeClass('saved');
      }, 2000);
    }

    if (typeof Drupal.ajax.prototype.error === 'function') {
      Drupal.ajax.prototype.error.call(this, response, uri);
    }
  };

  // Array of letters for dependent question labeling.
  var letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
  for (var index = 0; index < 26; index++) {
    letters.push('a' + letters[index]);
  }

  console.log(letters);

  Drupal.behaviors.pghApplicationNumbering = {
    attach: function (context, settings) {
      // Remove any existing number markup.
      $('.question-number').remove();

      var $all_questions = $('.question');
      var $top_level_questions = $all_questions.not('.question-dependent,.question-type-html');

      // Add an ordinal to the first form-item of each top-level question.
      $top_level_questions.each(function(top_index, top_element) {
        // We prepend the number divs to the form-items so that numbering for dependent questions is
        // properly hidden by Drupal's form system. A question may contain multiple form-items so we
        // only add a number to the first matched element.

        var top_number = top_index + 1;
        $(top_element).find('.form-item').eq(0).prepend('<div class="question-number">' + top_number.toString() + '.</div>');

        // Add an alphabetic ordinal to each question which is a dependent question of the current
        // top-level question.
        $all_questions.filter('.data-parent-id-' + $(top_element).attr('id')).each(function(sub_index, sub_element) {
          $(sub_element).find('.form-item').eq(0).prepend('<div class="question-number sub">' + top_number.toString() + '.' + letters[sub_index] + '</div>');
        });
      });
    }
  };

  Drupal.behaviors.pghApplicationCategoryLinks = {
    attach: function(context, settings) {
      var pathArray = window.location.pathname.split( '/' );
      var appId = pathArray[2];
      $('a[href^="category-link"]').each(function (i, element) {
        var categoryId = $(this).attr('href').substring(14);
        $(this).attr('href', '/application/' + appId + '/category/' + categoryId);
      });
    }
  };

  //
  // Trigger a form submission if the value of a file id field is changed.
  //
  // When a file is selected with the Media module file upload pop-up, the hidden field containing the uploaded file id
  // is properly updated. However, this change does not trigger an AJAX form submission so we do it manually here.
  //
  Drupal.behaviors.pghMediaUploadOnChange = {
    attach: function (context, settings) {
      $('input.fid', context).change(function() {
        $(this).parents('form').submit();
      });
    }
  };

})(jQuery);
