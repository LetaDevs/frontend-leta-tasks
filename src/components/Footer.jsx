import React from 'react';

const Footer = () => {
	return (
		<section className='footer'>
			<div className='footer__container container'>
				<div className='footer__links'>
					<div className='footer__links-one'>
						<h4>LETA Task</h4>
						<ul>
							<li>
								<a href='#!'>Inicio</a>
							</li>
							<li>
								<a href='#!'>Producto</a>
							</li>
							<li>
								<a href='#!'>Precio</a>
							</li>
							<li>
								<a href='#!'>Premium</a>
							</li>
							<li>
								<a href='#!'>Exito del cliente</a>
							</li>
						</ul>
					</div>
					<div className='footer__links-two'>
						<h4>Acerca de nosotros</h4>
						<ul>
							<li>
								<a href='#!'>Empresa</a>
							</li>
							<li>
								<a href='#!'>Equipo directivo</a>
							</li>
							<li>
								<a href='#!'>Clientes</a>
							</li>
							<li>
								<a href='#!'>Diversidad</a>
							</li>
							<li>
								<a href='#!'>Carrearas</a>
							</li>
						</ul>
					</div>
					<div className='footer__links-three'>
						<h4>Recursos</h4>
						<ul>
							<li>
								<a href='#!'>Guía rápida</a>
							</li>
							<li>
								<a href='#!'>Foro</a>
							</li>
							<li>
								<a href='#!'>Asistencia</a>
							</li>
							<li>
								<a href='#!'>Socios</a>
							</li>
							<li>
								<a href='#!'>Eventos</a>
							</li>
						</ul>
					</div>
					<div className='footer__links-four'>
						<h4>Aprende</h4>
						<ul>
							<li>
								<a href='#!'>Kanban vs Scrum</a>
							</li>
							<li>
								<a href='#!'>¿Qué son los OKR?</a>
							</li>
							<li>
								<a href='#!'>Escribe un brief creativo</a>
							</li>
							<li>
								<a href='#!'>Mira todas las guías</a>
							</li>
						</ul>
					</div>
				</div>
				<div className='footer__social'>
					<img src='./img/slack.svg' alt='slack icon' width='30px' height='30px' />
					<img src='./img/github.svg' alt='github icon' width='30px' height='30px' />
					<img src='./img/linkedin.svg' alt='linkedin icon' width='30px' height='30px' />
					<img src='./img/twitter.svg' alt='twitter icon' width='30px' height='30px' />
					<img src='./img/youtube.svg' alt='youtube icon' width='30px' height='30px' />
				</div>
			</div>
		</section>
	);
};

export default Footer;
