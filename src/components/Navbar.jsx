import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import Hidden from '@material-ui/core/Hidden';

const Navbar = () => {
	const [scroll, setScroll] = useState(false);
	const [menu, setMenu] = useState(false);

	useEffect(() => {
		window.onscroll = () => {
			if (window.pageYOffset > 0) {
				setScroll(true);
			} else {
				setScroll(false);
			}
		};
	}, []);

	const handleMenu = () => {
		setMenu(!menu);
	};

	return (
		<>
			<div className={`navbar ${scroll && 'scrolled'}`}>
				<div className='navbar__contenido'>
					<a href='#home'>
						<h1 className='logo'>
							LETA<span>Tasks</span>
						</h1>
					</a>
					<Hidden smDown>
						<nav className='navbar__menu'>
							<a href='#home'>Home</a>
							<a href='#nosotros'>Nosotros</a>
							<a href='#precios'>Precios</a>
						</nav>
						<div className='navbar__cuentas'>
							<Link to='/log-in' className='log-in'>
								Iniciar sesión
							</Link>
							<Link to='/sign-up' className='sign-up'>
								Registrarse
							</Link>
						</div>
					</Hidden>
					<Hidden mdUp>
						<button className='menu-icon-btn' onClick={handleMenu}>
							{!scroll ? <div className='menu-icon'></div> : <div className='menu-icon-negro'></div>}
						</button>
					</Hidden>
				</div>
			</div>
			<Hidden mdUp>
				<div className={`navbar__menu-dos ${menu && 'activo'}`}>
					<div>
						<div className='navbar__menu-dos--menu'>
							<a href='#home'>Home</a>
							<a href='#nosotros'>Nosotros</a>
							<a href='#precios'>Precios</a>
							<Link to='/log-in' className='btn banner__btn menu-btn'>
								Iniciar sesión
							</Link>
							<Link to='/sign-up' className='btn banner__btn menu-btn'>
								Registrarse
							</Link>
						</div>
					</div>
				</div>
			</Hidden>
		</>
	);
};

export default Navbar;
