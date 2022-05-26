import { useEffect, useRef, useState } from 'react'
import { Container, MessageArea, InputArea, Input, EmojiButton, SendButton, EmojiBox } from './styles'
import { useAuth } from '../../contexts/AuthContext'
import { db, queryMessages } from '../../services/firebase-config'
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
	const [ messageList, setMessageList] = useState([])
	const { User } = useAuth()
	const [ emojiArea, setEmojiArea ] = useState(false)

	const handleSendMessage = async () =>{
		try{			
			const textTrim = messageInputRef.current.value.trim()		
			messageInputRef.current.value = ''	
			if(textTrim)
			{

				const newMessage = {
					text: textTrim,
					dateTime: serverTimestamp(),
					uid: User.uid,
					name: User.displayName,
					photo: User.photoURL,
					
				}
				await addDoc(collection(db, 'Messages'), newMessage)
			}
		} catch(error){
			console.log(error)
		}		
	}

	useEffect(() => {
		const unsub = onSnapshot(queryMessages, (snapshot)=>{
			let msgList = snapshot.docs.map((doc)=> ({ ...doc.data()}))		

			msgList = msgList.map((msg) => {
				if(msg.dateTime){
					var dh = msg.dateTime
					dh = dh.toDate()
					dh = new Date(dh)
					dh = dh.toLocaleTimeString()
					return {...msg, dateTime: dh}	
				}

			})
			try{
				if( msgList[0] ) setMessageList(msgList.reverse())	
			} catch(error){
				console.log('unsub :', error)
			}

		})
		return unsub

	}, [])

	
	return(
		<Container>
			<MessageArea>
				{
					
					messageList.map((msg, key)=>{
						const messageOwner = msg.uid === User.uid? true : false						
						return(

							<MessageCard 
								key={key} 
								name={msg.name} 
								text={msg.text} 
								owner={messageOwner} 
								photo={msg.photo} 
								dateTime={msg.dateTime} 
							/>
						)

					})
				}


			</MessageArea>
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
							handleSendMessage()
						}						
					}}
				/>
				<SendButton
					onClick={handleSendMessage}
				/>
			</InputArea >
		</Container>
	)

}

