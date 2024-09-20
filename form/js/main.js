import { emailValidation } from "./email-validation.js";
import { showHidePassword } from "./password-show-hide.js";
const emailInput = document.querySelector(".form input[type = 'email']");
const emailFeedback = document.querySelector(".email-feedback");
const passwordField = document.querySelector(".form input[type= 'password']");
const toggleBtn = document.querySelector(".form .field i");

emailValidation(emailInput, emailFeedback);
showHidePassword(passwordField, toggleBtn);
