var getMinute = document.getElementById("minute");
var getSecond = document.getElementById("second");
var getMilliSecond = document.getElementById("milliSecond");

var startBtn = document.getElementById("startBtn");

var minute = 0;
var second = 0;
var milliSecond = 0;
var interval;

function start() {
  interval = setInterval(function () {
    getMilliSecond.innerText = milliSecond;
    if (milliSecond == 100) {
      if (second < 10) {
        getSecond.innerText = "0" + second;
      } else {
        getSecond.innerText = second;
      }
      second++
      milliSecond = 0;
    }

    if (second == 9) {
      minute++
      if (minute < 10) {
        getMinute.innerText = "0" + minute;
      } else {
        getMinute.innerText = minute;
      }
      second = 0;
    }

    milliSecond++
  }, 10)
  startBtn.disabled = true
}

function stop() {
  clearInterval(interval)
  startBtn.disabled = false
}

function reset() {
  clearInterval(interval)
  getMinute.innerText = "00"
  getSecond.innerText = "00"
  getMilliSecond.innerText = "00"
}