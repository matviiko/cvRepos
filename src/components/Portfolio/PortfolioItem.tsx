import React from 'react';
import image from '../../image/website.jpg';

export const PortfolioItem: React.FC = item => {
  return (
    <div className="portfolio__box">
      <img src={image} alt={image}/>
      <span className="portfolio__name">Web Title</span>
      <span className="portfolio__date">March 2020</span>
    </div>
  );
};
