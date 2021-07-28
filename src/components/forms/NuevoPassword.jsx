import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import useForm from '../../hooks/useForm';

const NuevoPassword = () => {
	const [formValues, setFormValues] = useForm({
		nombre: '',
		email: '',
		password: '',
		rePassword: '',
	});
	const {nombre, email, password, rePassword} = formValues;

	return (
		<div className='form-bg'>
			<div className='form-contenedor'>
				<div>
					<Link to='/'>
						<h4 className='logo'>
							LETA<span>Tasks</span>
						</h4>
					</Link>
					<h2 className='form__titulo'>NUEVO PASSWORD</h2>
				</div>
				<form>
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
						ENVIAR
					</button>
				</form>
				<div className='form__extras'></div>
			</div>
		</div>
	);
};

export default NuevoPassword;
