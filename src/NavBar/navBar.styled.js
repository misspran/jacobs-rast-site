import styled from "styled-components";

export const NavBarContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    background-color: #2B303A;
    padding: 20px 10px;
    position: fixed;
    color: #D64933;
    z-index: 2;
    opacity: .9;
    position: fixed;
    top: 0;
    
    @media (max-width: 500px) {
        justify-content: space-around;
    }
`;
export const NavigationContainer = styled.div`
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
`
export const NavigationButton = styled.a`
    border: none;
    background-color: inherit;
    font-weight: 600;
    font-size: 18px;
    font-family: Roboto;
    color: inherit;
    text-decoration: none;
    margin-right: 10px;

    &:hover {
        color: white; 
    }
`;