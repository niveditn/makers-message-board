// import * as firebase from 'firebase';
// import config from './config'
// firebase.initializeApp(config);
// export default firebase;

import * as admin from 'firebase-admin';
import * as serviceAccount from './firebaseKey.json';

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://makers-message-board.firebaseio.com",
});

const db = admin.firestore();

export default db;
