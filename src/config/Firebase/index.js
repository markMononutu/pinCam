import firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAe9ty8F-E-9i7mrYEQgaqQBehoalNFEwA",
  authDomain: "pincam-b7c56.firebaseapp.com",
  databaseURL:
    "https://pincam-b7c56-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "pincam-b7c56",
  storageBucket: "pincam-b7c56.appspot.com",
  messagingSenderId: "60744578801",
  appId: "1:60744578801:web:4161fc82fea5239ee1db50",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
