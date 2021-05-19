import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => (
  <div className="page-not-found">
    <h1>Page Not Found</h1>
    <p>Return to the <Link to="/">main page</Link></p>
  </div>
);

export default PageNotFound;