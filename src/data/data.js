import "dotenv/config";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.FIRESTORE_API_KEY,
  authDomain: process.FIRESTORE_AUTH_DOMAIN,
  projectId: process.FIRESTORE_PROJECT_ID,
  storageBucket: process.FIRESTORE_STORAGE_BUCKET,
  messagingSenderId: process.FIRESTORE_MESSAGING_SENDER_ID,
  appId: process.FIRESTORE_APP_ID
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };