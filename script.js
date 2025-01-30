// Mobile Navigation
function hamburg() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(0px)";
}
function cancel() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(-500px)";
}

// Typewriter Effect
const texts = [
    "Uber Direct Merchant Specialist",
    "COE Specialist I - US & Canada Outreach Innovation",
    "Transaction & Identity Fraud Analyst", // Fixed comma
    "Flagship Support Associate"
];

let speed = 70;      // Typing speed (milliseconds per letter)
let eraseSpeed = 20; // Faster erase speed
let delay = 1000;    // Pause before erasing
let textIndex = 0;
let charIndex = 0;

const textElement = document.querySelector(".typewriter-text");

function typeWriter() {
    if (charIndex < texts[textIndex].length) {
        textElement.innerHTML += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, speed);
    } else {
        setTimeout(eraseText, delay); // Delay before erasing
    }
}

function eraseText() {
    if (charIndex > 0) {
        textElement.innerHTML = texts[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseText, eraseSpeed); // Faster erasing
    } else {
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(typeWriter, 500);
    }
}

// Start Typewriter Effect when page loads
window.onload = function () {
    setTimeout(typeWriter, 500);
};
