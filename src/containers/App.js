import React from 'react';
import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router-dom';
import { history } from '../modules/store';

import Home from './Home';
import Store from './Store';
import About from './About';

class App extends React.Component {
  render() {
    return (
      <ConnectedRouter history={history}>
        <div className='full-height'>
          <Route exact path="/" component={ Home }/>
          <Route path="/store" component={ Store }/>
          <Route path="/about" component={ About }/>
        </div>
      </ConnectedRouter>
    );
  }
}

export default App;
