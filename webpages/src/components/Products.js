import React from 'react'
import { Component } from 'react'
import {ProductTitle} from "./Util";
import ProductCard from '../components/ProductCard'

class Products extends Component {

    render() {
        return (
            <div>
                <ProductTitle>Products</ProductTitle>
                    {/*list of products*/}
                <ProductCard/>
            </div>
        );
    }

}

export default Products