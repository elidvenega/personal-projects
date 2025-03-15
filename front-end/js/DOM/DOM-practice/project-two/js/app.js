"use strict";

const card_container = document.querySelector(".card-container");
const wolf_img = `https://d1jyxxz9imt9yb.cloudfront.net/medialib/4452/image/s768x1300/JohnEMarriott_2009-10_BanffNationalPark-Alberta-Canada_WolfHowling_wlf0054_reduced.jpg`;
let card = document.createElement("div");

card = `

<div> 
<h1>Wolf</h1>
<img src= ${wolf_img}  alt="wolf"/>
<p>Wolf Howling</p>
</div>
`;

card_container.innerHTML = card;
