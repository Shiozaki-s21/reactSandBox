import React from 'react'
import { Link, withRouter } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

// Material-UIアイコン取得
import HomeIcon from '@material-ui/icons/Home';
import AboutIcon from '@material-ui/icons/Face';
import ProductIcon from '@material-ui/icons/ImportantDevices';
import SkillsIcon from '@material-ui/icons/Keyboard';

const styles = theme => ({
	wrapper:{
		display: 'block',
		width: '100%',
		position: 'fixed',
		left: 0,
		bottom: 0,
		zIndex: 1000,
		textAlign: 'center',
	},
	// root: {
	// 	[theme.breakpoints.up('md')]: {
	// 		display: 'none',
	// 	},
	// },
	button: {
		maxWidth: '100%', // ボタンが横一杯に広がって欲しくない時はコメントアウト
	},
});


class RouteRelatedBottomNavigation extends React.Component {
	buttons_info = [
		{ label: 'Home', icon: <HomeIcon />, link_to: '/'},
		{ label: 'About me', icon: <AboutIcon />, link_to: '/About'},
		{ label: 'Products', icon: <ProductIcon />, link_to: '/Products'},
		{ label: 'Skills', icon: <SkillsIcon />, link_to: '/Skills'},
	];

	buttons = this.buttons_info.map( (button_info, index) => {
		return (
			<BottomNavigationAction
				value={button_info.link_to}
				label={button_info.label}
				className={this.props.classes.button}
				icon={button_info.icon}
				component={Link}
				to={button_info.link_to}
			/>
		);
	})

	render() {
		// Material-ui関連
		const { classes } = this.props;

		return (
			<div className={classes.wrapper}>
				<BottomNavigation
					value={this.props.location.pathname}
					showLabels
					className={classes.root}
					children={this.buttons}
				/>
			</div>
		);
	}
}

export default withRouter(
	withStyles(styles, { withTheme: true })(RouteRelatedBottomNavigation)
);

//
// const styles = {
// 	ul: {
// 		listStyleType: 'none',
// 		display: 'inline',
// 	},
// 	li: {
// 		display: 'inline-block',
// 		marginRight: '1em',
// 	}
// };
//
// class Footer extends Component {
// 	render() {
// 		return (
// 			<div>
// 				<ul className="header-link" style={styles.ul}>
// 					<li style={styles.li}><Link to={"/"}>Home</Link></li>
// 					<li style={styles.li}><Link to={"/About"}>About</Link></li>
// 					<li style={styles.li}><Link to={"/Products"}>Products</Link></li>
// 					<li style={styles.li}><Link to={"/Skills"}>Skills</Link></li>
// 				</ul>
// 			</div>
// 		)
// 	}
// }
//
//
// export default Footer;