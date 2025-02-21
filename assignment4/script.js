// A. Variables, Functions, Conditions, and Loops

// Variables
var x = 10;
let y = 20;
const z = 30;

// Function for BMI Calculation
function calculateBMI(weight, height) {
    return weight / (height * height);
}

// Conditions
function checkNumber(num) {
    if (num > 0) return "Positive";
    else if (num < 0) return "Negative";
    else return "Zero";
}

// Loops - Generate a dynamic table
function generateTable(n) {
    let table = "<table border='1'>";
    for (let i = 1; i <= n; i++) {
        table += `<tr><td>Row ${i}</td></tr>`;
    }
    table += "</table>";
    document.getElementById("tableContainer").innerHTML = table;
}

// B. Pop-up Boxes
function showAlert() {
    alert("Form submitted successfully!");
}

function confirmDelete() {
    return confirm("Are you sure you want to delete this item?");
}

function getUserInput() {
    let input = prompt("Enter your name:");
    document.getElementById("userInput").innerText = `Hello, ${input}!`;
}

// C. Event Handling & DOM Manipulation
document.getElementById("changeText").addEventListener("click", function() {
    document.getElementById("text").innerText = "Text changed!";
});

document.getElementById("hoverElement").addEventListener("mouseover", function() {
    this.style.backgroundColor = "yellow";
});

document.getElementById("hoverElement").addEventListener("mouseout", function() {
    this.style.backgroundColor = "";
});

// Dynamic List
function addItem() {
    let item = document.createElement("li");
    item.textContent = document.getElementById("itemInput").value;
    document.getElementById("itemList").appendChild(item);
}

// D. Forms & Validation
function validateForm() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    
    if (!emailPattern.test(email)) {
        alert("Invalid Email!");
        return false;
    }
    if (!passwordPattern.test(password)) {
        alert("Weak Password!");
        return false;
    }
    return true;
}

// E. JavaScript Objects & AJAX
function showDateTime() {
    document.getElementById("dateTime").innerText = new Date().toLocaleString();
}

function generateRandom() {
    document.getElementById("randomNumber").innerText = Math.floor(Math.random() * 100);
}

function fetchWeather() {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=Indore&appid=YOUR_API_KEY")
    .then(response => response.json())
    .then(data => {
        document.getElementById("weather").innerText = `Temperature: ${data.main.temp}K`;
    });
}

// Advanced: To-Do List App
function addTask() {
    let task = document.createElement("li");
    task.textContent = document.getElementById("taskInput").value;
    document.getElementById("taskList").appendChild(task);
}

// Advanced: Simple Chatbot
function chatbot() {
    let userInput = document.getElementById("chatInput").value.toLowerCase();
    let response = userInput.includes("hello") ? "Hi there!" : "I don't understand.";
    document.getElementById("chatResponse").innerText = response;
}
