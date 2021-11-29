// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import { getFirestore, getDoc, collection, where, doc, setDoc, query, addDoc, getDocs } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD_6GjJ_xLaa_T3pvLOiWYqFx2nQKKwfgY",
    authDomain: "team-reporter-saylani.firebaseapp.com",
    projectId: "team-reporter-saylani",
    storageBucket: "team-reporter-saylani.appspot.com",
    messagingSenderId: "731418733106",
    appId: "1:731418733106:web:5b5c7f103573fea8626a2b"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {
    app,
    auth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    db,
    getDoc,
    collection,
    where,
    doc,
    setDoc,
    query,
    addDoc,
    getDocs,
    updateProfile
}