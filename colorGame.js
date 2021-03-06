var colors=[];
var pickedColor;
var numSquares=6;
var squares=document.querySelectorAll(".square");
var colorDisplay=document.querySelector("#colorDisplay");
var messageDisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var modeBtn=document.querySelectorAll(".mode");
colorDisplay.textContent=pickedColor;

init();
function init(){
    setUpModeBtn();
    setUpSquares();
reset();
}

function reset(){
    colors=generateRandomColors(numSquares);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    h1.style.backgroundColor="steelblue";
    for(var i=0;i<squares.length;i++)
        {   if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display="block";
        }
            else{
                squares[i].style.display="none";            }
    }
    resetButton.textContent="New Colors";
    messageDisplay.textContent="";
}

resetButton.addEventListener("click",function(){
    reset();
})
function setUpModeBtn(){
    for(var i=0;i<modeBtn.length;i++){
        modeBtn[i].addEventListener("click",function(){
            modeBtn[0].classList.remove("selected");
            modeBtn[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent=== "Easy" ? numSquares=3 : numSquares=6;
            reset();
            });
    }
}
function setUpSquares()
{
    for(var i=0;i<squares.length;i++){
        squares[i].addEventListener("click",function(){
            var clickedColor=this.style.backgroundColor;
            if(clickedColor===pickedColor)
            {
                messageDisplay.textContent="CORRECT!!!";
                changeColors(pickedColor);
                h1.style.backgroundColor=clickedColor;
                resetButton.textContent="Play Again?";
               
            }
            else{
                this.style.backgroundColor="#232323";
                messageDisplay.textContent="TRY AGAIN!!!";
            }
        })
    }
}
function changeColors(color){
    for(var i=0;i<squares.length;i++)
        {
        squares[i].style.backgroundColor = color;
        }
}
function pickColor(){
    var random=Math.floor(Math.random()*colors.length);
    return colors[random];
}
function generateRandomColors(num){
    var arr=[];
    for(var i=0;i<num;i++)
    {
        arr.push(randomColor());
    }
    return arr;
}
function randomColor(){
    //pick a red from 0-255
    var r = Math.floor(Math.random()*256)
    //pick a green from 0-255
    var g = Math.floor(Math.random()*256)
    //pick a blue from 0-255
    var b = Math.floor(Math.random()*256)
    return "rgb(" + r + ", " + g + ", " + b + ")";
}