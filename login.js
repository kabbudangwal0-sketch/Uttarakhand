document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const password = document.getElementById("password").value.trim();

 
  const users = JSON.parse(localStorage.getItem("users")) || [];

  const userFound = users.find(user => user.name === name && user.password === password);

  if (userFound) {
    localStorage.setItem("loggedInUser", userFound.name);
    alert(`Welcome back, ${userFound.name}!`);
    window.location.href = "home.html";
  } else {
  
    alert("No account found! Please sign up first.");
    window.location.href = "signup.html";
  }
});