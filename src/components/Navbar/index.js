import React from "react";
import logo from "../../assets/logo.png";
// import { DiCssdeck } from "react-icons/di";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavLink,
  Logo,
  NavContainer,
  Span,
  NavLogo,
  NavItems,
  MobileIcon,
  MobileMenu,
  MobileLinks,
} from "./styling";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  // const theme = useTheme();

  return (
    <Nav>
      <NavContainer>
        <NavLogo>
          <a
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              color: "#6492aa",
              marginBottom: "20;",
              cursor: "pointer",
              textDecoration: "none",
            }}
          >
            <Logo src={logo} /> <Span>rzou.dev</Span>
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
          <NavLink href="#contact">Contact</NavLink>
        </NavItems>
        {/* <ButtonContainer>
          <MailButton href="#contact"></MailButton>
        </ButtonContainer> */}
      </NavContainer>

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
          href="#stack"
          onClick={() => {
            setOpen(!open);
          }}
        >
          Stack
        </MobileLinks>
        <MobileLinks
          href="#projects"
          onClick={() => {
            setOpen(!open);
          }}
        >
          Projects
        </MobileLinks>
        <MobileLinks
          href="#contact"
          onClick={() => {
            setOpen(!open);
          }}
        >
          Contact
        </MobileLinks>
      </MobileMenu>
    </Nav>
  );
};

export default Navbar;
