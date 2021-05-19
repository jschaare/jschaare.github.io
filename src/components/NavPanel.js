import React from 'react';
import { Link } from 'react-router-dom';

import routes from '../data/routes';

const NavPanel = () => (
    <div id="navPanel">
        <nav>
            <ul>
                {routes.map((l) => (
                    <li key={l.label}>
                        <Link to={l.path}>{l.label}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    </div>
);

export default NavPanel;