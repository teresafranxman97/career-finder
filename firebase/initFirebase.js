import "firebase/auth";
import "firebase/database";
import "firebase/storage";
import "firebase/analytics";
import "firebase/performance";
import Firebase from "Firebase/app";

const firebaseConfig = {
	apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
	authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
	databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
	projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
	storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// If a Firebase instance does not exist, create one
if (!Firebase.apps.length) {
	Firebase.initializeApp(firebaseConfig);
}

export default Firebase;
