/* eslint-disable react/prop-types */
import { MessageRow, CardMessage, Owner, Text, Time } from './styles'
import stc from 'string-to-color'

export const MessageCard = (props) => {

	const Name = ()=>{
		
		if(!props.owner) {
			const color = stc(props.name)
			return(
				<Owner color = {color}>{props.name}</Owner>
			)	
		}
	}

	return(

		<MessageRow owner={props.owner}>
			<CardMessage owner={props.owner}>
				<Name/>
				<Text>{props.text}</Text>
				<Time>{props.dateTime.substring(0, 5)}</Time>
			</CardMessage>
		</MessageRow>

	)

}

