let value = 0;
const value_display = document.getElementById('value');
value_display.textContent = value
const increase = document.getElementById('increment');
const decrease = document.getElementById('decrement');
const reset = document.getElementById('reset');
increase.onclick = function(){
    value += 1;
    value_display.textContent = value;
}
decrease.onclick = function(){
    value -= 1;
    value_display.textContent = value;
}
reset.onclick = function(){
    value = 0;
    value_display.textContent = value;
}