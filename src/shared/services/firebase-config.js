import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore as getFirebaseFireStore, query, collection, orderBy, limit } from 'firebase/firestore'

const firebaseConfig = {
	apiKey:  			import.meta.env.VITE_API_KEY,
	authDomain:   		import.meta.env.VITE_AUTH_DOMAIN,
	projectId:  		import.meta.env.VITE_PROJECT_ID,
	databaseURL:  		import.meta.env.VITE_DATABASE_URL,
	storageBucket: 		import.meta.env.VITE_STORAGE_BUCKET,
	messagingSenderId:  import.meta.env.VITE_MESSAGING_SENDER_ID,
	appId: 				import.meta.env.VITE_APP_ID,
	measurementId: 		import.meta.env.VITE_MEASUREMENT_ID,
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirebaseFireStore(app)
const queryMensagens = query(collection(db, 'Mensagens'), orderBy('dataHora'), limit(20))
export { auth , db, queryMensagens}