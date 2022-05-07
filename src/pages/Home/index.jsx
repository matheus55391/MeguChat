import { Grid } from './styles'
import { ChatInfo, ChatMessage, ChatsList, UserInfo } from '../../shared/components'
export const Home = () => {
	return(
		<Grid>
			<ChatInfo/>
			<ChatMessage/>
			<ChatsList/>
			<UserInfo/>
		</Grid>
	)

}