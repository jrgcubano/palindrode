/*
 * palindrode
 * https://github.com/jrodriguez/palindrode
 *
 * Copyright (c) 2013 jrgcubano
 * Licensed under the MIT license.
 */

'use strict';

/* Default generated export to show the process of nodeunit
exports.awesome = function() {
  return 'awesome';
};
*/

exports.test = function(string) {
  var relevantCharacters,
      filteredString,
      reversedString;

  if (typeof string !== 'string') {
    return false;
  }

  relevantCharacters = string.match(/[a-z0-9]/gi);

  if (!relevantCharacters) {
    return false;
  }

  filteredString = relevantCharacters.join('').toLowerCase();
  reversedString = filteredString.split('').reverse().join('');

  return filteredString.length > 0 && filteredString === reversedString;
};