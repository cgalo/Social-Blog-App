import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCrkDnzVNRgFrOVsqYt1rgffBD7uxYFhwk",
  authDomain: "social-blog-app-fb51c.firebaseapp.com",
  projectId: "social-blog-app-fb51c",
  storageBucket: "social-blog-app-fb51c.appspot.com",
  messagingSenderId: "627086764579",
  appId: "1:627086764579:web:8e3b3ff935ee8c33de1f96",
  measurementId: "G-77N0VXNQW6",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, analytics, db, storage };
