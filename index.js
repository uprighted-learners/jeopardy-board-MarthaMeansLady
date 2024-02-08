const scoreDisplay = document.getElementById('score-display');
let score = 0
scoreDisplay.textContent = score

const scoreDisplay2 = document.getElementById('score-display2');
let score2 = 0
scoreDisplay2.textContent = score2

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

document.getElementById("jeopardyCategory").addEventListener('click', function selectCategory(event) {
    if (event.target && event.target.matches(".cgory")) {
    alert(`You've selected ${event.target.textContent}category`);
    selectCategory(event.target.textContent);
    }
});

document.getElementById("jeopardyCategory").addEventListener('click', function selectQuestion(event) {
    if (event.target && event.target.matches(".q")) {
    alert(`You've selected ${event.target.textContent}question`);
    selectQuestion(event.target.textContent);
    }
});



