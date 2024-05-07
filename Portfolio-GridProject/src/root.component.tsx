import './root.css'
import InterfaceableBox from './components/InterfaceableBox';
import { Children, useState } from 'react';
import TopBar from './components/TopBar';
import PersonalResizeable from './components/PersonalResizeable';

export default function Root(props) {
  const [numberOfBoxes, setNumberOfBoxes] = useState(0);
  const [boxesCssClass, setBoxesCssClass] = useState("");

  const renderBoxes = () => {
    return Array(numberOfBoxes)
      .fill(null)
      .map((_, index) => <div key={index} className={`${boxesCssClass}`}> {boxesCssClass === 'Personal-Box' ? (
        <PersonalResizeable key={index}>
          <div><h1>Personal</h1></div>
        </PersonalResizeable>
      ) : (
        <InterfaceableBox key={index} />
      )} </div>);
  };
  
  const handleVisopsBoxes = () => {
    setNumberOfBoxes(1);
    setBoxesCssClass("Visops-Box");
  };

  const handleOtherBox = () => {
    setNumberOfBoxes(2);
    setBoxesCssClass("Other-Box");
  };

  const handlePersonalBox = () =>{
    setNumberOfBoxes(1);
    setBoxesCssClass("Personal-Box");
  };
 
  return( 
    <div className="Grid-Container">
      <TopBar 
        onVisopsBoxesClick={handleVisopsBoxes} 
        onOtherBoxClick={handleOtherBox} 
        onhandlePersonalBoxClick={handlePersonalBox} 
        />
      <section className="Grid-Box-Area">
        {renderBoxes()}
      </section>
    </div>
  );
}