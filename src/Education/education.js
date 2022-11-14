import React from 'react';
import { Container, Text, SectionContainer } from './education.styled';
import { Name, Divider } from '../About/about.styled';

const Education = () => {
    return (
        <SectionContainer id="education">
            <Name>Education</Name>
            <Container>
                <Text>M.S. in Biomedical Engineering, Carnegie Mellon University</Text>
                <Text>Aug. 2020 – Present</Text>
                <Text>B.S. in Electrical Engineering, New York University Shanghai</Text>
                <Text>Sept. 2013 – May 2017</Text>
            </Container>
            <Divider />
        </SectionContainer>
    )
}

export default Education;