//JS Basics
//Run npm test in the command line to test your solutions
module.exports = {
  reverseIt: (str) => {
    return str.split('').reverse().join('');
  },

  //uncomment and finish the reverseIt function. It will take in one parameter which is a String and
  //reverse it

  removeDups: (arr) => {
    let filteredArr = [];
    
    arr.map( item => {
      if (filteredArr.indexOf(item) === - 1) {
        filteredArr.push(item)
      }
    })
    
    return filteredArr;
  },

  //uncomment and finish the removeDups function. It will take in one parameter which is an Array
  //remove all duplicates

  titleIt: (str) => {
    return str.split(' ')
              .map(word => word.charAt(0).toUpperCase() + word.substring(1))
              .join(' ');
  },

  //uncomment and finish the titleIt function. It will take in one parameter which is a String and
  //capitalize the first letter of each word

  vowelCounter: (str) => {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    
    for (var i = 0; i < str.length; i++) {
      if (vowels.includes(str.charAt(i).toLowerCase())) {
        count += 1;
      }
    }
    
    return count; 
  },

  //uncomment and finish the vowelCounter function. It will take in one parameter which is a String and
  //return the number of vowels in the string

  isPrime: (num) => {
    if (!Number.isInteger(num) || num <= 1) {
      return false;
    }
    
    for (var i = 2; i < num; i++) {
      // console.log('Dividing ' + num + ' with ' + i);
      if (Number.isInteger(num / i) && i !== num) {
        // console.log('i: ', i);
        return false
      }
    }
    
    return true;
  },

  //uncomment and finish the isPrime function. It will take in one parameter which is a Number and
  //return true if it is prime and false if it is not

  //what is the value of foo?
  //var foo = 10 + '20';
  //uncomment the foo property and give your answer as its value

  foo: '1020',

  //what is the outcome of the two console.logs below?
  //   var foo = "Hello";
  // (function() {
  //   var bar = " World";
  //   console.log(foo + bar);
  // })();
  // console.log(foo + bar);
  // uncomment the log1 and log2 properties and give your answers as their values

  log1: "Hello World",
  log2: undefined
}
