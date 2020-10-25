import React from "react";
import image from "../../image/website.jpg"
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

export interface IModalContentProps {
  onClose(): void;
}

export const ModalContent: React.FC<IModalContentProps> = props => {

  return (
    <div className="modal__container">
      <h2 className="box-title">Title website</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus animi aperiam blanditiis corporis cumque dolores, eveniet facilis fugiat ipsum labore, natus neque nisi obcaecati provident quis saepe sapiente sunt tempora.</p>
      <div className="modal__img">
        <img src={image} alt={image}/>
      </div>
      <div className="modal__description">
        <div className="description__github">
          <span className="description__title">Github: </span>
          <span className="description__link">Link</span>
        </div>
        <div className="description__technologies">
          <span className="description__title">Used technologies:</span>
          <div>
            <Icon path={mdiLanguageHtml5} size={3} color="#dc4b24"
                  title="HTML5"/>
            <Icon path={mdiLanguageCss3} size={3} color="#254add"
                  title="CSS3"/>
            <Icon path={mdiLanguageJavascript} size={3} color="#ddc71f"
                  title="Javascript" />
            <Icon path={mdiLanguageTypescript} size={3} color="#2a76c5"
                  title="Typescript"/>
            <Icon path={mdiSass} size={3} color="#c86095"
                  title="SASS"/>
            <Icon path={mdiReact} size={3} color="#61dafb"
                  title='React' />
            <Icon path={mdiAngular} size={3} color="#c4232f"
                  title="Angular" />
            <Icon path={mdiBootstrap} size={3} color="#5c3e87"
                  title="Bootstrap" />
            <Icon path={mdiMaterialUi} size={3} color="#2e81cb"
                  title="MaterialUi"/>
            <Icon path={mdiFirebase} size={3} color="#f2c42c"
                  title="Firebase"/>
          </div>
        </div>
      </div>
      <div className="modal__btn">
        <button className="btn btn__contact title">visit website</button>
        <button onClick={props.onClose} className="btn gray-btn title">back</button>
      </div>
    </div>
  )
}