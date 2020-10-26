import React, {useState} from 'react';
import './Portfolio.scss';
import {PortfolioItem} from './PortfolioItem';
import Modal from "react-modal"
import {ModalContent} from "./ModalContent";
import {ISection} from "../../shared/interfaces";

export interface IPortfolioProps {
  portfolio: ISection
}

export const Portfolio: React.FC<IPortfolioProps> = ({portfolio}) => {
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

  // const createModalHandle = (item: IPortfolioItems) => {
  //   console.log('create Modal')
  //   return (<Modal
  //     isOpen={modalIsOpen}
  //     onRequestClose={closeModel}
  //     style={customStyles}
  //   >
  //     <ModalContent
  //       item={item}
  //       onClose={closeModel}/>
  //   </Modal>)
  // }

  const openModel = () => {
    // createModalHandle(item)
    setIsOpen(true)
    document.body.classList.add('modal_open')
  }

  const closeModel = () => {
    setIsOpen(false)
    document.body.classList.remove('modal_open')
  }

  return (
    <div id="Portfolio" className="container m15">
      <h2 className="box-title">{portfolio.title}</h2>
      <div className="portfolio__container">
        {
          portfolio.portfolioItems?.map((item, index) => {
            return <React.Fragment key={index}> <PortfolioItem

              item={item}
              onClick={openModel}/>

            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModel}
              style={customStyles}
            >
              <ModalContent
                item={item}
                onClose={closeModel}/>
            </Modal> </React.Fragment>
          })
        }

      </div>
    </div>
  );
};
