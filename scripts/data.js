  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDh_V6eZVCkL6fpakRdUwQLVB-THBQAl_0",
    authDomain: "nocovid-301815.firebaseapp.com",
    databaseURL: "https://nocovid-301815-default-rtdb.firebaseio.com",
    projectId: "nocovid-301815",
    storageBucket: "nocovid-301815.appspot.com",
    messagingSenderId: "722298456324",
    appId: "1:722298456324:web:a0a259a10e817a8c772851",
    measurementId: "G-V6Q03XMF33"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
    // Set the configuration for your app
  // TODO: Replace with your project's config object
  // var config = {
  //   apiKey: "apiKey",
  //   authDomain: "projectId.firebaseapp.com",
  //   databaseURL: "https://databaseName.firebaseio.com",
  //   storageBucket: "bucket.appspot.com"
  // };
  // firebase.initializeApp(config);

  // Get a reference to the database service
  var database = firebase.database().ref();



  function writeUserData() {
    firebase.database().ref('/').set({
      username:"Ashish"
    });
  }