import React from 'react';
import { Link } from 'gatsby'
import Layout from '../components/scaffold/layout'
// import TileBG from '../components/content/tilebg' /*ipad -> desktop */
// import PanelBG from '../components/content/panelbg'
import styled from '@emotion/styled'

const BGPageWrapper = styled('div')`
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
`
const BGPage = () => {
    // console.log("XXX: ")
    return (
        <BGPageWrapper>
            <Layout>
                <Link to="/"/>
                {/* <PanelBG /> */}
            </Layout>
        </BGPageWrapper>
    )
}

export default BGPage;