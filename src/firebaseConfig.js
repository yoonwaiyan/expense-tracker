import Firebase from 'firebase';
import config from './config';

const firebaseApp = Firebase.initializeApp(config.firebase);
const firebaseDB = firebaseApp.database();
export const expensesDB = firebaseDB.ref('expenses');
