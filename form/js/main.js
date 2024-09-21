import { emailValidation } from "./emailValidation.js";
import { showHidePassword } from "./passwordShowHide.js";
import { passwordValidation } from "./passwordValidation.js";
const emailField = document.querySelector(".form input[type = 'email']");
const emailFeedback = document.querySelector(".email-feedback");
const passwordField = document.querySelector(".form input[type= 'password']");
const toggleBtn = document.querySelector(".form .field i");
const passwordLengthFeedback = document.querySelector(
  ".password-length-feedback"
);
const passwordSetFeedback = document.querySelector(".password-set-feedback");

emailValidation(emailField, emailFeedback);
showHidePassword(passwordField, toggleBtn);
passwordValidation(passwordField, passwordLengthFeedback, passwordSetFeedback);
