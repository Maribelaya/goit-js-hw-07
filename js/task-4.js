const form = document.querySelector("form");

form.addEventListener("submit", event => {
    if(event.target.elements.email.value.trim() && event.target.elements.password.value.trim()){
        const obj = {"email": event.target.elements.email.value.trim(), "password": event.target.elements.password.value.trim()};
        console.log(obj);
        form.reset();
    }
    else{
        alert("All form fields must be filled in");
    }

    event.preventDefault();
});

const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const register = event.target;
  const email = register.elements.email.value.trim();
  const password = register.elements.password.value.trim();

  if (email === "" || password === "") {
    return alert("All form fields must be filled in");
  }
  const user = {
    email,
    password,
  };

  console.log(user);

  form.reset();
});


// Обробка відправлення форми form.login-form повинна відбуватися за подією submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо при сабміті у формі є незаповнені поля, виводь alert з попередженням про те, 
// що 'All form fields must be filled in'. Не додавай на інпути атрибут required, 
// валідація має відбуватися саме через JS.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт 
// з двома властивостями, де ключ — це ім'я інпутів, а значення — відповідні значення цих 
// інпутів, очищені від пробілів по краях. Для доступу до елементів форми використовуй 
// властивість elements.
// При сабміті форми виведи об'єкт із введеними даними в консоль і очисти значення полів 
// форми методом reset.