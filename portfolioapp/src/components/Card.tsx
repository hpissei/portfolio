// src/components/Card.js
//import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  padding: 1rem;
  margin: 1rem;
  border: 1px solid ${(props) => props.theme.primary};
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

interface FormatDataProps {
    title: string,
    description: string,
    link: string
}

const Card = ({ title, description, link }: FormatDataProps) => (
    <CardContainer>
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">
            View Project
        </a>
    </CardContainer>
);

export default Card;