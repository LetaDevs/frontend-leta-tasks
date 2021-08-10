import Home from './components/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import IniciarSesion from './components/forms/IniciarSesion';
import CrearCuenta from './components/forms/CrearCuenta';
import RePassword from './components/forms/RePassword';
import VerificarToken from './components/forms/VerificarToken';
import NuevoPassword from './components/forms/NuevoPassword';
import AuthProvider from './contexts/AuthContext';
import Dashboard from './components/Dashboard';
import ProyectosState from './contexts/proyectos/ProyectosState';
import TareasState from './contexts/tareas/TareasState';
import RutaProtegida from './components/extras/RutaProtegida';

function App() {
	return (
		<div className='App'>
			<Router>
				<AuthProvider>
					<ProyectosState>
						<TareasState>
							<div>
								<Switch>
									<Route exact path='/' component={Home} />
									<Route path='/sign-up' component={CrearCuenta} />
									<Route path='/log-in' component={IniciarSesion} />
									<Route path='/re-password' component={RePassword} />
									<Route path='/token-verify' component={VerificarToken} />
									<Route path='/reset-password/:token' component={NuevoPassword} />
									<RutaProtegida path='/dashboard/proyectos/:proyectoUrl' component={Dashboard} />
									<RutaProtegida path='/dashboard' component={Dashboard} />
								</Switch>
							</div>
						</TareasState>
					</ProyectosState>
				</AuthProvider>
			</Router>
		</div>
	);
}

export default App;
