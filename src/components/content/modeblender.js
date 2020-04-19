import React, { useState } from 'react';
// import styled from '@emotion/styled'
import modeBlenderStyles from './modeblender.module.scss';
import CycleBtn from './cyclebtn';
import FlipPanelBtn from './flippanelbtn';
import BlendInfoBtn from './blendinfobtn';
import BlenderFlipIcon from './benderflipicon';

// import Upgrin from '../../../static/upgrin.jpg'
// import Moon from '../../../static/moon2.jpeg'
// import BlenderFlipIcon from './benderflipicon';

const Blender = () => {
    const [blendCount, setBlendCount] = useState(0);

    const bModes = ['normal', 'screen',  'multiply', 'lighten', 'darken', 'overlay', 'color', 'color-dodge', 'color-burn', 'difference', 'exclusion', 'luminosity', 'hue', 'saturation'];
    const mBlenderClickHandler = () => {
        blendCount <= 12 ?
            setBlendCount(blendCount + 1) :
            setBlendCount(0);
        return blendCount
    }
    const dnScrollClickHandler = () => {
        console.log("dnscroll Clicked");
        return;
    }

    return (
        <div className={modeBlenderStyles.container} >
            <section className={modeBlenderStyles.imgContainer}>
                <img className={modeBlenderStyles.img} src="https://via.placeholder.com/360" alt="placeholding square" />
            </section>
            <section className={modeBlenderStyles.blendBtnContainer}>
                <FlipPanelBtn />
                <CycleBtn modeClick={mBlenderClickHandler} blendcount={blendCount} mode={bModes[blendCount]} />
                <BlendInfoBtn dnScrollClick={dnScrollClickHandler}/>
            </section>
            <section className={modeBlenderStyles.modeInfoContainer}>

            </section>
        </div >
    )
}

export default Blender;