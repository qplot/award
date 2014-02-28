(function(Drupal) {
  'use strict';

  Drupal.settings.pghForm = {};

  //
  // This implementation ensures that values match across browsers.
  // http://stackoverflow.com/questions/2221167/javascript-formatting-a-rounded-number-to-n-decimals/2909252#2909252
  // http://www.codingforums.com/showthread.php?t=102421
  //
  var toFixed = function(val, prec) {
    var precision = prec || 0,
    neg = value < 0,
    power = Math.pow(10, precision),
    value = Math.round(val * power),
    integral = String((neg ? Math.ceil : Math.floor)(value / power)),
    fraction = String((neg ? -value : value) % power),
    padding = new Array(Math.max(precision - fraction.length, 0) + 1).join('0');

    return precision ? integral + '.' +  padding + fraction : integral;
  };

  var handlers = {
    //
    // Takes one or more sets of numbers as arguments and returns their sum.
    //
    sum: function () {
      var i;
      var sum = 0;
      for (i = 0; i < arguments.length; i += 1) {
      	if (!isNaN(arguments[i])) {
        	sum += arguments[i];
        }
      }
      return sum;
    },

    //
    // Divides the first argument by the second. Returns 0 if the second argument is 0.
    //
    divide: function (a, b) {
      if (isNaN(a)){
      	return 0;
      } else if (isNaN(b)){
      	return 0;
      } else if(b === 0) {
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
      	if (!isNaN(arguments[i])) {
        	sum += arguments[i];
        }
      }

      if (sum === 0) {
        return 0;
      } else if (isNaN(numerator)) {
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
      if (isNaN(amount)){
      	return 0;
      } else if (units == 'MWh') {
        return amount * 3413;
      } else if (units == 'kWh') {
        return amount * 3.413;
      } else {
      	return 0;
      }
    },

    //
    // Converts a specified amount of energy from the specified units to BTUs.
    //
    convertBTU: function (units, amount) {

      if (isNaN(amount)){
      	return 0;
      }

			switch (units) {
        case 'kWh':
          return amount * 3.413;
        case 'MWh':
          return amount * 3413;
        case 'CCF':
          return amount * 103;
        case 'MCF':
          return amount * 1030;
        case 'Therms':
          return amount * 100;
        case 'Cubic Meters':
          return amount * 36.4;
        default:
          return 0;
      }
    },

    //
    // Converts a specified amount of fuel from the specified units to BTUs.
    // Supports a wide range of units.
    //
    convertBTUComplex: function (units, amount) {

      if (isNaN(amount)){
      	return 0;
      }

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

         case 'Oil #6 Diesel: Liter':
          return amount * 40.7;

        default:
          return 0;
      }
    },

    //
    // Converts a specified amount of water from the specified units into into gallons.
    //
    convertGallons: function (units, amount) {

      var converted = 0;

      if (isNaN(amount)){
      	return 0;
      }

      switch (units) {
        case 'Hundred Cubic Feet':
          converted = amount * 748;
          break;

        case 'Cubic Feet':
          converted = amount * 7.48;
          break;

        case 'Gallons':
          converted = amount;
          break;

        default:
          converted = 0;
          break;
      }

      return converted;
    },

    //
    // Converts a specified amount of water from the specified units into into gallons and divides by divisor.
    //
    convertGallonsAndDivide: function (units, amount, divisor) {
      if (divisor === 0) {
        return 0;
      }

      if (isNaN(amount)){
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

        case 'Gallons':
          converted = amount;
          break;

        default:
          converted = 0;
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

      if (isNaN(amount)){
      	return 0;
      }

      var converted = 0;
      switch (units) {
        case 'square feet':
          converted = amount;
          break;

        case 'acres':
          converted = amount * 43560;
          break;

        default:
          converted = 0;
          break;
      }

      return converted / divisor;
    },

    //
    // Converts a specified amount of fuel oil from the specified units into BTUs.
    //
    convertFuelOil: function (units, amount) {
      if (isNaN(amount)){
      	return 0;
      } else if (units == 'U.S. Gallons') {
        return amount * 139;
      } else if (units == 'Imp. Gallons') {
        return amount * 167;
      } else if (units == 'Liters') {
        return amount * 36.7;
      } else {
      	return 0;
      }
    },

    //
    // Converts a specified amount of diesel from the specified units into BTUs.
    //
    convertDiesel: function (units, amount) {
      if (isNaN(amount)){
      	return 0;
      } else if (units == 'U.S. Gallons') {
        return amount * 154;
      } else if (units == 'Imp. Gallons') {
        return amount * 185;
      } else if (units == 'Liters') {
        return amount * 40.7;
      } else {
      	return 0;
      }
    },

    //
    // Converts a specified amount of steam from the specified units into BTUs.
    //
    convertSteam: function (units, amount) {
      if (isNaN(amount)){
      	return 0;
      } else if (units === 'Btu') {
        return amount;
      } else if (units === '1000 pounds') {
        return amount * 1000;
      } else if (units === 'Therms') {
        return amount * 100;
      } else {
      	return 0;
      }
    },

    //
    // Converts a specified amount of natural gas from the specified units into BTUs.
    //
    convertNaturalGas: function (units, amount) {
      if (isNaN(amount)){
      	return 0;
      } else if (units == 'CCF') {
        return amount * 103;
      } else if (units == 'MCF') {
        return amount * 1030;
      } else if (units == 'Therms') {
        return amount * 100;
      } else if (units == 'Cubic Meters') {
        return amount * 36.4;
      } else if (units == 'Gigajoules') {
        return amount * 947.8;
      } else {
      	return 0;
      }
    },

    //
    // Converts a specified amount of water from the specified units into BTUs.
    //
    convertWater: function (units, amount) {
      if (isNaN(amount)){
      	return 0;
      } else if (units == 'Btu') {
        return amount;
      } else if (units == 'Ton-Hour') {
        return amount * 12;
      } else {
      	return 0;
      }
    }
  };

  // Map arguments and handlers for specific questions.
  Drupal.settings.pghForm.formulas = {

    //
    // PFC Waste formulas
    //
    'pghq_PFC_waste_4_8_tB_13': {
      'args': [
        'pghq_PFC_waste_4_8_tB_1',
        'pghq_PFC_waste_4_8_tB_7'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 2);
      }
    },
    'pghq_PFC_waste_4_8_tB_14': {
      'args': [
        'pghq_PFC_waste_4_8_tB_2',
        'pghq_PFC_waste_4_8_tB_8'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 2);
      }
    },
//     'pghq_PFC_waste_4_8_tB_15': {
//       'args': [
//         'pghq_PFC_waste_4_8_tB_3',
//         'pghq_PFC_waste_4_8_tB_9'
//       ],
//       'calculation': function() {
// 	      return toFixed(handlers.sum.apply(this, arguments), 2);
//       }
//     },
    'pghq_PFC_waste_4_8_tB_16': {
      'args': [
        'pghq_PFC_waste_4_8_tB_4',
        'pghq_PFC_waste_4_8_tB_10'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 0);
      }
    },
    'pghq_PFC_waste_4_8_tB_17': {
      'args': [
        'pghq_PFC_waste_4_8_tB_5',
        'pghq_PFC_waste_4_8_tB_11'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 0);
      }
    },
//     'pghq_PFC_waste_4_8_tB_18': {
//       'args': [
//         'pghq_PFC_waste_4_8_tB_6',
//         'pghq_PFC_waste_4_8_tB_12'
//       ],
//       'calculation': function() {
// 	      return toFixed(handlers.sum.apply(this, arguments), 0);
//       }
//     },
    'pghq_PFC_waste_6_2_20': {
      'args': [
        'pghq_PFC_waste_6_2_1',
        'pghq_PFC_waste_6_2_8',
        'pghq_PFC_waste_6_2_14'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 2);
      }
    },
    'pghq_PFC_waste_6_2_21': {
      'args': [
        'pghq_PFC_waste_6_2_2',
        'pghq_PFC_waste_6_2_9',
        'pghq_PFC_waste_6_2_15'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 2);
      }
    },
    'pghq_PFC_waste_6_2_22': {
      'args': [
        'pghq_PFC_waste_6_2_3',
        'pghq_PFC_waste_6_2_10',
        'pghq_PFC_waste_6_2_16'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 2);
      }
    },
    'pghq_PFC_waste_6_2_23': {
      'args': [
        'pghq_PFC_waste_6_2_4',
        'pghq_PFC_waste_6_2_11',
        'pghq_PFC_waste_6_2_17'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 0);
      }
    },
    'pghq_PFC_waste_6_2_24': {
      'args': [
        'pghq_PFC_waste_6_2_5',
        'pghq_PFC_waste_6_2_12',
        'pghq_PFC_waste_6_2_18'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 0);
      }
    },
    'pghq_PFC_waste_6_2_25': {
      'args': [
        'pghq_PFC_waste_6_2_6',
        'pghq_PFC_waste_6_2_13',
        'pghq_PFC_waste_6_2_19'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 0);
      }
    },
    'pghq_PFC_waste_6_3_5': {
      'args': [
        'pghq_PFC_waste_6_2_22',
        'pghq_PFC_waste_6_3_5_0'
      ],
      'calculation': function (a, b) {
        return toFixed((a * 2000 / b / 365), 2);
      }
    },
    'pghq_PFC_waste_8_10_1tE_13': {
      'args': [
        'pghq_PFC_waste_8_10_1tE_1',
        'pghq_PFC_waste_8_10_1tE_7'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 2);
      }
    },
    'pghq_PFC_waste_8_10_1tE_14': {
      'args': [
        'pghq_PFC_waste_8_10_1tE_2',
        'pghq_PFC_waste_8_10_1tE_8'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 2);
      }
    },
    'pghq_PFC_waste_8_10_1tE_15': {
      'args': [
        'pghq_PFC_waste_8_10_1tE_3',
        'pghq_PFC_waste_8_10_1tE_9'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 2);
      }
    },
    'pghq_PFC_waste_8_10_1tE_16': {
      'args': [
        'pghq_PFC_waste_8_10_1tE_4',
        'pghq_PFC_waste_8_10_1tE_10'
      ],
      'calculation': handlers.sum
    },
    'pghq_PFC_waste_8_10_1tE_17': {
      'args': [
        'pghq_PFC_waste_8_10_1tE_5',
        'pghq_PFC_waste_8_10_1tE_11'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 0);
      }
    },
    'pghq_PFC_waste_8_10_1tE_18': {
      'args': [
        'pghq_PFC_waste_8_10_1tE_6',
        'pghq_PFC_waste_8_10_1tE_12'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 0);
      }
    },
    'pghq_PFC_waste_9_29_1tF_14': {
      'args': [
        'pghq_PFC_waste_9_29_1tF_2',
        'pghq_PFC_waste_9_29_1tF_5',
        'pghq_PFC_waste_9_29_1tF_8',
        'pghq_PFC_waste_9_29_1tF_11'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 0);
      }
    },
    'pghq_PFC_waste_9_29_1tF_15': {
      'args': [
        'pghq_PFC_waste_9_29_1tF_3',
        'pghq_PFC_waste_9_29_1tF_6',
        'pghq_PFC_waste_9_29_1tF_9',
        'pghq_PFC_waste_9_29_1tF_12'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 0);
      }
    },
    'pghq_PFC_waste_10_1_tG_1': {
      'args': [
        'pghq_PFC_waste_2_3_tA_2',
        'pghq_PFC_waste_4_8_tB_13',
        'pghq_PFC_waste_6_2_20',
        'pghq_PFC_waste_8_10_1tE_13'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 2);
      }
    },
    'pghq_PFC_waste_10_1_tG_2': {
      'args': [
        'pghq_PFC_waste_2_3_tA_3',
        'pghq_PFC_waste_4_8_tB_14',
        'pghq_PFC_waste_6_2_21',
        'pghq_PFC_waste_8_10_1tE_14'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 2);
      }
    },
    'pghq_PFC_waste_10_1_tG_3': {
      'args': [
        'pghq_PFC_waste_2_3_tA_4',
        'pghq_PFC_waste_4_8_tB_15',
        'pghq_PFC_waste_6_2_22',
        'pghq_PFC_waste_8_10_1tE_15'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 2);
      }
    },
    'pghq_PFC_waste_10_1_tG_4': {
      'args': [
        'pghq_PFC_waste_2_3_tA_5',
        'pghq_PFC_waste_4_8_tB_16',
        'pghq_PFC_waste_6_2_23',
        'pghq_PFC_waste_8_10_1tE_16'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 0);
      }
    },
    'pghq_PFC_waste_10_1_tG_5': {
      'args': [
        'pghq_PFC_waste_2_3_tA_6',
        'pghq_PFC_waste_4_8_tB_17',
        'pghq_PFC_waste_6_2_24',
        'pghq_PFC_waste_8_10_1tE_17'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 0);
      }
    },
    'pghq_PFC_waste_10_1_tG_6': {
      'args': [
        'pghq_PFC_waste_2_3_tA_7',
        'pghq_PFC_waste_4_8_tB_18',
        'pghq_PFC_waste_6_2_25',
        'pghq_PFC_waste_8_10_1tE_18'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 0);
      }
    },
    'pghq_PFC_waste_10_1_tH_1': {
      'args': [
        'pghq_PFC_waste_2_3_tA_2',
        'pghq_PFC_waste_10_1_tG_1'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_PFC_waste_10_1_tH_2': {
      'args': [
        'pghq_PFC_waste_2_3_tA_3',
        'pghq_PFC_waste_10_1_tG_2'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_PFC_waste_10_1_tH_3': {
      'args': [
        'pghq_PFC_waste_2_3_tA_4',
        'pghq_PFC_waste_10_1_tG_3'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_PFC_waste_10_1_tH_4': {
      'args': [
        'pghq_PFC_waste_2_3_tA_5',
        'pghq_PFC_waste_10_1_tG_4'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_PFC_waste_10_1_tH_5': {
      'args': [
        'pghq_PFC_waste_2_3_tA_6',
        'pghq_PFC_waste_10_1_tG_5'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_PFC_waste_10_1_tH_6': {
      'args': [
        'pghq_PFC_waste_2_3_tA_7',
        'pghq_PFC_waste_10_1_tG_6'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_PFC_waste_10_1_tH_7': {
      'args': [
        'pghq_PFC_waste_4_8_tB_13',
        'pghq_PFC_waste_10_1_tG_1'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_PFC_waste_10_1_tH_8': {
      'args': [
        'pghq_PFC_waste_4_8_tB_14',
        'pghq_PFC_waste_10_1_tG_2'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_PFC_waste_10_1_tH_9': {
      'args': [
        'pghq_PFC_waste_4_8_tB_15',
        'pghq_PFC_waste_10_1_tG_3'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_PFC_waste_10_1_tH_10': {
      'args': [
        'pghq_PFC_waste_4_8_tB_16',
        'pghq_PFC_waste_10_1_tG_4'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_PFC_waste_10_1_tH_11': {
      'args': [
        'pghq_PFC_waste_4_8_tB_17',
        'pghq_PFC_waste_10_1_tG_5'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_PFC_waste_10_1_tH_12': {
      'args': [
        'pghq_PFC_waste_4_8_tB_18',
        'pghq_PFC_waste_10_1_tG_6'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_PFC_waste_10_1_tH_13': {
      'args': [
        'pghq_PFC_waste_6_2_20',
        'pghq_PFC_waste_10_1_tG_1'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_PFC_waste_10_1_tH_14': {
      'args': [
        'pghq_PFC_waste_6_2_21',
        'pghq_PFC_waste_10_1_tG_2'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_PFC_waste_10_1_tH_15': {
      'args': [
        'pghq_PFC_waste_6_2_22',
        'pghq_PFC_waste_10_1_tG_3'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_PFC_waste_10_1_tH_16': {
      'args': [
        'pghq_PFC_waste_6_2_23',
        'pghq_PFC_waste_10_1_tG_4'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_PFC_waste_10_1_tH_17': {
      'args': [
        'pghq_PFC_waste_6_2_24',
        'pghq_PFC_waste_10_1_tG_5'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_PFC_waste_10_1_tH_18': {
      'args': [
        'pghq_PFC_waste_6_2_25',
        'pghq_PFC_waste_10_1_tG_6'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_PFC_waste_10_1_tH_19': {
      'args': [
        'pghq_PFC_waste_8_10_1tE_13',
        'pghq_PFC_waste_10_1_tG_1'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_PFC_waste_10_1_tH_20': {
      'args': [
        'pghq_PFC_waste_8_10_1tE_14',
        'pghq_PFC_waste_10_1_tG_2'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_PFC_waste_10_1_tH_21': {
      'args': [
        'pghq_PFC_waste_8_10_1tE_15',
        'pghq_PFC_waste_10_1_tG_3'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_PFC_waste_10_1_tH_22': {
      'args': [
        'pghq_PFC_waste_8_10_1tE_16',
        'pghq_PFC_waste_10_1_tG_4'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_PFC_waste_10_1_tH_23': {
      'args': [
        'pghq_PFC_waste_8_10_1tE_17',
        'pghq_PFC_waste_10_1_tG_5'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_PFC_waste_10_1_tH_24': {
      'args': [
        'pghq_PFC_waste_8_10_1tE_18',
        'pghq_PFC_waste_10_1_tG_6'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_PFC_waste_9_29_1tF_13': {
      'args': [
        'pghq_PFC_waste_9_29_1tF_1',
        'pghq_PFC_waste_9_29_1tF_4',
        'pghq_PFC_waste_9_29_1tF_7',
        'pghq_PFC_waste_9_29_1tF_10'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 2);
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
      'calculation': function() {
	      return toFixed(handlers.divideBySum.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_PFC_chemicals_2_4_2_6': {
      'args': [
        'pghq_PFC_chemicals_2_4_2_4',
        'pghq_PFC_chemicals_2_4_2_4',
        'pghq_PFC_chemicals_2_4_2_5'
      ],
      'calculation': function() {
	      return toFixed(handlers.divideBySum.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_PFC_chemicals_2_4_2_9': {
      'args': [
        'pghq_PFC_chemicals_2_4_2_7',
        'pghq_PFC_chemicals_2_4_2_7',
        'pghq_PFC_chemicals_2_4_2_8'
      ],
      'calculation': function() {
	      return toFixed(handlers.divideBySum.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_PFC_chemicals_2_4_2_12': {
      'args': [
        'pghq_PFC_chemicals_2_4_2_10',
        'pghq_PFC_chemicals_2_4_2_10',
        'pghq_PFC_chemicals_2_4_2_11'
      ],
      'calculation': function() {
	      return toFixed(handlers.divideBySum.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_PFC_chemicals_2_4_2_15': {
      'args': [
        'pghq_PFC_chemicals_2_4_2_13',
        'pghq_PFC_chemicals_2_4_2_13',
        'pghq_PFC_chemicals_2_4_2_14'
      ],
      'calculation': function() {
	      return toFixed(handlers.divideBySum.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_PFC_chemicals_2_4_2_16': {
      'args': [
        'pghq_PFC_chemicals_2_4_2_1',
        'pghq_PFC_chemicals_2_4_2_4',
        'pghq_PFC_chemicals_2_4_2_7',
        'pghq_PFC_chemicals_2_4_2_10',
        'pghq_PFC_chemicals_2_4_2_13'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 1);
      }
    },
    'pghq_PFC_chemicals_2_4_2_17': {
      'args': [
        'pghq_PFC_chemicals_2_4_2_2',
        'pghq_PFC_chemicals_2_4_2_5',
        'pghq_PFC_chemicals_2_4_2_8',
        'pghq_PFC_chemicals_2_4_2_11',
        'pghq_PFC_chemicals_2_4_2_14'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 1);
      }
    },
    'pghq_PFC_chemicals_2_4_2_18': {
      'args': [
        'pghq_PFC_chemicals_2_4_2_16',
        'pghq_PFC_chemicals_2_4_2_16',
        'pghq_PFC_chemicals_2_4_2_17'
      ],
      'calculation': function() {
	      return toFixed(handlers.divideBySum.apply(this, arguments) * 100, 1);
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
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_PFC_greeningtheOR_2_12_2_tF_3': {
      'args': [
        'pghq_PFC_greeningtheOR_2_12_2_tF_2',
        'pghq_PFC_greeningtheOR_2_12_2_tF_1'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_PFC_greeningtheOR_3_4': {
      'args': [
        'pghq_PFC_greeningtheOR_3_3_1',
        'pghq_PFC_greeningtheOR_3_4_0'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
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
        } else if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d)){
      		return 0;
      	} else {
          return toFixed((1- ((c / d) / (a / b))) * 100, 1);
        }
      }
    },
    'pghq_PFC_food_2_1_4': {
      'args': [
        'pghq_PFC_food_2_1_2',
        'pghq_PFC_food_2_1_3'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_PFC_food_3_1_4': {
      'args': [
        'pghq_PFC_food_3_1_2',
        'pghq_PFC_food_3_1_3'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },

    //
    // PFC Energy
    //
    'pghq_PFC_energy_2_11_1': {
      'args': [
        'pghq_PFC_energy_2_7_5',
        'pghq_PFC_energy_2_7_4'
      ],
      'calculation': function() {
	      return toFixed(handlers.convertBTUSimple.apply(this, arguments), 0);
      }
    },
    'pghq_PFC_energy_2_11_2': {
      'args': [
        'pghq_PFC_energy_2_11_1',
        'pghq_PFC_energy_2_11_21'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_PFC_energy_2_11_3': {
      'args': [
        'pghq_PFC_energy_2_7_9',
        'pghq_PFC_energy_2_7_8'
      ],
      'calculation': function() {
	      return toFixed(handlers.convertNaturalGas.apply(this, arguments), 0);
      }
    },
    'pghq_PFC_energy_2_11_4': {
      'args': [
        'pghq_PFC_energy_2_11_3',
        'pghq_PFC_energy_2_11_21'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_PFC_energy_2_11_5': {
      'args': [
        'pghq_PFC_energy_2_7_13',
        'pghq_PFC_energy_2_7_12'
      ],
      'calculation': function() {
	      return toFixed(handlers.convertFuelOil.apply(this, arguments), 0);
      }
    },
    'pghq_PFC_energy_2_11_6': {
      'args': [
        'pghq_PFC_energy_2_11_5',
        'pghq_PFC_energy_2_11_21'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_PFC_energy_2_11_7': {
      'args': [
        'pghq_PFC_energy_2_7_17',
        'pghq_PFC_energy_2_7_16'
      ],
      'calculation': function() {
	      return toFixed(handlers.convertSteam.apply(this, arguments), 0);
      }
    },
    'pghq_PFC_energy_2_11_8': {
      'args': [
        'pghq_PFC_energy_2_11_7',
        'pghq_PFC_energy_2_11_21'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_PFC_energy_2_11_9': {
      'args': [
        'pghq_PFC_energy_2_7_21',
        'pghq_PFC_energy_2_7_20'
      ],
      'calculation': function() {
	      return toFixed(handlers.convertWater.apply(this, arguments), 0);
      }
    },
    'pghq_PFC_energy_2_11_10': {
      'args': [
        'pghq_PFC_energy_2_11_9',
        'pghq_PFC_energy_2_11_21'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_PFC_energy_2_11_11': {
      'args': [
        'pghq_PFC_energy_2_7_25',
        'pghq_PFC_energy_2_7_24'
      ],
      'calculation': function() {
	      return toFixed(handlers.convertWater.apply(this, arguments), 0);
      }
    },
    'pghq_PFC_energy_2_11_12': {
      'args': [
        'pghq_PFC_energy_2_11_11',
        'pghq_PFC_energy_2_11_21'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_PFC_energy_2_11_13': {
      'args': [
        'pghq_PFC_energy_2_7_29',
        'pghq_PFC_energy_2_7_28'
      ],
      'calculation': function() {
	      return toFixed(handlers.convertDiesel.apply(this, arguments), 0);
      }
    },
    'pghq_PFC_energy_2_11_14': {
      'args': [
        'pghq_PFC_energy_2_11_13',
        'pghq_PFC_energy_2_11_21'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
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
				return toFixed(x + y + z, 0);
			}
		},
    'pghq_PFC_energy_2_11_18': {
      'args': [
        'pghq_PFC_energy_2_11_17',
        'pghq_PFC_energy_2_11_21'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_PFC_energy_2_11_19': {
      'args': [
        'pghq_PFC_energy_2_8_2_18', // Units
        'pghq_PFC_energy_2_8_2_17' // Amount
      ],
      'calculation': function() {
	      return toFixed(handlers.convertBTU.apply(this, arguments), 0);
      }
    },
    'pghq_PFC_energy_2_11_20': {
      'args': [
        'pghq_PFC_energy_2_11_19',
        'pghq_PFC_energy_2_11_21'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_PFC_energy_2_11_21': {
      'args': [
        'pghq_PFC_energy_2_11_1', // amount 1
        'pghq_PFC_energy_2_11_3', // amount 2
        'pghq_PFC_energy_2_11_5', // amount 3
        'pghq_PFC_energy_2_11_7', // amount 4
        'pghq_PFC_energy_2_11_9', // amount 5
        'pghq_PFC_energy_2_11_11', // amount 6
        'pghq_PFC_energy_2_11_13', // amount 7
        'pghq_PFC_energy_2_11_17', // amount 8
        'pghq_PFC_energy_2_11_19' // amount 9
      ],
      'calculation': function (amount1, amount2, amount3, amount4, amount5, amount6, amount7, amount8, amount9) {
 
        var values = [
          amount1,
          amount2,
          amount3,
          amount4,
          amount5,
          amount6,
          amount7,
          amount8,
          amount9
        ];
 
        var sum = 0;
        for (var index = 0; index < values.length; index++) {
          if (!isNaN(values[index])) {
            sum += values[index];
          }
        }
 
      	return toFixed(sum, 0);
      }
    },
    'pghq_PFC_energy_2_11_22': {
      'args': [
        'pghq_PFC_energy_2_11_2', // amount 1
        'pghq_PFC_energy_2_11_4', // amount 2
        'pghq_PFC_energy_2_11_6', // amount 3
        'pghq_PFC_energy_2_11_8', // amount 4
        'pghq_PFC_energy_2_11_10', // amount 5
        'pghq_PFC_energy_2_11_12', // amount 6
        'pghq_PFC_energy_2_11_14', // amount 7
        'pghq_PFC_energy_2_11_18', // amount 8
        'pghq_PFC_energy_2_11_20' // amount 9
      ],
      'calculation': function (amount1, amount2, amount3, amount4, amount5, amount6, amount7, amount8, amount9) {
 
        var values = [
          amount1,
          amount2,
          amount3,
          amount4,
          amount5,
          amount6,
          amount7,
          amount8,
          amount9
        ];
 
        var sum = 0;
        for (var index = 0; index < values.length; index++) {
          if (!isNaN(values[index])) {
            sum += values[index];
          }
        }
 
      	return toFixed(sum, 1);
      }
    },
    'pghq_PFC_energy_2_12': {
      'args': [
        'pghq_PFC_energy_2_11_18',
        'pghq_PFC_energy_2_11_20'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 1);
      }
    },
    'pghq_PFC_energy_3_1_1_1': {
      'args': [
        'pghq_PFC_energy_2_11_1', // amount 1
        'pghq_PFC_energy_2_11_3', // amount 2
        'pghq_PFC_energy_2_11_5', // amount 3
        'pghq_PFC_energy_2_11_7', // amount 4
        'pghq_PFC_energy_2_11_9', // amount 5
        'pghq_PFC_energy_2_11_11', // amount 6
        'pghq_PFC_energy_2_11_13', // amount 7
        'pghq_PFC_energy_2_11_17', // amount 8
        'pghq_PFC_energy_2_11_19' // amount 9
      ],
      'calculation': function (amount1, amount2, amount3, amount4, amount5, amount6, amount7, amount8, amount9) {
 
        var values = [
          amount1,
          amount2,
          amount3,
          amount4,
          amount5,
          amount6,
          amount7,
          amount8,
          amount9
        ];
 
        var sum = 0;
        for (var index = 0; index < values.length; index++) {
          if (!isNaN(values[index])) {
            sum += values[index];
          }
        }
 
      	return toFixed(sum, 0);
      }
    },   
    'pghq_PFC_energy_3_1_1_2': {
      'args': [
        'pghq_PFC_energy_2_7_5', // Electricity Units
        'pghq_PFC_energy_2_7_6', // Electricity Amount
        'pghq_PFC_energy_2_7_9', // Natural Gas Units
        'pghq_PFC_energy_2_7_10', // Natural Gas Amount
        'pghq_PFC_energy_2_7_13', // Fuel Oil Units
        'pghq_PFC_energy_2_7_14', // Fuel Oil Amount
        'pghq_PFC_energy_2_7_17', // Steam Units
        'pghq_PFC_energy_2_7_18', // Steam Amount
        'pghq_PFC_energy_2_7_21', // Chilled Water Units
        'pghq_PFC_energy_2_7_22', // Chilled Water Amount
        'pghq_PFC_energy_2_7_25', // Hot Water Units
        'pghq_PFC_energy_2_7_26', // Hot Water Amount
        'pghq_PFC_energy_2_7_29', // Diesel Units
        'pghq_PFC_energy_2_7_30', // Diesel Amount
        'pghq_PFC_energy_2_8_2_3', // Renewable Energy 1 Units
        'pghq_PFC_energy_2_8_2_4', // Renewable Energy 1 Amount
        'pghq_PFC_energy_2_8_2_8', // Renewable Energy 2 Units
        'pghq_PFC_energy_2_8_2_9', // Renewable Energy 2 Amount
        'pghq_PFC_energy_2_8_2_13', // Renewable Energy 3 Units
        'pghq_PFC_energy_2_8_2_14', // Renewable Energy 3 Amount
        'pghq_PFC_energy_2_8_2_18', // Renewable Energy 4 Units
        'pghq_PFC_energy_2_8_2_19' // Renewable Energy 4 Amount
      ],
      'calculation': function (elecU, elecA, natGasU, natGasA, fuelU, fuelA, steamU, steamA, chillU, chillA, hotU, hotA, dieselU, dieselA, renew1U, renew1A, renew2U, renew2A, renew3U, renew3A, renew4U, renew4A) {

      	var elecTotal = handlers.convertBTUSimple(elecU, elecA);
      	var natGasTotal = handlers.convertNaturalGas(natGasU, natGasA);
      	var fuelTotal = handlers.convertFuelOil(fuelU, fuelA);
      	var steamTotal = handlers.convertSteam(steamU, steamA);
      	var chillTotal = handlers.convertWater(chillU, chillA);
      	var hotTotal = handlers.convertWater(hotU, hotA);
      	var dieselTotal = handlers.convertDiesel(dieselU, dieselA);
      	var renew1Total = handlers.convertBTU(renew1U, renew1A);
      	var renew2Total = handlers.convertBTU(renew2U, renew2A);
      	var renew3Total = handlers.convertBTU(renew3U, renew3A);
      	var renew4Total = handlers.convertBTU(renew4U, renew4A);
      	
        var values = [
          elecTotal, 
					natGasTotal,
					fuelTotal,
					steamTotal,
					chillTotal,
					hotTotal,
					dieselTotal,
					renew1Total,
					renew2Total,
					renew3Total,
					renew4Total
        ];
 
        var sum = 0;
        for (var index = 0; index < values.length; index++) {
          if (!isNaN(values[index])) {
            sum += values[index];
          }
        }
 
      	return toFixed(sum, 0);
      }
    },
    'pghq_PFC_energy_3_1_1_3': {
      'args': [
        'pghq_PFC_energy_2_7_5', // Electricity Units
        'pghq_PFC_energy_2_7_7', // Electricity Amount
        'pghq_PFC_energy_2_7_9', // Natural Gas Units
        'pghq_PFC_energy_2_7_11', // Natural Gas Amount
        'pghq_PFC_energy_2_7_13', // Fuel Oil Units
        'pghq_PFC_energy_2_7_15', // Fuel Oil Amount
        'pghq_PFC_energy_2_7_17', // Steam Units
        'pghq_PFC_energy_2_7_19', // Steam Amount
        'pghq_PFC_energy_2_7_21', // Chilled Water Units
        'pghq_PFC_energy_2_7_23', // Chilled Water Amount
        'pghq_PFC_energy_2_7_25', // Hot Water Units
        'pghq_PFC_energy_2_7_27', // Hot Water Amount
        'pghq_PFC_energy_2_7_29', // Diesel Units
        'pghq_PFC_energy_2_7_31', // Diesel Amount
        'pghq_PFC_energy_2_8_2_3', // Renewable Energy 1 Units
        'pghq_PFC_energy_2_8_2_5', // Renewable Energy 1 Amount
        'pghq_PFC_energy_2_8_2_8', // Renewable Energy 2 Units
        'pghq_PFC_energy_2_8_2_10', // Renewable Energy 2 Amount
        'pghq_PFC_energy_2_8_2_13', // Renewable Energy 3 Units
        'pghq_PFC_energy_2_8_2_15', // Renewable Energy 3 Amount
        'pghq_PFC_energy_2_8_2_18', // Renewable Energy 4 Units
        'pghq_PFC_energy_2_8_2_20' // Renewable Energy 4 Amount
      ],
      'calculation': function (elecU, elecA, natGasU, natGasA, fuelU, fuelA, steamU, steamA, chillU, chillA, hotU, hotA, dieselU, dieselA, renew1U, renew1A, renew2U, renew2A, renew3U, renew3A, renew4U, renew4A) {

      	var elecTotal = handlers.convertBTUSimple(elecU, elecA);
      	var natGasTotal = handlers.convertNaturalGas(natGasU, natGasA);
      	var fuelTotal = handlers.convertFuelOil(fuelU, fuelA);
      	var steamTotal = handlers.convertSteam(steamU, steamA);
      	var chillTotal = handlers.convertWater(chillU, chillA);
      	var hotTotal = handlers.convertWater(hotU, hotA);
      	var dieselTotal = handlers.convertDiesel(dieselU, dieselA);
      	var renew1Total = handlers.convertBTU(renew1U, renew1A);
      	var renew2Total = handlers.convertBTU(renew2U, renew2A);
      	var renew3Total = handlers.convertBTU(renew3U, renew3A);
      	var renew4Total = handlers.convertBTU(renew4U, renew4A);

        var values = [
          elecTotal, 
					natGasTotal,
					fuelTotal,
					steamTotal,
					chillTotal,
					hotTotal,
					dieselTotal,
					renew1Total,
					renew2Total,
					renew3Total,
					renew4Total
        ];
 
        var sum = 0;
        for (var index = 0; index < values.length; index++) {
          if (!isNaN(values[index])) {
            sum += values[index];
          }
        }
 
      	return toFixed(sum, 0);
      }
    },
    'pghq_PFC_energy_3_1_1_4': {
      'args': [
        'pghq_PFC_energy_2_11_21',
        'pghq_PFC_energy_3_1_1_2'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_PFC_energy_3_1_1_5': {
      'args': [
        'pghq_PFC_energy_2_11_21',
        'pghq_PFC_energy_3_1_1_3'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_PFC_energy_3_1_1_6': {
      'args': [
        'pghq_PFC_energy_3_1_1_1',
        'pghq_PFC_energy_2_7_1'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments), 0);
      }
    },
    'pghq_PFC_energy_3_1_1_7': {
      'args': [
        'pghq_PFC_energy_3_1_1_2',
        'pghq_PFC_energy_2_7_2'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments), 0);
      }
    },
    'pghq_PFC_energy_3_1_1_8': {
      'args': [
        'pghq_PFC_energy_3_1_1_3',
        'pghq_PFC_energy_2_7_3'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments), 0);
      }
    },
    'pghq_PFC_energy_3_1_1_9': {
      'args': [
        'pghq_PFC_energy_3_1_1_6',
        'pghq_PFC_energy_3_1_1_7'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_PFC_energy_3_1_1_10': {
      'args': [
        'pghq_PFC_energy_3_1_1_6',
        'pghq_PFC_energy_3_1_1_8'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_PFC_energy_4_4_5': {
      'args': [
        'pghq_PFC_energy_4_4_4',
        'pghq_PFC_energy_4_4_3'
      ],
      'calculation': function() {
	      return toFixed(handlers.convertBTUComplex.apply(this, arguments), 0);
      }
    },
    'pghq_PFC_energy_4_4_11': {
      'args': [
        'pghq_PFC_energy_4_4_10',
        'pghq_PFC_energy_4_4_9'
      ],
      'calculation': function() {
	      return toFixed(handlers.convertBTUComplex.apply(this, arguments), 0);
      }
    },
    'pghq_PFC_energy_4_4_17': {
      'args': [
        'pghq_PFC_energy_4_4_16',
        'pghq_PFC_energy_4_4_15'
      ],
      'calculation': function() {
	      return toFixed(handlers.convertBTUComplex.apply(this, arguments), 0);
      }
    },
    'pghq_PFC_energy_4_4_23': {
      'args': [
        'pghq_PFC_energy_4_4_22',
        'pghq_PFC_energy_4_4_21'
      ],
      'calculation': function() {
	      return toFixed(handlers.convertBTUComplex.apply(this, arguments), 0);
      }
    },
    'pghq_PFC_energy_4_4_29': {
      'args': [
        'pghq_PFC_energy_4_4_28',
        'pghq_PFC_energy_4_4_27'
      ],
      'calculation': function() {
	      return toFixed(handlers.convertBTUComplex.apply(this, arguments), 0);
      }
    },
    'pghq_PFC_energy_4_4_32': {
      'args': [
        'pghq_PFC_energy_4_4_5',
        'pghq_PFC_energy_4_4_11',
        'pghq_PFC_energy_4_4_17',
        'pghq_PFC_energy_4_4_23',
        'pghq_PFC_energy_4_4_29'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 0);
      }
    },
    'pghq_PFC_energy_4_4_33': {
      'args': [
        'pghq_PFC_energy_4_4_6',
        'pghq_PFC_energy_4_4_12',
        'pghq_PFC_energy_4_4_18',
        'pghq_PFC_energy_4_4_24',
        'pghq_PFC_energy_4_4_30'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments) * 100, 0);
      }
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
      'calculation': function() {
	      return toFixed(handlers.convertGallonsAndDivide.apply(this, arguments), 0);
      }
    },
    'pghq_PFC_water_1_8': {
      'args': [
        'pghq_PFC_water_1_5_1_14',
        'pghq_PFC_water_1_5_1_13',
        'pghq_PFC_water_1_8_0'
      ],
      'calculation': function() {
	      return toFixed(handlers.convertGallonsAndDivide.apply(this, arguments), 0);
      }
    },
    'pghq_PFC_water_1_9': {
      'args': [
        'pghq_PFC_water_1_5_1_14',
        'pghq_PFC_water_1_5_1_13',
        'pghq_PFC_water_1_9_0'
      ],
      'calculation': function() {
	      return toFixed(handlers.convertGallonsAndDivide.apply(this, arguments), 0);
      }
    },
    'pghq_PFC_water_1_11': {
      'args': [
        'pghq_PFC_water_1_5_1_14', // Units 1
        'pghq_PFC_water_1_5_1_13', // Amount 1
        'pghq_PFC_water_1_5_1_1', // Divisor 1
        'pghq_PFC_water_1_5_1_16', // Units 2
        'pghq_PFC_water_1_5_1_15', // Amount 2
        'pghq_PFC_water_1_5_1_3' // Divisor 2
      ],
      'calculation': function (a, b, c, d, e, f) {
      	return toFixed((handlers.convertGallonsAndDivide(a, b, c) / handlers.convertGallonsAndDivide(d, e, f)) * 100, 1);
      }
    },
    'pghq_PFC_water_1_12': {
      'args': [
        'pghq_PFC_water_1_5_1_14',
        'pghq_PFC_water_1_5_1_13',
        'pghq_PFC_water_1_5_1_7'
      ],
      'calculation': function() {
	      return toFixed(handlers.convertGallonsAndDivide.apply(this, arguments), 1);
      }
    },
    'pghq_PFC_water_2_1tB_3': {
      'args': [
        'pghq_PFC_water_2_1tB_1',
        'pghq_PFC_water_2_1tB_7'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_PFC_water_2_1tB_6': {
      'args': [
        'pghq_PFC_water_2_1tB_4',
        'pghq_PFC_water_2_1tB_7'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_PFC_water_2_1tB_7': {
      'args': [
        'pghq_PFC_water_2_1tB_1',
        'pghq_PFC_water_2_1tB_4'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 2);
      }
    },
    'pghq_PFC_water_2_3_tC_4': {
      'args': [
        'pghq_PFC_water_2_3_tC_3', // Units 1
        'pghq_PFC_water_2_3_tC_2', // Meter Amount
        'pghq_PFC_water_1_5_1_15' // Annual Amount
      ],
      'calculation': function (a, b, c) {
      	return toFixed (handlers.convertGallons(a, b) / c, 1);
      }
    },
    'pghq_PFC_water_2_3_tC_8': {
      'args': [
        'pghq_PFC_water_2_3_tC_7', // Units
        'pghq_PFC_water_2_3_tC_6', // Meter Amount
        'pghq_PFC_water_1_5_1_15', // Annual Amount
      ],
      'calculation': function (a, b, c) {
      	return toFixed (handlers.convertGallons(a, b) / c, 1);
      }
    },
    'pghq_PFC_water_2_3_tC_12': {
      'args': [
        'pghq_PFC_water_2_3_tC_11', // Units
        'pghq_PFC_water_2_3_tC_10', // Meter Amount
        'pghq_PFC_water_1_5_1_15', // Annual Amount
      ],
      'calculation': function (a, b, c) {
      	return toFixed (handlers.convertGallons(a, b) / c, 1);
      }
    },
    'pghq_PFC_water_2_3_tC_16': {
      'args': [
        'pghq_PFC_water_2_3_tC_15', // Units
        'pghq_PFC_water_2_3_tC_14', // Meter Amount
        'pghq_PFC_water_1_5_1_15', // Annual Amount
      ],
      'calculation': function (a, b, c) {
      	return toFixed (handlers.convertGallons(a, b) / c, 1);
      }
    },
    'pghq_PFC_water_2_3_tC_20': {
      'args': [
        'pghq_PFC_water_2_3_tC_19', // Units
        'pghq_PFC_water_2_3_tC_18', // Meter Amount
        'pghq_PFC_water_1_5_1_15', // Annual Amount
      ],
      'calculation': function (a, b, c) {
      	return toFixed (handlers.convertGallons(a, b) / c, 1);
      }
    },
    'pghq_PFC_water_2_3_tC_24': {
      'args': [
        'pghq_PFC_water_2_3_tC_23', // Units
        'pghq_PFC_water_2_3_tC_22', // Meter Amount
        'pghq_PFC_water_1_5_1_15', // Annual Amount
      ],
      'calculation': function (a, b, c) {
      	return toFixed (handlers.convertGallons(a, b) / c, 1);
      }
    },
    'pghq_PFC_water_2_3_tC_28': {
      'args': [
        'pghq_PFC_water_2_3_tC_27', // Units
        'pghq_PFC_water_2_3_tC_26', // Meter Amount
        'pghq_PFC_water_1_5_1_15', // Annual Amount
      ],
      'calculation': function (a, b, c) {
      	return toFixed (handlers.convertGallons(a, b) / c, 1);
      }
    },
    'pghq_PFC_water_2_3_tC_32': {
      'args': [
        'pghq_PFC_water_2_3_tC_31', // Units
        'pghq_PFC_water_2_3_tC_30', // Meter Amount
        'pghq_PFC_water_1_5_1_15', // Annual Amount
      ],
      'calculation': function (a, b, c) {
      	return toFixed (handlers.convertGallons(a, b) / c, 1);
      }
    },
    'pghq_PFC_water_2_3_tC_36': {
      'args': [
        'pghq_PFC_water_2_3_tC_35', // Units
        'pghq_PFC_water_2_3_tC_34', // Meter Amount
        'pghq_PFC_water_1_5_1_15', // Annual Amount
      ],
      'calculation': function (a, b, c) {
      	return toFixed (handlers.convertGallons(a, b) / c, 1);
      }
    },
    'pghq_PFC_water_2_3_tC_40': {
      'args': [
        'pghq_PFC_water_2_3_tC_39', // Units
        'pghq_PFC_water_2_3_tC_38', // Meter Amount
        'pghq_PFC_water_1_5_1_15', // Annual Amount
      ],
      'calculation': function (a, b, c) {
      	return toFixed (handlers.convertGallons(a, b) / c, 1);
      }
    },
    'pghq_PFC_water_2_5': {
      'args': [
        'pghq_PFC_water_1_5_1_14',
        'pghq_PFC_water_1_5_1_13',
        'pghq_PFC_water_2_4_1'
      ],
      'calculation': function() {
	      return toFixed(handlers.convertGallonsAndDivide.apply(this, arguments) * 100, 2);
      }
    },
    'pghq_PFC_water_3_1tE_21': {
      'args': [
        'pghq_PFC_water_3_1tE_3',
        'pghq_PFC_water_3_1tE_7',
        'pghq_PFC_water_3_1tE_11',
        'pghq_PFC_water_3_1tE_15',
        'pghq_PFC_water_3_1tE_19'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 0);
      }
    },
    'pghq_PFC_water_3_1tE_22': {
      'args': [
        'pghq_PFC_water_3_1tE_4',
        'pghq_PFC_water_3_1tE_8',
        'pghq_PFC_water_3_1tE_12',
        'pghq_PFC_water_3_1tE_16',
        'pghq_PFC_water_3_1tE_20'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 0);
      }
    },

    //
    // PFC Climate formulas
    //
    'pghq_PFC_climate_1_5_25': {
      'args': [
        'pghq_PFC_climate_1_5_1',
        'pghq_PFC_climate_1_5_2',
        'pghq_PFC_climate_1_5_3',
        'pghq_PFC_climate_1_5_4',
        'pghq_PFC_climate_1_5_5',
        'pghq_PFC_climate_1_5_6',
        'pghq_PFC_climate_1_5_7',
        'pghq_PFC_climate_1_5_7_1',
        'pghq_PFC_climate_1_5_9',
        'pghq_PFC_climate_1_5_10',
        'pghq_PFC_climate_1_5_11',
        'pghq_PFC_climate_1_5_12',
        'pghq_PFC_climate_1_5_13',
        'pghq_PFC_climate_1_5_14',
        'pghq_PFC_climate_1_5_16',
        'pghq_PFC_climate_1_5_17',
        'pghq_PFC_climate_1_5_18',
        'pghq_PFC_climate_1_5_19',
        'pghq_PFC_climate_1_5_20',
        'pghq_PFC_climate_1_5_21',
        'pghq_PFC_climate_1_5_22',
        'pghq_PFC_climate_1_5_24'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 0);
      }
    },
    'pghq_PFC_climate_3_2_6_21': {
      'args': [
        'pghq_PFC_climate_3_2_6_3',
        'pghq_PFC_climate_3_2_6_7',
        'pghq_PFC_climate_3_2_6_11',
        'pghq_PFC_climate_3_2_6_15',
        'pghq_PFC_climate_3_2_6_19'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 0);
      }
    },
    'pghq_PFC_climate_3_2_6_22': {
      'args': [
        'pghq_PFC_climate_3_2_6_4',
        'pghq_PFC_climate_3_2_6_8',
        'pghq_PFC_climate_3_2_6_12',
        'pghq_PFC_climate_3_2_6_16',
        'pghq_PFC_climate_3_2_6_20'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 0);
      }
    },

    //
    // PFC Green Building formulas
    //
    'pghq_PFC_greenbuilding_4_2_tC_3': {
      'args': [
        'pghq_PFC_greenbuilding_4_2_tC_1',
        'pghq_PFC_greenbuilding_4_2_tC_7'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
	  'pghq_PFC_greenbuilding_4_2_tC_6': {
      'args': [
        'pghq_PFC_greenbuilding_4_2_tC_4',
        'pghq_PFC_greenbuilding_4_2_tC_7'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_PFC_greenbuilding_4_2_tC_7': {
      'args': [
        'pghq_PFC_greenbuilding_4_2_tC_1',
        'pghq_PFC_greenbuilding_4_2_tC_4'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 2);
      }
    },
    'pghq_PFC_greenbuilding_4_2_tC_8': {
      'args': [
        'pghq_PFC_greenbuilding_4_2_tC_2',
        'pghq_PFC_greenbuilding_4_2_tC_5'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 2);
      }
    },

    //
    // PFC Appendix A formulas
    //
    'pghq_PFC_appendixa_1_8t_1': {
      'args': [
        'pghq_PFC_appendixa_1_7_1t_1', // amount 1
        'pghq_PFC_appendixa_1_7_2t_2', // amount 2
        'pghq_PFC_appendixa_1_7_3t_1', // amount 3
        'pghq_PFC_appendixa_1_7_4t_1', // amount 4
        'pghq_PFC_appendixa_1_7_5t_1', // amount 5
        'pghq_PFC_appendixa_1_7_6t_1', // amount 6
        'pghq_PFC_appendixa_1_7_7t_2', // amount 7
        'pghq_PFC_appendixa_1_7_8t_2', // amount 8
        'pghq_PFC_appendixa_1_7_9t_1', // amount 9
        'pghq_PFC_appendixa_1_7_10t_1', // amount 10
        'pghq_PFC_appendixa_1_7_11t_1', // amount 11
        'pghq_PFC_appendixa_1_7_12t_1', // amount 12
        'pghq_PFC_appendixa_1_7_12t_2', // units 12
        'pghq_PFC_appendixa_1_7_13t_1', // amount 13
        'pghq_PFC_appendixa_1_7_13t_2', // units 13
        'pghq_PFC_appendixa_1_7_14t_2', // amount 14
        'pghq_PFC_appendixa_1_7_15t_1', // amount 15
        'pghq_PFC_appendixa_1_7_16t_1', // amount 16
        'pghq_PFC_appendixa_1_7_17t_1', // amount 17
        'pghq_PFC_appendixa_1_7_18t_1', // amount 18
        'pghq_PFC_appendixa_1_7_19t_1', // amount 19
        'pghq_PFC_appendixa_1_7_20t_1', // amount 20
        'pghq_PFC_appendixa_1_7_21t_1', // amount 21
        'pghq_PFC_appendixa_1_7_22t_1', // amount 22
        'pghq_PFC_appendixa_1_7_23t_1', // amount 23
        'pghq_PFC_appendixa_1_7_24t_1', // amount 24
        'pghq_PFC_appendixa_1_7_25t_1', // amount 25
        'pghq_PFC_appendixa_1_7_26t_1', // amount 26
        'pghq_PFC_appendixa_1_7_27t_1', // amount 27
        'pghq_PFC_appendixa_1_7_28t_1', // amount 28
        'pghq_PFC_appendixa_1_7_29t_1', // amount 29
        'pghq_PFC_appendixa_1_7_30t_1', // amount 30
        'pghq_PFC_appendixa_1_7_30t_2', // units 30
        'pghq_PFC_appendixa_1_7_31t_1', // amount 31
        'pghq_PFC_appendixa_1_7_31t_2' // units 31
      ],
      'calculation': function (amount1, amount2, amount3, amount4, amount5, amount6, amount7, amount8, amount9, amount10, amount11, amount12, units12, amount13, units13, amount14, amount15, amount16, amount17, amount18, amount19, amount20, amount21, amount22, amount23, amount24, amount25, amount26, amount27, amount28, amount29, amount30, units30, amount31, units31) {
      	var converted12 = 0;
      	var converted13 = 0;
      	var converted30 = 0;
      	var converted31 = 0;
      	if (units12 === 'Gallons') {
      		converted12 = amount12 * 0.004;
      	} else {
      		converted12 = amount12;
      	}
      	if (units13 === 'Gallons') {
      		converted13 = amount13 * 0.004;
      	} else {
      		converted13 = amount13;
      	}
      	if (units30 === 'Gallons') {
      		converted30 = amount30 * 0.004;
      	} else {
      		converted30 = amount30;
      	}
      	if (units31 === 'Gallons') {
      		converted31 = amount31 * 0.004;
      	} else {
      		converted31 = amount31;
      	}
 
        var values = [
          amount1,
          amount2,
          amount3,
          amount4,
          amount5,
          amount6,
          amount7,
          amount8,
          amount9,
          amount10,
          amount11,
          converted12,
          converted13,
          amount14,
          amount15,
          amount16,
          amount17,
          amount18,
          amount19,
          amount20,
          amount21,
          amount22,
          amount23,
          amount24,
          amount25,
          amount26,
          amount27,
          amount28,
          amount29,
          converted30,
          converted31
        ];
 
        var sum = 0;
        for (var index = 0; index < values.length; index++) {
          if (!isNaN(values[index])) {
            sum += values[index];
          }
        }
 
      	return toFixed(sum, 2);
      }
    },
    'pghq_PFC_appendixa_1_8t_2': {
      'args': [
        'pghq_PFC_appendixa_1_7_1t_2', // cost 1
        'pghq_PFC_appendixa_1_7_2t_3', // cost 2
        'pghq_PFC_appendixa_1_7_3t_2', // cost 3
        'pghq_PFC_appendixa_1_7_4t_2', // cost 4
        'pghq_PFC_appendixa_1_7_5t_2', // cost 5
        'pghq_PFC_appendixa_1_7_6t_2', // cost 6
        'pghq_PFC_appendixa_1_7_7t_3', // cost 7
        'pghq_PFC_appendixa_1_7_8t_3', // cost 8
        'pghq_PFC_appendixa_1_7_9t_2', // cost 9
        'pghq_PFC_appendixa_1_7_10t_2', // cost 10
        'pghq_PFC_appendixa_1_7_11t_2', // cost 11
        'pghq_PFC_appendixa_1_7_12t_3', // cost 12
        'pghq_PFC_appendixa_1_7_13t_3', // cost 13
        'pghq_PFC_appendixa_1_7_14t_3', // cost 14
        'pghq_PFC_appendixa_1_7_15t_2', // cost 15
        'pghq_PFC_appendixa_1_7_16t_2', // cost 16
        'pghq_PFC_appendixa_1_7_17t_2', // cost 17
        'pghq_PFC_appendixa_1_7_18t_2', // cost 18
        'pghq_PFC_appendixa_1_7_19t_2', // cost 19
        'pghq_PFC_appendixa_1_7_20t_2', // cost 20
        'pghq_PFC_appendixa_1_7_21t_2', // cost 21
        'pghq_PFC_appendixa_1_7_22t_2', // cost 22
        'pghq_PFC_appendixa_1_7_23t_2', // cost 23
        'pghq_PFC_appendixa_1_7_24t_2', // cost 24
        'pghq_PFC_appendixa_1_7_25t_2', // cost 25
        'pghq_PFC_appendixa_1_7_26t_2', // cost 26
        'pghq_PFC_appendixa_1_7_27t_2', // cost 27
        'pghq_PFC_appendixa_1_7_28t_2', // cost 28
        'pghq_PFC_appendixa_1_7_29t_2', // cost 29
        'pghq_PFC_appendixa_1_7_30t_3', // cost 30
        'pghq_PFC_appendixa_1_7_31t_3', // cost 31
      ],
      'calculation': function (cost1, cost2, cost3, cost4, cost5, cost6, cost7, cost8, cost9, cost10, cost11, cost12, cost13, cost14, cost15, cost16, cost17, cost18, cost19, cost20, cost21, cost22, cost23, cost24, cost25, cost26, cost27, cost28, cost29, cost30, cost31) {
 
        var values = [
          cost1,
          cost2,
          cost3,
          cost4,
          cost5,
          cost6,
          cost7,
          cost8,
          cost9,
          cost10,
          cost11,
          cost12,
          cost13,
          cost14,
          cost15,
          cost16,
          cost17,
          cost18,
          cost19,
          cost20,
          cost21,
          cost22,
          cost23,
          cost24,
          cost25,
          cost26,
          cost27,
          cost28,
          cost29,
          cost30,
          cost31
        ];
 
        var sum = 0;
        for (var index = 0; index < values.length; index++) {
          if (!isNaN(values[index])) {
            sum += values[index];
          }
        }
 
      	return toFixed(sum, 0);
      }
    },
    'pghq_PFC_appendixa_1_9t_1': {
      'args': [
        'pghq_PFC_appendixa_1_7_1t_1', // amount 1
        'pghq_PFC_appendixa_1_7_3t_1', // amount 3
        'pghq_PFC_appendixa_1_7_4t_1', // amount 4
        'pghq_PFC_appendixa_1_7_5t_1', // amount 5
        'pghq_PFC_appendixa_1_7_6t_1', // amount 6
        'pghq_PFC_appendixa_1_7_9t_1', // amount 9
        'pghq_PFC_appendixa_1_7_10t_1', // amount 10
        'pghq_PFC_appendixa_1_7_11t_1', // amount 11
        'pghq_PFC_appendixa_1_7_12t_1', // amount 12
        'pghq_PFC_appendixa_1_7_12t_2', // units 12
        'pghq_PFC_appendixa_1_7_13t_1', // amount 13
        'pghq_PFC_appendixa_1_7_13t_2', // units 13
        'pghq_PFC_appendixa_1_7_15t_1', // amount 15
        'pghq_PFC_appendixa_1_7_16t_1', // amount 16
        'pghq_PFC_appendixa_1_7_17t_1', // amount 17
        'pghq_PFC_appendixa_1_7_18t_1', // amount 18
        'pghq_PFC_appendixa_1_7_19t_1', // amount 19
        'pghq_PFC_appendixa_1_7_20t_1', // amount 20
        'pghq_PFC_appendixa_1_7_21t_1', // amount 21
        'pghq_PFC_appendixa_1_7_22t_1', // amount 22
        'pghq_PFC_appendixa_1_7_23t_1', // amount 23
        'pghq_PFC_appendixa_1_7_24t_1', // amount 24
        'pghq_PFC_appendixa_1_7_25t_1', // amount 25
        'pghq_PFC_appendixa_1_7_26t_1', // amount 26
        'pghq_PFC_appendixa_1_7_27t_1', // amount 27
        'pghq_PFC_appendixa_1_7_28t_1', // amount 28
        'pghq_PFC_appendixa_1_7_29t_1' // amount 29
      ],
      'calculation': function (amount1, amount3, amount4, amount5, amount6, amount9, amount10, amount11, amount12, units12, amount13, units13, amount15, amount16, amount17, amount18, amount19, amount20, amount21, amount22, amount23, amount24, amount25, amount26, amount27, amount28, amount29) {

      	var converted12 = 0;
      	var converted13 = 0;

      	if (units12 === 'Gallons') {
      		converted12 = amount12 * 0.004;
      	} else {
      		converted12 = amount12;
      	}
      	if (units13 === 'Gallons') {
      		converted13 = amount13 * 0.004;
      	} else {
      		converted13 = amount13;
      	}
 
        var values = [
          amount1,
          amount3,
          amount4,
          amount5,
          amount6,
          amount9,
          amount10,
          amount11,
          converted12,
          converted13,
          amount15,
          amount16,
          amount17,
          amount18,
          amount19,
          amount20,
          amount21,
          amount22,
          amount23,
          amount24,
          amount25,
          amount26,
          amount27,
          amount28,
          amount29
        ];
 
        var sum = 0;
        for (var index = 0; index < values.length; index++) {
          if (!isNaN(values[index])) {
            sum += values[index];
          }
        }
 
      	return toFixed(sum, 2);
      }
    },
    'pghq_PFC_appendixa_1_9t_2': {
      'args': [
        'pghq_PFC_appendixa_1_7_1t_2', // cost 1
        'pghq_PFC_appendixa_1_7_3t_2', // cost 3
        'pghq_PFC_appendixa_1_7_4t_2', // cost 4
        'pghq_PFC_appendixa_1_7_5t_2', // cost 5
        'pghq_PFC_appendixa_1_7_6t_2', // cost 6
        'pghq_PFC_appendixa_1_7_9t_2', // cost 9
        'pghq_PFC_appendixa_1_7_10t_2', // cost 10
        'pghq_PFC_appendixa_1_7_11t_2', // cost 11
        'pghq_PFC_appendixa_1_7_12t_3', // cost 12
        'pghq_PFC_appendixa_1_7_13t_3', // cost 13
        'pghq_PFC_appendixa_1_7_15t_2', // cost 15
        'pghq_PFC_appendixa_1_7_16t_2', // cost 16
        'pghq_PFC_appendixa_1_7_17t_2', // cost 17
        'pghq_PFC_appendixa_1_7_18t_2', // cost 18
        'pghq_PFC_appendixa_1_7_19t_2', // cost 19
        'pghq_PFC_appendixa_1_7_20t_2', // cost 20
        'pghq_PFC_appendixa_1_7_21t_2', // cost 21
        'pghq_PFC_appendixa_1_7_22t_2', // cost 22
        'pghq_PFC_appendixa_1_7_23t_2', // cost 23
        'pghq_PFC_appendixa_1_7_24t_2', // cost 24
        'pghq_PFC_appendixa_1_7_25t_2', // cost 25
        'pghq_PFC_appendixa_1_7_26t_2', // cost 26
        'pghq_PFC_appendixa_1_7_27t_2', // cost 27
        'pghq_PFC_appendixa_1_7_28t_2', // cost 28
        'pghq_PFC_appendixa_1_7_29t_2' // cost 29
      ],
      'calculation': function (cost1, cost3, cost4, cost5, cost6, cost9, cost10, cost11, cost12, cost13, cost15, cost16, cost17, cost18, cost19, cost20, cost21, cost22, cost23, cost24, cost25, cost26, cost27, cost28, cost29) {
 
        var values = [
          cost1,
          cost3,
          cost4,
          cost5,
          cost6,
          cost9,
          cost10,
          cost11,
          cost12,
          cost13,
          cost15,
          cost16,
          cost17,
          cost18,
          cost19,
          cost20,
          cost21,
          cost22,
          cost23,
          cost24,
          cost25,
          cost26,
          cost27,
          cost28,
          cost29
        ];
 
        var sum = 0;
        for (var index = 0; index < values.length; index++) {
          if (!isNaN(values[index])) {
            sum += values[index];
          }
        }
 
      	return toFixed(sum, 0);
      }
    },
    'pghq_PFC_appendixa_1_10t_1': {
      'args': [
        'pghq_PFC_appendixa_1_7_2t_2', // amount 2
        'pghq_PFC_appendixa_1_7_7t_2', // amount 7
        'pghq_PFC_appendixa_1_7_8t_2', // amount 8
        'pghq_PFC_appendixa_1_7_14t_2', // amount 14
        'pghq_PFC_appendixa_1_7_30t_1', // amount 30
        'pghq_PFC_appendixa_1_7_30t_2', // units 30
        'pghq_PFC_appendixa_1_7_31t_1', // amount 31
        'pghq_PFC_appendixa_1_7_31t_2' // units 31
      ],
      'calculation': function (amount2, amount7, amount8, amount14, amount30, units30, amount31, units31) {

      	var converted30 = 0;
      	var converted31 = 0;

      	if (units30 === 'Gallons') {
      		converted30 = amount30 * 0.004;
      	} else {
      		converted30 = amount30;
      	}
      	if (units31 === 'Gallons') {
      		converted31 = amount31 * 0.004;
      	} else {
      		converted31 = amount31;
      	}
 
        var values = [
          amount2,
          amount7,
          amount8,
          amount14,
          converted30,
          converted31
        ];
 
        var sum = 0;
        for (var index = 0; index < values.length; index++) {
          if (!isNaN(values[index])) {
            sum += values[index];
          }
        }
 
      	return toFixed(sum, 2);
      }
    },
    'pghq_PFC_appendixa_1_10t_2': {
      'args': [
        'pghq_PFC_appendixa_1_7_2t_3', // cost 2
        'pghq_PFC_appendixa_1_7_7t_3', // cost 7
        'pghq_PFC_appendixa_1_7_8t_3', // cost 8
        'pghq_PFC_appendixa_1_7_14t_3', // cost 14
        'pghq_PFC_appendixa_1_7_30t_3', // cost 30
        'pghq_PFC_appendixa_1_7_31t_3', // cost 31
      ],
      'calculation': function (cost2, cost7, cost8, cost14, cost30, cost31) {
 
        var values = [
          cost2,
          cost7,
          cost8,
          cost14,
          cost30,
          cost31
        ];
 
        var sum = 0;
        for (var index = 0; index < values.length; index++) {
          if (!isNaN(values[index])) {
            sum += values[index];
          }
        }
 
      	return toFixed(sum, 0);
      }
    },

    //
    // PR Waste formulas
    //
    'pghq_PR_waste_4_8_tB_9': {
      'args': [
        'pghq_PR_waste_4_8_tB_1',
        'pghq_PR_waste_4_8_tB_5'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 2);
      }
    },
    'pghq_PR_waste_4_8_tB_10': {
      'args': [
        'pghq_PR_waste_4_8_tB_2',
        'pghq_PR_waste_4_8_tB_6'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 0);
      }
    },
    'pghq_PR_waste_4_8_tB_11': {
      'args': [
        'pghq_PR_waste_4_8_tB_3',
        'pghq_PR_waste_4_8_tB_7'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 2);
      }
    },
    'pghq_PR_waste_4_8_tB_12': {
      'args': [
        'pghq_PR_waste_4_8_tB_4',
        'pghq_PR_waste_4_8_tB_8'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 0);
      }
    },
    'pghq_PR_waste_6_2_14': {
      'args': [
        'pghq_PR_waste_6_2_1',
        'pghq_PR_waste_6_2_6',
        'pghq_PR_waste_6_2_10'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 2);
      }
    },
    'pghq_PR_waste_6_2_15': {
      'args': [
        'pghq_PR_waste_6_2_2',
        'pghq_PR_waste_6_2_7',
        'pghq_PR_waste_6_2_11'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 0);
      }
    },
    'pghq_PR_waste_6_2_16': {
      'args': [
        'pghq_PR_waste_6_2_3',
        'pghq_PR_waste_6_2_8',
        'pghq_PR_waste_6_2_12'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 2);
      }
    },
    'pghq_PR_waste_6_2_17': {
      'args': [
        'pghq_PR_waste_6_2_4',
        'pghq_PR_waste_6_2_9',
        'pghq_PR_waste_6_2_13'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 0);
      }
    },
    'pghq_PR_waste_6_3_5': {
      'args': [
        'pghq_PR_waste_6_2_16',
        'pghq_PR_waste_6_3_5_0'
      ],
      'calculation': function (a, b) {
        return toFixed((a * 2000 / b / 365), 2);
      }
    },
    'pghq_PR_waste_8_10_1tE_9': {
      'args': [
        'pghq_PR_waste_8_10_1tE_1',
        'pghq_PR_waste_8_10_1tE_5'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 2);
      }
    },
    'pghq_PR_waste_8_10_1tE_10': {
      'args': [
        'pghq_PR_waste_8_10_1tE_2',
        'pghq_PR_waste_8_10_1tE_6'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 0);
      }
    },
    'pghq_PR_waste_8_10_1tE_11': {
      'args': [
        'pghq_PR_waste_8_10_1tE_3',
        'pghq_PR_waste_8_10_1tE_7'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 2);
      }
    },
    'pghq_PR_waste_8_10_1tE_12': {
      'args': [
        'pghq_PR_waste_8_10_1tE_4',
        'pghq_PR_waste_8_10_1tE_8'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 0);
      }
    },
    'pghq_PR_waste_10_1_tG_1': {
      'args': [
        'pghq_PR_waste_2_3_tA_2',
        'pghq_PR_waste_4_8_tB_9',
        'pghq_PR_waste_6_2_14',
        'pghq_PR_waste_8_10_1tE_9'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 2);
      }
    },
    'pghq_PR_waste_10_1_tG_2': {
      'args': [
        'pghq_PR_waste_2_3_tA_4',
        'pghq_PR_waste_4_8_tB_10',
        'pghq_PR_waste_6_2_15',
        'pghq_PR_waste_8_10_1tE_10'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 0);
      }
    },
    'pghq_PR_waste_10_1_tG_3': {
      'args': [
        'pghq_PR_waste_2_3_tA_3',
        'pghq_PR_waste_4_8_tB_11',
        'pghq_PR_waste_6_2_16',
        'pghq_PR_waste_8_10_1tE_11'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 2);
      }
    },
    'pghq_PR_waste_10_1_tG_4': {
      'args': [
        'pghq_PR_waste_2_3_tA_5',
        'pghq_PR_waste_4_8_tB_12',
        'pghq_PR_waste_6_2_17',
        'pghq_PR_waste_8_10_1tE_12'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 0);
      }
    },
    'pghq_PR_waste_10_1_tH_1': {
      'args': [
        'pghq_PR_waste_2_3_tA_2',
        'pghq_PR_waste_10_1_tG_1'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_PR_waste_10_1_tH_2': {
      'args': [
        'pghq_PR_waste_2_3_tA_4',
        'pghq_PR_waste_10_1_tG_2'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_PR_waste_10_1_tH_3': {
      'args': [
        'pghq_PR_waste_2_3_tA_3',
        'pghq_PR_waste_10_1_tG_3'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_PR_waste_10_1_tH_4': {
      'args': [
        'pghq_PR_waste_2_3_tA_5',
        'pghq_PR_waste_10_1_tG_4'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_PR_waste_10_1_tH_5': {
      'args': [
        'pghq_PR_waste_4_8_tB_9',
        'pghq_PR_waste_10_1_tG_1'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_PR_waste_10_1_tH_6': {
      'args': [
        'pghq_PR_waste_4_8_tB_10',
        'pghq_PR_waste_10_1_tG_2'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_PR_waste_10_1_tH_7': {
      'args': [
        'pghq_PR_waste_4_8_tB_11',
        'pghq_PR_waste_10_1_tG_3'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_PR_waste_10_1_tH_8': {
      'args': [
        'pghq_PR_waste_4_8_tB_12',
        'pghq_PR_waste_10_1_tG_4'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_PR_waste_10_1_tH_9': {
      'args': [
        'pghq_PR_waste_6_2_14',
        'pghq_PR_waste_10_1_tG_1'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_PR_waste_10_1_tH_10': {
      'args': [
        'pghq_PR_waste_6_2_15',
        'pghq_PR_waste_10_1_tG_2'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_PR_waste_10_1_tH_11': {
      'args': [
        'pghq_PR_waste_6_2_16',
        'pghq_PR_waste_10_1_tG_3'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_PR_waste_10_1_tH_12': {
      'args': [
        'pghq_PR_waste_6_2_17',
        'pghq_PR_waste_10_1_tG_4'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_PR_waste_10_1_tH_13': {
      'args': [
        'pghq_PR_waste_8_10_1tE_9',
        'pghq_PR_waste_10_1_tG_1'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_PR_waste_10_1_tH_14': {
      'args': [
        'pghq_PR_waste_8_10_1tE_10',
        'pghq_PR_waste_10_1_tG_2'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_PR_waste_10_1_tH_15': {
      'args': [
        'pghq_PR_waste_8_10_1tE_11',
        'pghq_PR_waste_10_1_tG_3'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_PR_waste_10_1_tH_16': {
      'args': [
        'pghq_PR_waste_8_10_1tE_12',
        'pghq_PR_waste_10_1_tG_4'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },

    //
    // PR Energy
    //
    'pghq_PR_energy_4_4_32': {
      'args': [
        'pghq_PR_energy_4_4_5',
        'pghq_PR_energy_4_4_11',
        'pghq_PR_energy_4_4_17',
        'pghq_PR_energy_4_4_23',
        'pghq_PR_energy_4_4_29'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 0);
      }
    },
    'pghq_PR_energy_4_4_33': {
      'args': [
        'pghq_PR_energy_4_4_6',
        'pghq_PR_energy_4_4_12',
        'pghq_PR_energy_4_4_18',
        'pghq_PR_energy_4_4_24',
        'pghq_PR_energy_4_4_30'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 0);
      }
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
      'calculation': function() {
	      return toFixed(handlers.convertGallonsAndDivide.apply(this, arguments), 0);
      }
    },
    'pghq_PR_water_1_8': {
      'args': [
        'pghq_PR_water_1_5_1_14',
        'pghq_PR_water_1_5_1_13',
        'pghq_PR_water_1_8_0'
      ],
      'calculation': function() {
	      return toFixed(handlers.convertGallonsAndDivide.apply(this, arguments), 0);
      }
    },
    'pghq_PR_water_1_9': {
      'args': [
        'pghq_PR_water_1_5_1_14',
        'pghq_PR_water_1_5_1_13',
        'pghq_PR_water_1_9_0'
      ],
      'calculation': function() {
	      return toFixed(handlers.convertGallonsAndDivide.apply(this, arguments), 0);
      }
    },
    'pghq_PR_water_3_1tB_21': {
      'args': [
        'pghq_PR_water_3_1tB_3',
        'pghq_PR_water_3_1tB_7',
        'pghq_PR_water_3_1tB_11',
        'pghq_PR_water_3_1tB_15',
        'pghq_PR_water_3_1tB_19'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 0);
      }
    },
    'pghq_PR_water_3_1tB_22': {
      'args': [
        'pghq_PR_water_3_1tB_4',
        'pghq_PR_water_3_1tB_8',
        'pghq_PR_water_3_1tB_12',
        'pghq_PR_water_3_1tB_16',
        'pghq_PR_water_3_1tB_20'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 0);
      }
    },

    //
    // PR Green Building formulas
    //
    'pghq_PR_greenbuilding_4_2_t_3': {
      'args': [
        'pghq_PR_greenbuilding_4_2_t_1',
        'pghq_PR_greenbuilding_4_2_t_7'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
	  'pghq_PR_greenbuilding_4_2_t_6': {
      'args': [
        'pghq_PR_greenbuilding_4_2_t_4',
        'pghq_PR_greenbuilding_4_2_t_7'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_PR_greenbuilding_4_2_t_7': {
      'args': [
        'pghq_PR_greenbuilding_4_2_t_1',
        'pghq_PR_greenbuilding_4_2_t_4'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 2);
      }
    },
    'pghq_PR_greenbuilding_4_2_t_8': {
      'args': [
        'pghq_PR_greenbuilding_4_2_t_2',
        'pghq_PR_greenbuilding_4_2_t_5'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 2);
      }
    },

    //
    // PR Appendix A formulas
    //
    'pghq_PR_appendixa_1_8t_1': {
      'args': [
        'pghq_PR_appendixa_1_7_1t_1', // amount 1
        'pghq_PR_appendixa_1_7_2t_2', // amount 2
        'pghq_PR_appendixa_1_7_3t_1', // amount 3
        'pghq_PR_appendixa_1_7_4t_1', // amount 4
        'pghq_PR_appendixa_1_7_5t_1', // amount 5
        'pghq_PR_appendixa_1_7_6t_1', // amount 6
        'pghq_PR_appendixa_1_7_7t_2', // amount 7
        'pghq_PR_appendixa_1_7_8t_2', // amount 8
        'pghq_PR_appendixa_1_7_9t_1', // amount 9
        'pghq_PR_appendixa_1_7_10t_1', // amount 10
        'pghq_PR_appendixa_1_7_11t_1', // amount 11
        'pghq_PR_appendixa_1_7_12t_1', // amount 12
        'pghq_PR_appendixa_1_7_12t_2', // units 12
        'pghq_PR_appendixa_1_7_13t_1', // amount 13
        'pghq_PR_appendixa_1_7_13t_2', // units 13
        'pghq_PR_appendixa_1_7_14t_2', // amount 14
        'pghq_PR_appendixa_1_7_15t_1', // amount 15
        'pghq_PR_appendixa_1_7_16t_1', // amount 16
        'pghq_PR_appendixa_1_7_17t_1', // amount 17
        'pghq_PR_appendixa_1_7_18t_1', // amount 18
        'pghq_PR_appendixa_1_7_19t_1', // amount 19
        'pghq_PR_appendixa_1_7_20t_1', // amount 20
        'pghq_PR_appendixa_1_7_21t_1', // amount 21
        'pghq_PR_appendixa_1_7_22t_1', // amount 22
        'pghq_PR_appendixa_1_7_23t_1', // amount 23
        'pghq_PR_appendixa_1_7_24t_1', // amount 24
        'pghq_PR_appendixa_1_7_25t_1', // amount 25
        'pghq_PR_appendixa_1_7_26t_1', // amount 26
        'pghq_PR_appendixa_1_7_27t_1', // amount 27
        'pghq_PR_appendixa_1_7_28t_1', // amount 28
        'pghq_PR_appendixa_1_7_29t_1', // amount 29
        'pghq_PR_appendixa_1_7_30t_1', // amount 30
        'pghq_PR_appendixa_1_7_30t_2', // units 30
        'pghq_PR_appendixa_1_7_31t_1', // amount 31
        'pghq_PR_appendixa_1_7_31t_2' // units 31
      ],
      'calculation': function (amount1, amount2, amount3, amount4, amount5, amount6, amount7, amount8, amount9, amount10, amount11, amount12, units12, amount13, units13, amount14, amount15, amount16, amount17, amount18, amount19, amount20, amount21, amount22, amount23, amount24, amount25, amount26, amount27, amount28, amount29, amount30, units30, amount31, units31) {
      	var converted12 = 0;
      	var converted13 = 0;
      	var converted30 = 0;
      	var converted31 = 0;
      	if (units12 === 'Gallons') {
      		converted12 = amount12 * 0.004;
      	} else {
      		converted12 = amount12;
      	}
      	if (units13 === 'Gallons') {
      		converted13 = amount13 * 0.004;
      	} else {
      		converted13 = amount13;
      	}
      	if (units30 === 'Gallons') {
      		converted30 = amount30 * 0.004;
      	} else {
      		converted30 = amount30;
      	}
      	if (units31 === 'Gallons') {
      		converted31 = amount31 * 0.004;
      	} else {
      		converted31 = amount31;
      	}
 
        var values = [
          amount1,
          amount2,
          amount3,
          amount4,
          amount5,
          amount6,
          amount7,
          amount8,
          amount9,
          amount10,
          amount11,
          converted12,
          converted13,
          amount14,
          amount15,
          amount16,
          amount17,
          amount18,
          amount19,
          amount20,
          amount21,
          amount22,
          amount23,
          amount24,
          amount25,
          amount26,
          amount27,
          amount28,
          amount29,
          converted30,
          converted31
        ];
 
        var sum = 0;
        for (var index = 0; index < values.length; index++) {
          if (!isNaN(values[index])) {
            sum += values[index];
          }
        }
 
      	return toFixed(sum, 2);
      }
    },
    'pghq_PR_appendixa_1_8t_2': {
      'args': [
        'pghq_PR_appendixa_1_7_1t_2', // cost 1
        'pghq_PR_appendixa_1_7_2t_3', // cost 2
        'pghq_PR_appendixa_1_7_3t_2', // cost 3
        'pghq_PR_appendixa_1_7_4t_2', // cost 4
        'pghq_PR_appendixa_1_7_5t_2', // cost 5
        'pghq_PR_appendixa_1_7_6t_2', // cost 6
        'pghq_PR_appendixa_1_7_7t_3', // cost 7
        'pghq_PR_appendixa_1_7_8t_3', // cost 8
        'pghq_PR_appendixa_1_7_9t_2', // cost 9
        'pghq_PR_appendixa_1_7_10t_2', // cost 10
        'pghq_PR_appendixa_1_7_11t_2', // cost 11
        'pghq_PR_appendixa_1_7_12t_3', // cost 12
        'pghq_PR_appendixa_1_7_13t_3', // cost 13
        'pghq_PR_appendixa_1_7_14t_3', // cost 14
        'pghq_PR_appendixa_1_7_15t_2', // cost 15
        'pghq_PR_appendixa_1_7_16t_2', // cost 16
        'pghq_PR_appendixa_1_7_17t_2', // cost 17
        'pghq_PR_appendixa_1_7_18t_2', // cost 18
        'pghq_PR_appendixa_1_7_19t_2', // cost 19
        'pghq_PR_appendixa_1_7_20t_2', // cost 20
        'pghq_PR_appendixa_1_7_21t_2', // cost 21
        'pghq_PR_appendixa_1_7_22t_2', // cost 22
        'pghq_PR_appendixa_1_7_23t_2', // cost 23
        'pghq_PR_appendixa_1_7_24t_2', // cost 24
        'pghq_PR_appendixa_1_7_25t_2', // cost 25
        'pghq_PR_appendixa_1_7_26t_2', // cost 26
        'pghq_PR_appendixa_1_7_27t_2', // cost 27
        'pghq_PR_appendixa_1_7_28t_2', // cost 28
        'pghq_PR_appendixa_1_7_29t_2', // cost 29
        'pghq_PR_appendixa_1_7_30t_3', // cost 30
        'pghq_PR_appendixa_1_7_31t_3', // cost 31
      ],
      'calculation': function (cost1, cost2, cost3, cost4, cost5, cost6, cost7, cost8, cost9, cost10, cost11, cost12, cost13, cost14, cost15, cost16, cost17, cost18, cost19, cost20, cost21, cost22, cost23, cost24, cost25, cost26, cost27, cost28, cost29, cost30, cost31) {
 
        var values = [
          cost1,
          cost2,
          cost3,
          cost4,
          cost5,
          cost6,
          cost7,
          cost8,
          cost9,
          cost10,
          cost11,
          cost12,
          cost13,
          cost14,
          cost15,
          cost16,
          cost17,
          cost18,
          cost19,
          cost20,
          cost21,
          cost22,
          cost23,
          cost24,
          cost25,
          cost26,
          cost27,
          cost28,
          cost29,
          cost30,
          cost31
        ];
 
        var sum = 0;
        for (var index = 0; index < values.length; index++) {
          if (!isNaN(values[index])) {
            sum += values[index];
          }
        }
 
      	return toFixed(sum, 0);
      }
    },
    'pghq_PR_appendixa_1_9t_1': {
      'args': [
        'pghq_PR_appendixa_1_7_1t_1', // amount 1
        'pghq_PR_appendixa_1_7_3t_1', // amount 3
        'pghq_PR_appendixa_1_7_4t_1', // amount 4
        'pghq_PR_appendixa_1_7_5t_1', // amount 5
        'pghq_PR_appendixa_1_7_6t_1', // amount 6
        'pghq_PR_appendixa_1_7_9t_1', // amount 9
        'pghq_PR_appendixa_1_7_10t_1', // amount 10
        'pghq_PR_appendixa_1_7_11t_1', // amount 11
        'pghq_PR_appendixa_1_7_12t_1', // amount 12
        'pghq_PR_appendixa_1_7_12t_2', // units 12
        'pghq_PR_appendixa_1_7_13t_1', // amount 13
        'pghq_PR_appendixa_1_7_13t_2', // units 13
        'pghq_PR_appendixa_1_7_15t_1', // amount 15
        'pghq_PR_appendixa_1_7_16t_1', // amount 16
        'pghq_PR_appendixa_1_7_17t_1', // amount 17
        'pghq_PR_appendixa_1_7_18t_1', // amount 18
        'pghq_PR_appendixa_1_7_19t_1', // amount 19
        'pghq_PR_appendixa_1_7_20t_1', // amount 20
        'pghq_PR_appendixa_1_7_21t_1', // amount 21
        'pghq_PR_appendixa_1_7_22t_1', // amount 22
        'pghq_PR_appendixa_1_7_23t_1', // amount 23
        'pghq_PR_appendixa_1_7_24t_1', // amount 24
        'pghq_PR_appendixa_1_7_25t_1', // amount 25
        'pghq_PR_appendixa_1_7_26t_1', // amount 26
        'pghq_PR_appendixa_1_7_27t_1', // amount 27
        'pghq_PR_appendixa_1_7_28t_1', // amount 28
        'pghq_PR_appendixa_1_7_29t_1' // amount 29
      ],
      'calculation': function (amount1, amount3, amount4, amount5, amount6, amount9, amount10, amount11, amount12, units12, amount13, units13, amount15, amount16, amount17, amount18, amount19, amount20, amount21, amount22, amount23, amount24, amount25, amount26, amount27, amount28, amount29) {

      	var converted12 = 0;
      	var converted13 = 0;

      	if (units12 === 'Gallons') {
      		converted12 = amount12 * 0.004;
      	} else {
      		converted12 = amount12;
      	}
      	if (units13 === 'Gallons') {
      		converted13 = amount13 * 0.004;
      	} else {
      		converted13 = amount13;
      	}
 
        var values = [
          amount1,
          amount3,
          amount4,
          amount5,
          amount6,
          amount9,
          amount10,
          amount11,
          converted12,
          converted13,
          amount15,
          amount16,
          amount17,
          amount18,
          amount19,
          amount20,
          amount21,
          amount22,
          amount23,
          amount24,
          amount25,
          amount26,
          amount27,
          amount28,
          amount29
        ];
 
        var sum = 0;
        for (var index = 0; index < values.length; index++) {
          if (!isNaN(values[index])) {
            sum += values[index];
          }
        }
 
      	return toFixed(sum, 2);
      }
    },
    'pghq_PR_appendixa_1_9t_2': {
      'args': [
        'pghq_PR_appendixa_1_7_1t_2', // cost 1
        'pghq_PR_appendixa_1_7_3t_2', // cost 3
        'pghq_PR_appendixa_1_7_4t_2', // cost 4
        'pghq_PR_appendixa_1_7_5t_2', // cost 5
        'pghq_PR_appendixa_1_7_6t_2', // cost 6
        'pghq_PR_appendixa_1_7_9t_2', // cost 9
        'pghq_PR_appendixa_1_7_10t_2', // cost 10
        'pghq_PR_appendixa_1_7_11t_2', // cost 11
        'pghq_PR_appendixa_1_7_12t_3', // cost 12
        'pghq_PR_appendixa_1_7_13t_3', // cost 13
        'pghq_PR_appendixa_1_7_15t_2', // cost 15
        'pghq_PR_appendixa_1_7_16t_2', // cost 16
        'pghq_PR_appendixa_1_7_17t_2', // cost 17
        'pghq_PR_appendixa_1_7_18t_2', // cost 18
        'pghq_PR_appendixa_1_7_19t_2', // cost 19
        'pghq_PR_appendixa_1_7_20t_2', // cost 20
        'pghq_PR_appendixa_1_7_21t_2', // cost 21
        'pghq_PR_appendixa_1_7_22t_2', // cost 22
        'pghq_PR_appendixa_1_7_23t_2', // cost 23
        'pghq_PR_appendixa_1_7_24t_2', // cost 24
        'pghq_PR_appendixa_1_7_25t_2', // cost 25
        'pghq_PR_appendixa_1_7_26t_2', // cost 26
        'pghq_PR_appendixa_1_7_27t_2', // cost 27
        'pghq_PR_appendixa_1_7_28t_2', // cost 28
        'pghq_PR_appendixa_1_7_29t_2' // cost 29
      ],
      'calculation': function (cost1, cost3, cost4, cost5, cost6, cost9, cost10, cost11, cost12, cost13, cost15, cost16, cost17, cost18, cost19, cost20, cost21, cost22, cost23, cost24, cost25, cost26, cost27, cost28, cost29) {
 
        var values = [
          cost1,
          cost3,
          cost4,
          cost5,
          cost6,
          cost9,
          cost10,
          cost11,
          cost12,
          cost13,
          cost15,
          cost16,
          cost17,
          cost18,
          cost19,
          cost20,
          cost21,
          cost22,
          cost23,
          cost24,
          cost25,
          cost26,
          cost27,
          cost28,
          cost29
        ];
 
        var sum = 0;
        for (var index = 0; index < values.length; index++) {
          if (!isNaN(values[index])) {
            sum += values[index];
          }
        }
 
      	return toFixed(sum, 0);
      }
    },
    'pghq_PR_appendixa_1_10t_1': {
      'args': [
        'pghq_PR_appendixa_1_7_2t_2', // amount 2
        'pghq_PR_appendixa_1_7_7t_2', // amount 7
        'pghq_PR_appendixa_1_7_8t_2', // amount 8
        'pghq_PR_appendixa_1_7_14t_2', // amount 14
        'pghq_PR_appendixa_1_7_30t_1', // amount 30
        'pghq_PR_appendixa_1_7_30t_2', // units 30
        'pghq_PR_appendixa_1_7_31t_1', // amount 31
        'pghq_PR_appendixa_1_7_31t_2' // units 31
      ],
      'calculation': function (amount2, amount7, amount8, amount14, amount30, units30, amount31, units31) {

      	var converted30 = 0;
      	var converted31 = 0;

      	if (units30 === 'Gallons') {
      		converted30 = amount30 * 0.004;
      	} else {
      		converted30 = amount30;
      	}
      	if (units31 === 'Gallons') {
      		converted31 = amount31 * 0.004;
      	} else {
      		converted31 = amount31;
      	}
 
        var values = [
          amount2,
          amount7,
          amount8,
          amount14,
          converted30,
          converted31
        ];
 
        var sum = 0;
        for (var index = 0; index < values.length; index++) {
          if (!isNaN(values[index])) {
            sum += values[index];
          }
        }
 
      	return toFixed(sum, 2);
      }
    },
    'pghq_PR_appendixa_1_10t_2': {
      'args': [
        'pghq_PR_appendixa_1_7_2t_3', // cost 2
        'pghq_PR_appendixa_1_7_7t_3', // cost 7
        'pghq_PR_appendixa_1_7_8t_3', // cost 8
        'pghq_PR_appendixa_1_7_14t_3', // cost 14
        'pghq_PR_appendixa_1_7_30t_3', // cost 30
        'pghq_PR_appendixa_1_7_31t_3', // cost 31
      ],
      'calculation': function (cost2, cost7, cost8, cost14, cost30, cost31) {
 
        var values = [
          cost2,
          cost7,
          cost8,
          cost14,
          cost30,
          cost31
        ];
 
        var sum = 0;
        for (var index = 0; index < values.length; index++) {
          if (!isNaN(values[index])) {
            sum += values[index];
          }
        }
 
      	return toFixed(sum, 0);
      }
    },

    //
    // LTC Waste formulas
    //
    'pghq_LTC_waste_4_8_tB_13': {
      'args': [
        'pghq_LTC_waste_4_8_tB_1',
        'pghq_LTC_waste_4_8_tB_7'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 2);
      }
    },
    'pghq_LTC_waste_4_8_tB_14': {
      'args': [
        'pghq_LTC_waste_4_8_tB_2',
        'pghq_LTC_waste_4_8_tB_8'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 2);
      }
    },
//     'pghq_LTC_waste_4_8_tB_15': {
//       'args': [
//         'pghq_LTC_waste_4_8_tB_3',
//         'pghq_LTC_waste_4_8_tB_9'
//       ],
//       'calculation': function() {
// 	      return toFixed(handlers.sum.apply(this, arguments), 2);
//       }
//     },
    'pghq_LTC_waste_4_8_tB_16': {
      'args': [
        'pghq_LTC_waste_4_8_tB_4',
        'pghq_LTC_waste_4_8_tB_10'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 0);
      }
    },
    'pghq_LTC_waste_4_8_tB_17': {
      'args': [
        'pghq_LTC_waste_4_8_tB_5',
        'pghq_LTC_waste_4_8_tB_11'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 0);
      }
    },
//     'pghq_LTC_waste_4_8_tB_18': {
//       'args': [
//         'pghq_LTC_waste_4_8_tB_6',
//         'pghq_LTC_waste_4_8_tB_12'
//       ],
//       'calculation': function() {
// 	      return toFixed(handlers.sum.apply(this, arguments), 0);
//       }
//     },
    'pghq_LTC_waste_6_2_20': {
      'args': [
        'pghq_LTC_waste_6_2_1',
        'pghq_LTC_waste_6_2_8',
        'pghq_LTC_waste_6_2_14'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 2);
      }
    },
    'pghq_LTC_waste_6_2_21': {
      'args': [
        'pghq_LTC_waste_6_2_2',
        'pghq_LTC_waste_6_2_9',
        'pghq_LTC_waste_6_2_15'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 2);
      }
    },
    'pghq_LTC_waste_6_2_22': {
      'args': [
        'pghq_LTC_waste_6_2_3',
        'pghq_LTC_waste_6_2_10',
        'pghq_LTC_waste_6_2_16'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 2);
      }
    },
    'pghq_LTC_waste_6_2_23': {
      'args': [
        'pghq_LTC_waste_6_2_4',
        'pghq_LTC_waste_6_2_11',
        'pghq_LTC_waste_6_2_17'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 0);
      }
    },
    'pghq_LTC_waste_6_2_24': {
      'args': [
        'pghq_LTC_waste_6_2_5',
        'pghq_LTC_waste_6_2_12',
        'pghq_LTC_waste_6_2_18'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 0);
      }
    },
    'pghq_LTC_waste_6_2_25': {
      'args': [
        'pghq_LTC_waste_6_2_6',
        'pghq_LTC_waste_6_2_13',
        'pghq_LTC_waste_6_2_19'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 0);
      }
    },
    'pghq_LTC_waste_6_3_5': {
      'args': [
        'pghq_LTC_waste_6_2_22',
        'pghq_LTC_waste_6_3_5_0'
      ],
      'calculation': function (a, b) {
        return toFixed((a * 2000 / b / 365), 2);
      }
    },
    'pghq_LTC_waste_8_10_1tE_13': {
      'args': [
        'pghq_LTC_waste_8_10_1tE_1',
        'pghq_LTC_waste_8_10_1tE_7'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 2);
      }
    },
    'pghq_LTC_waste_8_10_1tE_14': {
      'args': [
        'pghq_LTC_waste_8_10_1tE_2',
        'pghq_LTC_waste_8_10_1tE_8'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 2);
      }
    },
    'pghq_LTC_waste_8_10_1tE_15': {
      'args': [
        'pghq_LTC_waste_8_10_1tE_3',
        'pghq_LTC_waste_8_10_1tE_9'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 2);
      }
    },
    'pghq_LTC_waste_8_10_1tE_16': {
      'args': [
        'pghq_LTC_waste_8_10_1tE_4',
        'pghq_LTC_waste_8_10_1tE_10'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 0);
      }
    },
    'pghq_LTC_waste_8_10_1tE_17': {
      'args': [
        'pghq_LTC_waste_8_10_1tE_5',
        'pghq_LTC_waste_8_10_1tE_11'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 0);
      }
    },
    'pghq_LTC_waste_8_10_1tE_18': {
      'args': [
        'pghq_LTC_waste_8_10_1tE_6',
        'pghq_LTC_waste_8_10_1tE_12'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 0);
      }
    },
    'pghq_LTC_waste_10_1_tG_1': {
      'args': [
        'pghq_LTC_waste_2_3_tA_2',
        'pghq_LTC_waste_4_8_tB_13',
        'pghq_LTC_waste_6_2_20',
        'pghq_LTC_waste_8_10_1tE_13'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 2);
      }
    },
    'pghq_LTC_waste_10_1_tG_2': {
      'args': [
        'pghq_LTC_waste_2_3_tA_3',
        'pghq_LTC_waste_4_8_tB_14',
        'pghq_LTC_waste_6_2_21',
        'pghq_LTC_waste_8_10_1tE_14'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 2);
      }
    },
    'pghq_LTC_waste_10_1_tG_3': {
      'args': [
        'pghq_LTC_waste_2_3_tA_4',
        'pghq_LTC_waste_4_8_tB_15',
        'pghq_LTC_waste_6_2_22',
        'pghq_LTC_waste_8_10_1tE_15'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 2);
      }
    },
    'pghq_LTC_waste_10_1_tG_4': {
      'args': [
        'pghq_LTC_waste_2_3_tA_5',
        'pghq_LTC_waste_4_8_tB_16',
        'pghq_LTC_waste_6_2_23',
        'pghq_LTC_waste_8_10_1tE_16'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 0);
      }
    },
    'pghq_LTC_waste_10_1_tG_5': {
      'args': [
        'pghq_LTC_waste_2_3_tA_6',
        'pghq_LTC_waste_4_8_tB_17',
        'pghq_LTC_waste_6_2_24',
        'pghq_LTC_waste_8_10_1tE_17'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 0);
      }
    },
    'pghq_LTC_waste_10_1_tG_6': {
      'args': [
        'pghq_LTC_waste_2_3_tA_7',
        'pghq_LTC_waste_4_8_tB_18',
        'pghq_LTC_waste_6_2_25',
        'pghq_LTC_waste_8_10_1tE_18'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 0);
      }
    },
    'pghq_LTC_waste_10_1_tH_1': {
      'args': [
        'pghq_LTC_waste_2_3_tA_2',
        'pghq_LTC_waste_10_1_tG_1'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_LTC_waste_10_1_tH_2': {
      'args': [
        'pghq_LTC_waste_2_3_tA_3',
        'pghq_LTC_waste_10_1_tG_2'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_LTC_waste_10_1_tH_3': {
      'args': [
        'pghq_LTC_waste_2_3_tA_4',
        'pghq_LTC_waste_10_1_tG_3'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_LTC_waste_10_1_tH_4': {
      'args': [
        'pghq_LTC_waste_2_3_tA_5',
        'pghq_LTC_waste_10_1_tG_4'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_LTC_waste_10_1_tH_5': {
      'args': [
        'pghq_LTC_waste_2_3_tA_6',
        'pghq_LTC_waste_10_1_tG_5'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_LTC_waste_10_1_tH_6': {
      'args': [
        'pghq_LTC_waste_2_3_tA_7',
        'pghq_LTC_waste_10_1_tG_6'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_LTC_waste_10_1_tH_7': {
      'args': [
        'pghq_LTC_waste_4_8_tB_13',
        'pghq_LTC_waste_10_1_tG_1'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_LTC_waste_10_1_tH_8': {
      'args': [
        'pghq_LTC_waste_4_8_tB_14',
        'pghq_LTC_waste_10_1_tG_2'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_LTC_waste_10_1_tH_9': {
      'args': [
        'pghq_LTC_waste_4_8_tB_15',
        'pghq_LTC_waste_10_1_tG_3'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_LTC_waste_10_1_tH_10': {
      'args': [
        'pghq_LTC_waste_4_8_tB_16',
        'pghq_LTC_waste_10_1_tG_4'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_LTC_waste_10_1_tH_11': {
      'args': [
        'pghq_LTC_waste_4_8_tB_17',
        'pghq_LTC_waste_10_1_tG_5'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_LTC_waste_10_1_tH_12': {
      'args': [
        'pghq_LTC_waste_4_8_tB_18',
        'pghq_LTC_waste_10_1_tG_6'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_LTC_waste_10_1_tH_13': {
      'args': [
        'pghq_LTC_waste_6_2_20',
        'pghq_LTC_waste_10_1_tG_1'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_LTC_waste_10_1_tH_14': {
      'args': [
        'pghq_LTC_waste_6_2_21',
        'pghq_LTC_waste_10_1_tG_2'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_LTC_waste_10_1_tH_15': {
      'args': [
        'pghq_LTC_waste_6_2_22',
        'pghq_LTC_waste_10_1_tG_3'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_LTC_waste_10_1_tH_16': {
      'args': [
        'pghq_LTC_waste_6_2_23',
        'pghq_LTC_waste_10_1_tG_4'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_LTC_waste_10_1_tH_17': {
      'args': [
        'pghq_LTC_waste_6_2_24',
        'pghq_LTC_waste_10_1_tG_5'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_LTC_waste_10_1_tH_18': {
      'args': [
        'pghq_LTC_waste_6_2_25',
        'pghq_LTC_waste_10_1_tG_6'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_LTC_waste_10_1_tH_19': {
      'args': [
        'pghq_LTC_waste_8_10_1tE_13',
        'pghq_LTC_waste_10_1_tG_1'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_LTC_waste_10_1_tH_20': {
      'args': [
        'pghq_LTC_waste_8_10_1tE_14',
        'pghq_LTC_waste_10_1_tG_2'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_LTC_waste_10_1_tH_21': {
      'args': [
        'pghq_LTC_waste_8_10_1tE_15',
        'pghq_LTC_waste_10_1_tG_3'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_LTC_waste_10_1_tH_22': {
      'args': [
        'pghq_LTC_waste_8_10_1tE_16',
        'pghq_LTC_waste_10_1_tG_4'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_LTC_waste_10_1_tH_23': {
      'args': [
        'pghq_LTC_waste_8_10_1tE_17',
        'pghq_LTC_waste_10_1_tG_5'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_LTC_waste_10_1_tH_24': {
      'args': [
        'pghq_LTC_waste_8_10_1tE_18',
        'pghq_LTC_waste_10_1_tG_6'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
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
      'calculation': function() {
	      return toFixed(handlers.divideBySum.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_LTC_chemicals_2_4_2_6': {
      'args': [
        'pghq_LTC_chemicals_2_4_2_4',
        'pghq_LTC_chemicals_2_4_2_4',
        'pghq_LTC_chemicals_2_4_2_5'
      ],
      'calculation': function() {
	      return toFixed(handlers.divideBySum.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_LTC_chemicals_2_4_2_9': {
      'args': [
        'pghq_LTC_chemicals_2_4_2_7',
        'pghq_LTC_chemicals_2_4_2_7',
        'pghq_LTC_chemicals_2_4_2_8'
      ],
      'calculation': function() {
	      return toFixed(handlers.divideBySum.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_LTC_chemicals_2_4_2_12': {
      'args': [
        'pghq_LTC_chemicals_2_4_2_10',
        'pghq_LTC_chemicals_2_4_2_10',
        'pghq_LTC_chemicals_2_4_2_11'
      ],
      'calculation': function() {
	      return toFixed(handlers.divideBySum.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_LTC_chemicals_2_4_2_15': {
      'args': [
        'pghq_LTC_chemicals_2_4_2_13',
        'pghq_LTC_chemicals_2_4_2_13',
        'pghq_LTC_chemicals_2_4_2_14'
      ],
      'calculation': function() {
	      return toFixed(handlers.divideBySum.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_LTC_chemicals_2_4_2_16': {
      'args': [
        'pghq_LTC_chemicals_2_4_2_1',
        'pghq_LTC_chemicals_2_4_2_4',
        'pghq_LTC_chemicals_2_4_2_7',
        'pghq_LTC_chemicals_2_4_2_10',
        'pghq_LTC_chemicals_2_4_2_13'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 1);
      }
    },
    'pghq_LTC_chemicals_2_4_2_17': {
      'args': [
        'pghq_LTC_chemicals_2_4_2_2',
        'pghq_LTC_chemicals_2_4_2_5',
        'pghq_LTC_chemicals_2_4_2_8',
        'pghq_LTC_chemicals_2_4_2_11',
        'pghq_LTC_chemicals_2_4_2_14'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 1);
      }
    },
    'pghq_LTC_chemicals_2_4_2_18': {
      'args': [
        'pghq_LTC_chemicals_2_4_2_16',
        'pghq_LTC_chemicals_2_4_2_16',
        'pghq_LTC_chemicals_2_4_2_17'
      ],
      'calculation': function() {
	      return toFixed(handlers.divideBySum.apply(this, arguments) * 100, 1);
      }
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
        } else if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d)){
      		return 0;
      	} else {
          return toFixed((1- ((c / d) / (a / b))) * 100, 1);
        }
      }
    },
    'pghq_LTC_food_2_1_4': {
      'args': [
        'pghq_LTC_food_2_1_2',
        'pghq_LTC_food_2_1_3'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_LTC_food_3_1_4': {
      'args': [
        'pghq_LTC_food_3_1_2',
        'pghq_LTC_food_3_1_3'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },

    //
    // LTC Energy
    //
    'pghq_LTC_energy_2_11_1': {
      'args': [
        'pghq_LTC_energy_2_7_5',
        'pghq_LTC_energy_2_7_4'
      ],
      'calculation': function() {
	      return toFixed(handlers.convertBTUSimple.apply(this, arguments), 0);
      }
    },
    'pghq_LTC_energy_2_11_2': {
      'args': [
        'pghq_LTC_energy_2_11_1',
        'pghq_LTC_energy_2_11_21'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_LTC_energy_2_11_3': {
      'args': [
        'pghq_LTC_energy_2_7_9',
        'pghq_LTC_energy_2_7_8'
      ],
      'calculation': function() {
	      return toFixed(handlers.convertNaturalGas.apply(this, arguments), 0);
      }
    },
    'pghq_LTC_energy_2_11_4': {
      'args': [
        'pghq_LTC_energy_2_11_3',
        'pghq_LTC_energy_2_11_21'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_LTC_energy_2_11_5': {
      'args': [
        'pghq_LTC_energy_2_7_13',
        'pghq_LTC_energy_2_7_12'
      ],
      'calculation': function() {
	      return toFixed(handlers.convertFuelOil.apply(this, arguments), 0);
      }
    },
    'pghq_LTC_energy_2_11_6': {
      'args': [
        'pghq_LTC_energy_2_11_5',
        'pghq_LTC_energy_2_11_21'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_LTC_energy_2_11_7': {
      'args': [
        'pghq_LTC_energy_2_7_17',
        'pghq_LTC_energy_2_7_16'
      ],
      'calculation': function() {
	      return toFixed(handlers.convertSteam.apply(this, arguments), 0);
      }
    },
    'pghq_LTC_energy_2_11_8': {
      'args': [
        'pghq_LTC_energy_2_11_7',
        'pghq_LTC_energy_2_11_21'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_LTC_energy_2_11_9': {
      'args': [
        'pghq_LTC_energy_2_7_21',
        'pghq_LTC_energy_2_7_20'
      ],
      'calculation': function() {
	      return toFixed(handlers.convertWater.apply(this, arguments), 0);
      }
    },
    'pghq_LTC_energy_2_11_10': {
      'args': [
        'pghq_LTC_energy_2_11_9',
        'pghq_LTC_energy_2_11_21'
      ],
       'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_LTC_energy_2_11_11': {
      'args': [
        'pghq_LTC_energy_2_7_25',
        'pghq_LTC_energy_2_7_24'
      ],
      'calculation': function() {
	      return toFixed(handlers.convertWater.apply(this, arguments), 0);
      }
    },
    'pghq_LTC_energy_2_11_12': {
      'args': [
        'pghq_LTC_energy_2_11_11',
        'pghq_LTC_energy_2_11_21'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_LTC_energy_2_11_13': {
      'args': [
        'pghq_LTC_energy_2_7_29',
        'pghq_LTC_energy_2_7_28'
      ],
      'calculation': function() {
	      return toFixed(handlers.convertDiesel.apply(this, arguments), 0);
      }
    },
    'pghq_LTC_energy_2_11_14': {
      'args': [
        'pghq_LTC_energy_2_11_13',
        'pghq_LTC_energy_2_11_21'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
		'pghq_LTC_energy_2_11_17': {
			'args': [
				'pghq_LTC_energy_2_8_2_3', // Units 1
				'pghq_LTC_energy_2_8_2_2', // Amount 1
				'pghq_LTC_energy_2_8_2_8', // Units 2
				'pghq_LTC_energy_2_8_2_7', // Amount 2
				'pghq_LTC_energy_2_8_2_13', // Units 3
				'pghq_LTC_energy_2_8_2_12' // Amount 3
			],
			'calculation': function (a, b, c, d, e, f) {
				var x = handlers.convertBTU(a, b);
				var y = handlers.convertBTU(c, d);
				var z = handlers.convertBTU(e, f);
				return toFixed(x + y + z, 0);
			}
		},
    'pghq_LTC_energy_2_11_18': {
      'args': [
        'pghq_LTC_energy_2_11_17',
        'pghq_LTC_energy_2_11_21'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_LTC_energy_2_11_19': {
      'args': [
        'pghq_LTC_energy_2_8_2_18', // Units
        'pghq_LTC_energy_2_8_2_17' // Amount
      ],
      'calculation': function() {
	      return toFixed(handlers.convertBTU.apply(this, arguments), 0);
      }
    },
    'pghq_LTC_energy_2_11_20': {
      'args': [
        'pghq_LTC_energy_2_11_19',
        'pghq_LTC_energy_2_11_21'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_LTC_energy_2_11_21': {
      'args': [
        'pghq_LTC_energy_2_11_1', // amount 1
        'pghq_LTC_energy_2_11_3', // amount 2
        'pghq_LTC_energy_2_11_5', // amount 3
        'pghq_LTC_energy_2_11_7', // amount 4
        'pghq_LTC_energy_2_11_9', // amount 5
        'pghq_LTC_energy_2_11_11', // amount 6
        'pghq_LTC_energy_2_11_13', // amount 7
        'pghq_LTC_energy_2_11_17', // amount 8
        'pghq_LTC_energy_2_11_19' // amount 9
      ],
      'calculation': function (amount1, amount2, amount3, amount4, amount5, amount6, amount7, amount8, amount9) {
 
        var values = [
          amount1,
          amount2,
          amount3,
          amount4,
          amount5,
          amount6,
          amount7,
          amount8,
          amount9
        ];
 
        var sum = 0;
        for (var index = 0; index < values.length; index++) {
          if (!isNaN(values[index])) {
            sum += values[index];
          }
        }
 
      	return toFixed(sum, 0);
      }
    },
    'pghq_LTC_energy_2_11_22': {
      'args': [
        'pghq_LTC_energy_2_11_2', // amount 1
        'pghq_LTC_energy_2_11_4', // amount 2
        'pghq_LTC_energy_2_11_6', // amount 3
        'pghq_LTC_energy_2_11_8', // amount 4
        'pghq_LTC_energy_2_11_10', // amount 5
        'pghq_LTC_energy_2_11_12', // amount 6
        'pghq_LTC_energy_2_11_14', // amount 7
        'pghq_LTC_energy_2_11_18', // amount 8
        'pghq_LTC_energy_2_11_20' // amount 9
      ],
      'calculation': function (amount1, amount2, amount3, amount4, amount5, amount6, amount7, amount8, amount9) {
 
        var values = [
          amount1,
          amount2,
          amount3,
          amount4,
          amount5,
          amount6,
          amount7,
          amount8,
          amount9
        ];
 
        var sum = 0;
        for (var index = 0; index < values.length; index++) {
          if (!isNaN(values[index])) {
            sum += values[index];
          }
        }
 
      	return toFixed(sum, 1);
      }
    },
    'pghq_LTC_energy_2_12': {
      'args': [
        'pghq_LTC_energy_2_11_18',
        'pghq_LTC_energy_2_11_20'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 1);
      }
    },
    'pghq_LTC_energy_3_1_1_1': {
      'args': [
        'pghq_LTC_energy_2_11_1', // amount 1
        'pghq_LTC_energy_2_11_3', // amount 2
        'pghq_LTC_energy_2_11_5', // amount 3
        'pghq_LTC_energy_2_11_7', // amount 4
        'pghq_LTC_energy_2_11_9', // amount 5
        'pghq_LTC_energy_2_11_11', // amount 6
        'pghq_LTC_energy_2_11_13', // amount 7
        'pghq_LTC_energy_2_11_17', // amount 8
        'pghq_LTC_energy_2_11_19' // amount 9
      ],
      'calculation': function (amount1, amount2, amount3, amount4, amount5, amount6, amount7, amount8, amount9) {
 
        var values = [
          amount1,
          amount2,
          amount3,
          amount4,
          amount5,
          amount6,
          amount7,
          amount8,
          amount9
        ];
 
        var sum = 0;
        for (var index = 0; index < values.length; index++) {
          if (!isNaN(values[index])) {
            sum += values[index];
          }
        }
 
      	return toFixed(sum, 0);
      }
    },   
    'pghq_LTC_energy_3_1_1_2': {
      'args': [
        'pghq_LTC_energy_2_7_5', // Electricity Units
        'pghq_LTC_energy_2_7_6', // Electricity Amount
        'pghq_LTC_energy_2_7_9', // Natural Gas Units
        'pghq_LTC_energy_2_7_10', // Natural Gas Amount
        'pghq_LTC_energy_2_7_13', // Fuel Oil Units
        'pghq_LTC_energy_2_7_14', // Fuel Oil Amount
        'pghq_LTC_energy_2_7_17', // Steam Units
        'pghq_LTC_energy_2_7_18', // Steam Amount
        'pghq_LTC_energy_2_7_21', // Chilled Water Units
        'pghq_LTC_energy_2_7_22', // Chilled Water Amount
        'pghq_LTC_energy_2_7_25', // Hot Water Units
        'pghq_LTC_energy_2_7_26', // Hot Water Amount
        'pghq_LTC_energy_2_7_29', // Diesel Units
        'pghq_LTC_energy_2_7_30', // Diesel Amount
        'pghq_LTC_energy_2_8_2_3', // Renewable Energy 1 Units
        'pghq_LTC_energy_2_8_2_4', // Renewable Energy 1 Amount
        'pghq_LTC_energy_2_8_2_8', // Renewable Energy 2 Units
        'pghq_LTC_energy_2_8_2_9', // Renewable Energy 2 Amount
        'pghq_LTC_energy_2_8_2_13', // Renewable Energy 3 Units
        'pghq_LTC_energy_2_8_2_14', // Renewable Energy 3 Amount
        'pghq_LTC_energy_2_8_2_18', // Renewable Energy 4 Units
        'pghq_LTC_energy_2_8_2_19' // Renewable Energy 4 Amount
      ],
      'calculation': function (elecU, elecA, natGasU, natGasA, fuelU, fuelA, steamU, steamA, chillU, chillA, hotU, hotA, dieselU, dieselA, renew1U, renew1A, renew2U, renew2A, renew3U, renew3A, renew4U, renew4A) {

      	var elecTotal = handlers.convertBTUSimple(elecU, elecA);
      	var natGasTotal = handlers.convertNaturalGas(natGasU, natGasA);
      	var fuelTotal = handlers.convertFuelOil(fuelU, fuelA);
      	var steamTotal = handlers.convertSteam(steamU, steamA);
      	var chillTotal = handlers.convertWater(chillU, chillA);
      	var hotTotal = handlers.convertWater(hotU, hotA);
      	var dieselTotal = handlers.convertDiesel(dieselU, dieselA);
      	var renew1Total = handlers.convertBTU(renew1U, renew1A);
      	var renew2Total = handlers.convertBTU(renew2U, renew2A);
      	var renew3Total = handlers.convertBTU(renew3U, renew3A);
      	var renew4Total = handlers.convertBTU(renew4U, renew4A);
      	
        var values = [
          elecTotal, 
					natGasTotal,
					fuelTotal,
					steamTotal,
					chillTotal,
					hotTotal,
					dieselTotal,
					renew1Total,
					renew2Total,
					renew3Total,
					renew4Total
        ];
 
        var sum = 0;
        for (var index = 0; index < values.length; index++) {
          if (!isNaN(values[index])) {
            sum += values[index];
          }
        }
 
      	return toFixed(sum, 0);
      }
    },
    'pghq_LTC_energy_3_1_1_3': {
      'args': [
        'pghq_LTC_energy_2_7_5', // Electricity Units
        'pghq_LTC_energy_2_7_7', // Electricity Amount
        'pghq_LTC_energy_2_7_9', // Natural Gas Units
        'pghq_LTC_energy_2_7_11', // Natural Gas Amount
        'pghq_LTC_energy_2_7_13', // Fuel Oil Units
        'pghq_LTC_energy_2_7_15', // Fuel Oil Amount
        'pghq_LTC_energy_2_7_17', // Steam Units
        'pghq_LTC_energy_2_7_19', // Steam Amount
        'pghq_LTC_energy_2_7_21', // Chilled Water Units
        'pghq_LTC_energy_2_7_23', // Chilled Water Amount
        'pghq_LTC_energy_2_7_25', // Hot Water Units
        'pghq_LTC_energy_2_7_27', // Hot Water Amount
        'pghq_LTC_energy_2_7_29', // Diesel Units
        'pghq_LTC_energy_2_7_31', // Diesel Amount
        'pghq_LTC_energy_2_8_2_3', // Renewable Energy 1 Units
        'pghq_LTC_energy_2_8_2_5', // Renewable Energy 1 Amount
        'pghq_LTC_energy_2_8_2_8', // Renewable Energy 2 Units
        'pghq_LTC_energy_2_8_2_10', // Renewable Energy 2 Amount
        'pghq_LTC_energy_2_8_2_13', // Renewable Energy 3 Units
        'pghq_LTC_energy_2_8_2_15', // Renewable Energy 3 Amount
        'pghq_LTC_energy_2_8_2_18', // Renewable Energy 4 Units
        'pghq_LTC_energy_2_8_2_20' // Renewable Energy 4 Amount
      ],
      'calculation': function (elecU, elecA, natGasU, natGasA, fuelU, fuelA, steamU, steamA, chillU, chillA, hotU, hotA, dieselU, dieselA, renew1U, renew1A, renew2U, renew2A, renew3U, renew3A, renew4U, renew4A) {

      	var elecTotal = handlers.convertBTUSimple(elecU, elecA);
      	var natGasTotal = handlers.convertNaturalGas(natGasU, natGasA);
      	var fuelTotal = handlers.convertFuelOil(fuelU, fuelA);
      	var steamTotal = handlers.convertSteam(steamU, steamA);
      	var chillTotal = handlers.convertWater(chillU, chillA);
      	var hotTotal = handlers.convertWater(hotU, hotA);
      	var dieselTotal = handlers.convertDiesel(dieselU, dieselA);
      	var renew1Total = handlers.convertBTU(renew1U, renew1A);
      	var renew2Total = handlers.convertBTU(renew2U, renew2A);
      	var renew3Total = handlers.convertBTU(renew3U, renew3A);
      	var renew4Total = handlers.convertBTU(renew4U, renew4A);

        var values = [
          elecTotal, 
					natGasTotal,
					fuelTotal,
					steamTotal,
					chillTotal,
					hotTotal,
					dieselTotal,
					renew1Total,
					renew2Total,
					renew3Total,
					renew4Total
        ];
 
        var sum = 0;
        for (var index = 0; index < values.length; index++) {
          if (!isNaN(values[index])) {
            sum += values[index];
          }
        }
 
      	return toFixed(sum, 0);
      }
    },
    'pghq_LTC_energy_3_1_1_4': {
      'args': [
        'pghq_LTC_energy_2_11_21',
        'pghq_LTC_energy_3_1_1_2'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_LTC_energy_3_1_1_5': {
      'args': [
        'pghq_LTC_energy_2_11_21',
        'pghq_LTC_energy_3_1_1_3'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_LTC_energy_3_1_1_6': {
      'args': [
        'pghq_LTC_energy_3_1_1_1',
        'pghq_LTC_energy_2_7_1'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments), 0);
      }
    },
    'pghq_LTC_energy_3_1_1_7': {
      'args': [
        'pghq_LTC_energy_3_1_1_2',
        'pghq_LTC_energy_2_7_2'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments), 0);
      }
    },
    'pghq_LTC_energy_3_1_1_8': {
      'args': [
        'pghq_LTC_energy_3_1_1_3',
        'pghq_LTC_energy_2_7_3'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments), 0);
      }
    },
    'pghq_LTC_energy_3_1_1_9': {
      'args': [
        'pghq_LTC_energy_3_1_1_6',
        'pghq_LTC_energy_3_1_1_7'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_LTC_energy_3_1_1_10': {
      'args': [
        'pghq_LTC_energy_3_1_1_6',
        'pghq_LTC_energy_3_1_1_8'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_LTC_energy_4_4_5': {
      'args': [
        'pghq_LTC_energy_4_4_4',
        'pghq_LTC_energy_4_4_3'
      ],
      'calculation': function() {
	      return toFixed(handlers.convertBTUComplex.apply(this, arguments), 0);
      }
    },
    'pghq_LTC_energy_4_4_11': {
      'args': [
        'pghq_LTC_energy_4_4_10',
        'pghq_LTC_energy_4_4_9'
      ],
      'calculation': function() {
	      return toFixed(handlers.convertBTUComplex.apply(this, arguments), 0);
      }
    },
    'pghq_LTC_energy_4_4_17': {
      'args': [
        'pghq_LTC_energy_4_4_16',
        'pghq_LTC_energy_4_4_15'
      ],
      'calculation': function() {
	      return toFixed(handlers.convertBTUComplex.apply(this, arguments), 0);
      }
    },
    'pghq_LTC_energy_4_4_23': {
      'args': [
        'pghq_LTC_energy_4_4_22',
        'pghq_LTC_energy_4_4_21'
      ],
      'calculation': function() {
	      return toFixed(handlers.convertBTUComplex.apply(this, arguments), 0);
      }
    },
    'pghq_LTC_energy_4_4_29': {
      'args': [
        'pghq_LTC_energy_4_4_28',
        'pghq_LTC_energy_4_4_27'
      ],
      'calculation': function() {
	      return toFixed(handlers.convertBTUComplex.apply(this, arguments), 0);
      }
    },
    'pghq_LTC_energy_4_4_32': {
      'args': [
        'pghq_LTC_energy_4_4_5',
        'pghq_LTC_energy_4_4_11',
        'pghq_LTC_energy_4_4_17',
        'pghq_LTC_energy_4_4_23',
        'pghq_LTC_energy_4_4_29'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 0);
      }
    },
    'pghq_LTC_energy_4_4_33': {
      'args': [
        'pghq_LTC_energy_4_4_6',
        'pghq_LTC_energy_4_4_12',
        'pghq_LTC_energy_4_4_18',
        'pghq_LTC_energy_4_4_24',
        'pghq_LTC_energy_4_4_30'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 0);
      }
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
      'calculation': function() {
	      return toFixed(handlers.convertGallonsAndDivide.apply(this, arguments), 0);
      }
    },
    'pghq_LTC_water_1_8': {
      'args': [
        'pghq_LTC_water_1_5_1_14',
        'pghq_LTC_water_1_5_1_13',
        'pghq_LTC_water_1_8_0'
      ],
      'calculation': function() {
	      return toFixed(handlers.convertGallonsAndDivide.apply(this, arguments), 0);
      }
    },
    'pghq_LTC_water_1_9': {
      'args': [
        'pghq_LTC_water_1_5_1_14',
        'pghq_LTC_water_1_5_1_13',
        'pghq_LTC_water_1_9_0'
      ],
      'calculation': function() {
	      return toFixed(handlers.convertGallonsAndDivide.apply(this, arguments), 0);
      }
    },
    'pghq_LTC_water_1_11': {
      'args': [
        'pghq_LTC_water_1_5_1_14', // Units 1
        'pghq_LTC_water_1_5_1_13', // Amount 1
        'pghq_LTC_water_1_5_1_1', // Divisor 1
        'pghq_LTC_water_1_5_1_16', // Units 2
        'pghq_LTC_water_1_5_1_15', // Amount 2
        'pghq_LTC_water_1_5_1_3' // Divisor 2
      ],
      'calculation': function (a, b, c, d, e, f) {
      	return toFixed((handlers.convertGallonsAndDivide(a, b, c) / handlers.convertGallonsAndDivide(d, e, f)) * 100, 1);
      }
    },
    'pghq_LTC_water_1_12': {
      'args': [
        'pghq_LTC_water_1_5_1_14',
        'pghq_LTC_water_1_5_1_13',
        'pghq_LTC_water_1_5_1_7'
      ],
      'calculation': function() {
	      return toFixed(handlers.convertGallonsAndDivide.apply(this, arguments), 1);
      }
    },
    'pghq_LTC_water_2_1tB_3': {
      'args': [
        'pghq_LTC_water_2_1tB_1',
        'pghq_LTC_water_2_1tB_7'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_LTC_water_2_1tB_6': {
      'args': [
        'pghq_LTC_water_2_1tB_4',
        'pghq_LTC_water_2_1tB_7'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_LTC_water_2_1tB_7': {
      'args': [
        'pghq_LTC_water_2_1tB_1',
        'pghq_LTC_water_2_1tB_4'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 2);
      }
    },
    'pghq_LTC_water_2_3_tC_4': {
      'args': [
        'pghq_LTC_water_2_3_tC_3', // Units 1
        'pghq_LTC_water_2_3_tC_2', // Meter Amount
        'pghq_LTC_water_1_5_1_15' // Annual Amount
      ],
      'calculation': function (a, b, c) {
      	return toFixed (handlers.convertGallons(a, b) / c, 1);
      }
    },
    'pghq_LTC_water_2_3_tC_8': {
      'args': [
        'pghq_LTC_water_2_3_tC_7', // Units
        'pghq_LTC_water_2_3_tC_6', // Meter Amount
        'pghq_LTC_water_1_5_1_15', // Annual Amount
      ],
      'calculation': function (a, b, c) {
      	return toFixed (handlers.convertGallons(a, b) / c, 1);
      }
    },
    'pghq_LTC_water_2_3_tC_12': {
      'args': [
        'pghq_LTC_water_2_3_tC_11', // Units
        'pghq_LTC_water_2_3_tC_10', // Meter Amount
        'pghq_LTC_water_1_5_1_15', // Annual Amount
      ],
      'calculation': function (a, b, c) {
      	return toFixed (handlers.convertGallons(a, b) / c, 1);
      }
    },
    'pghq_LTC_water_2_3_tC_16': {
      'args': [
        'pghq_LTC_water_2_3_tC_15', // Units
        'pghq_LTC_water_2_3_tC_14', // Meter Amount
        'pghq_LTC_water_1_5_1_15', // Annual Amount
      ],
      'calculation': function (a, b, c) {
      	return toFixed (handlers.convertGallons(a, b) / c, 1);
      }
    },
    'pghq_LTC_water_2_3_tC_20': {
      'args': [
        'pghq_LTC_water_2_3_tC_19', // Units
        'pghq_LTC_water_2_3_tC_18', // Meter Amount
        'pghq_LTC_water_1_5_1_15', // Annual Amount
      ],
      'calculation': function (a, b, c) {
      	return toFixed (handlers.convertGallons(a, b) / c, 1);
      }
    },
    'pghq_LTC_water_2_3_tC_24': {
      'args': [
        'pghq_LTC_water_2_3_tC_23', // Units
        'pghq_LTC_water_2_3_tC_22', // Meter Amount
        'pghq_LTC_water_1_5_1_15', // Annual Amount
      ],
      'calculation': function (a, b, c) {
      	return toFixed (handlers.convertGallons(a, b) / c, 1);
      }
    },
    'pghq_LTC_water_2_3_tC_28': {
      'args': [
        'pghq_LTC_water_2_3_tC_27', // Units
        'pghq_LTC_water_2_3_tC_26', // Meter Amount
        'pghq_LTC_water_1_5_1_15', // Annual Amount
      ],
      'calculation': function (a, b, c) {
      	return toFixed (handlers.convertGallons(a, b) / c, 1);
      }
    },
    'pghq_LTC_water_2_3_tC_32': {
      'args': [
        'pghq_LTC_water_2_3_tC_31', // Units
        'pghq_LTC_water_2_3_tC_30', // Meter Amount
        'pghq_LTC_water_1_5_1_15', // Annual Amount
      ],
      'calculation': function (a, b, c) {
      	return toFixed (handlers.convertGallons(a, b) / c, 1);
      }
    },
    'pghq_LTC_water_2_3_tC_36': {
      'args': [
        'pghq_LTC_water_2_3_tC_35', // Units
        'pghq_LTC_water_2_3_tC_34', // Meter Amount
        'pghq_LTC_water_1_5_1_15', // Annual Amount
      ],
      'calculation': function (a, b, c) {
      	return toFixed (handlers.convertGallons(a, b) / c, 1);
      }
    },
    'pghq_LTC_water_2_3_tC_40': {
      'args': [
        'pghq_LTC_water_2_3_tC_39', // Units
        'pghq_LTC_water_2_3_tC_38', // Meter Amount
        'pghq_LTC_water_1_5_1_15', // Annual Amount
      ],
      'calculation': function (a, b, c) {
      	return toFixed (handlers.convertGallons(a, b) / c, 1);
      }
    },
    'pghq_LTC_water_2_5': {
      'args': [
        'pghq_LTC_water_1_5_1_14',
        'pghq_LTC_water_1_5_1_13',
        'pghq_LTC_water_2_4_1'
      ],
      'calculation': function() {
	      return toFixed(handlers.convertGallonsAndDivide.apply(this, arguments), 2);
      }
    },
    'pghq_LTC_water_3_1tE_21': {
      'args': [
        'pghq_LTC_water_3_1tE_3',
        'pghq_LTC_water_3_1tE_7',
        'pghq_LTC_water_3_1tE_11',
        'pghq_LTC_water_3_1tE_15',
        'pghq_LTC_water_3_1tE_19'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 0);
      }
    },
    'pghq_LTC_water_3_1tE_22': {
      'args': [
        'pghq_LTC_water_3_1tE_4',
        'pghq_LTC_water_3_1tE_8',
        'pghq_LTC_water_3_1tE_12',
        'pghq_LTC_water_3_1tE_16',
        'pghq_LTC_water_3_1tE_20'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 0);
      }
    },

    //
    // LTC Climate formulas
    //
    'pghq_LTC_climate_1_5_25': {
      'args': [
        'pghq_LTC_climate_1_5_1',
        'pghq_LTC_climate_1_5_2',
        'pghq_LTC_climate_1_5_3',
        'pghq_LTC_climate_1_5_4',
        'pghq_LTC_climate_1_5_5',
        'pghq_LTC_climate_1_5_6',
        'pghq_LTC_climate_1_5_7',
        'pghq_LTC_climate_1_5_7_1',
        'pghq_LTC_climate_1_5_9',
        'pghq_LTC_climate_1_5_10',
        'pghq_LTC_climate_1_5_11',
        'pghq_LTC_climate_1_5_12',
        'pghq_LTC_climate_1_5_13',
        'pghq_LTC_climate_1_5_14',
        'pghq_LTC_climate_1_5_16',
        'pghq_LTC_climate_1_5_17',
        'pghq_LTC_climate_1_5_18',
        'pghq_LTC_climate_1_5_19',
        'pghq_LTC_climate_1_5_20',
        'pghq_LTC_climate_1_5_21',
        'pghq_LTC_climate_1_5_22',
        'pghq_LTC_climate_1_5_24'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 0);
      }
    },
    'pghq_LTC_climate_3_2_6_21': {
      'args': [
        'pghq_LTC_climate_3_2_6_3',
        'pghq_LTC_climate_3_2_6_7',
        'pghq_LTC_climate_3_2_6_11',
        'pghq_LTC_climate_3_2_6_15',
        'pghq_LTC_climate_3_2_6_19'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 0);
      }
    },
    'pghq_LTC_climate_3_2_6_22': {
      'args': [
        'pghq_LTC_climate_3_2_6_4',
        'pghq_LTC_climate_3_2_6_8',
        'pghq_LTC_climate_3_2_6_12',
        'pghq_LTC_climate_3_2_6_16',
        'pghq_LTC_climate_3_2_6_20'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 0);
      }
    },

    //
    // LTC Green Building formulas
    //
    'pghq_LTC_greenbuilding_4_2_tC_3': {
      'args': [
        'pghq_LTC_greenbuilding_4_2_tC_1',
        'pghq_LTC_greenbuilding_4_2_tC_7'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
	  'pghq_LTC_greenbuilding_4_2_tC_6': {
      'args': [
        'pghq_LTC_greenbuilding_4_2_tC_4',
        'pghq_LTC_greenbuilding_4_2_tC_7'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_LTC_greenbuilding_4_2_tC_7': {
      'args': [
        'pghq_LTC_greenbuilding_4_2_tC_1',
        'pghq_LTC_greenbuilding_4_2_tC_4'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 2);
      }
    },
    'pghq_LTC_greenbuilding_4_2_tC_8': {
      'args': [
        'pghq_LTC_greenbuilding_4_2_tC_2',
        'pghq_LTC_greenbuilding_4_2_tC_5'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 2);
      }
    },

    //
    // LTC Appendix A formulas
    //
    'pghq_LTC_appendixa_1_8t_2': {
      'args': [
        'pghq_LTC_appendixa_1_7_1t_1', // amount 1
        'pghq_LTC_appendixa_1_7_2t_2', // amount 2
        'pghq_LTC_appendixa_1_7_3t_1', // amount 3
        'pghq_LTC_appendixa_1_7_4t_1', // amount 4
        'pghq_LTC_appendixa_1_7_5t_1', // amount 5
        'pghq_LTC_appendixa_1_7_6t_1', // amount 6
        'pghq_LTC_appendixa_1_7_7t_2', // amount 7
        'pghq_LTC_appendixa_1_7_8t_2', // amount 8
        'pghq_LTC_appendixa_1_7_9t_1', // amount 9
        'pghq_LTC_appendixa_1_7_10t_1', // amount 10
        'pghq_LTC_appendixa_1_7_11t_1', // amount 11
        'pghq_LTC_appendixa_1_7_12t_1', // amount 12
        'pghq_LTC_appendixa_1_7_12t_2', // units 12
        'pghq_LTC_appendixa_1_7_13t_1', // amount 13
        'pghq_LTC_appendixa_1_7_13t_2', // units 13
        'pghq_LTC_appendixa_1_7_14t_2', // amount 14
        'pghq_LTC_appendixa_1_7_15t_1', // amount 15
        'pghq_LTC_appendixa_1_7_16t_1', // amount 16
        'pghq_LTC_appendixa_1_7_17t_1', // amount 17
        'pghq_LTC_appendixa_1_7_18t_1', // amount 18
        'pghq_LTC_appendixa_1_7_19t_1', // amount 19
        'pghq_LTC_appendixa_1_7_20t_1', // amount 20
        'pghq_LTC_appendixa_1_7_21t_1', // amount 21
        'pghq_LTC_appendixa_1_7_22t_1', // amount 22
        'pghq_LTC_appendixa_1_7_23t_1', // amount 23
        'pghq_LTC_appendixa_1_7_24t_1', // amount 24
        'pghq_LTC_appendixa_1_7_25t_1', // amount 25
        'pghq_LTC_appendixa_1_7_26t_1', // amount 26
        'pghq_LTC_appendixa_1_7_27t_1', // amount 27
        'pghq_LTC_appendixa_1_7_28t_1', // amount 28
        'pghq_LTC_appendixa_1_7_29t_1', // amount 29
        'pghq_LTC_appendixa_1_7_30t_1', // amount 30
        'pghq_LTC_appendixa_1_7_30t_2', // units 30
        'pghq_LTC_appendixa_1_7_31t_1', // amount 31
        'pghq_LTC_appendixa_1_7_31t_2' // units 31
      ],
      'calculation': function (amount1, amount2, amount3, amount4, amount5, amount6, amount7, amount8, amount9, amount10, amount11, amount12, units12, amount13, units13, amount14, amount15, amount16, amount17, amount18, amount19, amount20, amount21, amount22, amount23, amount24, amount25, amount26, amount27, amount28, amount29, amount30, units30, amount31, units31) {
      	var converted12 = 0;
      	var converted13 = 0;
      	var converted30 = 0;
      	var converted31 = 0;
      	if (units12 === 'Gallons') {
      		converted12 = amount12 * 0.004;
      	} else {
      		converted12 = amount12;
      	}
      	if (units13 === 'Gallons') {
      		converted13 = amount13 * 0.004;
      	} else {
      		converted13 = amount13;
      	}
      	if (units30 === 'Gallons') {
      		converted30 = amount30 * 0.004;
      	} else {
      		converted30 = amount30;
      	}
      	if (units31 === 'Gallons') {
      		converted31 = amount31 * 0.004;
      	} else {
      		converted31 = amount31;
      	}
 
        var values = [
          amount1,
          amount2,
          amount3,
          amount4,
          amount5,
          amount6,
          amount7,
          amount8,
          amount9,
          amount10,
          amount11,
          converted12,
          converted13,
          amount14,
          amount15,
          amount16,
          amount17,
          amount18,
          amount19,
          amount20,
          amount21,
          amount22,
          amount23,
          amount24,
          amount25,
          amount26,
          amount27,
          amount28,
          amount29,
          converted30,
          converted31
        ];
 
        var sum = 0;
        for (var index = 0; index < values.length; index++) {
          if (!isNaN(values[index])) {
            sum += values[index];
          }
        }
 
      	return toFixed(sum, 2);
      }
    },
    'pghq_LTC_appendixa_1_8t_1': {
      'args': [
        'pghq_LTC_appendixa_1_7_1t_2', // cost 1
        'pghq_LTC_appendixa_1_7_2t_3', // cost 2
        'pghq_LTC_appendixa_1_7_3t_2', // cost 3
        'pghq_LTC_appendixa_1_7_4t_2', // cost 4
        'pghq_LTC_appendixa_1_7_5t_2', // cost 5
        'pghq_LTC_appendixa_1_7_6t_2', // cost 6
        'pghq_LTC_appendixa_1_7_7t_3', // cost 7
        'pghq_LTC_appendixa_1_7_8t_3', // cost 8
        'pghq_LTC_appendixa_1_7_9t_2', // cost 9
        'pghq_LTC_appendixa_1_7_10t_2', // cost 10
        'pghq_LTC_appendixa_1_7_11t_2', // cost 11
        'pghq_LTC_appendixa_1_7_12t_3', // cost 12
        'pghq_LTC_appendixa_1_7_13t_3', // cost 13
        'pghq_LTC_appendixa_1_7_14t_3', // cost 14
        'pghq_LTC_appendixa_1_7_15t_2', // cost 15
        'pghq_LTC_appendixa_1_7_16t_2', // cost 16
        'pghq_LTC_appendixa_1_7_17t_2', // cost 17
        'pghq_LTC_appendixa_1_7_18t_2', // cost 18
        'pghq_LTC_appendixa_1_7_19t_2', // cost 19
        'pghq_LTC_appendixa_1_7_20t_2', // cost 20
        'pghq_LTC_appendixa_1_7_21t_2', // cost 21
        'pghq_LTC_appendixa_1_7_22t_2', // cost 22
        'pghq_LTC_appendixa_1_7_23t_2', // cost 23
        'pghq_LTC_appendixa_1_7_24t_2', // cost 24
        'pghq_LTC_appendixa_1_7_25t_2', // cost 25
        'pghq_LTC_appendixa_1_7_26t_2', // cost 26
        'pghq_LTC_appendixa_1_7_27t_2', // cost 27
        'pghq_LTC_appendixa_1_7_28t_2', // cost 28
        'pghq_LTC_appendixa_1_7_29t_2', // cost 29
        'pghq_LTC_appendixa_1_7_30t_3', // cost 30
        'pghq_LTC_appendixa_1_7_31t_3', // cost 31
      ],
      'calculation': function (cost1, cost2, cost3, cost4, cost5, cost6, cost7, cost8, cost9, cost10, cost11, cost12, cost13, cost14, cost15, cost16, cost17, cost18, cost19, cost20, cost21, cost22, cost23, cost24, cost25, cost26, cost27, cost28, cost29, cost30, cost31) {
 
        var values = [
          cost1,
          cost2,
          cost3,
          cost4,
          cost5,
          cost6,
          cost7,
          cost8,
          cost9,
          cost10,
          cost11,
          cost12,
          cost13,
          cost14,
          cost15,
          cost16,
          cost17,
          cost18,
          cost19,
          cost20,
          cost21,
          cost22,
          cost23,
          cost24,
          cost25,
          cost26,
          cost27,
          cost28,
          cost29,
          cost30,
          cost31
        ];
 
        var sum = 0;
        for (var index = 0; index < values.length; index++) {
          if (!isNaN(values[index])) {
            sum += values[index];
          }
        }
 
      	return toFixed(sum, 0);
      }
    },
    'pghq_LTC_appendixa_1_9t_1': {
      'args': [
        'pghq_LTC_appendixa_1_7_1t_1', // amount 1
        'pghq_LTC_appendixa_1_7_3t_1', // amount 3
        'pghq_LTC_appendixa_1_7_4t_1', // amount 4
        'pghq_LTC_appendixa_1_7_5t_1', // amount 5
        'pghq_LTC_appendixa_1_7_6t_1', // amount 6
        'pghq_LTC_appendixa_1_7_9t_1', // amount 9
        'pghq_LTC_appendixa_1_7_10t_1', // amount 10
        'pghq_LTC_appendixa_1_7_11t_1', // amount 11
        'pghq_LTC_appendixa_1_7_12t_1', // amount 12
        'pghq_LTC_appendixa_1_7_12t_2', // units 12
        'pghq_LTC_appendixa_1_7_13t_1', // amount 13
        'pghq_LTC_appendixa_1_7_13t_2', // units 13
        'pghq_LTC_appendixa_1_7_15t_1', // amount 15
        'pghq_LTC_appendixa_1_7_16t_1', // amount 16
        'pghq_LTC_appendixa_1_7_17t_1', // amount 17
        'pghq_LTC_appendixa_1_7_18t_1', // amount 18
        'pghq_LTC_appendixa_1_7_19t_1', // amount 19
        'pghq_LTC_appendixa_1_7_20t_1', // amount 20
        'pghq_LTC_appendixa_1_7_21t_1', // amount 21
        'pghq_LTC_appendixa_1_7_22t_1', // amount 22
        'pghq_LTC_appendixa_1_7_23t_1', // amount 23
        'pghq_LTC_appendixa_1_7_24t_1', // amount 24
        'pghq_LTC_appendixa_1_7_25t_1', // amount 25
        'pghq_LTC_appendixa_1_7_26t_1', // amount 26
        'pghq_LTC_appendixa_1_7_27t_1', // amount 27
        'pghq_LTC_appendixa_1_7_28t_1', // amount 28
        'pghq_LTC_appendixa_1_7_29t_1' // amount 29
      ],
      'calculation': function (amount1, amount3, amount4, amount5, amount6, amount9, amount10, amount11, amount12, units12, amount13, units13, amount15, amount16, amount17, amount18, amount19, amount20, amount21, amount22, amount23, amount24, amount25, amount26, amount27, amount28, amount29) {

      	var converted12 = 0;
      	var converted13 = 0;

      	if (units12 === 'Gallons') {
      		converted12 = amount12 * 0.004;
      	} else {
      		converted12 = amount12;
      	}
      	if (units13 === 'Gallons') {
      		converted13 = amount13 * 0.004;
      	} else {
      		converted13 = amount13;
      	}
 
        var values = [
          amount1,
          amount3,
          amount4,
          amount5,
          amount6,
          amount9,
          amount10,
          amount11,
          converted12,
          converted13,
          amount15,
          amount16,
          amount17,
          amount18,
          amount19,
          amount20,
          amount21,
          amount22,
          amount23,
          amount24,
          amount25,
          amount26,
          amount27,
          amount28,
          amount29
        ];
 
        var sum = 0;
        for (var index = 0; index < values.length; index++) {
          if (!isNaN(values[index])) {
            sum += values[index];
          }
        }
 
      	return toFixed(sum, 2);
      }
    },
    'pghq_LTC_appendixa_1_9t_2': {
      'args': [
        'pghq_LTC_appendixa_1_7_1t_2', // cost 1
        'pghq_LTC_appendixa_1_7_3t_2', // cost 3
        'pghq_LTC_appendixa_1_7_4t_2', // cost 4
        'pghq_LTC_appendixa_1_7_5t_2', // cost 5
        'pghq_LTC_appendixa_1_7_6t_2', // cost 6
        'pghq_LTC_appendixa_1_7_9t_2', // cost 9
        'pghq_LTC_appendixa_1_7_10t_2', // cost 10
        'pghq_LTC_appendixa_1_7_11t_2', // cost 11
        'pghq_LTC_appendixa_1_7_12t_3', // cost 12
        'pghq_LTC_appendixa_1_7_13t_3', // cost 13
        'pghq_LTC_appendixa_1_7_15t_2', // cost 15
        'pghq_LTC_appendixa_1_7_16t_2', // cost 16
        'pghq_LTC_appendixa_1_7_17t_2', // cost 17
        'pghq_LTC_appendixa_1_7_18t_2', // cost 18
        'pghq_LTC_appendixa_1_7_19t_2', // cost 19
        'pghq_LTC_appendixa_1_7_20t_2', // cost 20
        'pghq_LTC_appendixa_1_7_21t_2', // cost 21
        'pghq_LTC_appendixa_1_7_22t_2', // cost 22
        'pghq_LTC_appendixa_1_7_23t_2', // cost 23
        'pghq_LTC_appendixa_1_7_24t_2', // cost 24
        'pghq_LTC_appendixa_1_7_25t_2', // cost 25
        'pghq_LTC_appendixa_1_7_26t_2', // cost 26
        'pghq_LTC_appendixa_1_7_27t_2', // cost 27
        'pghq_LTC_appendixa_1_7_28t_2', // cost 28
        'pghq_LTC_appendixa_1_7_29t_2' // cost 29
      ],
      'calculation': function (cost1, cost3, cost4, cost5, cost6, cost9, cost10, cost11, cost12, cost13, cost15, cost16, cost17, cost18, cost19, cost20, cost21, cost22, cost23, cost24, cost25, cost26, cost27, cost28, cost29) {
 
        var values = [
          cost1,
          cost3,
          cost4,
          cost5,
          cost6,
          cost9,
          cost10,
          cost11,
          cost12,
          cost13,
          cost15,
          cost16,
          cost17,
          cost18,
          cost19,
          cost20,
          cost21,
          cost22,
          cost23,
          cost24,
          cost25,
          cost26,
          cost27,
          cost28,
          cost29
        ];
 
        var sum = 0;
        for (var index = 0; index < values.length; index++) {
          if (!isNaN(values[index])) {
            sum += values[index];
          }
        }
 
      	return toFixed(sum, 0);
      }
    },
    'pghq_LTC_appendixa_1_10t_1': {
      'args': [
        'pghq_LTC_appendixa_1_7_2t_2', // amount 2
        'pghq_LTC_appendixa_1_7_7t_2', // amount 7
        'pghq_LTC_appendixa_1_7_8t_2', // amount 8
        'pghq_LTC_appendixa_1_7_14t_2', // amount 14
        'pghq_LTC_appendixa_1_7_30t_1', // amount 30
        'pghq_LTC_appendixa_1_7_30t_2', // units 30
        'pghq_LTC_appendixa_1_7_31t_1', // amount 31
        'pghq_LTC_appendixa_1_7_31t_2' // units 31
      ],
      'calculation': function (amount2, amount7, amount8, amount14, amount30, units30, amount31, units31) {

      	var converted30 = 0;
      	var converted31 = 0;

      	if (units30 === 'Gallons') {
      		converted30 = amount30 * 0.004;
      	} else {
      		converted30 = amount30;
      	}
      	if (units31 === 'Gallons') {
      		converted31 = amount31 * 0.004;
      	} else {
      		converted31 = amount31;
      	}
 
        var values = [
          amount2,
          amount7,
          amount8,
          amount14,
          converted30,
          converted31
        ];
 
        var sum = 0;
        for (var index = 0; index < values.length; index++) {
          if (!isNaN(values[index])) {
            sum += values[index];
          }
        }
 
      	return toFixed(sum, 2);
      }
    },
    'pghq_LTC_appendixa_1_10t_2': {
      'args': [
        'pghq_LTC_appendixa_1_7_2t_3', // cost 2
        'pghq_LTC_appendixa_1_7_7t_3', // cost 7
        'pghq_LTC_appendixa_1_7_8t_3', // cost 8
        'pghq_LTC_appendixa_1_7_14t_3', // cost 14
        'pghq_LTC_appendixa_1_7_30t_3', // cost 30
        'pghq_LTC_appendixa_1_7_31t_3', // cost 31
      ],
      'calculation': function (cost2, cost7, cost8, cost14, cost30, cost31) {
 
        var values = [
          cost2,
          cost7,
          cost8,
          cost14,
          cost30,
          cost31
        ];
 
        var sum = 0;
        for (var index = 0; index < values.length; index++) {
          if (!isNaN(values[index])) {
            sum += values[index];
          }
        }
 
      	return toFixed(sum, 0);
      }
    },

    //
    // CHCPR Waste formulas
    //
    'pghq_CHCPR_waste_4_8_tB_9': {
      'args': [
        'pghq_CHCPR_waste_4_8_tB_1',
        'pghq_CHCPR_waste_4_8_tB_5'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 2);
      }
    },
    'pghq_CHCPR_waste_4_8_tB_10': {
      'args': [
        'pghq_CHCPR_waste_4_8_tB_2',
        'pghq_CHCPR_waste_4_8_tB_6'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 0);
      }
    },
    'pghq_CHCPR_waste_4_8_tB_11': {
      'args': [
        'pghq_CHCPR_waste_4_8_tB_3',
        'pghq_CHCPR_waste_4_8_tB_7'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 2);
      }
    },
    'pghq_CHCPR_waste_4_8_tB_12': {
      'args': [
        'pghq_CHCPR_waste_4_8_tB_4',
        'pghq_CHCPR_waste_4_8_tB_8'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 0);
      }
    },
    'pghq_CHCPR_waste_6_2_14': {
      'args': [
        'pghq_CHCPR_waste_6_2_1',
        'pghq_CHCPR_waste_6_2_6',
        'pghq_CHCPR_waste_6_2_10'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 2);
      }
    },
    'pghq_CHCPR_waste_6_2_15': {
      'args': [
        'pghq_CHCPR_waste_6_2_2',
        'pghq_CHCPR_waste_6_2_7',
        'pghq_CHCPR_waste_6_2_11'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 0);
      }
    },
    'pghq_CHCPR_waste_6_2_16': {
      'args': [
        'pghq_CHCPR_waste_6_2_3',
        'pghq_CHCPR_waste_6_2_8',
        'pghq_CHCPR_waste_6_2_12'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 2);
      }
    },
    'pghq_CHCPR_waste_6_2_17': {
      'args': [
        'pghq_CHCPR_waste_6_2_4',
        'pghq_CHCPR_waste_6_2_9',
        'pghq_CHCPR_waste_6_2_13'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 0);
      }
    },
    'pghq_CHCPR_waste_6_3_5': {
      'args': [
        'pghq_CHCPR_waste_6_2_16',
        'pghq_CHCPR_waste_6_3_5_0'
      ],
      'calculation': function (a, b) {
        return toFixed ((a * 2000 / b), 2);
      }
    },
    'pghq_CHCPR_waste_8_10_1tE_9': {
      'args': [
        'pghq_CHCPR_waste_8_10_1tE_1',
        'pghq_CHCPR_waste_8_10_1tE_5'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 2);
      }
    },
    'pghq_CHCPR_waste_8_10_1tE_10': {
      'args': [
        'pghq_CHCPR_waste_8_10_1tE_2',
        'pghq_CHCPR_waste_8_10_1tE_6'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 0);
      }
    },
    'pghq_CHCPR_waste_8_10_1tE_11': {
      'args': [
        'pghq_CHCPR_waste_8_10_1tE_3',
        'pghq_CHCPR_waste_8_10_1tE_7'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 2);
      }
    },
    'pghq_CHCPR_waste_8_10_1tE_12': {
      'args': [
        'pghq_CHCPR_waste_8_10_1tE_4',
        'pghq_CHCPR_waste_8_10_1tE_8'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 0);
      }
    },
    'pghq_CHCPR_waste_10_1_tG_1': {
      'args': [
        'pghq_CHCPR_waste_2_3_tA_2',
        'pghq_CHCPR_waste_4_8_tB_9',
        'pghq_CHCPR_waste_6_2_14',
        'pghq_CHCPR_waste_8_10_1tE_9'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 2);
      }
    },
    'pghq_CHCPR_waste_10_1_tG_2': {
      'args': [
        'pghq_CHCPR_waste_2_3_tA_4',
        'pghq_CHCPR_waste_4_8_tB_10',
        'pghq_CHCPR_waste_6_2_15',
        'pghq_CHCPR_waste_8_10_1tE_10'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 0);
      }
    },
    'pghq_CHCPR_waste_10_1_tG_3': {
      'args': [
        'pghq_CHCPR_waste_2_3_tA_3',
        'pghq_CHCPR_waste_4_8_tB_11',
        'pghq_CHCPR_waste_6_2_16',
        'pghq_CHCPR_waste_8_10_1tE_11'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 2);
      }
    },
    'pghq_CHCPR_waste_10_1_tG_4': {
      'args': [
        'pghq_CHCPR_waste_2_3_tA_5',
        'pghq_CHCPR_waste_4_8_tB_12',
        'pghq_CHCPR_waste_6_2_17',
        'pghq_CHCPR_waste_8_10_1tE_12'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 0);
      }
    },
    'pghq_CHCPR_waste_10_1_tH_1': {
      'args': [
        'pghq_CHCPR_waste_2_3_tA_2',
        'pghq_CHCPR_waste_10_1_tG_1'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_CHCPR_waste_10_1_tH_2': {
      'args': [
        'pghq_CHCPR_waste_2_3_tA_4',
        'pghq_CHCPR_waste_10_1_tG_2'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_CHCPR_waste_10_1_tH_3': {
      'args': [
        'pghq_CHCPR_waste_2_3_tA_3',
        'pghq_CHCPR_waste_10_1_tG_3'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_CHCPR_waste_10_1_tH_4': {
      'args': [
        'pghq_CHCPR_waste_2_3_tA_5',
        'pghq_CHCPR_waste_10_1_tG_4'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_CHCPR_waste_10_1_tH_5': {
      'args': [
        'pghq_CHCPR_waste_4_8_tB_9',
        'pghq_CHCPR_waste_10_1_tG_1'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_CHCPR_waste_10_1_tH_6': {
      'args': [
        'pghq_CHCPR_waste_4_8_tB_10',
        'pghq_CHCPR_waste_10_1_tG_2'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_CHCPR_waste_10_1_tH_7': {
      'args': [
        'pghq_CHCPR_waste_4_8_tB_11',
        'pghq_CHCPR_waste_10_1_tG_3'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_CHCPR_waste_10_1_tH_8': {
      'args': [
        'pghq_CHCPR_waste_4_8_tB_12',
        'pghq_CHCPR_waste_10_1_tG_4'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_CHCPR_waste_10_1_tH_9': {
      'args': [
        'pghq_CHCPR_waste_6_2_14',
        'pghq_CHCPR_waste_10_1_tG_1'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_CHCPR_waste_10_1_tH_10': {
      'args': [
        'pghq_CHCPR_waste_6_2_15',
        'pghq_CHCPR_waste_10_1_tG_2'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_CHCPR_waste_10_1_tH_11': {
      'args': [
        'pghq_CHCPR_waste_6_2_16',
        'pghq_CHCPR_waste_10_1_tG_3'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_CHCPR_waste_10_1_tH_12': {
      'args': [
        'pghq_CHCPR_waste_6_2_17',
        'pghq_CHCPR_waste_10_1_tG_4'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_CHCPR_waste_10_1_tH_13': {
      'args': [
        'pghq_CHCPR_waste_8_10_1tE_9',
        'pghq_CHCPR_waste_10_1_tG_1'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_CHCPR_waste_10_1_tH_14': {
      'args': [
        'pghq_CHCPR_waste_8_10_1tE_10',
        'pghq_CHCPR_waste_10_1_tG_2'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_CHCPR_waste_10_1_tH_15': {
      'args': [
        'pghq_CHCPR_waste_8_10_1tE_11',
        'pghq_CHCPR_waste_10_1_tG_3'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_CHCPR_waste_10_1_tH_16': {
      'args': [
        'pghq_CHCPR_waste_8_10_1tE_12',
        'pghq_CHCPR_waste_10_1_tG_4'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },

    //
    // CHCPR Energy
    //
    'pghq_CHCPR_energy_4_4_32': {
      'args': [
        'pghq_CHCPR_energy_4_4_5',
        'pghq_CHCPR_energy_4_4_11',
        'pghq_CHCPR_energy_4_4_17',
        'pghq_CHCPR_energy_4_4_23',
        'pghq_CHCPR_energy_4_4_29'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 0);
      }
    },
    'pghq_CHCPR_energy_4_4_33': {
      'args': [
        'pghq_CHCPR_energy_4_4_6',
        'pghq_CHCPR_energy_4_4_12',
        'pghq_CHCPR_energy_4_4_18',
        'pghq_CHCPR_energy_4_4_24',
        'pghq_CHCPR_energy_4_4_30'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 0);
      }
    },

    //
    // CHCPR Water formulas
    //
    'pghq_CHCPR_water_1_7': {
      'args': [
        'pghq_CHCPR_water_1_5_1_14',
        'pghq_CHCPR_water_1_5_1_13',
        'pghq_CHCPR_water_1_5_1_1'
      ],
      'calculation': function() {
	      return toFixed(handlers.convertGallonsAndDivide.apply(this, arguments), 0);
      }
    },
    'pghq_CHCPR_water_1_8': {
      'args': [
        'pghq_CHCPR_water_1_5_1_14',
        'pghq_CHCPR_water_1_5_1_13',
        'pghq_CHCPR_water_1_8_0'
      ],
      'calculation': function() {
	      return toFixed(handlers.convertGallonsAndDivide.apply(this, arguments), 0);
      }
    },
    'pghq_CHCPR_water_1_9': {
      'args': [
        'pghq_CHCPR_water_1_5_1_14',
        'pghq_CHCPR_water_1_5_1_13',
        'pghq_CHCPR_water_1_9_0'
      ],
      'calculation': function() {
	      return toFixed(handlers.convertGallonsAndDivide.apply(this, arguments), 0);
      }
    },
    'pghq_CHCPR_water_3_1tB_21': {
      'args': [
        'pghq_CHCPR_water_3_1tB_3',
        'pghq_CHCPR_water_3_1tB_7',
        'pghq_CHCPR_water_3_1tB_11',
        'pghq_CHCPR_water_3_1tB_15',
        'pghq_CHCPR_water_3_1tB_19'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 0);
      }
    },
    'pghq_CHCPR_water_3_1tB_22': {
      'args': [
        'pghq_CHCPR_water_3_1tB_4',
        'pghq_CHCPR_water_3_1tB_8',
        'pghq_CHCPR_water_3_1tB_12',
        'pghq_CHCPR_water_3_1tB_16',
        'pghq_CHCPR_water_3_1tB_20'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 0);
      }
    },

    //
    // CHCPR Green Building formulas
    //
    'pghq_CHCPR_greenbuilding_4_2_t_3': {
      'args': [
        'pghq_CHCPR_greenbuilding_4_2_t_1',
        'pghq_CHCPR_greenbuilding_4_2_t_7'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
	  'pghq_CHCPR_greenbuilding_4_2_t_6': {
      'args': [
        'pghq_CHCPR_greenbuilding_4_2_t_4',
        'pghq_CHCPR_greenbuilding_4_2_t_7'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_CHCPR_greenbuilding_4_2_t_7': {
      'args': [
        'pghq_CHCPR_greenbuilding_4_2_t_1',
        'pghq_CHCPR_greenbuilding_4_2_t_4'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 2);
      }
    },
    'pghq_CHCPR_greenbuilding_4_2_t_8': {
      'args': [
        'pghq_CHCPR_greenbuilding_4_2_t_2',
        'pghq_CHCPR_greenbuilding_4_2_t_5'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 2);
      }
    },

    //
    // CHCPR Appendix A formulas
    //
    'pghq_CHCPR_appendixa_1_8t_1': {
      'args': [
        'pghq_CHCPR_appendixa_1_7_1t_1', // amount 1
        'pghq_CHCPR_appendixa_1_7_2t_2', // amount 2
        'pghq_CHCPR_appendixa_1_7_3t_1', // amount 3
        'pghq_CHCPR_appendixa_1_7_4t_1', // amount 4
        'pghq_CHCPR_appendixa_1_7_5t_1', // amount 5
        'pghq_CHCPR_appendixa_1_7_6t_1', // amount 6
        'pghq_CHCPR_appendixa_1_7_7t_2', // amount 7
        'pghq_CHCPR_appendixa_1_7_8t_2', // amount 8
        'pghq_CHCPR_appendixa_1_7_9t_1', // amount 9
        'pghq_CHCPR_appendixa_1_7_10t_1', // amount 10
        'pghq_CHCPR_appendixa_1_7_11t_1', // amount 11
        'pghq_CHCPR_appendixa_1_7_12t_1', // amount 12
        'pghq_CHCPR_appendixa_1_7_12t_2', // units 12
        'pghq_CHCPR_appendixa_1_7_13t_1', // amount 13
        'pghq_CHCPR_appendixa_1_7_13t_2', // units 13
        'pghq_CHCPR_appendixa_1_7_14t_2', // amount 14
        'pghq_CHCPR_appendixa_1_7_15t_1', // amount 15
        'pghq_CHCPR_appendixa_1_7_16t_1', // amount 16
        'pghq_CHCPR_appendixa_1_7_17t_1', // amount 17
        'pghq_CHCPR_appendixa_1_7_18t_1', // amount 18
        'pghq_CHCPR_appendixa_1_7_19t_1', // amount 19
        'pghq_CHCPR_appendixa_1_7_20t_1', // amount 20
        'pghq_CHCPR_appendixa_1_7_21t_1', // amount 21
        'pghq_CHCPR_appendixa_1_7_22t_1', // amount 22
        'pghq_CHCPR_appendixa_1_7_23t_1', // amount 23
        'pghq_CHCPR_appendixa_1_7_24t_1', // amount 24
        'pghq_CHCPR_appendixa_1_7_25t_1', // amount 25
        'pghq_CHCPR_appendixa_1_7_26t_1', // amount 26
        'pghq_CHCPR_appendixa_1_7_27t_1', // amount 27
        'pghq_CHCPR_appendixa_1_7_28t_1', // amount 28
        'pghq_CHCPR_appendixa_1_7_29t_1', // amount 29
        'pghq_CHCPR_appendixa_1_7_30t_1', // amount 30
        'pghq_CHCPR_appendixa_1_7_30t_2', // units 30
        'pghq_CHCPR_appendixa_1_7_31t_1', // amount 31
        'pghq_CHCPR_appendixa_1_7_31t_2' // units 31
      ],
      'calculation': function (amount1, amount2, amount3, amount4, amount5, amount6, amount7, amount8, amount9, amount10, amount11, amount12, units12, amount13, units13, amount14, amount15, amount16, amount17, amount18, amount19, amount20, amount21, amount22, amount23, amount24, amount25, amount26, amount27, amount28, amount29, amount30, units30, amount31, units31) {
      	var converted12 = 0;
      	var converted13 = 0;
      	var converted30 = 0;
      	var converted31 = 0;
      	if (units12 === 'Gallons') {
      		converted12 = amount12 * 0.004;
      	} else {
      		converted12 = amount12;
      	}
      	if (units13 === 'Gallons') {
      		converted13 = amount13 * 0.004;
      	} else {
      		converted13 = amount13;
      	}
      	if (units30 === 'Gallons') {
      		converted30 = amount30 * 0.004;
      	} else {
      		converted30 = amount30;
      	}
      	if (units31 === 'Gallons') {
      		converted31 = amount31 * 0.004;
      	} else {
      		converted31 = amount31;
      	}
 
        var values = [
          amount1,
          amount2,
          amount3,
          amount4,
          amount5,
          amount6,
          amount7,
          amount8,
          amount9,
          amount10,
          amount11,
          converted12,
          converted13,
          amount14,
          amount15,
          amount16,
          amount17,
          amount18,
          amount19,
          amount20,
          amount21,
          amount22,
          amount23,
          amount24,
          amount25,
          amount26,
          amount27,
          amount28,
          amount29,
          converted30,
          converted31
        ];
 
        var sum = 0;
        for (var index = 0; index < values.length; index++) {
          if (!isNaN(values[index])) {
            sum += values[index];
          }
        }
 
      	return toFixed(sum, 2);
      }
    },
    'pghq_CHCPR_appendixa_1_8t_2': {
      'args': [
        'pghq_CHCPR_appendixa_1_7_1t_2', // cost 1
        'pghq_CHCPR_appendixa_1_7_2t_3', // cost 2
        'pghq_CHCPR_appendixa_1_7_3t_2', // cost 3
        'pghq_CHCPR_appendixa_1_7_4t_2', // cost 4
        'pghq_CHCPR_appendixa_1_7_5t_2', // cost 5
        'pghq_CHCPR_appendixa_1_7_6t_2', // cost 6
        'pghq_CHCPR_appendixa_1_7_7t_3', // cost 7
        'pghq_CHCPR_appendixa_1_7_8t_3', // cost 8
        'pghq_CHCPR_appendixa_1_7_9t_2', // cost 9
        'pghq_CHCPR_appendixa_1_7_10t_2', // cost 10
        'pghq_CHCPR_appendixa_1_7_11t_2', // cost 11
        'pghq_CHCPR_appendixa_1_7_12t_3', // cost 12
        'pghq_CHCPR_appendixa_1_7_13t_3', // cost 13
        'pghq_CHCPR_appendixa_1_7_14t_3', // cost 14
        'pghq_CHCPR_appendixa_1_7_15t_2', // cost 15
        'pghq_CHCPR_appendixa_1_7_16t_2', // cost 16
        'pghq_CHCPR_appendixa_1_7_17t_2', // cost 17
        'pghq_CHCPR_appendixa_1_7_18t_2', // cost 18
        'pghq_CHCPR_appendixa_1_7_19t_2', // cost 19
        'pghq_CHCPR_appendixa_1_7_20t_2', // cost 20
        'pghq_CHCPR_appendixa_1_7_21t_2', // cost 21
        'pghq_CHCPR_appendixa_1_7_22t_2', // cost 22
        'pghq_CHCPR_appendixa_1_7_23t_2', // cost 23
        'pghq_CHCPR_appendixa_1_7_24t_2', // cost 24
        'pghq_CHCPR_appendixa_1_7_25t_2', // cost 25
        'pghq_CHCPR_appendixa_1_7_26t_2', // cost 26
        'pghq_CHCPR_appendixa_1_7_27t_2', // cost 27
        'pghq_CHCPR_appendixa_1_7_28t_2', // cost 28
        'pghq_CHCPR_appendixa_1_7_29t_2', // cost 29
        'pghq_CHCPR_appendixa_1_7_30t_3', // cost 30
        'pghq_CHCPR_appendixa_1_7_31t_3', // cost 31
      ],
      'calculation': function (cost1, cost2, cost3, cost4, cost5, cost6, cost7, cost8, cost9, cost10, cost11, cost12, cost13, cost14, cost15, cost16, cost17, cost18, cost19, cost20, cost21, cost22, cost23, cost24, cost25, cost26, cost27, cost28, cost29, cost30, cost31) {
 
        var values = [
          cost1,
          cost2,
          cost3,
          cost4,
          cost5,
          cost6,
          cost7,
          cost8,
          cost9,
          cost10,
          cost11,
          cost12,
          cost13,
          cost14,
          cost15,
          cost16,
          cost17,
          cost18,
          cost19,
          cost20,
          cost21,
          cost22,
          cost23,
          cost24,
          cost25,
          cost26,
          cost27,
          cost28,
          cost29,
          cost30,
          cost31
        ];
 
        var sum = 0;
        for (var index = 0; index < values.length; index++) {
          if (!isNaN(values[index])) {
            sum += values[index];
          }
        }
 
      	return toFixed(sum, 0);
      }
    },
    'pghq_CHCPR_appendixa_1_9t_1': {
      'args': [
        'pghq_CHCPR_appendixa_1_7_1t_1', // amount 1
        'pghq_CHCPR_appendixa_1_7_3t_1', // amount 3
        'pghq_CHCPR_appendixa_1_7_4t_1', // amount 4
        'pghq_CHCPR_appendixa_1_7_5t_1', // amount 5
        'pghq_CHCPR_appendixa_1_7_6t_1', // amount 6
        'pghq_CHCPR_appendixa_1_7_9t_1', // amount 9
        'pghq_CHCPR_appendixa_1_7_10t_1', // amount 10
        'pghq_CHCPR_appendixa_1_7_11t_1', // amount 11
        'pghq_CHCPR_appendixa_1_7_12t_1', // amount 12
        'pghq_CHCPR_appendixa_1_7_12t_2', // units 12
        'pghq_CHCPR_appendixa_1_7_13t_1', // amount 13
        'pghq_CHCPR_appendixa_1_7_13t_2', // units 13
        'pghq_CHCPR_appendixa_1_7_15t_1', // amount 15
        'pghq_CHCPR_appendixa_1_7_16t_1', // amount 16
        'pghq_CHCPR_appendixa_1_7_17t_1', // amount 17
        'pghq_CHCPR_appendixa_1_7_18t_1', // amount 18
        'pghq_CHCPR_appendixa_1_7_19t_1', // amount 19
        'pghq_CHCPR_appendixa_1_7_20t_1', // amount 20
        'pghq_CHCPR_appendixa_1_7_21t_1', // amount 21
        'pghq_CHCPR_appendixa_1_7_22t_1', // amount 22
        'pghq_CHCPR_appendixa_1_7_23t_1', // amount 23
        'pghq_CHCPR_appendixa_1_7_24t_1', // amount 24
        'pghq_CHCPR_appendixa_1_7_25t_1', // amount 25
        'pghq_CHCPR_appendixa_1_7_26t_1', // amount 26
        'pghq_CHCPR_appendixa_1_7_27t_1', // amount 27
        'pghq_CHCPR_appendixa_1_7_28t_1', // amount 28
        'pghq_CHCPR_appendixa_1_7_29t_1' // amount 29
      ],
      'calculation': function (amount1, amount3, amount4, amount5, amount6, amount9, amount10, amount11, amount12, units12, amount13, units13, amount15, amount16, amount17, amount18, amount19, amount20, amount21, amount22, amount23, amount24, amount25, amount26, amount27, amount28, amount29) {

      	var converted12 = 0;
      	var converted13 = 0;

      	if (units12 === 'Gallons') {
      		converted12 = amount12 * 0.004;
      	} else {
      		converted12 = amount12;
      	}
      	if (units13 === 'Gallons') {
      		converted13 = amount13 * 0.004;
      	} else {
      		converted13 = amount13;
      	}
 
        var values = [
          amount1,
          amount3,
          amount4,
          amount5,
          amount6,
          amount9,
          amount10,
          amount11,
          converted12,
          converted13,
          amount15,
          amount16,
          amount17,
          amount18,
          amount19,
          amount20,
          amount21,
          amount22,
          amount23,
          amount24,
          amount25,
          amount26,
          amount27,
          amount28,
          amount29
        ];
 
        var sum = 0;
        for (var index = 0; index < values.length; index++) {
          if (!isNaN(values[index])) {
            sum += values[index];
          }
        }
 
      	return toFixed(sum, 2);
      }
    },
    'pghq_CHCPR_appendixa_1_9t_2': {
      'args': [
        'pghq_CHCPR_appendixa_1_7_1t_2', // cost 1
        'pghq_CHCPR_appendixa_1_7_3t_2', // cost 3
        'pghq_CHCPR_appendixa_1_7_4t_2', // cost 4
        'pghq_CHCPR_appendixa_1_7_5t_2', // cost 5
        'pghq_CHCPR_appendixa_1_7_6t_2', // cost 6
        'pghq_CHCPR_appendixa_1_7_9t_2', // cost 9
        'pghq_CHCPR_appendixa_1_7_10t_2', // cost 10
        'pghq_CHCPR_appendixa_1_7_11t_2', // cost 11
        'pghq_CHCPR_appendixa_1_7_12t_3', // cost 12
        'pghq_CHCPR_appendixa_1_7_13t_3', // cost 13
        'pghq_CHCPR_appendixa_1_7_15t_2', // cost 15
        'pghq_CHCPR_appendixa_1_7_16t_2', // cost 16
        'pghq_CHCPR_appendixa_1_7_17t_2', // cost 17
        'pghq_CHCPR_appendixa_1_7_18t_2', // cost 18
        'pghq_CHCPR_appendixa_1_7_19t_2', // cost 19
        'pghq_CHCPR_appendixa_1_7_20t_2', // cost 20
        'pghq_CHCPR_appendixa_1_7_21t_2', // cost 21
        'pghq_CHCPR_appendixa_1_7_22t_2', // cost 22
        'pghq_CHCPR_appendixa_1_7_23t_2', // cost 23
        'pghq_CHCPR_appendixa_1_7_24t_2', // cost 24
        'pghq_CHCPR_appendixa_1_7_25t_2', // cost 25
        'pghq_CHCPR_appendixa_1_7_26t_2', // cost 26
        'pghq_CHCPR_appendixa_1_7_27t_2', // cost 27
        'pghq_CHCPR_appendixa_1_7_28t_2', // cost 28
        'pghq_CHCPR_appendixa_1_7_29t_2' // cost 29
      ],
      'calculation': function (cost1, cost3, cost4, cost5, cost6, cost9, cost10, cost11, cost12, cost13, cost15, cost16, cost17, cost18, cost19, cost20, cost21, cost22, cost23, cost24, cost25, cost26, cost27, cost28, cost29) {
 
        var values = [
          cost1,
          cost3,
          cost4,
          cost5,
          cost6,
          cost9,
          cost10,
          cost11,
          cost12,
          cost13,
          cost15,
          cost16,
          cost17,
          cost18,
          cost19,
          cost20,
          cost21,
          cost22,
          cost23,
          cost24,
          cost25,
          cost26,
          cost27,
          cost28,
          cost29
        ];
 
        var sum = 0;
        for (var index = 0; index < values.length; index++) {
          if (!isNaN(values[index])) {
            sum += values[index];
          }
        }
 
      	return toFixed(sum, 0);
      }
    },
    'pghq_CHCPR_appendixa_1_10t_1': {
      'args': [
        'pghq_CHCPR_appendixa_1_7_2t_2', // amount 2
        'pghq_CHCPR_appendixa_1_7_7t_2', // amount 7
        'pghq_CHCPR_appendixa_1_7_8t_2', // amount 8
        'pghq_CHCPR_appendixa_1_7_14t_2', // amount 14
        'pghq_CHCPR_appendixa_1_7_30t_1', // amount 30
        'pghq_CHCPR_appendixa_1_7_30t_2', // units 30
        'pghq_CHCPR_appendixa_1_7_31t_1', // amount 31
        'pghq_CHCPR_appendixa_1_7_31t_2' // units 31
      ],
      'calculation': function (amount2, amount7, amount8, amount14, amount30, units30, amount31, units31) {

      	var converted30 = 0;
      	var converted31 = 0;

      	if (units30 === 'Gallons') {
      		converted30 = amount30 * 0.004;
      	} else {
      		converted30 = amount30;
      	}
      	if (units31 === 'Gallons') {
      		converted31 = amount31 * 0.004;
      	} else {
      		converted31 = amount31;
      	}
 
        var values = [
          amount2,
          amount7,
          amount8,
          amount14,
          converted30,
          converted31
        ];
 
        var sum = 0;
        for (var index = 0; index < values.length; index++) {
          if (!isNaN(values[index])) {
            sum += values[index];
          }
        }
 
      	return toFixed(sum, 2);
      }
    },
    'pghq_CHCPR_appendixa_1_10t_2': {
      'args': [
        'pghq_CHCPR_appendixa_1_7_2t_3', // cost 2
        'pghq_CHCPR_appendixa_1_7_7t_3', // cost 7
        'pghq_CHCPR_appendixa_1_7_8t_3', // cost 8
        'pghq_CHCPR_appendixa_1_7_14t_3', // cost 14
        'pghq_CHCPR_appendixa_1_7_30t_3', // cost 30
        'pghq_CHCPR_appendixa_1_7_31t_3', // cost 31
      ],
      'calculation': function (cost2, cost7, cost8, cost14, cost30, cost31) {
 
        var values = [
          cost2,
          cost7,
          cost8,
          cost14,
          cost30,
          cost31
        ];
 
        var sum = 0;
        for (var index = 0; index < values.length; index++) {
          if (!isNaN(values[index])) {
            sum += values[index];
          }
        }
 
      	return toFixed(sum, 0);
      }
    },

    //
    // CHCPFC Waste formulas
    //
    'pghq_CHCPFC_waste_4_8_tB_13': {
      'args': [
        'pghq_CHCPFC_waste_4_8_tB_1',
        'pghq_CHCPFC_waste_4_8_tB_7'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 2);
      }
    },
    'pghq_CHCPFC_waste_4_8_tB_14': {
      'args': [
        'pghq_CHCPFC_waste_4_8_tB_2',
        'pghq_CHCPFC_waste_4_8_tB_8'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 2);
      }
    },
//     'pghq_CHCPFC_waste_4_8_tB_15': {
//       'args': [
//         'pghq_CHCPFC_waste_4_8_tB_3',
//         'pghq_CHCPFC_waste_4_8_tB_9'
//       ],
//       'calculation': function() {
// 	      return toFixed(handlers.sum.apply(this, arguments), 2);
//       }
//     },
    'pghq_CHCPFC_waste_4_8_tB_16': {
      'args': [
        'pghq_CHCPFC_waste_4_8_tB_4',
        'pghq_CHCPFC_waste_4_8_tB_10'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 0);
      }
    },
    'pghq_CHCPFC_waste_4_8_tB_17': {
      'args': [
        'pghq_CHCPFC_waste_4_8_tB_5',
        'pghq_CHCPFC_waste_4_8_tB_11'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 0);
      }
    },
//     'pghq_CHCPFC_waste_4_8_tB_18': {
//       'args': [
//         'pghq_CHCPFC_waste_4_8_tB_6',
//         'pghq_CHCPFC_waste_4_8_tB_12'
//       ],
//       'calculation': function() {
// 	      return toFixed(handlers.sum.apply(this, arguments), 0);
//       }
//     },
    'pghq_CHCPFC_waste_6_2_20': {
      'args': [
        'pghq_CHCPFC_waste_6_2_1',
        'pghq_CHCPFC_waste_6_2_8',
        'pghq_CHCPFC_waste_6_2_14'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 2);
      }
    },
    'pghq_CHCPFC_waste_6_2_21': {
      'args': [
        'pghq_CHCPFC_waste_6_2_2',
        'pghq_CHCPFC_waste_6_2_9',
        'pghq_CHCPFC_waste_6_2_15'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 2);
      }
    },
    'pghq_CHCPFC_waste_6_2_22': {
      'args': [
        'pghq_CHCPFC_waste_6_2_3',
        'pghq_CHCPFC_waste_6_2_10',
        'pghq_CHCPFC_waste_6_2_16'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 2);
      }
    },
    'pghq_CHCPFC_waste_6_2_23': {
      'args': [
        'pghq_CHCPFC_waste_6_2_4',
        'pghq_CHCPFC_waste_6_2_11',
        'pghq_CHCPFC_waste_6_2_17'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 0);
      }
    },
    'pghq_CHCPFC_waste_6_2_24': {
      'args': [
        'pghq_CHCPFC_waste_6_2_5',
        'pghq_CHCPFC_waste_6_2_12',
        'pghq_CHCPFC_waste_6_2_18'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 0);
      }
    },
    'pghq_CHCPFC_waste_6_2_25': {
      'args': [
        'pghq_CHCPFC_waste_6_2_6',
        'pghq_CHCPFC_waste_6_2_13',
        'pghq_CHCPFC_waste_6_2_19'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 0);
      }
    },
    'pghq_CHCPFC_waste_6_3_5': {
      'args': [
        'pghq_CHCPFC_waste_6_2_22',
        'pghq_CHCPFC_waste_6_3_5_0'
      ],
      'calculation': function (a, b) {
        return toFixed ((a * 2000 / b), 2);
      }
    },
    'pghq_CHCPFC_waste_8_10_1tE_13': {
      'args': [
        'pghq_CHCPFC_waste_8_10_1tE_1',
        'pghq_CHCPFC_waste_8_10_1tE_7'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 2);
      }
    },
    'pghq_CHCPFC_waste_8_10_1tE_14': {
      'args': [
        'pghq_CHCPFC_waste_8_10_1tE_2',
        'pghq_CHCPFC_waste_8_10_1tE_8'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 2);
      }
    },
    'pghq_CHCPFC_waste_8_10_1tE_15': {
      'args': [
        'pghq_CHCPFC_waste_8_10_1tE_3',
        'pghq_CHCPFC_waste_8_10_1tE_9'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 2);
      }
    },
    'pghq_CHCPFC_waste_8_10_1tE_16': {
      'args': [
        'pghq_CHCPFC_waste_8_10_1tE_4',
        'pghq_CHCPFC_waste_8_10_1tE_10'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 0);
      }
    },
    'pghq_CHCPFC_waste_8_10_1tE_17': {
      'args': [
        'pghq_CHCPFC_waste_8_10_1tE_5',
        'pghq_CHCPFC_waste_8_10_1tE_11'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 0);
      }
    },
    'pghq_CHCPFC_waste_8_10_1tE_18': {
      'args': [
        'pghq_CHCPFC_waste_8_10_1tE_6',
        'pghq_CHCPFC_waste_8_10_1tE_12'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 0);
      }
    },
    'pghq_CHCPFC_waste_9_29_1tF_14': {
      'args': [
        'pghq_CHCPFC_waste_9_29_1tF_2',
        'pghq_CHCPFC_waste_9_29_1tF_5',
        'pghq_CHCPFC_waste_9_29_1tF_8',
        'pghq_CHCPFC_waste_9_29_1tF_11'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 0);
      }
    },
    'pghq_CHCPFC_waste_9_29_1tF_15': {
      'args': [
        'pghq_CHCPFC_waste_9_29_1tF_3',
        'pghq_CHCPFC_waste_9_29_1tF_6',
        'pghq_CHCPFC_waste_9_29_1tF_9',
        'pghq_CHCPFC_waste_9_29_1tF_12'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 0);
      }
    },
    'pghq_CHCPFC_waste_10_1_tG_1': {
      'args': [
        'pghq_CHCPFC_waste_2_3_tA_2',
        'pghq_CHCPFC_waste_4_8_tB_13',
        'pghq_CHCPFC_waste_6_2_20',
        'pghq_CHCPFC_waste_8_10_1tE_13'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 2);
      }
    },
    'pghq_CHCPFC_waste_10_1_tG_2': {
      'args': [
        'pghq_CHCPFC_waste_2_3_tA_3',
        'pghq_CHCPFC_waste_4_8_tB_14',
        'pghq_CHCPFC_waste_6_2_21',
        'pghq_CHCPFC_waste_8_10_1tE_14'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 2);
      }
    },
    'pghq_CHCPFC_waste_10_1_tG_3': {
      'args': [
        'pghq_CHCPFC_waste_2_3_tA_4',
        'pghq_CHCPFC_waste_4_8_tB_15',
        'pghq_CHCPFC_waste_6_2_22',
        'pghq_CHCPFC_waste_8_10_1tE_15'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 2);
      }
    },
    'pghq_CHCPFC_waste_10_1_tG_4': {
      'args': [
        'pghq_CHCPFC_waste_2_3_tA_5',
        'pghq_CHCPFC_waste_4_8_tB_16',
        'pghq_CHCPFC_waste_6_2_23',
        'pghq_CHCPFC_waste_8_10_1tE_16'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 0);
      }
    },
    'pghq_CHCPFC_waste_10_1_tG_5': {
      'args': [
        'pghq_CHCPFC_waste_2_3_tA_6',
        'pghq_CHCPFC_waste_4_8_tB_17',
        'pghq_CHCPFC_waste_6_2_24',
        'pghq_CHCPFC_waste_8_10_1tE_17'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 0);
      }
    },
    'pghq_CHCPFC_waste_10_1_tG_6': {
      'args': [
        'pghq_CHCPFC_waste_2_3_tA_7',
        'pghq_CHCPFC_waste_4_8_tB_18',
        'pghq_CHCPFC_waste_6_2_25',
        'pghq_CHCPFC_waste_8_10_1tE_18'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 0);
      }
    },
    'pghq_CHCPFC_waste_10_1_tH_1': {
      'args': [
        'pghq_CHCPFC_waste_2_3_tA_2',
        'pghq_CHCPFC_waste_10_1_tG_1'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_CHCPFC_waste_10_1_tH_2': {
      'args': [
        'pghq_CHCPFC_waste_2_3_tA_3',
        'pghq_CHCPFC_waste_10_1_tG_2'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_CHCPFC_waste_10_1_tH_3': {
      'args': [
        'pghq_CHCPFC_waste_2_3_tA_4',
        'pghq_CHCPFC_waste_10_1_tG_3'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_CHCPFC_waste_10_1_tH_4': {
      'args': [
        'pghq_CHCPFC_waste_2_3_tA_5',
        'pghq_CHCPFC_waste_10_1_tG_4'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_CHCPFC_waste_10_1_tH_5': {
      'args': [
        'pghq_CHCPFC_waste_2_3_tA_6',
        'pghq_CHCPFC_waste_10_1_tG_5'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_CHCPFC_waste_10_1_tH_6': {
      'args': [
        'pghq_CHCPFC_waste_2_3_tA_7',
        'pghq_CHCPFC_waste_10_1_tG_6'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_CHCPFC_waste_10_1_tH_7': {
      'args': [
        'pghq_CHCPFC_waste_4_8_tB_13',
        'pghq_CHCPFC_waste_10_1_tG_1'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_CHCPFC_waste_10_1_tH_8': {
      'args': [
        'pghq_CHCPFC_waste_4_8_tB_14',
        'pghq_CHCPFC_waste_10_1_tG_2'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_CHCPFC_waste_10_1_tH_9': {
      'args': [
        'pghq_CHCPFC_waste_4_8_tB_15',
        'pghq_CHCPFC_waste_10_1_tG_3'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_CHCPFC_waste_10_1_tH_10': {
      'args': [
        'pghq_CHCPFC_waste_4_8_tB_16',
        'pghq_CHCPFC_waste_10_1_tG_4'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_CHCPFC_waste_10_1_tH_11': {
      'args': [
        'pghq_CHCPFC_waste_4_8_tB_17',
        'pghq_CHCPFC_waste_10_1_tG_5'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_CHCPFC_waste_10_1_tH_12': {
      'args': [
        'pghq_CHCPFC_waste_4_8_tB_18',
        'pghq_CHCPFC_waste_10_1_tG_6'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_CHCPFC_waste_10_1_tH_13': {
      'args': [
        'pghq_CHCPFC_waste_6_2_20',
        'pghq_CHCPFC_waste_10_1_tG_1'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_CHCPFC_waste_10_1_tH_14': {
      'args': [
        'pghq_CHCPFC_waste_6_2_21',
        'pghq_CHCPFC_waste_10_1_tG_2'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_CHCPFC_waste_10_1_tH_15': {
      'args': [
        'pghq_CHCPFC_waste_6_2_22',
        'pghq_CHCPFC_waste_10_1_tG_3'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_CHCPFC_waste_10_1_tH_16': {
      'args': [
        'pghq_CHCPFC_waste_6_2_23',
        'pghq_CHCPFC_waste_10_1_tG_4'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_CHCPFC_waste_10_1_tH_17': {
      'args': [
        'pghq_CHCPFC_waste_6_2_24',
        'pghq_CHCPFC_waste_10_1_tG_5'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_CHCPFC_waste_10_1_tH_18': {
      'args': [
        'pghq_CHCPFC_waste_6_2_25',
        'pghq_CHCPFC_waste_10_1_tG_6'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_CHCPFC_waste_10_1_tH_19': {
      'args': [
        'pghq_CHCPFC_waste_8_10_1tE_13',
        'pghq_CHCPFC_waste_10_1_tG_1'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_CHCPFC_waste_10_1_tH_20': {
      'args': [
        'pghq_CHCPFC_waste_8_10_1tE_14',
        'pghq_CHCPFC_waste_10_1_tG_2'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_CHCPFC_waste_10_1_tH_21': {
      'args': [
        'pghq_CHCPFC_waste_8_10_1tE_15',
        'pghq_CHCPFC_waste_10_1_tG_3'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_CHCPFC_waste_10_1_tH_22': {
      'args': [
        'pghq_CHCPFC_waste_8_10_1tE_16',
        'pghq_CHCPFC_waste_10_1_tG_4'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_CHCPFC_waste_10_1_tH_23': {
      'args': [
        'pghq_CHCPFC_waste_8_10_1tE_17',
        'pghq_CHCPFC_waste_10_1_tG_5'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_CHCPFC_waste_10_1_tH_24': {
      'args': [
        'pghq_CHCPFC_waste_8_10_1tE_18',
        'pghq_CHCPFC_waste_10_1_tG_6'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_CHCPFC_waste_9_29_1tF_13': {
      'args': [
        'pghq_CHCPFC_waste_9_29_1tF_1',
        'pghq_CHCPFC_waste_9_29_1tF_4',
        'pghq_CHCPFC_waste_9_29_1tF_7',
        'pghq_CHCPFC_waste_9_29_1tF_10'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 2);
      }
    },

    //
    // CHCPFC Chemicals
    //
    'pghq_CHCPFC_chemicals_2_4_2_3': {
      'args': [
        'pghq_CHCPFC_chemicals_2_4_2_1',
        'pghq_CHCPFC_chemicals_2_4_2_1',
        'pghq_CHCPFC_chemicals_2_4_2_2'
      ],
      'calculation': function() {
	      return toFixed(handlers.divideBySum.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_CHCPFC_chemicals_2_4_2_6': {
      'args': [
        'pghq_CHCPFC_chemicals_2_4_2_4',
        'pghq_CHCPFC_chemicals_2_4_2_4',
        'pghq_CHCPFC_chemicals_2_4_2_5'
      ],
      'calculation': function() {
	      return toFixed(handlers.divideBySum.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_CHCPFC_chemicals_2_4_2_9': {
      'args': [
        'pghq_CHCPFC_chemicals_2_4_2_7',
        'pghq_CHCPFC_chemicals_2_4_2_7',
        'pghq_CHCPFC_chemicals_2_4_2_8'
      ],
      'calculation': function() {
	      return toFixed(handlers.divideBySum.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_CHCPFC_chemicals_2_4_2_12': {
      'args': [
        'pghq_CHCPFC_chemicals_2_4_2_10',
        'pghq_CHCPFC_chemicals_2_4_2_10',
        'pghq_CHCPFC_chemicals_2_4_2_11'
      ],
      'calculation': function() {
	      return toFixed(handlers.divideBySum.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_CHCPFC_chemicals_2_4_2_15': {
      'args': [
        'pghq_CHCPFC_chemicals_2_4_2_13',
        'pghq_CHCPFC_chemicals_2_4_2_13',
        'pghq_CHCPFC_chemicals_2_4_2_14'
      ],
      'calculation': function() {
	      return toFixed(handlers.divideBySum.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_CHCPFC_chemicals_2_4_2_16': {
      'args': [
        'pghq_CHCPFC_chemicals_2_4_2_1',
        'pghq_CHCPFC_chemicals_2_4_2_4',
        'pghq_CHCPFC_chemicals_2_4_2_7',
        'pghq_CHCPFC_chemicals_2_4_2_10',
        'pghq_CHCPFC_chemicals_2_4_2_13'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 1);
      }
    },
    'pghq_CHCPFC_chemicals_2_4_2_17': {
      'args': [
        'pghq_CHCPFC_chemicals_2_4_2_2',
        'pghq_CHCPFC_chemicals_2_4_2_5',
        'pghq_CHCPFC_chemicals_2_4_2_8',
        'pghq_CHCPFC_chemicals_2_4_2_11',
        'pghq_CHCPFC_chemicals_2_4_2_14'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 1);
      }
    },
    'pghq_CHCPFC_chemicals_2_4_2_18': {
      'args': [
        'pghq_CHCPFC_chemicals_2_4_2_16',
        'pghq_CHCPFC_chemicals_2_4_2_16',
        'pghq_CHCPFC_chemicals_2_4_2_17'
      ],
      'calculation': function() {
	      return toFixed(handlers.divideBySum.apply(this, arguments) * 100, 1);
      }
    },    

    //
    // CHCPFC Greening the OR formulas
    //
    'pghq_CHCPFC_greeningtheOR_2_3_tB_3': {
      'args': [
        'pghq_CHCPFC_greeningtheOR_2_3_tB_2',
        'pghq_CHCPFC_greeningtheOR_2_3_tB_1'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments), 1);
      }
    },
    'pghq_CHCPFC_greeningtheOR_2_12_2_tF_3': {
      'args': [
        'pghq_CHCPFC_greeningtheOR_2_12_2_tF_2',
        'pghq_CHCPFC_greeningtheOR_2_12_2_tF_1'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments), 1);
      }
    },
    'pghq_CHCPFC_greeningtheOR_3_4': {
      'args': [
        'pghq_CHCPFC_greeningtheOR_3_3_1',
        'pghq_CHCPFC_greeningtheOR_3_4_0'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments), 1);
      }
    },

    //
    // CHCPFC Food formulas
    //
    'pghq_CHCPFC_food_1_3_1_6': {
      'args': [
      'pghq_CHCPFC_food_1_3_1_1',
      'pghq_CHCPFC_food_1_3_1_4',
      'pghq_CHCPFC_food_1_3_1_2',
      'pghq_CHCPFC_food_1_3_1_5'
      ],
      'calculation': function(a, b, c, d) {
        if (a === 0 ||
            b === 0 ||
            c === 0 ||
            d === 0) {
          return 0;
        } else if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d)){
      		return 0;
      	} else {
          return toFixed((1- ((c / d) / (a / b))) * 100, 1);
        }
      }
    },
    'pghq_CHCPFC_food_2_1_4': {
      'args': [
        'pghq_CHCPFC_food_2_1_2',
        'pghq_CHCPFC_food_2_1_3'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_CHCPFC_food_3_1_4': {
      'args': [
        'pghq_CHCPFC_food_3_1_2',
        'pghq_CHCPFC_food_3_1_3'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },

    //
    // CHCPFC Energy
    //
    'pghq_CHCPFC_energy_2_11_1': {
      'args': [
        'pghq_CHCPFC_energy_2_7_5',
        'pghq_CHCPFC_energy_2_7_4'
      ],
      'calculation': function() {
	      return toFixed(handlers.convertBTUSimple.apply(this, arguments), 0);
      }
    },
    'pghq_CHCPFC_energy_2_11_2': {
      'args': [
        'pghq_CHCPFC_energy_2_11_1',
        'pghq_CHCPFC_energy_2_11_21'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_CHCPFC_energy_2_11_3': {
      'args': [
        'pghq_CHCPFC_energy_2_7_9',
        'pghq_CHCPFC_energy_2_7_8'
      ],
      'calculation': function() {
	      return toFixed(handlers.convertNaturalGas.apply(this, arguments), 0);
      }
    },
    'pghq_CHCPFC_energy_2_11_4': {
      'args': [
        'pghq_CHCPFC_energy_2_11_3',
        'pghq_CHCPFC_energy_2_11_21'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_CHCPFC_energy_2_11_5': {
      'args': [
        'pghq_CHCPFC_energy_2_7_13',
        'pghq_CHCPFC_energy_2_7_12'
      ],
      'calculation': function() {
	      return toFixed(handlers.convertFuelOil.apply(this, arguments), 0);
      }
    },
    'pghq_CHCPFC_energy_2_11_6': {
      'args': [
        'pghq_CHCPFC_energy_2_11_5',
        'pghq_CHCPFC_energy_2_11_21'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_CHCPFC_energy_2_11_7': {
      'args': [
        'pghq_CHCPFC_energy_2_7_17',
        'pghq_CHCPFC_energy_2_7_16'
      ],
      'calculation': function() {
	      return toFixed(handlers.convertSteam.apply(this, arguments), 0);
      }
    },
    'pghq_CHCPFC_energy_2_11_8': {
      'args': [
        'pghq_CHCPFC_energy_2_11_7',
        'pghq_CHCPFC_energy_2_11_21'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_CHCPFC_energy_2_11_9': {
      'args': [
        'pghq_CHCPFC_energy_2_7_21',
        'pghq_CHCPFC_energy_2_7_20'
      ],
      'calculation': function() {
	      return toFixed(handlers.convertWater.apply(this, arguments), 0);
      }
    },
    'pghq_CHCPFC_energy_2_11_10': {
      'args': [
        'pghq_CHCPFC_energy_2_11_9',
        'pghq_CHCPFC_energy_2_11_21'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_CHCPFC_energy_2_11_11': {
      'args': [
        'pghq_CHCPFC_energy_2_7_25',
        'pghq_CHCPFC_energy_2_7_24'
      ],
      'calculation': function() {
	      return toFixed(handlers.convertWater.apply(this, arguments), 0);
      }
    },
    'pghq_CHCPFC_energy_2_11_12': {
      'args': [
        'pghq_CHCPFC_energy_2_11_11',
        'pghq_CHCPFC_energy_2_11_21'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_CHCPFC_energy_2_11_13': {
      'args': [
        'pghq_CHCPFC_energy_2_7_29',
        'pghq_CHCPFC_energy_2_7_28'
      ],
      'calculation': function() {
	      return toFixed(handlers.convertDiesel.apply(this, arguments), 0);
      }
    },
    'pghq_CHCPFC_energy_2_11_14': {
      'args': [
        'pghq_CHCPFC_energy_2_11_13',
        'pghq_CHCPFC_energy_2_11_21'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
		'pghq_CHCPFC_energy_2_11_17': {
			'args': [
				'pghq_CHCPFC_energy_2_8_2_3', // Units 1
				'pghq_CHCPFC_energy_2_8_2_2', // Amount 1
				'pghq_CHCPFC_energy_2_8_2_8', // Units 2
				'pghq_CHCPFC_energy_2_8_2_7', // Amount 2
				'pghq_CHCPFC_energy_2_8_2_13', // Units 3
				'pghq_CHCPFC_energy_2_8_2_12' // Amount 3
			],
			'calculation': function (a, b, c, d, e, f) {
				var x = handlers.convertBTU(a, b);
				var y = handlers.convertBTU(c, d);
				var z = handlers.convertBTU(e, f);
				return toFixed(x + y + z, 0);
			}
		},
    'pghq_CHCPFC_energy_2_11_18': {
      'args': [
        'pghq_CHCPFC_energy_2_11_17',
        'pghq_CHCPFC_energy_2_11_21'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_CHCPFC_energy_2_11_19': {
      'args': [
        'pghq_CHCPFC_energy_2_8_2_18', // Units
        'pghq_CHCPFC_energy_2_8_2_17' // Amount
      ],
      'calculation': function() {
	      return toFixed(handlers.convertBTU.apply(this, arguments), 0);
      }
    },
    'pghq_CHCPFC_energy_2_11_20': {
      'args': [
        'pghq_CHCPFC_energy_2_11_19',
        'pghq_CHCPFC_energy_2_11_21'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_CHCPFC_energy_2_11_21': {
      'args': [
        'pghq_CHCPFC_energy_2_11_1', // amount 1
        'pghq_CHCPFC_energy_2_11_3', // amount 2
        'pghq_CHCPFC_energy_2_11_5', // amount 3
        'pghq_CHCPFC_energy_2_11_7', // amount 4
        'pghq_CHCPFC_energy_2_11_9', // amount 5
        'pghq_CHCPFC_energy_2_11_11', // amount 6
        'pghq_CHCPFC_energy_2_11_13', // amount 7
        'pghq_CHCPFC_energy_2_11_17', // amount 8
        'pghq_CHCPFC_energy_2_11_19' // amount 9
      ],
      'calculation': function (amount1, amount2, amount3, amount4, amount5, amount6, amount7, amount8, amount9) {
 
        var values = [
          amount1,
          amount2,
          amount3,
          amount4,
          amount5,
          amount6,
          amount7,
          amount8,
          amount9
        ];
 
        var sum = 0;
        for (var index = 0; index < values.length; index++) {
          if (!isNaN(values[index])) {
            sum += values[index];
          }
        }
 
      	return toFixed(sum, 0);
      }
    },
    'pghq_CHCPFC_energy_2_11_22': {
      'args': [
        'pghq_CHCPFC_energy_2_11_2', // amount 1
        'pghq_CHCPFC_energy_2_11_4', // amount 2
        'pghq_CHCPFC_energy_2_11_6', // amount 3
        'pghq_CHCPFC_energy_2_11_8', // amount 4
        'pghq_CHCPFC_energy_2_11_10', // amount 5
        'pghq_CHCPFC_energy_2_11_12', // amount 6
        'pghq_CHCPFC_energy_2_11_14', // amount 7
        'pghq_CHCPFC_energy_2_11_18', // amount 8
        'pghq_CHCPFC_energy_2_11_20' // amount 9
      ],
      'calculation': function (amount1, amount2, amount3, amount4, amount5, amount6, amount7, amount8, amount9) {
 
        var values = [
          amount1,
          amount2,
          amount3,
          amount4,
          amount5,
          amount6,
          amount7,
          amount8,
          amount9
        ];
 
        var sum = 0;
        for (var index = 0; index < values.length; index++) {
          if (!isNaN(values[index])) {
            sum += values[index];
          }
        }
 
      	return toFixed(sum, 1);
      }
    },
    'pghq_CHCPFC_energy_2_12': {
      'args': [
        'pghq_CHCPFC_energy_2_11_18',
        'pghq_CHCPFC_energy_2_11_20'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 1);
      }
    },
    'pghq_CHCPFC_energy_3_1_1_1': {
      'args': [
        'pghq_CHCPFC_energy_2_11_1', // amount 1
        'pghq_CHCPFC_energy_2_11_3', // amount 2
        'pghq_CHCPFC_energy_2_11_5', // amount 3
        'pghq_CHCPFC_energy_2_11_7', // amount 4
        'pghq_CHCPFC_energy_2_11_9', // amount 5
        'pghq_CHCPFC_energy_2_11_11', // amount 6
        'pghq_CHCPFC_energy_2_11_13', // amount 7
        'pghq_CHCPFC_energy_2_11_17', // amount 8
        'pghq_CHCPFC_energy_2_11_19' // amount 9
      ],
      'calculation': function (amount1, amount2, amount3, amount4, amount5, amount6, amount7, amount8, amount9) {
 
        var values = [
          amount1,
          amount2,
          amount3,
          amount4,
          amount5,
          amount6,
          amount7,
          amount8,
          amount9
        ];
 
        var sum = 0;
        for (var index = 0; index < values.length; index++) {
          if (!isNaN(values[index])) {
            sum += values[index];
          }
        }
 
      	return toFixed(sum, 0);
      }
    },   
    'pghq_CHCPFC_energy_3_1_1_2': {
      'args': [
        'pghq_CHCPFC_energy_2_7_5', // Electricity Units
        'pghq_CHCPFC_energy_2_7_6', // Electricity Amount
        'pghq_CHCPFC_energy_2_7_9', // Natural Gas Units
        'pghq_CHCPFC_energy_2_7_10', // Natural Gas Amount
        'pghq_CHCPFC_energy_2_7_13', // Fuel Oil Units
        'pghq_CHCPFC_energy_2_7_14', // Fuel Oil Amount
        'pghq_CHCPFC_energy_2_7_17', // Steam Units
        'pghq_CHCPFC_energy_2_7_18', // Steam Amount
        'pghq_CHCPFC_energy_2_7_21', // Chilled Water Units
        'pghq_CHCPFC_energy_2_7_22', // Chilled Water Amount
        'pghq_CHCPFC_energy_2_7_25', // Hot Water Units
        'pghq_CHCPFC_energy_2_7_26', // Hot Water Amount
        'pghq_CHCPFC_energy_2_7_29', // Diesel Units
        'pghq_CHCPFC_energy_2_7_30', // Diesel Amount
        'pghq_CHCPFC_energy_2_8_2_3', // Renewable Energy 1 Units
        'pghq_CHCPFC_energy_2_8_2_4', // Renewable Energy 1 Amount
        'pghq_CHCPFC_energy_2_8_2_8', // Renewable Energy 2 Units
        'pghq_CHCPFC_energy_2_8_2_9', // Renewable Energy 2 Amount
        'pghq_CHCPFC_energy_2_8_2_13', // Renewable Energy 3 Units
        'pghq_CHCPFC_energy_2_8_2_14', // Renewable Energy 3 Amount
        'pghq_CHCPFC_energy_2_8_2_18', // Renewable Energy 4 Units
        'pghq_CHCPFC_energy_2_8_2_19' // Renewable Energy 4 Amount
      ],
      'calculation': function (elecU, elecA, natGasU, natGasA, fuelU, fuelA, steamU, steamA, chillU, chillA, hotU, hotA, dieselU, dieselA, renew1U, renew1A, renew2U, renew2A, renew3U, renew3A, renew4U, renew4A) {

      	var elecTotal = handlers.convertBTUSimple(elecU, elecA);
      	var natGasTotal = handlers.convertNaturalGas(natGasU, natGasA);
      	var fuelTotal = handlers.convertFuelOil(fuelU, fuelA);
      	var steamTotal = handlers.convertSteam(steamU, steamA);
      	var chillTotal = handlers.convertWater(chillU, chillA);
      	var hotTotal = handlers.convertWater(hotU, hotA);
      	var dieselTotal = handlers.convertDiesel(dieselU, dieselA);
      	var renew1Total = handlers.convertBTU(renew1U, renew1A);
      	var renew2Total = handlers.convertBTU(renew2U, renew2A);
      	var renew3Total = handlers.convertBTU(renew3U, renew3A);
      	var renew4Total = handlers.convertBTU(renew4U, renew4A);
      	
        var values = [
          elecTotal, 
					natGasTotal,
					fuelTotal,
					steamTotal,
					chillTotal,
					hotTotal,
					dieselTotal,
					renew1Total,
					renew2Total,
					renew3Total,
					renew4Total
        ];
 
        var sum = 0;
        for (var index = 0; index < values.length; index++) {
          if (!isNaN(values[index])) {
            sum += values[index];
          }
        }
 
      	return toFixed(sum, 0);
      }
    },
    'pghq_CHCPFC_energy_3_1_1_3': {
      'args': [
        'pghq_CHCPFC_energy_2_7_5', // Electricity Units
        'pghq_CHCPFC_energy_2_7_7', // Electricity Amount
        'pghq_CHCPFC_energy_2_7_9', // Natural Gas Units
        'pghq_CHCPFC_energy_2_7_11', // Natural Gas Amount
        'pghq_CHCPFC_energy_2_7_13', // Fuel Oil Units
        'pghq_CHCPFC_energy_2_7_15', // Fuel Oil Amount
        'pghq_CHCPFC_energy_2_7_17', // Steam Units
        'pghq_CHCPFC_energy_2_7_19', // Steam Amount
        'pghq_CHCPFC_energy_2_7_21', // Chilled Water Units
        'pghq_CHCPFC_energy_2_7_23', // Chilled Water Amount
        'pghq_CHCPFC_energy_2_7_25', // Hot Water Units
        'pghq_CHCPFC_energy_2_7_27', // Hot Water Amount
        'pghq_CHCPFC_energy_2_7_29', // Diesel Units
        'pghq_CHCPFC_energy_2_7_31', // Diesel Amount
        'pghq_CHCPFC_energy_2_8_2_3', // Renewable Energy 1 Units
        'pghq_CHCPFC_energy_2_8_2_5', // Renewable Energy 1 Amount
        'pghq_CHCPFC_energy_2_8_2_8', // Renewable Energy 2 Units
        'pghq_CHCPFC_energy_2_8_2_10', // Renewable Energy 2 Amount
        'pghq_CHCPFC_energy_2_8_2_13', // Renewable Energy 3 Units
        'pghq_CHCPFC_energy_2_8_2_15', // Renewable Energy 3 Amount
        'pghq_CHCPFC_energy_2_8_2_18', // Renewable Energy 4 Units
        'pghq_CHCPFC_energy_2_8_2_20' // Renewable Energy 4 Amount
      ],
      'calculation': function (elecU, elecA, natGasU, natGasA, fuelU, fuelA, steamU, steamA, chillU, chillA, hotU, hotA, dieselU, dieselA, renew1U, renew1A, renew2U, renew2A, renew3U, renew3A, renew4U, renew4A) {

      	var elecTotal = handlers.convertBTUSimple(elecU, elecA);
      	var natGasTotal = handlers.convertNaturalGas(natGasU, natGasA);
      	var fuelTotal = handlers.convertFuelOil(fuelU, fuelA);
      	var steamTotal = handlers.convertSteam(steamU, steamA);
      	var chillTotal = handlers.convertWater(chillU, chillA);
      	var hotTotal = handlers.convertWater(hotU, hotA);
      	var dieselTotal = handlers.convertDiesel(dieselU, dieselA);
      	var renew1Total = handlers.convertBTU(renew1U, renew1A);
      	var renew2Total = handlers.convertBTU(renew2U, renew2A);
      	var renew3Total = handlers.convertBTU(renew3U, renew3A);
      	var renew4Total = handlers.convertBTU(renew4U, renew4A);

        var values = [
          elecTotal, 
					natGasTotal,
					fuelTotal,
					steamTotal,
					chillTotal,
					hotTotal,
					dieselTotal,
					renew1Total,
					renew2Total,
					renew3Total,
					renew4Total
        ];
 
        var sum = 0;
        for (var index = 0; index < values.length; index++) {
          if (!isNaN(values[index])) {
            sum += values[index];
          }
        }
 
      	return toFixed(sum, 0);
      }
    },
    'pghq_CHCPFC_energy_3_1_1_4': {
      'args': [
        'pghq_CHCPFC_energy_2_11_21',
        'pghq_CHCPFC_energy_3_1_1_2'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_CHCPFC_energy_3_1_1_5': {
      'args': [
        'pghq_CHCPFC_energy_2_11_21',
        'pghq_CHCPFC_energy_3_1_1_3'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_CHCPFC_energy_3_1_1_6': {
      'args': [
        'pghq_CHCPFC_energy_3_1_1_1',
        'pghq_CHCPFC_energy_2_7_1'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments), 0);
      }
    },
    'pghq_CHCPFC_energy_3_1_1_7': {
      'args': [
        'pghq_CHCPFC_energy_3_1_1_2',
        'pghq_CHCPFC_energy_2_7_2'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments), 0);
      }
    },
    'pghq_CHCPFC_energy_3_1_1_8': {
      'args': [
        'pghq_CHCPFC_energy_3_1_1_3',
        'pghq_CHCPFC_energy_2_7_3'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments), 0);
      }
    },
    'pghq_CHCPFC_energy_3_1_1_9': {
      'args': [
        'pghq_CHCPFC_energy_3_1_1_6',
        'pghq_CHCPFC_energy_3_1_1_7'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_CHCPFC_energy_3_1_1_10': {
      'args': [
        'pghq_CHCPFC_energy_3_1_1_6',
        'pghq_CHCPFC_energy_3_1_1_8'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_CHCPFC_energy_4_4_5': {
      'args': [
        'pghq_CHCPFC_energy_4_4_4',
        'pghq_CHCPFC_energy_4_4_3'
      ],
      'calculation': function() {
	      return toFixed(handlers.convertBTUComplex.apply(this, arguments), 0);
      }
    },
    'pghq_CHCPFC_energy_4_4_11': {
      'args': [
        'pghq_CHCPFC_energy_4_4_10',
        'pghq_CHCPFC_energy_4_4_9'
      ],
      'calculation': function() {
	      return toFixed(handlers.convertBTUComplex.apply(this, arguments), 0);
      }
    },
    'pghq_CHCPFC_energy_4_4_17': {
      'args': [
        'pghq_CHCPFC_energy_4_4_16',
        'pghq_CHCPFC_energy_4_4_15'
      ],
      'calculation': function() {
	      return toFixed(handlers.convertBTUComplex.apply(this, arguments), 0);
      }
    },
    'pghq_CHCPFC_energy_4_4_23': {
      'args': [
        'pghq_CHCPFC_energy_4_4_22',
        'pghq_CHCPFC_energy_4_4_21'
      ],
      'calculation': function() {
	      return toFixed(handlers.convertBTUComplex.apply(this, arguments), 0);
      }
    },
    'pghq_CHCPFC_energy_4_4_29': {
      'args': [
        'pghq_CHCPFC_energy_4_4_28',
        'pghq_CHCPFC_energy_4_4_27'
      ],
      'calculation': function() {
	      return toFixed(handlers.convertBTUComplex.apply(this, arguments), 0);
      }
    },
    'pghq_CHCPFC_energy_4_4_32': {
      'args': [
        'pghq_CHCPFC_energy_4_4_5',
        'pghq_CHCPFC_energy_4_4_11',
        'pghq_CHCPFC_energy_4_4_17',
        'pghq_CHCPFC_energy_4_4_23',
        'pghq_CHCPFC_energy_4_4_29'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 0);
      }
    },
    'pghq_CHCPFC_energy_4_4_33': {
      'args': [
        'pghq_CHCPFC_energy_4_4_6',
        'pghq_CHCPFC_energy_4_4_12',
        'pghq_CHCPFC_energy_4_4_18',
        'pghq_CHCPFC_energy_4_4_24',
        'pghq_CHCPFC_energy_4_4_30'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 0);
      }
    },

    //
    // CHCPFC Water formulas
    //
    'pghq_CHCPFC_water_1_7': {
      'args': [
        'pghq_CHCPFC_water_1_5_1_14',
        'pghq_CHCPFC_water_1_5_1_13',
        'pghq_CHCPFC_water_1_5_1_1'
      ],
      'calculation': function() {
	      return toFixed(handlers.convertGallonsAndDivide.apply(this, arguments), 0);
      }
    },
    'pghq_CHCPFC_water_1_8': {
      'args': [
        'pghq_CHCPFC_water_1_5_1_14',
        'pghq_CHCPFC_water_1_5_1_13',
        'pghq_CHCPFC_water_1_8_0'
      ],
      'calculation': function() {
	      return toFixed(handlers.convertGallonsAndDivide.apply(this, arguments), 0);
      }
    },
    'pghq_CHCPFC_water_1_9': {
      'args': [
        'pghq_CHCPFC_water_1_5_1_14',
        'pghq_CHCPFC_water_1_5_1_13',
        'pghq_CHCPFC_water_1_9_0'
      ],
      'calculation': function() {
	      return toFixed(handlers.convertGallonsAndDivide.apply(this, arguments), 0);
      }
    },
    'pghq_CHCPFC_water_1_11': {
      'args': [
        'pghq_CHCPFC_water_1_5_1_14', // Units 1
        'pghq_CHCPFC_water_1_5_1_13', // Amount 1
        'pghq_CHCPFC_water_1_5_1_1', // Divisor 1
        'pghq_CHCPFC_water_1_5_1_16', // Units 2
        'pghq_CHCPFC_water_1_5_1_15', // Amount 2
        'pghq_CHCPFC_water_1_5_1_3' // Divisor 2
      ],
      'calculation': function (a, b, c, d, e, f) {
      	return toFixed((handlers.convertGallonsAndDivide(a, b, c) / handlers.convertGallonsAndDivide(d, e, f)) * 100, 1);
      }
    },
    'pghq_CHCPFC_water_1_12': {
      'args': [
        'pghq_CHCPFC_water_1_5_1_14',
        'pghq_CHCPFC_water_1_5_1_13',
        'pghq_CHCPFC_water_1_5_1_7'
      ],
      'calculation': function() {
	      return toFixed(handlers.convertGallonsAndDivide.apply(this, arguments), 1);
      }
    },
    'pghq_CHCPFC_water_2_1tB_3': {
      'args': [
        'pghq_CHCPFC_water_2_1tB_1',
        'pghq_CHCPFC_water_2_1tB_7'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_CHCPFC_water_2_1tB_6': {
      'args': [
        'pghq_CHCPFC_water_2_1tB_4',
        'pghq_CHCPFC_water_2_1tB_7'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_CHCPFC_water_2_1tB_7': {
      'args': [
        'pghq_CHCPFC_water_2_1tB_1',
        'pghq_CHCPFC_water_2_1tB_4'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 2);
      }
    },
    'pghq_CHCPFC_water_2_3_tC_4': {
      'args': [
        'pghq_CHCPFC_water_2_3_tC_3', // Units 1
        'pghq_CHCPFC_water_2_3_tC_2', // Meter Amount
        'pghq_CHCPFC_water_1_5_1_15' // Annual Amount
      ],
      'calculation': function (a, b, c) {
      	return toFixed (handlers.convertGallons(a, b) / c, 1);
      }
    },
    'pghq_CHCPFC_water_2_3_tC_8': {
      'args': [
        'pghq_CHCPFC_water_2_3_tC_7', // Units
        'pghq_CHCPFC_water_2_3_tC_6', // Meter Amount
        'pghq_CHCPFC_water_1_5_1_15', // Annual Amount
      ],
      'calculation': function (a, b, c) {
      	return toFixed (handlers.convertGallons(a, b) / c, 1);
      }
    },
    'pghq_CHCPFC_water_2_3_tC_12': {
      'args': [
        'pghq_CHCPFC_water_2_3_tC_11', // Units
        'pghq_CHCPFC_water_2_3_tC_10', // Meter Amount
        'pghq_CHCPFC_water_1_5_1_15', // Annual Amount
      ],
      'calculation': function (a, b, c) {
      	return toFixed (handlers.convertGallons(a, b) / c, 1);
      }
    },
    'pghq_CHCPFC_water_2_3_tC_16': {
      'args': [
        'pghq_CHCPFC_water_2_3_tC_15', // Units
        'pghq_CHCPFC_water_2_3_tC_14', // Meter Amount
        'pghq_CHCPFC_water_1_5_1_15', // Annual Amount
      ],
      'calculation': function (a, b, c) {
      	return toFixed (handlers.convertGallons(a, b) / c, 1);
      }
    },
    'pghq_CHCPFC_water_2_3_tC_20': {
      'args': [
        'pghq_CHCPFC_water_2_3_tC_19', // Units
        'pghq_CHCPFC_water_2_3_tC_18', // Meter Amount
        'pghq_CHCPFC_water_1_5_1_15', // Annual Amount
      ],
      'calculation': function (a, b, c) {
      	return toFixed (handlers.convertGallons(a, b) / c, 1);
      }
    },
    'pghq_CHCPFC_water_2_3_tC_24': {
      'args': [
        'pghq_CHCPFC_water_2_3_tC_23', // Units
        'pghq_CHCPFC_water_2_3_tC_22', // Meter Amount
        'pghq_CHCPFC_water_1_5_1_15', // Annual Amount
      ],
      'calculation': function (a, b, c) {
      	return toFixed (handlers.convertGallons(a, b) / c, 1);
      }
    },
    'pghq_CHCPFC_water_2_3_tC_28': {
      'args': [
        'pghq_CHCPFC_water_2_3_tC_27', // Units
        'pghq_CHCPFC_water_2_3_tC_26', // Meter Amount
        'pghq_CHCPFC_water_1_5_1_15', // Annual Amount
      ],
      'calculation': function (a, b, c) {
      	return toFixed (handlers.convertGallons(a, b) / c, 1);
      }
    },
    'pghq_CHCPFC_water_2_3_tC_32': {
      'args': [
        'pghq_CHCPFC_water_2_3_tC_31', // Units
        'pghq_CHCPFC_water_2_3_tC_30', // Meter Amount
        'pghq_CHCPFC_water_1_5_1_15', // Annual Amount
      ],
      'calculation': function (a, b, c) {
      	return toFixed (handlers.convertGallons(a, b) / c, 1);
      }
    },
    'pghq_CHCPFC_water_2_3_tC_36': {
      'args': [
        'pghq_CHCPFC_water_2_3_tC_35', // Units
        'pghq_CHCPFC_water_2_3_tC_34', // Meter Amount
        'pghq_CHCPFC_water_1_5_1_15', // Annual Amount
      ],
      'calculation': function (a, b, c) {
      	return toFixed (handlers.convertGallons(a, b) / c, 1);
      }
    },
    'pghq_CHCPFC_water_2_3_tC_40': {
      'args': [
        'pghq_CHCPFC_water_2_3_tC_39', // Units
        'pghq_CHCPFC_water_2_3_tC_38', // Meter Amount
        'pghq_CHCPFC_water_1_5_1_15', // Annual Amount
      ],
      'calculation': function (a, b, c) {
      	return toFixed (handlers.convertGallons(a, b) / c, 1);
      }
    },
    'pghq_CHCPFC_water_2_5': {
      'args': [
        'pghq_CHCPFC_water_1_5_1_14',
        'pghq_CHCPFC_water_1_5_1_13',
        'pghq_CHCPFC_water_2_4_1'
      ],
      'calculation': function() {
	      return toFixed(handlers.convertGallonsAndDivide.apply(this, arguments), 2);
      }
    },
    'pghq_CHCPFC_water_3_1tE_21': {
      'args': [
        'pghq_CHCPFC_water_3_1tE_3',
        'pghq_CHCPFC_water_3_1tE_7',
        'pghq_CHCPFC_water_3_1tE_11',
        'pghq_CHCPFC_water_3_1tE_15',
        'pghq_CHCPFC_water_3_1tE_19'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 0);
      }
    },
    'pghq_CHCPFC_water_3_1tE_22': {
      'args': [
        'pghq_CHCPFC_water_3_1tE_4',
        'pghq_CHCPFC_water_3_1tE_8',
        'pghq_CHCPFC_water_3_1tE_12',
        'pghq_CHCPFC_water_3_1tE_16',
        'pghq_CHCPFC_water_3_1tE_20'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 0);
      }
    },

    //
    // CHCPFC Climate formulas
    //
    'pghq_CHCPFC_climate_1_5_25': {
      'args': [
        'pghq_CHCPFC_climate_1_5_1',
        'pghq_CHCPFC_climate_1_5_2',
        'pghq_CHCPFC_climate_1_5_3',
        'pghq_CHCPFC_climate_1_5_4',
        'pghq_CHCPFC_climate_1_5_5',
        'pghq_CHCPFC_climate_1_5_6',
        'pghq_CHCPFC_climate_1_5_7',
        'pghq_CHCPFC_climate_1_5_7_1',
        'pghq_CHCPFC_climate_1_5_9',
        'pghq_CHCPFC_climate_1_5_10',
        'pghq_CHCPFC_climate_1_5_11',
        'pghq_CHCPFC_climate_1_5_12',
        'pghq_CHCPFC_climate_1_5_13',
        'pghq_CHCPFC_climate_1_5_14',
        'pghq_CHCPFC_climate_1_5_16',
        'pghq_CHCPFC_climate_1_5_17',
        'pghq_CHCPFC_climate_1_5_18',
        'pghq_CHCPFC_climate_1_5_19',
        'pghq_CHCPFC_climate_1_5_20',
        'pghq_CHCPFC_climate_1_5_21',
        'pghq_CHCPFC_climate_1_5_22',
        'pghq_CHCPFC_climate_1_5_24'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 0);
      }
    },
    'pghq_CHCPFC_climate_3_2_6_21': {
      'args': [
        'pghq_CHCPFC_climate_3_2_6_3',
        'pghq_CHCPFC_climate_3_2_6_7',
        'pghq_CHCPFC_climate_3_2_6_11',
        'pghq_CHCPFC_climate_3_2_6_15',
        'pghq_CHCPFC_climate_3_2_6_19'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 0);
      }
    },
    'pghq_CHCPFC_climate_3_2_6_22': {
      'args': [
        'pghq_CHCPFC_climate_3_2_6_4',
        'pghq_CHCPFC_climate_3_2_6_8',
        'pghq_CHCPFC_climate_3_2_6_12',
        'pghq_CHCPFC_climate_3_2_6_16',
        'pghq_CHCPFC_climate_3_2_6_20'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 0);
      }
    },

    //
    // CHCPFC Green Building formulas
    //
    'pghq_CHCPFC_greenbuilding_4_2_tC_3': {
      'args': [
        'pghq_CHCPFC_greenbuilding_4_2_tC_1',
        'pghq_CHCPFC_greenbuilding_4_2_tC_7'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
	  'pghq_CHCPFC_greenbuilding_4_2_tC_6': {
      'args': [
        'pghq_CHCPFC_greenbuilding_4_2_tC_4',
        'pghq_CHCPFC_greenbuilding_4_2_tC_7'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    },
    'pghq_CHCPFC_greenbuilding_4_2_tC_7': {
      'args': [
        'pghq_CHCPFC_greenbuilding_4_2_tC_1',
        'pghq_CHCPFC_greenbuilding_4_2_tC_4'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 2);
      }
    },
    'pghq_CHCPFC_greenbuilding_4_2_tC_8': {
      'args': [
        'pghq_CHCPFC_greenbuilding_4_2_tC_2',
        'pghq_CHCPFC_greenbuilding_4_2_tC_5'
      ],
      'calculation': function() {
	      return toFixed(handlers.sum.apply(this, arguments), 2);
      }
    },

    //
    // CHCPFC Appendix A formulas
    //
    'pghq_CHCPFC_appendixa_1_8t_1': {
      'args': [
        'pghq_CHCPFC_appendixa_1_7_1t_1', // amount 1
        'pghq_CHCPFC_appendixa_1_7_2t_2', // amount 2
        'pghq_CHCPFC_appendixa_1_7_3t_1', // amount 3
        'pghq_CHCPFC_appendixa_1_7_4t_1', // amount 4
        'pghq_CHCPFC_appendixa_1_7_5t_1', // amount 5
        'pghq_CHCPFC_appendixa_1_7_6t_1', // amount 6
        'pghq_CHCPFC_appendixa_1_7_7t_2', // amount 7
        'pghq_CHCPFC_appendixa_1_7_8t_2', // amount 8
        'pghq_CHCPFC_appendixa_1_7_9t_1', // amount 9
        'pghq_CHCPFC_appendixa_1_7_10t_1', // amount 10
        'pghq_CHCPFC_appendixa_1_7_11t_1', // amount 11
        'pghq_CHCPFC_appendixa_1_7_12t_1', // amount 12
        'pghq_CHCPFC_appendixa_1_7_12t_2', // units 12
        'pghq_CHCPFC_appendixa_1_7_13t_1', // amount 13
        'pghq_CHCPFC_appendixa_1_7_13t_2', // units 13
        'pghq_CHCPFC_appendixa_1_7_14t_2', // amount 14
        'pghq_CHCPFC_appendixa_1_7_15t_1', // amount 15
        'pghq_CHCPFC_appendixa_1_7_16t_1', // amount 16
        'pghq_CHCPFC_appendixa_1_7_17t_1', // amount 17
        'pghq_CHCPFC_appendixa_1_7_18t_1', // amount 18
        'pghq_CHCPFC_appendixa_1_7_19t_1', // amount 19
        'pghq_CHCPFC_appendixa_1_7_20t_1', // amount 20
        'pghq_CHCPFC_appendixa_1_7_21t_1', // amount 21
        'pghq_CHCPFC_appendixa_1_7_22t_1', // amount 22
        'pghq_CHCPFC_appendixa_1_7_23t_1', // amount 23
        'pghq_CHCPFC_appendixa_1_7_24t_1', // amount 24
        'pghq_CHCPFC_appendixa_1_7_25t_1', // amount 25
        'pghq_CHCPFC_appendixa_1_7_26t_1', // amount 26
        'pghq_CHCPFC_appendixa_1_7_27t_1', // amount 27
        'pghq_CHCPFC_appendixa_1_7_28t_1', // amount 28
        'pghq_CHCPFC_appendixa_1_7_29t_1', // amount 29
        'pghq_CHCPFC_appendixa_1_7_30t_1', // amount 30
        'pghq_CHCPFC_appendixa_1_7_30t_2', // units 30
        'pghq_CHCPFC_appendixa_1_7_31t_1', // amount 31
        'pghq_CHCPFC_appendixa_1_7_31t_2' // units 31
      ],
      'calculation': function (amount1, amount2, amount3, amount4, amount5, amount6, amount7, amount8, amount9, amount10, amount11, amount12, units12, amount13, units13, amount14, amount15, amount16, amount17, amount18, amount19, amount20, amount21, amount22, amount23, amount24, amount25, amount26, amount27, amount28, amount29, amount30, units30, amount31, units31) {
      	var converted12 = 0;
      	var converted13 = 0;
      	var converted30 = 0;
      	var converted31 = 0;
      	if (units12 === 'Gallons') {
      		converted12 = amount12 * 0.004;
      	} else {
      		converted12 = amount12;
      	}
      	if (units13 === 'Gallons') {
      		converted13 = amount13 * 0.004;
      	} else {
      		converted13 = amount13;
      	}
      	if (units30 === 'Gallons') {
      		converted30 = amount30 * 0.004;
      	} else {
      		converted30 = amount30;
      	}
      	if (units31 === 'Gallons') {
      		converted31 = amount31 * 0.004;
      	} else {
      		converted31 = amount31;
      	}
 
        var values = [
          amount1,
          amount2,
          amount3,
          amount4,
          amount5,
          amount6,
          amount7,
          amount8,
          amount9,
          amount10,
          amount11,
          converted12,
          converted13,
          amount14,
          amount15,
          amount16,
          amount17,
          amount18,
          amount19,
          amount20,
          amount21,
          amount22,
          amount23,
          amount24,
          amount25,
          amount26,
          amount27,
          amount28,
          amount29,
          converted30,
          converted31
        ];
 
        var sum = 0;
        for (var index = 0; index < values.length; index++) {
          if (!isNaN(values[index])) {
            sum += values[index];
          }
        }
 
      	return toFixed(sum, 2);
      }
    },
    'pghq_CHCPFC_appendixa_1_8t_2': {
      'args': [
        'pghq_CHCPFC_appendixa_1_7_1t_2', // cost 1
        'pghq_CHCPFC_appendixa_1_7_2t_3', // cost 2
        'pghq_CHCPFC_appendixa_1_7_3t_2', // cost 3
        'pghq_CHCPFC_appendixa_1_7_4t_2', // cost 4
        'pghq_CHCPFC_appendixa_1_7_5t_2', // cost 5
        'pghq_CHCPFC_appendixa_1_7_6t_2', // cost 6
        'pghq_CHCPFC_appendixa_1_7_7t_3', // cost 7
        'pghq_CHCPFC_appendixa_1_7_8t_3', // cost 8
        'pghq_CHCPFC_appendixa_1_7_9t_2', // cost 9
        'pghq_CHCPFC_appendixa_1_7_10t_2', // cost 10
        'pghq_CHCPFC_appendixa_1_7_11t_2', // cost 11
        'pghq_CHCPFC_appendixa_1_7_12t_3', // cost 12
        'pghq_CHCPFC_appendixa_1_7_13t_3', // cost 13
        'pghq_CHCPFC_appendixa_1_7_14t_3', // cost 14
        'pghq_CHCPFC_appendixa_1_7_15t_2', // cost 15
        'pghq_CHCPFC_appendixa_1_7_16t_2', // cost 16
        'pghq_CHCPFC_appendixa_1_7_17t_2', // cost 17
        'pghq_CHCPFC_appendixa_1_7_18t_2', // cost 18
        'pghq_CHCPFC_appendixa_1_7_19t_2', // cost 19
        'pghq_CHCPFC_appendixa_1_7_20t_2', // cost 20
        'pghq_CHCPFC_appendixa_1_7_21t_2', // cost 21
        'pghq_CHCPFC_appendixa_1_7_22t_2', // cost 22
        'pghq_CHCPFC_appendixa_1_7_23t_2', // cost 23
        'pghq_CHCPFC_appendixa_1_7_24t_2', // cost 24
        'pghq_CHCPFC_appendixa_1_7_25t_2', // cost 25
        'pghq_CHCPFC_appendixa_1_7_26t_2', // cost 26
        'pghq_CHCPFC_appendixa_1_7_27t_2', // cost 27
        'pghq_CHCPFC_appendixa_1_7_28t_2', // cost 28
        'pghq_CHCPFC_appendixa_1_7_29t_2', // cost 29
        'pghq_CHCPFC_appendixa_1_7_30t_3', // cost 30
        'pghq_CHCPFC_appendixa_1_7_31t_3', // cost 31
      ],
      'calculation': function (cost1, cost2, cost3, cost4, cost5, cost6, cost7, cost8, cost9, cost10, cost11, cost12, cost13, cost14, cost15, cost16, cost17, cost18, cost19, cost20, cost21, cost22, cost23, cost24, cost25, cost26, cost27, cost28, cost29, cost30, cost31) {
 
        var values = [
          cost1,
          cost2,
          cost3,
          cost4,
          cost5,
          cost6,
          cost7,
          cost8,
          cost9,
          cost10,
          cost11,
          cost12,
          cost13,
          cost14,
          cost15,
          cost16,
          cost17,
          cost18,
          cost19,
          cost20,
          cost21,
          cost22,
          cost23,
          cost24,
          cost25,
          cost26,
          cost27,
          cost28,
          cost29,
          cost30,
          cost31
        ];
 
        var sum = 0;
        for (var index = 0; index < values.length; index++) {
          if (!isNaN(values[index])) {
            sum += values[index];
          }
        }
 
      	return toFixed(sum, 0);
      }
    },
    'pghq_CHCPFC_appendixa_1_9t_1': {
      'args': [
        'pghq_CHCPFC_appendixa_1_7_1t_1', // amount 1
        'pghq_CHCPFC_appendixa_1_7_3t_1', // amount 3
        'pghq_CHCPFC_appendixa_1_7_4t_1', // amount 4
        'pghq_CHCPFC_appendixa_1_7_5t_1', // amount 5
        'pghq_CHCPFC_appendixa_1_7_6t_1', // amount 6
        'pghq_CHCPFC_appendixa_1_7_9t_1', // amount 9
        'pghq_CHCPFC_appendixa_1_7_10t_1', // amount 10
        'pghq_CHCPFC_appendixa_1_7_11t_1', // amount 11
        'pghq_CHCPFC_appendixa_1_7_12t_1', // amount 12
        'pghq_CHCPFC_appendixa_1_7_12t_2', // units 12
        'pghq_CHCPFC_appendixa_1_7_13t_1', // amount 13
        'pghq_CHCPFC_appendixa_1_7_13t_2', // units 13
        'pghq_CHCPFC_appendixa_1_7_15t_1', // amount 15
        'pghq_CHCPFC_appendixa_1_7_16t_1', // amount 16
        'pghq_CHCPFC_appendixa_1_7_17t_1', // amount 17
        'pghq_CHCPFC_appendixa_1_7_18t_1', // amount 18
        'pghq_CHCPFC_appendixa_1_7_19t_1', // amount 19
        'pghq_CHCPFC_appendixa_1_7_20t_1', // amount 20
        'pghq_CHCPFC_appendixa_1_7_21t_1', // amount 21
        'pghq_CHCPFC_appendixa_1_7_22t_1', // amount 22
        'pghq_CHCPFC_appendixa_1_7_23t_1', // amount 23
        'pghq_CHCPFC_appendixa_1_7_24t_1', // amount 24
        'pghq_CHCPFC_appendixa_1_7_25t_1', // amount 25
        'pghq_CHCPFC_appendixa_1_7_26t_1', // amount 26
        'pghq_CHCPFC_appendixa_1_7_27t_1', // amount 27
        'pghq_CHCPFC_appendixa_1_7_28t_1', // amount 28
        'pghq_CHCPFC_appendixa_1_7_29t_1' // amount 29
      ],
      'calculation': function (amount1, amount3, amount4, amount5, amount6, amount9, amount10, amount11, amount12, units12, amount13, units13, amount15, amount16, amount17, amount18, amount19, amount20, amount21, amount22, amount23, amount24, amount25, amount26, amount27, amount28, amount29) {

      	var converted12 = 0;
      	var converted13 = 0;

      	if (units12 === 'Gallons') {
      		converted12 = amount12 * 0.004;
      	} else {
      		converted12 = amount12;
      	}
      	if (units13 === 'Gallons') {
      		converted13 = amount13 * 0.004;
      	} else {
      		converted13 = amount13;
      	}
 
        var values = [
          amount1,
          amount3,
          amount4,
          amount5,
          amount6,
          amount9,
          amount10,
          amount11,
          converted12,
          converted13,
          amount15,
          amount16,
          amount17,
          amount18,
          amount19,
          amount20,
          amount21,
          amount22,
          amount23,
          amount24,
          amount25,
          amount26,
          amount27,
          amount28,
          amount29
        ];
 
        var sum = 0;
        for (var index = 0; index < values.length; index++) {
          if (!isNaN(values[index])) {
            sum += values[index];
          }
        }
 
      	return toFixed(sum, 2);
      }
    },
    'pghq_CHCPFC_appendixa_1_9t_2': {
      'args': [
        'pghq_CHCPFC_appendixa_1_7_1t_2', // cost 1
        'pghq_CHCPFC_appendixa_1_7_3t_2', // cost 3
        'pghq_CHCPFC_appendixa_1_7_4t_2', // cost 4
        'pghq_CHCPFC_appendixa_1_7_5t_2', // cost 5
        'pghq_CHCPFC_appendixa_1_7_6t_2', // cost 6
        'pghq_CHCPFC_appendixa_1_7_9t_2', // cost 9
        'pghq_CHCPFC_appendixa_1_7_10t_2', // cost 10
        'pghq_CHCPFC_appendixa_1_7_11t_2', // cost 11
        'pghq_CHCPFC_appendixa_1_7_12t_3', // cost 12
        'pghq_CHCPFC_appendixa_1_7_13t_3', // cost 13
        'pghq_CHCPFC_appendixa_1_7_15t_2', // cost 15
        'pghq_CHCPFC_appendixa_1_7_16t_2', // cost 16
        'pghq_CHCPFC_appendixa_1_7_17t_2', // cost 17
        'pghq_CHCPFC_appendixa_1_7_18t_2', // cost 18
        'pghq_CHCPFC_appendixa_1_7_19t_2', // cost 19
        'pghq_CHCPFC_appendixa_1_7_20t_2', // cost 20
        'pghq_CHCPFC_appendixa_1_7_21t_2', // cost 21
        'pghq_CHCPFC_appendixa_1_7_22t_2', // cost 22
        'pghq_CHCPFC_appendixa_1_7_23t_2', // cost 23
        'pghq_CHCPFC_appendixa_1_7_24t_2', // cost 24
        'pghq_CHCPFC_appendixa_1_7_25t_2', // cost 25
        'pghq_CHCPFC_appendixa_1_7_26t_2', // cost 26
        'pghq_CHCPFC_appendixa_1_7_27t_2', // cost 27
        'pghq_CHCPFC_appendixa_1_7_28t_2', // cost 28
        'pghq_CHCPFC_appendixa_1_7_29t_2' // cost 29
      ],
      'calculation': function (cost1, cost3, cost4, cost5, cost6, cost9, cost10, cost11, cost12, cost13, cost15, cost16, cost17, cost18, cost19, cost20, cost21, cost22, cost23, cost24, cost25, cost26, cost27, cost28, cost29) {
 
        var values = [
          cost1,
          cost3,
          cost4,
          cost5,
          cost6,
          cost9,
          cost10,
          cost11,
          cost12,
          cost13,
          cost15,
          cost16,
          cost17,
          cost18,
          cost19,
          cost20,
          cost21,
          cost22,
          cost23,
          cost24,
          cost25,
          cost26,
          cost27,
          cost28,
          cost29
        ];
 
        var sum = 0;
        for (var index = 0; index < values.length; index++) {
          if (!isNaN(values[index])) {
            sum += values[index];
          }
        }
 
      	return toFixed(sum, 0);
      }
    },
    'pghq_CHCPFC_appendixa_1_10t_1': {
      'args': [
        'pghq_CHCPFC_appendixa_1_7_2t_2', // amount 2
        'pghq_CHCPFC_appendixa_1_7_7t_2', // amount 7
        'pghq_CHCPFC_appendixa_1_7_8t_2', // amount 8
        'pghq_CHCPFC_appendixa_1_7_14t_2', // amount 14
        'pghq_CHCPFC_appendixa_1_7_30t_1', // amount 30
        'pghq_CHCPFC_appendixa_1_7_30t_2', // units 30
        'pghq_CHCPFC_appendixa_1_7_31t_1', // amount 31
        'pghq_CHCPFC_appendixa_1_7_31t_2' // units 31
      ],
      'calculation': function (amount2, amount7, amount8, amount14, amount30, units30, amount31, units31) {

      	var converted30 = 0;
      	var converted31 = 0;

      	if (units30 === 'Gallons') {
      		converted30 = amount30 * 0.004;
      	} else {
      		converted30 = amount30;
      	}
      	if (units31 === 'Gallons') {
      		converted31 = amount31 * 0.004;
      	} else {
      		converted31 = amount31;
      	}
 
        var values = [
          amount2,
          amount7,
          amount8,
          amount14,
          converted30,
          converted31
        ];
 
        var sum = 0;
        for (var index = 0; index < values.length; index++) {
          if (!isNaN(values[index])) {
            sum += values[index];
          }
        }
 
      	return toFixed(sum, 2);
      }
    },
    'pghq_CHCPFC_appendixa_1_10t_2': {
      'args': [
        'pghq_CHCPFC_appendixa_1_7_2t_3', // cost 2
        'pghq_CHCPFC_appendixa_1_7_7t_3', // cost 7
        'pghq_CHCPFC_appendixa_1_7_8t_3', // cost 8
        'pghq_CHCPFC_appendixa_1_7_14t_3', // cost 14
        'pghq_CHCPFC_appendixa_1_7_30t_3', // cost 30
        'pghq_CHCPFC_appendixa_1_7_31t_3', // cost 31
      ],
      'calculation': function (cost2, cost7, cost8, cost14, cost30, cost31) {
 
        var values = [
          cost2,
          cost7,
          cost8,
          cost14,
          cost30,
          cost31
        ];
 
        var sum = 0;
        for (var index = 0; index < values.length; index++) {
          if (!isNaN(values[index])) {
            sum += values[index];
          }
        }
 
      	return toFixed(sum, 0);
      }
    },

		//
		// System for Change formulas
		//
    'pghq_SFC_2_6': {
      'args': [
        'pghq_SFC_2_5',
        'pghq_SFC_2_1'
      ],
      'calculation': function() {
	      return toFixed(handlers.divide.apply(this, arguments) * 100, 1);
      }
    }
  };

})(Drupal);