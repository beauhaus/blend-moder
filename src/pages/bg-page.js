import React from 'react';
import Layout from '../components/scaffold/layout'
// import TileBG from '../components/content/tilebg' /*ipad -> desktop */
import styled from '@emotion/styled'

const BGPageWrapper = styled('div')`
    width: 100vw;
    min-height: 100vh;
    height: auto;
    position: relative;
    display: flex;
    justify-content: space-around;
    h2 {
        margin: 20vh auto;
    }
`
const BGPage = (props) => {
    return (
        <BGPageWrapper>
            <Layout >
                <h2>Page 2</h2>
            </Layout>
        </BGPageWrapper>
    )
}

export default BGPage;