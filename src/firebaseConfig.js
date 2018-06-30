import Firebase from 'firebase';
import config from './config';

const firebaseApp = !Firebase.apps.length
  ? Firebase.initializeApp(config.firebase)
  : Firebase.app();

const firebaseDB = firebaseApp.firestore();
const settings = { timestampsInSnapshots: true };
firebaseDB.settings(settings);

const expensesDB = firebaseDB.collection('expenses');

export { firebaseApp, expensesDB };
