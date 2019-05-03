// components
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import logo from '../res/logo-kazu.png'
import { Link } from 'react-router-dom';

// Icons
import HomeIcon from '@material-ui/icons/Home'
import AboutMeIcons from '@material-ui/icons/Person'
import SkilsIcon from '@material-ui/icons/LineStyle'
import ProductIcon from '@material-ui/icons/Phonelink'
import ContactMeIcon from '@material-ui/icons/MailOutline'

const drawerWidth = 200;

const styles = theme => ({
	root: {
		display: 'flex',
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
	appBarShift: {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	menuButton: {
		marginLeft: 12,
		marginRight: 36,
	},
	hide: {
		display: 'none',
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
		whiteSpace: 'nowrap',
	},
	drawerOpen: {
		width: drawerWidth,
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	drawerClose: {
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		overflowX: 'hidden',
		width: theme.spacing.unit * 7 + 1,
		[theme.breakpoints.up('sm')]: {
			width: theme.spacing.unit * 9 + 1,
		},
	},
	toolbar: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		padding: '0 8px',
		...theme.mixins.toolbar,
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing.unit * 3,
	},

	logo: {
		height: 50,
		width:50,
	}
});

class Header extends React.Component {
	state = {
		open: false,
	};

	render() {
		const { classes, theme } = this.props;

		return (
			<div className={classes.root}>
				<CssBaseline />
				{/*<AppBar*/}
				{/*	position="fixed"*/}
				{/*	className={classNames(classes.appBar, {*/}
				{/*		[classes.appBarShift]: this.state.open,*/}
				{/*	})}*/}
				{/*>*/}
				{/*</AppBar>*/}

				<Drawer
					variant="permanent"
					// must be orgnized ... class and className
					className={classNames(classes.drawer, {
						[classes.drawerOpen]: this.state.open,
						[classes.drawerClose]: !this.state.open,
					})}
					classes={{
						paper: classNames({
							[classes.drawerOpen]: this.state.open,
							[classes.drawerClose]: !this.state.open,
						}),
					}}
					// open={this.state.open}
				>
					{/*put logo here */}
					<div className={classes.logo}>
						{/*must decide to size*/}
						<img style={{height:50, width:50, marginLeft:10, marginRight:10}} src={logo}/>
					</div>
					<Divider />
					{/*til here*/}

					{/*put link to another pages here*/}
					{/*make more space */}
					<List>
						<Link to={"/"}>
							<ListItem>
								<ListItemIcon><HomeIcon></HomeIcon></ListItemIcon>
							</ListItem>
						</Link>

						<Link to={"/About"}>
							<ListItem>
								<ListItemIcon><AboutMeIcons/></ListItemIcon>
							</ListItem>
						</Link>

						<Link to={"Skills"}>
							<ListItem>
								<ListItemIcon><SkilsIcon/></ListItemIcon>
							</ListItem>
						</Link>

						<Link to={"Products"}>
							<ListItem>
								<ListItemIcon><ProductIcon/></ListItemIcon>
							</ListItem>
						</Link>

						<Link to={"ContactMe"}>
							<ListItem>
								<ListItemIcon><ContactMeIcon/></ListItemIcon>
							</ListItem>
						</Link>
					</List>


					{/*<List>*/}
					{/*	{['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (*/}
					{/*		<ListItem button key={text}>*/}
					{/*			<ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>*/}
					{/*			<ListItemText primary={text} />*/}
					{/*		</ListItem>*/}
					{/*	))}*/}
					{/*</List>*/}
					{/*til here*/}
					<Divider />

					{/*put links here */}
					{/*and move to bottom*/}
					{/*til here*/}
				</Drawer>
			</div>
		);
	}
}

Header.propTypes = {
	classes: PropTypes.object.isRequired,
	theme: PropTypes.object.isRequired,
};



// export default Header
export default withStyles(styles, {withTheme: true})(Header)