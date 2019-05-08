import React from 'react'
import PropTypes from "prop-types"

import  './pagesCss.css'
import { HomeTitle, HomeSubTitle, TitleBlock, HomeMenuLink } from './Util'
import List from "@material-ui/core/List";
import {Link} from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import HomeIcon from "@material-ui/core/SvgIcon/SvgIcon";
import Drawer from "@material-ui/core/Drawer";

const linkList = ["Home", "About", "Works"]

let li

class Home extends React.Component {

	render() {
		return (
			<div>
				<TitleBlock>
					<HomeTitle><em>Kazuya Takahashi</em></HomeTitle>
					<HomeSubTitle><em>Back-end Engineer/ Mobile Engineer</em></HomeSubTitle>
					{/*create list*/}
					<List>
						<Link to={"/"}>
							<ListItem>
								<HomeMenuLink>Home</HomeMenuLink>
							</ListItem>
						</Link>

						<Link to={"/About"}>
							<ListItem>
								<HomeMenuLink>About</HomeMenuLink>
							</ListItem>
						</Link>

						<Link to={"Skills"}>
							<ListItem>
								<HomeMenuLink>Skills</HomeMenuLink>
							</ListItem>
						</Link>

						<Link to={"Products"}>
							<ListItem>
								<HomeMenuLink>Product</HomeMenuLink>
							</ListItem>
						</Link>

						<Link to={"ContactMe"}>
							<ListItem>
								<HomeMenuLink>ContactMe</HomeMenuLink>
							</ListItem>
						</Link>
					</List>
				</TitleBlock>
			</div>
		);
	}

}

Home.propTypes = {
	classes: PropTypes.object.isRequired,
	theme: PropTypes.object.isRequired,
};

export default Home