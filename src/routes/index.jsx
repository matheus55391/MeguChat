import { Routes, Route, Navigate } from 'react-router-dom'
import { Chat, Login } from '../pages'
import { useAuth } from '../shared/contexts/AuthContext'


export const AppRoutes = () => {
	const { User } = useAuth()
	const RenderChat = () =>{
		return User? <Chat/> : <Navigate to="/MeguChat/login" />
	}
	return (
		<Routes>			
			<Route path='*' element={<Login/>}/>
			<Route path='/MeguChat/login' element={<Login/>}/>
			<Route path='/MeguChat/chat' element={<RenderChat/>}/>
		</Routes>
	)
}