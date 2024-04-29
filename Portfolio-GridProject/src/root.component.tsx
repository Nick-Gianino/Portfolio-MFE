import './root.css'
import InterfaceableBox from './components/InterfaceableBox';
import { useState } from 'react';

export default function Root(props) {

  const [numberOfBoxes, setNumberOfBoxes] = useState(0);
  const [boxesCssClass, setBoxesCssClass] = useState("");


  const renderBoxes = () => {
    return Array(numberOfBoxes)
      .fill(null)
      .map((_, index) =><div key={index} className={"${boxesCssClass}"}> <InterfaceableBox key={index} /> </div>);
  }
  
  const handleVisopsBoxes = () => {
    setNumberOfBoxes(1);
    setBoxesCssClass("Visops-Button");
    return;
  }
 

  return( 
    <div className = "Grid-Container">
      <div className="Grid-Title-Outline">
      <section className="Grid-Top-Section">
        <text className="Grid-Section-Text">Please Select An Option: </text>
         <button className="Grid-Visops-Button" onClick={() => handleVisopsBoxes()}>Work Example</button>
         <button className = "Grid-Minus-Button">Subtract Box </button>
      </section>
      </div>
      <section className = "Grid-Box-Area">
        {renderBoxes()}
      </section>
    </div>
  );
}
