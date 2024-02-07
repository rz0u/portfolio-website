import React from "react";
import { useTheme } from "styled-components";
import { DiCssdeck } from "react-icons/di";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavLink,
  NavContainer,
  Span,
  NavLogo,
  NavItems,
  MailButton,
  ButtonContainer,
  MobileIcon,
  MobileMenu,
  MobileLinks,
} from "./styling";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();

  return (
    <Nav>
      <NavContainer>
        <NavLogo>
          <a
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              color: "white",
              marginBottom: "20;",
              cursor: "pointer",
              textDecoration: "none",
            }}
          >
            <DiCssdeck size="3rem" /> <Span>rzou.dev</Span>
          </a>
        </NavLogo>
        <MobileIcon>
          <FaBars
            onClick={() => {
              setOpen(!open);
            }}
          />
        </MobileIcon>
        <NavItems>
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#stack">Stack</NavLink>
          <NavLink href="#projects">Projects</NavLink>
        </NavItems>
        <ButtonContainer>
          <MailButton href="#contact">Contact Me!</MailButton>
        </ButtonContainer>
      </NavContainer>
      {open && (
        <MobileMenu open={open}>
          <MobileLinks
            href="#home"
            onClick={() => {
              setOpen(!open);
            }}
          >
            Home
          </MobileLinks>
          <MobileLinks
            href="#about"
            onClick={() => {
              setOpen(!open);
            }}
          >
            About
          </MobileLinks>
          <MobileLinks
            href="#projects"
            onClick={() => {
              setOpen(!open);
            }}
          >
            Projects
          </MobileLinks>
          <MailButton
            style={{
              padding: "10px 16px",
              background: `${theme.primary}`,
              color: "white",
              width: "max-content",
            }}
            href="#contact"
          >
            Contact Me!
          </MailButton>
        </MobileMenu>
      )}
    </Nav>
  );
};

export default Navbar;
