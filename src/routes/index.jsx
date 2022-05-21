import { Routes, Route, Navigate, Outlet } from 'react-router-dom'
import { Chat, Login } from '../pages'
import { useAuth } from '../shared/contexts/AuthContext'

export const AppRoutes = () => {
	const { usuario } = useAuth()

	const PrivateRoute = () =>{
		return usuario ? <Outlet /> : <Navigate to="/MeguChat/login" />
	}

	return (
		<Routes>			
			<Route path='/MeguChat/login' element={<Login/>}/>
			<Route element={<PrivateRoute/>}>
				<Route path='/MeguChat/chat' element={<Chat/>}/>
			</Route>
			<Route path='*' element={<Navigate to="/MeguChat/login" />}/>
		</Routes>
	)
}