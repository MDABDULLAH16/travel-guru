// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID,
};
// const firebaseConfig = {
//   apiKey: "AIzaSyC-peKfaq8qEMeucCnMS9RAkShLuZ569Qw",
//   authDomain: "travel-guru-b8.firebaseapp.com",
//   projectId: "travel-guru-b8",
//   storageBucket: "travel-guru-b8.appspot.com",
//   messagingSenderId: "352518348087",
//   appId: "1:352518348087:web:e98f66445780293db24eb2",
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
