import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'



import Index from './views/index'


function App() {
  return (
    <Router>
      <Switch>
        <Route
            path ='/' 
            component={Index}
            exact
        />
      </Switch>
    </Router>
  );
}

export default App;
