import './root.css'
import InterfaceableBox from './components/InterfaceableBox';
import { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';


export default function Root(props) {

  const [numberOfBoxes, setNumberOfBoxes] = useState(0);


  const renderBoxes = () => {
    return Array(numberOfBoxes)
      .fill(null)
      .map((_, index) => <InterfaceableBox key={index} />);
  }
 

  return( 
    <DndProvider backend={HTML5Backend}>
    <div className = "Grid-Container" >
      <div className="Grid-Title-Outline">
      <section className="Grid-Top-Section">
        <text className="Grid-Section-Text">Please Select An Option: </text>
         <button className="Grid-Add-Button" >Add Box</button>
         <button className = "Grid-Minus-Button">Subtract Box </button>
      </section>
      </div>
      <section className = "Grid-Box-Area">
        {renderBoxes()}
      </section>
      

    </div>
    </DndProvider>
  );
}
