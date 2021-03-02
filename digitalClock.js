console.log("JavaScript - Digital Clock");

let seconds = 0;
const secondsParagraphs = document.querySelectorAll(".seconds p");

let minutes = 0;
const minutesParagraphs = document.querySelectorAll(".minutes p");

let hours = 0;
const hoursParagraphs = document.querySelectorAll(".hours p");

let t;
var split = null;
var interval = null;
var times = document.getElementById('times');
// //define variable to hold setInterval() function
// let interval = null;//null because we do not want the function to run when the user loads the page 
// //define variable to hold stopwatch status
// let status = "stopped";





//stopwatch function (logic to determine when to increment next value)
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

//function to display updated time values to user
function renderDigits(nr, pList) {
  const stringDigits = nr + "";//transforma numarul in string, si concateneaza nr cu string gol
  const digitList = stringDigits.split("");//transformam valoarea lui stringDigits intr-un array cu 1 sau 2 elemente; asta face metoda split

  if (digitList.length === 2) {
    pList[0].innerText = digitList[0];
    pList[1].innerText = digitList[1];
  } else {
    pList[0].innerText = 0;
    pList[1].innerText = digitList[0];
  }
}


//start button
// document.getElementById("button-start").addEventListener("click", startBtn);
// function startBtn(){
//     // if (status === "stopped"){
//         //start the stopwatch by calling the setInterval() function
//         interval = window.setInterval(stopWatch, 100);
//         // document.getElementById("button-start").innerHTML = "Start";
//     //     status = "stopped";
//     // }
// };


// //stop button
// document.getElementById("button-stop").addEventListener("click", stopBtn);
// function stopBtn(){
//     if (status === "started"){
//         //start the stopwatch by calling the setInterval() function
//         window.clearInterval(interval);
       
//     }
// };

document.getElementById("button-start").addEventListener("click", startTime);
function startTime(){
    t = setInterval(stopwatchTimer,100);
    // document.getElementById("button-start").disabled = true;
}

document.getElementById("button-stop").addEventListener("click", stopTime);
function stopTime(){
    clearInterval(t);
    // document.getElementById("button-start").disabled = true;
}

 document.getElementById("button-reset").addEventListener("click", resetTime);
 function resetTime(){
     clearInterval(t);
     seconds = 0;
     minutes = 0;
     hours = 0;
    stopwatchTimer();
 }


 document.getElementById("button-save").addEventListener("click", saveTime);
 function saveTime(){ 
  
  }
 






//  document.getElementById("button-save").addEventListener("click", function(){
//       console.log(`${hours}:${minutes}:${seconds}`);
//   }) //prints in console