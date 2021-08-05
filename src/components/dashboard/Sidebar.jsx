import React from 'react';
import NuevoProyecto from './forms/NuevoProyecto';
import ListaProyectos from './ListaProyectos';

const Sidebar = () => {
	return (
		<div className='sidebar'>
			<NuevoProyecto />
			<ListaProyectos />
		</div>
	);
};

export default Sidebar;
