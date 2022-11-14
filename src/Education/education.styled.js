import styled from "styled-components"

export const Container = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    padding-bottom: 100px;
    width: 52vw;
    margin: auto;
    
    @media (max-width: 500px) {
        width: 90vw;
    }
`;

export const Text = styled.p`
    display: flex;
    text-align: start;
    margin: 10px 0;
`

export const SectionContainer = styled.div`
    padding-top: 100px;
`

