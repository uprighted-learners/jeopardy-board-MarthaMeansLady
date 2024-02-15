import placeholderQuestions from "./my-placeholder-questions.js";

//sets the game conditions
let gameCondition = {
    currentPlayer: 1,
    playerScores: [0, 0],
    questionActive: false,
    currentQuestionValue: 0,
    questionUpForSteal: false,
    currentAnswer: '',
    targetScore: 20000,
    button0: false
};

var modalOne1 = document.getElementById('modalOne');
var modalTwo2 = document.getElementById('modalTwo');
var modalThree3 = document.getElementById('modalThree');
// var questionElement = document.getElementById("");
// var dataValue = questionElement.dataset.value; 
// console.log(dataValue);

function closeModalOne1() {
    modalOne1.style.display = "none";
}
function closeModalTwo2() {
    modalTwo2.style.display = "none";
}
function closeModalThree3() {
    modalThree3.style.display = "none";
}


//displays the first modal when the page is loaded
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("buttonNext").disabled = true;
    modalStart();
    updateScoreDisplay();
});

//game starting modal
function modalStart () {
    document.getElementById("modalOne").style.display = "flex";
    document.querySelector(".closeButtonOne").addEventListener('click', function(event) {
        event.stopPropagation();
        closePopupOne()
    })
};

//modal for question and answer pair
function showModalQ(question, answer) {
    document.getElementById("modalQuestion").textContent = question;
    document.getElementById("modalAnswer").textContent = answer; 
    document.getElementById("modalTwo").style.display = "flex";
}

//show the modal that displays the player's turn
function showModalP() {
    document.getElementById("modalTurnText").textContent = `Player ${gameCondition.currentPlayer}'s turn`;
    document.getElementById("modalThree").style.display = "flex";
}

function showModalWarning() {
    document.getElementById("modalWarningText").textContent = `Player ${gameCondition.currentPlayer}, you must choose to guess or pass.`;
    document.getElementById("modalWarning").style.display = "flex";
}

//closes the modal that pops up when the page is loaded
function closePopupOne() {
    document.getElementById("modalOne").style.display = "none";
};

//closes the modal that pops up for all questions (showmodalQ)
function closePopupTwo() {
    document.getElementById("modalTwo").style.display = "none";
    gameCondition.questionActive = false;
};

function closePopupThree() {
    document.getElementById("modalThree").style.display = "none";
    gameCondition.questionActive = false;
};

function closePopupFour() {
    document.getElementById("modalWarning").style.display = "none";
    gameCondition.questionActive = true;
};

function closePopupRoundOne() {
    document.getElementById("modalRoundOne").style.display = "none";
    // gameCondition.questionActive = true;
};

//keeps tally of player scores
function updateScoreDisplay() {
    document.getElementById("playerOneScore").textContent = gameCondition.playerScores[0];
    document.getElementById("playerTwoScore").textContent = gameCondition.playerScores[1];
}

//tells which player's turn it is
function updatePlayerTurnDisplay() {
    const currentPlayerText = `Player ${gameCondition.currentPlayer}'s Turn`;
    document.getElementById("currentPlayerText").textContent = currentPlayerText;
}

//check if player has reached target score after correct answer
function checkWinningScore(playerIndex) {
    if () {
        
    } (gameCondition.playerScores[playerIndex] >= gameCondition.targetScore) {
        roundOneComplete(playerIndex + 1);
    } 
}

//events that take place to close out round one
function roundOneComplete(winningPlayer) {
    document.getElementById("modalRoundOne").style.display = "flex";
    document.getElementById("modalRoundOneText").textContent = `Round One complete. The winner is Player ${winningPlayer}. Congratulations! Please move on to the second round.`;
    document.getElementById("buttonNext").disabled = false;
    navigateToRoundTwo();
}

//allows user to click off modal to clost it
window.onclick = function(event) {
    if (event.target == modalOne1) {
        closeModalOne1();
    } else if (event.target == modalTwo2) {
        closeModalTwo2();
    }   else if (event.target == modalThree) {
        closeModalThree3();
    }    else if (event.target == modalWarning) {
        closePopupFour();
    } else if (event.target == modalRoundOne) {
        closePopupRoundOne(); }
}


// close the modal popup
document.querySelector(".closeButtonTwo").addEventListener('click', function(event) {
    event.stopPropagation();
    closePopupTwo()
});

document.querySelector(".closeButtonThree").addEventListener('click', function(event) {
    event.stopPropagation();
    closePopupThree()
});

document.getElementById("buttonPass").addEventListener('click', function(event) {
    event.preventDefault();
    closePopupTwo();
});

document.querySelector(".closeButtonFour").addEventListener('click', function(event) {
    event.stopPropagation();
    closePopupFour()
});

//pulls the categories from the placeholder file
document.querySelectorAll("#jeopardyCategory .cgory").forEach(categoryElement => {
    categoryElement.addEventListener("click", function() {
        const categories = placeholderQuestions.map(question => question.category).filter((value, index, self) => self.indexOf(value) === index);
        const randomIndex = Math.floor(Math.random() * categories.length);
        const randomCategory = categories[randomIndex];
        this.textContent = randomCategory;
    });
});


//picks a random question and answer pair
document.querySelectorAll("#jeopardyCategory .q").forEach(questionElement => {
    questionElement.addEventListener("click", function() {
        if (gameCondition.questionActive) {
            event.preventDefault();
            showModalWarning();   
        } else if (gameCondition.questionUpForSteal) {
                event.preventDefault();
                showModalWarning();
        } else { 
            const randomIndex = Math.floor(Math.random() * placeholderQuestions.length);
            const randomQuestion = placeholderQuestions[randomIndex].question;
            const randomAnswer = placeholderQuestions[randomIndex].answer;
            gameCondition.currentQuestionValue = parseInt(this.getAttribute('data-value'));
            gameCondition.currentAnswer = randomAnswer;
            console.log('data-value', this.getAttribute('data-value'));
            showModalQ(randomQuestion, randomAnswer);
            this.classList.add('used');
            gameCondition.questionActive = true;
            updatePlayerTurnDisplay();
        }});});

//updating player scores based on correct or incorrect answer, or if a player steals
document.getElementById("buttonSubmit").addEventListener('click', function(event) {
    event.preventDefault();
    let userAnswer = document.getElementById("submitAnswer").value.trim();
    if (userAnswer === gameCondition.currentAnswer) { 
        gameCondition.playerScores[gameCondition.currentPlayer - 1] += gameCondition.currentQuestionValue;
        checkWinningScore(gameCondition.currentPlayer - 1);
        gameCondition.questionActive = false;
        gameCondition.questionUpForSteal = false; 
        showModalP();
        updatePlayerTurnDisplay();
        } else {
        if (!gameCondition.questionUpForSteal) {
            gameCondition.playerScores[gameCondition.currentPlayer - 1] -= gameCondition.currentQuestionValue;
            gameCondition.currentPlayer = gameCondition.currentPlayer === 1? 2 : 1;    
            checkWinningScore(gameCondition.currentPlayer - 1);
            showModalP();
            updatePlayerTurnDisplay();
            gameCondition.questionUpForSteal = true;

        } else {
            showModalP();
            updatePlayerTurnDisplay();
            gameCondition.playerScores[gameCondition.currentPlayer - 1] -= gameCondition.currentQuestionValue;
            gameCondition.questionActive = false;
            gameCondition.questionUpForSteal = false; 
        }
    } 

    document.getElementById("submitAnswer").value = ''; 
    updateScoreDisplay();
    closePopupTwo(); 
        
});


document.getElementById("buttonPass").addEventListener("click", function (event) {
    event.preventDefault();
    gameCondition.currentPlayer = gameCondition.currentPlayer === 1? 2 : 1;
    showModalP();
    updatePlayerTurnDisplay();
    closePopupTwo();
});

// logic to start second round 
function navigateToRoundTwo() {
    gameCondition.targetScore = 30000;
    const playerOneScore = gameCondition.playerScores[0];
    const playerTwoScore = gameCondition.playerScores[1];
    const nextRoundUrl = `round-2.html?playerOneScore=${playerOneScore}&playerTwoScore=${playerTwoScore}`;
    window.location.href = nextRoundUrl;
}
document.addEventListener("DOMContentLoaded", () => {
    const queryParams = new URLSearchParams(window.location.search);
    const playerOneScoreStr = queryParams.get('playerOneScore');
    const playerTwoScoreStr = queryParams.get('playerTwoScore');
    //makes the previous scores into a string
    const playerOneScore = playerOneScoreStr ? parseInt(playerOneScoreStr, 10) : 0;
    const playerTwoScore = playerTwoScoreStr ? parseInt(playerTwoScoreStr, 10) : 0;
    console.log(`Player One Score: ${playerOneScore}, Player Two Score: ${playerTwoScore}`);
    gameCondition.playerScores[0] = playerOneScore;
    gameCondition.playerScores[1] = playerTwoScore;
    updateScoreDisplay(); 
    updatePlayerTurnDisplay();
});