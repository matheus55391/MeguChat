import { HashRouter as Router  } from 'react-router-dom'
import { GlobalStyle } from './GlobalStyle'
import { AppRoutes } from './routes'
import { AuthProvider } from './shared/contexts/AuthContext'

function App() {

	return (
		<Router >
			<AuthProvider>
				<AppRoutes/>
			</AuthProvider>

			<GlobalStyle/>
		</Router>
	)
}

export default App
