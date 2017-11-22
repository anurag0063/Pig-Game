/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/




var roundScore, activePlayer, score, gameOn, twoSix, winningScore, dice_one, dice_two, customScore;
init();
                                             //});
document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gameOn) { 
        dice_one = Math.floor(Math.random() * 6) + 1;
        dice_two = Math.floor(Math.random() * 6) + 1;
        if (dice_one === 6 && dice_one === twoSix) {
            score[activePlayer] = 0;
            document.querySelector('#score-' + activePlayer).textContent = score[activePlayer];
            roundScore = 0;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
            twoSix = 0;
            nextPlayer();
        }
        else {
            
        if(dice_one === 6) {
            twoSix = dice_one;
        } else {
            twoSix = 0;
        }
            //ternary expressions
           // dice === 6 ? twoSix = dice : twoSix === 0;

            //For Dice one
            console.log('roll ' + twoSix);
            var diceDom = document.querySelector('.dice');
            diceDom.style.display = 'block';
            diceDom.src = 'dice-' + dice_one + '.png';
            
            //For Dice two
            var dice_oneDom = document.querySelector('.dice1');
            dice_oneDom.style.display = 'block';
            dice_oneDom.src = 'dice-' + dice_two + '.png';

            if(dice_one === 1 || dice_two === 1) {
                roundScore = 0;
                document.querySelector('#current-' + activePlayer).textContent = roundScore;  

                nextPlayer();

            }else {
                roundScore = roundScore + dice_one + dice_two;
                document.querySelector('#current-' + activePlayer).textContent = roundScore;

            }
        }
    }
    
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gameOn) {
        
        //if undefined, 0, null or "" customScore will coerced to false
        //anything else it will coerce to true;
        if(customScore) {
        winningScore = customScore;
        } else {
            winningScore = 100;
        }
        
        twoSix = 0;
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.dice1').style.display = 'none';
        score[activePlayer] = score[activePlayer] + roundScore;
        roundScore = 0;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
        document.querySelector('#score-' + activePlayer).textContent = score[activePlayer];

        if (score[activePlayer] >= winningScore) {
            document.querySelector('#name-' + activePlayer).innerHTML = '<strong> WINNER! </strong>';
            document.querySelector('#name-' + activePlayer).classList.add('winner');
            gameOn = false;
            //break;
        } else {       
            nextPlayer();        
        }
    }
});

document.querySelector('.btn-new').addEventListener('click', init);


function nextPlayer() {
    twoSix = 0;
    if(activePlayer === 0) {
            document.querySelector('.player-0-panel').classList.remove('active');
            activePlayer++;
            document.querySelector('.player-1-panel').classList.add('active');
    }else {
        document.querySelector('.player-1-panel').classList.remove('active');
        activePlayer--;
        document.querySelector('.player-0-panel').classList.add('active');
    }
}


function init() {
    twoSix = 0;
    gameOn = true;
    score = [0,0];
    activePlayer = 0;
    roundScore = 0;
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice1').style.display = 'none';
    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('#name-0').classList.remove('winner');
    document.querySelector('#name-1').classList.remove('winner');
    document.querySelector('.text').disabled = false;
    
    document.querySelector('.text').addEventListener('keydown', function(event) {
    if(event.keyCode === 13) {
        customScore = document.querySelector('.text').value;
        event.preventDefault();
        event.currentTarget.value = "";
        document.querySelector('.text').disabled = true;
    }
      
});
    

}

//document.querySelector('.btn-roll').addEventListener(click, Function () {
//                              
//var diceDom = document.querySelector('.dice');
//diceDom.style.display = 'block';
//diceDom.style.src = 'dice-' + dice + '.png';
//dice = Math.floor(Math.random() * 6) + 1;
//
//document.querySelector('#current-' + activePlayer).textContent = dice;
//
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
//
//var test = document.querySelector('#score-' + activePlayer).textContent;
//console.log(test);
//




