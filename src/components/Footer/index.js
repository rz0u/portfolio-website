import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Bio } from "../../data/constant";
import {
  FooterContainer,
  FooterWrapper,
  Logo,
  Nav,
  NavLink,
  SocialMediaIcon,
  SocialMediaIcons,
  Copyright,
} from "./styling";

function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo>Rayhan Zou</Logo>
        <Nav>
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#stack">Stack</NavLink>
          <NavLink href="#projects">Projects</NavLink>
        </Nav>
        <SocialMediaIcons>
          <SocialMediaIcon
            aria-label={Bio.github}
            href={Bio.github}
            target="display"
          >
            <GitHubIcon />
          </SocialMediaIcon>
          <SocialMediaIcon
            aria-label={Bio.twitter}
            href={Bio.twitter}
            target="display"
          >
            <TwitterIcon />
          </SocialMediaIcon>
          <SocialMediaIcon
            aria-label={Bio.linkedin}
            href={Bio.linkedin}
            target="display"
          >
            <LinkedInIcon />
          </SocialMediaIcon>
          <SocialMediaIcon
            aria-label={Bio.insta}
            href={Bio.insta}
            target="display"
          >
            <InstagramIcon />
          </SocialMediaIcon>
        </SocialMediaIcons>
        <Copyright>&copy; 2024 Rayhan Zou. All rights reserved.</Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;
