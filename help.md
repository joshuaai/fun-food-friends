# React Firebase App - Auth and Database
This file will show how to recreate this app from scratch.

## Getting Started
```bash
create-react-app fun-food-friends
yarn add firebase --dev
```

## Setting up Firebase
* Create the project in the firebase console
* Click `Add to Web Project` to get the Firebase config vars.
* Create a `src/firebase.js` file and add the config settings like so:
```js
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

export default firebase;
```
* Temporarily disable auth on the firebase console. Visit `Database > Rules` and rewrite the rules like so:
```json
{
  "rules": {
    ".read": "true",
    ".write": "true"
  }
}
```
Click `Publish`.
