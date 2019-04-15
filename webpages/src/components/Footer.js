import React from 'react'
import { Component } from 'react'
import {Link} from "react-router-dom";

const styles = {
	ul: {
		listStyleType: 'none',
		display: 'inline',
	},
	li: {
		display: 'inline-block',
		marginRight: '1em',
	}
};

class Footer extends Component {
	render() {
		return (
			<div>
				<ul className="header-link" style={styles.ul}>
					<li style={styles.li}><Link to={"/"}>Home</Link></li>
					<li style={styles.li}><Link to={"/About"}>About</Link></li>
					<li style={styles.li}><Link to={"/Products"}>Products</Link></li>
				</ul>
			</div>
		)
	}
}


export default Footer;