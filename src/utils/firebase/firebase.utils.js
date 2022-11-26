import { initializeApp } from "firebase/app";

import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBViKasUStgvZlT449TfQX0bp-MjzbBdH8",
    authDomain: "crwn-project-326f0.firebaseapp.com",
    projectId: "crwn-project-326f0",
    storageBucket: "crwn-project-326f0.appspot.com",
    messagingSenderId: "154051706186",
    appId: "1:154051706186:web:7d748c17fa5062c449d5b3",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, "users", userAuth.uid);

    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot.exists());

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createAt = new Date();

        try {
            await setDoc(userDocRef, { displayName, email, createAt });
        } catch (err) {
            console.log("error", err.message);
        }
    }
    //if user data exists

    //return userDocRef

    //esle crea
};
