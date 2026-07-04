// ======================================
// GOWIND LIKEBOT
// Login Script
// ======================================

const form = document.querySelector("form");

form.addEventListener("submit", async (event) => {

    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!username || !password) {
        alert("Please enter Username and Password.");
        return;
    }

    try {

        const response = await fetch("/api/auth/login", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                username,
                password
            })

        });

        const data = await response.json();

        if (data.success) {

            alert(data.message);

            window.location.href = "dashboard.html";

        } else {

            alert(data.message);

        }

    } catch (error) {

        alert("Server Connection Failed.");

        console.error(error);

    }

});
