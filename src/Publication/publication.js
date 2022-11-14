import React from 'react';
import { Container, SectionContainer } from '../Education/education.styled';
import { Name, Divider } from '../About/about.styled';
import { Description } from '../Experience/experience.styled';

const Publication = () => {
    return (
        <SectionContainer id="publication">
            <Name>Publication</Name>
            <Container>
                <Description>
                <p>Kim, J., <b>Rast, J.</b> ,He, H., and Zheng, S-Y. (YearPending). <i>Capture and Concentration of Circulating Cancer-Associated Extracellular Vesicles. In Circulating Tumor Cells: Advances in Liquid Biopsy Technologies, Second Edition. NewYork, NY:Springer (submitted)</i></p>
                </Description>
            </Container>
            <Divider />
        </SectionContainer>
    )
}

export default Publication;