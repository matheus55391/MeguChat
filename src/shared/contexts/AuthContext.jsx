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
	const [usuario, setUsuario] = useState() 

	const googleLogin = async () => {
		try{
			
			const res = await signInWithPopup(auth, googleAuthProvider)
			const user = res.user
			if (user.uid){
				const q  = query(collection(db, 'Usuarios'), where('uid', '==', user.uid)) 
				const docs = await getDocs(q)
				console.log(docs)
				if (docs.docs.length === 0) {
					const novoUsuario = {
						uid: user.uid,
						nameCompleto: user.displayName,
						tipoConta: 'google',
						email: user.email
					}
					await addDoc(collection(db, 'Usuarios'), novoUsuario)
				}
			}	
		} catch(error){
			console.log(error.message)
		}
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