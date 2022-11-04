// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyCORBtusawF05wEi5Rle0INNJpKD3gwMHY',
    authDomain: 'bdreact01.firebaseapp.com',
    projectId: 'bdreact01',
    storageBucket: "bdreact01.appspot.com",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export default app;
