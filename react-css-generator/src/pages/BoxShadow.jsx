import React, { useState } from 'react';
import BurgerMenu from '../components/BurgerMenu';

const Boxshadow = () => {
    let [axisX,setAxisX] = useState(0)
    let [axisY,setAxisY] = useState(0)
    let [blur,setBlur] = useState(0)
    let [color,setColor] = useState('#000000')
    let [boxShadowType,setBoxShadowType] = useState('')

   
    return (
      <div className='page'>
   <BurgerMenu/>
   <div className="page-container __margin">
      <h1>Box Shadow</h1>
      <div className="box-shadow__items  __margin">
         <div className="box" style={{boxShadow:`${axisX}px ${axisY}px ${blur}px ${color} ${boxShadowType} `}}><span className='result'>box-shadow: {axisX}px {axisY}px {blur}px {color} {boxShadowType}</span>
      </div>
   </div>
   <div className="box-shadow__inputs">
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
      <div className="input">
         <select name="" id="" onChange={(e)=>setBoxShadowType(e.target.value)}>
            <option value="">initial</option>
            <option value="inset">inset</option>
         </select>
      </div>
   </div>
</div>
</div>
    );
}

export default Boxshadow;
