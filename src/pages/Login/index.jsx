// import { useRef } from 'react'
import { Container, LoginRow, ButtonGoogle, ButtonGit, Title, Description } from './styles'
import { useAuth } from '../../shared/contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export const Login = () => {
	const navigate = useNavigate()
	const { User, GoogleSingIn } = useAuth()

	const handleGoogleLogin = async ()=>{
		try{
			await GoogleSingIn()			
		} catch(error){
			console.log('GoogleSingIn error: ' + error)
			
		}
	}
	
	useEffect(()=>{	
		if(User){
			navigate('/MeguChat/chat')
		} else {
			navigate('/MeguChat/login')
		}
		
	}, [User])

	return(
		<>		
			<Container>
				<LoginRow>
					<Title>
						MeguChat
					</Title>
					<Description>
						Um chat em tempo real feito com React.js + FireStore.
					</Description>

					<ButtonGoogle
						label='Entrar com o Google'
						onClick={handleGoogleLogin}
						type='light' //dark light
					/>
				</LoginRow>			
			</Container>
			<ButtonGit
				href="https://github.com/matheus55391/MeguChat" target="_blank"
			>
				Visite o repositorio no github.
			</ButtonGit>
		</>
	)

}