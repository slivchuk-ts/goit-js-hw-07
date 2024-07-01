function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const colorStatus = document.querySelector(".color")
const colorChangeBtn = document.querySelector(".change-color")

colorChangeBtn.addEventListener("click", () => {
  const colorCode = getRandomHexColor()
  document.querySelector("body").style.backgroundColor = colorCode;
  colorStatus.textContent = colorCode;
})

function createBoxes(amount) {
    output.innerHTML = "";
    let boxSize = 30;
    let newBoxes = [];
    for (let i = 1; i <= amount; i++) {
        const newBox = document.createElement("div");
        newBox.style.width = `${boxSize}px`;
        newBox.style.height = `${boxSize}px`;
        newBox.style.backgroundColor = getRandomHexColor();
        boxSize += i * 10;
        newBoxes.push(newBox);
    }
    output.append(...newBoxes);
}

function destroyBoxes() {
    output.innerHTML = "";
}

createBtn.addEventListener("click", () => {
    const amount = parseInt(numberInput.value);
    if (
        amount >= Number(numberInput.min) &&
        amount <= Number(numberInput.max)
    ) {
        createBoxes(amount);
        numberInput.value = "";
    }
    else {
      numberInput.value = "";
      output.innerHTML = "";
  }
});

destroyBtn.addEventListener("click", destroyBoxes);