import { Routes, Route, Navigate } from 'react-router-dom'
import { Home, Login } from '../pages'
export const AppRoutes = () => {

	return (
		<Routes>
			<Route path='/home' element={<Home/>}/>
			<Route path='/login' element={<Login/>}/>
			<Route path='*' element={<Navigate to="/login" />}/>
		</Routes>
	)
}