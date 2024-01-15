const categories = document.querySelectorAll(".item");
console.log("Number of categories: " + categories.length);

categories.forEach ((element) => {
    const category = element.querySelector("h2").textContent;
    console.log("Category: " + category);

    const elements = element.querySelectorAll("li");
    console.log("Elements: " + elements.length);    
});

