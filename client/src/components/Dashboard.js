import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown} from 'react-bootstrap';
import { Link } from "react-router-dom";

class Dashboard extends Component {
  render() {
    return (
      <div>
          <Navbar collapseOnSelect expand="lg" fixed="top"
          style={{
            'padding': '12px 44px',
            'box-shadow': '0 2px 4px 0 rgba(0,0,0,0.25)',
            'background-color': "#ebfafa"
          }}
        >
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav"
            style={{
              'font-size': '18px'
            }}
          >
            <Nav.Link className="nav-link" href="/">Home</Nav.Link>
          </Navbar.Collapse>
          <Navbar.Brand href="/"
            style={{
              color: '#0082A3',
            }}
          >Navbar Brand</Navbar.Brand>
        </Navbar>
      </div>
    );
  }
}

export default Dashboard;
