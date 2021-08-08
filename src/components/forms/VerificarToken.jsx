import React, {useState, useEffect, useContext} from 'react';
import {Link} from 'react-router-dom';
import {AuthContext} from '../../contexts/AuthContext';
import useForm from '../../hooks/useForm';
import Spinner from '../extras/Spinner';
import Alert from '../extras/Alert';

import 'animate.css';

const VerificarToken = () => {
	const {fetching, resultado, setResetResultado, setActivarCuenta} = useContext(AuthContext);

	const [msg, setMsg] = useState({
		categoria: '',
		msg: '',
	});
	const [alerta, setAlerta] = useState(false);

	const [formValues, setFormValues, handleChange] = useForm({
		token: '',
	});
	const {token} = formValues;

	useEffect(() => {
		if (Object.keys(resultado).length === 0) return;

		setAlerta(true);
		setMsg({
			categoria: resultado.categoria,
			msg: resultado.msg,
		});
		setTimeout(() => {
			setAlerta(false);
			setResetResultado(true);
		}, 3000);
		// eslint-disable-next-line
	}, [resultado]);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (token.trim() === '') {
			setAlerta(true);
			setMsg({
				categoria: 'error',
				msg: 'Debes ingresar un token!',
			});
			const timer = setTimeout(() => {
				setAlerta(false);
				return clearTimeout(timer);
			}, 3000);
			return;
		}

		setActivarCuenta(token);
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
					<h2 className='form__title'>TOKEN DE VERIFICACIÓN</h2>
					<p className='form__tip'>revisa tu correo para obtenerlo</p>
				</div>
				<form onSubmit={handleSubmit}>
					<div className='form__alert'>
						{alerta ? <Alert categoria={msg.categoria} msg={msg.msg} /> : null}
						{fetching ? <Spinner /> : null}
					</div>
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

export default VerificarToken;
