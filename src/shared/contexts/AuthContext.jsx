/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from 'react'
import { auth } from '../services/firebase-config'
import { 
	GoogleAuthProvider, 
	signInWithPopup,
	onAuthStateChanged,
	signOut
} from 'firebase/auth'


const AuthContext = createContext()

export const useAuth = () => { 
	return useContext(AuthContext)
}

export const AuthProvider = ({ children })=>{
	// eslint-disable-next-line no-unused-vars
	const [usuario, setUsuario] = useState() 
	
	const googleLogin = () => {
		const googleAuthProvider = new GoogleAuthProvider()
		signInWithPopup(auth, googleAuthProvider)
	}

	const deslogar = () => {
		signOut(auth)
	}
	
	useEffect(() => {
		const deslogando = onAuthStateChanged(auth, currentUser=>{
			setUsuario(currentUser)

		})
		return () => {
			deslogando()
		}
		
	}, [])

	const value = {
		usuario,
		googleLogin,
		deslogar
	}
	
	return (
		
		<AuthContext.Provider value={value}>
			{children}
		</AuthContext.Provider>
	)
	
}