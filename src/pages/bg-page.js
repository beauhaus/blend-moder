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
    &.home-link {
        ${'' /* border: 2px dashed fuchsia; */}
        background: radial-gradient( circle,
      #27EFF0 0%,
      #27EFF0 23%,
      rgba(0, 255, 255,0.5) 27%,
      rgba(0, 255, 255,0.1) 40%,
      rgba(0, 255, 255,0) 55%,
      rgba(0,0,0,0) 100%);
    }
}
`
const BGPage = () => {
    // console.log("XXX: ")
    return (
        <BGPageWrapper>
            <Layout>
                <Link className="home-link" to="/"/>
                {/* <PanelBG /> */}
            </Layout>
        </BGPageWrapper>
    )
}

export default BGPage;