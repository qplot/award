(function(Drupal) {
  'use strict';

  Drupal.settings.pghForm = {};

  var handlers = {
    //
    // Takes one or more sets of numbers as arguments and returns their sum.
    //
    sum: function() {
      var i;
      var sum = 0;
      for (i = 0; i < arguments.length; i += 1) {
        sum += arguments[i];
      }
      return sum;
    },

    //
    // Divides the first argument by the second. Returns 0 if the second argument is 0.
    //
    divide: function(a, b) {
      if (b === 0) {
        return 0;
      }
      return a / b;
    }
  };

  // Map arguments and handlers for specific questions.
  Drupal.settings.pghForm.formulas = {
    'pghq_PFC_waste_4_8_tB_9': {
      'args': [
        'pghq_PFC_waste_4_8_tB_1',
        'pghq_PFC_waste_4_8_tB_5'
      ],
      'calculation': handlers.sum
    },
    'pghq_PFC_waste_4_8_tB_10': {
      'args': [
        'pghq_PFC_waste_4_8_tB_2',
        'pghq_PFC_waste_4_8_tB_6'
      ],
      'calculation': handlers.sum
    }
  };

})(Drupal);