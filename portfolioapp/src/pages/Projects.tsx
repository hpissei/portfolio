// Projects.js
//import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProjectsSection = styled.section`
  padding: 4rem 2rem;
  background-color: #fff;
  text-align: center;
`;

const Container = styled.div`
  max-width: 1000px;
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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ProjectCard = styled(motion.div)`
  background: #f7f8fa;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  text-align: left;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.2);
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: #777;
  margin-bottom: 1rem;
`;

const ProjectTechStack = styled.div`
  font-size: 0.875rem;
  color: #333;
`;

const ProjectLink = styled.a`
  color: #007bff;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

const Projects = () => {
  const projectData = [
    {
      title: 'Portfolio',
      description: 'A personal website to showcase my portfolio and blog posts.',
      techStack: 'React, Styled-Components, Framer Motion',
          link: 'https://github.com/hpissei/portfolio/',
      },
      {
          title: 'Restaurant Reservation CLI',
          description: 'A command-line interface for managing the restaurant reservations.',
          techStack: 'Golang',
          link: 'https://github.com/hpissei/restaurantresrervation-cli/',
      },
    //{
    //  title: 'E-commerce Platform',
    //  description: 'An online platform for buying and selling products.',
    //  techStack: 'React, Redux, Node.js, MongoDB',
    //  link: 'https://yourecommerce.com',
    //},
    //{
    //  title: 'Chat Application',
    //  description: 'A real-time chat application with private and group chat features.',
    //  techStack: 'React, Socket.io, Express, MongoDB',
    //  link: 'https://yourchatapp.com',
    //},
    //{
    //  title: 'Weather App',
    //  description: 'A web application that provides weather forecasts for different locations.',
    //  techStack: 'React, OpenWeatherMap API',
    //  link: 'https://yourweatherapp.com',
    //},
  ];

  return (
    <ProjectsSection id="projects">
      <Container>
        <Title>Projects</Title>
        <Description>
                  I have worked on several products, projects ranging from native, web, mobile & microservices applications.
                  The products on which I worked professionally due to confidentiliaity they are not publically visible nor shareable.
                  I have worked as a Team Leader, Project Manager, FullStack Engineer and a Consultant.
                  But I have created some personal projects which are as follows.
          {/*Here are some of the projects I've worked on. They range from web applications to full-stack solutions.*/}
        </Description>
        <ProjectsGrid>
          {projectData.map((project, index) => (
            <ProjectCard key={index} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <ProjectTechStack>{project.techStack}</ProjectTechStack>
              <ProjectLink href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </ProjectLink>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Container>
    </ProjectsSection>
  );
};

export default Projects;
