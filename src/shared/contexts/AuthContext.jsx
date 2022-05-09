/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from 'react'
import { auth } from '../services/firebase-config'
import { 
	signInWithEmailAndPassword, 
	createUserWithEmailAndPassword,
	signOut
} from 'firebase/auth'

const AuthContext = createContext()

export const useAuth = () => { 
	return useContext(AuthContext)
}

export const AuthProvider = ({ children })=>{
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