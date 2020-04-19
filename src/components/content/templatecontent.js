import React from 'react';
import styled from '@emotion/styled'

const TemplateWrap = styled('div')`
    --square: 18vw;

    color: #555;
    width: 100vw;
    min-height: 92vh;
    display: grid;
    background: #bbb;
    overflow: hidden;
    padding: 0;
    margin: 0;

    .grid-container {
  -webkit-filter: grayscale(70%)  opacity(1);
  filter: grayscale(70%) opacity(1);
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(10, var(--square));
  grid-template-rows: repeat(10, var(--square));
  transform: translatex(calc(-1 * var(--square) - 3vw));
  div {   
   &:nth-of-type(7n-6), &:nth-of-type(7n-4), &:nth-of-type(7n-2), &:nth-of-type(7n) {
    transform: rotatez(-45deg);
    ${'' /* filter: url(#tile-filter); */}
   }
   &:nth-of-type(7n-5), &:nth-of-type(7n-3), &:nth-of-type(7n-1) {
    transform: translatey(calc(-1 * var(--square))) rotatez(-45deg);
   }
   &.row-1 {
    grid-row: 1/3;
   }
   &.row-2 {
    grid-row: 3/5;
   }
   &.row-3 {
    grid-row: 5/7;
   }
   &.row-4 {
    grid-row: 7/9;
   }
   &.row-5 {
    grid-row: 9/11;
   }

   border-radius: 6px;
   background: linear-gradient(175deg, #92b1af 0%, #769593 100%);
   box-shadow: inset 3px 3px 3px 0px rgba(255, 255, 255, 0.8),
    inset -5px -5px 5px 0px  rgba(122, 122, 122, 0.6);
   margin: auto;
   width: 70%;
   height: 70%;
   &:nth-of-type(7n+1) {
    grid-column: 1/3;

   }
   &:nth-of-type(7n+2) {
    grid-column: 2/4;

   }
   &:nth-of-type(7n+3) {
    grid-column: 3/5;

   }
   &:nth-of-type(7n+4) {
    grid-column: 4/6;
   }
   &:nth-of-type(7n+5) {
    grid-column: 5/7;
   }
   &:nth-of-type(7n+6) {
    grid-column: 6/8;
   }
   &:nth-of-type(7n) {
    grid-column: 7/9;
   }
   ${'' /* &:nth-of-type(6n) {
    grid-column: 8/10;
   } */}
   ${'' /* &:nth-of-type(6n-2) {
    background: linear-gradient(175deg, #93bdba 0%, #738b8a 100%);
   }
   &:nth-of-type(5n-4) {
    background: linear-gradient(175deg, #8ca1a0 0%, #60807d 100%);
   } */}
  }
 }
}
   
`;
const Template = () => {
  // console.log("TemplateWrap: ")
  return (<TemplateWrap>
    <svg width="0" height="0">
      <filter id="tile-filter">
        <feTurbulence type="fractalNoise" baseFrequency=".03" numOctaves="1" />
        <feDisplacementMap in="SourceGraphic" scale="5" />
      </filter>

    </svg>
    <div className="tile-wall">
      <div className="grid-container">
        <div className="row-1"></div>
        <div className="row-1"></div>
        <div className="row-1"></div>
        <div className="row-1"></div>
        <div className="row-1"></div>
        <div className="row-1"></div>
        <div className="row-1"></div>
        <div className="row-2"></div>
        <div className="row-2"></div>
        <div className="row-2"></div>
        <div className="row-2"></div>
        <div className="row-2"></div>
        <div className="row-2"></div>
        <div className="row-2"></div>
        <div className="row-3"></div>
        <div className="row-3"></div>
        <div className="row-3"></div>
        <div className="row-3"></div>
        <div className="row-3"></div>
        <div className="row-3"></div>
        <div className="row-3"></div>
        <div className="row-4"></div>
        <div className="row-4"></div>
        <div className="row-4"></div>
        <div className="row-4"></div>
        <div className="row-4"></div>
        <div className="row-4"></div>
        <div className="row-4"></div>
        <div className="row-5"></div>
        <div className="row-5"></div>
        <div className="row-5"></div>
        <div className="row-5"></div>
        <div className="row-5"></div>
        <div className="row-5"></div>
        <div className="row-5"></div>
      </div>
    </div>
  </TemplateWrap>)
}

export default Template;