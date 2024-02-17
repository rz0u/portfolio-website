import React from "react";
import { projects } from "../../data/constant";
import ProjectCards from "../Cards/ProjectCard";
import { Container, Wrapper, Title, Desc, CardContainer } from "./styling";

const Projects = ({ openModal, setOpenModal }) => {
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I've been involved in various projects across different domains.
          Here's some of them.
        </Desc>
        <CardContainer>
          {projects.map((project) => (
            <ProjectCards
              project={project}
              openModal={openModal}
              setOpenModal={setOpenModal}
            />
          ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
