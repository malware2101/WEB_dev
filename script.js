const display = document.getElementById("display");
let timer = null;
let starter = 0;
let elapsed = 0;
let isRunning = false;

function start() {
    if (!isRunning) {
        starter = Date.now() - elapsed; // Calculate the new start time.
        timer = setInterval(update, 10); // Start the interval.
        isRunning = true;
    }
}

function stop() {
    if (isRunning) {
        clearInterval(timer); // Stop the timer.
        elapsed = Date.now() - starter; // Save the elapsed time.
        isRunning = false;
    }
}

function reset() {
    clearInterval(timer); // Stop any ongoing timer.
    starter = 0; // Reset the starter time.
    elapsed = 0; // Reset elapsed time.
    isRunning = false; // Mark the timer as not running.
    display.textContent = "00:00:00:00"; // Reset the display.
}

function update() {
    const current = Date.now();
    elapsed = current - starter; // Update elapsed time.

    let hour = Math.floor(elapsed / (1000 * 60 * 60));
    let min = Math.floor((elapsed / (1000 * 60)) % 60);
    let sec = Math.floor((elapsed / 1000) % 60);
    let msec = Math.floor((elapsed % 1000) / 10); // Calculate milliseconds.

    // Format time components with leading zeros.
    hour = String(hour).padStart(2, "0");
    min = String(min).padStart(2, "0");
    sec = String(sec).padStart(2, "0");
    msec = String(msec).padStart(2, "0");

    // Update the display.
    display.textContent = `${hour}:${min}:${sec}:${msec}`;
}
