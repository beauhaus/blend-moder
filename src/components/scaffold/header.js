import React from 'react'
import { css } from '@emotion/core'
import { Link } from 'gatsby'
import styled from '@emotion/styled'


// import Listen from '../../static/listening.jpg'

const NavLink = styled(Link)`
    color: #bababa;
    height: 3vh;
    font-size: 1.5rem;
    font-weight: ${props => props.fontWeight || '100'};
    margin-right: 1rem;
    text-decoration: none;
    
    &.current-page {
        border-bottom:1px solid #ddd;
    }
    &:first-of-type {
        margin-right: 4rem;
    }
    &:last-of-type {
        margin-right: 0;
    }
`;

const Header = () => (
    <header css={css`
    /* calc is based on desired max-width of main
    cf: https://frontendmasters.com/courses/gatsby/creating-styling-the-header/
     */
    background: rgba( 130, 23, 25, 1);
    position: position;
    top: 0;
    left: 0;
    z-index: 10;
    `}>
        <nav>
            <NavLink to="/" activeClassName="current-page" fontWeight={`300`}>Home</NavLink>
            {/* <NavLink to="/about" activeClassName="current-page">about</NavLink> */}
            {/* <NavLink to="/xpage" activeClassName="current-page">xpage</NavLink> */}
            <NavLink to="/blend-page" activeClassName="current-page">blends</NavLink>
            <NavLink to="/modeblenderpage" activeClassName="current-page">MB</NavLink>
            <NavLink to="/bg-page" activeClassName="current-page">BG</NavLink>
            
        </nav>
    </header>
)

export default Header;