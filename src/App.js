import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import Informes from './views/informes'
import Index from './views/index'
import landing from './views/landing'
import Resumenes from './views/resumenes'


import './assets/Navbar/Navbar.css'
import './assets/Secciones/Secciones.css'
import'./assets/Slide/slide.css'
import './assets/Footer/Footer.css'



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
        <Route
          path ='/resumenes' 
          component={Resumenes}
          exact
        />
        <Route
          path ='/landing' 
          component={landing}
          exact
        />

      </Switch>
    </Router>
  );
}

export default App;
