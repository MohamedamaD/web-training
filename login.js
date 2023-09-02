const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const enteredUsername = document.getElementById("username").value;
  const enteredPassword = document.getElementById("password").value;

  if (enteredUsername === "admin" && enteredPassword === "admin") {
    window.location.href = "admin.html";
    localStorage.setItem("isAdmin", "true");
    localStorage.setItem("isLogin", "true");
    return;
  }

  const usersData = JSON.parse(localStorage.getItem("usersData"));

  if (usersData) {
    const matchingUser = usersData.find(
      (user) =>
        user.username === enteredUsername && user.password === enteredPassword
    );

    if (matchingUser) {
      window.location.href = "index.html";
      localStorage.setItem("isLogin", "true");
      alert("Login successful!");
    } else {
      alert("Invalid username or password. Please try again.");
      localStorage.setItem("isLogin", "false");
    }
  } else {
    alert("No registered users found. Please register first.");
  }
});
