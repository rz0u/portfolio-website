import React, { useState } from "react";
import logo from "../../assets/logo.png";
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
  MobileIcon1,
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
            <Logo src={logo} /> <Span>rzou.dev</Span>
          </a>
        </NavLogo>
        <MobileIcon1>
          <Toggle onClick={onToggle}>
            {isDarkTheme ? (
              <IoMdSunny size={"1rem"} />
            ) : (
              <IoMdMoon size={"1rem"} />
            )}
          </Toggle>
          <FaBars
            onClick={() => {
              setOpen(!open);
            }}
          />
        </MobileIcon1>
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
