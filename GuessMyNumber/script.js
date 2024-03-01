"use strict"
let number=Math.trunc((Math.random()*20));
let score=20
console.log(number)
localStorage.setItem("high","0")
document.getElementById("highestScore").innerHTML=`Highest score ${localStorage.getItem("high")}`
// document.getElementById("score").innerHTML=`score: ${score}`

function check(){
    document.getElementById("score").innerHTML=`score: ${score}`
    document.getElementById("highestScore").innerHTML=`Highest score: ${localStorage.getItem("high")}`

    let guess=Number(document.getElementById("inputBox").value)
    if (document.getElementById("score").innerHTML===`score: 0`){
        document.getElementById("text").innerHTML="Looser"
        return null}
    if(guess===number)
    {document.body.style.backgroundColor="green";
    document.getElementById("score").innerHTML=`score: ${score}`;
    document.getElementById("text").innerHTML="That's right,boy🔥🔥"
    localStorage.setItem("high",String(score))
    document.getElementById("highestScore").innerHTML=`Highest score ${localStorage.getItem("high")}`

    }
    
    else    
    {document.body.style.backgroundColor="red";
    score--;
    
    if(number-guess===1||number-guess===-1){
        document.getElementById("text").innerHTML="Soooo close"
    }
    else if(number-guess>2&& number-guess<5|| number-guess<2&&number-guess>-5){
        document.getElementById("text").innerHTML="Close";
    }
    else if(number-guess>8&&number-guess<14||number-guess<8&&number-guess>14){
        document.getElementById("text").innerHTML="Far"
        
    }
    else
    document.getElementById("text").innerHTML="Too far, kidoo"
}


    }
function again(){
    score=20
    number=Math.trunc(Math.random()*20)
    document.body.style.backgroundColor="dimgray";
    document.getElementById("text").innerHTML="Start guessing again "
}
