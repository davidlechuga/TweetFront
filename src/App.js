import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import Informes from './views/informes'
import Index from './views/index'

import './assets/Navbar/Navbar.css'


function App() {
  return (
    <Router>
      <Switch>
        <Route
          path ='/' 
          component={Index}
          exact
        />
        <Route
          path ='/informes' 
          component={Informes}
          exact
        />

      </Switch>
    </Router>
  );
}

export default App;
