
function updateTime(){
    const now = new Date();
    const time = document.getElementById('time');
    const minutes = now.getMinutes().toString().padStart(2,0);
    const seconds = now.getSeconds().toString().padStart(2,0);
    const hours = (now.getHours < 12) ? now.getHours().toString().padStart(2,0) : (now.getHours() % 12).toString().padStart(2,0);
    const merdian =  (now.getHours < 12) ? 'AM' : 'PM';
    time.textContent = `${hours} : ${minutes} : ${seconds} ${merdian}`;
}

setInterval(updateTime,1000);