// import firebase from 'firebase/app'
// import 'firebase/firestore'
// import 'firebase/auth'

import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const config = {
  apiKey: 'AIzaSyBLX6yk_crO58DNKySzfSBgWybJImyUXek',
  authDomain: 'neela-cloth-db.firebaseapp.com',
  projectId: 'neela-cloth-db',
  storageBucket: 'neela-cloth-db.appspot.com',
  messagingSenderId: '1065484237364',
  appId: '1:1065484237364:web:a223877dbe9eb622a66861',
  measurementId: 'G-Q58J00CYME',
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
