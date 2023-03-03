const reverseWord = (word) => {
  let newWord = "";
  for (index = word.length - 1; index >= 0; index -= 1) {
    newWord += word[index];
  }
  return newWord;
};

const reverseString = document.querySelector("#btn-reverse-string");
reverseString.addEventListener("click", (e) => {
  e.preventDefault();
  const word = document.querySelector("#word");
  const result = document.querySelector("#reverse-word");
  console.log(reverseWord(word.value));
  console.log(result);
  if (word.value !== "") {
    result.innerHTML = `${word.value} invertida = ${reverseWord(word.value)}`;
  } else result.innerHTML = "";
  word.value = "";
});
