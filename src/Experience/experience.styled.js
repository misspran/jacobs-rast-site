import styled from "styled-components";
import { Name } from '../About/about.styled'


export const SubTitle = styled(Name)`
    font-size: 22px;
    grid-column: span 2;
    display: flex;
`;

export const Description = styled.p`
    grid-column: span 2;
    display: flex;
    text-align: start;
`;

export const Container = styled.div`
    padding-top: 100px;
`