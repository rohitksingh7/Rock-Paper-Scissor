let userScore = 0;
let computerScore = 0;
const userScoreSpan = document.getElementById('user-score');
const ComputerScoreSpan = document.getElementById('comp-score');
const scoreboardDiv = document.querySelector('.score-board');
const resultDiv = document.querySelector('.result');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const compRock = document.getElementById('comp-rock');
const compPaper = document.getElementById('comp-paper');
const compScissors = document.getElementById('comp-scissors');
const message = document.getElementById('action');

let computerChoiceDisplay,userChoiceDisplay;

const choices = ['rock', 'paper', 'scissors'];

function discolor()
{
    scissors.style.borderColor='white';
    paper.style.borderColor='white';
    rock.style.borderColor='white';
    compPaper.style.borderColor='white';
    compScissors.style.borderColor='white';
    compRock.style.borderColor='white';
    rock.style.background = '#24272E'
    paper.style.background = '#24272E'
    scissors.style.background = '#24272E'
    compPaper.style.background = '#24272E'
    compRock.style.background = '#24272E'
    compScissors.style.background = '#24272E'
}
function getComputerChoice()
{
        let randomChoice = Math.floor(Math.random() * choices.length);
        computerChoiceDisplay = choices[randomChoice];
        if(computerChoiceDisplay=='rock')
            compRock.style.background = 'black'; 
        else if(computerChoiceDisplay=='paper')
            compPaper.style.background = 'black';
        else
            compScissors.style.background = 'black'; 

            result();
}

rock.addEventListener('click', function(){
    discolor();
    userChoiceDisplay = 'rock';
    rock.style.background = 'black';
    getComputerChoice();
})

paper.addEventListener('click', function(){
    discolor();
    userChoiceDisplay = 'paper';
    paper.style.background = 'black';
    getComputerChoice();
})

scissors.addEventListener('click', function(){
    discolor();
    userChoiceDisplay = 'scissors';
    scissors.style.background = 'black';
    getComputerChoice();
})

function result()
{
    switch(userChoiceDisplay+computerChoiceDisplay)
    {
        case 'scissorspaper':
        case 'rockscissors':
        case 'paperrock':
            message.innerHTML='You Win!';
            userScore++;
            userScoreSpan.innerHTML=userScore;
            if(userChoiceDisplay=='scissors')
            {
                scissors.style.borderColor='rgb(3, 250, 57)';
                compPaper.style.borderColor='red';
            }
            else if(userChoiceDisplay=='rock')
            {
                rock.style.borderColor='rgb(3, 250, 57)';
                compScissors.style.borderColor='red';
            }
            else if(userChoiceDisplay=='paper')
            {
                paper.style.borderColor='rgb(3, 250, 57)';
                compRock.style.borderColor='red';
            }
            break;
        case 'paperscissors':
        case 'scissorsrock':
        case 'rockpaper':
            message.innerHTML='Computer Wins!';
            computerScore++;
            ComputerScoreSpan.innerHTML=computerScore;
            if(computerChoiceDisplay=='scissors')
            {
                paper.style.borderColor='red';
                compScissors.style.borderColor='rgb(3, 250, 57)';
            }
            else if(computerChoiceDisplay=='rock')
            {
                compRock.style.borderColor='rgb(3, 250, 57)';
                scissors.style.borderColor='red';
            }
            else if(computerChoiceDisplay=='paper')
            {
                compPaper.style.borderColor='rgb(3, 250, 57)';
                rock.style.borderColor='red';
            }
            break;
        default:
            if(computerChoiceDisplay=='scissors')
            {
                scissors.style.borderColor='yellow';
                compScissors.style.borderColor='yellow';
            }
            else if(computerChoiceDisplay=='rock')
            {
                compRock.style.borderColor='yellow';
                rock.style.borderColor='yellow';
            }
            else if(computerChoiceDisplay=='paper')
            {
                compPaper.style.borderColor='yellow';
                paper.style.borderColor='yellow';
            }
            message.innerHTML='Its a Tie!';    

    }
}