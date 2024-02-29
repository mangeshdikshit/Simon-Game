let started = false;
let highScore=0;
let level=0;
let gameSequence=[];
let playerSequence=[];
let btns=["yellow","green","blue","red"];

let h1=document.querySelector("h1");
let h3=document.querySelector("h3");
let red=document.querySelector("#red");
let yellow=document.querySelector("#yellow");
let blue=document.querySelector("#blue");
let green=document.querySelector("#green");





document.addEventListener("keypress", function(event){                 
    if(started == false){
        console.log("key pressed.");
        started=true;
        levelUp();
    }
});




function buttonFlash(btn){
    btn.classList.add("colorflash");
    setTimeout(function(){
        btn.classList.remove("colorflash");
    },250);
}


function levelUp(){
    playerSequence= [] ;
    level++;
    h3.innerText=`Level ${level}`;

    let randomNumber=Math.floor(Math.random()*4);
    let randColor=btns[randomNumber];
    let randBtn=document.querySelector(`.${randColor}`);
    buttonFlash(randBtn);

    gameSequence.push(randBtn);
    // console.log(randBtn);
    
}

function checkAns(idx){
    if(playerSequence[idx]===gameSequence[idx]){
        if(playerSequence.length ===  gameSequence.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        if(level>highScore){
            highScore=level;
        }
        h3.innerHTML=`Game over, Your score was ${level} <br> Press any key to start! <br> High Score = ${highScore}`;
        reset();
    }
}

function btnPress(event){
    let btn=this;
    playerSequence.push(this);
    buttonFlash(btn);
    
    checkAns(playerSequence.length-1);
}


let buttons=document.querySelectorAll(".colorsbox");

for(let btn of buttons){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started= false;
    gameSequence=[];
    playerSequence=[];
    
    level=0;
}