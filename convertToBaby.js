// Write your code here:
const convertToBaby = array => {
    let output = [];
    for (let i = 0; i < array.length; i++) {
      output.push('baby '+ array[i]);
    }
    return output;
  }
  
  
  
  
  
  
  
  // When you're ready to test your code, uncomment the below and run:
  
  const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];
  
  console.log(convertToBaby(animals)); 
  