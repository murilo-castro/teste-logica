const checkNUmber = (number) => {
  let fibonacciSequence = [0, 1];
  let newNumber = 0;
  for (index = 0; index <= number; index += 1) {
    newNumber =
      fibonacciSequence[fibonacciSequence.length - 2] +
      fibonacciSequence[fibonacciSequence.length - 1];
    fibonacciSequence.push(newNumber);
    if (newNumber === number) {
      fibonacciSequence = [0, 1];
      return true;
    }
  }
  fibonacciSequence = [0, 1];
  return false;
};

const btnFibonacci = document.querySelector("#btn-fibonacci");
btnFibonacci.addEventListener("click", (e) => {
  e.preventDefault();
  const numberInput = document.querySelector("#number-input");
  const result = document.querySelector("#result");
  if (checkNUmber(Number(numberInput.value)))
    result.innerHTML = `O número ${numberInput.value} pertence a sequência.`;
  else
    result.innerHTML = `O número ${numberInput.value} não pertence a sequência.`;
  numberInput.value = "";
});
