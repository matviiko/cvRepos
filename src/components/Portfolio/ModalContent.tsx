import React from "react";
import Icon from "@mdi/react";
import {
  mdiAngular, mdiBootstrap, mdiFirebase,
  mdiLanguageCss3,
  mdiLanguageHtml5,
  mdiLanguageJavascript,
  mdiLanguageTypescript, mdiMaterialUi,
  mdiReact,
  mdiSass
} from "@mdi/js";
import {IPortfolioItems} from "../../shared/interfaces";

export interface IModalContentProps {
  onClose(): void;
  item: IPortfolioItems
}

export const ModalContent: React.FC<IModalContentProps> = ({item, onClose}) => {

  return (
    <div className="modal__container">
      <h2 className="box-title">{item.title}</h2>
      <p>{item.text}</p>
      <div className="modal__img">
        <img src={"fe"} alt={item.title}/>
      </div>
      <div className="modal__description">
        <div className="description__github">
          <span className="description__title">Github: </span>
          <span className="description__link"><a href={item.github_url}>Link</a></span>
        </div>
        <div className="description__technologies">
          <span className="description__title">Used technologies:</span>
          <div>
            { item.technology?.html5 ? <Icon path={mdiLanguageHtml5} size={3} color="#dc4b24" title="HTML5"/> : null}
            { item.technology?.css3 ? <Icon path={mdiLanguageCss3} size={3} color="#254add" title="CSS3"/> : null}
            { item.technology?.javascript ? <Icon path={mdiLanguageJavascript} size={3} color="#ddc71f" title="Javascript" /> : null}
            { item.technology?.typescript ? <Icon path={mdiLanguageTypescript} size={3} color="#2a76c5" title="Typescript"/> : null}
            { item.technology?.sass ? <Icon path={mdiSass} size={3} color="#c86095" title="SASS"/> : null}
            { item.technology?.react ? <Icon path={mdiReact} size={3} color="#61dafb" title='React' /> : null}
            { item.technology?.angular ? <Icon path={mdiAngular} size={3} color="#c4232f" title="Angular" /> : null}
            { item.technology?.bootstrap ? <Icon path={mdiBootstrap} size={3} color="#5c3e87" title="Bootstrap" /> : null}
            { item.technology?.materialUi ? <Icon path={mdiMaterialUi} size={3} color="#2e81cb" title="MaterialUi"/> : null}
            { item.technology?.firebase ? <Icon path={mdiFirebase} size={3} color="#f2c42c" title="Firebase"/> : null}
          </div>
        </div>
      </div>
      <div className="modal__btn">
        <button className="btn btn__contact title">visit website</button>
        <button onClick={onClose} className="btn gray-btn title">back</button>
      </div>
    </div>
  )
}