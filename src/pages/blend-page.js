import React, { useState } from 'react';
import Layout from '../components/scaffold/layout'
import Blender from '../components/content/blender'
import bpageStyles from './blend-page.module.scss';



const BlendPage = () => {
    const [blendMode, setBlendMode] = useState('normal')
    const [flip, setFlip] = useState("A");

    const blenderClickHandler =(input=>{
        setBlendMode(input)
    })
    
    const flipClickHandler = (input) => {
        console.log("Flip!")
        return (
            setFlip(flip === "A" ? "B" : "A")
        )
    }
    // console.log("XXX: ", bpageStyles.selected)
    return (<Layout>
        <div className={bpageStyles.container}> 
            <Blender blenderClick={blenderClickHandler} blendVal={blendMode} flipper={flipClickHandler} flip={flip}/>
        </div>
    </Layout>)
}

export default BlendPage;
