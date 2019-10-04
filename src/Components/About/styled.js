import styled from 'styled-components';

export const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 60px 30px 30px 30px;
    text-align: center;
    color: rgba(0, 0, 0, 0.7);
`
export const ProfilePic = styled.div`
    background-image: url(${require('../../common/images/Kodiri-profile-pic.PNG')});
    background-position: center;
    background-size: cover;
    
    min-height: 200px;
    min-width: 200px;
    border-radius: 50%;
`

export const AboutInfoContainer = styled.div`
    padding: 10px 30px 10px 30px;
`

export const AboutTitle = styled.h1`
    font-size: 2rem;
    font-weight: 350;
    margin: 0;
`

export const AboutParagraph = styled.p`
    font-weight: 350;
    padding: 0.5rem;
`