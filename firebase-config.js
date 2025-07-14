import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDV_zQ1XgFX21ODoQfzJB6kWx2oBLUvUGo",
  authDomain: "nutriapp-c70e5.firebaseapp.com",
  projectId: "nutriapp-c70e5",
  storageBucket: "nutriapp-c70e5.appspot.com",
  messagingSenderId: "161614548436",
  appId: "1:161614548436:web:8af6b54c485339207eda41"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);