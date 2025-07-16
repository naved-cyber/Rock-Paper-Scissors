let userscore=0;
let compscore=0;
//functions define
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg");
const scoreyou=document.querySelector(".user-score");
const scorecomp=document.querySelector(".comp-score");
const reset=document.querySelector(".reset");

let zero=()=>{
   scoreyou.innerText = "0";
   userscore=0;
   scorecomp.innerText = "0";
   compscore=0;
};


reset.addEventListener("click",()=>{
    msg.style.backgroundColor="#131D4F"
    msg.style.Color="white"
    msg.innerText="Play Your Move"
    zero();
    
})


const gencompchoice = ()=>{
    const options =["rock","paper","scissor"];
    const randomno = Math.floor(Math.random() *3);
    return options[randomno];
}

const countyou=()=>{
    
    msg.innerText="Congratulation - You Win"
    

}

const drawgame=()=>{
    console.log("game was draw");
    msg.style.backgroundColor="black"
    msg.style.Color="white"
    msg.innerText="Game Draw - Play again"
}
const showwinner=(userwin,userchoice,compchoice)=>{
  if(userwin){
    console.log(`Congratulation - You Win ${userchoice} beats ${compchoice}`)
    console.log("userwin is",userwin);
    msg.innerText=`Congratulation - You Win ( your-${userchoice} beats computer-${compchoice})`

    msg.style.backgroundColor="green"
    userscore++;
    scoreyou.innerText=userscore;
    
    
  }
  else{
    console.log(`you lose - sad ${compchoice} beats ${userchoice}`)
    msg.innerText=`you lose - sad computer-(${compchoice} beats your-${userchoice})`
    console.log("userwin is",userwin)
    msg.style.backgroundColor="red"
    compscore++;
    scorecomp.innerText=compscore;
  }
};
  const playgame = (userchoice) => {
  console.log("user choice is ", userchoice);
  //generate the computer choice
  const compchoice= gencompchoice();
  console.log("computer choice is", compchoice)

  if(userchoice === compchoice){
    //draw condition
    drawgame();
    
    
  
  }
    else{
     let userwin = true;
     if(userchoice==="rock"){
        //scissor and paper
      userwin=compchoice==="paper" ? false : true;
      
     }
     else if(userchoice==="paper"){
        //scissor and rock
        userwin=compchoice==="rock" ? true : false;

     }
     else {
        //scissor and rock
        userwin=compchoice==="rock" ? false : true;
      
    }
    showwinner(userwin,userchoice,compchoice);
}
}

    // msg.innerText="Game draw - play again";
    // msg.style.backgroundColor="green";


choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});