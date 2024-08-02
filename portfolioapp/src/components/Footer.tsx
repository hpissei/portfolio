// src/components/Footer.js
//import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: ${(props) => props.theme.secondary};
  padding: 1rem;
  text-align: center;
`;

const Footer = () => {
    return (
        <FooterContainer>
            <p>&copy; 2024 Portfolio. All Rights Reserved.</p>
            <div>
                <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                    Twitter
                </a>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                </a>
            </div>
        </FooterContainer>
    );
};

export default Footer;