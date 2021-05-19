import React from 'react';
import { Link } from 'react-router-dom';

import routes from '../data/routes';

const Header = () => (
  <header id="header">
    <div className="content">
      <div className="inner">
        <h1>
          {routes.filter((l) => l.index).map((l) => (
            <Link key={l.label} to={l.path}>{l.label}</Link>
          ))}
        </h1>
        <p>Software Engineer</p>
      </div>
    </div>
    <nav>
      <ul>
        {routes.filter((l) => !l.index).map((l) => (
          <li key={l.label}>
            <Link to={l.path}>{l.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);

export default Header;