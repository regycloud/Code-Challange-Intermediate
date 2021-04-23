// Write your code here:
const caps = array => array.toUpperCase() + '!';
const shoutGreetings = arr => {
  return arr.map(caps);
}
// const shoutGreetings = arr => arr.map(word => word.toUpperCase() + '!');




// Feel free to uncomment out the code below to test your function!

const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];

console.log(shoutGreetings(greetings))
// Should print [ 'HELLO!', 'HI!', 'HEYA!', 'OI!', 'HEY!', 'YO!' ]

