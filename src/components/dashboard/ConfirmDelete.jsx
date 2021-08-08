import React, {useEffect} from 'react';
import 'animate.css';

const ConfirmDelete = ({titulo, setEliminar, setConfirmar, tareas}) => {
	useEffect(() => {
		setConfirmar(false);
		// eslint-disable-next-line
	}, []);

	const cancelar = () => {
		setEliminar(false);
	};

	const confirmar = () => {
		setConfirmar(true);
		setEliminar(false);
	};

	return (
		<div className={`${tareas ? 'confirm-delete-tareas' : 'confirm-delete'} animate__animated animate__headShake`}>
			<h2>{titulo}</h2>
			<p>una vez eliminado no hay vuelta atras</p>
			<div className='botones'>
				<button className='btn-cancelar' onClick={cancelar}>
					Cancelar
				</button>
				<button className='btn-eliminar' onClick={confirmar}>
					Eliminar
				</button>
			</div>
		</div>
	);
};

ConfirmDelete.defaultProps = {
	titulo: 'hey dev, u forget something!',
};

export default ConfirmDelete;
