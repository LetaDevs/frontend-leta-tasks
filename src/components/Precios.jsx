import React from 'react';
import {Link} from 'react-router-dom';

const prices = () => {
	return (
		<section className='prices' id='prices'>
			<div className='prices__container container'>
				<h2 className='prices__title'>
					Nuestros <span className='prices__title-two'>Precios</span>
				</h2>
				<p className='prices__description'>
					Obtén el poder, control y nivel de personalización que necesitas para gestionar los proyectos de tu equipo y
					organización.
				</p>
				<div className='prices__cards'>
					<article className='card'>
						<h3 className='card__title'>Basic</h3>
						<p className='card__description'>
							Para usuarios individuales o equipos que están empezando a gestionar proyectos.
						</p>
						<span className='card__price'>US$ 0</span>
						<p className='card__conditions'>gratis para toda la vida</p>
						<Link to='/sign-up' className='card__btn'>
							Comenzar
						</Link>
						<p className='card__description-benefits'>Gestiona el trabajo y las tareas personales:</p>
						<div className='card__benefits'>
							<ul>
								<li className='card__benefit'>
									<img src='./img/check.svg' alt='check icon' />
									<span className='card__benefits-benefit'>Tareas ilimitadas</span>
								</li>
								<li className='card__benefit'>
									<img src='./img/check.svg' alt='check icon' />
									<span className='card__benefits-benefit'>Proyectos ilimitados</span>
								</li>
							</ul>
						</div>
					</article>
					<article className='card card--principal'>
						<h3 className='card__title'>Premium</h3>
						<p className='card__description'>
							Para usuarios individuales o equipos que están empezando a gestionar proyectos.
						</p>
						<span className='card__price'>US$ 9.99</span>
						<p className='card__conditions'>Usuario/mes</p>
						<Link to='/sign-up' className='card__btn'>
							Prueba gratis
						</Link>
						<p className='card__description-benefits'>Gestiona el trabajo y las tareas personales:</p>
						<div className='card__benefits'>
							<ul>
								<li className='card__benefit'>
									<img src='./img/check.svg' alt='check icon' />
									<span className='card__benefits-benefit'>Tareas ilimitadas</span>
								</li>
								<li className='card__benefit'>
									<img src='./img/check.svg' alt='check icon' />
									<span className='card__benefits-benefit'>Proyectos ilimitados</span>
								</li>
								<li className='card__benefit'>
									<img src='./img/check.svg' alt='check icon' />
									<span className='card__benefits-benefit'>Cronograma</span>
								</li>
								<li className='card__benefit'>
									<img src='./img/check.svg' alt='check icon' />
									<span className='card__benefits-benefit'>Paneles ilimitados</span>
								</li>
							</ul>
						</div>
					</article>
					<article className='card'>
						<h3 className='card__title'>Business</h3>
						<p className='card__description'>
							Para usuarios individuales o equipos que están empezando a gestionar proyectos.
						</p>
						<span className='card__price'>US$ 24,99</span>
						<p className='card__conditions'>Usuario/mes</p>
						<Link to='/sign-up' className='card__btn'>
							Comenzar
						</Link>
						<p className='card__description-benefits'>Gestiona el trabajo y las tareas personales:</p>
						<div className='card__benefits'>
							<ul>
								<li className='card__benefit'>
									<img src='./img/check.svg' alt='check icon' />
									<span className='card__benefits-benefit'>Tareas ilimitadas</span>
								</li>
								<li className='card__benefit'>
									<img src='./img/check.svg' alt='check icon' />
									<span className='card__benefits-benefit'>Proyectos ilimitados</span>
								</li>
								<li className='card__benefit'>
									<img src='./img/check.svg' alt='check icon' />
									<span className='card__benefits-benefit'>Cronograma</span>
								</li>
								<li className='card__benefit'>
									<img src='./img/check.svg' alt='check icon' />
									<span className='card__benefits-benefit'>Paneles ilimitados</span>
								</li>
								<li className='card__benefit'>
									<img src='./img/check.svg' alt='check icon' />
									<span className='card__benefits-benefit'>Portafolios</span>
								</li>
								<li className='card__benefit'>
									<img src='./img/check.svg' alt='check icon' />
									<span className='card__benefits-benefit'>Gestión de recursos</span>
								</li>
							</ul>
						</div>
					</article>
				</div>
			</div>
		</section>
	);
};

export default prices;
