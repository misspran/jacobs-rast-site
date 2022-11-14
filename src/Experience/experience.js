import React from 'react';
import { Container, Text, SectionContainer} from '../Education/education.styled';
import { Name, Divider } from '../About/about.styled';
import { SubTitle, Description } from './experience.styled';

const Experience = () => {
    return (
        <SectionContainer id="experience">
        <Name>Experience</Name>
        <Container>
            <SubTitle>Research</SubTitle>
            <Text>Graduate Researcher, Carnegie Mellon University</Text>
            <Text>Pittsburgh, PA</Text>
            <Text>MinibioLab, PI: SiyangZheng</Text>
            <Text>Aug. 2020 – Present</Text>
            <Description>
                Two year collaboration for research-oriented masters program thesis. Major thrusts of the lab include development of next generation diagnostic assays and medical devices. Personal contributions to lab research efforts involved investigation into the use of third generation long read sequencing for cfDNA tissue of origin localization, assistance investigating the feasibility of computational methods for the analysis of time series multiomics data for biomarker discovery, and development of printed circuit boards (PCBs) for realization of continuous blood sampling device. Additional efforts include organizing lab events and maintaining lab website.
            </Description>
            <SubTitle></SubTitle>
            <Text>Undergraduate Researcher, Shanghai Jiaotong University</Text>
            <Text>Shanghai, China</Text>
            <Text>Bio-CircuitsandSystemsLab, PI: Wang,Guoxing </Text>
            <Text>May. 2015 – July2015</Text>
            <Description> Internship in lab focused on the realization of aretinal prosthetic. Built a demonstration system of prosthetic FPGA with graduate student adviser. </Description>
            <SubTitle></SubTitle>
            <SubTitle>Work</SubTitle>
            <Text>Embedded Software Engineer</Text>
            <Text>Jan. 2018 – Sept. 2019</Text>
            <Text>Altran at Cisco Systems</Text>
            <Text>Shanghai, China</Text>
            <SubTitle></SubTitle>
            <Text>Internship</Text>
            <Text>Jan. 2017 – May2017</Text>
            <Text>Altran at Cisco Systems</Text>
            <Text>Shanghai, China</Text>
        </Container>
        <Divider />
        </SectionContainer>
    )
}

export default Experience;