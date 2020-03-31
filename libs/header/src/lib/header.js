import React from 'react';
import { Route, Link } from 'react-router-dom';
import './header.scss';
export const Header = props => {
  return (
    <div>
      <h1>Welcome to header component!</h1>

      <ul>
        <li>
          <Link to="/">header root</Link>
        </li>
      </ul>
      <Route
        path="/"
        render={() => <div>This is the header root route.</div>}
      />
    </div>
  );
};
export default Header;
