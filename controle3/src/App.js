""// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from './components/Menu';
import Q3 from './components/Q3';
import Q4 from './components/Q4';
import Q5 from './components/Q5';
import Q6 from './components/Q6';


const App = () => {
  return (
    <Router>
      <div>
        <Menu />
        <Switch>
          <Route path="/Q3" component={Q3} />
          <Route path="/Q4" component={Q4} />
          <Route path="/Q5" component={Q5} />
          <Route path="/Q6" component={Q6} />

        </Switch>
      </div>
    </Router>
  );
};

export default App;
""