// script.js
document.addEventListener("DOMContentLoaded", () => {
  const colorPicker = document.getElementById("color-picker");
  const hexValue = document.getElementById("hex-value");
  const rgbValue = document.getElementById("rgb-value");
  const randomColorBtn = document.getElementById("random-color");

  // Update the HEX and RGB values when a color is selected
  const updateColorValues = (color) => {
    hexValue.value = color;
    rgbValue.value = hexToRgb(color);
  };

  // Convert HEX to RGB
  const hexToRgb = (hex) => {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `rgb(${r}, ${g}, ${b})`;
  };

  // Generate a random HEX color
  const generateRandomColor = () => {
    const randomHex = `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")}`;
    updateColorValues(randomHex);
    colorPicker.value = randomHex;
  };

  // Event listeners
  colorPicker.addEventListener("input", (e) => {
    updateColorValues(e.target.value);
  });

  randomColorBtn.addEventListener("click", generateRandomColor);

  // Initialize with a random color
  generateRandomColor();
});
