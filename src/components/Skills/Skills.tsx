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
  mdiLanguageTypescript, mdiBootstrap, mdiMaterialUi, mdiGithub
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
        { props.skills.skills?.html5 ? <a target="_blank" rel="noopener noreferrer" href="https://html.spec.whatwg.org"><Icon path={mdiLanguageHtml5} size={5} color="#dc4b24" title="HTML5"/></a> : null}
        { props.skills.skills?.css3 ? <a target="_blank" rel="noopener noreferrer" href="https://www.w3.org/Style/CSS"><Icon path={mdiLanguageCss3} size={5} color="#254add" title="CSS3"/></a> : null}
        { props.skills.skills?.javascript ? <a target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/JavaScript"><Icon path={mdiLanguageJavascript} size={5} color="#ddc71f" title="Javascript"/></a> : null}
        { props.skills.skills?.typescript ? <a target="_blank" rel="noopener noreferrer" href="https://www.typescriptlang.org"><Icon path={mdiLanguageTypescript} size={5} color="#2a76c5" title="Typescript"/></a> : null}
        { props.skills.skills?.sass ? <a target="_blank" rel="noopener noreferrer" href="https://sass-lang.com"><Icon path={mdiSass} size={5} color="#c86095" title="SASS"/></a> : null}
        { props.skills.skills?.react ? <a target="_blank" rel="noopener noreferrer" href="https://reactjs.org"><Icon path={mdiReact} size={5} color="#61dafb" title='React'/></a> : null}
        { props.skills.skills?.angular ? <a target="_blank" rel="noopener noreferrer" href="https://angular.io"><Icon path={mdiAngular} size={5} color="#c4232f" title="Angular"/></a> : null}
        { props.skills.skills?.bootstrap ? <a target="_blank" rel="noopener noreferrer" href="https://getbootstrap.com"><Icon path={mdiBootstrap} size={5} color="#5c3e87" title="Bootstrap"/></a> : null}
        { props.skills.skills?.materialUi ? <a target="_blank" rel="noopener noreferrer" href="https://material-ui.com"><Icon path={mdiMaterialUi} size={5} color="#2e81cb" title="MaterialUi"/></a> : null}
        { props.skills.skills?.github ? <a target="_blank" rel="noopener noreferrer" href="https://github.com"><Icon path={mdiGithub} size={5} color={'black'} title="Github"/></a> : null}
      </div>
    </div>
  )
}