import React, {useState, useEffect, useContext} from 'react';
import {Link} from 'react-router-dom';
import useForm from '../../hooks/useForm';
import Alert from '../extras/Alert';
import Spinner from '../extras/Spinner';
import {AuthContext} from '../../contexts/AuthContext';

import 'animate.css';

const RePassword = () => {
	const {fetching, resultado, setResetResultado, setResetPassword} = useContext(AuthContext);

	const [msg, setMsg] = useState({
		categoria: '',
		msg: '',
	});

	const [alerta, setAlerta] = useState(false);

	const [formValues, setFormValues, handleChange, resetForm] = useForm({
		email: '',
	});
	const {email} = formValues;

	useEffect(() => {
		if (Object.keys(resultado).length === 0) return;

		setAlerta(true);
		setMsg({
			categoria: resultado.categoria,
			msg: resultado.msg,
		});
		setTimeout(() => {
			setAlerta(false);
			if (resultado.code === 200) {
				resetForm();
				setResetResultado(true);
			}
		}, 3000);
		//eslint-disable-next-line
	}, [resultado]);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (email.trim() === '') {
			setAlerta(true);
			setMsg({
				categoria: 'error',
				msg: 'ingresa tu email!',
			});
			const timer = setTimeout(() => {
				setAlerta(false);
				return clearTimeout(timer);
			}, 3000);
			return;
		}

		setResetPassword(email);
	};

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
				<form onSubmit={handleSubmit}>
					<div className='form__alert'>
						{alerta ? <Alert categoria={msg.categoria} msg={msg.msg} /> : null}
						{fetching ? <Spinner /> : null}
					</div>
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
							onChange={handleChange}
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
