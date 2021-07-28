import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import useForm from '../../hooks/useForm';

const RePassword = () => {
	const [formValues, setFormValues] = useForm({
		password: '',
	});
	const {email} = formValues;

	return (
		<div className='form-bg'>
			<div className='form-contenedor'>
				<div>
					<Link to='/'>
						<h4 className='logo'>
							LETA<span>Tasks</span>
						</h4>
					</Link>
					<h2 className='form__titulo'>RESTABLECER PASSWORD</h2>
				</div>
				<form>
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

					<button type='submit' className='form__boton btn'>
						ENVIAR
					</button>
				</form>
				<div className='form__extras'>
					<p>
						Olvidaste tu password?{' '}
						<Link to='/re-password' className='form__extras-enlace'>
							restablécelo
						</Link>
					</p>
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

export default RePassword;
