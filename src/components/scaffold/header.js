import React from 'react';
import { css } from '@emotion/core'
import PwrBtn from '../content/pwrbtn'


const Header = ({path}) => {
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
                <PwrBtn path={path}/>
            </nav>
        </header>
    )
}

export default Header;

