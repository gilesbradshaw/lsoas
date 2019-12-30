import React from 'react'

import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'

import Connected from './Connected'

const App: React.FC = () => {
  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >    
      <Router>
        <Switch>
          <Route
            component={Connected}
            path='/'
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
