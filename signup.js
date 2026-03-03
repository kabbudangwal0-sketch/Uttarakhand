document.getElementById("signupForm").addEventListener("submit", function(e) {
  e.preventDefault();


  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirmPassword = document.getElementById("confirmPassword").value.trim();

 
  let users = JSON.parse(localStorage.getItem("users")) || [];

  users.push({ name, email, password });
  localStorage.setItem("users", JSON.stringify(users));


  localStorage.setItem("loggedInUser", name);


  alert(`Welcome, ${name}! Your account has been created.`);
  window.location.href = "home.html";
});