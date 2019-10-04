import styled from 'styled-components';

export const HeaderContainer = styled.div`
  background-image: linear-gradient(rgba(44, 14, 0, 0.2), rgba(0,0,0,0.9)), url(${require("../../common/images/PortugalPhoto.JPG")});
  background-position: center;
  background-size: cover;
  min-height: 100vh;
  min-width: 100vw;
`

export const HeaderOverlay = styled.div`
    padding: 3rem 2rem 3rem 2rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    color: white;
    text-align: center;
`

export const HeaderTitle = styled.h1`
    margin: 1rem;
    font-weight: 300;
    font-size: 3rem;
`

export const HeaderSubtitle = styled.h2`
    font-weight: 200;
    font-size: 1.5rem;
    margin: 0.5rem;
`   
