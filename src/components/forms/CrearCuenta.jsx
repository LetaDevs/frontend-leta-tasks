import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import useForm from '../../hooks/useForm';

import 'animate.css';

const CrearCuenta = () => {
	const [formValues, setFormValues] = useForm({
		nombre: '',
		email: '',
		password: '',
		rePassword: '',
	});
	const {nombre, email, password, rePassword} = formValues;

	return (
		<div className='form-bg'>
			<div className='form-contenedor animate__animated animate__fadeIn'>
				<div>
					<Link to='/'>
						<h4 className='logo'>
							LETA<span>Tasks</span>
						</h4>
					</Link>
					<h2 className='form__titulo'>CREAR CUENTA</h2>
				</div>
				<form>
					<div className='form__campo'>
						<label htmlFor='nombre' className={`form__label`}>
							Nombre:
						</label>
						<input
							type='text'
							name='nombre'
							value={nombre}
							id='nombre'
							className='form__input'
							autoComplete='off'
							onChange={setFormValues}
						/>
					</div>
					<div className='form__campo'>
						<label htmlFor='email' className={`form__label`}>
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
					<div className='form__campo'>
						<label htmlFor='password' className={`form__label`}>
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
					<div className='form__campo'>
						<label htmlFor='rePassword' className={`form__label`}>
							Repetir password:
						</label>
						<input
							type='password'
							name='rePassword'
							value={rePassword}
							id='rePassword'
							className='form__input'
							autoComplete='off'
							onChange={setFormValues}
						/>
					</div>
					<button type='submit' className='form__boton btn'>
						CREAR CUENTA
					</button>
				</form>
				<div className='form__extras'>
					<p>
						Ya tienes cuenta?{' '}
						<Link to='/log-in' className='form__extras-enlace'>
							inicia sesión
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default CrearCuenta;
