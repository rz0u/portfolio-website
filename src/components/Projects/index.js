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
          I have worked on a wide range of projects. Here are some of my
          projects.
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
