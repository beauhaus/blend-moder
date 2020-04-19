import React from 'react'
import { Global, css } from '@emotion/core'
import Helmet from 'react-helmet'
import GlobalStylesImport from './layout-global'
import layoutMainImport from './layout-main'
import Header from './header'
import useSiteMetadata from '../../hooks/use-site-metadata'



/* gets emotion styles from separate files */
const GlobalStyles = css`${GlobalStylesImport}`;
const cssMain = css`${layoutMainImport}`;

const Layout = ({ children }) => {
    
 
const {title, desc} = useSiteMetadata();



    return (
        <>
            <Global styles={GlobalStyles} />
            <Helmet>
                <html lang="en"/>
                <title>SVG Experiments</title>
                <meta name={title} content={desc}/>
            </Helmet>
            <Header />
            <main css={cssMain}>{children}</main>
        </>)
}


export default Layout;


/*
for reference:
https://frontendmasters.com/courses/gatsby/styling-the-main-layout/

*/