validplays=["rock","paper","scissors"]
console.log("We shall play rock paper scissors")
let pscore = 0
let cscore = 0

for(i=0; i<5; i++){
    let play = prompt("Pick rock,paper or scissors").toLowerCase()
    if(validplays.includes(play)){
        let cplay = computerPlay()
        console.log(play)
        console.log(cplay)
        console.log(evaluateplay(play,cplay))
        }

    else{
        console.log("Bad play")
    }
}

if(pscore>cscore){
    console.log("You win!!")
    }

else{
    if(pscore==cscore){
        console.log("It's a draw!!")
    }
    else{
        console.log("Computer wins...")
    }
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
            {cscore++;return "Comp wins"}
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
