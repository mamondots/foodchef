import React from 'react';
import './Header.css'

import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Mamon<span>dots.</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#features">
              <Link className='menu-link' to='/'>Home</Link>
              </Nav.Link>
            <Nav.Link href="#pricing">
              <Link className='menu-link' to='/about'>About Us</Link>
              </Nav.Link>
            <Nav.Link href="#pricing">
                <Link className='menu-link' to='/blog'> Blog</Link>
              </Nav.Link>
            
          </Nav>
          <Nav>
            <Nav.Link href="#deets">
            <Button variant="secondary">Secondary</Button>
            </Nav.Link>
            <Nav.Link href="#memes">
              <Link to='/login'>
                <Button variant="secondary">Login</Button></Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;