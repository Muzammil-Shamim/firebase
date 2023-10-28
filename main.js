// setting up firebase with our website
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCXiKdDYOZFJgFI0mqF0OTeZSlHlgsjpXg",
  authDomain: "sing-in-project-720f1.firebaseapp.com",
  projectId: "sing-in-project-720f1",
  storageBucket: "sing-in-project-720f1.appspot.com",
  messagingSenderId: "616627526478",
  appId: "1:616627526478:web:8efe1f873f2b9fa413dc1f",
  measurementId: "G-QFBSTWL3J0",
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

// Sign up function
const signUp = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  console.log(email, password);
  // firebase code
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((result) => {
      // Signed in
      document.write("You are Signed Up");
      console.log(result);
      // ...
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
      // ..
    });
};

// Sign In function
const signIn = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  // firebase code
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((result) => {
      // Signed in
      document.write("You are Signed In");
      console.log(result);
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
    });
};
