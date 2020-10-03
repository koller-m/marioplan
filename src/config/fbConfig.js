import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAXvvcEdFyWmNo19ES9CzcR0PrjgoX4uvg",
    authDomain: "marioplan-9ff6a.firebaseapp.com",
    databaseURL: "https://marioplan-9ff6a.firebaseio.com",
    projectId: "marioplan-9ff6a",
    storageBucket: "marioplan-9ff6a.appspot.com",
    messagingSenderId: "301214571098",
    appId: "1:301214571098:web:d56c2aff4b1451bb6f5663"
  };

  firebase.initializeApp(firebaseConfig)
  firebase.firestore().settings({})

  export default firebase