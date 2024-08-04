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
    const professionalProjectsData = [{
        title: 'Skillsurvey',
        description: 'SkillSurvey is the leader in online reference checking, sourcing and credentialing, providing immediately useful insights to help employers make better hiring decisions. SkillSurvey speeds hiring for healthcare, commercial, higher education, and staffing and recruiting organizations.',
        techStack: '',
        link: 'https://www.icims.com/products/talent-cloud-applications/skillsurvey/',
    },
        {
            title: 'CCH Axcess',
            description: 'CCH Axcess is the only complete cloud solution, allowing you to transition effortlessly from return preparation, to research, to document exchange and billing.',
            techStack: '',
            link: 'https://www.wolterskluwer.com/en/solutions/cch-axcess',
        },
        {
            title: 'Atrezzo',
            description: 'Atrezzo is a proprietary technology platform that integrates essential care management features and all relevant data into one comprehensive solution. Leading-edge technology coupled with an intuitive user experience provides a foundation for proactive care management.',
            techStack: '',
            link: 'https://acentra.com/technologies/atrezzo/',
        },
        {
            title: 'Energage',
            description: 'Energage Platform, is an suite of HR technology tools that enable companies to improve the working lives of individuals, build distinct brands, and achieve better business results. ',
            techStack: '',
            link: 'https://www.energage.com/platform/',
        },
        {
            title: 'Raptivity',
            description: 'Raptivity is a must-have tool for instructional designers, corporate trainers, and higher-ed professors to create eLearning interactions in a snap. Unlike common authoring tools that offer basic templates, Raptivity has visually engaging and sophisticated interactions. Let Raptivity take care of interaction design, so you can focus on content and curriculum.',
            techStack: '',
            link: 'https://www.raptivity.com/',
        },
        {
            title: 'Quillionz',
            description: 'Quillionz is an online question generator that uses artificial intelligence (AI) to create questions from texts.',
            techStack: '',
            link: 'https://www.quillionz.com/',
        }];
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
        <>
            <ProjectsSection id="professionalProjects">
                <Container>
                    <Title>Professional Projects</Title>
                    <Description>
                        I have worked on several products, projects ranging from native, web, mobile & microservices applications.
                        The products on which I worked professionally due to confidentiliaity the source code is not publically shareable.
                        But I have created some personal projects which are as follows.
                    </Description>
                    <ProjectsGrid>
                        {professionalProjectsData.map((project, index) => (
                            <ProjectCard key={index} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                <ProjectTitle>{project.title}</ProjectTitle>
                                <ProjectDescription>{project.description}</ProjectDescription>
                                <ProjectTechStack>{project.techStack}</ProjectTechStack>
                                <ProjectLink href={project.link} target="_blank" rel="noopener noreferrer">
                                    View Product Site
                                </ProjectLink>
                            </ProjectCard>
                        ))}
                    </ProjectsGrid>
                </Container>
            </ProjectsSection>
    <ProjectsSection id="projects">
      <Container>
        <Title>Personal Projects</Title>
        <Description>
            I have created some personal projects which are as follows.
        </Description>
        <ProjectsGrid>
          {projectData.map((project, index) => (
            <ProjectCard key={index} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <ProjectTechStack>{project.techStack}</ProjectTechStack>
              <ProjectLink href={project.link} target="_blank" rel="noopener noreferrer">
                View Project Source Code
              </ProjectLink>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Container>
            </ProjectsSection>
        </>
  );
};

export default Projects;
