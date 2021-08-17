import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'xxxxxxxxxxxxxxxxxx',
  authDomain: 'xxxxxx.firebaseapp.com',
  databaseURL: 'https://xxxxxx.firebaseio.com',
  projectId: 'xxxxx',
  storageBucket: 'xxxxx.appspot.com',
  messagingSenderId: '000000000',
  appId: '0:xxxxxxx',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };