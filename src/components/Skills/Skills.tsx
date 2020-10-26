import React from "react";
import "./Skills.scss"
import Icon from "@mdi/react";
import {
  mdiReact,
  mdiAngular,
  mdiLanguageHtml5,
  mdiLanguageCss3,
  mdiLanguageJavascript,
  mdiSass,
  mdiLanguageTypescript, mdiBootstrap, mdiMaterialUi
} from "@mdi/js";
import {ISection} from "../../shared/interfaces";

export interface ISkillsProps {
  skills: ISection
}

export const Skills: React.FC<ISkillsProps> = props => {
  return (
    <div id="Skills" className="container skills">
      <div className="col-left">
        <h2 className="box-title">{props.skills.title}</h2>
        <p>{props.skills.text}</p>
      </div>
      <div className="col-right">
        { props.skills.skills?.html5 ? <Icon path={mdiLanguageHtml5} size={5} color="#dc4b24" title="HTML5"/> : null}
        { props.skills.skills?.css3 ? <Icon path={mdiLanguageCss3} size={5} color="#254add" title="CSS3"/> : null}
        { props.skills.skills?.javascript ? <Icon path={mdiLanguageJavascript} size={5} color="#ddc71f" title="Javascript"/> : null}
        { props.skills.skills?.typescript ? <Icon path={mdiLanguageTypescript} size={5} color="#2a76c5" title="Typescript"/> : null}
        { props.skills.skills?.sass ? <Icon path={mdiSass} size={5} color="#c86095" title="SASS"/> : null}
        { props.skills.skills?.react ? <Icon path={mdiReact} size={5} color="#61dafb" title='React'/> : null}
        { props.skills.skills?.angular ? <Icon path={mdiAngular} size={5} color="#c4232f" title="Angular"/> : null}
        { props.skills.skills?.bootstrap ? <Icon path={mdiBootstrap} size={5} color="#5c3e87" title="Bootstrap"/> : null}
        { props.skills.skills?.materialUi ? <Icon path={mdiMaterialUi} size={5} color="#2e81cb" title="MaterialUi"/> : null}
      </div>
    </div>
  )
}