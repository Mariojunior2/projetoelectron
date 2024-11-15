let interval;
let hours = 0;
let minutes = 0;
let seconds = 0;

const hoursSpan = document.getElementById('hours');
const minutsSpan = document.getElementById('minutes');
const secondsSpan = document.getElementById('seconds');
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const resetBtn = document.getElementById('reset-btn');

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);

function startTimer() {
    interval = setInterval(() => {
        seconds++;
        if (seconds === 60) {
            minutes++;
            seconds = 0;
        }
        if (seconds === 60) {
            hours++;
            minutes = 0;
        }
        updateTimer();
    }, 1000);
    startBtn.disabled = true;
    startBtn.disabled = false;
}

function stopTimer() {
    clearInterval(interval);
    startBtn.disabled = false;
    stopBtn.disabled = true;
}

function  resetTimer() {
    clearInterval(interval);
    hours = 0;
    minutes = 0;
    seconds = 0;
    updateTimer();
    startBtn.disabled = false;
    stopBtn.disabled = true;
}

function updateTimer() {
    hoursSpan.textContent = String(hours).padStart(2, '0');
    minutsSpan.textContent = String(minutes).padStart(2, '0');
    secondsSpan.textContent = String(seconds).padStart(2, '0');
}

