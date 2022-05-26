// import { useRef } from 'react'
import { Container, LoginRow, Titulo, Descricao, ButtonGoogle, ButtonGit } from './styles'
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
		<>
		
			<Container>
				<LoginRow>
					<Titulo>
					MeguChat
					</Titulo>
					<Descricao>
					Um chat em tempo real feito com React.js + FireStore.
					</Descricao>

					<ButtonGoogle

						label='Entrar com o Google'
						onClick={handleGoogleLogin}
						type='light' //dark light
					/>



				</LoginRow>

				{/* onClick={handleGoogleLogin} */}

			
			</Container>
			<ButtonGit
				href="https://github.com/matheus55391/MeguChat" target="_blank"
			>
					Visite o repositorio no github.
			</ButtonGit>
		</>
	)

}