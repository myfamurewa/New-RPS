let userScore = 0;
let computerScore = 0;
let userScore_span = document.getElementById("user-score");
let computerScore_span = document.getElementById("comp-score");
let scoreboard_div = document.querySelector(".score-board");
let result_p = document.querySelector(".result > p");
let rock_div = document.querySelector("#r");
let paper_div = document.querySelector("#p");
let scissors_div = document.querySelector("#s");
function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = (Math.floor(Math.random() * 3));
    return choices[randomNumber];
}
function convertToWord(letter){
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}
function win(userChoice, computerChoice){
   const smallUserWord = "user".fontsize(3).sup();
   const smallCompWord = "comp".fontsize(3).sup();
   const userChoice_div = document.getElementById(userChoice);
   userScore++;
   userScore_span.innerHTML = userScore;
   computerScore_span.innerHTML = computerScore;
   result_p.innerHTML = `Your ${convertToWord(userChoice)}${smallUserWord} beats the computer's ${convertToWord(computerChoice)}${smallCompWord}. You win!`;
   userChoice_div.classList.add('green-glow');
   setTimeout(function() {userChoice_div.classList.remove('green-glow'); }, 300);
}
function loss(userChoice, computerChoice){
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sup();
    const userChoice_div = document.getElementById(userChoice);
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `Your ${convertToWord(userChoice)}${smallUserWord} loses to the computer's ${convertToWord(computerChoice)}${smallCompWord}. You lose`;
    userChoice_div.classList.add('red-glow');
   setTimeout(function() {userChoice_div.classList.remove('red-glow'); }, 300);
}
function draw(userChoice, computerChoice){
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sup();
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `Your ${convertToWord(userChoice)}${smallUserWord} is the sames as the computer's ${convertToWord(computerChoice)}${smallCompWord}. It's a draw`;
    userChoice_div.classList.add('yellow-glow');
    setTimeout(function() {userChoice_div.classList.remove('yellow-glow'); }, 300);
}
console.log(getComputerChoice());
function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            loss(userChoice, computerChoice);
            break;  
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}


function main() {
    rock_div.addEventListener('click', function() {
    game("r");
    });

    paper_div.addEventListener('click', function() {
        game("p");
    });

    scissors_div.addEventListener('click', function() {
        game("s");
    });
}
main();