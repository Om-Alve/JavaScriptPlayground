const convertbutton = document.getElementById('convert');
const inputbox = document.getElementById('temp');
const ctof = document.getElementById('ctof');
const ftoc = document.getElementById('ftoc');
const ans = document.getElementById('ans');
function fahrenheit_to_celsius(temp){
    return (temp - 32) * 5/9;
}

function celsius_to_fahrenheit(temp){
    return (temp * 9/5) + 32; 
}

convertbutton.onclick = function(){
    let temp = Number(inputbox.value);
    if (ctof.checked){
        ans.textContent = `${celsius_to_fahrenheit(temp)} Degrees Fahrenheit`;
    }
    else{
        ans.textContent = `${fahrenheit_to_celsius(temp)} Degrees Celsius`;
    }
}