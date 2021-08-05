import React, {useEffect, useState, useContext} from 'react';
import ConfirmDelete from './ConfirmDelete';
import EditarProyecto from './forms/EditarProyecto';
import {ProyectosContext} from '../../contexts/ProyectosContext';

const ContentHeader = ({proyectoActual}) => {
	const {setEliminarProyecto} = useContext(ProyectosContext);

	const [editar, setEditar] = useState(false);
	const [eliminar, setEliminar] = useState(false);
	const [confirmar, setConfirmar] = useState(false);

	useEffect(() => {
		setEditar(false);
	}, [proyectoActual]);

	useEffect(() => {
		if (!confirmar) return;

		setEliminarProyecto(true);
	}, [confirmar]);

	const editarProyecto = () => {
		setEditar(true);
	};

	const eliminarProyecto = async () => {
		setEliminar(true);
	};

	return (
		<div className='content-header'>
			{eliminar && (
				<ConfirmDelete
					titulo='seguro quieres eliminar el proyecto?'
					setEliminar={setEliminar}
					setConfirmar={setConfirmar}
				/>
			)}
			{!editar === true ? (
				<div className='content-header__proyecto'>
					<h2>{proyectoActual.titulo}</h2>
					<div className='content-header__proyecto-buttons'>
						<button className='proyecto__btn' onClick={editarProyecto}>
							<div className='proyecto__btn-edit'></div>
						</button>
						<button className='proyecto__btn' onClick={eliminarProyecto}>
							<div className='proyecto__btn-delete'></div>
						</button>
					</div>
				</div>
			) : (
				<EditarProyecto setEditar={setEditar} proyectoActual={proyectoActual} />
			)}
			<div className='content-header__form-tarea'>
				<form className='form-tareas'>
					<input type='text' className='form-tareas__input' placeholder='nueva tarea' />
					<button type='submit' className='form-tareas__btn'>
						Agregar
					</button>
				</form>
			</div>
		</div>
	);
};

export default ContentHeader;
