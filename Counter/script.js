const dec = document.getElementById("dec");
const reset = document.getElementById("reset");
const inc = document.getElementById("inc");
const countLabel = document.getElementById("countLabel");

let count = 0;

inc.onclick = function (){
    count++;
    countLabel.textContent = count;
}

dec.onclick = function (){

    if(count == 0){
        alert("counter is 0 cant dec")
    }else{
        count--;
    countLabel.textContent = count;
    }
    
}

reset.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}


