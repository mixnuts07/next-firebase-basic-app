import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: process.env.FIREBASECONFIG_APIKRY,
  authDomain: process.env.FIREBASECONFIG_AUTHDOMAIN,
  projectId: process.env.FIREBASECONFIG_PROJECTID,
  storageBucket: process.env.FIREBASECONFIG_STORAGEBUCKET,
  messagingSenderId: process.env.FIREBASECONFIG_MESSAGEINGSENDEROD,
  appId: process.env.FIREBASECONFIG_APPID,
  measurementId: process.env.FIREBASECONFIG_MEASUREMENTID,
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
