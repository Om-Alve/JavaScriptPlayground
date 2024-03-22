let value = 0;
value_display = document.getElementById('value');
value_display.textContent = value
increase = document.getElementById('increment');
decrease = document.getElementById('decrement');
reset = document.getElementById('reset');
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