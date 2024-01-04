import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore' //newer database for firebase

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDjWqxqgfGqXPHMBkCsnMbL27U7LqeSNUs',
  authDomain: 'beat-muziki-app.firebaseapp.com',
  projectId: 'beat-muziki-app',
  storageBucket: 'beat-muziki-app.appspot.com',
  messagingSenderId: '360199109713',
  appId: '1:360199109713:web:d5224df02d8931812c8c70'
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const db = firebase.firestore()

export { auth, db }
