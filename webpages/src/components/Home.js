import React from 'react'

import { HomeTitle, HomeSubTitle, TitleBlock, HomeMenuLink } from './Util'
import List from "@material-ui/core/List";
import {Link} from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";

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
						<Link to={"Products"}>
							<ListItem>
								<HomeMenuLink>Product</HomeMenuLink>
							</ListItem>
						</Link>
					</List>
				</TitleBlock>
			</div>
		);
	}
}

export default Home