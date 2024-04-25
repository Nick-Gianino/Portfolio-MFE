import "./styles.css";
import { navigateToUrl } from 'single-spa';

export default function Root(props) {
  const handleResumeClick = () => {
    navigateToUrl('/resume');
  };

  const handleAngularProjectsClick = () => {
    navigateToUrl('/grid-project');
  };

  return (
    <>
      <div className="navigation-bar">
        <text className="name-header">Nicholas Gianio</text>
        <a href="#" className="navigation-links" onClick={handleResumeClick}>View Resume</a>

        <text className="react-header">React Projects</text>
        <a href="#" className="navigation-links" onClick={handleAngularProjectsClick}>View Grid Project</a>
      </div>
    </>
  );
}