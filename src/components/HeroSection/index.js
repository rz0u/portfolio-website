import React from "react";
import {
  HeroContainer,
  HeroBg,
  HeroInnerContainer,
  HeroLeftContainer,
  Title,
  TextLoop,
  Span,
  SubTitle,
  HeroRightContainer,
  Img,
} from "./styling";
import { Bio } from "../../data/constant";
import Typewriter from "typewriter-effect";
import HeroImg from "../../assets/heroimg.jpg";
import HeroBgAnimation from "../HeroBgAnimation";

const Hero = () => {
  return (
    <div id="home">
      <HeroContainer>
        <HeroBg>
          <HeroBgAnimation />
        </HeroBg>
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
            <Img src={HeroImg} alt="HeroImage" />
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  );
};

export default Hero;
