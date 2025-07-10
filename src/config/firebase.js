import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat/app";

const firebaseConfig = {
  apiKey: "AIzaSyCFaVziJuJpb4VVjoXBmqcQj0RJJp_fk5c",
  authDomain: "islandlakerewards-dev.firebaseapp.com",
  projectId: "islandlakerewards-dev",
  storageBucket: "islandlakerewards-dev.firebasestorage.app",
  messagingSenderId: "25140282216",
  appId: "1:25140282216:web:8e03c2ad64a01f63e14cdd",
  measurementId: "G-PJEVSY5J1Z"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);