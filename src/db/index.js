import * as firebase from 'firebase';
import config from './config'
// Required for side-effects
import 'firebase/firestore';

firebase.initializeApp(config);

const db = firebase.firestore();

export default db;
