import React from "react";
import './Portfolio.css';
import PortfolioRoot from "./components/PortfolioRoot/PortfolioRoot";

export default function Root(props) {
  return(
   <>
    <div className = "Portfolio-Base">
      <PortfolioRoot />
    </div>
  </>
  )
}
