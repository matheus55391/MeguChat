import { useEffect, useRef, useState } from 'react'
import { Container, MensagemArea, InputArea, Input, EmojiButton, SandButton } from './styles'
import { useAuth } from '../../contexts/AuthContext'
import { db, queryMensagens } from '../../services/firebase-config'
import { 	
	collection,
	addDoc,
	serverTimestamp,
	onSnapshot
} from 'firebase/firestore'

export const ChatMessage = () => {
	const messageInputRef = useRef()
	const [mensagensList, setMensagensList] = useState([])
	const { usuario } = useAuth()

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
					foto: usuario.photoURL
				}
				console.log(novaMensagem)
				await addDoc(collection(db, 'Mensagens'), novaMensagem)
				
			}
		} catch(error){
			console.log(error)
		}		
	}

	useEffect(() => {
		//collection(db, 'Mensagens'), orderBy('dataHora'), limit(20)
		onSnapshot(queryMensagens, (querySnapshot)=>{
			const listaDeMensagens = []
			querySnapshot.forEach((doc) =>{
				listaDeMensagens.push(doc.data())
			})
			setMensagensList(listaDeMensagens)

		})


	}, [])

	return(
		<Container>
			<MensagemArea>
				{
					mensagensList.map((msg, key)=>{
						return(
							<div key={key}>
								<div>{msg.nome}</div>
								<div>{msg.texto}</div>
								<br/>
							</div>
						)

					})
				}
			</MensagemArea>

			<InputArea>
				<EmojiButton />
				<Input 
					type="text" 
					placeholder="Digite a sua mensagem..."
					ref={messageInputRef}	
				/>
				<SandButton
					onClick={handleEnviarMensagem}
				/>
			</InputArea >
		</Container>
	)

}

