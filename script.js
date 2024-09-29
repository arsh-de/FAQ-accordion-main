const questions = document.querySelectorAll(".question");
const answer = document.querySelectorAll(".answer");
const minus = document.querySelectorAll(".minus-icon");
const plus = document.querySelectorAll(".plus-icon");

questions.forEach((question, i) => {
    question.addEventListener("click", function () {
        answer[i].classList.toggle("hidden");
        plus[i].classList.toggle("hidden")
        minus[i].classList.toggle("hidden")
    })
})
