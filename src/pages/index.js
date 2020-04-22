import React from 'react';
import Layout from '../components/scaffold/layout'
import "normalize.css"
import styled from '@emotion/styled'

const AppFrame = styled('div')`
height: auto;
min-height: 100vh;
display: grid;
grid-template-rows: 8vh 1fr;
/* below is for testing purposes only */
background: rgba(255, 0, 255, 0.5);
position: relative;
hr{
    background: #fff;
    position: absolute;
    left: 0;
    z-index: 40;
    ${'' /* border: 1px solid #fff; */}
    width: 100vw;
    &:nth-of-type(1) {
        top: 10vh;
    }
    &:nth-of-type(2) {
        top: 20vh;
    }
    &:nth-of-type(3) {
        top: 30vh;
    }
    &:nth-of-type(4) {
        top: 40vh;
    }
    &:nth-of-type(5) {
        top: 50vh;
    }
    &:nth-of-type(6) {
        top: 60vh;
    }
    &:nth-of-type(7) {
        top: 70vh;
    }
    &:nth-of-type(8) {
        top: 80vh;
    }
    &:nth-of-type(9) {
        top: 90vh;
    }
    
}
`;

const IndexPg =() => (
    <AppFrame>
    <hr/>
    <hr/>
    <hr/>
    <hr/>
    <hr/>
    <hr/>
    <hr/>
    <hr/>
    <hr/>
    <Layout>
        <h1>Home</h1>
    </Layout>    
    </AppFrame>
    );

export default IndexPg
