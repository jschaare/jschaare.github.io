import React, {Suspense, lazy, useState} from 'react';
import { Link } from 'react-router-dom';

import routes from '../data/routes';

const Menu = lazy(() => import('react-burger-menu/lib/menus/slide'));

const MobileBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div id="mobileBar">
      <div id="titleBar">
        <ul>
          <li onClick={() => setOpen(!open)} className="toggle"></li>
          <li className="title">
            {routes.filter((l) => l.index).map((l) => (
              <Link key={l.label} to={l.path}>{l.label}</Link>
            ))}
          </li>
        </ul>
      </div>
      <div id="navPanel">
        <Suspense fallback={<></>}>
          <Menu left isOpen={open}>
            <ul>
              {routes.map((l) => (
                <li key={l.label}>
                  <Link to={l.path} onClick={() => setOpen(!open)}>
                    <h3 className="link depth-0">{l.label}</h3>
                  </Link>
                </li>
              ))}
            </ul>
          </Menu>
        </Suspense>
      </div>
    </div>
  );
};

export default MobileBar;