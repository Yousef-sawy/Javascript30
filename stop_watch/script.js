let secondsElapsed = 0;
let interval = null;
const time = document.getElementById("time")        

function padStart(value){
    return String(value).padStart(2,"0")
}

function setTime() {
    const min = Math.floor(secondsElapsed /60)
    const seconds = secondsElapsed % 60
    time.innerHTML = `${padStart(min)}:${padStart(seconds)}`;
}
function timer() {
    secondsElapsed++;
    setTime()
}

function startClock() {
    if(interval) stopClock ()
    interval = setInterval(timer, 1000)
}

function stopClock() {
    clearInterval(interval)

}

function restClock() {
    stopClock()
    secondsElapsed = 0;
    setTime()
}