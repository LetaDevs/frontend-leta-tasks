import Home from './components/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import IniciarSesion from './components/forms/IniciarSesion';
import CrearCuenta from './components/forms/CrearCuenta';
import RePassword from './components/forms/RePassword';
import VerificarToken from './components/forms/VerificarToken';
import NuevoPassword from './components/forms/NuevoPassword';
import AuthProvider from './contexts/AuthContext';

function App() {
	return (
		<div className='App'>
			<Router>
				<AuthProvider>
					<div>
						<Switch>
							<Route exact path='/' component={Home} />
							<Route path='/sign-up' component={CrearCuenta} />
							<Route path='/log-in' component={IniciarSesion} />
							<Route path='/re-password' component={RePassword} />
							<Route path='/token-verify' component={VerificarToken} />
							<Route path='/reset-password/:token' component={NuevoPassword} />
						</Switch>
					</div>
				</AuthProvider>
			</Router>
		</div>
	);
}

export default App;
