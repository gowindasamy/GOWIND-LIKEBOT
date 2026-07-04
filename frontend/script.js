document.querySelector("form").addEventListener("submit", function(event) {

    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === "") {
        alert("Please enter your username.");
        return;
    }

    if (password === "") {
        alert("Please enter your password.");
        return;
    }

    alert("Login successful!");

    // Next step:
    // window.location.href = "dashboard.html";

});
