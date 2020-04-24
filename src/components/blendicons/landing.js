import React from 'react';
import styled from '@emotion/styled'
import { Link } from 'gatsby'

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
        margin: 70vh auto;
        font-size: 65px;
        opacity: 1;
        font-family: "Megrim", sans-serif;
        ${'' /* font-weight: thin; */}
        color: #362828;  /* TODO: choose a brown for text color & be done with it */
        text-shadow: 1px 1px 0.5px #47E8B3; /* light bluegreen */
        text-shadow: 2px 2px 0px #fff;
        
    }
    a {
        top: 0.5vh;
        position: absolute;
        width: 12vh;
        height: 12vh;
        z-index: 15;
        border-radius: 50%;
        ${'' /* border: 1px dashed #000; */}
    }
`;
const Landing = () => {
    // console.log("LandingWrap: ")
    return (
    <LandingWrap>         
        <Link to="bg-page" />
        <h1 className="showcase">css blendr</h1>
    </LandingWrap>
    )
}

export default Landing;
