const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = (veg) => {
      console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
}

const accept = (veg) => {
  console.log(`Ok, I guess I will eat some ${veg}.`);
}

// Write your code here:

const declineEverything = array => {
  array.forEach(politelyDecline);
};

// declineEverything(veggies);

const acceptEverything = array => {
  array.forEach(accept)
}

acceptEverything(veggies);

politelyDecline(veggies);

function vegetables(array) {
    console.log(array);
}
veggies.forEach(vegetables);

