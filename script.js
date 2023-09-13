// alert("Youssef Zwiiin");
const cells = document.querySelectorAll('.cell');//aya haja semitha .cell yejibha liya
const resetButton = document.querySelector('.reset');
const current_turn =document.querySelector('current-turn');
const overlay = document.getElementById('overlay');
const player1score = document.querySelector('.score1');
const player2score = document.querySelector('.score2');
const draw = document.querySelector('.draws');
const messagecontent = document.querySelector('.content');
const closeBtn = document.getElementById('close');

const winCombus = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

let winner = false;
let ties = 0;
let turn=true;
let usedCells = []
let player1 = {
    symbol : '<i class="fa fa-close"></i>',
    played : [],
    score : 0
}
let player2 = {
    symbol : '<i class="fa fa-circle-o"></i>',
    played : [],
    score : 0
}
// checkTurn();
for(let i=0 ; i<9 ;i++)
{
    cells[i].addEventListener('click' , ()=>{
    if(isEmpty(i))
            {
                if(turn){
                        addSymbol(player1 ,i);
                        checkWin(player1);
                        turn = false;
                        checkTurn();
                       }else
                       {
                        addSymbol(player2 ,i);
                        checkWin(player2);
                        turn =true;
                        checkTurn();
                       }                       
 
                }else{
                      alert("choose empty cell");
                     }
         
        });
}
function addSymbol(player ,i)
{
    cells[i].innerHTML= player.symbol;
    player.played.push(i);
    usedCells.push(i);
}
function checkWin(player){
    if(!winner){
         winCombus.some(combo =>{
            if(combo.every(index => player.played.includes(index)))
            {
                player.score++;
                showScore();
                overlay.style.display = 'flex';
                messagecontent.innerHTML= player.symbol+ '  is the <h2>winner</h2>'
                reset();
            }
        })
    }  
    if(!winner && usedCells.length==9){
                ties++;
                showScore();
                messagecontent.innerHTML= player.symbol+ 'is the <h2>winner</h2>'
    }
}
function isEmpty(i){
                    if(usedCells.includes(i))
                    //usedcells kay 3emer wa9etma kay le3eb la3ib
                    {return false;}
                    
                    else{return true;}
}
function reset (){
    cells.forEach(cell =>{
        cell.innerHTML = '';
    })
    usedCells = [];
    player1.played=[];
    player2.played=[];
    turn = true;
    checkTurn();
}
resetButton.addEventListener('click',reset);

function checkTurn(){
    if(turn){
        current_turn.innerHTML = player1.symbol;
    }else{
        current_turn.innerHTML = player2.symbol;
    }
}

function showScore()
{
    player1score.innerHTML = player1.score;
    player2score.innerHTML = player2.score;
    draw.innerHTML = ties;
}
closeBtn.addEventListener('click' ,()=>{
    overlay.style.display = 'none';
})
// Add this script at the end of your script.js file
const genderOverlay = document.getElementById('gender-overlay');

function selectGender(gender) {
  if (gender === 'girl') {
    document.body.classList.add('girl-design');
  } else if (gender === 'boy') {
    document.body.classList.add('boy-design');
  }

  genderOverlay.style.display = 'none';
}
// Existing code...


