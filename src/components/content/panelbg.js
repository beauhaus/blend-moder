import React, {useState} from 'react';
import styled from '@emotion/styled'

const PanelBGWrap = styled('div')`
width: 100vw;
 height: 200vh; /* TODO: adjust to auto? */
text-align: right;
position: absolute;
top:0;
left: 0;
z-index; 0;
.panel-svg {
 width: 100%;
 height: 100%; 
}

.panel-bg {
 fill: rgba(202, 120, 42, 0.4);
}

h2 {
  font-size: 50px;
  
  top: 40vh;
  right: 3vw;
  position: absolute;
}


`;
const PanelBG = () => {

  
  return (
    <PanelBGWrap>
      <svg className="panel-svg" width="100%">
        <filter id='roughpaper'>
          <feTurbulence type="turbulence" baseFrequency='0.34' result='noise' numOctaves="1" />
          <feDiffuseLighting in='noise' lightingColor='#fff' surfaceScale='1' result='light'>
            <feDistantLight azimuth='350' elevation='55' />
          </feDiffuseLighting>
          <feBlend in="SourceGraphic" mode="screen" />
        </filter>
        <rect x="0" y="0" height="100%" className="panel-bg" width="100%" filter="url(#roughpaper)" />
      </svg>
      {/* <button onClick={powerToggle} role="button"> */}
      {/* <div className="on-off-light"></div> */}
      {/* </button> */}
      {/* <h2>power: {`${power}`}</h2> */}
      {/* <h1>css blender pro</h1> */}
    </PanelBGWrap>
  )
}

export default PanelBG;