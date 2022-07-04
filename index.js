function computerplay(){
    num = Math.random()
    //console.log(num)
    switch(true){
        case num<0.3:
            return "rock"
            break
        case num>=0.3 && num<=0.6:
            return "paper"
            break
        case num>0.6 && num<=1:
            return "scissors"
            break
    }
    }

function evaluateplay(user,comp){
    if(comp==user){return "Draw"}
    if(user=="rock"){
        if(comp=="paper"){return "Comp wins"}
        else{return "You win"}
    }
    else if(user=="paper"){
        if(comp=="scissors"){return "Comp wins"}
        else{return "You win"}
    }
    else if(user=="scissors"){
        if(comp=="rock"){return "Comp wins"}
        else{return "You win"}
    }
}

validplays=["rock","paper","scissors"]

console.log("We shall play rock paper scissors")
play = prompt("Pick rock,paper or scissors").toLowerCase()
if(validplays.includes(play))
    {
    cplay = computerplay()
    console.log(play)
    console.log(cplay)

    console.log(evaluateplay(play,cplay))
    }

else{console.log("Bad play")}