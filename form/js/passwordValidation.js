const charLengthRegex = /^.{4,40}$/;
const charSetRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).*$/;

export function passwordValidation(
  passwordField,
  passwordLengthFeedback,
  passwordSetFeedback
) {
  passwordField.addEventListener("input", () => {
    if (charLengthRegex.test(passwordField.value)) {
      passwordLengthFeedback.style.display = "none";
      if (charSetRegex.test(passwordField.value)) {
        passwordSetFeedback.style.display = "none";
      } else {
        passwordSetFeedback.style.display = "block";
      }
    } else {
      passwordLengthFeedback.style.display = "block";
    }
  });

  const validatePassword = (event) => {
    const password = passwordField.value;

    if (!charLengthRegex.test(password) || !charSetRegex.test(password)) {
      event.preventDefault();
      // showToast(invalidMsg, "orange");
    }
  };
  const signupForm = document.getElementById("signupForm");
  const signinForm = document.getElementById("signinForm");

  if (signinForm) {
    signinForm.addEventListener("submit", validatePassword);
  }

  if (signupForm) {
    signupForm.addEventListener("submit", validatePassword);
  }
}
