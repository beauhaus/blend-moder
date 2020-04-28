import React, { useState } from 'react';
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
`;

const IndexPg = (props) => {
    // console.log("p> Lay index: ", props)
    const [power, setPower] = useState('')

    const bgPgLinkClickHandler = () => {
        console.log("bgPgLinkClickHandler!")
        setPower("on")
    }

    return (
        <AppFrame>
            <Layout power={power}>
                <Landing bgPgLinkClick={bgPgLinkClickHandler} props={props} />
            </Layout>
        </AppFrame>
    )
};

export default IndexPg
