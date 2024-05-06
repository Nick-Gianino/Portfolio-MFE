import React from 'react';
import './styles.css'

interface TopBarProps {
  onVisopsBoxesClick: () => void;
  onOtherBoxClick: () => void;
}

const TopBar: React.FC<TopBarProps> = ({ onVisopsBoxesClick, onOtherBoxClick }) => {
  return (
    <div className="Grid-Title-Outline">
      <section className="Grid-Top-Section">
        <text className="Grid-Section-Text">Please Select An Option: </text>
        <button className="Grid-Visops-Button" onClick={onVisopsBoxesClick}>Work Example</button>
        <button className="Grid-two-box-button" onClick={onOtherBoxClick}>Test</button>
        <button className="Grid-Minus-Button" onClick={onOtherBoxClick}>Test</button>
      </section>
    </div>
  );
};

export default TopBar;