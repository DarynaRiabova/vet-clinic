const form = document.getElementById("form");
const username = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});
function checkInputs() {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const messageValue = message.value;
  if (usernameValue === "") {
    setErrorFor(username);
  } else {
    setSuccessFor(username);
  }
  if (emailValue === "") {
    setErrorFor(email);
  } else {
    setSuccessFor(email);
  }
  if (messageValue === "") {
    setErrorFor(message);
  } else {
    setSuccessFor(message);
  }
}
function setErrorFor(input) {
  const formControl = input.parentElement;
  formControl.className = "newsletter__form-control error";
}
function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "newsletter__form-control success";
}
