import React from 'react';
import logo from '../assets/logo.webp'
import { Navbar, Container, Nav } from 'react-bootstrap';
import DonationButton from './DonationButton';

const AppNavbar: React.FC = () => {
  return (
    <Navbar bg="white" expand="lg" className="shadow-sm">
      <Container>
        <Navbar.Brand href="/">
          <img
            src={logo}
            alt="Sportlight Humanity Logo"
            width="150"
            height="auto"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
   
          <Nav className="ml-auto">
            <DonationButton title={'Donate Now'} />
          </Nav>
   
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
