const reset = document.getElementById('reset');
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const time = document.getElementById('time');
time.textContent = `00 : 00 : 00 : 00`;
hasStarted = false;
let begin = 0;
let elapsed = 0;
let id = null;
start.onclick=function() {
    if (!hasStarted){
        begin = Date.now() - elapsed;
        hasStarted = true;
        id = setInterval(update, 10);
    }
}

stop.onclick = function(){
    if(hasStarted){
        clearInterval(id);
        elapsed = Date.now() - begin;
        hasStarted = false;
    }
}

reset.onclick = function(){
    elapsed=0;
    clearInterval(id);
    hasStarted = false;
    time.textContent = `00 : 00 : 00 : 00`;
}

function update(){
    currtime = Date.now();
    elapsed = currtime - begin;
    let hours = Math.floor(elapsed / (1000 * 60 * 60));
    let minutes = Math.floor(elapsed / (1000 * 60) % 60);
    let seconds = Math.floor(elapsed / 1000 % 60);
    let miliseconds = Math.floor(elapsed % 1000 / 10);
    time.textContent = `${hours.toString().padStart(2,0)} : ${minutes.toString().padStart(2,0)} : ${seconds.toString().padStart(2,0)} : ${miliseconds.toString().padStart(2,0)}`; 
}