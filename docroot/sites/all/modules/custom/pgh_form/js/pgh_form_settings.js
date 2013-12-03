(function(Drupal) {
  'use strict';

  Drupal.settings.pghForm = {};

  var handlers = {
    //
    // Takes one or more sets of numbers as arguments and returns their sum.
    //
    sum: function () {
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
    divide: function (a, b) {
      if (b === 0) {
        return 0;
      }
      return a / b;
    },

    convertBTU: function (units, amount) {
      console.log(units);
      console.log(amount);

      switch (units) {
        case 'kWh':
          return amount * 3.413;
        case 'MWh':
          return amount * 3413;
        case 'CCF':
          return amount * 103;
        case 'MCF':
          return amount * 1030;
        case 'Therm':
          return amount * 100;
        default:
          return 0;
      }
    }
  };

  // Map arguments and handlers for specific questions.
  Drupal.settings.pghForm.formulas = {
    //
    // Waste formulas
    //
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
    },
    'pghq_PFC_waste_4_8_tB_11': {
      'args': [
        'pghq_PFC_waste_4_8_tB_3',
        'pghq_PFC_waste_4_8_tB_7'
      ],
      'calculation': handlers.sum
    },
    'pghq_PFC_waste_4_8_tB_12': {
      'args': [
        'pghq_PFC_waste_4_8_tB_4',
        'pghq_PFC_waste_4_8_tB_8'
      ],
      'calculation': handlers.sum
    },
    'pghq_PFC_waste_6_2_14': {
      'args': [
        'pghq_PFC_waste_6_2_1',
        'pghq_PFC_waste_6_2_6',
        'pghq_PFC_waste_6_2_10'
      ],
      'calculation': handlers.sum
    },
    'pghq_PFC_waste_6_2_15': {
      'args': [
        'pghq_PFC_waste_6_2_2',
        'pghq_PFC_waste_6_2_7',
        'pghq_PFC_waste_6_2_11'
      ],
      'calculation': handlers.sum
    },
    'pghq_PFC_waste_6_2_16': {
      'args': [
        'pghq_PFC_waste_6_2_3',
        'pghq_PFC_waste_6_2_8',
        'pghq_PFC_waste_6_2_12'
      ],
      'calculation': handlers.sum
    },
    'pghq_PFC_waste_6_2_17': {
      'args': [
        'pghq_PFC_waste_6_2_4',
        'pghq_PFC_waste_6_2_9',
        'pghq_PFC_waste_6_2_13'
      ],
      'calculation': handlers.sum
    },
    'pghq_PFC_waste_8_10_1tE_9': {
      'args': [
        'pghq_PFC_waste_8_10_1tE_1',
        'pghq_PFC_waste_8_10_1tE_5'
      ],
      'calculation': handlers.sum
    },
    'pghq_PFC_waste_8_10_1tE_10': {
      'args': [
        'pghq_PFC_waste_8_10_1tE_2',
        'pghq_PFC_waste_8_10_1tE_6'
      ],
      'calculation': handlers.sum
    },
    'pghq_PFC_waste_8_10_1tE_11': {
      'args': [
        'pghq_PFC_waste_8_10_1tE_3',
        'pghq_PFC_waste_8_10_1tE_7'
      ],
      'calculation': handlers.sum
    },
    'pghq_PFC_waste_8_10_1tE_12': {
      'args': [
        'pghq_PFC_waste_8_10_1tE_4',
        'pghq_PFC_waste_8_10_1tE_8'
      ],
      'calculation': handlers.sum
    },
    'pghq_PFC_waste_9_29_1tF_14': {
      'args': [
        'pghq_PFC_waste_9_29_1tF_2',
        'pghq_PFC_waste_9_29_1tF_5',
        'pghq_PFC_waste_9_29_1tF_8',
        'pghq_PFC_waste_9_29_1tF_11'
      ],
      'calculation': handlers.sum
    },
    'pghq_PFC_waste_9_29_1tF_15': {
      'args': [
        'pghq_PFC_waste_9_29_1tF_3',
        'pghq_PFC_waste_9_29_1tF_6',
        'pghq_PFC_waste_9_29_1tF_9',
        'pghq_PFC_waste_9_29_1tF_12'
      ],
      'calculation': handlers.sum
    },
    'pghq_PFC_waste_10_1_tG_1': {
      'args': [
        'pghq_PFC_waste_2_3_tA_2',
        'pghq_PFC_waste_6_2_14',
        'pghq_PFC_waste_8_10_1tE_9'
      ],
      'calculation': handlers.sum
    },
    'pghq_PFC_waste_10_1_tG_2': {
      'args': [
        'pghq_PFC_waste_2_3_tA_3',
        'pghq_PFC_waste_6_2_15',
        'pghq_PFC_waste_8_10_1tE_10'
      ],
      'calculation': handlers.sum
    },
    'pghq_PFC_waste_10_1_tG_3': {
      'args': [
        'pghq_PFC_waste_2_3_tA_4',
        'pghq_PFC_waste_6_2_16',
        'pghq_PFC_waste_8_10_1tE_11'
      ],
      'calculation': handlers.sum
    },
    'pghq_PFC_waste_10_1_tG_4': {
      'args': [
        'pghq_PFC_waste_2_3_tA_5',
        'pghq_PFC_waste_6_2_17',
        'pghq_PFC_waste_8_10_1tE_12'
      ],
      'calculation': handlers.sum
    },
    'pghq_PFC_waste_10_1_tH_1': {
      'args': [
        'pghq_PFC_waste_10_1_tG_1',
        'pghq_PFC_waste_2_3_tA_2'
      ],
      'calculation': handlers.divide
    },
    'pghq_PFC_waste_10_1_tH_2': {
      'args': [
        'pghq_PFC_waste_10_1_tG_2',
        'pghq_PFC_waste_2_3_tA_4'
      ],
      'calculation': handlers.divide
    },
    'pghq_PFC_waste_10_1_tH_3': {
      'args': [
        'pghq_PFC_waste_10_1_tG_3',
        'pghq_PFC_waste_2_3_tA_3'
      ],
      'calculation': handlers.divide
    },
    'pghq_PFC_waste_10_1_tH_4': {
      'args': [
        'pghq_PFC_waste_10_1_tG_4',
        'pghq_PFC_waste_2_3_tA_5'
      ],
      'calculation': handlers.divide
    },
    'pghq_PFC_waste_10_1_tH_5': {
      'args': [
        'pghq_PFC_waste_4_8_tB_9',
        'pghq_PFC_waste_2_3_tA_2'
      ],
      'calculation': handlers.divide
    },
    'pghq_PFC_waste_10_1_tH_6': {
      'args': [
        'pghq_PFC_waste_4_8_tB_10',
        'pghq_PFC_waste_2_3_tA_4'
      ],
      'calculation': handlers.divide
    },
    'pghq_PFC_waste_10_1_tH_7': {
      'args': [
        'pghq_PFC_waste_4_8_tB_11',
        'pghq_PFC_waste_2_3_tA_3'
      ],
      'calculation': handlers.divide
    },
    'pghq_PFC_waste_10_1_tH_8': {
      'args': [
        'pghq_PFC_waste_4_8_tB_12',
        'pghq_PFC_waste_2_3_tA_5'
      ],
      'calculation': handlers.divide
    },
    'pghq_PFC_waste_10_1_tH_9': {
      'args': [
        'pghq_PFC_waste_6_2_14',
        'pghq_PFC_waste_2_3_tA_2'
      ],
      'calculation': handlers.divide
    },
    'pghq_PFC_waste_10_1_tH_10': {
      'args': [
        'pghq_PFC_waste_6_2_15',
        'pghq_PFC_waste_2_3_tA_4'
      ],
      'calculation': handlers.divide
    },
    'pghq_PFC_waste_10_1_tH_11': {
      'args': [
        'pghq_PFC_waste_6_2_16',
        'pghq_PFC_waste_2_3_tA_3'
      ],
      'calculation': handlers.divide
    },
    'pghq_PFC_waste_10_1_tH_12': {
      'args': [
        'pghq_PFC_waste_6_2_17',
        'pghq_PFC_waste_2_3_tA_5'
      ],
      'calculation': handlers.divide
    },
    'pghq_PFC_waste_10_1_tH_13': {
      'args': [
        'pghq_PFC_waste_8_10_1tE_9',
        'pghq_PFC_waste_2_3_tA_2'
      ],
      'calculation': handlers.divide
    },
    'pghq_PFC_waste_10_1_tH_14': {
      'args': [
        'pghq_PFC_waste_8_10_1tE_10',
        'pghq_PFC_waste_2_3_tA_4'
      ],
      'calculation': handlers.divide
    },
    'pghq_PFC_waste_10_1_tH_15': {
      'args': [
        'pghq_PFC_waste_8_10_1tE_11',
        'pghq_PFC_waste_2_3_tA_3'
      ],
      'calculation': handlers.divide
    },
    'pghq_PFC_waste_10_1_tH_16': {
      'args': [
        'pghq_PFC_waste_8_10_1tE_12',
        'pghq_PFC_waste_2_3_tA_5'
      ],
      'calculation': handlers.divide
    },
    'pghq_PFC_waste_9_29_1tF_13': {
      'args': [
        'pghq_PFC_waste_9_29_1tF_1',
        'pghq_PFC_waste_9_29_1tF_4',
        'pghq_PFC_waste_9_29_1tF_7',
        'pghq_PFC_waste_9_29_1tF_10'
      ],
      'calculation': function(a, b, c, d) {
      	return (a + b + c + d) * 8.5 / 2000;
      }
    },

    //
    // Energy formulas
    //
    'pghq_PFC_energy_2_11_17': {
      'args': [
        'pghq_PFC_energy_2_8_2_3', // Units
        'pghq_PFC_energy_2_8_2_2' // Amount
      ],
      'calculation': handlers.convertBTU
    }

  };

})(Drupal);