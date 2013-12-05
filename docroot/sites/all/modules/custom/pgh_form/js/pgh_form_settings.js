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

    //
    // Divides the first value by the sum of the seconds two values.
    //
    divideBySum: function(a, b, c) {
      var sum = b + c;
      if (sum === 0) {
        return 0;
      }
      return a / sum;
    },

    //
    // Converts an amount of energy specified in the supplied units to BTUs.
    //
    convertBTU: function (units, amount) {
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
    // PFC Waste formulas
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
    // PFC Greening the OR formulas
    //
    'pghq_PFC_greeningtheOR_2_3_tB_3': {
      'args': [
        'pghq_PFC_greeningtheOR_2_3_tB_2',
        'pghq_PFC_greeningtheOR_2_3_tB_1'
      ],
      'calculation': handlers.divide
    },
    'pghq_PFC_greeningtheOR_2_12_2_tF_3': {
      'args': [
        'pghq_PFC_greeningtheOR_2_12_2_tF_1',
        'pghq_PFC_greeningtheOR_2_12_2_tF_2'
      ],
      'calculation': handlers.divide
    },
    'pghq_PFC_greeningtheOR_3_4': {
      'args': [
        'pghq_PFC_greeningtheOR_3_3_1',
        'pghq_PFC_greeningtheOR_3_4_0'
      ],
      'calculation': handlers.divide
    },

    //
    // PFC Food formulas
    //
    'pghq_PFC_food_2_1_4': {
      'args': [
        'pghq_PFC_food_2_1_2',
        'pghq_PFC_food_2_1_3'
      ],
      'calculation': handlers.divide
    },
    'pghq_PFC_food_3_1_4': {
      'args': [
        'pghq_PFC_food_3_1_2',
        'pghq_PFC_food_3_1_3'
      ],
      'calculation': handlers.divide
    },

    //
    // PFC Energy formulas
    //
    'pghq_PFC_energy_2_11_17': {
      'args': [
        'pghq_PFC_energy_2_8_2_3', // Units
        'pghq_PFC_energy_2_8_2_2' // Amount
      ],
      'calculation': handlers.convertBTU
    },
    'pghq_PFC_energy_2_11_21': {
      'args': [
        '_PFC_energy_2_11_1',
        '_PFC_energy_2_11_3',
        '_PFC_energy_2_11_5',
        '_PFC_energy_2_11_7',
        '_PFC_energy_2_11_9',
        '_PFC_energy_2_11_11',
        '_PFC_energy_2_11_13',
        '_PFC_energy_2_11_15',
        '_PFC_energy_2_11_17'
      ],
      'calculation': handlers.sum
    },
    'pghq_PFC_energy_2_11_22': {
      'args': [
        'pghq_PFC_energy_2_11_2',
        'pghq_PFC_energy_2_11_4',
        'pghq_PFC_energy_2_11_6',
        'pghq_PFC_energy_2_11_8',
        'pghq_PFC_energy_2_11_10',
        'pghq_PFC_energy_2_11_12',
        'pghq_PFC_energy_2_11_14',
        'pghq_PFC_energy_2_11_16',
        'pghq_PFC_energy_2_11_18
      ],
      'calculation': handlers.sum
    },
    'pghq_PFC_energy_2_12': {
      'args': [
        'pghq_PFC_energy_2_11_18',
        'pghq_PFC_energy_2_11_20
      ],
      'calculation': handlers.sum
    },
    'pghq_PFC_energy_3_1_1_4': {
      'args': [
        'pghq_PFC_energy_2_11_21',
        'pghq_PFC_energy_3_1_1_2'
      ],
      'calculation': handlers.divide
    },
    'pghq_PFC_energy_3_1_1_5': {
      'args': [
        'pghq_PFC_energy_2_11_21',
        'pghq_PFC_energy_3_1_1_1'
      ],
      'calculation': handlers.divide
    },
    'pghq_PFC_energy_3_1_1_6': {
      'args': [
        'pghq_PFC_energy_3_1_1_1',
        'pghq_PFC_energy_2_7_1'
      ],
      'calculation': handlers.divide
    },
    'pghq_PFC_energy_3_1_1_7': {
      'args': [
        'pghq_PFC_energy_3_1_1_2',
        'pghq_PFC_energy_2_7_1'
      ],
      'calculation': handlers.divide
    },
    'pghq_PFC_energy_3_1_1_8': {
      'args': [
        'pghq_PFC_energy_3_1_1_3',
        'pghq_PFC_energy_2_7_1'
      ],
      'calculation': handlers.divide
    },
    'pghq_PFC_energy_3_1_1_9': {
      'args': [
        'ppghq_PFC_energy_3_1_1_5',
        'pghq_PFC_energy_3_1_1_6'
      ],
      'calculation': handlers.divide
    },
    'pghq_PFC_energy_3_1_1_9': {
      'args': [
        'ppghq_PFC_energy_3_1_1_5',
        'pghq_PFC_energy_3_1_1_7'
      ],
      'calculation': handlers.divide
    },
    'pghq_PFC_energy_4_4_31': {
      'args': [
        'pghq_PFC_energy_4_4_3',
        'pghq_PFC_energy_4_4_9',
        'pghq_PFC_energy_4_4_15',
        'pghq_PFC_energy_4_4_21',
        'pghq_PFC_energy_4_4_27'
      ],
      'calculation': handlers.sum
    },
    'pghq_PFC_energy_4_4_32': {
      'args': [
        'pghq_PFC_energy_4_4_5',
        'pghq_PFC_energy_4_4_11',
        'pghq_PFC_energy_4_4_17',
        'pghq_PFC_energy_4_4_23',
        'pghq_PFC_energy_4_4_29'
      ],
      'calculation': handlers.sum
    },
    'pghq_PFC_energy_4_4_33': {
      'args': [
        'pghq_PFC_energy_4_4_6',
        'pghq_PFC_energy_4_4_12',
        'pghq_PFC_energy_4_4_18',
        'pghq_PFC_energy_4_4_24',
        'pghq_PFC_energy_4_4_30'
      ],
      'calculation': handlers.sum
    },

    //
    // PFC Water formulas
    //
    'pghq_PFC_water_2_1tB_7': {
      'args': [
        'pghq_PFC_water_2_1tB_1',
        'pghq_PFC_water_2_1tB_4'
      ],
      'calculation': handlers.sum
    },
    'pghq_PFC_water_3_1tE_21': {
      'args': [
        'pghq_PFC_water_3_1tE_3',
        'pghq_PFC_water_3_1tE_7',
        'pghq_PFC_water_3_1tE_11',
        'pghq_PFC_water_3_1tE_15',
        'pghq_PFC_water_3_1tE_19'
      ],
      'calculation': handlers.sum
    },
    'pghq_PFC_water_3_1tE_22': {
      'args': [
        'pghq_PFC_water_3_1tE_4',
        'pghq_PFC_water_3_1tE_8',
        'pghq_PFC_water_3_1tE_12',
        'pghq_PFC_water_3_1tE_16',
        'pghq_PFC_water_3_1tE_20'
      ],
      'calculation': handlers.sum
    },

    //
    // PFC Climate formulas
    //
    'pghq_PFC_climate_1_5_24': {
      'args': [
        'pghq_PFC_climate_1_5_1',
        'pghq_PFC_climate_1_5_2',
        'pghq_PFC_climate_1_5_3',
        'pghq_PFC_climate_1_5_4',
        'pghq_PFC_climate_1_5_5',
        'pghq_PFC_climate_1_5_6',
        'pghq_PFC_climate_1_5_7',
        'pghq_PFC_climate_1_5_8',
        'pghq_PFC_climate_1_5_9',
        'pghq_PFC_climate_1_5_10',
        'pghq_PFC_climate_1_5_11',
        'pghq_PFC_climate_1_5_12',
        'pghq_PFC_climate_1_5_13',
        'pghq_PFC_climate_1_5_15',
        'pghq_PFC_climate_1_5_16',
        'pghq_PFC_climate_1_5_17',
        'pghq_PFC_climate_1_5_18',
        'pghq_PFC_climate_1_5_19',
        'pghq_PFC_climate_1_5_20',
        'pghq_PFC_climate_1_5_21',
        'pghq_PFC_climate_1_5_22',
        'pghq_PFC_climate_1_5_23'
      ],
      'calculation': handlers.sum
    },
    'pghq_PFC_climate_3_2_6_21': {
      'args': [
        'pghq_PFC_climate_3_2_6_3',
        'pghq_PFC_climate_3_2_6_7',
        'pghq_PFC_climate_3_2_6_11',
        'pghq_PFC_climate_3_2_6_15',
        'pghq_PFC_climate_3_2_6_19'
      ],
      'calculation': handlers.sum
    },
    'pghq_PFC_climate_3_2_6_22': {
      'args': [
        'pghq_PFC_climate_3_2_6_4',
        'pghq_PFC_climate_3_2_6_8',
        'pghq_PFC_climate_3_2_6_12',
        'pghq_PFC_climate_3_2_6_16',
        'pghq_PFC_climate_3_2_6_20'
      ],
      'calculation': handlers.sum
    },

    //
    // PFC Green Building formulas
    //
    'pghq_PFC_greenbuilding_4_2_tC_3': {
      'args': [
        'pghq_PFC_greenbuilding_4_2_tC_1',
        'pghq_PFC_greenbuilding_4_2_tC_2'
      ],
      'calculation': handlers.divide
    },
	  'pghq_PFC_greenbuilding_4_2_tC_6': {
      'args': [
        'pghq_PFC_greenbuilding_4_2_tC_4',
        'pghq_PFC_greenbuilding_4_2_tC_5'
      ],
      'calculation': handlers.divide
    },
    'pghq_PFC_greenbuilding_4_2_tC_7': {
      'args': [
        'pghq_PFC_greenbuilding_4_2_tC_1',
        'pghq_PFC_greenbuilding_4_2_tC_4'
      ],
      'calculation': handlers.sum
    },
    'pghq_PFC_greenbuilding_4_2_tC_8': {
      'args': [
        'pghq_PFC_greenbuilding_4_2_tC_2',
        'pghq_PFC_greenbuilding_4_2_tC_5'
      ],
      'calculation': handlers.sum
    },

    //
    // PFC Appendix A formulas
    //
    'pghq_PFC_appendixa_1_8t_2': {
      'args': [
        'pghq_PFC_appendixa_1_7_1t_2',
        'pghq_PFC_appendixa_1_7_2t_3',
        'pghq_PFC_appendixa_1_7_3t_2',
        'pghq_PFC_appendixa_1_7_4t_2',
        'pghq_PFC_appendixa_1_7_5t_2',
        'pghq_PFC_appendixa_1_7_6t_2',
        'pghq_PFC_appendixa_1_7_7t_3',
        'pghq_PFC_appendixa_1_7_8t_3',
        'pghq_PFC_appendixa_1_7_9t_2',
        'pghq_PFC_appendixa_1_7_10t_2',
        'pghq_PFC_appendixa_1_7_11t_2',
        'pghq_PFC_appendixa_1_7_12t_3',
        'pghq_PFC_appendixa_1_7_13t_3',
        'pghq_PFC_appendixa_1_7_14t_3',
        'pghq_PFC_appendixa_1_7_15t_2',
        'pghq_PFC_appendixa_1_7_16t_2',
        'pghq_PFC_appendixa_1_7_17t_2',
        'pghq_PFC_appendixa_1_7_18t_2',
        'pghq_PFC_appendixa_1_7_19t_2',
        'pghq_PFC_appendixa_1_7_20t_2',
        'pghq_PFC_appendixa_1_7_21t_2',
        'pghq_PFC_appendixa_1_7_22t_2',
        'pghq_PFC_appendixa_1_7_23t_2',
        'pghq_PFC_appendixa_1_7_24t_2',
        'pghq_PFC_appendixa_1_7_25t_2',
        'pghq_PFC_appendixa_1_7_26t_2',
        'pghq_PFC_appendixa_1_7_27t_2',
        'pghq_PFC_appendixa_1_7_28t_2',
        'pghq_PFC_appendixa_1_7_29t_2',
        'pghq_PFC_appendixa_1_7_30t_3',
        'pghq_PFC_appendixa_1_7_31t_3'
      ],
      'calculation': handlers.sum
    }
  };

})(Drupal);