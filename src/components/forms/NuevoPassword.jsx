import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import useForm from '../../hooks/useForm';

import 'animate.css';

const NuevoPassword = () => {
	const [formValues, setFormValues] = useForm({
		nombre: '',
		email: '',
		password: '',
		rePassword: '',
	});
	const {nombre, email, password, rePassword} = formValues;

	return (
		<div className='form__bg'>
			<div className='form__container animate__animated animate__fadeIn'>
				<div>
					<Link to='/'>
						<h4 className='form__logo'>
							LETA<span className='form__logo-two'>Tasks</span>
						</h4>
					</Link>
					<h2 className='form__title'>NUEVO PASSWORD</h2>
				</div>
				<form>
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
					<div className='form__field'>
						<label htmlFor='rePassword' className='form__label'>
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
					<button type='submit' className='form__btn'>
						ENVIAR
					</button>
				</form>
				<div className='form__extras'></div>
			</div>
		</div>
	);
};

export default NuevoPassword;
