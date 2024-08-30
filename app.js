const cont = document.querySelector("#gib-content");

import { url } from "/main.js";

const response = await fetch(url);
console.log(response);

async function checkapi(api) {
  if (api.status === 200) {
    console.log("it kk");
  } else {
    throw new console.error(api.statusText);
  }
}
const data = await response.json();
console.log(data);
checkapi(response);

function cardCreator() {
  //for loop?
  for (let i = 0; i < data.length; i++) {
    const div = document.createElement("div");
    const img = document.createElement("img");
    img.alt = "ghibli movie";
    const p = document.createElement("p");
    const txt = document.createTextNode(data[i].description);
    p.append(txt);
    div.id = `card${i}`;

    img.src = `${data[i].image}`;
    div.appendChild(img);
    div.appendChild(p);
    cont.appendChild(div);
  }
}

cardCreator();

// cont.innerHTML = `<div>hei<div>`;
