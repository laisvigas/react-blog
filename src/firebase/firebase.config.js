import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDfCuIKWYrXqeqEozRoPMHKeGvdPUw8YS8",
  authDomain: "react-blog-xx.firebaseapp.com",
  projectId: "react-blog-xx",
  storageBucket: "react-blog-xx.firebasestorage.app",
  messagingSenderId: "492699082097",
  appId: "1:492699082097:web:a01496df3f1229285aead0"
};

const app = initializeApp(firebaseConfig);
export default app;