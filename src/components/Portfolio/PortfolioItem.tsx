import React from 'react';
import image from '../../image/website.jpg';

export const PortfolioItem: React.FC = item => {
  return (
    <div className="portfolio__box">
      <img className="portfolio__img" src={image} alt={image}/>
      <span className="portfolio__name">Web Title</span>
    </div>
  );
};
