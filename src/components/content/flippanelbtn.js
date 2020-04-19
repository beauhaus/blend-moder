import React, {useState} from 'react';
import styled from '@emotion/styled'
// import useSiteMetadata from '../../hooks/use-site-metadata';

const StyledFlipPanel = styled('div')`
grid-column: 1;
grid-row: 1/-1;
background: coral;
margin: 0;
height: 100%;
width: 100%;
     button {
      width: 100%;
      height: 100%;
      ${'' /* margin: auto; */}
      padding: 0;
      border-radius: 11px;
      overflow: hidden;
      outline: none;

    svg {
      width: 100%;
      height: 100%;
      fill-opacity: 0.5;
      margin: 0;
      stroke: #fff;
      stroke-width: 4;
    }
     }

`;
const FlipBtn = () => {

return (
<StyledFlipPanel >
  <button>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" preserveAspectRatio="none">            
            <rect width="100%" height="100%" fill="slateblue" rx="15" ry="15"/>
        </svg>
      </button>
    </StyledFlipPanel>
    )
}

export default FlipBtn;