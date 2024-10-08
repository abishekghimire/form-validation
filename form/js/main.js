import { dobValidation } from "./dobValidation.js";
import { emailValidation } from "./emailValidation.js";
import { showHidePassword } from "./passwordShowHide.js";
import { passwordValidation } from "./passwordValidation.js";
const emailField = document.querySelector(".form input[type = 'email']");
const emailFeedback = document.querySelector(".email-feedback");

const dobField = document.querySelector(".form input[type = 'text']");
const ageLimitFeedback = document.querySelector(".age-limit-feedback");
const invalidDateFeedback = document.querySelector(".invalid-date-feedback");
const futureDateFeedback = document.querySelector(".future-date-feedback");

const passwordField = document.querySelector(".form input[type= 'password']");
const toggleBtn = document.querySelector(".form .field i");
const passwordLengthFeedback = document.querySelector(
  ".password-length-feedback"
);
const passwordSetFeedback = document.querySelector(".password-set-feedback");

emailValidation(emailField, emailFeedback);
showHidePassword(passwordField, toggleBtn);
passwordValidation(passwordField, passwordLengthFeedback, passwordSetFeedback);
dobValidation(
  dobField,
  ageLimitFeedback,
  invalidDateFeedback,
  futureDateFeedback
);
