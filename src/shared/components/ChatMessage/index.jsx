import { useEffect, useRef, useState } from 'react'
import { Container, MensagemArea, InputArea, Input, EmojiButton, SandButton, EmojiBox } from './styles'
import { useAuth } from '../../contexts/AuthContext'
import { db, queryMensagens } from '../../services/firebase-config'
import { 	
	collection,
	addDoc,
	serverTimestamp,
	onSnapshot
} from 'firebase/firestore'
import { MessageCard } from '../MessageCard'
import Picker from 'emoji-picker-react'

export const ChatMessage = () => {
	const messageInputRef = useRef()
	const [ mensagensList, setMensagensList] = useState([])
	const { usuario } = useAuth()
	const [ emojiArea, setEmojiArea ] = useState(false)

	const handleEnviarMensagem = async () =>{
		try{			
			const textoTrim = messageInputRef.current.value.trim()		
			messageInputRef.current.value = ''	
			if(textoTrim)
			{

				const novaMensagem = {
					texto: textoTrim,
					dataHora: serverTimestamp(),
					uid: usuario.uid,
					nome: usuario.displayName,
					foto: usuario.photoURL,
					
				}
				await addDoc(collection(db, 'Mensagens'), novaMensagem)
			}
		} catch(error){
			console.log('error!!!')
			console.log(error)
		}		
	}

	useEffect(() => {
		const unsub = onSnapshot(queryMensagens, (snapshot)=>{
			let msgList = snapshot.docs.map((doc)=> ({ ...doc.data()}))		

			msgList = msgList.map((msg) => {
				if(msg.dataHora){
					var dh = msg.dataHora
					dh = dh.toDate()
					var data = new Date()
					console.log(data , 'ói')
					console.log(dh)
					dh = new Date(dh)
					dh = dh.toLocaleTimeString()
					return {...msg, dataHora: dh}	
				}

			})
			try{
				if( msgList[0] ) setMensagensList(msgList.reverse())	
			} catch(error){
				console.log(error)
			}

		})
		return unsub

	}, [])

	
	return(
		<Container>
			<MensagemArea>
				{
					
					mensagensList.map((msg, key)=>{
						const usuarioAutor = msg.uid === usuario.uid? true : false						
						return(

							<MessageCard 
								key={key} 
								nome={msg.nome} 
								texto={msg.texto} 
								usuarioAutor={usuarioAutor} 
								foto={msg.foto} 
								dataHora={msg.dataHora} 
							/>
						)

					})
				}
				<EmojiBox
					emojiArea = {emojiArea}
				>

					<Picker 
						onEmojiClick = {
							(event, emojiObject)=>{
								messageInputRef.current.value = messageInputRef.current.value + emojiObject.emoji
							}
						}
						pickerStyle={{
							width: '100%'
						}}
						groupVisibility={{
							flags: false,
						}}
						disableSearchBar="true"
					/>
				</EmojiBox>

			</MensagemArea>

			<InputArea>

				<EmojiButton 
					emojiArea = {emojiArea}
					onClick={()=>{
						setEmojiArea(emojiArea? false : true)
					}}
				/>
				<Input 
					type="text" 
					placeholder="Digite a sua mensagem..."
					ref={messageInputRef}	
					onKeyPress={e=>{
						if(e.key === 'Enter'){
							handleEnviarMensagem()
						}						
					}}
				/>
				<SandButton
					onClick={handleEnviarMensagem}
				/>
			</InputArea >
		</Container>
	)

}

