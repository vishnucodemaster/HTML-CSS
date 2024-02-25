function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }


  const dynamicBorderContainer = document.getElementById("dynamic-border");

// Function to generate a random color
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Set a random border color initially
dynamicBorderContainer.style.borderColor = getRandomColor();

// Add an event listener to change the border color on hover
dynamicBorderContainer.addEventListener("mouseover", function () {
  dynamicBorderContainer.style.borderColor = getRandomColor();
});

// Reset the border color when the mouse leaves the element
dynamicBorderContainer.addEventListener("mouseout", function () {
  dynamicBorderContainer.style.borderColor = getRandomColor();
});