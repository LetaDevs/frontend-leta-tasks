import React, {useState, useContext} from 'react';
import useForm from '../../../hooks/useForm';
import proyectosContext from '../../../contexts/proyectos/proyectosContext';
import {AuthContext} from '../../../contexts/AuthContext';

const NuevoProyecto = () => {
	const {agregarProyecto, obtenerProyectos} = useContext(proyectosContext);
	const {jwt, currentUser} = useContext(AuthContext);

	const [error, setError] = useState(false);
	// eslint-disable-next-line
	const [formValues, setFormValues, handleChange, resetForm] = useForm({
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

		agregarProyecto(formValues, jwt);
		obtenerProyectos(currentUser.id, jwt);
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
						value={!error ? titulo : 'ingresa un titulo válido !'}
						onChange={(e) => handleChange(e)}
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
