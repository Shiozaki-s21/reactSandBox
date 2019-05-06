import React from 'react'
import PropTypes from "prop-types"
import {withStyles} from "@material-ui/core"
import logo from '../res/logo-kazu.png'
import paperWall from '../res/backGround.png'
import  './pagesCss.css'
import { HomeTitle } from './Util'

const styles = theme => ({

	root:{
		backgroundImage: paperWall,
		backgroundColor:"#FFFFFF"
	}
})


class Home extends React.Component {

	render() {
		const { classes, theme } = this.props;
		return (
			<div className={classes.root} >
				{/*create component for title*/}
				<HomeTitle>AAA</HomeTitle>
				{/*create comonent for menu*/}

			</div>
		);
	}

}

Home.propTypes = {
	classes: PropTypes.object.isRequired,
	theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(Home)