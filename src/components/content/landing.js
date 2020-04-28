import React from 'react';
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import LandingLogo from './landinglogo';

const LandingWrap = styled('div')`
    
    width: 100vw;
    min-height: 100vh;
    height: auto;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    h1 {
        width: 100%;
        margin: 15vh auto;
        font-size: 50px;
        opacity: 1;
        font-family: "Megrim", sans-serif;
        color: #745959;
        text-shadow: 1px 1px 0.5px #47E8B3; /* light bluegreen */
        ${'' /* text-shadow: 2px 2px 0px #fff; */}
    }
    h2, i {
        width: 90%;
        margin: 40vh auto 10vh;
        font-size: 25px;
        text-align: right;
        font-family: -apple-system, Segoe UI, Roboto, Helvetica Neue, sans-serif;
        font-weight: 200;
        opacity: 1;
        color: #745959;
    }
    i {
        font-weight: 400;
    }
    svg {
        mix-blend-mode: color-burn;
        position: absolute;
        top: 8vh;
        left: -55vw;
        opacity: 1;
    }
`;
const Landing = (props) => {
    return (
    <LandingWrap>         
        <LandingLogo/>
        <h2>A web appliance<br/>for learning<br/><i>mix-blend-mode</i></h2>
        <h1 className="showcase">css blendr</h1>
    </LandingWrap>
    )
}

export default Landing;
