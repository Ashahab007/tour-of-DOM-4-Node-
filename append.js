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
const h3 = document.createElement("h3");
h3.innerText = "Rider I enjoyed";
section.appendChild(h3);
const ul = document.createElement("ul");
const li1 = document.createElement("li");
li1.innerText = "Sea Bike";
ul.appendChild(li1);
const li2 = document.createElement("li");
li2.innerText = "Para Diving";
ul.appendChild(li2);
const li3 = document.createElement("li");
li3.innerText = "Para Diving";
ul.appendChild(li3);
section.appendChild(ul);

mainContainer.appendChild(section);

// Another way of creating new section
// set innerHTML directly

const newSection = document.createElement("section");
newSection.innerHTML = `
<h3>Dresses I bought</h3>
<ul>
<li>Shirts</li>
<li>Genji</li>
<li>Pants</li>
</ul>`;

mainContainer.appendChild(newSection);

/* Module Summery */
