import React, { Component } from "react";
import Card from 'react-bootstrap/Card'


class ProductCard extends Component {

	render() {
		return (
			<div className="ui three stackable link cards">
				{/* カード1 */}
				<div className="teal card">
					<div className="image">
						<img src="" />
					</div>
					<div className="content">
						<div className="header">Product Name</div>
					</div>
					<div className="description">
						<p>Description</p>
					</div>
				</div>
			</div>
		);
	}
}

export default ProductCard