import { HashRouter  } from 'react-router-dom'
import { GlobalStyle } from './GlobalStyle'
import { AppRoutes } from './routes'
import { AuthProvider } from './shared/contexts/AuthContext'

function App() {

	return (
		<HashRouter basename='/MeguChat'>
			<AuthProvider>
				<AppRoutes/>
			</AuthProvider>

			<GlobalStyle/>
		</HashRouter>
	)
}

export default App
