import { ContactCard } from '../ContactCard'
import { Container } from './styles'

export const ChatsList = () => {
	const contactList = [
		{nome: 'Matheus'},
		{nome: 'Felipe'},
	]

	return(
		<Container>
			{contactList.map((contact, key )=>{
				return(
					<ContactCard nome={contact.nome} key={key}/>
				)
			})}
		</Container>
	)

}