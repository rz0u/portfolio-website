import React from "react";
import {
  HeroContainer,
  HeroInnerContainer,
  HeroLeftContainer,
  Title,
  TextLoop,
  Span,
  SubTitle,
  HeroRightContainer,
  Image,
} from "./styling";
import { Bio } from "../../data/constant";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <HeroContainer id="home">
      <HeroInnerContainer>
        <HeroLeftContainer>
          <Title>
            Hi, I am <br />
            {Bio.name}
          </Title>
          <TextLoop>
            I am a{" "}
            <Span>
              <Typewriter
                options={{
                  strings: Bio.roles,
                  autoStart: true,
                  loop: true,
                }}
              />
            </Span>
          </TextLoop>
          <SubTitle>{Bio.description}</SubTitle>
        </HeroLeftContainer>
        <HeroRightContainer>
          <Image />
        </HeroRightContainer>
      </HeroInnerContainer>
    </HeroContainer>
  );
};

export default Hero;
