import React, {useEffect, useContext} from 'react';
import tareasContext from '../../contexts/tareas/tareasContext';
import Tarea from './Tarea';

const ListaTareas = () => {
	const {tareas} = useContext(tareasContext);

	return (
		<div className='tareas'>
			{tareas.map((tarea) => (
				<Tarea key={tarea._id} tarea={tarea} />
			))}
		</div>
	);
};

export default ListaTareas;
