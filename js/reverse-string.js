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
  console.log(reverseWord(word.value));
  word.value = "";
});
