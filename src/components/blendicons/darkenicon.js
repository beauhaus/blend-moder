import React from 'react';
import styled from '@emotion/styled'

const DarkenWrap = styled('svg')`
 
 .st1 {
    fill:#A3A3A3;
} 
 
 .st3 {
     fill:#FFFFFF;
     stroke:#000000;
    } 
 .st4 {
     fill:none;
     stroke:#FFFFFF;
     stroke-width:4;
    } 
 .st5 {
     fill:#FFFFFF;
    } 
 .st6 {
     fill:url(#SVGID_2_);
     }
`;
const Darken = () => {
    // console.log("DarkenWrap: ")
    return (<DarkenWrap xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 320">
        <description>Darken</description>
        <linearGradient id="lamp" x1="10.8816" x2="48.7934" y1="46.8923" y2="18.2168" gradientUnits="userSpaceOnUse">
    <stop offset="0" stopColor="#7AC943" stopOpacity=".5"/>
    <stop offset="1" stopColor="#00331A" stopOpacity=".3"/>
  </linearGradient>
        <path id="bg_1_" d="M.86.85h360v320H.86z" className="st0"/>
        <path d="M332.64 128.35h6.71v94h-6.71z" className="st1"/>  
        <path d="M337.35 180.46l-18.89 17.87-4.59-9.25 18.88-17.87z" className="st1"/>
        <path d="M32.81 12.81l.14-.11L21.94 0C14.63.01 7.31 0 0 0c0 4.87.01 9.74.01 14.6v4.37l10.7 12.35c-3.72 4.58-3.85 11.28.02 16.05l17.41 41.59L86.9 41.2 49.75 15.67c-4.44-5.47-11.48-7.3-16.94-2.86z" fill="url(#lamp)"/>

        <g id="face_1_">
    <path d="M134 229.07c-3.09 26.86 36.52 30.04 38.91 3.12 3.09-26.86-36.52-30.04-38.91-3.12zM188.82 230.3c-3.09 26.86 36.52 30.04 38.91 3.12 3.08-26.86-36.53-30.04-38.91-3.12z" className="st3"/>
    <path id="mouth_1_" d="M164.72 280.25c6.35-3.56 14.95-1.82 25.76 4.93" className="st4"/>
    <ellipse cx="155.39" cy="235.85" className="st0" rx="7.47" ry="10"/>
    <ellipse cx="204.94" cy="229.35" className="st0" rx="8.91" ry="11.5"/>
  </g>
  <g id="click_1_">
    <path d="M249.18 128.31c.21 1.02.42 2.04.62 3.05-.6.04-1.42.3-2.44.81s-1.89 1.12-2.59 1.83c-1.54 1.55-2.13 3.23-1.83 5.01.3 1.78 1.45 3.4 3.37 4.93 1.91 1.53 3.73 2.27 5.53 2.22 1.8-.04 3.43-.81 5-2.31 1.22-1.17 2.01-2.77 2.39-4.83 1.13.39 2.24.79 3.35 1.21-.65 2.25-2.06 4.35-4.17 6.39-2.05 1.97-4.31 2.98-6.97 3.1-2.65.11-5.21-.81-7.79-2.79-2.63-2.02-4.2-4.32-4.52-7.04-.32-2.71.73-5.44 3.32-8.07.83-.84 1.94-1.61 3.32-2.29 1.39-.69 2.53-1.09 3.41-1.22zM262.84 134.31c-5.62-5.61-11.84-10.91-18.63-15.78 1.07-.96 2.16-1.9 3.27-2.84 6.55 4.89 12.55 10.16 17.99 15.72.8.81 1.68 1.25 2.67 1.32.99.07 1.92-.22 2.82-.87.75.83 1.49 1.67 2.22 2.52-4.07 2.93-7.32 2.94-10.34-.07zM278.27 130.48c-3.82-4.67-7.99-9.19-12.5-13.52-.9.62-1.79 1.25-2.67 1.89-.8-.75-1.61-1.49-2.43-2.22 2.04-1.49 4.13-2.95 6.27-4.36 5.38 5.13 10.29 10.52 14.71 16.11-1.15.69-2.27 1.39-3.38 2.1zm-19.3-22.76c.63-.44 1.35-.66 2.17-.64.81.01 1.47.25 1.98.7.51.46.73 1 .64 1.62-.09.62-.44 1.14-1.06 1.57-.61.42-1.31.62-2.1.61-.79-.01-1.45-.24-1.97-.68-.52-.44-.75-.97-.69-1.59.06-.62.4-1.15 1.03-1.59zM290.95 101.19c-.07 1.04-.15 2.07-.22 3.11-.68-.13-1.66-.09-2.94.12-1.28.22-2.42.58-3.42 1.07-2.17 1.09-3.34 2.56-3.56 4.35-.22 1.79.56 3.66 2.23 5.65 1.66 1.98 3.48 3.18 5.51 3.62 2.03.44 4.11.16 6.32-.86 1.72-.79 3.09-2.1 4.12-3.98 1.15.69 2.29 1.39 3.42 2.1-1.38 1.98-3.6 3.6-6.58 4.97-2.9 1.33-5.78 1.68-8.8 1.08-3.02-.61-5.61-2.17-7.87-4.75-2.3-2.63-3.31-5.27-2.82-7.98.49-2.7 2.49-5.06 6.14-6.92 1.17-.59 2.62-1.04 4.35-1.33 1.74-.28 3.12-.36 4.12-.25zM322.73 111.61c-4.33-2.7-8.83-5.23-13.5-7.58-.58 1.42-1.15 2.84-1.71 4.26 1.41 2.14 2.77 4.3 4.06 6.48-1.37.45-2.73.91-4.07 1.39-5.47-8.86-11.96-17.44-19.44-25.58 1.46-.64 2.93-1.26 4.41-1.86 4.58 5.16 8.77 10.48 12.57 15.93 1.04-3.98 2.11-7.95 3.22-11.91 1.77-.56 3.56-1.09 5.37-1.59-1.07 3.23-2.11 6.47-3.12 9.71 5.9 2.94 11.55 6.18 16.94 9.67-1.59.34-3.17.7-4.73 1.08zM333.82 103.45c1-.17 2.02-.02 3.02.45 1 .47 1.7 1.11 2.08 1.92.38.81.35 1.55-.09 2.23-.44.68-1.15 1.09-2.14 1.23-.99.15-1.96 0-2.94-.46-.97-.45-1.66-1.07-2.06-1.86-.4-.79-.4-1.53.01-2.22.4-.69 1.11-1.12 2.12-1.29zm-.31-2.07l-1.74.3c-4.71-6.22-8.21-10.41-9.8-12.85-1.68-2.55-3.44-5.07-5.27-7.57 1.94-.48 3.89-.94 5.87-1.37 1.79 2.55 3.5 5.12 5.14 7.71 1.51 2.43 3.61 7.01 5.8 13.78z" className="st5"/>
  </g>
    </DarkenWrap>)
}

export default Darken;
/*
 

*/

        // <rect width="90" height="80" fill="#020202" />
        // <path id="moon-icon" d="M37.09 9.1c-4.49 0-8.77.93-12.64 2.61.34-.01.67-.03 1.01-.03 18.62 0 33.71 15.05 33.71 33.61 0 10.54-4.87 19.94-12.49 26.1 12.92-4.07 22.29-16.15 22.29-30.41C68.98 23.37 54.7 9.1 37.09 9.1z" />
        // <circle cx="73.5" cy="51" r=".2" />
        // <circle cx="81.05" cy="14.6" r=".2" />
        // <circle cx="7.05" cy="42.6" r=".2" />
        // <circle cx="23.05" cy="7.6" r=".2" />
        
        // {/* <circle cx="67.05" cy="9.1" r="1" /> */}
        // <circle cx="70.2" cy="27.5" r=".5" />
        // <circle fill="white" cx="32.05" cy="72.6" r=".5" />