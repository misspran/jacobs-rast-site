import styled from "styled-components";

export const AboutPageContainer = styled.div`
    min-height: 100%;
    color: #D64933;
    display: block;
`;

export const Photo = styled.img`
    border-radius: 50%;
    border: solid 10px white;
    z-index: 1;
    position: relative;
    top: -150px; 
`;

export const PhotoBackground = styled.div`
    width: 100%;
    background: grey;
    opacity: .7;
    height: 300px;
`
export const AboutContent = styled.div`
    top: -120px; 
    position: relative;
    min-height: 300px;
    width: 50vw;
    margin: auto;
    @media (max-width: 500px) {
        width: 90vw;
    }
`;
export const AboutText = styled.p`
    color: #2B303A;
    padding-bottom: 20px;
`

export const Name = styled.h1`
    font-weight: 600;
    color: #D64933;
`

export const SubTopics = styled(Name)`
    font-size: 20px;
`

export const DownloadCV = styled.a`
    margin-top: 20px;
    padding: 10px;
    border: solid 2px #D64933;
    border-radius: 5px;
    color: #D64933;
    text-decoration: none;
    &:hover {
        background-color: #D64933;
        color: white; 
        border: solid 1px #D64933;
    }
`

export const Divider = styled.div`
    border-bottom: solid 4px grey;
    width: 55vw;
    margin: 10px auto 0 auto;
    @media (max-width: 500px) {
        width: 90vw;
    }
`;

export const SocialLinks = styled.a`
    margin-right: 10px;
    color: #D64933;
    text-decoration: none;
`