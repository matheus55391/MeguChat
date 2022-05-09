import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './GlobalStyle'
import { AppRoutes } from './routes'
import { AuthProvider } from './shared/contexts/AuthContext'

function App() {

	return (
		<BrowserRouter>
			<AuthProvider>
				<AppRoutes/>
			</AuthProvider>

			<GlobalStyle/>
		</BrowserRouter>
	)
}

export default App
