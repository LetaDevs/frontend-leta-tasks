import React, {useState, useContext} from 'react';
import {useEffect} from 'react';
import {AuthContext} from '../../../contexts/AuthContext';
import proyectosContext from '../../../contexts/proyectos/proyectosContext';
import tareasContext from '../../../contexts/tareas/tareasContext';
import useForm from '../../../hooks/useForm';

const FormTarea = () => {
	const {proyecto} = useContext(proyectosContext);
	const {tarea, crearTarea, editando, obtenerTareas, actualizarTarea} = useContext(tareasContext);
	const {jwt} = useContext(AuthContext);

	const [formValues, setFormValues, handleChange, resetForm] = useForm({
		titulo: '',
	});

	useEffect(() => {
		setFormValues({
			titulo: tarea.titulo,
		});
		// eslint-disable-next-line
	}, [tarea]);

	const [error, setError] = useState(false);

	const {titulo} = formValues;

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

		if (editando) {
			const actualizar = async () => {
				await actualizarTarea(tarea._id, titulo, jwt);
				await obtenerTareas(proyecto._id, jwt);
				resetForm();
			};
			actualizar();
			return;
		}

		const acciones = async () => {
			await crearTarea(formValues, proyecto._id, jwt);
			await obtenerTareas(proyecto._id, jwt);
		};
		acciones();
		resetForm();
	};

	return (
		<div className='content-header__form-tarea'>
			<form className='form-tareas' onSubmit={handleSubmit}>
				<input
					type='text'
					className={`form-tareas__input ${error ? 'form-tareas__input-error' : ''}`}
					name='titulo'
					value={!error ? titulo || '' : 'ingresa un titulo válido!'}
					placeholder='nueva tarea'
					onChange={handleChange}
				/>

				<button type='submit' className='form-tareas__btn'>
					{editando ? 'Guardar' : 'Agregar'}
				</button>
			</form>
		</div>
	);
};

export default FormTarea;
