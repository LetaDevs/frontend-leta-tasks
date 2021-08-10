import React, {useEffect, useState, useContext} from 'react';
import {AuthContext} from '../../contexts/AuthContext';
import proyectosContext from '../../contexts/proyectos/proyectosContext';
import ConfirmDelete from './ConfirmDelete';
import EditarProyecto from './forms/EditarProyecto';
import {useHistory} from 'react-router-dom';
import FormTarea from './forms/FormTarea';

const ContentHeader = () => {
	const {proyecto, editar, editarProyecto, eliminarProyecto, obtenerProyectos} = useContext(proyectosContext);
	const {jwt, currentUser} = useContext(AuthContext);

	const [eliminar, setEliminar] = useState(false);
	const [confirmar, setConfirmar] = useState(false);

	const history = useHistory();

	useEffect(() => {}, [proyecto]);

	useEffect(() => {
		if (!confirmar) return;

		const acciones = async () => {
			await eliminarProyecto(proyecto._id, jwt);
			await obtenerProyectos(currentUser.id, jwt);
			history.push('/dashboard');
		};
		acciones();
		//eslint-disable-next-line
	}, [confirmar]);

	return (
		<>
			<div className='content-header'>
				{proyecto ? (
					<>
						{eliminar && (
							<ConfirmDelete
								titulo='seguro quieres borrar este proyecto?'
								setEliminar={setEliminar}
								setConfirmar={setConfirmar}
							/>
						)}
						{!editar ? (
							<div className='content-header__proyecto'>
								<h2>{proyecto?.titulo}</h2>
								<div className='content-header__proyecto-buttons'>
									<button className='proyecto__btn' onClick={() => editarProyecto(true)}>
										<div className='proyecto__btn-edit'></div>
									</button>
									<button className='proyecto__btn' onClick={() => setEliminar(true)}>
										<div className='proyecto__btn-delete'></div>
									</button>
								</div>
							</div>
						) : (
							<EditarProyecto />
						)}
						<FormTarea />
					</>
				) : (
					<h3>Elige un proyecto para trabajar</h3>
				)}
			</div>
		</>
	);
};

export default ContentHeader;
