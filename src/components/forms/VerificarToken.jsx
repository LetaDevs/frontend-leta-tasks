import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import useForm from '../../hooks/useForm';

const VerificarToken = () => {
	const [formValues, setFormValues] = useForm({
		token: '',
	});
	const {token} = formValues;

	return (
		<div className='form-bg'>
			<div className='form-contenedor'>
				<div>
					<Link to='/'>
						<h4 className='logo'>
							LETA<span>Tasks</span>
						</h4>
					</Link>
					<h2 className='form__titulo'>TOKEN DE VERIFICACIÓN</h2>
					<p className='form__ayuda'>revisa tu correo para obtenerlo</p>
				</div>
				<form>
					<div className='form__campo'>
						<label htmlFor='token' className={`form__label`}>
							Token:
						</label>
						<input
							type='token'
							name='token'
							value={token}
							id='token'
							className='form__input'
							autoComplete='off'
							onChange={setFormValues}
						/>
					</div>

					<button type='submit' className='form__boton btn'>
						ENVIAR
					</button>
				</form>
				<div className='form__extras'>
					<p>
						Aún no tienes cuenta?{' '}
						<Link to='/sign-up' className='form__extras-enlace'>
							crea una gratis
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default VerificarToken;
