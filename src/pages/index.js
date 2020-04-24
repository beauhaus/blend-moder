import React from 'react';
import Layout from '../components/scaffold/layout'
import "normalize.css"
import styled from '@emotion/styled'
import Landing from '../components/content/landing';

const AppFrame = styled('div')`
width: 100vw;
min-height: 100vh;
height: auto;
display: grid;
grid-template-rows: 8vh 1fr;
position: relative;
display: flex;
justify-content: space-around;
  

/* below is for testing purposes only */
background: rgba(255, 0, 255, 0.5);
position: relative;
hr{
    display: none;
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
    
        <Landing/>
    </Layout>    
    </AppFrame>
    );

export default IndexPg
