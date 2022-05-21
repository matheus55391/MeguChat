import { Container, Deslogar } from './styles'
import { useAuth } from '../../contexts/AuthContext'

export const ChatInfo = () => {
	const { deslogar } = useAuth()
	return(
		<Container>
			<h2>MeguChat</h2>
			<Deslogar onClick={deslogar} title="Deslogar">SAIR</Deslogar>

		</Container>
	)

}