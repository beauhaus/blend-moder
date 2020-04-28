import React from 'react'
import { Global, css } from '@emotion/core'
import Helmet from 'react-helmet'
import GlobalStylesImport from './layout-global'
import layoutMainImport from './layout-main'
import Header from '../components/scaffold/header'
import PanelBG from '../components/content/panelbg'
import useSiteMetadata from '../hooks/use-site-metadata'
import Transition from '../components/transition'

/* gets emotion styles from separate files */
const GlobalStyles = css`${GlobalStylesImport}`;
const cssMain = css`${layoutMainImport}`;

const Layout = (props) => {
    const {power, children, location} = props;
    const path = location.pathname;
    
    const { title, desc } = useSiteMetadata();
    return (
        <>
            <Global styles={GlobalStyles} />
            <Helmet>
                <html lang="en" />
                <title>SVG Experiments</title>
                <meta name={title} content={desc} />
            </Helmet>
            <Header power={power} path={path}/>
            <PanelBG />

            <Transition location={location}>
            <main css={cssMain}>
                {children}
            </main>
            </Transition>
        </>)
}


export default Layout;


/*
for reference:
https://frontendmasters.com/courses/gatsby/styling-the-main-layout/

*/