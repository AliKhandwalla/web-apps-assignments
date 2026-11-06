
 // Example 1: Greeting based on the current hour
let hour = new Date().getHours();

if (hour < 12) {
    document.getElementById("greeting").innerHTML = "Good Morning!";
} else if (hour < 18) {
    document.getElementById("greeting").innerHTML = "Good Afternoon!";
} else {
    document.getElementById("greeting").innerHTML = "Good Evening!";
}

// Example 2: Change HTML text
function changeText() {
    document.getElementById("message").innerHTML = "You clicked the button!";
}

// Example 3: Display current date and time
function showDate() {
    document.getElementById("date").innerHTML = new Date();
}

// Example 4: Add two numbers
function findSum() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    document.getElementById("sum").innerHTML = num1 + num2;
}

// Example 5: Find the length of a string
function getLength() {
    let text = document.getElementById("myText").value;

    document.getElementById("length").innerHTML =
        '"' + text + '" has ' + text.length + ' characters.';
}

// Example 6: Show or hide password
function togglePassword() {
    let password = document.getElementById("password");

    if (password.type === "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }
}

// Example 7: Change font size and color
function changeStyle() {
    let text = document.getElementById("styleText");

    text.style.color = "red";
    text.style.fontSize = "50px";
}

// Example 8: Hide or show a message
function toggleDisplay() {
    let message = document.getElementById("moody");

    if (message.style.display === "none") {
        message.style.display = "block";
    } else {
        message.style.display = "none";
    }
}
