import { Container } from './styles'
import { useAuth } from '../../contexts/AuthContext'

export const ChatInfo = () => {
	const { deslogar } = useAuth()
	return(
		<Container>
			<h2>MeguChat</h2>
			<button onClick={deslogar}>Deslogar</button>
			<button>Tema</button>
			{/* 
				Nome do projeto 
				LOGIN
				TEMA SELECTOR
			*/}

		</Container>
	)

}