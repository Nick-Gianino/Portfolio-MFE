import React from 'react';
import '../root.css'

interface TopBarProps {
  onVisopsBoxesClick: () => void;
  onOtherBoxClick: () => void;
  onhandlePersonalBoxClick: () => void;
}

const TopBar: React.FC<TopBarProps> = ({ onVisopsBoxesClick, onOtherBoxClick, onhandlePersonalBoxClick }) => {
  return (
    <div className="Grid-Title-Outline">
      <section className="Grid-Top-Section">
        <text className="Grid-Section-Text">Please Select An Option: </text>
        <button className="Grid-Visops-Button" onClick={onVisopsBoxesClick}>Work Example</button>
        <button className="Grid-two-box-button" onClick={onOtherBoxClick}>Two Box Example</button>
        <button className="Grid-Minus-Button" onClick={onhandlePersonalBoxClick}>Center Box Example</button>
      </section>
    </div>
  );
};

export default TopBar;