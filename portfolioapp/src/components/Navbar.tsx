// src/components/Navbar.js
//import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => props.theme.primary};
  padding: 1rem;
`;

const Navbar = () => {
    return (
        <Nav className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3 navbar navbar-light">
            <h1>Portfolio </h1>
            < div>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </Nav>
    );
};

export default Navbar;