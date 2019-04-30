import React from 'react'
import { Component } from 'react'
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core";
import logo from '../res/logo-kazu.jpg'

const styles = theme => ({
	nameSpace:{
		position: 'absolute',
		left: '10%',
		top: '50%',
		transform: 'translateY(-50%)',
		width: '40%',
		maxHeight: '90%'
	},
	homeImageZone:{
		align:'right',
	},
	homeImage:{
		height: 400,
		width: 400,
		position: 'absolute',
		zIndex: 0,
		top: 0,
		right: '15%',
		bottom: 0,
		left: 'auto',
		margin: 'auto',
	},
	home:{
		background: "#FFF"
	}
})


class Home extends Component {

	render() {
		const { classes, theme } = this.props;

		return (
			<div className={classes.home}>
				{/*Title -> "I'm Kazuya Takahashi"*/}
				<div className={classes.nameSpace}>
					<h1>Hello!! I'm Kazuya Takahashi</h1>
					<h2>BackEnd-Engineer/iOS-Engineer/</h2>
				</div>
				<div className={classes.homeImageZone}>
					<img className={classes.homeImage} src={logo}/>
				</div>

			</div>
		);
	}

}

Home.propTypes = {
	classes: PropTypes.object.isRequired,
	theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(Home)