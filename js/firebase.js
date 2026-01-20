// firebase.js

// استدعاء دوال Firebase من السيرفر مباشرة (CDN)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// 🔴 هام: استبدل البيانات التالية ببيانات مشروعك من Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyDWuXOQDLEMo3zCXUmY18sRBhpu-ExoAnM",
  authDomain: "fin-money.firebaseapp.com",
  projectId: "fin-money",
  storageBucket: "fin-money.firebasestorage.app",
  messagingSenderId: "832182121419",
  appId: "1:832182121419:web:a5fd91c16862980475fc4e",
  measurementId: "G-423G953NF1"
};

// تهيئة التطبيق
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // سنستخدمها لاحقاً لحفظ البيانات

// تصدير الأدوات لنستخدمها في الصفحات الأخرى
export { auth, db };