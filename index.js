var answer;
function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function setRandomColor() {
  document.getElementById("result").innerText = "";
  for (let index = 1; index <= 5; index++) {
    document.getElementById(index).style.backgroundColor = getRandomColor();
  }
  generateResult();
}

function generateResult() {
  do {
    answer = Math.floor(Math.random() * (6 - 1) + 1);
  } while (answer < 1 && answer > 6);
  var answerNumbers = document.getElementById(answer).style.backgroundColor;
  document.getElementById("colorCode").innerText = answerNumbers.substr(
    3,
    answerNumbers.length
  );
  console.log(answer);
}
function checkResult(id) {
  if (document.getElementById("result").innerText.length == 0) {
    if (answer == id) {
      document.getElementById("result").innerText = "You Win!";
    } else {
      document.getElementById("result").innerText = "You Lost! Try Again.";
    }
  }
}

setRandomColor();

//console.log(parseInt(' 0xF', 16));
