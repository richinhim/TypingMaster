const wordInput = document.querySelector("#word-input");

const currentWord = document.querySelector("#current-word");

const scoreDisplay = document.querySelector("#score");
const timeDisplay = document.querySelector("#time");
const messageDisplay = document.querySelector("#message");

const GAME_TIME = 5;

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
  "case",
  "programming",
  "mommy",
  "fafa",
  "apples",
  "graphs",
  "god",
  "brother",
  "sister",
  "lion",
  "tiger",
  "dog",
  "cat",
];
let score = 0;
let time = 0;

let timeInterval;
let isPlaying = false;

//time = GAME_TIME;

//timeInterval = setInterval(countDown, 1000);

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
// 게임 종료
function gameover() {
  console.log("gameover");
  isPlaying = false;
  clearInterval(timeInterval);
  timeInterval = null;
  messageDisplay.innerText = "GAME OVER!";
  score = 0;
}
// 시간 카운트다운
function countDown() {
  console.log(time);
  time = time - 1;
  timeDisplay.innerText = time;

  if (time === 0) {
    gameover();
  }
}

function setNewWord() {
  time = GAME_TIME;
  wordInput.value = "";
  messageDisplay.innerText = "Now Playing!!!";
  const randowIndex = Math.floor(Math.random() * words.length);
  console.log(randowIndex);

  currentWord.innerText = words[randowIndex];

  if (!isPlaying) {
    timeInterval = setInterval(countDown, 1000);
    isPlaying = true;
  }
  //timeInterval = setInterval(countDown, 1000);
}

function addScore() {
  score = score + 1;
  //console.log(score)
  scoreDisplay.innerText = score;
}
