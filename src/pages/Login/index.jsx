// import { useRef } from 'react'
import { Container, LoginFormCard } from './styles'
import GoogleButton from 'react-google-button'

import { useAuth } from '../../shared/contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export const Login = () => {
	const navigate = useNavigate()
	const { usuario, googleLogin } = useAuth()

	const handleGoogleLogin = async ()=>{
		try{

			await googleLogin()			
		} catch(error){
			console.log('googleLogin error')
			console.log(error)
		}
	}
	
	useEffect(()=>{	
		if(usuario){
			navigate('/MeguChat/chat')
		} else {
			navigate('/MeguChat/login')
		}
		
	}, [usuario])

	return(
		<Container>
			<LoginFormCard>
				<div>Login</div>
				<GoogleButton
					label='Entrar com o Google'
					onClick={handleGoogleLogin}
					type='light' //dark light
				/>
			</LoginFormCard>

		</Container>
	)

}