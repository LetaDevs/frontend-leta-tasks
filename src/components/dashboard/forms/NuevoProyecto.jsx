import React, {useState, useContext} from 'react';
import useForm from '../../../hooks/useForm';
import {ProyectosContext} from '../../../contexts/ProyectosContext';

const NuevoProyecto = () => {
	const {setNuevoProyecto} = useContext(ProyectosContext);

	const [error, setError] = useState(false);
	const [formValues, handleChange, resetForm] = useForm({
		titulo: '',
	});
	const {titulo} = formValues;

	const handleSubmit = (e) => {
		e.preventDefault();

		if (titulo === '') {
			setError(true);
			const timer = setTimeout(() => {
				setError(false);
				return () => clearTimeout(timer);
			}, 2000);
			return;
		}

		setNuevoProyecto(formValues);
		resetForm();
	};

	return (
		<div className='form-proyecto'>
			<h3 className='form-proyecto__titulo'>nuevo proyecto</h3>
			<form onSubmit={handleSubmit}>
				<div className='form-proyecto__field'>
					<input
						type='text'
						className={`form-proyecto__input ${error && 'form-proyecto__error'}`}
						name='titulo'
						value={error ? 'ingresa un titulo válido !' : titulo}
						onChange={handleChange}
					/>
				</div>
				<div className='form-proyecto__field'>
					<input type='submit' className='form-proyecto__btn' value='Agregar' />
				</div>
			</form>
		</div>
	);
};

export default NuevoProyecto;
