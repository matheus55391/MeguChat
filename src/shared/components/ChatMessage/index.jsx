import { Container, MensagerPacote, InputPacote, Input } from './styles'

export const ChatMessage = () => {
	return(
		<Container>
			<MensagerPacote>
				<div><div>FOTO</div><div>Teste texto</div></div>
				<div><div>FOTO</div><div>Teste texto</div></div>
				<div><div>FOTO</div><div>Teste texto</div></div>
				<div><div>FOTO</div><div>Teste texto</div></div>
				<div><div>FOTO</div><div>Teste texto</div></div>
				<div><div>FOTO</div><div>Teste texto</div></div>
				<div><div>FOTO</div><div>Teste texto</div></div>
			</MensagerPacote>
			<InputPacote>
				Tste
				{/* <Input type="text" placeholder="Digite a sua mensagem..."/> */}
			</InputPacote >
		</Container>
	)

}

