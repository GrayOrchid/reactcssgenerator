import React, { useState } from 'react';
import BurgerMenu from '../components/BurgerMenu';

const Textshadow = () => {
    let [axisX,setAxisX] = useState(0)
    let [axisY,setAxisY] = useState(0)
    let [blur,setBlur] = useState(0)
    let [color,setColor] = useState('#000000')
    
    return (
      <div className='page'>
<BurgerMenu/>
      <div className="page-container __margin">
         <div className="text-shadow__items">
            <div >
               <h1  style={{textShadow:`${axisX}px ${axisY}px ${blur}px ${color} `}}>Text Shadow</h1>
               <p  style={{textShadow:`${axisX}px ${axisY}px ${blur}px ${color} `}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, nisi at! Similique, voluptatibus. Maiores deleniti quod consequuntur dolore magnam unde sunt cumque, beatae harum tempora alias, distinctio, optio nihil voluptatibus!</p>
            </div>
            <div className="text-shadow_inputs">
               <div className="input">
                  <input type="number" max='400' value={axisX} min='-400' onChange={(e)=>setAxisX(e.target.value)} />
                  <input type="range"  max='400' value={axisX} min='-400' onChange={(e)=>setAxisX(e.target.value)} />
                  <span>осьX: {axisX}px</span>
               </div>
               <div className="input">
                  <input type="number" max='400' value={axisY} min='-400' onChange={(e)=>setAxisY(e.target.value)} />
                  <input type="range"  max='400' value={axisY} min='-400' onChange={(e)=>setAxisY(e.target.value)} />
                  <span>осьY: {axisY}px</span>
               </div>
               <div className="input">
                  <input type="number" max='100' value={blur} min='0' onChange={(e)=>setBlur(e.target.value)} />
                  <input type="range"  max='100' value={blur} min='0' onChange={(e)=>setBlur(e.target.value)} />
                  <span>размытие: {blur}px</span>
               </div>
               <div className="input">
                  <div class="cp_wrapper">
                     <input type="color" name="cp_1" value={color} onChange={(e)=>setColor(e.target.value)}  />
                  </div>
                  <span>{color}</span>
               </div>
            </div>
            <span className='result'>box-shadow: {axisX}px {axisY}px {blur}px {color} </span>
         </div>
      </div>
   </div>
    );
}

export default Textshadow;
