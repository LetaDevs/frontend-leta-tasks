import React, {useContext} from 'react';
import {useEffect} from 'react';
import {ProyectosContext} from '../../contexts/ProyectosContext';

const Upbar = ({proyectoUrl}) => {
	const {proyectoActual, setUrlProyectoActual} = useContext(ProyectosContext);

	useEffect(() => {
		setUrlProyectoActual(proyectoUrl);
	}, [proyectoUrl]);

	return (
		<>
			<h2>{proyectoActual?.titulo?.substr(0, 34)}</h2>
		</>
	);
};

export default Upbar;
