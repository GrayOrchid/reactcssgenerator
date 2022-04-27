import React, { useState } from 'react';
import BurgerMenu from '../components/BurgerMenu';

const Flexbox = () => {
    let [justifyContent,setJustifyContent] = useState('center')
    let [alignItems,setAlignItems] = useState('center')
    let [flexFlow,setFlexFlow] = useState('row')
    
    return (
        <div className='page'>
       <BurgerMenu/>
        <div className="page-container __margin">
          <h1 >Flex Box</h1>
           <div className="flex-items ">
              <div className="flex-results" style={{display:`flex` ,justifyContent:`${justifyContent}`,alignItems:`${alignItems}`,flexFlow:`${flexFlow}`}}>
              <div className="flex-result">1</div>
              <div className="flex-result">2</div>
              <div className="flex-result">3</div>
           </div>
        </div>
        <div className="flex-selects">
           <div className="flex-select">
              <span className='result'>justify-content:{justifyContent};</span>
              <select onChange={(e)=>
                 setJustifyContent(e.target.value)} value={justifyContent}>
                 <option value="center">center</option>
                 <option value="space-around">space-around</option>
                 <option value="space-between">space-between</option>
              </select>
           </div>
           <div className="flex-select">
              <span className='result'>align-items:{alignItems};</span>
              <select onChange={(e)=>
                 setAlignItems(e.target.value)} value={alignItems}>
                 <option value="start">start</option>
                 <option value="center">center</option>
                 <option value="end">end</option>
              </select>
           </div>
           <div className="flex-select">
              <span className='result'>flex-flow:{flexFlow};</span>
              <select onChange={(e)=>
                 setFlexFlow(e.target.value)} value={flexFlow}>
                 <option value="column">colum</option>
                 <option value="column-reverse">column-reverse</option>
                 <option value="row">row</option>
                 <option value="row-reverse">row-reverse</option>
              </select>
           </div>
        </div>
     </div>
     </div>
    );
}

export default Flexbox;
