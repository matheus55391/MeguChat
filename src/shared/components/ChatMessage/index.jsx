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
import { MessageCard } from '../MessageCard'

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

				await addDoc(collection(db, 'Mensagens'), novaMensagem)

			}
		} catch(error){
			console.log('error!!!')
			console.log(error)
		}		
	}

	useEffect(() => {
		//collection(db, 'Mensagens'), orderBy('dataHora'), limit(20)
		onSnapshot(queryMensagens, (querySnapshot)=>{
			let listaDeMensagens = []
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
					
					console.log(mensagensList )
				}
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
								// dataHora={dataHota} 
							/>
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

