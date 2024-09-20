export function showHidePassword(passwordField, toggleBtn) {
  toggleBtn.onclick = () => {
    if (passwordField.type == "password") {
      passwordField.type = "text";
      toggleBtn.classList.add("active");
    } else {
      passwordField.type = "password";
      toggleBtn.classList.remove("active");
    }
  };
}
