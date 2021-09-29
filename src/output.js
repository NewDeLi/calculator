const output = {
  a: document.querySelector('#output-a'),
  b: document.querySelector('#output-b'),
  operator: document.querySelector('#output-operator'),
  result: document.querySelector('#output-result'),
};

export const setOutput = ({ a = 0, b = 0, operator = '+', result = 0 }) => {
  // TODO: output the parameters to the DOM
  output.a.innerHTML = a;
  output.b.innerHTML = b;
  output.operator.innerHTML = operator;
  output.result.innerHTML = result;
};
