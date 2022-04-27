import React, { useState } from 'react';
import BurgerMenu from '../components/BurgerMenu';

const Transform = () => {
    let [rotate,setRotate] = useState(0)
    let [translateX,setTranslateX] = useState(0)
    let [translateY,setTranslateY] = useState(0)
    let [skewX,setSkewX] = useState(0)
    let [skewY,setSkewY] = useState(0)
    let [scale,setScale] = useState (1)
    return (
        <div className='page'>
            <BurgerMenu/>
            <div className="page-container __margin">
                <h1>Transform</h1>
                <div className="transform-items">
                <div className="transform-box" style={{transform:`rotate(${rotate}deg) scale(${scale}) translateX(${translateX}px) translateY(${translateY}px)  skewX(${skewX}deg) skewY(${skewY}deg)`}} ></div> 
                <div className="transform-inputs">                
                <div className="column">
                <div className="input">
                        <input type="range"  value={rotate} max='360' onChange={(e)=>setRotate(e.target.value)}/>
                        <input type="number" value={rotate} max='360' onChange={(e)=>setRotate(e.target.value)} />
                        <span className="result">transform:rotate({rotate} deg);</span>
                    </div>
                    <div className="input">
                        <input type="range"  value={scale} onChange={(e)=>setScale(e.target.value)}  max='3'/>
                        <input type="number" value={scale} onChange={(e)=>setScale(e.target.value)} max='3' />
                        <span className="result">transform: scale({scale});</span>
                    </div>
                </div>
                  <div className="column">
                  <div className="input">
                  <input type="range"  onChange={(e)=>setTranslateX(e.target.value)} max='1000' min='-1000' value={translateX}/>
                        <input type="number" onChange={(e)=>setTranslateX(e.target.value)} max='1000' min='-1000' value={translateX}/>
                        <span className="result">transform: translateX ({translateX} px)</span>
                    </div>
              <div className="input">
              <input type="range"  onChange={(e)=>setTranslateY(e.target.value)} max='1000' min='-1000' value={translateY}/>
                        <input type="number" onChange={(e)=>setTranslateY(e.target.value)} max='1000' min='-1000' value={translateY}/>
                        <span className="result">transform: translateX ({translateY} px)</span>
              </div>
                   
                  </div>

                  <div className="column">
                  <div className="input">
                  <input type="range"  onChange={(e)=>setSkewX(e.target.value)} max='360' min='0' value={skewX}/>
                        <input type="number" onChange={(e)=>setSkewX(e.target.value)} max='360' min='0' value={skewX}/>
                        <span className="result">transform: skewX({skewX} deg)</span>
                    </div>
                    <div className="input">
                    <input type="range"  onChange={(e)=>setSkewY(e.target.value)} max='360' min='0' value={skewY}/>
                        <input type="number" onChange={(e)=>setSkewY(e.target.value)} max='360' min='0' value={skewY}/>
                        <span className="result">transform: skewY({skewY} deg)</span>
                    </div>
                  </div>
                </div>
                </div>
                    <span className='result'> transform: scale({scale}) rotate({rotate}deg) translate({translateX}px, {translateY}px) skew({skewX}deg, {skewY}deg) ;  </span>
            </div>
            
        </div>
    );
}

export default Transform;
