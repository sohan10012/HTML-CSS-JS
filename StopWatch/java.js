let interval;
let startTime;
let elapsedTime = 0;
let running = false;

function updateTimer() {
  const now = Date.now();
  const timeElapsed = now - startTime + elapsedTime;
  const milliseconds = Math.floor(timeElapsed % 1000).toString().padStart(3, "0");
  const seconds = Math.floor((timeElapsed / 1000) % 60).toString().padStart(2, "0");
  const minutes = Math.floor((timeElapsed / (1000 * 60)) % 60).toString().padStart(2, "0");
  const hours = Math.floor((timeElapsed / (1000 * 60 * 60)) % 24).toString().padStart(2, "0");
  document.getElementById("timer").innerHTML = `${hours}:${minutes}:${seconds}.<span id="millisecond">${milliseconds}</span>`;
}

function startTimer() {
  if (!running) {
    startTime = Date.now();
    interval = setInterval(updateTimer, 1);
    running = true;
  }
}

function stop() {
  if (running) {
    clearInterval(interval);
    elapsedTime += Date.now() - startTime;
    running = false;
  }
}

function reset() {
  clearInterval(interval);
  elapsedTime = 0;
  running = false;
  document.getElementById("timer").innerHTML ='00:00:00.<span id="millisecond">000</span>';
}
