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
	const [error, setError] = useState()
	const [carregando, setCarregando] = useState(false)

	const googleLogin = async () => {
		setCarregando(true)
		try{
			
			const res = await signInWithPopup(auth, googleAuthProvider)
			const user = res.user
			if (user.uid){
				const q  = query(collection(db, 'Usuarios'), where('uid', '==', user.uid)) 
				const docs = await getDocs(q)
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
			setError(error)
			console.log(error.message)
		}
		setCarregando(false)
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
		error,
		carregando,
		googleLogin,
		deslogar
	}
	
	return (
		
		<AuthContext.Provider value={value}>
			{children}
		</AuthContext.Provider>
	)
	
}