import React from 'react';
import styled from '@emotion/styled'

const PanelBGWrap = styled('div')`
width: 100vw;
 height: 200vh; /* TODO: adjust to auto? */
text-align: right;
position: relative;
.panel-svg {
 width: 100%;
 height: 100%; 
}

.panel-bg {
 fill: rgba(202, 120, 42, 0.4);
}
h1 {
  font-size: 50px;
  opacity: 0.8;
  top: 80vh;
  right: 3vw;
  position: absolute;
  font-family: "Megrim", sans-serif;
  ${'' /* font-weight: thin; */}
  color: #362828;  /* TODO: choose a brown for text color & be done with it */
  ${'' /* color: #fff; */}
  text-shadow: 1px 1px 0.5px #47E8B3; /* light bluegreen */
  text-shadow: 2px 2px 0px #fff;;
  
}
button {
  position: absolute;
  left: 40vw;
  top: 20vh;
  border-radius: 50%;
  width:100px;
  height: 100px;
  background: linear-gradient(45deg, hsl(45, 26%, 87%) 0%, #f3eedc 50%, hsl(45, 26%, 87%) 100%);
  border: 8px solid #F1F0EE;
  box-shadow: inset 0px 0px 0px 1px #b1a67d;
  filter: drop-shadow(2px 2px 4px rgba(0,0,0,0.3));
  display: grid;
  &:focus, &:active {
    outline: none;
  }
  .on-off-light {
    border-radius: 50%;
    margin: auto;
  width: 40px;
  height:  40px;
  background: transparent;
  border: 2px solid #27EFF0;
  opacity: 0.25;
  }
}



`;
const PanelBG = () => {
  // console.log("PanelBGWrap: ")
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
      <button><div className="on-off-light"></div></button>
      <h1>css blender pro</h1>
    </PanelBGWrap>
  )
}

export default PanelBG;