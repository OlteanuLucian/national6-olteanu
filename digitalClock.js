console.log("JavaScript - Digital Clock");

//Declared variables list 
let seconds = 0;
const secondsParagraphs = document.querySelectorAll(".seconds span");

let minutes = 0;
const minutesParagraphs = document.querySelectorAll(".minutes span");

let hours = 0;
const hoursParagraphs = document.querySelectorAll(".hours span");

let t;

//Stopwatch function (logic to determine when to increment next value)
function stopwatchTimer () {
  renderDigits(seconds, secondsParagraphs);
  renderDigits(minutes, minutesParagraphs);
  renderDigits(hours, hoursParagraphs);

  seconds++;

  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }

  if (minutes === 60) {
    minutes = 0;
    hours++;
  }

  if (hours === 24) {
    hours = 0;
  }
};

//Function to display updated time values to user
function renderDigits(nr, pList) {
  const stringDigits = nr + "";
  const digitList = stringDigits.split("");

  if (digitList.length === 2) {
    pList[0].innerText = digitList[0];
    pList[1].innerText = digitList[1];
  } else {
    pList[0].innerText = 0;
    pList[1].innerText = digitList[0];
  }
}

//Start timer when click on Start btn
document.getElementById("button-start").addEventListener("click", startTime);
function startTime(){
  t = setInterval(stopwatchTimer,10);
}

//Stop timer when click on Stop btn
document.getElementById("button-stop").addEventListener("click", stopTime);
function stopTime(){
  clearInterval(t);
}

//Reset interval  and subsequently reset list with lap values when click on Reset btn
document.getElementById("button-reset").addEventListener("click", resetTime);
  function resetTime(){
    clearInterval(t);
    seconds = 0;
    minutes = 0;
    hours = 0;
    stopwatchTimer();
    laps.innerHTML= " "; 
  }

//  Split function when click on Save btn
document.getElementById("button-save").addEventListener("click", splitTime);
  function splitTime(){
    let split = document.getElementById('laps');
    split.innerHTML += "<li>" + " " + hrs.innerHTML +  min.innerHTML +  sec.innerHTML + "</li>";
  }
