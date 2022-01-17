
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const submitBtn = document.querySelector('.btn');
let emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


submitBtn.addEventListener('click', function(e){
    e.preventDefault();
    //check input fields
    if(firstName.value === '') {
        firstName.value = '';
        showErrorMessage(firstName, "First Name cannot be empty!");
    }
    if(lastName.value === '') {
        showErrorMessage(lastName, "Last Name cannot be empty!");
    }
    
    if(email.value === ''){
        showErrorMessage(email, "Email cannot be empty!");
    } else if (!emailRegExp.test(email.value)){
        email.style.color = 'hsl(0, 100%, 74%) ';
        showErrorMessage(email, "Look like this is not an email!");
    }
    if(password.value === '') {
        showErrorMessage(password, "Password cannot be empty");
    }
});

//error message
function showErrorMessage(inputValue, message) {
    const inputControl = inputValue.parentElement;
    inputControl.classList.add('error');
    const errroMessage = inputControl.querySelector('.error-message');
    errroMessage.innerHTML = message;
}