import React from 'react';
import { IPortfolioItem } from '../../shared/interfaces';

export interface IPortfolioItemProps {
  item: IPortfolioItem;
  onClick(): void;
}

export const PortfolioItem: React.FC<IPortfolioItemProps> = ({
  item,
  onClick,
}) => {
  return (
    <div className="portfolio__box" onClick={onClick}>
      <img
        className="portfolio__img"
        src={process.env.PUBLIC_URL + item.url_img}
        alt={item.title}
      />
      <span className="portfolio__name">{item.title}</span>
    </div>
  );
};
