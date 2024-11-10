const increaseButton = document.getElementById("increaseButton");
const decreaseButton = document.getElementById("decreaseButton");
const resetButton = document.getElementById("resetButton");
const countLabel = document.getElementById("countLabel");

let count = 0;

increaseButton.onclick = function(){
    count++
    countLabel.textContent = count;
}


decreaseButton.onclick = function(){
    count--
    countLabel.textContent = count;
}


resetButton.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}










/*let valueOfCounter = 0;
valueOfCounter = Number(valueOfCounter);



document.getElementById("increaseButton").onclick = function(){
    valueOfCounter = valueOfCounter + 1;
    valueOfCounter.textContent = valueOfCounter;
    console.log(valueOfCounter);
};



document.getElementById("decreaseButton").onclick = function(){
    valueOfCounter = valueOfCounter - 1;
    console.log(valueOfCounter);
};
*/

/*
document.getElementById("increaseButton").onclick = function(){
    valueOfCounter = document.getElementById("valueOfCounter").value;
    console.log(valueOfCounter);
};
*/

