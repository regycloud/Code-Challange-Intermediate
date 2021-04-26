/* Write a function subLength() that takes 2 parameters, a string and a single character. The function should search the string for the two occurrences of the character and return the length between them including the 2 characters. If there are less than 2 or more than 2 occurrences of the character the function should return 0.

Examples:

subLength('Saturday', 'a'); // returns 6
subLength('summer', 'm'); // returns 2
subLength('digitize', 'i'); // returns 0
subLength('cheesecake', 'k'); // returns 0
*/
// Write function below
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
  
  