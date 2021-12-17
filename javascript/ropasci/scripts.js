const gameOptions = new Array("steen", "papier", "schaar");
var result;
const numGames = 3;
function playGame(choice){
    var outcome = singleGame(choice);
    if (outcome == "win"){
        document.getElementById("result").innerHTML = "win";
    }

}
//Single game funtion
function singleGame(choice){
    var rng = Math.floor(Math.random() * 3);
    var botChoice = gameOptions[rng];
    if (botChoice == choice){
        return "draw";
    }
    //Player vs Bot checker
    switch(choice){
        case"steen": 
            if(botChoice == "papier"){
                return "lose";
            }else{
                return "win";
            }
            break;
        case"papier": 
            if(botChoice == "schaar"){
                return "lose";
            }else{
                return "win";
            }
            break;
        case"schaar": 
            if(botChoice == "steen"){
                return "lose";
            }else{
                return "win";
            }
            break;
        default: 
            alert("whoops");
            break;
    }
}