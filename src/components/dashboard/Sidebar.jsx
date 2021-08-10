import React, {useContext} from 'react';
import {useHistory} from 'react-router-dom';
import {AuthContext} from '../../contexts/AuthContext';

import NuevoProyecto from './forms/NuevoProyecto';
import ListaProyectos from './ListaProyectos';

const Sidebar = () => {
	const {setJwt, setCurrentUser} = useContext(AuthContext);

	const history = useHistory();

	const handleClick = () => {
		localStorage.removeItem('token');
		setJwt('');
		setCurrentUser({});
		history.push('/');
	};

	return (
		<div className='sidebar'>
			<NuevoProyecto />
			<ListaProyectos />
			<button className='sidebar__cerrar-sesion' onClick={handleClick}>
				Cerrar sesión
			</button>
		</div>
	);
};

export default Sidebar;
