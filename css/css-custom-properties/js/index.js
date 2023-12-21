// selecting the box class
const box = document.querySelector(".box");
// retrieving custom property
const boxStyles = getComputedStyle(box);
// applying custom property
const boxMainColor = boxStyles.getPropertyValue("--box-main-color");

const header = document.querySelector("#main-header");
// changing background color
header.style.setProperty("--header-bg-color", boxMainColor);
