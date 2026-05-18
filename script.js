
const conform = document.getElementById("form");
const response = document.getElementById("responsemessage");

if (conform) {
  conform.addEventListener("submit", function(event) {
    event.preventDefault();

    const userName    = document.getElementById("Name").value.trim();
    const userEmail   = document.getElementById("Email").value.trim();
    const userMessage = document.getElementById("Message").value.trim();

    if (userName === "" || userEmail === "" || userMessage === "") {
      response.textContent = "Ensure all fields are filled before submitting!";
      response.style.color = "#e8ff00";
      return;
    }

    if (!userEmail.includes("@")) {
      response.textContent = "Email address must contain @";
      response.style.color = "#e8ff00";
      return;
    }

    response.textContent = "Thank you, " + userName + "! For using Street Vibz Soundz";
    response.style.color = "#e8ff00";
    conform.reset();
  });
}

const hour = new Date().getHours();
let greeting;

if (hour < 12) {
  greeting = "Good Morning! Welcome to Street Vibz Soundz";
} else if (hour < 18) {
  greeting = "Good Afternoon! Welcome to Street Vibz Soundz";
} else {
  greeting = "Good Evening! Welcome to Street Vibz Soundz";
}

document.getElementById("greeting").textContent = greeting;