const _ = {clamp(number, lower, upper) {
    const lowerClampedValue = Math.max(number, lower);
    const clampedValue = Math.min(lowerClampedValue, upper);
    return clampedValue;
  },
  inRange(number, startValue, endValue) {
    if (endValue === undefined) {
      endValue = startValue;
      startValue = 0;
    } if (startValue > endValue) {
      let temp = startValue;
      startValue = endValue;
      endValue = temp;
    }
    let isInRange = startValue <= number && number < endValue;
    return isInRange;
  },
  words(string) {
    let words = string.split(' ');
    return words;
  },
  pad(string, length) {
    if (length < string.length) {
      return string;
    }
    let startPaddingLength = Math.floor((length - string.length)/2);
    let endPaddingLength = length - string.length - startPaddingLength;
    let paddedString = ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength);
    return paddedString;
  },
  has(object, key) {
    let hasValue = object[key];
    console.log(object[key]);
    if (hasValue) {
      return true;
    } else {
      return false;
    }
  },
  invert(object) {
    let invertedObject = {};
    for (key in object) {
      let originalValue = object[key];
      invertedObject[originalValue] = key;
    }
    // console.log(invertedObject);
    return invertedObject;
  },
  findKey(object, predicate) {
    for (key in object) {
      let value = object[key];
      let predicateReturnValue = predicate(value);
      if (predicateReturnValue) {
        return key;
      }
    }
    return undefined;
  },
  drop(array, n) {
    if (n == null) {
      n = 1;
    }
    let droppedArray = array.slice(n, array.length);
    return droppedArray;
  },
  
  dropWhile(array, predicate) {
    const cb = (element, index) => {
      return !predicate(element, index, array);
    }
    let dropNumber = array.findIndex(cb);
    let droppedArray = this.drop(array, dropNumber);
    return droppedArray;
  },
  
  chunk(array, size) {
    if (size == undefined) {
      size = 1;
    }
    let arrayChunks = [];
    for (let i = 0 ; i < array.length; i += size) {
      console.log(i, size);
      let arrayChunk = array.slice(i, i + size);
      arrayChunks.push(arrayChunk);
    }
    console.log(array, arrayChunks);
    return arrayChunks;
  }
   } ;
  
  //  console.log(_.chunk([1,2,3], 2));
  //  console.log(_.drop(["hi", "okay", "yes", "bye"], 2));
  
  // console.log(_.inRange(2,3,4));
  // console.log(_.words('hatiku dan hatinya'));
  // console.log(_.pad('hi', 5));
  // console.log(_.has({"key": "value"}, "notKey"))
  
  
  
  
  // Do not write or modify code below this line.
  module.exports = _;