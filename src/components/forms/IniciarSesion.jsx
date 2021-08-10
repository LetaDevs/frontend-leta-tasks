import React, {useState, useEffect, useContext} from 'react';
import {Link, useHistory} from 'react-router-dom';
import useForm from '../../hooks/useForm';
import {AuthContext} from '../../contexts/AuthContext';
import Alert from '../extras/Alert';
import Spinner from '../extras/Spinner';
import 'animate.css';

const IniciarSesion = () => {
	const {autenticado, setLogin, fetching, resultado, setResetResultado} = useContext(AuthContext);

	const [msg, setMsg] = useState({
		categoria: '',
		msg: '',
	});
	const [alerta, setAlerta] = useState(false);
	// eslint-disable-next-line
	const [formValues, setFormValues, handleChange] = useForm({
		email: '',
		password: '',
	});
	const {email, password} = formValues;

	const history = useHistory();

	useEffect(() => {
		if (autenticado) history.push('/dashboard');
		//eslint-disable-next-line
	}, [autenticado]);

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

		const checkValues = Object.values(formValues).every((value) => value.trim() !== '');

		if (!checkValues) {
			setAlerta(true);
			setMsg({
				categoria: 'error',
				msg: 'Todos los campos son obligatorios!',
			});
			const timer = setTimeout(() => {
				setAlerta(false);
				return clearTimeout(timer);
			}, 3000);
			return;
		}

		setLogin(formValues);
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
					<h2 className='form__title'>INICIAR SESIÓN</h2>
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
							onChange={handleChange}
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
