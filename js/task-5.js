function getRandomHexColor() {
       return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
}

document.querySelector(".change-color").addEventListener("click", event => {
    const color = getRandomHexColor();
    document.body.style.backgroundColor = color;
    document.querySelector(".color").textContent = color;

    //document.querySelector("body").setAttribute("style", "background-color: " + color);
    //document.querySelector("span.color").textContent = color;

});

// const changeColorButton = document.querySelector(".change-color");
// const widget = document.querySelector(".widget");
// const colorSpan = document.querySelector(".color");

// changeColorButton.addEventListener("click", () => {
//   const randomColor = getRandomHexColor();
//   document.body.style.backgroundColor = randomColor;
//   widget.style.backgroundColor = randomColor;
//   colorSpan.textContent = randomColor;
// });



// Напиши скрипт, який змінює колір фону елемента <body> через інлайн-стиль по кліку на button.change-color і
//  задає це значення кольору текстовим вмістом для span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>

// Для генерування випадкового кольору використовуй функцію getRandomHexColor().



// Зверни увагу, що функція getRandomHexColor() повертає колір у hex-форматі, в той час як 
// колір фону на <body> буде у форматі rgb. Це нормально й не потребує якихось правок.