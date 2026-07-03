document.addEventListener("DOMContentLoaded", function () {

    const startBtn = document.getElementById("startBtn");
    const hero = document.querySelector(".hero");
    const feedback = document.getElementById("feedback");
    const feedbackForm = document.getElementById("feedbackForm");
    const thankyou = document.getElementById("thankyou");

    startBtn.addEventListener("click", function () {
        hero.style.display = "none";
        feedback.classList.remove("hidden");
    });

    feedbackForm.addEventListener("submit", function (e) {
        e.preventDefault();

        feedback.classList.add("hidden");
        thankyou.classList.remove("hidden");
    });

});