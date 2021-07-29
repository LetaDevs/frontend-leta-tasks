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
			<div className={`navbar ${scroll && 'navbar--scrolled'}`}>
				<div className='navbar__contenido container'>
					<a href='#home'>
						<h1 className='logo'>
							LETA<span className='logo__two'>Tasks</span>
						</h1>
					</a>
					<Hidden smDown>
						<nav className='navbar__menu'>
							<a className='navbar__menu-link' href='#home'>
								Home
							</a>
							<a className='navbar__menu-link' href='#about'>
								Nosotros
							</a>
							<a className='navbar__menu-link' href='#prices'>
								Precios
							</a>
						</nav>
						<div className='navbar__auth'>
							<Link to='/log-in' className='log-in'>
								Iniciar sesión
							</Link>
							<Link to='/sign-up' className='sign-up'>
								Registrarse
							</Link>
						</div>
					</Hidden>
					<Hidden mdUp>
						<button className='menu-btn' onClick={handleMenu}>
							{!scroll ? (
								<div className='menu-btn__icon menu-btn__icon--white'></div>
							) : (
								<div className='menu-btn__icon menu-btn__icon--black'></div>
							)}
						</button>
					</Hidden>
				</div>
			</div>
			<Hidden mdUp>
				<div className={`navbar__menu-two ${menu && 'navbar__menu-two--active'}`}>
					<div className='navbar__menu-two-container'>
						<div className='navbar__menu-two-menu'>
							<a className='navbar__menu-two-link' href='#home'>
								Home
							</a>
							<a className='navbar__menu-two-link' href='#about'>
								Nosotros
							</a>
							<a className='navbar__menu-two-link' href='#prices'>
								Precios
							</a>
							<Link to='/log-in' className='btn navbar__menu-two-btn'>
								Iniciar sesión
							</Link>
							<Link to='/sign-up' className='btn navbar__menu-two-btn'>
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
