// src/components/Footer.js
//import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: ${(props) => props.theme.secondary};
  padding: 1rem;
  text-align: center;
`;

const LinkedInStyle = { color: "#0082ca"};
const GitHub = { color: "#333333" };
const StackOverflow = { color: "#ffac44" };

const Footer = () => {
    return (
        <FooterContainer className="navbar-fixed-bottom">
                <div className="container">
                <div className="mb-4">
                    <a href="https://www.linkedin.com/in/heetesh-panghanti-94549b117/" target="_blank"><i className="fab fa-linkedin-in fa-2x p-2" style={LinkedInStyle}></i></a>
                    <a href="https://github.com/hpissei" target="_blank" ><i className="fab fa-github fa-2x p-2" style={GitHub}></i></a>
                    <a href="https://stackoverflow.com/users/9322797/hp-issei" target="_blank"><i className="fab fa-stack-overflow fa-2x p-2" style={StackOverflow}></i></a>
                    <p>&copy; 2024 All rights reserved.</p>
                    <p><a href="https://www.flaticon.com/free-icons/portfolio" title="portfolio icons">Portfolio icons created by Freepik - Flaticon</a>
                    </p>
                    </div>
                </div>
        </FooterContainer>
    );
};

export default Footer;