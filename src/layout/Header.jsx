import React from 'react';

export default function Header() {
  return(
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <h1 className="header__brand">Dribbble</h1>
          <h2 className="header__page-name">Shots</h2>
        </div>
      </div>
    </header>
  );
}