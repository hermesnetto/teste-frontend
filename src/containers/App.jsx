import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ShotsList from './ShotsList';

class App extends Component {
  render() {
    return(
      <div>
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <h1 className="header__brand">Dribbble</h1>
              <h2 className="header__page-name">Shots</h2>
            </div>
          </div>
        </header>

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