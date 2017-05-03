import React, {PropTypes} from 'react';
import {Link , IndexLink} from 'react-router';

const Header = () => {
  return(
    <nav className="navbar navbar-default">
      <ul className="nav navbar-nav">
        <li className="active">
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
        </li>
        <li className="active">
      <Link to="/courses" activeClassName="active">Courses</Link>
        </li>
        <li className="active">
      <Link to="/questions" activeClassName="active">Questions</Link>
        </li>
        <li className="active">
      <Link to="/about" activeClassName="active">About</Link>
        </li>
      </ul>
    </nav>
  );

};

export default  Header;
