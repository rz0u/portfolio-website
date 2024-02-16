import styled from "styled-components";

export const Nav = styled.div`
  background: ${({ theme }) => theme.bg};
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  @media (max-width: 960px) {
    trastion: 0.8s all ease;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 30px;
  max-width: 1200px;
`;

export const NavLogo = styled.a`
  width: 80%;
  padding: 0 6px;
  display: flex;
  justify-content: start;
  align-items: center;
  text-decoration: none;
  @media (max-width: 640px) {
    padding: 0 0px;
  }
`;

export const Logo = styled.img`
  height: 1.5rem;
  padding-right: 0.2rem;
  color: ${({ theme }) => theme.textPrimary};
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 10%;
    right: 3%;
    transform: translate(-100%, 50%);
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.textPrimary};
  }
`;

export const NavItems = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 32px;
  list-style: none;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.textPrimary};
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  width: 80%;
  height: 100%;
  padding: 0 6px;
  @media screen and (max-width: 640px) {
    display: none;
  }
`;

export const Toggle = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.textPrimary};
  border: 1.8px solid ${({ theme }) => theme.textPrimary};
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  padding: 0px 5px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  height: 70%;
  transition: all 0.4s ease-in-out;
  &:hover {
    background-color: ${({ theme }) => theme.textPrimary};
    color: ${({ theme }) => theme.bg};
  }
  @media screen and (max-width: 640px) {
    font-size: 0.8rem;
  }
`;

export const Span = styled.span`
  padding: 0px 4px;
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.textPrimary};
`;

export const MobileMenu = styled.div`
  visibility: ${({ open }) => (open ? "visible" : "hidden")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 50px;
  position: absolute;
  top: 80px;
  right: 0;
  width: 100%;
  height: 40vh;
  padding: 12px 40px 24px 40px;
  background: ${({ theme }) => theme.bg};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  transition: all 0.3s ease-in-out;
  border-radius: 0 0 20px 20px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
  opacity: ${({ open }) => (open ? 1 : 0)};
  z-index: ${({ open }) => (open ? 1 : -1)};
`;

export const MobileLinks = styled.a`
  color: ${({ theme }) => theme.textPrimary};
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.6s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;
