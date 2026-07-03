import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";

import {
  getFirestore,
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCGBRkl2TdHoTkmkQoEbRnEua7EDcAB3Tg",
  authDomain: "career-disha-sandhaan-2026.firebaseapp.com",
  projectId: "career-disha-sandhaan-2026",
  storageBucket: "career-disha-sandhaan-2026.firebasestorage.app",
  messagingSenderId: "27170410659",
  appId: "1:27170410659:web:1d54d7f69debadc499ef16"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

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

  feedbackForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const data = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      category: document.getElementById("category").value,
      organisation: document.getElementById("organisation").value,
      q1: document.querySelector('input[name="q1"]:checked').value,
      q2: document.querySelector('input[name="q2"]:checked').value,
      q3: document.querySelector('input[name="q3"]:checked').value,
      q4: document.querySelector('input[name="q4"]:checked').value,
      q5: document.querySelector('input[name="q5"]:checked').value,
      stall: new URLSearchParams(window.location.search).get("stall") || "general",
      submittedAt: new Date()
    };

    try {
      await addDoc(collection(db, "feedbacks"), data);

      feedback.classList.add("hidden");
      thankyou.classList.remove("hidden");
      feedbackForm.reset();

    } catch (error) {
      alert("Feedback could not be submitted. Please try again.");
      console.error("Firebase error:", error);
    }
  });
});