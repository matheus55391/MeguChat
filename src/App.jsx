import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './GlobalStyle'
import { AppRoutes } from './routes'


function App() {

	return (
		<BrowserRouter>
			<AppRoutes/>
			<GlobalStyle/>
		</BrowserRouter>
	)
}

export default App
