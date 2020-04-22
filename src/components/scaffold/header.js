import React, { useState } from 'react';
import { css } from '@emotion/core'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

const PowerBtn = styled('button')`
 --base-color: #e9dfd7;
 --power-on: #3dddc2;
 --power-on-active: rgba(69, 238, 210, 0.5);
 --power-trim: #bbb;
 border: none;
 &:focus {
  outline: none;
  border: 3px solid lightblue;
 }
 &:active {
  box-shadow: inset 5px 5px 6px 0px #fff, 2px 2px 3px -2px #000;
  background: radial-gradient(
   closest-side,
   var(--power-on) 0%,
   var(--power-on) 30%,
   var(--power-on-active) 31%,
   var(--base-color) 50%,
   var(--base-color) 82.5%,
   var(--power-trim) 83%,
   var(--base-color) 83.5%,
   #e6d6c9 100%
  );
 }
 height: 18vw;
 width: 18vw;
 border-radius: 50%;
 box-shadow: inset 3px 3px 5px 0px #fff, 5px 5px 5px -2px #000;
 background: radial-gradient(
  closest-side,
  var(--base-color) 0%,
  var(--base-color) 26%,
  var(--power-on) 27%,
  var(--power-on) 29%,
  var(--base-color) 30%,
  var(--base-color) 82.5%,
  var(--power-trim) 83%,
  var(--base-color) 83.5%,
  #e6d6c9 100%
 );
`

const NavLink = styled(Link)`
  height: 18vw;
  width: 18vw;
  border-radius: 50%;
  position: absolute;
  left: 0;
  top: 0;
  background: radial-gradient(
   ellipse at 25% 25%,
   rgba(255, 255, 255, 0.5) 5%,
   rgba(237, 233, 232, 0.5) 40%,
   rgba(237, 233, 232, 0) 50%
  );
    text-decoration: none;
    &:focus {
  outline: none;
    }
`;

const Header = () => {
    const [power, setPower] = useState(false)

    const powerToggle = () => {
        console.log("pwer click", power)
        setPower(!power)
    }
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
        display: flex;
        height: 100%;
        width: 100%;
        justify-content: center;
        justify-content: space-around;
        align-items: center;
        `}>
                <PowerBtn onClick={powerToggle}>
                {power? <NavLink className="cast-light" to="/" />:
                <NavLink className="cast-light" to="/bg-page" />}
                </PowerBtn>
                {/* <NavLink to="/" activeClassName="current-page" fontWeight={`300`}>Home</NavLink> */}
                {/* <NavLink to="/about" activeClassName="current-page">about</NavLink> */}
                {/* <NavLink to="/xpage" activeClassName="current-page">xpage</NavLink> */}
                {/* <NavLink to="/blend-page" activeClassName="current-page">blends</NavLink> */}
                {/* <NavLink to="/modeblenderpage" activeClassName="current-page">MB</NavLink> */}
            </nav>
        </header>
    )
}

export default Header;