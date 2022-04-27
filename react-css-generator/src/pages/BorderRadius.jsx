import React, { useState } from 'react';
import BurgerMenu from '../components/BurgerMenu';

const Borderradius = () => {
    let [topRight,setTopRight] = useState(0)
    let [topLeft,setTopLeft] = useState(0)
    let [bottomRight,setBottomRight] = useState(0)
    let [bottomLeft,setBottomLeft] = useState(0)
    let [borderSize,setBorderSize] = useState(10)
    let [borderColor,setBorderColor] = useState('#000000')
    let [borderType,setBorderType] = useState('solid')

    return (
<div className='page'>
  

   <BurgerMenu/>
   <div className="page-container __margin">
      <h1>Border Radius</h1>
      <div className="border-items">
         <div className="border-radius">
            <div className="input">
               <input type="number" value={topLeft} max='400' min='0' onChange={(e)=>setTopLeft(e.target.value)} />
               <input type="range" value={topLeft} max='400' min='0'  onChange={(e)=>setTopLeft(e.target.value)}/>
               <span>{topLeft}px</span>
            </div>
            <div className="input">
               <input type="number" max='400' value={topRight} min='0' onChange={(e)=>setTopRight(e.target.value)} />
               <input type="range"  max='400' value={topRight} min='0' onChange={(e)=>setTopRight(e.target.value)} />
               <span>{topRight}px</span>
            </div>
         </div>
         <div className="box" style={{borderRadius:`${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft}px `, border:`${borderSize}px ${borderType} ${borderColor}` }}>
         <span className='result'>border-radius:{topLeft}px {topRight}px {bottomRight}px {bottomLeft}px ; </span>
         <span className="result">border: {borderSize}px {borderType} {borderColor} ;</span>
      </div>
      <div className="border-radius">
         <div className="input">
            <input type="number"  max='400' min='0' value={bottomLeft} onChange={(e)=>setBottomLeft(e.target.value)} />
            <input type="range" max='400' min='0' value={bottomLeft} onChange={(e)=>setBottomLeft(e.target.value)} />
            <span>{bottomLeft}px</span>
         </div>
         <div className="input">
            <input type="number"  value={bottomRight} max='400' min='0' onChange={(e)=>setBottomRight(e.target.value)} />
            <input type="range" value={bottomRight}  max='400' min='0' onChange={(e)=>setBottomRight(e.target.value)}/>
            <span>{bottomRight}px</span>
         </div>
      </div>
      <div className="border-settings">
         <div className="input">
            <input type="number" max='400' min='0' value={borderSize} onChange={(e)=>setBorderSize(e.target.value)} />
            <span>{borderSize}px</span>
         </div>
         <div className="input">
            <select onChange={(e)=>
               setBorderType(e.target.value)} >
               <option value="" disabled>Тип</option>
               <option value="solid">Solid</option>
               <option value="dashed">Dashed</option>
               <option value="double">Double</option>
            </select>
            <span>{borderType}</span>
         </div>
         <div className="input">
            <div class="cp_wrapper">
               <input type="color" name="cp_1" value={borderColor} onChange={(e)=>setBorderColor(e.target.value)}  />
            </div>
            <span>{borderColor}</span>
         </div>
      </div>
   </div>
</div>
</div>
    );
}

export default Borderradius;
