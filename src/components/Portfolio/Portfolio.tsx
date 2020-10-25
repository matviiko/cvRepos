import React, {useState} from 'react';
import './Portfolio.scss';
import {PortfolioItem} from './PortfolioItem';
import Modal from "react-modal"
import {ModalContent} from "./ModalContent";

export const Portfolio: React.FC = () => {
  const customStyles = {
    overlay: {
      background: 'rgba(0, 0, 0, 0.5)',
    },
    content: {
      left: '40px',
      right: '40px',
      padding: '30px',
    }
  };

  const [modalIsOpen, setIsOpen] = useState<boolean>(false)
  Modal.setAppElement(':root')

  const openModel = () => {
    setIsOpen(true)
    document.body.classList.add('modal_open')
  }

  const closeModel = () => {
    setIsOpen(false)
    document.body.classList.remove('modal_open')
  }

  return (
    <div id="Portfolio" className="container m15">
      <h2 className="box-title">Portfolio</h2>
      <div className="portfolio__container">
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModel}
          style={customStyles}
          contentLabel="Example"
        >
          <ModalContent onClose={closeModel}/>
        </Modal>
        <PortfolioItem onClick={openModel}/>
        <PortfolioItem onClick={openModel}/>
        <PortfolioItem onClick={openModel}/>
        <PortfolioItem onClick={openModel}/>
        <PortfolioItem onClick={openModel}/>
        <PortfolioItem onClick={openModel}/>
        <PortfolioItem onClick={openModel}/>
        <PortfolioItem onClick={openModel}/>
      </div>
    </div>
  );
};
