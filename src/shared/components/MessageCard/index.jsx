/* eslint-disable react/prop-types */
import { MensagemCard, MensagemRow, Autor, Texto, Horario } from './styles'
import stc from 'string-to-color'

export const MessageCard = (props) => {

	const Nome = ()=>{

		if(!props.usuarioAutor) {
			const cor = stc(props.nome)
			return(
				<Autor cor = {cor}>{props.nome}</Autor>
			)	
		}
		

	}

	return(

		<MensagemRow msgAutor={props.usuarioAutor}>

			<MensagemCard msgAutor={props.usuarioAutor}>
				<Nome/>
				<Texto>{props.texto}</Texto>
				<Horario>{props.dataHora.substring(0, 5)}</Horario>
			</MensagemCard>
		</MensagemRow>

	)

}

