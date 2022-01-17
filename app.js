const submitBtn = document.querySelector('.btn');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
let emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const form = document.querySelector('.signup');


submitBtn.addEventListener('click', function(e){
    e.preventDefault();
    
    if(firstName.value === '') {
        showErrorMessage(firstName, "First Name cannot be empty!");
    }
    if(lastName.value === '') {
        showErrorMessage(lastName, "Last Name cannot be empty!");
    }
    
    if(email.value === ''){
        showErrorMessage(email, "Email cannot be empty!");
    } else if (!emailRegExp.test(email.value)){
        showErrorMessage(email, "Look like this is not an email!");
    }
    if(password.value === '') {
        showErrorMessage(password, "Password cannot be empty");
    }
    form.reset();
});

function showErrorMessage(inputValue, message) {
    const inputControl = inputValue.parentElement;
    inputControl.classList.add('error');
    const errroMessage = inputControl.querySelector('.error-message');
    errroMessage.innerHTML = message;
}