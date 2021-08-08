import React, {useState, useEffect, useContext} from 'react';
import 'animate.css';
import tareasContext from '../../contexts/tareas/tareasContext';
import {AuthContext} from '../../contexts/AuthContext';
import proyectosContext from '../../contexts/proyectos/proyectosContext';
import ConfirmDelete from './ConfirmDelete';

const Tarea = ({tarea}) => {
	const {estadoTarea, obtenerTareas, editandoTarea, tareaEditar, eliminarTarea} = useContext(tareasContext);
	const {proyecto} = useContext(proyectosContext);
	const {jwt} = useContext(AuthContext);

	const [eliminar, setEliminar] = useState(false);
	const [confirmar, setConfirmar] = useState(false);

	const actuallizar = async () => {
		await estadoTarea(tarea._id, jwt);
		await obtenerTareas(proyecto._id, jwt);
	};

	const editar = () => {
		editandoTarea();
		tareaEditar(tarea);
	};

	useEffect(() => {
		if (!confirmar) return;

		const acciones = async () => {
			await eliminarTarea(tarea._id, jwt);
			await obtenerTareas(proyecto._id, jwt);
		};
		acciones();
		//eslint-disable-next-line
	}, [confirmar]);

	return (
		<div className='tarea animate__animated animate__fadeInUp'>
			<h3 className='tarea__titulo'>{tarea.titulo}</h3>
			<div className='tarea__buttons'>
				<button className='proyecto__btn' onClick={actuallizar}>
					<div className={tarea.completa ? 'proyecto__btn-checked' : 'proyecto__btn-check'}></div>
				</button>
				<button className='proyecto__btn' onClick={editar}>
					<div className='proyecto__btn-edit'></div>
				</button>
				<button className='proyecto__btn' onClick={() => setEliminar(true)}>
					<div className='proyecto__btn-delete'></div>
				</button>
			</div>
			{eliminar && (
				<ConfirmDelete
					titulo='seguro quieres borrar esta tarea?'
					setEliminar={setEliminar}
					setConfirmar={setConfirmar}
					tareas={true}
				/>
			)}
		</div>
	);
};

export default Tarea;
