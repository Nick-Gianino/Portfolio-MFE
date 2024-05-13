import React from 'react';
import './PortfolioRoot.module.css';
import TopBar from '../TopBar/TopBar';

const PortfolioRoot = () => {
    return (
        <div className = "RootContainer">
            <div className = "topbar">
                <TopBar/>
            </div>
          
        </div>
    );
};

export default PortfolioRoot;