import React from 'react';
import styled from '@emotion/styled'

const DifferenceIconWrap = styled('svg')`
    .st1,
    .st2{stroke:#fff;}
    .st1{fill:none;
    stroke-width:3}
    .st2{stroke-width:5}
    .st2,
    .st4{fill:none}
    .st4,
    .st5,
    .st6,
    .st7,
    .st8{stroke:#000;}
    .st6,
    .st7,
    .st8{fill:none;
    stroke-width:2}
    .st7,
    .st8{stroke-width:3}
    .st8{stroke-width:5}
    .st9{fill:#f2f2f2;
    stroke:#fff}
    .st10{stroke-width:3;
    stroke:#000}
    .st11,
    .st12{fill:none;
    stroke:#fff}
    .st12{stroke-width:2}

`;
const DifferenceIcon = () => {
    console.log("DifferenceIconWrap: ")
    return (<DifferenceIconWrap xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 320">
        <description>Difference</description>
        <path fill="#9C5D5D" d="M0 0h360v320H0z" />
        <g id="blenderLt_1_">
            <g id="blenderbody_2_">
                <g id="base_2_">
                    <path d="M38.47 282.76c35.71 9.23 71.84 15.9 108.4 20.03 2.54.47 4.99-1.53 5.48-4.46 6.18-10.82-110.16-23.09-112.1-26.19-5.92-1.2-7.78 9.62-1.78 10.62z" className="st1" />
                    <path d="M30.14 270.27c40.67 9.75 81.7 17.34 123.09 22.75 6.3 1.12 9.25-16.5 2.96-17.71 0 0-9.81 7.68-63.83-3.4-61.65-9.94-58.51-28.75-65.09-12.82-1.13 4.11-.82 10.68 2.87 11.18z" className="st1" />
                </g>
                <path d="M156.06 232.37c10.81 7.76 21.11 16.4 30.83 25.85-7.19 6.86-16.35 13.89-23.54 20.75 2.47 3.81 7.44 4.48 7.44 4.48M54 208.32c-12.82 2.37-25.53 5.76-38 10.15 3.95 9.4 9.63 19.82 13.58 29.21-3.71 2.4-8.5.85-8.5.85" className="st2" />
            </g>
            <g id="pitcher_2_">
                <path d="M208.36 141.25c20.48-33.4 70.78-104.79 3.91-95.93l-6.49 4.87s-.36 9.6-.13 12.13c47.47-32.75 1.36 69.54-14.3 74.26-2.93.88-15.82-.02-16.91 1.24-2.62 3.04-6.53 11.13-6.53 11.13 8.81-9.69 26.12.09 40.45-7.7zM70.62 158.31c14.14 3.44 85.46 22.62 90.76 12.22.41-2.44-1.73-4.88-4.77-5.44-28.69-3.9-56.87-9.08-84.51-15.62-7.11-1.4-8.66 7.6-1.48 8.84z" className="st1" />
                <path d="M72.1 149.47l84.27 17.09c24.65-36.89 42.59-75.06 51.41-115-.53 3.19-134.61-21.84-150.65-27.84-16.29-4.53 5.45 13.32 4.85 20.51-2.02 24.24 4.22 77.09 10.12 105.24zM85.09 139.73c-5.97-17-12.26-66.63-10.35-85.42M73.82 54.14l22.96 4.24M73.81 69.47l11.3 2.09M75.84 81.99l11.3 2.09M77.39 94.43l9.18 1.69M79.42 106.95l11.29 2.08M81.29 116.4l7.35 1.36M83.32 128.92l16.54 3.06M86.14 140.07l11.3 2.09" className="st1" />
            </g>
            <path id="faceback_2_" fill="#fff" stroke="#fff" d="M39.6 259.81c15.05 1.74 116.62 32.57 119 13.24 0-.01 2.71-43.07 2.71-43.07l-4.69-47.11c.78-4.69-1.87-9.11-5.93-9.86l-75.33-13.92c-4.06-.75-7.98 2.45-8.77 7.14l-20.14 41.18-12.79 42.54c-.77 4.7 1.88 9.11 5.94 9.86z" />
            <g id="blenderface_4_">
                <path d="M81.37 212.6c-5.86 22.85 12.45 28.24 17.98 5.29 5.86-22.84-12.45-28.23-17.98-5.29zM118.14 218.89c-5.86 22.85 12.45 28.24 17.98 5.29 5.86-22.85-12.44-28.24-17.98-5.29z" className="st4" />
                <path d="M99.69 213.1c-1.6 6.79-10.76 4.09-8.99-2.65.72-2.88-2.48-11.75-2.48-11.75s12.19 11.53 11.47 14.4zM136.03 217.11c2.86 6.05-5.62 11.38-8.32 5.23-1.18-2.59-2.34-15.03-2.34-15.03s9.48 7.2 10.66 9.8z" className="st5" />
                <path d="M82.62 189.81c.62 1.17 1.25 2.35 1.87 3.52M95.27 187.43c-.16 1.45-.32 2.9-.47 4.35M106.02 197.37c-.79.91-1.59 1.81-2.38 2.72M117.91 201.39c1.25.65 2.25 1.9 2.7 3.4M129.52 195.66c-.06 1.47-.12 2.93-.18 4.4M142.22 204.97c-1.02.66-2.04 1.31-3.07 1.97" className="st4" />
                <path d="M121.13 186.07c8.39-10.26 18.74-8.99 27.23-.09M109.72 195.08c-6.44-10.52-15.58-14.55-25.48-9.05" className="st6" />
                <path d="M86.75 236.84c-3.17-.4-6.47 2.52-6.97 6.18M85.44 242.61s25.19 7.94 38.59 7.13c1.67-.1 7.28-1.36 7-.13-1.28 5.57-5.26 15.92-20.69 14.03-17.63-2.16-24.9-21.03-24.9-21.03z" className="st4" />
            </g>
        </g>
        <g id="blenderRt_1_">
            <g id="blenderbody_1_">
                <g id="base_1_">
                    <path d="M211.49 300.92c35.81-3.58 71.23-9.62 106.25-18.14 2.49-.42 4.14-3.07 3.69-5.92 2.38-11.96-108.82 15.94-111.57 13.76-5.82.89-4.22 11.4 1.63 10.3z" className="st7" />
                    <path d="M199.96 292.31c40.55-4.76 80.77-11.63 120.66-20.6 6.16-1.09 3.48-18.18-2.71-17.16 0 0-6.7 10.31-59.98 18.35-59.98 11.64-62.87-6.59-64.05 10.17.22 4.12 2.52 10.02 6.08 9.24z" className="st7" />
                </g>
                <path d="M304.59 215.38c12.36 3.45 24.54 7.88 36.41 13.24-4.53 8.68-10.83 18.18-15.36 26.86 3.45 2.65 8.24 1.59 8.24 1.59M202.96 227.72c-11.11 6.47-21.81 13.84-31.97 22.04 6.53 7.25 14.98 14.86 21.51 22.11-2.69 3.44-7.59 3.63-7.59 3.63" className="st8" />
            </g>
            <g id="pitcher_1_">
                <path d="M324.89 114.6c8.65-37.39 33.16-119.48-25.86-88.91l-4.5 6.63s2.62 8.88 3.61 11.12c33.77-45.86 22.62 63.04 9.61 72.62-2.43 1.79-14.62 5.3-15.23 6.81-1.49 3.66-2.61 12.36-2.61 12.36 5.16-11.82 24.14-8.7 34.98-20.63zM202.94 176.47c14.12-1.61 85.87-8.07 87.57-19.35-.38-2.37-3.1-3.87-6.08-3.36-27.7 6.08-55.31 10.82-82.84 14.14-7 1.11-5.66 9.85 1.35 8.57z" className="st7" />
                <path d="M201.59 167.9l83.07-12.72c11.43-41.97 16.26-82.86 12.14-122.29.49 3.1-131.01 25.3-147.67 25.21-16.43 1.34 9.12 10.34 10.78 17.1 5.58 22.81 27.59 68.98 41.68 92.7zM210.59 154.63c-10.73-13.52-31.79-56.72-35.8-74.52M173.89 80.27l22.51-3.85M178.6 94.27l11.07-1.89M184.31 105.02l11.08-1.89M189.56 115.85l9.01-1.53M195.28 126.61l11.08-1.89M199.92 134.61l7.2-1.23M205.64 145.36l16.21-2.76M211.67 154.59l11.08-1.89" className="st7" />
            </g>
            <path id="faceback_1_" d="M205.48 279.57c14.43-3.47 117.7-9.46 113.96-27.91l-10.73-40.24-18.81-41.44c-.72-4.55-4.52-7.69-8.5-7.01l-73.84 12.61c-3.98.68-6.62 4.92-5.9 9.47l-5.94 44.37 1.26 43.15c.72 4.54 4.53 7.68 8.5 7z" className="st5" />
            <g id="blenderface_3_">
                <path d="M229.55 222.43c1.61 22.83 20.17 21.6 18.23-1.21-1.61-22.83-20.17-21.6-18.23 1.21zM265.44 215.81c1.61 22.83 20.17 21.6 18.23-1.21-1.61-22.83-20.17-21.6-18.23 1.21z" className="st9" />
                <path d="M233.42 224.08c-5.94-.19-5.82-10.79.12-10.4 2.53.12 9.07-5.39 9.07-5.39s-6.66 15.91-9.19 15.79zM272.1 215.14c-4.01 4.83-10.79-2.68-6.65-7.38 1.74-2.03 11.38-6.91 11.38-6.91s-3 12.26-4.73 14.29z" className="st10" />
                <path d="M223.7 201.2c.94.86 1.87 1.72 2.81 2.58M234.65 194.77c.3 1.38.6 2.75.9 4.13M247.63 200.23c-.45 1.09-.91 2.19-1.36 3.28M259.85 199.91c1.36.17 2.66.98 3.54 2.2M268.81 190.77c.39 1.36.79 2.72 1.18 4.08M283.4 195.01c-.74.94-1.49 1.88-2.23 2.83" className="st11" />
                <path d="M257.68 182.47c7.01-9.69 16.1-10.29 23.8-4.37M244.27 184.69c-9.02-5.68-18.01-4.88-24.33 4.01" className="st12" />
                <path d="M241.97 242.75c-3.05.7-5.2 4.48-4.54 7.98M284.64 235.47c3.1-.35 6.3 2.51 6.75 6.05M242.24 248.96c6.85 5.35 15.06 6.36 22.42 4.33s13.96-6.86 19.96-12.52" className="st11" />
            </g>
        </g>
    </DifferenceIconWrap >)
}

export default DifferenceIcon;

/*


*/