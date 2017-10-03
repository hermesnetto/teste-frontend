import React, { Component } from 'react';
import { HashRouter, Link, Route } from 'react-router-dom';
import ShotsList from './ShotsList';
import ShotInfo from './ShotInfo';

class App extends Component {
  render() {
    return(
      <div>
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <HashRouter>
                <Link to="/">
                  <h1 className="header__brand">Dribbble</h1>
                </Link>
              </HashRouter>
              <h2 className="header__page-name">Shots</h2>
            </div>
          </div>
        </header>

        <HashRouter>
          <main className="container">
            <Route exact path="/" component={ShotsList} />
            <Route path="/lista" component={ShotsList} />
            <Route exact path="/detalhe" component={ShotsList} />
            <Route path="/detalhe/:id" component={ShotInfo} />
          </main>
        </HashRouter>
      </div>
    );
  }
}

export default App;