var numOfSquares = 6;
var colors = [];
var pickedColor ;
var squares = document.querySelectorAll(".square");
var rgd = document.getElementById("rgd");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeBtn = document.querySelectorAll(".mode");
rgd.textContent = pickedColor;

init();

function init(){
  setModeButtons();
  setSq();
  reset();
}

function setSq(){
  for( var i = 0; i< squares.length; i++){
    //add click listeners to squares
    squares[i].addEventListener("click", function(){
      //color of the clicked square
      var clickedColor = this.style.backgroundColor;
      //compare to pickedColor
      if( clickedColor === pickedColor){
        messageDisplay.textContent = "Correct!";
        resetButton.textContent = "Play Again?";
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
      }
      else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again";
      }
    });
  }
}

function setModeButtons(){
  for(var i = 0; i< modeBtn.length; i++){
    modeBtn[i].addEventListener("click", function(){
      modeBtn[0].classList.remove("selected");
      modeBtn[1].classList.remove("selected");
      this.classList.add("selected");
      if(this.textContent === "Easy"){
        numOfSquares = 3;
      }
      else {
        numOfSquares = 6;
      }
      reset();
    });
  }
}

function reset(){
  messageDisplay.textContent ="";
  resetButton.textContent = "New colors";
  //generate new Colors
  colors = getrandomColors(numOfSquares);
  //pick new randmColor and change Color display
  pickedColor = pickColor();
  rgd.textContent = pickedColor;
  //chane the colors of the squares
  for( var i = 0; i< squares.length; i++){
      if(colors[i]){
        squares[i].style.display = "block";
        squares[i].style.backgroundColor = colors[i];
      }
      else{
        squares[i].style.display = "none";
      }
    }
  h1.style.backgroundColor = '#7067DB';
}

resetButton.addEventListener("click", function(){
  reset();
});

function changeColors(color){
  //loop to change all the colors to mach the corect One
  for(var i = 0; i < squares.length; i++){
    squares[i].style.background = color;
  }
}

function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function getrandomColors(num){
  //make array
  var arr = [];
  //add randomColors
  for(var i = 0; i < num; i++){
    // random color
    arr.push(randmColor())
  }
  //return array
  return arr;
}

function randmColor(){
  // red 0-255
  var red = Math.floor(Math.random() * 256);
  // green 0-255
  var green = Math.floor(Math.random() * 256);
  // blue 0 -255
  var blue = Math.floor(Math.random() * 256);
  return "rgb(" +red + ", " + green + ", " + blue + ")";
}
