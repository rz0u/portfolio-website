import styled, { keyframes } from "styled-components";
import heroimg from "../../assets/heroimg.webp";

export const HeroContainer = styled.div`
  background-color: ${({ theme }) => theme.bg};
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px 0px;
  transition: all 0.5s ease-in-out;
  @media (max-width: 960px) {
    padding: 66px 16px 0px;
  }
  @media (max-width: 640) {
    padding: 32px 16px 0px;
  }
  @media (min-width: 1020px) {
    height: 90vh;
  }
  z-index: 1;

  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;

export const HeroBg = styled.div`
  filter: grayscale(1);
  position: absolute;
  display: flex;
  justify-content: end;
  width: 100%;
  max-width: 1360px;
  height: 100%;
  top: 50%;
  right: 0;
  bottom: 0;
  left: 50%;
  overflow: hidden;
  padding: 0 30px;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);

  @media (max-width: 960px) {
    justify-content: center;
    padding: 0 0px;
  }
  @media (min-width: 1020px) {
    top: 65%;
  }
`;
export const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;
  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 640px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const HeroRightContainer = styled.div`
  width: 100%;
  display: flex;
  order: 2;
  justify-content: end;
  gap: 12px;
  @media (max-width: 960px) {
    order: 1;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
  }

  @media (max-width: 640px) {
    margin-bottom: 30px;
  }
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 50px;
  color: ${({ theme }) => theme.textPrimary};
  line-height: 68px;
  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;

export const TextLoop = styled.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.textPrimary};
  line-height: 68px;
  @media (max-width: 960px) {
    text-align: center;
  }
  @media (max-width: 640px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.primary};
`;

export const SubTitle = styled.div`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 42px;
  color: ${({ theme }) => theme.textPrimary + 95};

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 16px;
    line-height: 32px;
  }
  @media (max-width: 450px) {
    padding: 0 15px;
  }
`;

export const Img = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;
  border-radius: 50%;
  object-fit: cover;
  object-position: bottom;
  border: 2px solid ${({ theme }) => theme.primary};

  @media (max-width: 768px) {
    max-width: 400px;
    max-height: 400px;
  }

  @media (max-width: 640px) {
    max-width: 280px;
    max-height: 280px;
  }
`;

const morphing = keyframes`
0% {
  border-radius:  60% 40% 30% 70% / 60% 30% 70% 40%;
} 

50% {
  border-radius:  30% 60% 70% 40% / 50% 60% 30% 60%;
}

100% {
border-radius:  60% 40% 30% 70% / 60% 30% 70% 40%;
}
`;

export const Image = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 400px;
  margin: auto;
  background: url(${heroimg});
  background-size: cover;
  background-position: bottom;
  border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  box-shadow: 15px 15px 50px rgba(0, 0, 0, 0.2);
  animation: ${morphing} 8s ease-in-out infinite;
  overflow: hidden;

  @media (max-width: 768px) {
    max-width: 400px;
    max-height: 400px;
  }

  @media (max-width: 640px) {
    max-width: 280px;
    max-height: 280px;
  }
`;
