import React from 'react';
import { css } from '@emotion/core'
import OnBtn from '../content/onbtn'

const Header = ({power}) => {
    console.log(`headerPwr: ${power}`)
    return (
        <header css={css`
    /* calc is based on desired max-width of main
    cf: https://frontendmasters.com/courses/gatsby/creating-styling-the-header/
     */
    position: absolute;
    top: 0;
    left: 0;
    height: 12vh;
    width: 100%;
    z-index: 10;
    `}>
            <nav css={css`
            height: 100%;
            width: 100%;
            display: flex;
            justify-content: space-around;
            align-items: center;
        `}>
                <OnBtn/>

            </nav>
        </header>
    )
}

export default Header;



                {/* <NavLink to="/" activeClassName="current-page" fontWeight={`300`}>Home</NavLink> */}
                {/* <NavLink to="/about" activeClassName="current-page">about</NavLink> */}
                {/* <NavLink to="/xpage" activeClassName="current-page">xpage</NavLink> */}
                {/* <NavLink to="/blend-page" activeClassName="current-page">blends</NavLink> */}
                {/* <NavLink to="/modeblenderpage" activeClassName="current-page">MB</NavLink> */}

                