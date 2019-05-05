import React from 'react'
import { Link, withRouter } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import {FootTab} from "./Util";

// Material-UIアイコン取得
import HomeIcon from '@material-ui/icons/Home';
import AboutIcon from '@material-ui/icons/Face';
import ProductIcon from '@material-ui/icons/ImportantDevices';
import SkillsIcon from '@material-ui/icons/Keyboard';

const styles = theme => ({

	button: {
		// about range for button
		maxWidth: '100%',
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
		//  it's related with material-ui
		const { classes } = this.props;
		return (
			<div className={classes.wrapper}>
				<FootTab
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