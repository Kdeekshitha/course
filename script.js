document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  if (!email || !password) {
    alert("Please fill in both email and password.");
    return;
  }

  // Simple demo validation. Replace with real authentication logic.
  if (email === "test@example.com" && password === "password123") {
    alert("Login successful! Welcome back.");
  } else {
    alert("Invalid email or password. Hint: test@example.com / password123");
  }
});
