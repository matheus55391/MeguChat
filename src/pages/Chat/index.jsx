import { Grid } from './styles'
import { ChatInfo, ChatMessage, ChatsList, UserInfo } from '../../shared/components'

export const Chat = () => {

	return(
		<Grid>
			<ChatInfo/>
			<ChatMessage/>
			<ChatsList/>
			<UserInfo/>
		</Grid>
	)

}