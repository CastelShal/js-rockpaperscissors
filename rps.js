validplays=["rock","paper","scissors"];
let cscore = 0, pscore = 0, rounds=0;

const buttons = document.querySelectorAll('button[class="playable"]');
const notice = document.querySelector("#notice");
const playerchoice = document.querySelector("#player");
const compchoice = document.querySelector("#computer");
const playerscore = document.querySelector("#ps");
const compscore = document.querySelector("#cs");
const rescolor = document.querySelector('.subhead-2');
const imagebase = "imgs/";

buttons.forEach(b=>{
    b.addEventListener('click',play);
},this)

function play(e){
    rounds++;
    const playerplay = this.textContent.toString().toLowerCase();
    playerchoice.setAttribute('src',imagebase + playerplay + ".jpg");
    playerchoice.setAttribute("style","visibility:visible")

    const compplay = computerPlay()
    compchoice.setAttribute("src", imagebase + compplay + ".jpg");
    compchoice.setAttribute("style","visibility:visible")

    pageLog(evaluateplay(playerplay,compplay));
    updateScore();

    if(rounds > 6){
        buttons.forEach(b=>{
            b.removeEventListener('click',play);
        },this)
        cscore>pscore? pageLog("Computer won"): pscore>cscore?pageLog("Player won"): pageLog("It's a Draw");
    }
}

function pageLog(text){
    notice.textContent = text;
}

function updateScore(){
    playerscore.textContent = pscore;
    compscore.textContent = cscore;
}

function computerPlay(){
    num = Math.random()
    //console.log(num)
    switch(true){
        case num<0.3:
            return "rock"
            
        case num>=0.3 && num<=0.6:
            return "paper"
            
        case num>0.6 && num<=1:
            return "scissors"
            
    }
    }

function evaluateplay(user,comp){
    if(comp==user){return "Draw"}

    if(user=="rock"){
        if(comp=="paper")
            {cscore++;return "Comp wins"
            rescolor.setAttribute('background-color','red')}
        else
            {pscore++;return "You win"}
    }

    else if(user=="paper"){
        if(comp=="scissors")
            {cscore++;return "Comp wins"}
        else
            {pscore++;return "You win"}
    }

    else if(user=="scissors"){
        if(comp=="rock")
            {cscore++;return "Comp wins"}
        else
            {pscore++;return "You win"}
    }
}