import placeholderQuestions from "./my-placeholder-questions.js";

//sets the game conditions
let gameCondition = {
    currentPlayer: 1,
    playerScores: [0, 0],
    questionActive: false,
    currentQuestionValue: 0,
    questionUpForSteal: false,
    currentAnswer: '',
};

//displays the first modal when the page is loaded
document.addEventListener("DOMContentLoaded", () => {
    modalStart();
});


function modalStart () {
    document.getElementById("modalOne").style.display = "flex";
    document.querySelector(".closeButtonOne").addEventListener('click', function(event) {
        event.stopPropagation();
        closePopupOne()
    })
};

//closes the modal that pops up when the page is loaded
function closePopupOne() {
    document.getElementById("modalOne").style.display = "none";
};

function showModalQ(question, answer) {
    document.getElementById("modalQuestion").textContent = question;
    document.getElementById("modalAnswer").textContent = answer; 
    document.getElementById("modalTwo").style.display = "flex";
}

//closes the modal that pops up for all questions
function closePopupTwo() {
    document.getElementById("modalTwo").style.display = "none";
    gameCondition.questionActive = false;
};

//keeps tally of player scores
function updateScoreDisplay() {
    document.getElementById("playerOneScore").textContent = gameCondition.playerScores[0];
    document.getElementById("playerTwoScore").textContent = gameCondition.playerScores[1];
}

// close the modal popup
document.querySelector(".closeButtonTwo").addEventListener('click', function(event) {
    event.stopPropagation();
    closePopupTwo()
});

document.getElementById("buttonPass").addEventListener('click', function(event) {
    event.preventDefault();
    closePopupTwo();
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

// Picks a random question and answer pair
document.querySelectorAll("#jeopardyCategory .q").forEach(questionElement => {
    questionElement.addEventListener("click", function() {
        if (!gameCondition.questionActive) {
            const randomIndex = Math.floor(Math.random() * placeholderQuestions.length);
            const randomQuestion = placeholderQuestions[randomIndex].question;
            const randomAnswer = placeholderQuestions[randomIndex].answer;
            gameCondition.currentQuestionValue = parseInt(this.getAttribute('data-value'));
            gameCondition.currentAnswer = randomAnswer;
            console.log('data-value', this.getAttribute('data-value'));
            showModalQ(randomQuestion, randomAnswer);
            gameCondition.questionActive = true;
        }         
    });
});

//updating player scores based on correct or incorrect answer, or if a player steals
document.getElementById("buttonSubmit").addEventListener('click', function(event) {
    event.preventDefault();
    let userAnswer = document.getElementById("submitAnswer").value.trim();
    if (userAnswer === gameCondition.currentAnswer) { 
        gameCondition.playerScores[gameCondition.currentPlayer - 1] += gameCondition.currentQuestionValue;
        gameCondition.questionActive = false;
        gameCondition.questionUpForSteal = false; 
        } else {
        if (!gameCondition.questionUpForSteal) {
            gameCondition.questionUpForSteal = true;
            gameCondition.currentPlayer = gameCondition.currentPlayer === 1? 2 : 1;           
        } else {
            gameCondition.playerScores[gameCondition.currentPlayer - 1] -= gameCondition.currentQuestionValue;
            gameCondition.questionActive = false;
            gameCondition.questionUpForSteal = false; 
        }
    }
    document.getElementById("submitAnswer").value = ''; 
    updateScoreDisplay();
    closePopupTwo(); 
    
});


//after the first round is complete
document.addEventListener("click", function(event) {
    if (event.target.id === "buttonNext") {
        event.preventDefault(); 
        // gameCondition.currentPlayer = gameCondition.currentPlayer === 1? 2 : 1;
        showModalPlayerTurn();
    }
});
