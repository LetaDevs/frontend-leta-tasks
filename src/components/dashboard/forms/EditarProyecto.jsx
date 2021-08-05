import React, {useState, useContext} from 'react';
import {ProyectosContext} from '../../../contexts/ProyectosContext';

const EditarProyecto = ({setEditar, proyectoActual}) => {
	const {setEditProyecto} = useContext(ProyectosContext);

	const [error, setError] = useState(false);
	const [formValues, setFormValues] = useState({
		titulo: proyectoActual.titulo,
	});

	const {titulo} = formValues;

	const handleChange = (e) => {
		setFormValues({
			...formValues,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (titulo.trim() === '') {
			setError(true);
			const timer = setTimeout(() => {
				setError(false);
				return clearTimeout(timer);
			}, 2000);
			return;
		}

		setEditProyecto(titulo);
		setEditar(false);
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
					className={error && 'error'}
				/>
				<button>guardar</button>
			</form>
		</div>
	);
};

export default EditarProyecto;
