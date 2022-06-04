import { async } from '@firebase/util';
import { initializeApp } from 'firebase/app'
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
} from 'firebase/auth'
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCgUQatf3U-jQNdWlwh4_mAGjbZu4Ua0Zg",
    authDomain: "crown-clothing-fb.firebaseapp.com",
    projectId: "crown-clothing-fb",
    storageBucket: "crown-clothing-fb.appspot.com",
    messagingSenderId: "414303640492",
    appId: "1:414303640492:web:ce398c2aaed99aff20b809"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account',
});


export const auth = getAuth();  
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
    userAuth,
    additionalInformation = {}
) => {
    if (!userAuth) return;
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation,
            });
        } catch (error) {
            console.log('error creating the user', error.message)
        }
    }
    return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => { 
    if (!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password);
 }