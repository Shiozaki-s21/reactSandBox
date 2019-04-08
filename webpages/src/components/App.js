import React, { Component } from 'react';

// Router for moving screen
import {Route, Switch} from'react-router-dom'

import '../App.css';
import Footer  from './Footer'
import Header from "./Header";
import Home from './Home'

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
          </Switch>
        <Footer/>
      </div>
    );
  }
}

export default App;
