const feedbackForm = document.getElementById("feedbackForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const ratingInput = document.getElementById("rating");
const commentsInput = document.getElementById("comments");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const ratingError = document.getElementById("ratingError");
const commentsError = document.getElementById("commentsError");
const successMessage = document.getElementById("successMessage");

function showError(element, message) {
    element.textContent = message;
}

function clearErrors() {
    nameError.textContent = "";
    emailError.textContent = "";
    ratingError.textContent = "";
    commentsError.textContent = "";
}

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateForm() {
    clearErrors();
    let isValid = true;

    if (nameInput.value.trim().length < 3) {
        showError(nameError, "Please enter at least 3 characters.");
        isValid = false;
    }

    if (!validateEmail(emailInput.value.trim())) {
        showError(emailError, "Please enter a valid email address.");
        isValid = false;
    }

    if (!ratingInput.value) {
        showError(ratingError, "Please choose a rating.");
        isValid = false;
    }

    if (commentsInput.value.trim().length < 10) {
        showError(
            commentsError,
            "Please provide at least 10 characters of feedback.",
        );
        isValid = false;
    }

    return isValid;
}

feedbackForm.addEventListener("submit", function (event) {
    event.preventDefault();
    successMessage.style.display = "none";

    if (validateForm()) {
        successMessage.textContent = `Thank you, ${nameInput.value.trim()}! Your feedback has been submitted.`;
        successMessage.style.display = "block";
        feedbackForm.reset();
    }
});
