import React, {useEffect, useContext} from 'react';
import {Link, useParams} from 'react-router-dom';
import proyectosContext from '../contexts/proyectos/proyectosContext';
import {AuthContext} from '../contexts/AuthContext';

import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import {makeStyles, useTheme} from '@material-ui/core/styles';

import Sidebar from './dashboard/Sidebar';
import Content from './dashboard/Content';
import tareasContext from '../contexts/tareas/tareasContext';
import Upbar from './dashboard/Upbar';

const drawerWidth = 320;

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
	},
	drawer: {
		[theme.breakpoints.up('md')]: {
			width: drawerWidth,
			flexShrink: 0,
		},
	},
	appBar: {
		[theme.breakpoints.up('md')]: {
			width: `calc(100% - ${drawerWidth}px)`,
			marginLeft: drawerWidth,
		},
		backgroundColor: '#2d3436',
	},
	menuButton: {
		marginRight: theme.spacing(2),
		[theme.breakpoints.up('md')]: {
			display: 'none',
		},
	},
	// necessary for content to be below app bar
	toolbar: theme.mixins.toolbar,
	drawerPaper: {
		width: drawerWidth,
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
	},
}));

function Dashboard(props) {
	const {proyectoUrl} = useParams();

	const {proyecto, obtenerProyectos, proyectoActual} = useContext(proyectosContext);
	const {obtenerTareas} = useContext(tareasContext);
	const {currentUser, jwt} = useContext(AuthContext);

	useEffect(() => {
		if (Object.keys(currentUser).length === 0) return;

		obtenerProyectos(currentUser.id, jwt);

		// eslint-disable-next-line
	}, [currentUser]);
	useEffect(() => {
		if (proyectoUrl === undefined) return;

		proyectoActual(proyectoUrl, jwt);

		// eslint-disable-next-line
	}, [proyectoUrl]);

	useEffect(() => {
		if (proyectoUrl === undefined) return;

		proyectoActual(proyectoUrl, jwt);

		// eslint-disable-next-line
	}, [proyectoUrl]);

	useEffect(() => {
		if (proyecto === undefined) return;

		if (proyecto?._id) {
			obtenerTareas(proyecto._id, jwt);
		}
		//eslint-disable-next-line
	}, [proyecto, jwt]);

	const {window} = props;
	const classes = useStyles();
	const theme = useTheme();
	const [mobileOpen, setMobileOpen] = React.useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const drawer = (
		<>
			<div className={classes.toolbar}>
				<div className='logo-appbar'>
					<Link to='/'>
						<h1 className='sidebar__logo'>
							LETA<span className='sidebar__logo-dos'>Tasks</span>
						</h1>
					</Link>
				</div>
			</div>
			{/* <Divider /> */}
			<Sidebar />
		</>
	);

	const container = window !== undefined ? () => window().document.body : undefined;

	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar position='fixed' className={`${classes.appBar} appbar`}>
				<Hidden mdUp>
					<Toolbar>
						<IconButton
							color='inherit'
							aria-label='open drawer'
							edge='start'
							onClick={handleDrawerToggle}
							className={classes.menuButton}>
							<MenuIcon />
						</IconButton>

						<Upbar />
					</Toolbar>
				</Hidden>
			</AppBar>
			<nav className={classes.drawer} aria-label='mailbox folders'>
				{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
				<Hidden mdUp implementation='css'>
					<Drawer
						container={container}
						variant='temporary'
						anchor={theme.direction === 'rtl' ? 'right' : 'left'}
						open={mobileOpen}
						onClose={handleDrawerToggle}
						classes={{
							paper: classes.drawerPaper,
						}}
						ModalProps={{
							keepMounted: true, // Better open performance on mobile.
						}}>
						{drawer}
					</Drawer>
				</Hidden>
				<Hidden smDown implementation='css'>
					<Drawer
						classes={{
							paper: classes.drawerPaper,
						}}
						variant='permanent'
						open>
						{drawer}
					</Drawer>
				</Hidden>
			</nav>
			<main className={classes.content}>
				<Hidden mdUp>
					<div className={classes.toolbar} />
				</Hidden>
				<Content proyectoUrl={proyectoUrl} />
			</main>
		</div>
	);
}

Dashboard.propTypes = {
	/**
	 * Injected by the documentation to work in an iframe.
	 * You won't need it on your project.
	 */
	window: PropTypes.func,
};

export default Dashboard;
