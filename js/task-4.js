const form = document.querySelector('form');

form.addEventListener('submit', event => {
    event.preventDefault();
    const email = event.target.elements.email.value.trim();
    const password = event.target.elements.password.value.trim();

    if (email && password) {
        const obj = {email, password};
        console.log(obj);
        form.reset();
    } else {
        alert('All form fields must be filled in');
    }
});

