import React, { useState } from 'react';
import BurgerMenu from '../components/BurgerMenu';

const Gradient = () => {
    let [firstColor,setFirstColor] = useState('#eeaeca')
    let [secondColor,setSecondColor] = useState('#14e158')
    let [thridColor,setThirdColor] = useState('#00d4ff')

    let [firstCentum,setFirstCentum] = useState(20)
    let [secondCentum,setSecondCentum] = useState(52)
    let [thirdCentum,setThirdCentum] = useState(100)

    let [deg,setDeg] = useState(130)

    let [show,setShow] = useState(false)
    return (
        <div className='page _full' style={{background:`linear-gradient(${deg}deg,  ${firstColor} ${firstCentum}%, ${secondColor} ${secondCentum}%, ${thridColor} ${thirdCentum}%)`}}>
 
    <BurgerMenu/>
     <div className="page-container">
     <div onClick={()=>setShow(true)} className='gradient-button' >Edit</div>
     <div className={show? 'modal modal-active':'modal'} onClick={()=>setShow(false)}>
         <div className='modal-body' onClick={(e)=>e.stopPropagation(e)}>
         <div onClick={()=>setShow(false)} className='gradient-button'>Close</div>
        <div className="gradient-inputs">
           
           <div className="input">
                   <input type="number" max='360'  value={deg} onChange={(e)=>setDeg(e.target.value)}/>
                   <input type="range"  max='360' value={deg} onChange={(e)=>setDeg(e.target.value)}/>
               </div>
               <div className="columns">
               <div className="column">
                <div className="input">
                 <div class="cp_wrapper">
                    <input type="color" name="cp_1" value={firstColor} onChange={(e)=>setFirstColor(e.target.value)}  />

                 </div>
                 <span>{firstColor}</span>
              </div>
              <div className="input">
                  <input type="range" value={firstCentum} onChange={(e)=>setFirstCentum(e.target.value)} max='100'/>
                  <span className='result'>{firstCentum}</span>
              </div>
           </div>
         
         <div className="column">
         <div className="input">
                 <div class="cp_wrapper">
                    <input type="color" name="cp_1" value={secondColor} onChange={(e)=>setSecondColor(e.target.value)}  />
                 </div>
                 <span>{secondColor}</span>
              </div>
              <div className="input">
              <input type="range" value={secondCentum} onChange={(e)=>setSecondCentum(e.target.value)} max='100'/>
                  <span className='result'>{secondCentum}</span>
              </div>
         </div>
               <div className="column">
               <div className="input">
                 <div class="cp_wrapper">
                    <input type="color" name="cp_1" value={thridColor} onChange={(e)=>setThirdColor(e.target.value)}  />
                 </div>
                 <span>{thridColor}</span>
              </div>
              <div className="input">
              <input type="range" value={thirdCentum} onChange={(e)=>setThirdCentum(e.target.value)} max='100'/>
                  <span className='result'>{thirdCentum}</span>
              </div>
               </div>
           </div>
           
        </div>
        <div className="gradient-box" style={{background:`linear-gradient(${deg}deg,  ${firstColor} ${firstCentum}%, ${secondColor} ${secondCentum}%, ${thridColor} ${thirdCentum}%)`}}></div>

         </div>
        
     </div>

     </div>
        </div>
    );
}

export default Gradient;
