validplays=["rock","paper","scissors"];
let cscore = 0, pscore = 0, rounds=0;

const buttons = document.querySelectorAll('button[class="playable"]');
const notice = document.querySelector("#notice");
const playerchoice = document.querySelector("#player");
const compchoice = document.querySelector("#computer");
const playerscore = document.querySelector("#ps");
const compscore = document.querySelector("#cs");
const rescolor = document.querySelector('.subhead-2');
const playbut = document.querySelector('.but button');
const contBody = document.querySelector('div.body');
const imagebase = "imgs/";
const backimage = rescolor.style.background;

console.log(contBody);

buttons.forEach(b=>{
    b.addEventListener('click',play);
},this)

playbut.addEventListener('click',e=>{
    playbut.style.display = "none";
    cscore = 0, pscore = 0, rounds=0;
    pageLog("")
    showGame(true);
    rescolor.style.background = backimage
    rescolor.backgroundColor = "none";
})

function play(e){
    rounds++;
    const playerplay = this.textContent.toString().toLowerCase();
    playerchoice.setAttribute('src',imagebase + playerplay + ".png");
    playerchoice.setAttribute("style","visibility:visible")

    const compplay = computerPlay()
    compchoice.setAttribute("src", imagebase + compplay + ".png");
    compchoice.setAttribute("style","visibility:visible")

    pageLog(evaluateplay(playerplay,compplay));
    updateScore();

    if(rounds > 6){
        // buttons.forEach(b=>{
        //     b.removeEventListener('click',play);
        // },this)
        showGame(false)

        if (cscore>pscore) {
            pageLog("Computer won");
            rescolor.style.background = "none"
            rescolor.style.backgroundColor = "red";
            
        }
        else if(pscore>cscore){
            pageLog("Player won")
            rescolor.style.background = "none"
            rescolor.style.backgroundColor = "limegreen";
        }
        else{
            pageLog("It's a Draw");
        }

        playbut.textContent = "Play again?"
        playbut.style.display = "unset";
}
}

function showGame(val){
    if (val){
        contBody.style.display = "block";
    }
    else{
        contBody.style.display = "none";
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
            {cscore++;return "Comp wins";
            }
        else
            {pscore++;return "<- You win"}
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