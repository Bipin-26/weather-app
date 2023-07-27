// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCX6pzHzN8s2Wv0gGLWHQRfvv4WXrgnTuc",
  authDomain: "weather-app-d86d9.firebaseapp.com",
  projectId: "weather-app-d86d9",
  storageBucket: "weather-app-d86d9.appspot.com",
  messagingSenderId: "718323060261",
  appId: "1:718323060261:web:4afd633d336e0f77b6f9cc",
  measurementId: "G-1KX7TTMGP3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);

export default app;