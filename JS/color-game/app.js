
var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.getElementsByClassName("square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetBtn = document.getElementById("reset");
resetBtn.addEventListener("click", function(){
    this.textContent = "New Colors";
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    h1.style.backgroundColor = "#232323";
    for(var i = 0; i < squares.length; i ++){
        //Add Colors
        squares[i].style.backgroundColor = colors[i];
    }
});
var easyBtn = document.getElementById("easyBtn");
easyBtn.addEventListener("click", function(){
    this.classList.add("selected");
    hardBtn.classList.remove("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    h1.style.backgroundColor = "#232323";
    for(var i = 0; i < squares.length; i ++){
        if(colors[i]){
            //Add Colors
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
});
var hardBtn = document.getElementById("hardBtn");
hardBtn.addEventListener("click", function(){
    this.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    h1.style.backgroundColor = "#232323";
    for(var i = 0; i < squares.length; i ++){
        //Add Colors
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
});

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i ++){
    //Add Colors
    squares[i].style.backgroundColor = colors[i];

    //Add click listeners
    squares[i].addEventListener("click", function(){
        let clickedColor = this.style.backgroundColor;
        if(clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            changeColors(pickedColor);
            h1.style.backgroundColor = pickedColor;
            resetBtn.textContent = "Play Again";
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    });
}

function changeColors(color) {
    for(var i = 0; i < squares.length; i ++){
        squares[i].style.backgroundColor = color;
    }
};

function pickColor(){
    return colors[Math.floor(Math.random() * colors.length)]
}

function generateRandomColors(n){
    var arr = [];

    for(var i = 0; i < n; i ++){
        let red = Math.floor(Math.random()*256);
        let green = Math.floor(Math.random()*256);
        let blue = Math.floor(Math.random()*256);
        var newColor = "rgb(" + red + ", " + green + ", " + blue + ")";

        arr.push(newColor);
    }

    return arr;
}
