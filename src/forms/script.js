document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.querySelector('form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const repeatPasswordInput = document.getElementById('repeat-password');
    const signUpButton = document.querySelector('.social-signup button');

    signUpButton.addEventListener('click', (e) => {
        e.preventDefault();

        let isFormValid = true;

        const checkInput = (input) => {
            if (input.value.trim() === '') {
                input.style.borderColor = 'red';
                isFormValid = false;
            } else {
                input.style.borderColor = ''; 
            }
        };

        checkInput(emailInput);
        checkInput(passwordInput);
        checkInput(repeatPasswordInput);

        if (isFormValid) {
            alert('Success');
        } else {
            alert('Failure');
        }
    });
});
