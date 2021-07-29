import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import useForm from '../../hooks/useForm';

import 'animate.css';

const IniciarSesion = () => {
	const [formValues, setFormValues] = useForm({
		email: '',
		password: '',
	});
	const {email, password} = formValues;

	return (
		<div className='form__bg'>
			<div className='form__container animate__animated animate__fadeIn'>
				<div>
					<Link to='/'>
						<h4 className='form__logo'>
							LETA<span className='form__logo-two'>Tasks</span>
						</h4>
					</Link>
					<h2 className='form__title'>INICIAR SESIÓN</h2>
				</div>
				<form>
					<div className='form__field'>
						<label htmlFor='email' className='form__label'>
							Email:
						</label>
						<input
							type='email'
							name='email'
							value={email}
							id='email'
							className='form__input'
							autoComplete='off'
							onChange={setFormValues}
						/>
					</div>
					<div className='form__field'>
						<label htmlFor='password' className='form__label'>
							Password:
						</label>
						<input
							type='password'
							name='password'
							value={password}
							id='password'
							className='form__input'
							autoComplete='off'
							onChange={setFormValues}
						/>
					</div>

					<button type='submit' className='form__btn'>
						INICIAR SESIÓN
					</button>
				</form>
				<div className='form__extras'>
					<p>
						Olvidaste tu password?{' '}
						<Link to='/re-password' className='form__extras-link'>
							restablécelo
						</Link>
					</p>
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

export default IniciarSesion;
