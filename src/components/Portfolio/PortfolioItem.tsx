import React from 'react';
import image from '../../image/website.jpg';

export interface IPortfolioItem {
  onClick(): void;
}

export const PortfolioItem: React.FC<IPortfolioItem> = props => {
  return (
    <div
      className="portfolio__box"
      onClick={props.onClick}
    >
      <img className="portfolio__img" src={image} alt={image}/>
      <span className="portfolio__name">Web Title</span>
    </div>
  );
};
