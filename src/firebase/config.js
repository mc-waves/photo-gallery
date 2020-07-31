import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCm1SfPVpeud2JtDRtP0Nzn64LSHgDCx-w',
  authDomain: 'photo-gallery-aec2f.firebaseapp.com',
  databaseURL: 'https://photo-gallery-aec2f.firebaseio.com',
  projectId: 'photo-gallery-aec2f',
  storageBucket: 'photo-gallery-aec2f.appspot.com',
  messagingSenderId: '694567770299',
  appId: '1:694567770299:web:118285bed1627c1d88f19e',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);



const storage = firebase.storage();
const database = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;


export { storage, database, timestamp };