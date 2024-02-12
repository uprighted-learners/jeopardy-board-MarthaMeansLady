import placeholderQuestions from "./my-placeholder-questions.js";

let gameCondition = {
    currentPlayer: 1,
    playerScores: [0, 1],
    selectCategory: null,
    selectQuestion: null,
    questionActive: false
}

function showPopup() {
    document.getElementById("popup").style.display = "flex";
};

document.addEventListener("DOMContentLoaded", () => {
    showPopup();
});

function closePopup() {
    console.log("closePopup function called");
    document.getElementById("popup").style.display = "none";
};

document.querySelector(".closeButton").addEventListener('click', function(event) {
    closePopup();
    event.stopPropagation();
});


// console.log(categories);
 
document.querySelectorAll("#jeopardyCategory .cgory").forEach(categoryElement => {
    categoryElement.addEventListener("click", function() {
        const categories = placeholderQuestions.map(question => question.category).filter((value, index, self) => self.indexOf(value) === index);
        // const categories = Object.keys(placeholderQuestions.category);
        const randomIndex = Math.floor(Math.random() * categories.length);
        const randomCategory = categories[randomIndex];
        this.textContent = randomCategory;
    // this.textContent = placeholderQuestions[this.textContent].category;
    });
});

// const categoryElement = document.getElementById('.cgory');

// selectCategory(categoryElement);


//         const categoryName = this.textContent.placeholderQuestions[categoryElement.category].toLowerCase();
//         const selectedQuestions = questions[categoryName];
//         displayQuestionsForCategory(selectedQuestions);




    // if (gameCondition.guestionActive === true) {
    //     alert("You must choose to either answer or pass the current question");
    
    // alert(`You've selected ${event.target.textContent}question`);
    // selectQuestion(event.target.textContent);
    


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

// fetch('http://jservice.io/api/category?id=1')
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error(error));

// fetch('http://jservice.io/api/random')
//   .then(response => response.json())
//   .then(data => console.log(data[0]))
//   .catch(error => console.error(error));



// document.addEventListener('click', () => {
//     showPopupQuestion();
// });

// document.addEventListener('click', () => {
//     showPopupCategory();
// });




// document.getElementById("jeopardyCategory").addEventListener('click', function selectCategory(event) {
//     if (event.target && event.target.matches(".cgory")) {
//     // alert(`You've selected ${event.target.textContent}category`);
//     // document.getElementById("jeopardyCategory").style.display = "flex";
//     showPopupCategory();
//     selectCategory(event.target.textContent);
//     }
// });


