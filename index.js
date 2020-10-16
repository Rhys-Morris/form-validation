// Populate country options
const countries = ['Australia', 'New Zealand', 'Canada', 'Germany', 'France'];
// Can pull an above array from a JSON file for more options!

const countryList = document.getElementById('country');
countries.forEach(country => {
    let option = document.createElement('option');
    option.textContent = country;
    countryList.appendChild(option);
});

// Check email

const emailField = document.getElementById('mail');
const emailError = document.getElementById('mail-error');

function emailErrorStatus() {
    if (emailField.validity.valueMissing) {
        emailError.textContent = 'This field is required!';
    } else if (emailField.validity.typeMismatch) {
        emailError.textContent = 'Not a valid email address!';
    }
}

emailField.addEventListener('input', () => {
    if (emailField.validity.valid) {
        emailError.textContent = ""
    } else {
        emailErrorStatus();
    }
});

// Check zipcode

const zipcodeField = document.getElementById('zipcode');
const zipcodeError = document.getElementById('zipcode-error');

function zipcodeErrorStatus() {
    if (zipcodeField.validity.valueMissing) {
        zipcodeError.textContent = 'This field is required!';
    } else if (zipcodeField.validity.rangeOverflow || zipcodeField.validity.rangeUnderflow) {
        zipcodeError.textContent = 'Not a valid zipcode!';
    }
}

zipcodeField.addEventListener('input', () => {
    if (zipcodeField.validity.valid) {
        zipcodeError.textContent = ""
    } else {
        zipcodeErrorStatus();
    }
});

// Check password valid

const passwordField = document.getElementById('password');
const passwordError = document.getElementById('password-error');

function passwordErrorStatus() {
    if (passwordField.validity.valueMissing) {
        passwordError.textContent = 'This field is required!';
    } else if (passwordField.validity.tooShort || passwordField.validity.tooLong) {
        passwordError.textContent = 'Password must be between 8 and 16 characters';
    }
}

passwordField.addEventListener('input', () => {
    if (passwordField.validity.valid) {
        passwordError.textContent = ""
    } else {
        passwordErrorStatus();
    }
});

// Check password confirmation matches

const passwordConfirmField = document.getElementById('password-confirm');
const passwordConfirmError = document.getElementById('password-confirm-error');

passwordConfirmField.addEventListener('input', () => {

    if (passwordField.value != passwordConfirmField.value) {
        passwordConfirmField.setCustomValidity('Password does not match!');
        passwordConfirmError.textContent = "Password does not match!";
    } else {
        passwordConfirmField.setCustomValidity('');
        passwordConfirmError.textContent = "";
    }
});

// Check valid form on submit
const submit = document.getElementById('submit');
const submitStatus = document.querySelector('.submit-status')

submit.addEventListener('click', (e) => {
    e.preventDefault();
    let errorFound = false;

    const fieldsToCheck = Array.from(document.getElementsByClassName('form__input-text'));

    fieldsToCheck.forEach(field => {
        if (!field.validity.valid) {
            errorFound = true;
        }
    })
    if (errorFound === true) {
        submitStatus.textContent = "Form not correctly filled";
    } else {
        submitStatus.classList.add('submit-status__success')
        submitStatus.textContent = "Form submitted";
    }
})