function calculate(a, b, displayResult) {
  displayResult(a + b);
};

function displayResult(result) {
  console.log('The result is: ' + result);
}

calculate(6, 6, displayResult);