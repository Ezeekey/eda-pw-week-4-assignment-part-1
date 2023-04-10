console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return "Hello " + name + "!";
}
// Remember to call the function to test
console.log(helloName("Bob"));


// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  // return firstNumber + secondNumber;
  return firstNumber + secondNumber;
}
console.log("addNumbers = " + addNumbers(2, 5));

// 4. Function to multiply three numbers & return the result
function multiplyThree( x, y, z ){
  return x * y * z;
}
console.log("multiplyThree = " + multiplyThree(2, 3, 4));


// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  }
    return false;
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast( array ) {
  if (array.length > 0) {
    return array[array.length - 1];
  }
  return undefined;
}

console.log("The last item in this array is: " + getLast(["Begin", "Mid", "Last"]));
console.log("This is for an empty array: " + getLast([]));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find( value, array ){
  for (item of array) {
    if (item === value) {
      return true;
    }
  }
  return false;
}

console.log("A successful find: " + find(2, [1, 0, 3, 2, 4]));
console.log("A not successfull find: " + find("0", [0, 1, 2, 3]));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  if (string[0] === letter) {
    return true;
  }
  return false;
}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll( array ) {
  let sum = 0
  for (i of array) {
    sum += i;
  }
  return sum;
}
console.log("sumAll returns: " + sumAll([1, 2, 3, 4]));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function returnAllPositives( array ) {
  let returnArray = [];
  for (item of array) {
    if (item > 0) {
      returnArray.push(item);
    }
  }
  return returnArray;
}
console.log("Positive numbers returned in array:", returnAllPositives([0, -2, 2, 1, -5]));

// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

// Take a 10 item long array, then return a string in the format of a phone number.
function createPhoneNumber(numbers){
  let finalNumber = "(";
  
  if (numbers.length === 10) {
    for (i = 0; i < 3; i++) {
      if(numbers[i] >= 0 && numbers[i] <= 9) {
        finalNumber += numbers[i];
      } else {
        return undefined
      }
    }
    finalNumber += ") ";
    for (i = 3; i < 6; i++) {
      if(numbers[i] >= 0 && numbers[i] <= 9) {
        finalNumber += numbers[i];
      } else {
        return undefined
      }
    }
    finalNumber += "-";
    for (i = 6; i < 10; i++) {
      if(numbers[i] >= 0 && numbers[i] <= 9) {
        finalNumber += numbers[i];
      } else {
        return undefined
      }
    }
    return finalNumber;
  }
  // Not a valid number.
  return undefined;
}

console.log("A proper phone number: " + createPhoneNumber([0, 1, 2 ,3 ,4 ,5 ,6 ,7 ,8 ,9]));
console.log("A bad phone number is " + createPhoneNumber(["O", 1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log("Another bad number : " + createPhoneNumber([1]));
console.log("Yet another bad number: " + createPhoneNumber([10, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
