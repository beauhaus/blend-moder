import React from 'react';
import styled from '@emotion/styled'

const PanelBGWrap = styled('div')`
width: 100vw;
 height: 200vh; /* TODO: adjust to auto? */
.panel-svg {
 width: 100%;
 height: 100%; 
}

.panel-bg {
 fill: rgba(202, 120, 42, 0.4);
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
    </PanelBGWrap>
  )
}

export default PanelBG;