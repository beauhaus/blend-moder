import React , { useState } from 'react';
import styled from '@emotion/styled'
// import { Link } from 'gatsby'
import powerbtnStyles from './powerbtn.module.scss';


const PowerBtn = () => {

    return (
    <button className={powerbtnStyles.container}>
       <div className="cast-light"></div>
    </button>
    )
}

export default PowerBtn;
