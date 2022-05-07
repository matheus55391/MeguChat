import { initializeApp } from 'firebase/app'

const firebaseConfig = {
	apiKey: process.env.REACT_APP_API_KEY,
	authDomain:  process.env.REACT_APP_AUTH_DOMAIN,
	projectId: process.env.REACT_APP_PROJECT_ID,
	databaseURL: process.env.REACT_APP_DATABASE_URL,
	storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
	messagingSenderId:process.env.REACT_APP_MESSAGING_SENDER_ID,
	appId:process.env.REACT_APP_APP_ID,
	measurementId: process.env.REACT_APP_MEASUREMENT_ID,
}

const app = initializeApp(firebaseConfig)
export default app