import React, { useState } from 'react';
import styled from '@emotion/styled'
import NormalIcon from '../blendicons/normalicon'
import ScreenIcon from '../blendicons/screenicon'
import MultiplyIcon from '../blendicons/multiplyicon'
import OverlayIcon from '../blendicons/overlayicon'
import LightenIcon from '../blendicons/lightenicon'
import DarkenIcon from '../blendicons/darkenicon'
import ColorIcon from '../blendicons/coloricon'
import ColorDodgeIcon from '../blendicons/colordodgeicon'
import ColorBurnIcon from '../blendicons/colorburnicon'
import DifferenceIcon from '../blendicons/differenceicon'
import ExclusionIcon from '../blendicons/exclusionicon'
import LuminosityIcon from '../blendicons/luminosityicon'
import HueIcon from '../blendicons/hueicon'
import SaturationIcon from '../blendicons/saturationicon'


const StyledCycleBtn = styled('div')`
      grid-column: 2;
      grid-row: 1;
      ${'' /* background: green; */}
      margin: 0;
      height: 100%;
      width: 100%;
      display: grid;
          button { 
            padding: 0;
            border: none;
            outline: none;
            background: none;
            width: 70%;
            height: 85%;
            margin: auto;
            padding: 0;
            border-radius: 15px;
            overflow: hidden;
            display: grid;
            position: relative;
            svg {
              position: absolute;
              top: 0;
              right: 0;
              left: 0;
              bottom: 0;
              ${'' /* border: 1px dashed purple; */}
              ${'' /* width: 100%; */}
              ${'' /* height: 100%; */}
              ${'' /* max-height: 100%; */}
              ${'' /* margin: auto; */}
              margin: 0;
              &.mode-icon-container {

              filter: blur(1px);
                    & #outline {
                      fill: transparent;
                      stroke: #fff;
                      stroke-width: 4;
                      stroke-dasharray: 168;
                      stroke-dashoffset: ${props => props.offsetMult};
                    }
              }
            }
      }
`;

const CycleBtn = ({ modeClick, blendcount, mode }) => {
  // const offsetMult = 743-(67* (blendcount+1));
  console.log("cyc: ", blendcount, mode)
  const renderIcon = (param) => {
    switch (param) {
      case 0:
        return <NormalIcon />;
        break;
      case 1:
        return <ScreenIcon />;
        break;
      case 2:
        return <MultiplyIcon />;
        break;
      case 3:
        return <LightenIcon />;
        break;
      case 4:
        return <DarkenIcon />;
        break;
      case 5:
        return <OverlayIcon />;
        break;
      case 6:
        return <ColorIcon />;
        break;
      case 7:
        return <ColorDodgeIcon />;
        break;
      case 8:
        return <ColorBurnIcon />;
        break;
      case 9:
        return <DifferenceIcon />;
        break;
      case 10:
        return <ExclusionIcon />;
        break;
      case 11:
        return <LuminosityIcon />;
        break;
      case 12:
        return <HueIcon />;
        break;
      case 13:
        return <SaturationIcon />;
        break;
      case 14:
        return <NormalIcon />;
        break;
      default:
        break;
    }
  }
  return (

    <StyledCycleBtn offsetMult={168 - (12 * blendcount)} >
      <button onClick={modeClick} >
        {renderIcon(blendcount)}        
        <svg className="mode-icon-container" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" preserveAspectRatio="none">
          <rect id="outline" width="100%" height="87%" rx="5px" ry="5px" />
        </svg>
      </button>
    </StyledCycleBtn>
  )
}

export default CycleBtn;
