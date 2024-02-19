import React, { useState } from "react";
import logo from "../../assets/logo.webp";
import { FaBars } from "react-icons/fa";
import { IoMdSunny, IoMdMoon } from "react-icons/io";
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
  Toggle,
} from "./styling";

const Navbar = ({ toggleTheme, isDarkTheme }) => {
  const [open, setOpen] = useState(false);
  const [isToggled, setIsToggled] = useState(isDarkTheme);

  const onToggle = () => {
    setIsToggled(!isToggled);
    toggleTheme();
  };

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
            <Logo alt="logo" src={logo} /> <Span>rzou.dev</Span>
          </a>
        </NavLogo>
        <MobileIcon>
          <Toggle aria-label="darkmodeToggle" onClick={onToggle}>
            {isDarkTheme ? (
              <IoMdSunny aria-label="lightToggle" size={"1rem"} />
            ) : (
              <IoMdMoon aria-label="darkToggle" size={"1rem"} />
            )}
          </Toggle>
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
          <Toggle onClick={onToggle}>
            {isDarkTheme ? <IoMdSunny /> : <IoMdMoon />}
          </Toggle>
        </NavItems>
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
