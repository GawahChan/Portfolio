import styled, { keyframes } from "styled-components";

const pulse = keyframes`
    0% {transform: scale(1)}
    50% {transform: scale(1.05)}
    100% {transform: scale(1)}
`;

export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  color: rgba(0, 0, 0, 0.7);
`;

export const ProjectsHeader = styled.h1`
  margin: 0;
  font-size: 2rem;
  padding: 0.5rem;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.7);
`;

export const ProjectsParagraph = styled.p`
  margin: 0;
  font-weight: 350;
  padding: 0.5rem;
`;

export const ProjectsListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

export const ProjectCardContainer = styled.div`
  flex: 1;
  min-width: 250px;
  box-shadow: 5px 5px 5px #999999;
  margin: 0.5rem;

  background-image: ${props => {
    return props.img
      ? `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.9)), url(${require(`../../common/images/${props.img}`)})`
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

  :hover {
    color: orange;
    transition: 1s;
  }
`;
