const wordInput = document.querySelector("#word-input");

const currentWord = document.querySelector("#current-word");

const scoreDisplay = document.querySelector("#score");
const timeDisplay = document.querySelector("#time");
const messageDisplay = document.querySelector("#message");

let words = [
  "banana",
  "key",
  "javascript",
  "scalper",
  "joanne",
  "joshua",
  "aron",
  "mose",
  "lee",
];
let score = 0;

//console.log(randowIndex);

wordInput.addEventListener("input", (e) => {
  //const typedText = wordInput.value;
  const typedText = e.target.value;

  //console.log(typedText, e);

  const currentText = currentWord.innerText;

  console.log(typedText == currentText, typedText, currentText);
  if (typedText.toUpperCase() == currentText.toUpperCase()) {
    //console.log("같습니다.!!!");
    addScore();
    setNewWord();
  }
});

function setNewWord() {
  wordInput.value = "";
  messageDisplay.innerText = "Now Playing!!!";
  const randowIndex = Math.floor(Math.random() * words.length);
  console.log(randowIndex);

  currentWord.innerText = words[randowIndex];
}

function addScore() {
  score = score + 1;
  //console.log(score)
  scoreDisplay.innerText = score;
}
