import React, {useEffect, useContext} from 'react';
import ContentHeader from './ContentHeader';
import {ProyectosContext} from '../../contexts/ProyectosContext';

const Content = ({proyectoUrl}) => {
	const {proyectoActual, setUrlProyectoActual} = useContext(ProyectosContext);

	useEffect(() => {
		setUrlProyectoActual(proyectoUrl);
	}, [proyectoUrl]);

	return (
		<div className='content'>
			<ContentHeader proyectoActual={proyectoActual} />
		</div>
	);
};

export default Content;
