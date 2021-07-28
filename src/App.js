import Home from './components/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import IniciarSesion from './components/forms/IniciarSesion';
import CrearCuenta from './components/forms/CrearCuenta';
import RePassword from './components/forms/RePassword';
import VerificarToken from './components/forms/VerificarToken';
import NuevoPassword from './components/forms/NuevoPassword';

function App() {
	return (
		<div className='App'>
			<Router>
				<div>
					<Switch>
						<Route exact path='/' component={Home} />
						<Route path='/sign-up' component={CrearCuenta} />
						<Route path='/log-in' component={IniciarSesion} />
						<Route path='/re-password' component={RePassword} />
						<Route path='/token-verify' component={VerificarToken} />
						<Route path='/new-password' component={NuevoPassword} />
					</Switch>
				</div>
			</Router>
		</div>
	);
}

export default App;
