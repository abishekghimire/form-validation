const dobRegex = /^(19|20)\d{2}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;

export function dobValidation(
  dobField,
  ageLimitFeedback,
  invalidDateFeedback,
  futureDateFeedback
) {
  dobField.addEventListener("input", () => {
    const dob = new Date(dobField.value);
    const today = new Date();
    const age = today.getFullYear() - dob.getFullYear();
    const monthDifference = today.getMonth() - dob.getMonth();

    invalidDateFeedback.style.display = "none";
    ageLimitFeedback.style.display = "none";
    futureDateFeedback.style.display = "none";

    if (!dobRegex.test(dobField.value)) {
      invalidDateFeedback.style.display = "block";
    } else {
      if (dob > today) {
        futureDateFeedback.style.display = "block";
      } else {
        if (
          age < 16 ||
          (age === 16 && monthDifference < 0) ||
          (age === 16 &&
            monthDifference === 0 &&
            today.getDate() < dob.getDate())
        ) {
          ageLimitFeedback.style.display = "block";
        }
      }
    }
  });

  const validateDOB = (event) => {
    const dob = dobField.value;

    if (!dobRegex.test(dob)) {
      event.preventDefault();
      // showToast(invalidMsg, "orange");
    }
  };
  const signupForm = document.getElementById("signupForm");

  if (signupForm) {
    signupForm.addEventListener("submit", validateDOB);
  }
}
