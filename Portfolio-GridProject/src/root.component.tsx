import './root.css'
import InterfaceableBox from './components/InterfaceableBox';
import { useState } from 'react';
import TopBar from './components/TopBar';

export default function Root(props) {
  const [numberOfBoxes, setNumberOfBoxes] = useState(0);
  const [boxesCssClass, setBoxesCssClass] = useState("");

  const renderBoxes = () => {
    return Array(numberOfBoxes)
      .fill(null)
      .map((_, index) => <div key={index} className={`${boxesCssClass}`}> <InterfaceableBox key={index}/> </div>);
  }
  
  const handleVisopsBoxes = () => {
    setNumberOfBoxes(1);
    setBoxesCssClass("Visops-Box");
  }

  const handleOtherBox = () => {
    setNumberOfBoxes(2);
    setBoxesCssClass("Other-Box");
  }
 
  return( 
    <div className="Grid-Container">
      <TopBar onVisopsBoxesClick={handleVisopsBoxes} onOtherBoxClick={handleOtherBox} />
      <section className="Grid-Box-Area">
        {renderBoxes()}
      </section>
    </div>
  );
}