/* eslint-disable react/prop-types */
import { MensagemCard, MensagemRow, Autor, Texto, Horario } from './styles'

export const MessageCard = (props) => {

	const Nome = ()=>{
			
		if(!props.usuarioAutor) {
			return(
				<Autor>{props.nome}</Autor>
			)	
		}
		

	}

	return(

		<MensagemRow msgAutor={props.usuarioAutor}>

			<MensagemCard msgAutor={props.usuarioAutor}>
				<Nome/>
				<Texto>{props.texto}</Texto>
				{/* <Horario>{props.dataHora || '' }</Horario> */}
			</MensagemCard>
		</MensagemRow>

	)

}

