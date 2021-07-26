import Home from './components/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
	return (
		<div className='App'>
			<Router>
				<div>
					<Switch>
						<Route exact path='/' component={Home} />
					</Switch>
				</div>
			</Router>
		</div>
	);
}

export default App;
