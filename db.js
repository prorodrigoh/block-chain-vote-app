import admin from 'firebase-admin'
import creds from './credentials.js'

admin.initializeApp({
  credential: admin.credential.cert(creds)
});

const db = admin.firestore();
export const elections = db.collection('elections')
