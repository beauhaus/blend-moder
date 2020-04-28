import React, { useState } from 'react';
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import pwrbtnStyles from './pwrbtn.module.scss';


const PwrBtn = ({ path }) => {

    return (
        <div  className={pwrbtnStyles.container}>

            {path === "/" ? 
            <button className={pwrbtnStyles.btnOff}>
                <div className={pwrbtnStyles.castLight}></div>
                <Link to="/bg-page"></Link>
            </button>
                : ''}
            {path === "/bg-page" ? 
            <button className={pwrbtnStyles.btnOn}>
                <Link to="/" ></Link>
            </button>
                : ''}

        </div>

    )
}

export default PwrBtn;
