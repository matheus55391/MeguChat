/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from 'react'
import { auth, db } from '../services/firebase-config'
import { 
	query,
	collection,
	where,
	getDocs,
	addDoc
} from 'firebase/firestore'

import { 
	GoogleAuthProvider, 
	signInWithPopup,
	onAuthStateChanged,
	signOut
} from 'firebase/auth'

const googleAuthProvider = new GoogleAuthProvider()
const AuthContext = createContext()

export const useAuth = () => { 
	return useContext(AuthContext)
}

export const AuthProvider = ({ children })=>{
	// eslint-disable-next-line no-unused-vars
	const [User, setUser] = useState() 
	const [Error, setError] = useState(null)
	const [Loading, setLoading] = useState(false)

	const GoogleSingIn = async () => {
		setLoading(true)
		try{
			
			const res = await signInWithPopup(auth, googleAuthProvider)
			if (res.user.uid){
				const q  = query(collection(db, 'Users'), where('uid', '==', res.user.uid)) 
				const docs = await getDocs(q)
				if (docs.docs.length === 0) {
					const newUser = {
						uid: res.user.uid,
						fullName: res.user.displayName,
						accountType: 'google',
						email: res.user.email
					}
					await addDoc(collection(db, 'Users'), newUser)
				}
			}	
		} catch(error){
			setError(error)
			console.log(error.message)
		}
		setLoading(false)
	}

	const SingOut = () => {
		signOut(auth)
	}
	
	useEffect(() => {
		const singOut = onAuthStateChanged(auth, currentUser=>{
			setUser(currentUser)
		})
		return () => {
			singOut()
		}
		
	}, [])

	const value = {
		User,
		Error,
		Loading,
		GoogleSingIn,
		SingOut
	}
	
	return (
		
		<AuthContext.Provider value={value}>
			{children}
		</AuthContext.Provider>
	)
	
}