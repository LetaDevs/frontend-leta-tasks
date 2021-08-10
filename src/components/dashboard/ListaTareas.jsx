import React, {useContext} from 'react';
import tareasContext from '../../contexts/tareas/tareasContext';
import Tarea from './Tarea';

const ListaTareas = () => {
	const {tareas} = useContext(tareasContext);

	if (tareas === undefined) return null;

	return (
		<div className='tareas'>
			{tareas.map((tarea) => (
				<Tarea key={tarea._id} tarea={tarea} />
			))}
		</div>
	);
};

export default ListaTareas;
