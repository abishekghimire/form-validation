// import showToast from "../toast-notification/main.js";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const invalidMsg = "Please enter valid email!";

export function emailValidation(emailField, emailFeedback) {
  emailField.addEventListener("input", () => {
    if (emailRegex.test(emailField.value)) {
      emailFeedback.style.display = "none";
    } else {
      emailFeedback.style.display = "block";
    }
  });

  const validateEmail = (event) => {
    const email = emailField.value;

    if (!emailRegex.test(email)) {
      event.preventDefault();
      // showToast(invalidMsg, "orange");
    }
  };
  const signupForm = document.getElementById("signupForm");
  const signinForm = document.getElementById("signinForm");

  if (signinForm) {
    signinForm.addEventListener("submit", validateEmail);
  }

  if (signupForm) {
    signupForm.addEventListener("submit", validateEmail);
  }
}
