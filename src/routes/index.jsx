import { Routes, Route, Navigate } from 'react-router-dom'
import { Chat, Login } from '../pages'
import { useAuth } from '../shared/contexts/AuthContext'


export const AppRoutes = () => {
	const { usuario } = useAuth()
	const RenderChat = () =>{
		return usuario? <Chat/> : <Navigate to="/MeguChat/login" />
	}
	return (
		<Routes>			
			<Route path='/MeguChat/login' element={<Login/>}/>
			<Route path='/MeguChat/chat' element={<RenderChat/>}/>
			<Route path='*' element={<Navigate to="/MeguChat/login" />}/>
		</Routes>
	)
}