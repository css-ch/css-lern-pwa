const functions = require('firebase-functions');
const admin = require('firebase-admin');
const auth = require('firebase-auth');
const cors = require('cors')({origin: true});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
 exports.login = functions.https.onRequest(function(request, response) {
  cors(function (request, response) {
  });
 });
