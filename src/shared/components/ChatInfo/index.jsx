import { Container, SingOutButton } from './styles'
import { useAuth } from '../../contexts/AuthContext'

export const ChatInfo = () => {
	const { SingOut } = useAuth()
	return(
		<Container>
			<h2>MeguChat</h2>
			<SingOutButton onClick={SingOut} title="Deslogar">SAIR</SingOutButton>

		</Container>
	)

}