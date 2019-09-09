var firebaseConfig = {
    apiKey: "AIzaSyBYlCWINMXHIIpZ94hq4nSAA9WQoFLhXlU",
    authDomain: "pwa-bay.firebaseapp.com",
    databaseURL: "https://pwa-bay.firebaseio.com",
    projectId: "pwa-bay",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();