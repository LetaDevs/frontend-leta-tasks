import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import useForm from '../../hooks/useForm';

import 'animate.css';

const VerificarToken = () => {
	const [formValues, setFormValues] = useForm({
		token: '',
	});
	const {token} = formValues;

	return (
		<div className='form__bg'>
			<div className='form__container animate__animated animate__fadeIn'>
				<div>
					<Link to='/'>
						<h4 className='form__logo'>
							LETA<span className='form__logo-two'>Tasks</span>
						</h4>
					</Link>
					<h2 className='form__title'>TOKEN DE VERIFICACIÓN</h2>
					<p className='form__tip'>revisa tu correo para obtenerlo</p>
				</div>
				<form>
					<div className='form__field'>
						<label htmlFor='token' className='form__label'>
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

					<button type='submit' className='form__btn'>
						ENVIAR
					</button>
				</form>
				<div className='form__extras'>
					<p>
						Aún no tienes cuenta?{' '}
						<Link to='/sign-up' className='form__extras-link'>
							crea una gratis
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default VerificarToken;
