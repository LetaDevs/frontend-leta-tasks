import React, {useState, useContext, useEffect} from 'react';
import {useHistory} from 'react-router-dom';

import {Link} from 'react-router-dom';
import {AuthContext} from '../../contexts/AuthContext';
import useForm from '../../hooks/useForm';
import Alert from '../extras/Alert';
import Spinner from '../extras/Spinner';
import 'animate.css';

const CrearCuenta = () => {
	const {fetching, resultado, setNuevaCuenta, setResetResultado} = useContext(AuthContext);

	const [msg, setMsg] = useState({
		categoria: '',
		msg: '',
	});
	const [alerta, setAlerta] = useState(false);

	const [formValues, setFormValues, handleChange, resetForm] = useForm({
		name: '',
		email: '',
		password: '',
		rePassword: '',
	});
	const {name: nombre, email, password, rePassword} = formValues;

	const history = useHistory();

	useEffect(() => {
		if (Object.keys(resultado).length === 0) return;

		setAlerta(true);
		setMsg({
			categoria: resultado.categoria,
			msg: resultado.msg,
		});
		setTimeout(() => {
			setAlerta(false);
			if (resultado.code === 201) {
				resetForm();
				setResetResultado(true);
				return history.push('/token-verify');
			}
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

		if (password !== rePassword) {
			setAlerta(true);
			setMsg({
				categoria: 'error',
				msg: 'ambos passwords deben ser iguales!',
			});
			const timer = setTimeout(() => {
				setAlerta(false);
				return clearTimeout(timer);
			}, 3000);
			return;
		}

		setNuevaCuenta({nombre, email, password});
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
					<h2 className='form__title'>CREAR CUENTA</h2>
				</div>
				<form onSubmit={handleSubmit}>
					<div className='form__alert'>
						{alerta ? <Alert categoria={msg.categoria} msg={msg.msg} /> : null}
						{fetching ? <Spinner /> : null}
					</div>
					<div className='form__field'>
						<label htmlFor='name' className='form__label'>
							Nombre:
						</label>
						<input
							type='text'
							name='name'
							value={nombre}
							id='name'
							className='form__input'
							autoComplete='off'
							onChange={handleChange}
						/>
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
							onChange={handleChange}
						/>
					</div>
					<button type='submit' className='form__btn'>
						CREAR CUENTA
					</button>
				</form>
				<div className='form__extras'>
					<p>
						Ya tienes cuenta?{' '}
						<Link to='/log-in' className='form__extras-link'>
							inicia sesión
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default CrearCuenta;
