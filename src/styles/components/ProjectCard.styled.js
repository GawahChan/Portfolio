import styled, { keyframes } from "styled-components";

const pulse = keyframes`
    0% {transform: scale(1)}
    50% {transform: scale(1.05)}
    100% {transform: scale(1)}
`;

export const ProjectCardContainer = styled.div`
  flex: 1;
  min-width: 250px;
  box-shadow: 5px 5px 5px #999999;
  margin: 0.5rem;
  border-radius: 3px;

  background-image: ${(props) => {
    return props.img
      ? `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.9)), url(${require(`../../common/images/${props.img}`)})`
      : "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.9))";
  }};
  background-position: center;
  background-size: cover;

  :hover {
    animation: ${pulse} 3s infinite;
  }
`;

export const Overlay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 0.5rem;
  text-align: center;
`;
export const OverlayText = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  color: white;
  text-decoration: none;

  :hover {
    color: orange;
    transition: 1s;
  }
`;

export const OverlayTitle = styled.h2`
  flex: 1;
  font-size: 1.5rem;
  font-weight: 500;
  margin: 0.5rem 0 0.5rem 0;
`;

export const OverlaySubtitle = styled.p`
  flex: 1;
  margin: 1rem 0 1rem 0;
`;

export const OverlayIcon = styled.a`
  color: white;
  margin: 1rem;
  cursor: pointer;

  :hover {
    color: orange;
    transition: 1s;
  }
`;
