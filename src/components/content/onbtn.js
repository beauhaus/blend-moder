import React , { useState } from 'react';
import styled from '@emotion/styled'
// import { Link } from 'gatsby'
import onBtnStyles from './onBtn.module.scss';


const OnBtn = () => {

    return (
    <button className={onBtnStyles.container}>
       <div className="cast-light"></div>
    </button>
    )
}

export default OnBtn;
