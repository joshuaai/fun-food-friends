import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCm8PwqUv1fuVYz-Vz_v94b8qnPvMXXF1M",
  authDomain: "fun-food-friends-31759.firebaseapp.com",
  databaseURL: "https://fun-food-friends-31759.firebaseio.com",
  projectId: "fun-food-friends-31759",
  storageBucket: "fun-food-friends-31759.appspot.com",
  messagingSenderId: "815378140702"
};

firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default firebase;