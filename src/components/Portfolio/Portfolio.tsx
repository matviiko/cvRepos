import React from 'react';
import './Portfolio.scss';
import { PortfolioItem } from './PortfolioItem';

export const Portfolio: React.FC = () => {
  return (
    <div className="container m15">
      <h2 className="box-title">Portfolio</h2>
      <div className="portfolio__container">
        <PortfolioItem />
        <PortfolioItem />
        <PortfolioItem />
        <PortfolioItem />
        <PortfolioItem />
        <PortfolioItem />
        <PortfolioItem />
      </div>
    </div>
  );
};
