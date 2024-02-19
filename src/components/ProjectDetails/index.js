import React from "react";
import { CloseRounded, GitHub, Launch } from "@mui/icons-material";
import { Modal } from "@mui/material";
import {
  Container,
  Wrapper,
  Image,
  Title,
  Tags,
  Tag,
  Description,
  ButtonGroup,
  Button,
} from "./styling";

const index = ({ openModal, setOpenModal }) => {
  const project = openModal?.project;
  console.log(project);
  return (
    <Modal
      open={true}
      onClose={() => setOpenModal({ state: false, project: null })}
    >
      <Container>
        <Wrapper>
          <CloseRounded
            style={{
              position: "absolute",
              top: "10px",
              right: "20px",
              cursor: "pointer",
            }}
            onClick={() => setOpenModal({ state: false, project: null })}
          />
          <Image src={project?.image} alt={project?.name} />
          <Title>{project?.title}</Title>
          <Tags>
            {project?.tags.map((tag) => (
              <Tag>{tag}</Tag>
            ))}
          </Tags>
          <Description>{project?.description}</Description>
          <ButtonGroup>
            <Button dull href={project?.github} target="new">
              <GitHub />
            </Button>
            <Button href={project?.webapp} target="new">
              <Launch />
            </Button>
          </ButtonGroup>
        </Wrapper>
      </Container>
    </Modal>
  );
};

export default index;
