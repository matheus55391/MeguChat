import { useRef } from 'react'
import { Container, LoginFormCard, CardTitle, FormInput, FormButton } from './styles'
import { useAuth } from '../../shared/contexts/AuthContext'

export const Login = () => {
	const { logar } = useAuth()
	const emailRef = useRef(null)
	const passwordRef = useRef(null)  

	const Entrar = async ()=>{
		console.log('Entrar')

		const email = emailRef.current.value
		const password = passwordRef.current.value
		try{
			var result = await logar(email, password)
			console.log(result)
		}catch(error){
			console.log(error.message)
		}


	}

	return(
		<Container>
			<LoginFormCard>
				<CardTitle>LOGIN</CardTitle>
				<FormInput placeholder="E-mail" type="text" ref={emailRef}/>

				<FormInput placeholder="Password" type="password" ref={passwordRef}/>

				<FormButton onClick={Entrar}>Entrar</FormButton>
				<FormButton>Registrar</FormButton>
			</LoginFormCard>

		</Container>
	)

}