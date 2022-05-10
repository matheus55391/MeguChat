import { ButtonsRow, Container, UserInfoRow, LogoutButton, ImgBox, UserPicture } from './styles'
import { useAuth } from '../../contexts/AuthContext'

export const UserInfo = () => {
	const { usuario, deslogar } = useAuth()
	return(
		<Container>
			<UserInfoRow>
				<ImgBox>
					<UserPicture src={`${usuario.photoURL}`}/>
				</ImgBox>
				<div>				
					{usuario.displayName.split(' ')[0]}
				</div>

			</UserInfoRow>
			<ButtonsRow>
				<LogoutButton onClick={deslogar}/>
			</ButtonsRow>
		</Container>
	)

}