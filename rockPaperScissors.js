const { channel } = require('diagnostics_channel');

function rockPaperScissors(){
    // Define variables
    const rl = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
      });
    const rock = "Rock";
    const paper = "Paper";
    const scissors = "Scissors";
    let score = 0;
    let result = '';
    let playerTurn;
    let computerChoice = 0;
    
    
    // Game Code
    function choices(){
        let randomComputerChoice = Math.floor((Math.random() * 3) + 1)
        computerChoice = randomComputerChoice;
        
        switch(computerChoice){
            case 1: computerChoice = rock; break;
            case 2: computerChoice = paper; break;
            case 3: computerChoice = scissors; break;
        }

        rl.question('Choose: Rock / Paper / Scissors: ', choice => {
            playerTurn = choice;
            switch(playerTurn){
                case 'Rock':
                case 'rock':
                case 'r': playerTurn = rock; rspGame(); break;
                case 'Paper':
                case 'paper':
                case 'p': playerTurn = paper; rspGame(); break;
                case 'Scissors': 
                case 'scissors':
                case 's': playerTurn = scissors; rspGame(); break;
                default: console.log("Wrong input"); choices(); break;
            }
        });
    }
    choices();

   // Prints both choices
   function rspGame(){
    console.log(`\nYou chose ${playerTurn}`);
    console.log(`The computer chose ${computerChoice}`);
    
    // All the possible outcomes
        if(playerTurn === rock && computerChoice === scissors || playerTurn === paper && computerChoice === rock || playerTurn === scissors && computerChoice === paper){
            result = 'You win!';
            score++
        }else if(playerTurn === scissors && computerChoice === rock || playerTurn === rock && computerChoice === paper || playerTurn === paper && computerChoice === scissors){
            result = 'You lose!'
            score = 0;
        }else{
            result = "It's a draw";
        }
        console.log("\n" + result);
        console.log("Your score is: " + score);
        wantToContinue();

        function wantToContinue(){
            rl.question('Do you want to continue: (Yes/No) ', yn => {
                switch(yn){
                    case 'Yes': 
                    case 'yes':
                    case 'y': choices(); break; 
                    case 'No':
                    case 'no':
                    case 'n': rl.close(); break;
                    default: console.log("Wrong input"); wantToContinue(); break;
                }
            });
        }
       }
}
rockPaperScissors();
