const environments = import.meta.env;
const APIKEY = environments.VITE_APIKEY;
const AUTHDOMAIN = environments.VITE_AUTHDOMAIN;
const PROJECTID = environments.VITE_PROJECTID;
const STORAGEBUCKET = environments.VITE_STORAGEBUCKET;
const MESSAGEING_SENDER_ID = environments.VITE_MESSAGEING_SENDER_ID;
const APP_ID_FIREBASE = environments.VITE_APP_ID_FIREBASE;

import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  getDoc,
  query,
  where,
  setDoc,
  deleteDoc,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  getBytes,
} from "firebase/storage";

const firebaseConfig = {
  apiKey: APIKEY,
  authDomain: AUTHDOMAIN,
  projectId: PROJECTID,
  storageBucket: STORAGEBUCKET,
  messagingSenderId: MESSAGEING_SENDER_ID,
  appId: APP_ID_FIREBASE,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore();
export const storage = getStorage();
