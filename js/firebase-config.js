$.getScript("https://www.gstatic.com/firebasejs/5.5.2/firebase.js");
var config = {
    apiKey: "AIzaSyARWxQfeawBVMkdnefN0YfQZN3-ciSK_Q0",
    authDomain: "nomercadoapp.firebaseapp.com",
    databaseURL: "https://nomercadoapp.firebaseio.com",
    projectId: "nomercadoapp",
    storageBucket: "nomercadoapp.appspot.com",
    messagingSenderId: "876324724595"
};
firebase.initializeApp(config);

var admin = require('firebase-admin');

var serviceAccount = require('path/to/serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://nomercadoapp.firebaseio.com'
});

var refreshToken; // Get refresh token from OAuth2 flow

admin.initializeApp({
  credential: admin.credential.refreshToken(refreshToken),
  databaseURL: 'https://nomercadoapp.firebaseio.com'
});
