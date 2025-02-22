// 1. Where to add
let placesList = document.getElementById("places-lists");

//2. What to be added
let li = document.createElement("li");
li.innerText = "Jhau bon";

//3.add the child
placesList.appendChild(li);

//Creating a new section
const mainContainer = document.getElementById("main-container");

const section = document.createElement("section");
const ul = document.createElement("ul");
const h3 = document.createElement("h3");
h3.innerText = "Rider I enjoyed";

const li1 = document.createElement("li");

mainContainer.appendChild(h3);
