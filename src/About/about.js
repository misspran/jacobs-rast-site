import React from 'react';
import photo from '../files/headshot.jpg';
import linkedinLogo from '../files/linkedin.svg'
import emailLogo from '../files/email.svg';
import cv from '../files/rast_CV.pdf';
import {
    AboutPageContainer,
    Photo,
    PhotoBackground,
    AboutContent,
    AboutText,
    Name,
    DownloadCV,
    Divider,
    SocialLinks,
    SubTopics
} from './about.styled'

const About = () => {
    return (
        <AboutPageContainer id="about">
            <PhotoBackground />
            <Photo src={photo} alt="Jacob Rast Picture" width="200px" height="200px"></Photo> 
            <AboutContent>
                <Name>Jacob Rast </Name>
                <SocialLinks href="https://www.linkedin.com/in/jacobrast/"><img src={linkedinLogo} alt="Jacob Rast Linkedin" width="30px" height="30px"/></SocialLinks> 
                <SocialLinks href="mailto:jacob.rast@gmail.com"> <img src={emailLogo} alt="Jacob Rast Email" width="30px" height="30px"/></SocialLinks>    
                <AboutText>Hello, I'm Jacob. Master student in Biomedical Engineering at Carnegie Mellon University.</AboutText>
                <SubTopics>Technical Skills</SubTopics>
                <AboutText>Machine Learning, Python, PyTorch, Tensorflow</AboutText>
                <DownloadCV href={cv} download="rast_CV.pdf">Download CV</DownloadCV>
            </AboutContent>
            <Divider/>
        </AboutPageContainer>
    )
}

export default About;