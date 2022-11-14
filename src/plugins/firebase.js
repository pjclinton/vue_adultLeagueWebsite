import { initializeApp } from 'firebase/app'
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const config = {

};

const app = initializeApp(config);
const db = getFirestore(app);
const auth = getAuth(app)

export { db, auth };
