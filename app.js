let userScore=0;
let compScore=0;
let choices= document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
const userscorePara=document.querySelector("#user-score");
const compscorePara=document.querySelector("#comp-score");



choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{     //user choice
        const userChoice=choice.getAttribute("id");
        // console.log("choice was clicked by ",userChoice);
        playGame(userChoice);
    });
});


const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame=()=>{
    console.log("Draw game");
    msg.innerText="DRAW GAME!!!"
    msg.style.backgroundColor="blue";
}


const showWinner=(userwin,userChoice,compchoice)=>{
    if(userwin){
        userScore++;
        userscorePara.innerText=userScore;
        console.log("you win!!!")
        msg.innerText=`YOU WIN!!! ${userChoice} beats ${compchoice}`
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compscorePara.innerText=compScore;
        console.log("computer win!!!")
        msg.innerText =`COMPUTER WIN!!! ${userChoice} beats ${compchoice}`
        msg.style.backgroundColor="red";
    }
}

const playGame=(userChoice)=>{
    console.log(" user choice was clicked  ",userChoice);
//generate computer choice
const compchoice=genCompChoice();
console.log("comp choice =",compchoice);

if(compchoice===userChoice){
    //draw game
    drawGame();
}
else{
    let userwin=true;
    if(userChoice==="rock"){
        //paper,scissor
        userwin=compchoice==="paper"?false:true;
    }else if(userChoice==="paper"){
        //scissor,rock
        userwin=compchoice==="scissors"?false:true;
    }else{
        //paper,rock
        userwin=compchoice==="paper"?true:false;
    }
    showWinner(userwin,userChoice,compchoice);
}


};