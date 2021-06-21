import styled from "styled-components";

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 20px 30px 20px;
  text-align: center;
  color: rgba(0, 0, 0, 0.7);
`;
export const ProfilePic = styled.div`
  background-image: url(${require("../../common/images/Profile-Pic.jpg")});
  background-position: center;
  background-size: cover;

  min-height: 10rem;
  min-width: 10rem;
  border-radius: 50%;
`;

export const AboutInfoContainer = styled.div`
  height: 100%;
  width: 75%;
  margin: 5px;
`;

export const AboutTitle = styled.h1`
  font-size: 2rem;
  font-weight: 350;
  margin: 0;
`;

export const AboutParagraph = styled.p`
  font-weight: 350;
  padding: 0.5rem;
`;
