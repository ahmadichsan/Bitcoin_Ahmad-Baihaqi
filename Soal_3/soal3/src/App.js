import React, { Component } from 'react';
import Bitcoin from './component/Bitcoin';
import Rptobit from './component/Rptobit';
import Bittorp from './component/Bittorp';

import { Route } from 'react-router-dom';


class App extends Component {
    
  render()
  {
  return (
      <div>
        <Route exact path="/" component={Bitcoin}/>
        <Route path="/Rptobit" component={Rptobit}/>
        <Route path="/Bittorp" component={Bittorp}/>
      </div>
      );
    }
  }
export default App;