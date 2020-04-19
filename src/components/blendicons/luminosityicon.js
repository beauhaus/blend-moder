import React from 'react';
import styled from '@emotion/styled'

const LuminosityIconWrap = styled('svg')`
overflow: hidden;
#cover {
  mix-blend-mode: overlay;
  opacity: 0.8; 
}
.st0,
    .st1 {
      fill: none;
      stroke: #fff;
      stroke-width: 3;
    }

    .st1 {
      display: none;
      stroke-width: 4
    }
    #rays {
  transform-origin: 50% 50%;
  transform: translate(36%, 38%) scale( 2, 2);
  
}
`;
const LuminosityIcon = () => {
    // console.log("LuminosityIconWrap: ")
    return (<LuminosityIconWrap xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 320">
        <description>Luminosity</description>

        <filter id="lightFilter">
            <feDiffuseLighting id="s" surfaceScale="5" diffuseConstant="5" lightingColor="#fff" x="0%" y="0%" width="100%" height="100%" result="diffuseLighting3">
                <fePointLight id="light" x="180" y="210" z="16" />
            </feDiffuseLighting>
        </filter>

        <rect x="0" y="0" width="100%" height="100%" fill="#000" filter="url(#lightFilter)" />
        <rect id="cover" x="0" y="0" width="100%" height="100%" fill="#000" />
        <g id="blenderbody_1_">


            <g id="base_1_">
                <path d="M107.18 277.73c33.6 10.32 67.74 18.37 102.41 24.17 2.4.57 4.84-1.09 5.45-3.69 6.44-9.35-103.94-27.02-105.63-29.91-5.59-1.4-7.9 8.19-2.23 9.43z" className="st0" />
                <path d="M99.86 266.06c38.31 11.08 77.08 20.22 116.3 27.45 5.95 1.37 9.65-14.27 3.71-15.71 0 0-9.74 6.32-60.72-6.7-58.32-12.44-54.38-29.13-61.46-15.23-1.29 3.62-1.32 9.53 2.17 10.19z" className="st0" />
            </g>
            <path d="M117.52 216.06s-25.46 29.45-25.53 33.85-1.26 8.48-1.26 8.48M83.74 253.4l8.25-3.5M225.64 244.27s10.51 37.48 8.71 41.49-2.47 8.21-2.47 8.21M240.33 292.43l-5.98-6.67" className="st1" />
        </g>
        <g id="pitcher_1_">
            <path d="M276.32 160.58c21.21-28.78 72.76-89.9 8.53-85.79l-6.44 4s-.82 8.58-.73 10.87c46.92-26.64-2.18 62.43-17.35 65.77-2.84.62-15.09-.93-16.19.14-2.65 2.58-6.79 9.61-6.79 9.61 8.89-8.2 24.91 1.57 38.97-4.6zM230.05 184.14c.51-2.17-1.41-4.47-4.28-5.15-27.18-5.14-53.8-11.4-79.84-18.84-6.72-1.66-8.64 6.32-1.85 7.84" className="st0" />
            <path d="M145.92 160.15l79.54 20.15c25.36-31.66 44.38-64.86 54.79-100.16-.67 2.83-127.33-27.29-142.33-33.59-15.31-4.99 4.53 12.26 3.6 18.67-3.13 21.6.18 69.35 4.4 94.93zM158.8 152.16c-4.84-15.59-8.37-60.44-5.61-77.18M152.33 74.77l21.69 5.12M151.56 88.52l10.67 2.52M152.87 99.86l10.67 2.52M153.72 111.1l8.68 2.04M155.03 122.44l10.67 2.52M156.35 131.03l6.94 1.63M157.65 142.37l15.63 3.68M159.79 152.53l10.68 2.52" className="st0" />
        </g>
        <g id="top_1_">
            <path d="M194.34 43.95l38.05 9.25c6.98 2.24 8.67-.28 7.03-4.38 1.06-12.14-32.99-15.4-42.29-16.36-3.11-.75-6.26 1.2-7.03 4.38-4.38 2.8-1.83 6.05 4.24 7.11z" className="st0" />
            <path d="M276.61 71.82c4.48-10.23-131.12-43.45-132.67-32.25-56.06-.46 157.44 54.82 132.67 32.25z" className="st0" />
        </g>
        <path id="faceback_1_" fill="#fff" stroke="#fff" d="M109.41 257.22c14.27 2.42 109.63 35.88 112.87 18.68l4.74-38.46-2.12-42.51c.98-4.16-1.33-8.27-5.16-9.18l-71.17-16.8c-3.83-.9-7.74 1.74-8.72 5.9l-21.27 35.77-14.33 37.41c-.99 4.17 1.32 8.28 5.16 9.19z" />
        <g>

            <radialGradient id="yellowish" cx="357.5273" cy="289.2716" r="140" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#000" />
                <stop offset="0.5" stopColor="purple" stopOpacity="0.2" />
                <stop offset="0.8" stopColor="#ff931e" stopOpacity="0.2" />
                <stop offset="0.95" stopColor="#ff931e" stopOpacity="0" />
                <stop offset="0.989" stopColor="#ff931e" stopOpacity="0.5" />
                <stop offset="1" stopColor="#ff931e" stopOpacity="0" />
            </radialGradient>
            <circle cx="357.5273" cy="289.2716" r="240" fill="url(#yellowish)" opacity="1" />

            <radialGradient id="top-left-grad" cx="20" cy="62" r="84" gradientUnits="userSpaceOnUse">
                <stop offset=".24" stopOpacity="0.5" />
                <stop offset=".6996" stopColor="red" stopOpacity="1" />
                <stop offset=".8204" stopColor="#38d1f0" stopOpacity="0.4" />
                <stop offset=".8345" stopColor="#3cbbf3" />
                <stop offset=".8479" stopColor="#3eaef4" stopOpacity="0.5" />
                <stop offset=".9474" stopColor="#3eaef4" stopOpacity="0" />
            </radialGradient>

            <circle fill="url(#top-left-grad)" cx="20" cy="62" r="84" opacity="0.3" />
            <path stroke="#000" strokeWidth="3" fill="none" d="M144.06 195.25s16-16 20 5M184.05 205.41s17.64-14.17 19.34 7.14M150.06 220.25s6 24 27 9" />
            <path stroke="#fff" strokeWidth="5" d="M118.56 201.75l-26-16h-8M91.56 178.75l2.5 7M226.56 228.75l37 1 7 5M266.56 222.75l-3 7" />

            <radialGradient id="mid-grad" cx="105" cy="128" r="34" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#fff" stopOpacity="0" />
                <stop offset="0.39" stopColor="#fff" stopOpacity="0" />
                <stop offset="0.4" stopColor="#000" stopOpacity="0" />

                <stop offset=".96" stopColor="#3eaef4" stopOpacity="0.8" />
                <stop offset="1" stopColor="#fff" stopOpacity="1" />
            </radialGradient>

            <circle fill="url(#mid-grad)" cx="105" cy="128" r="34" opacity="0.3" />

        </g>




        <path id="rays" fill="none" stroke="#fff" strokeWidth="0.5" d="M116.56 115.75l43.25 106.02-43.25-106.02L73.3 9.73l43.26 106.02-106.02 43.26 106.02-43.26 106.01-43.26-106.01 43.26 67.21 92.7-67.21-92.7-67.21-92.7 67.21 92.7-92.71 67.21 92.71-67.21 92.7-67.21-92.7 67.21 107.94 38.19-107.94-38.19L8.61 77.56l107.95 38.19-38.2 107.94 38.2-107.94L154.75 7.81l-38.19 107.94 38.79 107.73-38.79-107.73L77.76 8.02l38.8 107.73-107.73 38.8 107.73-38.8 107.72-38.8-107.72 38.8 1.86 114.49-1.86-114.49-1.87-114.49 1.87 114.49-114.49 1.86 114.49-1.86 114.48-1.86-114.48 1.86 94.03 65.33-94.03-65.33-94.04-65.33 94.04 65.33-65.34 94.03 65.34-94.03 65.33-94.03-65.33 94.03 36 108.69-36-108.69L80.55 7.06l36.01 108.69-108.7 36.01 108.7-36.01 108.69-36.01-108.69 36.01 9.36 114.12-9.36-114.12-9.37-114.12 9.37 114.12-114.12 9.36 114.12-9.36 114.11-9.36-114.11 9.36 30.63 110.33-30.63-110.33L85.93 5.42l30.63 110.33L6.23 146.38l110.33-30.63 110.32-30.63-110.32 30.63.68 114.5-.68-114.5-.69-114.5.69 114.5-114.5.69 114.5-.69 114.5-.69-114.5.69 94.04 65.32-94.04-65.32-94.05-65.32 94.05 65.32-65.32 94.04 65.32-94.04 65.31-94.04-65.31 94.04 112.16 23.02-112.16-23.02L4.39 92.73l112.17 23.02-23.02 112.16 23.02-112.16L139.57 3.59l-23.01 112.16 114.26 7.3-114.26-7.3-114.27-7.3 114.27 7.3-7.31 114.27 7.31-114.27 7.3-114.27-7.3 114.27 107.06 40.58-107.06-40.58L9.49 75.17l107.07 40.58-40.59 107.07 40.59-107.07L157.14 8.68l-40.58 107.07 114.47 2.62-114.47-2.62-114.48-2.62 114.48 2.62-2.63 114.47 2.63-114.47 2.62-114.47-2.62 114.47 87.07 74.35-87.07-74.35L29.48 41.4l87.08 74.35-74.35 87.08 74.35-87.08 74.35-87.08-74.35 87.08 12.27 113.84-12.27-113.84L104.28 1.91l12.28 113.84L2.71 128.03l113.85-12.28 113.84-12.28" opacity=".1" />

    </LuminosityIconWrap >)
}

export default LuminosityIcon;

/*

*/