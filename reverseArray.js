// Write your code here:
const reverseArray = (array) => {
    let output = [];
    for (let i = 0; i < array.length; i++) {
      output.push(array[array.length - i - 1]);
    }
    return output;
  }
  
  
  
  
  
  
  
  // When you're ready to test your code, uncomment the below and run:
  
  const sentence = ['sense.','make', 'all', 'will', 'This'];
  
  console.log(reverseArray(sentence)) 
  // Should print ['This', 'will', 'all', 'make', 'sense.'];
  
  
  
  