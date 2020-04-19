import React, { useState } from 'react';
import styled from '@emotion/styled'
import useSiteMetadata from '../../hooks/use-site-metadata';

const BlendInfoBtn = styled('div')`
      ${'' /* background: purple; */}
      grid-column: 2;
      grid-row: 2;
      margin: 0;
      height: 100%;
      width: 100%;
      display: grid;
 button {
      padding:0;
      background: rgba(23,252, 128, 0);
      border-width: 0;
      width: 90%;
      height: 90%;
      margin: auto;
      padding: 0;
      ${'' /* overflow: hidden; */}
      outline: none;
      overflow: visible;

    svg {
      width: 100%;
      height: 100%;
      margin: 0;
      overflow: visible;
      ${'' /* filter: blur(1px); */}
    }
 
 }
`;
const BlendInfo = ({ dnScrollClick, blendcount, mode }) => {
  
  return (
    <BlendInfoBtn>
    <button onClick={dnScrollClick} >

      <svg className="info-btn-icon" xmlns="http://www.w3.org/2000/svg" viewBox="-5 -5 50 50" preserveAspectRatio="none">
      <filter id="shadow" >
      <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor="rgba(255, 248, 183, 0.7)"/>
    </filter>
        <polygon fill="#ff9b18" points="20 32 0 8 40 8"  filter="url(#shadow)"/>
      </svg>
      
  

 
    </button>
    </BlendInfoBtn>
    )
}

export default BlendInfo;
