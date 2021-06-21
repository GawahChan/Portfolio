import styled, { keyframes } from "styled-components";

const pulse = keyframes`
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.2);
    }
    100% {
        transform: scale(1);
    }
`;

export const NavigationContainer = styled.div`
  position: fixed;
  display: flex;
  flex-wrap: wrap;
  background-color: rgb(25, 25, 25);
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
`;

export const NavigationIconsContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const NavigationIcon = styled.a`
  color: white;
  margin: 0 0.5rem 0 0.5rem;

  :hover {
    color: rgba(230, 145, 15);
    transition: 0.3s;
    animation: ${pulse} 2s infinite;
  }
`;

export const NavigationMenuContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const NavigationOption = styled.h3`
  margin: 0 0.5rem 0 0.5rem;
  color: white;
  font-weight: 300;

  :hover {
    color: rgba(230, 145, 15);
    transition: 0.3s;
    animation: ${pulse} 2s infinite;
  }
`;
