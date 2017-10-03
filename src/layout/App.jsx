import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header';
import ShotsList from '../module/ShotsList/ShotsList';

class App extends Component {
  render() {
    return(
      <div>
        <Header />
        <Router>
          <main className="container">
            <Route exact path="/" component={ShotsList} />
            <Route path="/lista" component={ShotsList} />
          </main>
        </Router>
      </div>
    );
  }
}

export default App;