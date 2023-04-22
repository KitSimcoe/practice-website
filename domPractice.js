const container = document.querySelector("#container")
const para = document.createElement("p");
para.classList.add("content");
para.textContent = "Hi I'm Red!";
para.style.color = "red";

container.appendChild(para);

const header = document.createElement("h3");
header.style.color = "blue";
header.textContent = "I'm a blue H3";
container.appendChild(header);

const div = document.createElement("div");
div.classList.add("secondContainer");
div.style.backgroundColor = "pink";
div.style.borderColor = "black";
container.appendChild(div);

const headerTwo = document.createElement("h1");
headerTwo.textContent = "I'm in a div";
const paraTwo = document.createElement("p");
paraTwo.textContent = "Me Too!";
div.appendChild(headerTwo);
div.appendChild(paraTwo);


  
