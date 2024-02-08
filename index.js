const scoreDisplay = document.getElementById('score-display');
let score = 0
scoreDisplay.textContent = score

const scoreDisplay2 = document.getElementById('score-display2');
let score2 = 0
scoreDisplay2.textContent = score2

// function ask(questionText) {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve(prompt(questionText)), 1000);
//     });
// }

function showPopup() {
    document.getElementById("popup").style.display = "flex";
};

function closePopup() {
    console.log("closePopup function called");
    document.getElementById("popup").style.display = "none";
};


document.addEventListener("DOMContentLoaded", () => {
      showPopup();
});

document.querySelector(".closeButton").addEventListener('click', function(event) {
    closePopup();
    event.stopPropagation();
});

