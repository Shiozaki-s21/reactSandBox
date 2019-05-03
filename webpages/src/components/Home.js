import React from 'react'
import PropTypes from "prop-types"
import {withStyles} from "@material-ui/core"
import logo from '../res/logo-kazu.png'
import paperWall from '../res/backGround.png'
import  './pagesCss.css'
import {BlackIcon, GreetingOnHomePage} from './Util'

const styles = theme => ({

	root:{
		backgroundImage: paperWall,
		backgroundColor:"#FFFFFF"
	}
})


class Home extends React.Component {

	render() {
		const { classes, theme } = this.props;
		console.log(BlackIcon)
		return (
			<div className={classes.root} >
				{/*Title -> "I'm Kazuya Takahashi"*/}
				<GreetingOnHomePage>
					<h1>Hello!! I'm Kazuya Takahashi</h1>
					<h2>BackEnd-Engineer/iOS-Engineer</h2>
				</GreetingOnHomePage>
				<div>
					{/*<img className={classes.homeImage} src={logo}/>*/}
					<BlackIcon src = {logo}/>
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