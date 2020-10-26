import React from 'react';
import { IPortfolioItems } from '../../shared/interfaces';

export interface IPortfolioItem {
  item: IPortfolioItems
  onClick(): void;
}

export const PortfolioItem: React.FC<IPortfolioItem> = ({item, onClick}) => {
  return (
    <div
      className="portfolio__box"
      onClick={onClick}
    >
      <img className="portfolio__img" src={item.url_img} alt={item.title}/>
      <span className="portfolio__name">{item.title}</span>
    </div>
  );
};
