import React, {useState, useContext} from 'react';
import {AuthContext} from '../../../contexts/AuthContext';
import proyectosContext from '../../../contexts/proyectos/proyectosContext';

const EditarProyecto = () => {
	const {proyecto, editarProyecto, obtenerProyectos, actualizarProyecto, proyectoActual} = useContext(proyectosContext);
	const {jwt, currentUser} = useContext(AuthContext);

	const [error, setError] = useState(false);

	const [formValues, setFormValues] = useState({
		titulo: proyecto.titulo,
	});

	const {titulo} = formValues;

	const handleChange = (e) => {
		setFormValues({
			...formValues,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (titulo.trim() === '') {
			setError(true);
			const timer = setTimeout(() => {
				setError(false);
				return clearTimeout(timer);
			}, 2000);
			return;
		}

		await actualizarProyecto(formValues, jwt, proyecto._id);
		await obtenerProyectos(currentUser.id, jwt);
		await proyectoActual(proyecto.url, jwt);
		editarProyecto(false);
	};

	return (
		<div className='form-editar-proyecto'>
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					value={error ? 'ingresa un título válido' : titulo}
					name='titulo'
					onChange={handleChange}
					autoComplete='off'
					className={error ? 'error' : ''}
				/>
				<button>guardar</button>
			</form>
		</div>
	);
};

export default EditarProyecto;
