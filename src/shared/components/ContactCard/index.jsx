import {CardContactBody, NomeContato} from './styles'
export const ContactCard = (props) => {
	
	return(
		<CardContactBody>
			<NomeContato>
				{
					// eslint-disable-next-line react/prop-types
					props.nome
				}
			</NomeContato>

		</CardContactBody>
	)

}