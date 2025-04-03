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

const modal = document.getElementById("myModal");
let i;

const img = document.getElementsByClassName("myImg");
const modalImg = document.getElementById("img01");

for (i = 0; i < img.length; i++) {
  img[i].onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
  };
}

let span = document.getElementsByClassName("close")[0];

span.onclick = function () {
  modal.style.display = "none";
};
