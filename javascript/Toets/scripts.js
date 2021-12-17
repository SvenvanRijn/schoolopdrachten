var fout = array();
function checkForm(){
    let antw1 = document.getElementById('vraag1').value;
    let antw2 = document.getElementById('vraag2').value;
    let antw3 = document.getElementById('vraag3').value;
    if(antw1.toLowerCase() == "madrid"){
        document.getElementById('antwoord1').innerHTML = "Vraag 1 is Goed beantwoord"
    }else{
        document.getElementById('antwoord1').innerHTML = "Vraag 1 is Fout beantwoord"
    }
    if(antw2.toLowerCase() == "middellandse zee"){
        document.getElementById('antwoord2').innerHTML = "Vraag 2 is Goed beantwoord"
    }else{
        document.getElementById('antwoord2').innerHTML = "Vraag 2 is Fout beantwoord"
    }
    if(parseInt(antw3) == 15){
        document.getElementById('antwoord3').innerHTML = "Vraag 3 is Goed beantwoord"
    }else{
        document.getElementById('antwoord3').innerHTML = "Vraag 3 is Fout beantwoord"
    }
    
}