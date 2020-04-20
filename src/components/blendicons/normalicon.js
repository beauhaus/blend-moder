import React from 'react';
import styled from '@emotion/styled'

const NormalIconWrap = styled('svg')`
        .mouth {
            fill: #fff;
            stroke-width: 3;
            stroke: #000;
        }
        .brows {
            stroke: #000;
            fill:none;
            stroke-width:4;
        }
        .notch {
            stroke: #000;
            fill:none;
            stroke-width:2;
        }
        .eyeball {
            stroke: #000;
            stroke-width:2;
        }
        .eye {
            stroke: #000;
            stroke-width:2;
            fill: #fff;
        }
        .arms {
            stroke:#fff;
        stroke-width:5;
        fill: none;
        }
        .base {
            stroke-width:3;
        stroke:#fff;
        fill: none;
        }
        .pitcher {
            stroke-width:3;
        stroke:#fff;
        fill: none;
        }
        .top {
            path {
                stroke-width:3;
        stroke:#fff;
        fill: none; 
            }
        }
`;
const NormalIcon = () => {
    // console.log("NormalIconWrap: ")
    return (<NormalIconWrap xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 320">
        <description>Normal</description>
        <path id="bg" stroke="#000" d="M.5.5h360v320H.5z" />
        <g className="top">
            <path d="M85.4 108.79l-5.99-32.2c-.61-6.1-3.52-6.46-6.59-3.71-11.35 3.66-1.46 30.64 1.17 38.03.49 2.63 3.44 4.3 6.59 3.71 4.18 2.28 6.15-.84 4.82-5.83z" />
            <path d="M79.54 36.26c-10.91.37 10.2 115.25 20.89 112.3 20.7 42.6-9.86-139.36-20.89-112.3z" />
        </g>
        <g id="blenderbody">
            <g className="arms" >
                <path d="M259.26 219.7c10.62 7.73 20.69 16.21 30.13 25.34-7.58 5.46-17.15 10.93-24.73 16.39C267 265 272 266 272 266" />
                <path d="M155.03 211.87C122 196 80.27 180.85 46 177.62 50 178 68 142 72.59 113.5c-.82-2.44-1.97-4.96-3.59-7.5" />
            </g>
            <g className="base">
                <path d="M144.33 283.82c37.38 2.28 74.77 2.28 112.15 0 2.62 0 4.75-2.13 4.75-4.75 4.39-10.38-114.43-2.38-116.9-4.76-6.13-.08-6.19 9.6 0 9.51z" />
                <path d="M133.88 274.32c42.45 1.94 84.9 1.94 127.36 0 6.51-.04 6.52-15.8 0-15.84 0 0-8.55 8.24-64.63 7.29-63.54 1.26-63.55-15.57-67.48-.69-.45 3.74.96 9.4 4.75 9.24z" />
            </g>
            <g className="pitcher">
                <path d="M291.11 133.78c14.96-32.27 53.47-102.29-12.16-83.88l-5.7 5.27s1.25 8.39 1.9 10.55c42.15-36.03 13.02 60.13-1.9 66.74-2.79 1.24-15.88 2.52-16.76 3.78-2.12 3.06-4.69 10.71-4.69 10.71 7.23-9.83 26.24-4.11 39.31-13.17zM155.73 170.67c14.77.72 89.56 5.92 93.14-3.95 0-2.19-2.55-3.95-5.7-3.95-29.45 1.21-58.6 1.24-87.44 0-7.37-.08-7.41 7.97 0 7.9z" />
                <path d="M155.73 162.76l87.44 1.32c18.55-35.96 30.16-71.97 32.31-108.04 0 2.86-138.76 2.64-155.87 0-17.11-1.32 7.7 10.69 8.31 17.02 2.05 21.35 17.18 66.22 27.81 89.7zM167.14 152.22c-8.84-13.8-23.48-55.86-24.71-72.46M141.48 79.76h23.76M144.04 93.06h11.69M148.18 103.6h11.69M151.81 114.14h9.51M155.95 124.68h11.69M159.42 132.59h7.6M163.55 143.13h17.11M168.25 152.35h11.69" />
            </g>

            <path id="faceback" fill="#fff" stroke="#fff" d="M142.43 262.91c15.39-.9 122.5 9.56 121.66-7.6l-4.5-37.81-12.61-40.13c0-4.2-3.4-7.6-7.6-7.6h-77.94c-4.2 0-7.6 3.4-7.6 7.6l-13.31 38.97-5.7 38.97c0 4.2 3.4 7.6 7.6 7.6z" />


            <path className="eye" d="M174.44 220.11c-1.5 14.73 17.77 16.47 18.93 1.71 1.51-14.73-17.77-16.48-18.93-1.71z"  />
            <path className="eye" d="M212.3 220.78c-1.5 14.73 17.77 16.47 18.93 1.71 1.51-14.73-17.77-16.47-18.93-1.71z"  />
            <path className="eyeball" d="M188.55 223.37c-.47 6.15-10.11 5.28-9.46-.86.24-2.61-4.46-9.8-4.46-9.8s14.16 8.05 13.92 10.66z" />
            <path className="eyeball" d="M226.59 221.46c-.47 6.15-10.11 5.28-9.46-.86.24-2.61 5.16-12.55 5.16-12.55s4.54 10.79 4.3 13.41z" />
            <path className="notch" d="M171.36 205.77c.82.92 1.65 1.83 2.47 2.75" />
            <path className="notch" d="M183.66 201.68c.08 1.28.17 2.57.25 3.85" />
            <path className="notch" d="M196.12 208.58c-.64.91-1.29 1.83-1.93 2.74" />
            <path className="notch" d="M208.72 210.16c1.37.36 2.58 1.29 3.28 2.52" />
            <path className="notch" d="M219.42 203.33c.18 1.28.37 2.57.55 3.85" />
            <path className="notch" d="M233.73 209.37c-.92.73-1.83 1.47-2.75 2.2" />

            <g className="brows">

                <path d="M215.78 187.93c5.02 7.08 13.34 11.7 22 12.24" />
                <path d="M181.11 185.66c-3.22 8.14-9.61 14.98-17.52 18.74" />
            </g>
            <path className="mouth" d="M179.66 243.81c2-2.68 6.05 7.69 29.88 1.14 23.83-6.55 26.88-18.34 28.77-17.25 7.17 21.59-21.72 30.71-40.81 23.67-6.63-2.39-19.28-5.62-17.84-7.56z" />
        </g>

    </NormalIconWrap >)
}

export default NormalIcon;
