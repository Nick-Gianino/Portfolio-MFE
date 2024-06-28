import "./styles.css";
import { navigateToUrl } from 'single-spa';
import { useState } from 'react';

export default function Root(props) {
  const [isHovered, setIsHovered] = useState(false);

  const handleResumeClick = () => {
    navigateToUrl('/resume');
  };

  const handleAngularProjectsClick = () => {
    navigateToUrl('/grid-project');
  };

  return (
    <div
      className ={`navigation-circle ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      >

      <div className="navigation-bar">
        <a href="#" className="navigation-links" onClick={handleResumeClick}>View Resume</a>
        <a href="#" className="navigation-links" onClick={handleAngularProjectsClick}>View Grid Project</a>
      </div>
    </div>
  );
}