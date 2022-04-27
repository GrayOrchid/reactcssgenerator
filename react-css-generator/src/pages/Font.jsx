import React, { useState } from 'react';
import BurgerMenu from '../components/BurgerMenu';

const Font = () => {
    let [fontSize,setFontSize] = useState(16)
    let [fontFamily,setFontFamily] = useState('Georgia, serif')
    let [fontWeight , setFontWeight] = useState('normal')
    let [fontColor,setFontColor] = useState('#000000')
    let [lineHeight,setLineHeight] = useState(1)
    let [textAlign,setTextAlign] = useState('center')
    
    return (
        <div className='page'>
	<BurgerMenu/>
	<div className="page-container __margin">
		<h1>Font</h1>
		<div className="font-items">
			<div className='font-text' style={{textAlign: `${textAlign}`}}>
			<h1 style={{fontSize:`${fontSize}px`, fontWeight:`${fontWeight}`,color:`${fontColor}`,fontFamily:`${fontFamily}`}}>Font </h1>
			<span style={{fontSize:`${fontSize}px`, fontWeight:`${fontWeight} `, lineHeight:`${lineHeight}`,color:`${fontColor}`,fontFamily:`${fontFamily}` }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae accusamus error voluptate deserunt quo dicta fugit accusantium dignissimos ullam, architecto soluta, totam deleniti. Odit sit fugiat soluta libero ad eveniet.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae accusamus error voluptate deserunt quo dicta fugit accusantium dignissimos ullam, architecto soluta, totam deleniti. Odit sit fugiat soluta libero ad eveniet.</span>
		</div>
	</div>
	<div className="font-inputs">
		<div className="column">
			<div className="input">
				<select onChange={(e)=>
					setFontWeight(e.target.value)} value={fontWeight}>
					<option value="normal">normal</option>
					<option value="bold">bold</option>
					<option value="lighter">lighter</option>
					<option value="bolder">bolder</option>
					<option value="100">100</option>
					<option value="200">200</option>
					<option value="300">300</option>
					<option value="400">400</option>
					<option value="500">500</option>
					<option value="600">600</option>
					<option value="700">700</option>
					<option value="800">800</option>
					<option value="900">900</option>
					<option value="inherit">inherit</option>
					<option value="initial">initial</option>
					<option value="unset">unset</option>
				</select>
				<span className='result'>font-weight: {fontWeight};</span>
			</div>
			<div className="input">
				<select onChange={(e)=>
					setFontFamily(e.target.value)} value={fontFamily}>
					<option value="Georgia, serif">Georgia, serif</option>
					<option value="'Gill Sans', sans-serif">Gill Sans", sans-serif"</option>
					<option value="sans-serif">sans-serif</option>
					<option value="serif">serif</option>
					<option value="cursive">cursive</option>
					<option value="system-ui">system-ui</option>
				</select>
				<span className='result'>font-family: {fontFamily};</span>
			</div>
		</div>
		<div className="column">
			<div className="input">
				<input type="number"  onChange={(e)=>setFontSize(e.target.value)} value={fontSize} />
				<input type="range"   onChange={(e)=>setFontSize(e.target.value)} value={fontSize}/>
				<span className='result'>font size: {fontSize}px</span>
			</div>
			<div className="input">
				<input type="number" max='5' value={lineHeight} onChange={(e)=>setLineHeight(e.target.value)}/>
				<input type="range"max='5'  value={lineHeight} onChange={(e)=>setLineHeight(e.target.value)}/>
				<span className='result'>line-height:{lineHeight}px;</span>
			</div>
		</div>
		<div className="column">
			<div className="input">
				<div class="cp_wrapper">
					<input type="color" name="cp_1" value={fontColor} onChange={(e)=>setFontColor(e.target.value)}  />
				</div>
				<span>color: {fontColor};</span>
			</div>
			<div className="input">
				<select onChange={(e)=>
					setTextAlign(e.target.value)} value={textAlign}>
					<option value="start">start</option>
					<option value="center">center</option>
					<option value="end">end</option>
				</select>
				<span className='result'>text-align:{textAlign};</span>
			</div>
		</div>
	</div>
</div>
</div>
    );
}

export default Font;
