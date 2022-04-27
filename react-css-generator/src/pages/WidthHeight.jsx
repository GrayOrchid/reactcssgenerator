import React, {  useState } from 'react';
import BurgerMenu from '../components/BurgerMenu';

const Widthheight = () => {
    let [width,setWidth]  = useState(270)
    let [height,setHeight] = useState(270)

    return (
        <div className='page'>
        <BurgerMenu/>
        <div className="page-container __margin">
            <h1>Size</h1>
            <div className="size-items ">
                <div className="size-inputs">
                    <div className="input">
                        <input type="number" max='1800' value={width} min='0' onChange={(e)=>setWidth(e.target.value)} />
                        <input type="range"  max='1800' value={width} min='0' onChange={(e)=>setWidth(e.target.value)} />
                        <span>width: {width}px</span>
                    </div>
                    <div className="input">
                        <input type="number" max='2080' value={height} min='0' onChange={(e)=>setHeight(e.target.value)} />
                        <input type="range"  max='2000' value={height} min='0' onChange={(e)=>setHeight(e.target.value)} />
                        <span>height: {height}px</span>
                    </div>
                </div>
                <div className="box" style={{width:`${width}px`,height:`${height}px`}}>
                    <span className='result'>width:{width}px</span>
                    <span className='result'>height:{height}px</span>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Widthheight;
