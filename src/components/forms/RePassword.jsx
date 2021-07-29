import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import useForm from '../../hooks/useForm';

import 'animate.css';

const RePassword = () => {
	const [formValues, setFormValues] = useForm({
		password: '',
	});
	const {email} = formValues;

	return (
		<div className='form__bg'>
			<div className='form__container animate__animated animate__fadeIn'>
				<div>
					<Link to='/'>
						<h4 className='form__logo'>
							LETA<span className='form__logo-two'>Tasks</span>
						</h4>
					</Link>
					<h2 className='form__title'>RESTABLECER PASSWORD</h2>
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

export default RePassword;
