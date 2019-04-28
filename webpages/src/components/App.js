import React, { Component } from 'react';

// Router for moving screen
import {Route, Switch} from'react-router-dom'

import '../App.css';
import Header from "./Header";
import Home from './Home'
import Products from "./Products";
import About from "./About";
import Skills from "./Skills";

// reading Components
// import Components from './components'

// for representing "Not Found"
const NotFound = () => {
  return (
    <h2> Not Found</h2>
  )
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
          <Switch>
            <Route exact path = "/" component={Home}/>
            <Route exact path = "/About" component={About}/>
            <Route exact path = "/Products" component={Products}/>
            <Route exact path = "/Skills" component={Skills}/>

          </Switch>
        {/*<Footer/>*/}
      </div>
    );
  }
}

export default App;
