function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const input = document.querySelector("#boxCountInput");
const createButton = document.querySelector("#controls button[data-create]");
const destroyButton = document.querySelector("#controls button[data-destroy]");
const boxesContainer = document.getElementById("boxes");



createButton.addEventListener("click", () => {
  const amount = parseInt(input.value);

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = "";
  } else {
    alert("Please enter a number between 1 and 100.");
  }
});



destroyButton.addEventListener("click", () => {
  destroyBoxes();
});

function createBoxes(amount) {
  boxesContainer.innerHTML = ""; 
  const fragment = document.createDocumentFragment(); 

  let size = 30; 

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div"); 
    box.classList.add("box"); 
    box.style.width = `${size}px`; 
    box.style.height = `${size}px`; 
    box.style.backgroundColor = getRandomHexColor(); 
    fragment.appendChild(box); 
    size += 10; 
  }

  boxesContainer.appendChild(fragment);
}


function destroyBoxes() {
  boxesContainer.innerHTML = ""; 
}