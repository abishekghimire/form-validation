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

  document.getElementById("signupForm").addEventListener("submit", (event) => {
    const email = emailInput.value;

    if (!emailRegex.test(email)) {
      event.preventDefault();
      // showToast(invalidMsg, "orange");
    }
  });
}
