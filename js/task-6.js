function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
}
 
const input = document.querySelector('input');
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const boxes = document.querySelector("div#boxes");
  
btnCreate.addEventListener("click", () => {
    if(input.value && input.value >= 1 && input.value <= 100){ 
        createBoxes(input.value);
    }
    else {
    }
});

btnDestroy.addEventListener("click", () => {
    destroyBoxes();
});

function createBoxes(amount) {
    destroyBoxes();

    let width = 30;
    let height = 30;

    for (let i = 0; i < amount; i++) {
        const color = getRandomHexColor();

        const el = document.createElement('div');
        el.style.width = width + "px";
        el.style.height = height + "px";
        el.style.backgroundColor = color;

        boxes.append(el);        

        width = width + 10;
        height = height + 10;
    }

    input.value = "";
};

function destroyBoxes() {
    boxes.innerHTML = "";
}