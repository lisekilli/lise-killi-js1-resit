const form = document.querySelector("#contactForm");

const firstName = document.querySelector("#firstName");
const firstNameError = document.querySelector("#firstNameError");

const lastName = document.querySelector("#lastName");
const lastNameError = document.querySelector("#lastNameError");

const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");

const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");

const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");

function validateForm() {
    event.preventDefault();

    if(checkLength(firstName.value, 0) === true) {
        firstNameError.style.display = "none";
    } 
    else {
        firstNameError.style.display = "block";
    }

    
    if(checkLength(lastName.value, 2) === true) {
        lastNameError.style.display = "none";
    } 
    else {
        lastNameError.style.display = "block";
    }

    if(validateEmail(email.value) === true) {
        emailError.style.display = "none";
    }
    else {
        emailError.style.display = "block";
    }

    if(checkLength(subject.value, 6) === true) {
        subjectError.style.display = "none";
    } 
    else {
        subjectError.style.display = "block";
    }

    if(checkLength(message.value, 14) === true) {
        messageError.style.display = "none";
    } 
    else {
        messageError.style.display = "block";
    }
}

form.addEventListener("submit", validateForm);

function checkLength(value, leng) {
    if(value.trim().length > leng) {
        return true;
    }
    else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}

