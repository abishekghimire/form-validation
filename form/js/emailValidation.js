// import showToast from "../toast-notification/main.js";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const invalidMsg = "Please enter valid email!";

export function emailValidation(emailInput, emailFeedback) {
  emailInput.addEventListener("input", () => {
    if (emailRegex.test(emailInput.value)) {
      emailFeedback.style.display = "none";
    } else {
      emailFeedback.style.display = "block";
    }
  });

  const validateEmail = (event) => {
    const email = emailInput.value;

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
