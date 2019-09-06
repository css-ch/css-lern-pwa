const loginForm = document.querySelector('#login-form');
const dataInvalid = document.querySelector('#data-invalid-snackbar');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = loginForm['email'].value;
    const password = loginForm['password'].value;

    auth.signInWithEmailAndPassword(email, password).then(cred => {
        window.location = '/home';
    }).catch(ex => {
        var data = {message: ex.message};
        dataInvalid.MaterialSnackbar.showSnackbar(data);
    });
});