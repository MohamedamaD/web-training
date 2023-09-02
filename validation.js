const registrationForm = document.getElementById("registrationForm");
const usernameField = document.getElementById("username");
const emailField = document.getElementById("email");
const passwordField = document.getElementById("password");
const usernameError = document.getElementById("usernameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

let usersData = localStorage.getItem("usersData");

if (!usersData) {
  usersData = [];
} else {
  usersData = JSON.parse(usersData);
}

registrationForm.addEventListener("submit", function (e) {
  let valid = true;

  if (!usernameRegex.test(usernameField.value)) {
    usernameError.textContent = "Invalid username";
    valid = false;
  } else {
    usernameError.textContent = "";
  }

  if (!emailRegex.test(emailField.value)) {
    emailError.textContent = "Invalid email";
    valid = false;
  } else {
    emailError.textContent = "";
  }

  if (!passwordRegex.test(passwordField.value)) {
    passwordError.textContent = "Invalid password";
    valid = false;
  } else {
    passwordError.textContent = "";
  }

  if (!valid) {
    e.preventDefault();

    const userData = {
      username: usernameField.value,
      email: emailField.value,
      password: passwordField.value,
    };

    usersData.push(userData);
    localStorage.setItem("usersData", JSON.stringify(usersData));
    registrationForm.reset();
    alert("Registration successful! You can now log in.");
  }
});
