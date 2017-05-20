import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
require("react-bootstrap/lib/NavbarHeader");
const Header = () =>
{
  return (
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <IndexLink to="/" activeClassName="active">React-Quiz-Web-Site</IndexLink>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1}>
            <IndexLink to="/" activeClassName="active">Home</IndexLink>
          </NavItem>
          <NavItem eventKey={2}>
            <Link to="/courses" activeClassName="active">Courses</Link>
          </NavItem>
          <NavItem eventKey={3}>
            <Link to="/questions" activeClassName="active">Questions</Link>
          </NavItem>
          <NavItem eventKey={4}>
            <Link to="/about" activeClassName="active">About</Link>
          </NavItem>
          <NavItem eventKey={5}>
            <Link to="/quizzes" activeClassName="active">Quiz</Link>
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

  );
};

export default Header;
