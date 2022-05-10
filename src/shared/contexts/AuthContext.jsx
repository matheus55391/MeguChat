/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from 'react'
import { auth } from '../services/firebase-config'
import { 
	signInWithEmailAndPassword, 
	createUserWithEmailAndPassword,
	signOut,
	onAuthStateChanged
} from 'firebase/auth'

const AuthContext = createContext()

export const useAuth = () => { 
	return useContext(AuthContext)
}

export const AuthProvider = ({ children })=>{
	// eslint-disable-next-line no-unused-vars
	const [currentUser, setCurrentUser] = useState() 
	
	const logar = async (email, password) => {
		return await signInWithEmailAndPassword(auth, email, password)
	}

	const registrar = async (email, password) => {
		return await createUserWithEmailAndPassword(auth, email, password)
	}

	const deslogar = async () => {
		return await signOut(auth)
	}
	
	useEffect(() => {
		onAuthStateChanged(auth, user=>{
			setCurrentUser(user)
		})
	}, [])

	const value = {
		currentUser,
		logar,
		registrar,
		deslogar
	}
	
	return (
		
		<AuthContext.Provider value={value}>
			{children}
		</AuthContext.Provider>
	)
	
}