import Firebase from 'firebase';
import config from './config';

const firebaseApp = !Firebase.apps.length
  ? Firebase.initializeApp(config.firebase)
  : Firebase.app();

const db = firebaseApp.database();
const dbExpensesRef = db.ref('expenses');
const dbCategoriesRef = db.ref('categories');

export { firebaseApp, dbExpensesRef, dbCategoriesRef };
