const updatePassword = document.querySelector('#update-password');
const password1 = document.querySelector('#password1');
const password2 = document.querySelector('#password2');
const dataInvalid = document.querySelector('#data-invalid-snackbar');

updatePassword.addEventListener('click', () => {
    const user = auth.currentUser;
    const password1Text = password1.value;
    const password2Text = password2.value;

    if (password1Text === password2Text) {
        user.updatePassword(password1Text).then( () => {
            window.location = '/settings';
        }).catch((e) => {
            var data = {message: e.message};
            dataInvalid.MaterialSnackbar.showSnackbar(data);
        });
    } else {
        var data = {message: 'Passwörter stimmen nicht überein!'};
        dataInvalid.MaterialSnackbar.showSnackbar(data);
    }

});