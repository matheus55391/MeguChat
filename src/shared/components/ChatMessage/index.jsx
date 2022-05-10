import { Container, MensagerPacote, InputPacote, Input, EmojiButton, SandButton } from './styles'

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
				<EmojiButton/>
				<Input type="text" placeholder="Digite a sua mensagem..."/>
				<SandButton/>
			</InputPacote >
		</Container>
	)

}

