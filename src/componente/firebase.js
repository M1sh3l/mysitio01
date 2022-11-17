// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyBpf8c47OR5Pkb8e0BsKfj7CQCmo5pkaew',
    authDomain: 'base-react-c2021.firebaseapp.com',
    projectId: 'base-react-c2021',
    storageBucket: "base-react-c2021.appspot.com",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export default app;
