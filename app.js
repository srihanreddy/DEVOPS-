/* =========================================
   Hospital Information System - UI Script
   Purpose: Basic UI interactions
   Tech: Pure JavaScript (No Backend)
========================================= */

"use strict";

/* =========================
   DOM ELEMENTS
========================= */
const buttons = document.querySelectorAll("button");
const logoutLink = document.querySelector(".logout");

/* =========================
   BUTTON HANDLERS
========================= */
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const action = button.innerText;

        showAlert(`${action} feature will be available soon.`);
    });
});

/* =========================
   LOGOUT HANDLER
========================= */
if (logoutLink) {
    logoutLink.addEventListener("click", (e) => {
        e.preventDefault();
        showAlert("You have been logged out successfully.");
    });
}

/* =========================
   ALERT FUNCTION
========================= */
function showAlert(message) {
    const alertBox = document.createElement("div");
    alertBox.className = "alert-box";
    alertBox.innerText = message;

    document.body.appendChild(alertBox);

    setTimeout(() => {
        alertBox.remove();
    }, 3000);
}

/* =========================
   PAGE LOAD
========================= */
document.addEventListener("DOMContentLoaded", () => {
    console.log("Hospital Information System UI Loaded");
});
