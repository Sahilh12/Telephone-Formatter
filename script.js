const userInput = document.querySelector("input");
const para = document.querySelector("p");
let preVal = " ";
userInput.addEventListener("input", (e) => {
  const inputVal = e.target.value;
  if (/\d+$/g.test(inputVal)) {
    userInput.value = inputVal;
  } else {
    userInput.value = inputVal.substring(0, inputVal.length - 1);
  }

  if (inputVal.length === 4 && preVal.length < inputVal.length) {
    userInput.value = `+(${inputVal.substring(0, 3)}) - ${
      inputVal[inputVal.length - 1]
    }`;
  } else if (inputVal.length === 9 && preVal.length > inputVal.length) {
    userInput.value = inputVal.slice(2, 5);
  }
  preVal = inputVal;
});
