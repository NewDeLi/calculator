// TODO: import things from other modules here
import { input } from "./input.js";
import { getRandomNumber } from "./random.js";
import { add, subtract, multiply, divide } from "./math.js";
import { setOutput } from "./output.js";

const handleCalculate = (event) => {
  // TODO: use event.target to figure out the operation, then calculate and output the result
  const valueA = parseInt(input.a.value);
  const valueB = parseInt(input.b.value);
  const targetOperation = event.target.dataset.calculate;

  if (targetOperation === 'add') {
    const operator = '+';
    const result = add(valueA, valueB);

    setOutput({
      a: valueA,
      b: valueB,
      operator,
      result,

    });
  } else if (targetOperation === 'subtract'){
    const operator = '-';
    const result = subtract(valueA, valueB);
    setOutput({
      a: valueA,
      b: valueB,
      operator,
      result,
    });
  }else if (targetOperation === 'multiply'){
    const operator = '*';
    const result = multiply(valueA, valueB);
    setOutput({
      a: valueA,
      b: valueB,
      operator,
      result,
    });
  } else if (targetOperation === 'divide') {
    const operator = '/';
    const result = divide(valueA, valueB);
    setOutput({
      a: valueA,
      b: valueB,
      operator,
      result,
    });
  }
};

const handleRandom = (event) => {
  // TODO: use event.target to decide which inputs value to set to a random number
  const randomNumber = getRandomNumber(1, 6);
  const targetButton = event.target.dataset.randomForInput;
  if (targetButton === 'a') {
    input.a.value = randomNumber;
  } else {
    input.b.value = randomNumber;
  }

};

document.querySelectorAll('[data-calculate]').forEach((buttonCalculate) => {
  buttonCalculate.addEventListener('click', handleCalculate);
});

document.querySelectorAll('[data-random-for-input]').forEach((buttonRandom) => {
  buttonRandom.addEventListener('click', handleRandom);
});
