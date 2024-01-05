const form = document.getElementById("form");
const username = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");

form.addEventListener("submit", (e) => {
  if (!checkInputs()) {
    e.preventDefault();
  }
});

function checkInputs() {
  let isValid = true;

  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const messageValue = message.value;

  if (usernameValue === "") {
    setErrorFor(username);
    isValid = false;
  } else {
    setSuccessFor(username);
  }

  if (emailValue === "") {
    setErrorFor(email);
    isValid = false;
  } else {
    setSuccessFor(email);
  }

  if (messageValue === "") {
    setErrorFor(message);
    isValid = false;
  } else {
    setSuccessFor(message);
  }

  return isValid;
}

function setErrorFor(input) {
  const formControl = input.parentElement;
  formControl.className = "newsletter__form-control error";
}
function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "newsletter__form-control success";
}
