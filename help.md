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
  apiKey: "...",
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

## Firebase CRUD operations
Inside our main application file, this is as simple as creating a firebase instance:
```js
import firebase from './firebase.js';
```

Now we can add the events such as:

Creating / Submitting Data:
```js
handleSubmit(e) {
  e.preventDefault();
  const itemsRef = firebase.database().ref('items');
  const item = {
    title: this.state.currentItem,
    user: this.state.username
  }
  itemsRef.push(item);
  this.setState({
    currentItem: '', username: ''
  })
}
```

Retrieving data with Realtime Database:
```js
componentDidMount() {
  const itemsRef = firebase.database().ref('items');
  itemsRef.on('value', (snapshot) => {
    let items = snapshot.val();
    let newState= [];
    for (let item in items) {
      newState.push({
        id: item, title: items[item].title, user: items[item].user 
      })
    }
    this.setState({
      items: newState
    })
  })
}
```

Removing data from the database:
```js
removeItem(itemId) {
  const itemRef = firebase.database().ref(`/items/${itemId}`);
  itemRef.remove();
}
```

The Firebase documentation is a great place to find out more on [Web Database Structure and Operations](https://firebase.google.com/docs/database/web/start).