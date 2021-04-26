// Write function below -- factorial
const factorial = number => {
  let output = 1;
  if (number === 0) {
    return output;
  }
  for (let i = 0; i < number; i++) {
    output *= i+1
  }
  return output;
}

console.log(factorial(4));

/*
Write a function subLength() that takes 2 parameters, a string and a single character. The function should search the string for the two occurrences of the character and return the length between them including the 2 characters. If there are less than 2 or more than 2 occurrences of the character the function should return 0.
*/

// Write function below -- subLength
const subLength = (str, str1) => {
    let arr = str.split('');
    let sub = 0;
    console.log(arr);
    arr.forEach(item => {
      if (item == str1) {
        sub += 1;
      }
    });
    if (sub !== 2) {
      return 0;
    }
    return arr.indexOf(str1, 2);
  }
  
  console.log(subLength('Saturday', 'a'));
  
  


// Write function below -- Groceries

const groceries = arr => {
    let output = '';
    for (let i = 0; i < arr.length; i++) {
      output += arr[i].item;
      if (i < arr.length - 2) {
        output += ', '
      } else if (i == arr.length - 2) {
        output += ' and '
      }
    }
    return output;
  }
  
  
  (groceries( [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}] ));
  
  (groceries([{item: 'Cheese Balls'}] ));
  // // returns 'Cheese Balls'
  
  (groceries( [{item: 'Bread'}, {item: 'Butter'}] ));
  