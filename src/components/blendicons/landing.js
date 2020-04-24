import React from 'react';
import styled from '@emotion/styled'
import { Link } from 'gatsby'

const LandingWrap = styled('div')`
    width: 100vw;
    min-height: 100vh;
    height: auto;
    position: relative;
    display: flex;
    justify-content: space-around;

    a {
        margin-top: 0.5vh;
        position: relative;
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
    </LandingWrap>
    )
}

export default Landing;
