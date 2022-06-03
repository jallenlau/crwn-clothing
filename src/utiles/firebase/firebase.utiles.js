import { initializeApp } from 'firebase/app'
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCgUQatf3U-jQNdWlwh4_mAGjbZu4Ua0Zg",
    authDomain: "crown-clothing-fb.firebaseapp.com",
    projectId: "crown-clothing-fb",
    storageBucket: "crown-clothing-fb.appspot.com",
    messagingSenderId: "414303640492",
    appId: "1:414303640492:web:ce398c2aaed99aff20b809"
};

const firebaseapp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider;
provider.setCustomParameters({
    prompt: "select_account"
});


export const auth = getAuth();  
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);