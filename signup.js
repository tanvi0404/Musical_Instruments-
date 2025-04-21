function handleSignup(e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    localStorage.setItem("loggedInUser", username);
    window.location.href = "homepage.html";
  }
