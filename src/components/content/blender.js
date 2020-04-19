import React, { useState } from 'react';
import styled from '@emotion/styled'
import blenderStyles from './blender.module.scss';

import Upgrin from '../../../static/upgrin.jpg'
import Moon from '../../../static/moon2.jpeg'
import BlenderFlipIcon from './benderflipicon';

const BlenderBtn = styled('button')`
    color: yellow;
    height: 3vh;
    font-size: 0.9rem;
    color: ${props => (props.blendVal === props.value ? '#ffa76c' : '#ce8f66')};
    background-image: ${props => (props.blendVal === props.value ? 'linear-gradient(0deg, #393b46 30%, #555968 80%)' : 'linear-gradient(0deg, #4f5261 30%, #6c7185 120%)')};
    font-weight: 200;
    border: 1px solid #2f3442;
    border-top-color: ${props => (props.blendVal === props.value ? '#2f3442' : '#8a99c2')};
    text-shadow:  ${props => (props.blendVal === props.value ? '#fc0 0px 0 4px' : 'unset')};
    border-radius: 5px;
    margin: 0.4rem;
    text-decoration: none;
    outline: none;
`;



const Blender = ({ blenderClick, blendVal, flipper, flip }) => {
    // console.log("props", props)
    const [blendMode, setBlendMode] = useState('normal')
    // const [focusColor, setFocusColor] = useState('coral')

    const bModes = ['multiply', 'screen', 'overlay', 'darken', 'lighten', 'color-dodge', 'color-burn', 'difference', 'exclusion', 'luminosity', 'hue', 'saturation', 'color', 'normal'];

    return (
        <div className={blenderStyles.container}>
            <section>
                <div className={blenderStyles.btnContainer}>
                    {bModes.map((elem, idx) => (
                        <BlenderBtn key={idx} blendVal={blendVal} value={elem} onClick={(e) => blenderClick(e.target.value)}>{elem}</BlenderBtn>
                    ))}
                </div>
                <article>
                    <h1>mix-blend-modes</h1>
                    <p>Interacting colors of one image and the one beneath it.</p>
                </article>
                <svg viewBox="0 0 500 600" width="80%" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" preserveAspectRatio="none">
                    {flip === "A" ?
                        <g>
                            <image className="img-back" xlinkHref={Moon} width="80%" height="80%" />
                            <image className="img-front" xlinkHref={Upgrin} width="80%" height="80%" style={{ mixBlendMode: blendVal }} />
                        </g> :
                        <g>
                            <image className="img-back" xlinkHref={Upgrin} width="80%" height="80%" />
                            <image className="img-front" xlinkHref={Moon} width="80%" height="80%" style={{ mixBlendMode: blendVal }} />
                        </g>}
                </svg>
                <aside>
                    <button className={blenderStyles.flipper} onClick={flipper}>
                        <BlenderFlipIcon />
                    </button>

                </aside>
            </section>
        </div >
    )
}

export default Blender;