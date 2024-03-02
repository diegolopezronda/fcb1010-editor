angular.module('fcb1010EditorApp').filter('padding', function() {
    return function(input, numZeroes) {
      if(input == null) return null;
      var paddedNumber = input.toString();
      while (paddedNumber.length < numZeroes) {
        paddedNumber = '0' + paddedNumber;
      }
      return paddedNumber;
    };
});