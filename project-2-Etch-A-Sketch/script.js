const hello = document.querySelector(".hello")?.textContent;
console.log(hello);

let colorArray = [
  "#FF6633",
  "#FFB399",
  "#FF33FF",
  "#FFFF99",
  "#00B3E6",
  "#E6B333",
  "#3366E6",
  "#999966",
  "#809980",
  "#E6FF80",
  "#1AFF33",
  "#999933",
  "#FF3380",
  "#CCCC00",
  "#66E64D",
  "#4D80CC",
  "#FF4D4D",
  "#99E6E6",
  "#6666FF",
];

const container = document.getElementById("container");

// div.textContent = "sami";
// div.style.color = "green";
let ask = prompt(
  "What size would your like your squares(from 10 to 99)? Ex: 30x30"
);
console.log(ask);
for (let i = 0; i <= ask.length; i++) {
  console.log(ask[i]);
  let new_list = [ask[0] + ask[1], ask[3] + ask[4]];
  console.log(new_list);
  for (let i = 0; i <= 16; i++) {
    const new_div = document.createElement("div");
    new_div.classList.add(`new_div${i}`);
    new_div.style.color = colorArray[i];
    new_div.style.backgroundColor = colorArray[i];
    new_div.style.height = new_list[0];
    new_div.style.width = new_list[1];
    container.appendChild(new_div);
    new_div.addEventListener("mouseover", function () {
      new_div.style["background-color"] = colorArray[i + 2];
    });
  }
}
