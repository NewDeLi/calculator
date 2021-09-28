// TODO: import things from other modules here

const handleCalculate = (event) => {
  // TODO: use event.target to figure out the operation, then calculate and output the result
};

const handleRandom = (event) => {
  // TODO: use event.target to decide which inputs value to set to a random number
};

document.querySelectorAll('[data-calculate]').forEach((buttonCalculate) => {
  buttonCalculate.addEventListener('click', handleCalculate);
});

document.querySelectorAll('[data-random-for-input]').forEach((buttonRandom) => {
  buttonRandom.addEventListener('click', handleRandom);
});
