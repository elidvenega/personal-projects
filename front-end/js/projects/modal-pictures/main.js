/* 
Make modal work on all images
*/

// Get the modal
// const modal = document.getElementById("myModal");

// // Get the image and insert it inside the modal - use its "alt" text as a caption
// const img = document.getElementById("myImg");
// const modalImg = document.getElementById("img01");
// const captionText = document.getElementById("caption");
// // img.onclick = function () {
// //   modal.style.display = "block";
// //   modalImg.src = this.src;
// //   captionText.innerHTML = this.alt;
// // };

// // Get the <span> element that closes the modal
// const span = document.getElementsByClassName("close")[0];

// // When the user clicks on <span> (x), close the modal
// span.onclick = function () {
//   modal.style.display = "none";
// };

// targets div element where img modal will appear
const modal = document.getElementById("myModal");
let i;

// gets all images
const img = document.getElementsByClassName("myImg");
// gets img tag
const modalImg = document.getElementById("img01");

for (i = 0; i < img.length; i++) {
  img[i].onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
  };
}

let span = document.getElementsByClassName("close")[0];

// when I click on image modal will close
span.onclick =  () => {
  modal.style.display = "none";
};