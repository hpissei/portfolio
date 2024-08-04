// About.js
//import React from 'react';
import styled from 'styled-components';
//import { motion } from 'framer-motion';
import { Link } from "react-router-dom";

const AboutSection = styled.section`
  padding: 4rem 2rem;
  background-color: #f7f8fa;
  text-align: center;
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.125rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: #555;
`;

const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 2rem;
`;

const Skill = styled.div`
  background: #fff;
  border-radius: 5px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  padding: 0.75rem 1.5rem;
  margin: 0.5rem;
  font-size: 1rem;
  color: #333;
`;

const About = () => {
    return (
        <AboutSection id="about">
            <Container>
                <Title>About Me</Title>
                <Description>
                    I'm a passionate software developer, team lead, project manager & consultant with experience in building native, web and mobile applications.
                    I love creating  user-friendly and efficient solutions that solve real-world problems. My main focus is on developing clean and
                    maintainable code, and I'm always eager to learn new technologies and improve my skills.
                </Description>
                <Skills>
                    <Skill>.Net</Skill>
                    <Skill>.Net Core</Skill>
                    <Skill>C#</Skill>
                    <Skill>SQL</Skill>
                    <Skill>Java</Skill>
                    <Skill>JavaScript</Skill>
                    <Skill>TypeScript</Skill>
                    <Skill>React</Skill>
                    <Skill>Node.js</Skill>
                    <Skill>Python</Skill>
                    <Skill>Golang</Skill>
                    <Skill>GraphQL</Skill>
                    <Skill>Docker</Skill>
                    <Skill>gRPC</Skill>
                    <Skill>Microservices</Skill>
                    <Skill>Azure</Skill>
                    <Skill>AWS</Skill>
                    <Skill>ElasticSearch</Skill>
                    <Skill>CosmosDB</Skill>
                    <Skill>REST API</Skill>
                </Skills>
                <Link to="/portfolio/contact"
                   className="btn btn-lg btn-warning">Get in Touch</Link>
            </Container>
        </AboutSection>
    );
};

export default About;
