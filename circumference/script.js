let username;
const pi = 3.14;
document.getElementById('submit').onclick = function(){
    radius = Number(document.getElementById('radius').value);
    circumference = 2 * radius * pi;
    document.getElementById('myh1').textContent += `Circumference is ${circumferencef}`;
}