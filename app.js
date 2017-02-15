// Initialize Firebase
;(function () {
  
  let config = {
    apiKey: 'AIzaSyB3JsIUzsjfYn_RqwoALQu9K6o2TMvZi6g',
    authDomain: 'swot-analysis.firebaseapp.com',
    databaseURL: 'https://swot-analysis.firebaseio.com',
    storageBucket: 'swot-analysis.appspot.com',
    messagingSenderId: '379030428991'
  };

  firebase.initializeApp(config);

  const provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      let database = firebase.database().ref(`/${user.uid}`);
    } else {
      firebase.auth().signInWithRedirect(provider);
    }
  })
}());
