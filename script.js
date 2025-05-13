// Event Handling 🎈

document.getElementById("clickButton").addEventListener("click", function() {
  alert("Button clicked!");
});

document.getElementById("hoverButton").addEventListener("mouseover", function() {
  this.style.backgroundColor = "yellow";
});
document.getElementById("hoverButton").addEventListener("mouseout", function() {
  this.style.backgroundColor = "";
});

document.getElementById("inputField").addEventListener("keypress", function(event) {
  console.log("Key pressed: " + event.key);
});

document.getElementById("doubleClickButton").addEventListener("dblclick", function() {
  alert("Button double-clicked!");
});

let pressTimer;
document.getElementById("longPressButton").addEventListener("mousedown", function() {
  pressTimer = setTimeout(function() {
    alert("Long press detected!");
  }, 1000);
});

document.getElementById("longPressButton").addEventListener("mouseup", function() {
  clearTimeout(pressTimer);
});

// Interactive Elements 🎮

document.getElementById("changeButton").addEventListener("click", function() {
  this.textContent = "Text Changed!";
  this.style.backgroundColor = "green";
});

let images = [
  "https://via.placeholder.com/500x300/ff9a9e/ffffff?text=Image+1",
  "https://via.placeholder.com/500x300/ffb3d9/ffffff?text=Image+2",
  "https://via.placeholder.com/500x300/ff69b4/ffffff?text=Image+3"
];
let currentIndex = 0;

document.getElementById("nextImage").addEventListener("click", function() {
  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById("slideshowImage").src = images[currentIndex];
});

function openTab(event, tabName) {
  let i, tabContent, tabLinks;
  tabContent = document.getElementsByClassName("tabContent");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }
  tabLinks = document.getElementsByClassName("tab");
  for (i = 0; i < tabLinks.length; i++) {
    tabLinks[i].className = tabLinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  event.currentTarget.className += " active";
}

// Form Validation 📋✅

document.getElementById("form").addEventListener("submit", function(event) {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!name || !emailPattern.test(email) || password.length < 8) {
    event.preventDefault();
    alert("Please ensure all fields are correctly filled.");
  }
});
