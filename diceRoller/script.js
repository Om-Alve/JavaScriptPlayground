const result = document.getElementById('result');
const num_dice = document.getElementById('n');
const rollbtn = document.getElementById('roll');


rollbtn.onclick = function(){
    let rolls = [];
    result.innerHTML="";
    for(let i=0;i<Number(num_dice.value);i++){
        rolls.push(Math.floor(Math.random() * 5) + 1);
        result.innerHTML+= `
        <img src = 'dice/Dice-${rolls[i]}.svg.png' height=100px width=100px style="padding:10px">
        `;
    }
}