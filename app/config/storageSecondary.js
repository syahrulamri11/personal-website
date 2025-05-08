import { initializeApp, getApps } from "firebase/app";
import { getStorage } from "firebase/storage";

const secondaryConfig = {
  apiKey: process.env.SECONDARY_FIREBASE_API_KEY,
  authDomain: process.env.SECONDARY_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.SECONDARY_FIREBASE_PROJECT_ID,
  storageBucket: process.env.SECONDARY_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.SECONDARY_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.SECONDARY_FIREBASE_APP_ID,
  measurementId: process.env.SECONDARY_FIREBASE_MEASUREMENT_ID
};

const secondaryApp = getApps().find(app => app.name === "secondary")
  || initializeApp(secondaryConfig, "secondary");

const imageStorage = getStorage(secondaryApp);

export { imageStorage };
