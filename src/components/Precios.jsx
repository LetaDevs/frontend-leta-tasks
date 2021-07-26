import React from 'react';
import {Link} from 'react-router-dom';

const Precios = () => {
	return (
		<section className='precios' id='precios'>
			<div className='precios__contenedor'>
				<h2 className='precios__titulo'>
					Nuestros <span>Precios</span>
				</h2>
				<p className='precios__parrafo'>
					Obtén el poder, control y nivel de personalización que necesitas para gestionar los proyectos de tu equipo y
					organización.
				</p>
				<div className='precios__tarjetas'>
					<article className='tarjeta'>
						<h3 className='tarjeta__titulo'>Basic</h3>
						<p className='tarjeta__descripcion'>
							Para usuarios individuales o equipos que están empezando a gestionar proyectos.
						</p>
						<span className='tarjeta__precio'>US$ 0</span>
						<p className='tarjeta__condiciones'>gratis para toda la vida</p>
						<Link to='/sign-up' className='tarjeta__boton btn'>
							Comenzar
						</Link>
						<p className='tarjeta__descripcion-beneficios'>Gestiona el trabajo y las tareas personales:</p>
						<div className='tarjeta__beneficios'>
							<ul>
								<li className='tarjeta__beneficio'>
									<img src='./img/check.svg' alt='check icon' />
									<span className='tarjeta__beneficios--beneficio'>Tareas ilimitadas</span>
								</li>
								<li className='tarjeta__beneficio'>
									<img src='./img/check.svg' alt='check icon' />
									<span className='tarjeta__beneficios--beneficio'>Proyectos ilimitados</span>
								</li>
							</ul>
						</div>
					</article>
					<article className='tarjeta principal'>
						<h3 className='tarjeta__titulo'>Premium</h3>
						<p className='tarjeta__descripcion'>
							Para usuarios individuales o equipos que están empezando a gestionar proyectos.
						</p>
						<span className='tarjeta__precio'>US$ 9.99</span>
						<p className='tarjeta__condiciones'>Usuario/mes</p>
						<Link to='/sign-up' className='tarjeta__boton btn'>
							Prueba gratis
						</Link>
						<p className='tarjeta__descripcion-beneficios'>Gestiona el trabajo y las tareas personales:</p>
						<div className='tarjeta__beneficios'>
							<ul>
								<li className='tarjeta__beneficio'>
									<img src='./img/check.svg' alt='check icon' />
									<span className='tarjeta__beneficios--beneficio'>Tareas ilimitadas</span>
								</li>
								<li className='tarjeta__beneficio'>
									<img src='./img/check.svg' alt='check icon' />
									<span className='tarjeta__beneficios--beneficio'>Proyectos ilimitados</span>
								</li>
								<li className='tarjeta__beneficio'>
									<img src='./img/check.svg' alt='check icon' />
									<span className='tarjeta__beneficios--beneficio'>Cronograma</span>
								</li>
								<li className='tarjeta__beneficio'>
									<img src='./img/check.svg' alt='check icon' />
									<span className='tarjeta__beneficios--beneficio'>Paneles ilimitados</span>
								</li>
							</ul>
						</div>
					</article>
					<article className='tarjeta'>
						<h3 className='tarjeta__titulo'>Business</h3>
						<p className='tarjeta__descripcion'>
							Para usuarios individuales o equipos que están empezando a gestionar proyectos.
						</p>
						<span className='tarjeta__precio'>US$ 24,99</span>
						<p className='tarjeta__condiciones'>Usuario/mes</p>
						<Link to='/sign-up' className='tarjeta__boton btn'>
							Comenzar
						</Link>
						<p className='tarjeta__descripcion-beneficios'>Gestiona el trabajo y las tareas personales:</p>
						<div className='tarjeta__beneficios'>
							<ul>
								<li className='tarjeta__beneficio'>
									<img src='./img/check.svg' alt='check icon' />
									<span className='tarjeta__beneficios--beneficio'>Tareas ilimitadas</span>
								</li>
								<li className='tarjeta__beneficio'>
									<img src='./img/check.svg' alt='check icon' />
									<span className='tarjeta__beneficios--beneficio'>Proyectos ilimitados</span>
								</li>
								<li className='tarjeta__beneficio'>
									<img src='./img/check.svg' alt='check icon' />
									<span className='tarjeta__beneficios--beneficio'>Cronograma</span>
								</li>
								<li className='tarjeta__beneficio'>
									<img src='./img/check.svg' alt='check icon' />
									<span className='tarjeta__beneficios--beneficio'>Paneles ilimitados</span>
								</li>
								<li className='tarjeta__beneficio'>
									<img src='./img/check.svg' alt='check icon' />
									<span className='tarjeta__beneficios--beneficio'>Portafolios</span>
								</li>
								<li className='tarjeta__beneficio'>
									<img src='./img/check.svg' alt='check icon' />
									<span className='tarjeta__beneficios--beneficio'>Gestión de recursos</span>
								</li>
							</ul>
						</div>
					</article>
				</div>
			</div>
		</section>
	);
};

export default Precios;
