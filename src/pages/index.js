import React from 'react';
import Layout from '../components/scaffold/layout'
import "normalize.css"
import styled from '@emotion/styled'

const AppFrame = styled('div')`
height: auto;
min-height: 100vh;
display: grid;
grid-template-rows: 8vh 1fr;
`;

const IndexPg =() => (
    <AppFrame>
    <Layout>
        <h1>Home</h1>
    </Layout>    
    </AppFrame>
    );

export default IndexPg
