import React, { useState } from 'react';
import './Portfolio.scss';
import { PortfolioItem } from './PortfolioItem';
import Modal from 'react-modal';
import { ModalContent } from './ModalContent';
import { IPortfolioItem, ISection } from '../../shared/interfaces';

export interface IPortfolioProps {
  portfolio: ISection;
}

export const Portfolio: React.FC<IPortfolioProps> = ({ portfolio }) => {
  const customStyles = {
    overlay: {
      background: 'rgba(0, 0, 0, 0.5)',
    },
    content: {
      left: '40px',
      right: '40px',
      padding: '30px',
    },
  };

  const [portfolioItem, setPortfolioItem] = useState<IPortfolioItem>({
    title: 'Web Blog',
    text: 'text about Website',
    url_img: '../../image/website.jpg',
    github_url: 'url',
    website: 'url',
    technology: {
      html5: true,
      css3: true,
      typescript: true,
      sass: true,
      angular: true,
      bootstrap: true,
      materialUi: true,
      firebase: true,
    },
  });

  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  Modal.setAppElement(':root');

  const openModel = (item: IPortfolioItem) => {
    setPortfolioItem(item);
    setIsOpen(prev => !prev);
    document.body.classList.add('modal_open');
  };

  const closeModel = () => {
    setIsOpen(prev => !prev);
    document.body.classList.remove('modal_open');
  };

  return (
    <div id="Portfolio" className="container m15">
      <h2 className="box-title">{portfolio.title}</h2>
      <div className="portfolio__container">
        {portfolio.portfolioItems
          ?.map((item, index) => {
            return (
              <PortfolioItem
                key={index}
                item={item}
                onClick={() => openModel(item)}
              />
            );
          })
          .reverse()}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModel}
          style={customStyles}
        >
          <ModalContent item={portfolioItem} onClose={closeModel} />
        </Modal>
      </div>
    </div>
  );
};
