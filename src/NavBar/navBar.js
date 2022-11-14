import React, { useEffect, useState } from 'react';
import {
    NavBarContainer,
    NavigationContainer,
    NavigationButton
} from './navBar.styled'


const NavBar = () => {
    const [navId, setIdName] = useState('')

    useEffect(() => {
        let element = document.getElementById(navId);
        if(element){
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, [navId]);

    return (
        <NavBarContainer>
            <NavigationContainer>
                <NavigationButton onClick={(e) => setIdName('about')}>About</NavigationButton>
                <NavigationButton onClick={(e) => setIdName('experience')}>Experience</NavigationButton>
                <NavigationButton onClick={(e) => setIdName('publication')}>Publication</NavigationButton>
                <NavigationButton onClick={(e) => setIdName('education')}>Education</NavigationButton>
                </NavigationContainer>
        </NavBarContainer>
        
    )
}

export default NavBar;