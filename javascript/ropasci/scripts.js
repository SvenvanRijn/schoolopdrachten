const gameOptions = new Array("steen", "papier", "schaar");
const totalGames = 5;
var numGamesPlayed;
var gameSpace;
var wins, losses;
function startGame(){
    wins = 0;
    losses = 0;
    numGamesPlayed = 0;
    document.getElementById("pSteen").disabled = false;
    document.getElementById("pPapier").disabled = false;
    document.getElementById("pSchaar").disabled = false;
    document.getElementById("startGame").hidden = true;
    document.getElementById("result").innerHTML = "";
}
function updateGameSpace(result, choice, botChoice){
    if (result != "draw"){
        if(result == "win"){
            wins++;
            gameSpace = '<div id="score">'+wins+'-'+ losses+'</div>'
        }else{     
            losses++;
            gameSpace = '<div id="score">'+wins+'-'+ losses+'</div>'
        }
        numGamesPlayed++;
    }else{

        gameSpace = '<div id="score">'+wins+'-'+ losses+'</div>'
    }
    document.getElementById("result").innerHTML = gameSpace;
    if(numGamesPlayed >= totalGames || wins >= (totalGames/2) || losses >= (totalGames/2)){
        document.getElementById("pSteen").disabled = true;
        document.getElementById("pPapier").disabled = true;
        document.getElementById("pSchaar").disabled = true;
        document.getElementById("startGame").hidden = false;
    }
}
//Single game funtion
function singleGame(choice){
    var rng = Math.floor(Math.random() * 3);
    var botChoice = gameOptions[rng];
    if (botChoice == choice){
        updateGameSpace("draw", choice, botChoice)
        return ;
    }
    //Player vs Bot checker
    switch(choice){
        case"steen": 
            if(botChoice == "papier"){
                updateGameSpace("lose", choice, botChoice)
                return ;
            }else{
                updateGameSpace("win", choice, botChoice)
                return ;
            }
            break;
        case"papier": 
            if(botChoice == "schaar"){
                updateGameSpace("lose", choice, botChoice)
                return ;
            }else{
                updateGameSpace("win", choice, botChoice)
                return ;
            }
            break;
        case"schaar": 
            if(botChoice == "steen"){
                updateGameSpace("lose", choice, botChoice)
                return ;
            }else{
                updateGameSpace("win", choice, botChoice)
                return ;
            }
            break;
        default: 
            alert("whoops");
            break;
    }
}