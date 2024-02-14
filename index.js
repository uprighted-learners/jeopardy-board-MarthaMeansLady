import placeholderQuestions from "./my-placeholder-questions.js";

let gameCondition = {
    currentPlayer: 1,
    playerScores: [0, 1],
    selectCategory: null,
    selectQuestion: null,
    questionActive: false,
    currentQuestionValue: 0,
}

const buttonSubmit = document.getElementById('buttonSubmit');
const buttonGuess = document.getElementById('buttonGuess');
const buttonPass = document.getElementById('buttonPass');
// const answer = userInput.value;

//displays the first modal when the page is loaded

    modalStart();
    // event.stopPropagation();

function closePopupOne() {
    document.getElementById("modalOne").style.display = "none";
};
function modalStart () {
    document.getElementById("modalOne").style.display = "flex";
    document.querySelector(".closeButtonOne").addEventListener('click', function(event) {
    event.stopPropagation();
    closePopupOne()
})
};






//pulls the categories from the placeholder file
document.querySelectorAll("#jeopardyCategory .cgory").forEach(categoryElement => {
    categoryElement.addEventListener("click", function() {
        const categories = placeholderQuestions.map(question => question.category).filter((value, index, self) => self.indexOf(value) === index);
        const randomIndex = Math.floor(Math.random() * categories.length);
        const randomCategory = categories[randomIndex];
        this.textContent = randomCategory;
    });
});

//pulls the questions from the placeholder file
document.querySelectorAll("#jeopardyCategory .q").forEach(categoryElement => {
    categoryElement.addEventListener("click", function() {
        const questions = placeholderQuestions.map(question => question.question).filter((value, index, self) => self.indexOf(value) === index);
        const randomIndexQ = Math.floor(Math.random() * questions.length);
        const randomQuestion = questions[randomIndexQ];
        showModalQ(randomQuestion);
        // this.textContent = randomQuestion;
        if (buttonPass) {
            gameCondition.currentPlayer = gameCondition.currentPlayer === 1 ? 2 : 1; }
        // if (randomQuestion === parseInt())
    });
});

// modal that displays for questions
// document.addEventListener( () => {
//     showModalQ();
// });
function closePopupTwo() {
    document.getElementById("modalTwo").style.display = "none";
};

// Puts the question text in the modal
function showModalQ(question) {
    document.getElementById("modalQuestion").textContent = question + ' (CLICK the "X" to answer, or pass.)';
    document.getElementById("modalTwo").style.display = "flex";
    document.querySelector(".closeButtonTwo").addEventListener('click', function(event) {
    event.stopPropagation();
    closePopupTwo()
    })
};

//events for scorekeeping
// document.addEventListener("click", function(event) {
//     if (event.target.id === "buttonSubmit") {
//         currentQuestionValue = parseInt(this.getAttribute('data-value'));
//         event.preventDefault(); 
//         gameCondition.currentPlayer = gameCondition.currentPlayer === 1? 2 : 1;
//         showModalPlayerTurn();
//     }});

        //adds a score to each question
document.querySelectorAll('.q').forEach(question => {
    question.addEventListener('click', function() {
        currentQuestionValue = parseInt(this.getAttribute('data-value'));
        document.getElementById('modalQuestion').textContent = this.textContent + ' (CLICK the "X" to answer, or pass.)';
        document.getElementById('modalTwo').style.display = 'flex'; 
    });
});
        document.querySelector(".closeButtonTwo").addEventListener('click', function(event) {
        event.stopPropagation();
        closePopupTwo()
        });


//if player passes the question
document.addEventListener("click", function(event) {
    if (event.target.id === "buttonPass") {
        event.preventDefault(); 
        gameCondition.currentPlayer = gameCondition.currentPlayer === 1? 2 : 1;
        showModalPlayerTurn();
    }
});

//if player takes a guess
document.addEventListener("click", function(event) {
    if (event.target.id === "buttonSubmit") {
        event.preventDefault(); 
        gameCondition.currentPlayer = gameCondition.currentPlayer === 1? 2 : 1;
        showModalPlayerTurn();
    }
});

//after the first round is complete
document.addEventListener("click", function(event) {
    if (event.target.id === "buttonNext") {
        event.preventDefault(); 
        // gameCondition.currentPlayer = gameCondition.currentPlayer === 1? 2 : 1;
        showModalPlayerTurn();
    }
});

// document.querySelector(".buttonSubmit")(categoryElement => {
//     categoryElement.addEventListener("click", function() {
//         const checkAnswer = placeholderQuestions.map(question => question.question).filter((value, index, self) => self.indexOf(value) === index);
//         const randomIndexQ = Math.floor(Math.random() * questions.length);
//         const randomQuestion = questions[randomIndexQ];
//         this.textContent = randomQuestion;
//         if (buttonPass) {
//             gameCondition.currentPlayer = gameCondition.currentPlayer === 1 ? 2 : 1; }
//     });
// });

// const notification = document.getElementById('modal').createChild;
// const notification = document.getElementById('modal');
// notification.style.display = "block";

// buttonPass.addEventListener('click', function(event) {
//     event.preventDefault(); 
//     gameCondition.currentPlayer = gameCondition.currentPlayer === 1 ? 2 : 1;
// });

// buttonSubmit.addEventListener('click', function(event) {
//     event.preventDefault(); 
//     if (buttonSubmit === question)
//     gameCondition.currentPlayer = gameCondition.currentPlayer === 1 ? 2 : 1;
// });


// let response = await fetch(`https://jsonplaceholder.typicode.com/posts/1`);

// let text = await response.text();

// let json = await response.json();

// async function fetchCategory() {
//     const apiURL = 'http://jservice.io/api/category?id=1';
//     try{
//         const response = await fetch(apiURL);
//         if (!response.ok) {
//             throw new Error(response.statusText);
//         }
//         const data = await response.json();
//         updateJeopardyCategory(data);
//     } catch (error) {
//         console.log("Failed to fetch category", error);
//     }
// }






