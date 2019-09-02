var pushNotificationsEnabled = false;
var snackbarContainer = document.querySelector('#demo-toast-example');

function pushNotifications() {
    var notification;

    if (!pushNotificationsEnabled) {
        notification = 'Push-Mitteilungen aktiviert';
        pushNotificationsEnabled = true;
    } else {
        notification = 'Push-Mitteilungen deaktiviert';
        pushNotificationsEnabled = false;
    }

    var data = {message: notification};
    snackbarContainer.MaterialSnackbar.showSnackbar(data);

}