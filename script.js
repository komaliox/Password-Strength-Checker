function checkPassword() {
    let password = document.getElementById("password").value;
    let result = document.getElementById("result");

    let score = 0;

    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) score++;

    if (score <= 2) {
        result.textContent = "WEAK 🔴";
        result.style.color = "red";
    } else if (score <= 4) {
        result.textContent = "MEDIUM 🟡";
        result.style.color = "orange";
    } else {
        result.textContent = "STRONG 🟢";
        result.style.color = "lightgreen";
    }
    // Matrix animation
const matrix = document.querySelector(".matrix");
const chars = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%&";
const fontSize = 16;
let columns = Math.floor(window.innerWidth / fontSize);
let drops = Array(columns).fill(1);

function drawMatrix() {
    const ctx = matrix.getContext("2d");
}

const canvas = document.createElement("canvas");
matrix.appendChild(canvas);
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function matrixEffect() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#00ff00";
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {
        let text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

setInterval(matrixEffect, 50);

}

