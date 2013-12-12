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
    // Divides the first value by the sum of the remaining values.
    //
    divideBySum: function() {
      var numerator = arguments[0];
      var i;
      var sum = 0;

      for (i = 1; i < arguments.length; i += 1) {
        sum += arguments[i];
      }

      if (sum === 0) {
        return 0;
      }
      return numerator / sum;
    },

    //
    // Converts an amount of energy from the specified units to BTUs.
    // This Simple version handles two sets of units 'MWh' and 'kWh'. For more detailed
    // conversion use convertBTU().
    //
    convertBTUSimple: function(units, amount) {
      if (units === 'MWh') {
        return amount * 3413;
      } else {
        return amount * 3.413;
      }
    },

    //
    // Converts a specified amount of energy from the specified units to BTUs.
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
    },

    //
    // Converts a specified amount of fuel from the specified units to BTUs.
    // Supports a wide range of units.
    //
    convertBTUComplex: function (units, amount) {
      switch (units) {
        case 'Electricity: kWh':
          return amount * 3.413;

        case 'Electricity: MWh':
          return amount * 3413;

        case 'Natural Gas: CCF':
          return amount * 103;

        case 'Natural Gas: MCF':
          return amount * 1030;

        case 'Natural Gas: Therm':
          return amount * 100;

        case 'Natural Gas: Cubic Meter':
          return amount * 36.4;

        case 'Natural Gas: Gigajoule':
          return amount * 947.8;

        case 'Purchased Steam: 1000 Btu':
          return amount * 1.0;

        case 'Purchased Steam: 1000 lb':
          return amount * 1000;

        case 'Purchased Steam: Therm':
          return amount * 100;

        case 'Purchased Hot Water: 1000 Btu':
          return amount * 1.0;

        case 'Purchased Chilled Water: 1000 Btu':
          return amount * 1.0;

        case 'Purchased Chilled Water: Ton-Hour':
          return amount * 12;

        case 'Oil #2 Fuel Oil: U.S. Gallon':
          return amount * 139;

        case 'Oil #2 Fuel Oil: Imp. Gallon':
          return amount * 167;

        case 'Oil #2 Fuel Oil: Liter':
          return amount * 36.7;

        case 'Oil #6 Diesel: U.S. Gallon':
          return amount * 154;

        case 'Oil #6 Diesel: Imp. Gallon':
          return amount * 185;

        default:
          return amount * 40.7;
      }
    },

    //
    // Converts a specified amount of water from the specified units into into gallons.
    //
    convertGallonsAndDivide: function (units, amount, divisor) {
      if (divisor === 0) {
        return 0;
      }

      var converted = 0;
      switch (units) {
        case 'Hundred Cubic Feet':
          converted = amount * 748;
          break;

        case 'Cubic Feet':
          converted = amount * 7.48;
          break;

        default:
          converted = amount;
          break;
      }

      return converted / divisor;
    },

    //
    // Converts a specified amount of water from the specified units into into gallons.
    // Supports 'square feet' and 'other'.
    //
    convertGallonsAndDivideSimple: function (units, amount, divisor) {
      if (divisor === 0) {
        return 0;
      }

      var converted = 0;
      switch (units) {
        case 'square feet':
          converted = amount;
          break;

        default:
          converted = amount * 43560;
          break;
      }

      return converted / divisor;
    },

    //
    // Converts a specified amount of fuel oil from the specified units into BTUs.
    //
    convertFuelOil: function (units, amount) {
      if (units == 'U.S. Gallon') {
        return amount * 133;
      } else if (units == 'Imp. Gallon') {
        return amount * 1067;
      } else {
        return amount * 36.7;
      }
    },

    //
    // Converts a specified amount of steam from the specified units into BTUs.
    //
    convertSteam: function (units, amount) {
      if (units == 'kBTU') {
        return amount;
      } else {
        return amount * 100;
      }
    },

    //
    // Converts a specified amount of water from the specified units into BTUs.
    //
    convertWater: function (units, amount) {
      if (units == 'kBTU') {
        return amount;
      } else {
        return amount * 12;
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
    'pghq_PFC_waste_6_3_5': {
      'args': [
        'pghq_PFC_waste_6_2_16',
        'pghq_PFC_waste_6_3_5_0'
      ],
      'calculation': function (a, b) {
        return a * 2000 / b / 365;
      }
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
    // PFC Chemicals
    //
    'pghq_PFC_chemicals_2_4_2_3': {
      'args': [
        'pghq_PFC_chemicals_2_4_2_1',
        'pghq_PFC_chemicals_2_4_2_1',
        'pghq_PFC_chemicals_2_4_2_2'
      ],
      'calculation': handlers.divideBySum
    },
    'pghq_PFC_chemicals_2_4_2_6': {
      'args': [
        'pghq_PFC_chemicals_2_4_2_4',
        'pghq_PFC_chemicals_2_4_2_4',
        'pghq_PFC_chemicals_2_4_2_5'
      ],
      'calculation': handlers.divideBySum
    },
    'pghq_PFC_chemicals_2_4_2_9': {
      'args': [
        'pghq_PFC_chemicals_2_4_2_7',
        'pghq_PFC_chemicals_2_4_2_7',
        'pghq_PFC_chemicals_2_4_2_8'
      ],
      'calculation': handlers.divideBySum
    },
    'pghq_PFC_chemicals_2_4_2_12': {
      'args': [
        'pghq_PFC_chemicals_2_4_2_10',
        'pghq_PFC_chemicals_2_4_2_10',
        'pghq_PFC_chemicals_2_4_2_11'
      ],
      'calculation': handlers.divideBySum
    },
    'pghq_PFC_chemicals_2_4_2_15': {
      'args': [
        'pghq_PFC_chemicals_2_4_2_13',
        'pghq_PFC_chemicals_2_4_2_13',
        'pghq_PFC_chemicals_2_4_2_14'
      ],
      'calculation': handlers.divideBySum
    },
    'pghq_PFC_chemicals_2_4_2_18': {
      'args': [
        'pghq_PFC_chemicals_2_4_2_16',
        'pghq_PFC_chemicals_2_4_2_16',
        'pghq_PFC_chemicals_2_4_2_17'
      ],
      'calculation': handlers.divideBySum
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
    'pghq_PFC_food_1_3_1_6': {
      'args': [
      'pghq_PFC_food_1_3_1_1',
      'pghq_PFC_food_1_3_1_4',
      'pghq_PFC_food_1_3_1_2',
      'pghq_PFC_food_1_3_1_5'
      ],
      'calculation': function(a, b, c, d) {
        if (a === 0 ||
            b === 0 ||
            c === 0 ||
            d === 0) {
          return 0;
        } else {
          return a / b / c / d;
        }
      }
    },
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
    // PFC Energy
    //
    'pghq_PFC_energy_2_11_1': {
      'args': [
        'pghq_PFC_energy_2_7_5',
        'pghq_PFC_energy_2_7_4',
      ],
      'calculation': handlers.convertBTUSimple
    },
    'pghq_PFC_energy_2_11_2': {
      'args': [
        'pghq_PFC_energy_2_11_1',
        'pghq_PFC_energy_2_11_1',
        'pghq_PFC_energy_2_11_3',
        'pghq_PFC_energy_2_11_5',
        'pghq_PFC_energy_2_11_7',
        'pghq_PFC_energy_2_11_9',
        'pghq_PFC_energy_2_11_11',
        'pghq_PFC_energy_2_11_13',
        'pghq_PFC_energy_2_11_15',
        'pghq_PFC_energy_2_11_17',
        'pghq_PFC_energy_2_11_19',
        'pghq_PFC_energy_2_11_21'
      ],
      'calculation': handlers.divideBySum
    },
    'pghq_PFC_energy_2_11_3': {
      'args': [
        'pghq_PFC_energy_2_7_9',
        'pghq_PFC_energy_2_7_8'
      ],
      'calculation': handlers.convertBTUSimple
    },
    'pghq_PFC_energy_2_11_4': {
      'args': [
        'pghq_PFC_energy_2_11_3',
        'pghq_PFC_energy_2_11_1',
        'pghq_PFC_energy_2_11_3',
        'pghq_PFC_energy_2_11_5',
        'pghq_PFC_energy_2_11_7',
        'pghq_PFC_energy_2_11_9',
        'pghq_PFC_energy_2_11_11',
        'pghq_PFC_energy_2_11_13',
        'pghq_PFC_energy_2_11_15',
        'pghq_PFC_energy_2_11_17',
        'pghq_PFC_energy_2_11_19',
        'pghq_PFC_energy_2_11_21'
      ],
      'calculation': handlers.divideBySum
    },
    'pghq_PFC_energy_2_11_5': {
      'args': [
        'pghq_PFC_energy_2_7_13',
        'pghq_PFC_energy_2_7_12'
      ],
      'calculation': handlers.convertBTUSimple
    },
    'pghq_PFC_energy_2_11_6': {
      'args': [
        'pghq_PFC_energy_2_11_5',
        'pghq_PFC_energy_2_11_1',
        'pghq_PFC_energy_2_11_3',
        'pghq_PFC_energy_2_11_5',
        'pghq_PFC_energy_2_11_7',
        'pghq_PFC_energy_2_11_9',
        'pghq_PFC_energy_2_11_11',
        'pghq_PFC_energy_2_11_13',
        'pghq_PFC_energy_2_11_15',
        'pghq_PFC_energy_2_11_17',
        'pghq_PFC_energy_2_11_19',
        'pghq_PFC_energy_2_11_21'
      ],
      'calculation': handlers.divideBySum
    },
    'pghq_PFC_energy_2_11_7': {
      'args': [
        'pghq_PFC_energy_2_7_17',
        'pghq_PFC_energy_2_7_16'
      ],
      'calculation': handlers.convertBTUSimple
    },
    'pghq_PFC_energy_2_11_8': {
      'args': [
        'pghq_PFC_energy_2_11_7',
        'pghq_PFC_energy_2_11_1',
        'pghq_PFC_energy_2_11_3',
        'pghq_PFC_energy_2_11_5',
        'pghq_PFC_energy_2_11_7',
        'pghq_PFC_energy_2_11_9',
        'pghq_PFC_energy_2_11_11',
        'pghq_PFC_energy_2_11_13',
        'pghq_PFC_energy_2_11_15',
        'pghq_PFC_energy_2_11_17',
        'pghq_PFC_energy_2_11_19',
        'pghq_PFC_energy_2_11_21'
      ],
      'calculation': handlers.divideBySum
    },
    'pghq_PFC_energy_2_11_9': {
      'args': [
        'pghq_PFC_energy_2_7_21',
        'pghq_PFC_energy_2_7_20'
      ],
      'calculation': handlers.convertBTUSimple
    },
    'pghq_PFC_energy_2_11_10': {
      'args': [
        'pghq_PFC_energy_2_11_9',
        'pghq_PFC_energy_2_11_1',
        'pghq_PFC_energy_2_11_3',
        'pghq_PFC_energy_2_11_5',
        'pghq_PFC_energy_2_11_7',
        'pghq_PFC_energy_2_11_9',
        'pghq_PFC_energy_2_11_11',
        'pghq_PFC_energy_2_11_13',
        'pghq_PFC_energy_2_11_15',
        'pghq_PFC_energy_2_11_17',
        'pghq_PFC_energy_2_11_19',
        'pghq_PFC_energy_2_11_21'
      ],
      'calculation': handlers.divideBySum
    },
    'pghq_PFC_energy_2_11_11': {
      'args': [
        'pghq_PFC_energy_2_7_25',
        'pghq_PFC_energy_2_7_24'
      ],
      'calculation': handlers.convertBTUSimple
    },
    'pghq_PFC_energy_2_11_12': {
      'args': [
        'pghq_PFC_energy_2_11_11',
        'pghq_PFC_energy_2_11_1',
        'pghq_PFC_energy_2_11_3',
        'pghq_PFC_energy_2_11_5',
        'pghq_PFC_energy_2_11_7',
        'pghq_PFC_energy_2_11_9',
        'pghq_PFC_energy_2_11_11',
        'pghq_PFC_energy_2_11_13',
        'pghq_PFC_energy_2_11_15',
        'pghq_PFC_energy_2_11_17',
        'pghq_PFC_energy_2_11_19',
        'pghq_PFC_energy_2_11_21'
      ],
      'calculation': handlers.divideBySum
    },
    'pghq_PFC_energy_2_11_13': {
      'args': [
        'pghq_PFC_energy_2_7_29',
        'pghq_PFC_energy_2_7_28'
      ],
      'calculation': handlers.convertBTUSimple
    },
    'pghq_PFC_energy_2_11_14': {
      'args': [
        'pghq_PFC_energy_2_11_13',
        'pghq_PFC_energy_2_11_1',
        'pghq_PFC_energy_2_11_3',
        'pghq_PFC_energy_2_11_5',
        'pghq_PFC_energy_2_11_7',
        'pghq_PFC_energy_2_11_9',
        'pghq_PFC_energy_2_11_11',
        'pghq_PFC_energy_2_11_13',
        'pghq_PFC_energy_2_11_15',
        'pghq_PFC_energy_2_11_17',
        'pghq_PFC_energy_2_11_19',
        'pghq_PFC_energy_2_11_21'
      ],
      'calculation': handlers.divideBySum
    },
		'pghq_PFC_energy_2_11_17': {
			'args': [
				'pghq_PFC_energy_2_8_2_3', // Units 1
				'pghq_PFC_energy_2_8_2_2', // Amount 1
				'pghq_PFC_energy_2_8_2_8', // Units 2
				'pghq_PFC_energy_2_8_2_7', // Amount 2
				'pghq_PFC_energy_2_8_2_13', // Units 3
				'pghq_PFC_energy_2_8_2_12' // Amount 3
			],
			'calculation': function (a, b, c, d, e, f) {
				var x = handlers.convertBTU(a, b);
				var y = handlers.convertBTU(c, d);
				var z = handlers.convertBTU(e, f);
				return x + y + z;
			}
		},
    'pghq_PFC_energy_2_11_18': {
      'args': [
        'pghq_PFC_energy_2_11_17',
        'pghq_PFC_energy_2_11_1',
        'pghq_PFC_energy_2_11_3',
        'pghq_PFC_energy_2_11_5',
        'pghq_PFC_energy_2_11_7',
        'pghq_PFC_energy_2_11_9',
        'pghq_PFC_energy_2_11_11',
        'pghq_PFC_energy_2_11_13',
        'pghq_PFC_energy_2_11_15',
        'pghq_PFC_energy_2_11_17',
        'pghq_PFC_energy_2_11_19',
        'pghq_PFC_energy_2_11_21'
      ],
      'calculation': handlers.divideBySum
    },
    'pghq_PFC_energy_2_11_19': {
      'args': [
        'pghq_PFC_energy_2_8_2_3', // Units
        'pghq_PFC_energy_2_8_2_2' // Amount
      ],
      'calculation': handlers.convertBTU
    },
    'pghq_PFC_energy_2_11_20': {
      'args': [
        'pghq_PFC_energy_2_11_19',
        'pghq_PFC_energy_2_11_1',
        'pghq_PFC_energy_2_11_3',
        'pghq_PFC_energy_2_11_5',
        'pghq_PFC_energy_2_11_7',
        'pghq_PFC_energy_2_11_9',
        'pghq_PFC_energy_2_11_11',
        'pghq_PFC_energy_2_11_13',
        'pghq_PFC_energy_2_11_15',
        'pghq_PFC_energy_2_11_17',
        'pghq_PFC_energy_2_11_19',
        'pghq_PFC_energy_2_11_21'
      ],
      'calculation': handlers.divideBySum
    },
    'pghq_PFC_energy_2_11_21': {
      'args': [
        'pghq_PFC_energy_2_11_1',
        'pghq_PFC_energy_2_11_3',
        'pghq_PFC_energy_2_11_5',
        'pghq_PFC_energy_2_11_7',
        'pghq_PFC_energy_2_11_9',
        'pghq_PFC_energy_2_11_11',
        'pghq_PFC_energy_2_11_13',
        'pghq_PFC_energy_2_11_15',
        'pghq_PFC_energy_2_11_17'
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
        'pghq_PFC_energy_2_11_18'
      ],
      'calculation': handlers.sum
    },
    'pghq_PFC_energy_2_12': {
      'args': [
        'pghq_PFC_energy_2_11_18',
        'pghq_PFC_energy_2_11_20'
      ],
      'calculation': handlers.sum
    },
    'pghq_PFC_energy_3_1_1_2': {
      'args': [
        'pghq_PFC_energy_2_7_5',    // electricity_units
        'pghq_PFC_energy_2_7_6',    // electricity_amount
        'pghq_PFC_energy_2_7_9',    // natural_gas_units
        'pghq_PFC_energy_2_7_10',   // natural_gas_amount
        'pghq_PFC_energy_2_7_13',   // fuel_oil_units
        'pghq_PFC_energy_2_7_14',   // fuel_oil_amount
        'pghq_PFC_energy_2_7_17',   // steam_units
        'pghq_PFC_energy_2_7_18',   // steam_amount
        'pghq_PFC_energy_2_7_21',   // chilled_water_units
        'pghq_PFC_energy_2_7_22',   // chilled_water_amount
        'pghq_PFC_energy_2_7_25',   // hot_water_units
        'pghq_PFC_energy_2_7_26',   // hot_water_amount
        'pghq_PFC_energy_2_7_29',   // diesel_units
        'pghq_PFC_energy_2_7_30',   // diesel_amount
        'pghq_PFC_energy_2_8_2_3',  // renewable_1_units
        'pghq_PFC_energy_2_8_2_4',  // renewable_1_amount
        'pghq_PFC_energy_2_8_2_8',  // renewable_2_units
        'pghq_PFC_energy_2_8_2_9',  // renewable_2_amount
        'pghq_PFC_energy_2_8_2_13', // renewable_3_units
        'pghq_PFC_energy_2_8_2_14'  // renewable_3_amount
      ],
      'calculation': function() {
        var electricity_units     = arguments[0];
        var electricity_amount    = arguments[1];
        var natural_gas_units     = arguments[2];
        var natural_gas_amount    = arguments[3];
        var fuel_oil_units        = arguments[4];
        var fuel_oil_amount       = arguments[5];
        var steam_units           = arguments[6];
        var steam_amount          = arguments[7];
        var chilled_water_units   = arguments[8];
        var chilled_water_amount  = arguments[9];
        var hot_water_units       = arguments[10];
        var hot_water_amount      = arguments[11];
        var diesel_units          = arguments[12];
        var diesel_amount         = arguments[13];
        var renewable_1_units     = arguments[14];
        var renewable_1_amount    = arguments[15];
        var renewable_2_units     = arguments[16];
        var renewable_2_amount    = arguments[17];
        var renewable_3_units     = arguments[18];
        var renewable_3_amount    = arguments[19];

        var sum = 0;

        // TODO: convertBTU handler doesn't support Cubic Meter units.

        sum += handlers.convertBTUSimple(electricity_units, electricity_amount);
        sum += handlers.convertBTU(natural_gas_units, natural_gas_amount);
        sum += handlers.convertFuelOil(fuel_oil_units, fuel_oil_amount);
        sum += handlers.convertSteam(steam_units, steam_amount);
        sum += handlers.convertWater(chilled_water_units, chilled_water_amount);
        sum += handlers.convertWater(chilled_water_units, chilled_water_amount);
        sum += handlers.convertFuelOil(diesel_units, diesel_amount);
        sum += handlers.convertBTU(renewable_1_units, renewable_1_amount);
        sum += handlers.convertBTU(renewable_2_units, renewable_2_amount);
        sum += handlers.convertBTU(renewable_3_units, renewable_3_amount);

        return sum;
      }

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
        'pghq_PFC_energy_3_1_1_5',
        'pghq_PFC_energy_3_1_1_6'
      ],
      'calculation': handlers.divide
    },
    'pghq_PFC_energy_4_4_5': {
      'args': [
        'pghq_PFC_energy_4_4_4',
        'pghq_PFC_energy_4_4_3'
      ],
      'calculation': handlers.convertBTUComplex
    },
    'pghq_PFC_energy_4_4_11': {
      'args': [
        'pghq_PFC_energy_4_4_10',
        'pghq_PFC_energy_4_4_9'
      ],
      'calculation': handlers.convertBTUComplex
    },
    'pghq_PFC_energy_4_4_17': {
      'args': [
        'pghq_PFC_energy_4_4_16',
        'pghq_PFC_energy_4_4_15'
      ],
      'calculation': handlers.convertBTUComplex
    },
    'pghq_PFC_energy_4_4_23': {
      'args': [
        'pghq_PFC_energy_4_4_22',
        'pghq_PFC_energy_4_4_21'
      ],
      'calculation': handlers.convertBTUComplex
    },
    'pghq_PFC_energy_4_4_29': {
      'args': [
        'pghq_PFC_energy_4_4_28',
        'pghq_PFC_energy_4_4_27'
      ],
      'calculation': handlers.convertBTUComplex
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
    'pghq_PFC_water_1_7': {
      'args': [
        'pghq_PFC_water_1_5_1_14',
        'pghq_PFC_water_1_5_1_13',
        'pghq_PFC_water_1_5_1_1'
      ],
      'calculation': handlers.convertGallonsAndDivide
    },
    'pghq_PFC_water_1_8': {
      'args': [
        'pghq_PFC_water_1_5_1_14',
        'pghq_PFC_water_1_5_1_13',
        'pghq_PFC_water_1_8_0'
      ],
      'calculation': handlers.convertGallonsAndDivide
    },
    'pghq_PFC_water_1_9': {
      'args': [
        'pghq_PFC_water_1_5_1_14',
        'pghq_PFC_water_1_5_1_13',
        'pghq_PFC_water_1_9_0'
      ],
      'calculation': handlers.convertGallonsAndDivide
    },
    'pghq_PFC_water_1_12': {
      'args': [
        'pghq_PFC_water_1_5_1_14',
        'pghq_PFC_water_1_5_1_13',
        'pghq_PFC_water_1_5_1_7'
      ],
      'calculation': handlers.convertGallonsAndDivide
    },
    'pghq_PFC_water_2_1tB_3': {
      'args': [
        'pghq_PFC_water_2_1tB_2',
        'pghq_PFC_water_2_1tB_1',
        'pghq_PFC_water_2_1tB_7'
      ],
      'calculation': handlers.convertGallonsAndDivide
    },
    'pghq_PFC_water_2_1tB_6': {
      'args': [
        'pghq_PFC_water_2_1tB_5',
        'pghq_PFC_water_2_1tB_4',
        'pghq_PFC_water_2_1tB_7'
      ],
      'calculation': handlers.convertGallonsAndDivide
    },
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
    },

    //
    // PR Waste formulas
    //
    'pghq_PR_waste_4_8_tB_9': {
      'args': [
        'pghq_PR_waste_4_8_tB_1',
        'pghq_PR_waste_4_8_tB_5'
      ],
      'calculation': handlers.sum
    },
    'pghq_PR_waste_4_8_tB_10': {
      'args': [
        'pghq_PR_waste_4_8_tB_2',
        'pghq_PR_waste_4_8_tB_6'
      ],
      'calculation': handlers.sum
    },
    'pghq_PR_waste_4_8_tB_11': {
      'args': [
        'pghq_PR_waste_4_8_tB_3',
        'pghq_PR_waste_4_8_tB_7'
      ],
      'calculation': handlers.sum
    },
    'pghq_PR_waste_4_8_tB_12': {
      'args': [
        'pghq_PR_waste_4_8_tB_4',
        'pghq_PR_waste_4_8_tB_8'
      ],
      'calculation': handlers.sum
    },
    'pghq_PR_waste_6_2_14': {
      'args': [
        'pghq_PR_waste_6_2_1',
        'pghq_PR_waste_6_2_6',
        'pghq_PR_waste_6_2_10'
      ],
      'calculation': handlers.sum
    },
    'pghq_PR_waste_6_2_15': {
      'args': [
        'pghq_PR_waste_6_2_2',
        'pghq_PR_waste_6_2_7',
        'pghq_PR_waste_6_2_11'
      ],
      'calculation': handlers.sum
    },
    'pghq_PR_waste_6_2_16': {
      'args': [
        'pghq_PR_waste_6_2_3',
        'pghq_PR_waste_6_2_8',
        'pghq_PR_waste_6_2_12'
      ],
      'calculation': handlers.sum
    },
    'pghq_PR_waste_6_2_17': {
      'args': [
        'pghq_PR_waste_6_2_4',
        'pghq_PR_waste_6_2_9',
        'pghq_PR_waste_6_2_13'
      ],
      'calculation': handlers.sum
    },
    'pghq_PR_waste_6_3_5': {
      'args': [
        'pghq_PR_waste_6_2_16',
        'pghq_PR_waste_6_3_5_0'
      ],
      'calculation': function (a, b) {
        return a * 2000 / b / 365;
      }
    },
    'pghq_PR_waste_8_10_1tE_9': {
      'args': [
        'pghq_PR_waste_8_10_1tE_1',
        'pghq_PR_waste_8_10_1tE_5'
      ],
      'calculation': handlers.sum
    },
    'pghq_PR_waste_8_10_1tE_10': {
      'args': [
        'pghq_PR_waste_8_10_1tE_2',
        'pghq_PR_waste_8_10_1tE_6'
      ],
      'calculation': handlers.sum
    },
    'pghq_PR_waste_8_10_1tE_11': {
      'args': [
        'pghq_PR_waste_8_10_1tE_3',
        'pghq_PR_waste_8_10_1tE_7'
      ],
      'calculation': handlers.sum
    },
    'pghq_PR_waste_8_10_1tE_12': {
      'args': [
        'pghq_PR_waste_8_10_1tE_4',
        'pghq_PR_waste_8_10_1tE_8'
      ],
      'calculation': handlers.sum
    },

    //
    // PR Energy
    //
    'pghq_PR_energy_4_4_31': {
      'args': [
        'pghq_PR_energy_4_4_3',
        'pghq_PR_energy_4_4_9',
        'pghq_PR_energy_4_4_15',
        'pghq_PR_energy_4_4_21',
        'pghq_PR_energy_4_4_27'
      ],
      'calculation': handlers.sum
    },
    'pghq_PR_energy_4_4_33': {
      'args': [
        'pghq_PR_energy_4_4_6',
        'pghq_PR_energy_4_4_12',
        'pghq_PR_energy_4_4_18',
        'pghq_PR_energy_4_4_24',
        'pghq_PR_energy_4_4_30'
      ],
      'calculation': handlers.sum
    },

    //
    // PR Water formulas
    //
    'pghq_PR_water_1_7': {
      'args': [
        'pghq_PR_water_1_5_1_14',
        'pghq_PR_water_1_5_1_13',
        'pghq_PR_water_1_5_1_1'
      ],
      'calculation': handlers.convertGallonsAndDivide
    },
    'pghq_PR_water_1_8': {
      'args': [
        'pghq_PR_water_1_5_1_14',
        'pghq_PR_water_1_5_1_13',
        'pghq_PR_water_1_8_0'
      ],
      'calculation': handlers.convertGallonsAndDivide
    },
    'pghq_PR_water_1_9': {
      'args': [
        'pghq_PR_water_1_5_1_14',
        'pghq_PR_water_1_5_1_13',
        'pghq_PR_water_1_9_0'
      ],
      'calculation': handlers.convertGallonsAndDivide
    },
    'pghq_PR_water_3_1tB_21': {
      'args': [
        'pghq_PR_water_3_1tB_3',
        'pghq_PR_water_3_1tB_7',
        'pghq_PR_water_3_1tB_11',
        'pghq_PR_water_3_1tB_15',
        'pghq_PR_water_3_1tB_19'
      ],
      'calculation': handlers.sum
    },
    'pghq_PR_water_3_1tB_22': {
      'args': [
        'pghq_PR_water_3_1tB_4',
        'pghq_PR_water_3_1tB_8',
        'pghq_PR_water_3_1tB_12',
        'pghq_PR_water_3_1tB_16',
        'pghq_PR_water_3_1tB_20'
      ],
      'calculation': handlers.sum
    },

    //
    // PR Green Building formulas
    //
    'pghq_PR_greenbuilding_4_2_t_3': {
      'args': [
        'pghq_PR_greenbuilding_4_2_t_1',
        'pghq_PR_greenbuilding_4_2_t_2'
      ],
      'calculation': handlers.divide
    },
	  'pghq_PR_greenbuilding_4_2_t_6': {
      'args': [
        'pghq_PR_greenbuilding_4_2_t_4',
        'pghq_PR_greenbuilding_4_2_t_5'
      ],
      'calculation': handlers.divide
    },
    'pghq_PR_greenbuilding_4_2_t_7': {
      'args': [
        'pghq_PR_greenbuilding_4_2_t_1',
        'pghq_PR_greenbuilding_4_2_t_4'
      ],
      'calculation': handlers.sum
    },
    'pghq_PR_greenbuilding_4_2_t_8': {
      'args': [
        'pghq_PR_greenbuilding_4_2_t_2',
        'pghq_PR_greenbuilding_4_2_t_5'
      ],
      'calculation': handlers.sum
    },

    //
    // PR Appendix A formulas
    //
    'pghq_PR_appendixa_1_8t_2': {
      'args': [
        'pghq_PR_appendixa_1_7_1t_2',
        'pghq_PR_appendixa_1_7_2t_3',
        'pghq_PR_appendixa_1_7_3t_2',
        'pghq_PR_appendixa_1_7_4t_2',
        'pghq_PR_appendixa_1_7_5t_2',
        'pghq_PR_appendixa_1_7_6t_2',
        'pghq_PR_appendixa_1_7_7t_3',
        'pghq_PR_appendixa_1_7_8t_3',
        'pghq_PR_appendixa_1_7_9t_2',
        'pghq_PR_appendixa_1_7_10t_2',
        'pghq_PR_appendixa_1_7_11t_2',
        'pghq_PR_appendixa_1_7_12t_3',
        'pghq_PR_appendixa_1_7_13t_3',
        'pghq_PR_appendixa_1_7_14t_3',
        'pghq_PR_appendixa_1_7_15t_2',
        'pghq_PR_appendixa_1_7_16t_2',
        'pghq_PR_appendixa_1_7_17t_2',
        'pghq_PR_appendixa_1_7_18t_2',
        'pghq_PR_appendixa_1_7_19t_2',
        'pghq_PR_appendixa_1_7_20t_2',
        'pghq_PR_appendixa_1_7_21t_2',
        'pghq_PR_appendixa_1_7_22t_2',
        'pghq_PR_appendixa_1_7_23t_2',
        'pghq_PR_appendixa_1_7_24t_2',
        'pghq_PR_appendixa_1_7_25t_2',
        'pghq_PR_appendixa_1_7_26t_2',
        'pghq_PR_appendixa_1_7_27t_2',
        'pghq_PR_appendixa_1_7_28t_2',
        'pghq_PR_appendixa_1_7_29t_2',
        'pghq_PR_appendixa_1_7_30t_3',
        'pghq_PR_appendixa_1_7_31t_3'
      ],
      'calculation': handlers.sum
    },
    'pghq_PR_appendixa_1_9t_1': {
			'args': [
				'pghq_PR_appendixa_1_7_2t_1', // Radio 1
				'pghq_PR_appendixa_1_7_2t_2', // Amount 1
				'pghq_PR_appendixa_1_7_7t_1', // Radio 2
				'pghq_PR_appendixa_1_7_7t_2', // Amount 2
				'pghq_PR_appendixa_1_7_8t_1', // Radio 3
				'pghq_PR_appendixa_1_7_8t_2', // Amount 3
				'pghq_PR_appendixa_1_7_14t_1', // Radio 4
				'pghq_PR_appendixa_1_7_14t_2' // Amount 4
			],
			'calculation': function (a, b, c, d, e, f, g, h) {
				var total = 0;
				if (a === 'No') {
					total += b;
				}
				if (c === 'No') {
					total += d;
				}
				if (e === 'No') {
					total += f;
				}
				if (g === 'No') {
					total += h;
				}
				return total;
			}
		},

    //
    // LTC Waste formulas
    //
    'pghq_LTC_waste_4_8_tB_9': {
      'args': [
        'pghq_LTC_waste_4_8_tB_1',
        'pghq_LTC_waste_4_8_tB_5'
      ],
      'calculation': handlers.sum
    },
    'pghq_LTC_waste_4_8_tB_10': {
      'args': [
        'pghq_LTC_waste_4_8_tB_2',
        'pghq_LTC_waste_4_8_tB_6'
      ],
      'calculation': handlers.sum
    },
    'pghq_LTC_waste_4_8_tB_11': {
      'args': [
        'pghq_LTC_waste_4_8_tB_3',
        'pghq_LTC_waste_4_8_tB_7'
      ],
      'calculation': handlers.sum
    },
    'pghq_LTC_waste_4_8_tB_12': {
      'args': [
        'pghq_LTC_waste_4_8_tB_4',
        'pghq_LTC_waste_4_8_tB_8'
      ],
      'calculation': handlers.sum
    },
    'pghq_LTC_waste_6_2_14': {
      'args': [
        'pghq_LTC_waste_6_2_1',
        'pghq_LTC_waste_6_2_6',
        'pghq_LTC_waste_6_2_10'
      ],
      'calculation': handlers.sum
    },
    'pghq_LTC_waste_6_2_15': {
      'args': [
        'pghq_LTC_waste_6_2_2',
        'pghq_LTC_waste_6_2_7',
        'pghq_LTC_waste_6_2_11'
      ],
      'calculation': handlers.sum
    },
    'pghq_LTC_waste_6_2_16': {
      'args': [
        'pghq_LTC_waste_6_2_3',
        'pghq_LTC_waste_6_2_8',
        'pghq_LTC_waste_6_2_12'
      ],
      'calculation': handlers.sum
    },
    'pghq_LTC_waste_6_2_17': {
      'args': [
        'pghq_LTC_waste_6_2_4',
        'pghq_LTC_waste_6_2_9',
        'pghq_LTC_waste_6_2_13'
      ],
      'calculation': handlers.sum
    },
    'pghq_LTC_waste_6_3_5': {
      'args': [
        'pghq_LTC_waste_6_2_16',
        'pghq_LTC_waste_6_3_5_0'
      ],
      'calculation': function (a, b) {
        return a * 2000 / b / 365;
      }
    },
    'pghq_LTC_waste_8_10_1tE_9': {
      'args': [
        'pghq_LTC_waste_8_10_1tE_1',
        'pghq_LTC_waste_8_10_1tE_5'
      ],
      'calculation': handlers.sum
    },
    'pghq_LTC_waste_8_10_1tE_10': {
      'args': [
        'pghq_LTC_waste_8_10_1tE_2',
        'pghq_LTC_waste_8_10_1tE_6'
      ],
      'calculation': handlers.sum
    },
    'pghq_LTC_waste_8_10_1tE_11': {
      'args': [
        'pghq_LTC_waste_8_10_1tE_3',
        'pghq_LTC_waste_8_10_1tE_7'
      ],
      'calculation': handlers.sum
    },
    'pghq_LTC_waste_8_10_1tE_12': {
      'args': [
        'pghq_LTC_waste_8_10_1tE_4',
        'pghq_LTC_waste_8_10_1tE_8'
      ],
      'calculation': handlers.sum
    },
    'pghq_LTC_waste_10_1_tG_1': {
      'args': [
        'pghq_LTC_waste_2_3_tA_2',
        'pghq_LTC_waste_6_2_14',
        'pghq_LTC_waste_8_10_1tE_9'
      ],
      'calculation': handlers.sum
    },
    'pghq_LTC_waste_10_1_tG_2': {
      'args': [
        'pghq_LTC_waste_2_3_tA_3',
        'pghq_LTC_waste_6_2_15',
        'pghq_LTC_waste_8_10_1tE_10'
      ],
      'calculation': handlers.sum
    },
    'pghq_LTC_waste_10_1_tG_3': {
      'args': [
        'pghq_LTC_waste_2_3_tA_4',
        'pghq_LTC_waste_6_2_16',
        'pghq_LTC_waste_8_10_1tE_11'
      ],
      'calculation': handlers.sum
    },
    'pghq_LTC_waste_10_1_tG_4': {
      'args': [
        'pghq_LTC_waste_2_3_tA_5',
        'pghq_LTC_waste_6_2_17',
        'pghq_LTC_waste_8_10_1tE_12'
      ],
      'calculation': handlers.sum
    },
    'pghq_LTC_waste_10_1_tH_1': {
      'args': [
        'pghq_LTC_waste_10_1_tG_1',
        'pghq_LTC_waste_2_3_tA_2'
      ],
      'calculation': handlers.divide
    },
    'pghq_LTC_waste_10_1_tH_2': {
      'args': [
        'pghq_LTC_waste_10_1_tG_2',
        'pghq_LTC_waste_2_3_tA_4'
      ],
      'calculation': handlers.divide
    },
    'pghq_LTC_waste_10_1_tH_3': {
      'args': [
        'pghq_LTC_waste_10_1_tG_3',
        'pghq_LTC_waste_2_3_tA_3'
      ],
      'calculation': handlers.divide
    },
    'pghq_LTC_waste_10_1_tH_4': {
      'args': [
        'pghq_LTC_waste_10_1_tG_4',
        'pghq_LTC_waste_2_3_tA_5'
      ],
      'calculation': handlers.divide
    },
    'pghq_LTC_waste_10_1_tH_5': {
      'args': [
        'pghq_LTC_waste_4_8_tB_9',
        'pghq_LTC_waste_2_3_tA_2'
      ],
      'calculation': handlers.divide
    },
    'pghq_LTC_waste_10_1_tH_6': {
      'args': [
        'pghq_LTC_waste_4_8_tB_10',
        'pghq_LTC_waste_2_3_tA_4'
      ],
      'calculation': handlers.divide
    },
    'pghq_LTC_waste_10_1_tH_7': {
      'args': [
        'pghq_LTC_waste_4_8_tB_11',
        'pghq_LTC_waste_2_3_tA_3'
      ],
      'calculation': handlers.divide
    },
    'pghq_LTC_waste_10_1_tH_8': {
      'args': [
        'pghq_LTC_waste_4_8_tB_12',
        'pghq_LTC_waste_2_3_tA_5'
      ],
      'calculation': handlers.divide
    },
    'pghq_LTC_waste_10_1_tH_9': {
      'args': [
        'pghq_LTC_waste_6_2_14',
        'pghq_LTC_waste_2_3_tA_2'
      ],
      'calculation': handlers.divide
    },
    'pghq_LTC_waste_10_1_tH_10': {
      'args': [
        'pghq_LTC_waste_6_2_15',
        'pghq_LTC_waste_2_3_tA_4'
      ],
      'calculation': handlers.divide
    },
    'pghq_LTC_waste_10_1_tH_11': {
      'args': [
        'pghq_LTC_waste_6_2_16',
        'pghq_LTC_waste_2_3_tA_3'
      ],
      'calculation': handlers.divide
    },
    'pghq_LTC_waste_10_1_tH_12': {
      'args': [
        'pghq_LTC_waste_6_2_17',
        'pghq_LTC_waste_2_3_tA_5'
      ],
      'calculation': handlers.divide
    },

    //
    // LTC Chemicals
    //
    'pghq_LTC_chemicals_2_4_2_3': {
      'args': [
        'pghq_LTC_chemicals_2_4_2_1',
        'pghq_LTC_chemicals_2_4_2_1',
        'pghq_LTC_chemicals_2_4_2_2'
      ],
      'calculation': handlers.divideBySum
    },
    'pghq_LTC_chemicals_2_4_2_6': {
      'args': [
        'pghq_LTC_chemicals_2_4_2_4',
        'pghq_LTC_chemicals_2_4_2_4',
        'pghq_LTC_chemicals_2_4_2_5'
      ],
      'calculation': handlers.divideBySum
    },
    'pghq_LTC_chemicals_2_4_2_9': {
      'args': [
        'pghq_LTC_chemicals_2_4_2_7',
        'pghq_LTC_chemicals_2_4_2_7',
        'pghq_LTC_chemicals_2_4_2_8'
      ],
      'calculation': handlers.divideBySum
    },
    'pghq_LTC_chemicals_2_4_2_12': {
      'args': [
        'pghq_LTC_chemicals_2_4_2_10',
        'pghq_LTC_chemicals_2_4_2_10',
        'pghq_LTC_chemicals_2_4_2_11'
      ],
      'calculation': handlers.divideBySum
    },
    'pghq_LTC_chemicals_2_4_2_15': {
      'args': [
        'pghq_LTC_chemicals_2_4_2_13',
        'pghq_LTC_chemicals_2_4_2_13',
        'pghq_LTC_chemicals_2_4_2_14'
      ],
      'calculation': handlers.divideBySum
    },
    'pghq_LTC_chemicals_2_4_2_18': {
      'args': [
        'pghq_LTC_chemicals_2_4_2_16',
        'pghq_LTC_chemicals_2_4_2_16',
        'pghq_LTC_chemicals_2_4_2_17'
      ],
      'calculation': handlers.divideBySum
    },

    //
    // LTC Food formulas
    //
    'pghq_LTC_food_1_3_1_6': {
      'args': [
      'pghq_LTC_food_1_3_1_1',
      'pghq_LTC_food_1_3_1_4',
      'pghq_LTC_food_1_3_1_2',
      'pghq_LTC_food_1_3_1_5'
      ],
      'calculation': function(a, b, c, d) {
        if (a === 0 ||
            b === 0 ||
            c === 0 ||
            d === 0) {
          return 0;
        } else {
          return a / b / c / d;
        }
      }
    },
    'pghq_LTC_food_2_1_4': {
      'args': [
        'pghq_LTC_food_2_1_2',
        'pghq_LTC_food_2_1_3'
      ],
      'calculation': handlers.divide
    },
    'pghq_LTC_food_3_1_4': {
      'args': [
        'pghq_LTC_food_3_1_2',
        'pghq_LTC_food_3_1_3'
      ],
      'calculation': handlers.divide
    },

    //
    // LTC Energy
    //
    'pghq_LTC_energy_2_11_1': {
      'args': [
        'pghq_LTC_energy_2_7_5',
        'pghq_LTC_energy_2_7_4',
      ],
      'calculation': handlers.convertBTUSimple
    },
    'pghq_LTC_energy_2_11_2': {
      'args': [
        'pghq_LTC_energy_2_11_1',
        'pghq_LTC_energy_2_11_1',
        'pghq_LTC_energy_2_11_3',
        'pghq_LTC_energy_2_11_5',
        'pghq_LTC_energy_2_11_7',
        'pghq_LTC_energy_2_11_9',
        'pghq_LTC_energy_2_11_11',
        'pghq_LTC_energy_2_11_13',
        'pghq_LTC_energy_2_11_15',
        'pghq_LTC_energy_2_11_17',
        'pghq_LTC_energy_2_11_19',
        'pghq_LTC_energy_2_11_21'
      ],
      'calculation': handlers.divideBySum
    },
    'pghq_LTC_energy_2_11_3': {
      'args': [
        'pghq_LTC_energy_2_7_9',
        'pghq_LTC_energy_2_7_8'
      ],
      'calculation': handlers.convertBTUSimple
    },
    'pghq_LTC_energy_2_11_4': {
      'args': [
        'pghq_LTC_energy_2_11_3',
        'pghq_LTC_energy_2_11_1',
        'pghq_LTC_energy_2_11_3',
        'pghq_LTC_energy_2_11_5',
        'pghq_LTC_energy_2_11_7',
        'pghq_LTC_energy_2_11_9',
        'pghq_LTC_energy_2_11_11',
        'pghq_LTC_energy_2_11_13',
        'pghq_LTC_energy_2_11_15',
        'pghq_LTC_energy_2_11_17',
        'pghq_LTC_energy_2_11_19',
        'pghq_LTC_energy_2_11_21'
      ],
      'calculation': handlers.divideBySum
    },
    'pghq_LTC_energy_2_11_5': {
      'args': [
        'pghq_LTC_energy_2_7_13',
        'pghq_LTC_energy_2_7_12'
      ],
      'calculation': handlers.convertBTUSimple
    },
    'pghq_LTC_energy_2_11_6': {
      'args': [
        'pghq_LTC_energy_2_11_5',
        'pghq_LTC_energy_2_11_1',
        'pghq_LTC_energy_2_11_3',
        'pghq_LTC_energy_2_11_5',
        'pghq_LTC_energy_2_11_7',
        'pghq_LTC_energy_2_11_9',
        'pghq_LTC_energy_2_11_11',
        'pghq_LTC_energy_2_11_13',
        'pghq_LTC_energy_2_11_15',
        'pghq_LTC_energy_2_11_17',
        'pghq_LTC_energy_2_11_19',
        'pghq_LTC_energy_2_11_21'
      ],
      'calculation': handlers.divideBySum
    },
    'pghq_LTC_energy_2_11_7': {
      'args': [
        'pghq_LTC_energy_2_7_17',
        'pghq_LTC_energy_2_7_16'
      ],
      'calculation': handlers.convertBTUSimple
    },
    'pghq_LTC_energy_2_11_8': {
      'args': [
        'pghq_LTC_energy_2_11_7',
        'pghq_LTC_energy_2_11_1',
        'pghq_LTC_energy_2_11_3',
        'pghq_LTC_energy_2_11_5',
        'pghq_LTC_energy_2_11_7',
        'pghq_LTC_energy_2_11_9',
        'pghq_LTC_energy_2_11_11',
        'pghq_LTC_energy_2_11_13',
        'pghq_LTC_energy_2_11_15',
        'pghq_LTC_energy_2_11_17',
        'pghq_LTC_energy_2_11_19',
        'pghq_LTC_energy_2_11_21'
      ],
      'calculation': handlers.divideBySum
    },
    'pghq_LTC_energy_2_11_9': {
      'args': [
        'pghq_LTC_energy_2_7_21',
        'pghq_LTC_energy_2_7_20'
      ],
      'calculation': handlers.convertBTUSimple
    },
    'pghq_LTC_energy_2_11_10': {
      'args': [
        'pghq_LTC_energy_2_11_9',
        'pghq_LTC_energy_2_11_1',
        'pghq_LTC_energy_2_11_3',
        'pghq_LTC_energy_2_11_5',
        'pghq_LTC_energy_2_11_7',
        'pghq_LTC_energy_2_11_9',
        'pghq_LTC_energy_2_11_11',
        'pghq_LTC_energy_2_11_13',
        'pghq_LTC_energy_2_11_15',
        'pghq_LTC_energy_2_11_17',
        'pghq_LTC_energy_2_11_19',
        'pghq_LTC_energy_2_11_21'
      ],
      'calculation': handlers.divideBySum
    },
    'pghq_LTC_energy_2_11_11': {
      'args': [
        'pghq_LTC_energy_2_7_25',
        'pghq_LTC_energy_2_7_24'
      ],
      'calculation': handlers.convertBTUSimple
    },
    'pghq_LTC_energy_2_11_12': {
      'args': [
        'pghq_LTC_energy_2_11_11',
        'pghq_LTC_energy_2_11_1',
        'pghq_LTC_energy_2_11_3',
        'pghq_LTC_energy_2_11_5',
        'pghq_LTC_energy_2_11_7',
        'pghq_LTC_energy_2_11_9',
        'pghq_LTC_energy_2_11_11',
        'pghq_LTC_energy_2_11_13',
        'pghq_LTC_energy_2_11_15',
        'pghq_LTC_energy_2_11_17',
        'pghq_LTC_energy_2_11_19',
        'pghq_LTC_energy_2_11_21'
      ],
      'calculation': handlers.divideBySum
    },
    'pghq_LTC_energy_2_11_13': {
      'args': [
        'pghq_LTC_energy_2_7_29',
        'pghq_LTC_energy_2_7_28'
      ],
      'calculation': handlers.convertBTUSimple
    },
    'pghq_LTC_energy_2_11_14': {
      'args': [
        'pghq_LTC_energy_2_11_13',
        'pghq_LTC_energy_2_11_1',
        'pghq_LTC_energy_2_11_3',
        'pghq_LTC_energy_2_11_5',
        'pghq_LTC_energy_2_11_7',
        'pghq_LTC_energy_2_11_9',
        'pghq_LTC_energy_2_11_11',
        'pghq_LTC_energy_2_11_13',
        'pghq_LTC_energy_2_11_15',
        'pghq_LTC_energy_2_11_17',
        'pghq_LTC_energy_2_11_19',
        'pghq_LTC_energy_2_11_21'
      ],
      'calculation': handlers.divideBySum
    },
    'pghq_LTC_energy_2_11_18': {
      'args': [
        'pghq_LTC_energy_2_11_17',
        'pghq_LTC_energy_2_11_1',
        'pghq_LTC_energy_2_11_3',
        'pghq_LTC_energy_2_11_5',
        'pghq_LTC_energy_2_11_7',
        'pghq_LTC_energy_2_11_9',
        'pghq_LTC_energy_2_11_11',
        'pghq_LTC_energy_2_11_13',
        'pghq_LTC_energy_2_11_15',
        'pghq_LTC_energy_2_11_17',
        'pghq_LTC_energy_2_11_19',
        'pghq_LTC_energy_2_11_21'
      ],
      'calculation': handlers.divideBySum
    },
    'pghq_LTC_energy_2_11_19': {
      'args': [
        'pghq_LTC_energy_2_8_2_3', // Units
        'pghq_LTC_energy_2_8_2_2' // Amount
      ],
      'calculation': handlers.convertBTU
    },
    'pghq_LTC_energy_2_11_20': {
      'args': [
        'pghq_LTC_energy_2_11_19',
        'pghq_LTC_energy_2_11_1',
        'pghq_LTC_energy_2_11_3',
        'pghq_LTC_energy_2_11_5',
        'pghq_LTC_energy_2_11_7',
        'pghq_LTC_energy_2_11_9',
        'pghq_LTC_energy_2_11_11',
        'pghq_LTC_energy_2_11_13',
        'pghq_LTC_energy_2_11_15',
        'pghq_LTC_energy_2_11_17',
        'pghq_LTC_energy_2_11_19',
        'pghq_LTC_energy_2_11_21'
      ],
      'calculation': handlers.divideBySum
    },
    'pghq_LTC_energy_2_11_21': {
      'args': [
        'pghq_LTC_energy_2_11_1',
        'pghq_LTC_energy_2_11_3',
        'pghq_LTC_energy_2_11_5',
        'pghq_LTC_energy_2_11_7',
        'pghq_LTC_energy_2_11_9',
        'pghq_LTC_energy_2_11_11',
        'pghq_LTC_energy_2_11_13',
        'pghq_LTC_energy_2_11_15',
        'pghq_LTC_energy_2_11_17'
      ],
      'calculation': handlers.sum
    },
    'pghq_LTC_energy_2_11_22': {
      'args': [
        'pghq_LTC_energy_2_11_2',
        'pghq_LTC_energy_2_11_4',
        'pghq_LTC_energy_2_11_6',
        'pghq_LTC_energy_2_11_8',
        'pghq_LTC_energy_2_11_10',
        'pghq_LTC_energy_2_11_12',
        'pghq_LTC_energy_2_11_14',
        'pghq_LTC_energy_2_11_16',
        'pghq_LTC_energy_2_11_18'
      ],
      'calculation': handlers.sum
    },
    'pghq_LTC_energy_2_12': {
      'args': [
        'pghq_LTC_energy_2_11_18',
        'pghq_LTC_energy_2_11_20'
      ],
      'calculation': handlers.sum
    },
    'pghq_LTC_energy_3_1_1_4': {
      'args': [
        'pghq_LTC_energy_2_11_21',
        'pghq_LTC_energy_3_1_1_2'
      ],
      'calculation': handlers.divide
    },
    'pghq_LTC_energy_3_1_1_5': {
      'args': [
        'pghq_LTC_energy_2_11_21',
        'pghq_LTC_energy_3_1_1_1'
      ],
      'calculation': handlers.divide
    },
    'pghq_LTC_energy_3_1_1_6': {
      'args': [
        'pghq_LTC_energy_3_1_1_1',
        'pghq_LTC_energy_2_7_1'
      ],
      'calculation': handlers.divide
    },
    'pghq_LTC_energy_3_1_1_7': {
      'args': [
        'pghq_LTC_energy_3_1_1_2',
        'pghq_LTC_energy_2_7_1'
      ],
      'calculation': handlers.divide
    },
    'pghq_LTC_energy_3_1_1_8': {
      'args': [
        'pghq_LTC_energy_3_1_1_3',
        'pghq_LTC_energy_2_7_1'
      ],
      'calculation': handlers.divide
    },
    'pghq_LTC_energy_3_1_1_9': {
      'args': [
        'pghq_LTC_energy_3_1_1_5',
        'pghq_LTC_energy_3_1_1_6'
      ],
      'calculation': handlers.divide
    },
    'pghq_LTC_energy_4_4_5': {
      'args': [
        'pghq_LTC_energy_4_4_4',
        'pghq_LTC_energy_4_4_3'
      ],
      'calculation': handlers.convertBTUComplex
    },
    'pghq_LTC_energy_4_4_11': {
      'args': [
        'pghq_LTC_energy_4_4_10',
        'pghq_LTC_energy_4_4_9'
      ],
      'calculation': handlers.convertBTUComplex
    },
    'pghq_LTC_energy_4_4_17': {
      'args': [
        'pghq_LTC_energy_4_4_16',
        'pghq_LTC_energy_4_4_15'
      ],
      'calculation': handlers.convertBTUComplex
    },
    'pghq_LTC_energy_4_4_23': {
      'args': [
        'pghq_LTC_energy_4_4_22',
        'pghq_LTC_energy_4_4_21'
      ],
      'calculation': handlers.convertBTUComplex
    },
    'pghq_LTC_energy_4_4_29': {
      'args': [
        'pghq_LTC_energy_4_4_28',
        'pghq_LTC_energy_4_4_27'
      ],
      'calculation': handlers.convertBTUComplex
    },
    'pghq_LTC_energy_4_4_31': {
      'args': [
        'pghq_LTC_energy_4_4_3',
        'pghq_LTC_energy_4_4_9',
        'pghq_LTC_energy_4_4_15',
        'pghq_LTC_energy_4_4_21',
        'pghq_LTC_energy_4_4_27'
      ],
      'calculation': handlers.sum
    },
    'pghq_LTC_energy_4_4_32': {
      'args': [
        'pghq_LTC_energy_4_4_5',
        'pghq_LTC_energy_4_4_11',
        'pghq_LTC_energy_4_4_17',
        'pghq_LTC_energy_4_4_23',
        'pghq_LTC_energy_4_4_29'
      ],
      'calculation': handlers.sum
    },
    'pghq_LTC_energy_4_4_33': {
      'args': [
        'pghq_LTC_energy_4_4_6',
        'pghq_LTC_energy_4_4_12',
        'pghq_LTC_energy_4_4_18',
        'pghq_LTC_energy_4_4_24',
        'pghq_LTC_energy_4_4_30'
      ],
      'calculation': handlers.sum
    },

    //
    // LTC Water formulas
    //
    'pghq_LTC_water_1_7': {
      'args': [
        'pghq_LTC_water_1_5_1_14',
        'pghq_LTC_water_1_5_1_13',
        'pghq_LTC_water_1_5_1_1'
      ],
      'calculation': handlers.convertGallonsAndDivide
    },
    'pghq_LTC_water_1_8': {
      'args': [
        'pghq_LTC_water_1_5_1_14',
        'pghq_LTC_water_1_5_1_13',
        'pghq_LTC_water_1_8_0'
      ],
      'calculation': handlers.convertGallonsAndDivide
    },
    'pghq_LTC_water_1_9': {
      'args': [
        'pghq_LTC_water_1_5_1_14',
        'pghq_LTC_water_1_5_1_13',
        'pghq_LTC_water_1_9_0'
      ],
      'calculation': handlers.convertGallonsAndDivide
    },
    'pghq_LTC_water_1_12': {
      'args': [
        'pghq_LTC_water_1_5_1_14',
        'pghq_LTC_water_1_5_1_13',
        'pghq_LTC_water_1_5_1_7'
      ],
      'calculation': handlers.convertGallonsAndDivide
    },
    'pghq_LTC_water_2_1tB_3': {
      'args': [
        'pghq_LTC_water_2_1tB_2',
        'pghq_LTC_water_2_1tB_1',
        'pghq_LTC_water_2_1tB_7'
      ],
      'calculation': handlers.convertGallonsAndDivide
    },
    'pghq_LTC_water_2_1tB_6': {
      'args': [
        'pghq_LTC_water_2_1tB_5',
        'pghq_LTC_water_2_1tB_4',
        'pghq_LTC_water_2_1tB_7'
      ],
      'calculation': handlers.convertGallonsAndDivide
    },
    'pghq_LTC_water_2_1tB_7': {
      'args': [
        'pghq_LTC_water_2_1tB_1',
        'pghq_LTC_water_2_1tB_4'
      ],
      'calculation': handlers.sum
    },
    'pghq_LTC_water_3_1tE_21': {
      'args': [
        'pghq_LTC_water_3_1tE_3',
        'pghq_LTC_water_3_1tE_7',
        'pghq_LTC_water_3_1tE_11',
        'pghq_LTC_water_3_1tE_15',
        'pghq_LTC_water_3_1tE_19'
      ],
      'calculation': handlers.sum
    },
    'pghq_LTC_water_3_1tE_22': {
      'args': [
        'pghq_LTC_water_3_1tE_4',
        'pghq_LTC_water_3_1tE_8',
        'pghq_LTC_water_3_1tE_12',
        'pghq_LTC_water_3_1tE_16',
        'pghq_LTC_water_3_1tE_20'
      ],
      'calculation': handlers.sum
    },

    //
    // LTC Climate formulas
    //
    'pghq_LTC_climate_1_5_24': {
      'args': [
        'pghq_LTC_climate_1_5_1',
        'pghq_LTC_climate_1_5_2',
        'pghq_LTC_climate_1_5_3',
        'pghq_LTC_climate_1_5_4',
        'pghq_LTC_climate_1_5_5',
        'pghq_LTC_climate_1_5_6',
        'pghq_LTC_climate_1_5_7',
        'pghq_LTC_climate_1_5_8',
        'pghq_LTC_climate_1_5_9',
        'pghq_LTC_climate_1_5_10',
        'pghq_LTC_climate_1_5_11',
        'pghq_LTC_climate_1_5_12',
        'pghq_LTC_climate_1_5_13',
        'pghq_LTC_climate_1_5_15',
        'pghq_LTC_climate_1_5_16',
        'pghq_LTC_climate_1_5_17',
        'pghq_LTC_climate_1_5_18',
        'pghq_LTC_climate_1_5_19',
        'pghq_LTC_climate_1_5_20',
        'pghq_LTC_climate_1_5_21',
        'pghq_LTC_climate_1_5_22',
        'pghq_LTC_climate_1_5_23'
      ],
      'calculation': handlers.sum
    },
    'pghq_LTC_climate_3_2_6_21': {
      'args': [
        'pghq_LTC_climate_3_2_6_3',
        'pghq_LTC_climate_3_2_6_7',
        'pghq_LTC_climate_3_2_6_11',
        'pghq_LTC_climate_3_2_6_15',
        'pghq_LTC_climate_3_2_6_19'
      ],
      'calculation': handlers.sum
    },
    'pghq_LTC_climate_3_2_6_22': {
      'args': [
        'pghq_LTC_climate_3_2_6_4',
        'pghq_LTC_climate_3_2_6_8',
        'pghq_LTC_climate_3_2_6_12',
        'pghq_LTC_climate_3_2_6_16',
        'pghq_LTC_climate_3_2_6_20'
      ],
      'calculation': handlers.sum
    },

    //
    // LTC Green Building formulas
    //
    'pghq_LTC_greenbuilding_4_2_tC_3': {
      'args': [
        'pghq_LTC_greenbuilding_4_2_tC_1',
        'pghq_LTC_greenbuilding_4_2_tC_2'
      ],
      'calculation': handlers.divide
    },
	  'pghq_LTC_greenbuilding_4_2_tC_6': {
      'args': [
        'pghq_LTC_greenbuilding_4_2_tC_4',
        'pghq_LTC_greenbuilding_4_2_tC_5'
      ],
      'calculation': handlers.divide
    },
    'pghq_LTC_greenbuilding_4_2_tC_7': {
      'args': [
        'pghq_LTC_greenbuilding_4_2_tC_1',
        'pghq_LTC_greenbuilding_4_2_tC_4'
      ],
      'calculation': handlers.sum
    },
    'pghq_LTC_greenbuilding_4_2_tC_8': {
      'args': [
        'pghq_LTC_greenbuilding_4_2_tC_2',
        'pghq_LTC_greenbuilding_4_2_tC_5'
      ],
      'calculation': handlers.sum
    },

    //
    // LTC Appendix A formulas
    //
    'pghq_LTC_appendixa_1_8t_2': {
      'args': [
        'pghq_LTC_appendixa_1_7_1t_2',
        'pghq_LTC_appendixa_1_7_2t_3',
        'pghq_LTC_appendixa_1_7_3t_2',
        'pghq_LTC_appendixa_1_7_4t_2',
        'pghq_LTC_appendixa_1_7_5t_2',
        'pghq_LTC_appendixa_1_7_6t_2',
        'pghq_LTC_appendixa_1_7_7t_3',
        'pghq_LTC_appendixa_1_7_8t_3',
        'pghq_LTC_appendixa_1_7_9t_2',
        'pghq_LTC_appendixa_1_7_10t_2',
        'pghq_LTC_appendixa_1_7_11t_2',
        'pghq_LTC_appendixa_1_7_12t_3',
        'pghq_LTC_appendixa_1_7_13t_3',
        'pghq_LTC_appendixa_1_7_14t_3',
        'pghq_LTC_appendixa_1_7_15t_2',
        'pghq_LTC_appendixa_1_7_16t_2',
        'pghq_LTC_appendixa_1_7_17t_2',
        'pghq_LTC_appendixa_1_7_18t_2',
        'pghq_LTC_appendixa_1_7_19t_2',
        'pghq_LTC_appendixa_1_7_20t_2',
        'pghq_LTC_appendixa_1_7_21t_2',
        'pghq_LTC_appendixa_1_7_22t_2',
        'pghq_LTC_appendixa_1_7_23t_2',
        'pghq_LTC_appendixa_1_7_24t_2',
        'pghq_LTC_appendixa_1_7_25t_2',
        'pghq_LTC_appendixa_1_7_26t_2',
        'pghq_LTC_appendixa_1_7_27t_2',
        'pghq_LTC_appendixa_1_7_28t_2',
        'pghq_LTC_appendixa_1_7_29t_2',
        'pghq_LTC_appendixa_1_7_30t_3',
        'pghq_LTC_appendixa_1_7_31t_3'
      ],
      'calculation': handlers.sum
    }
  };

})(Drupal);