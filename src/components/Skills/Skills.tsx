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

export const Skills: React.FC = () => {
    return (
        <div id="Skills" className="container skills">
            <div className="col-left">
                <h2 className="box-title">Skills</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam esse fugiat, iste laborum laudantium, nam nobis nostrum, officia optio perspiciatis quia sequi soluta voluptatem!</p>
            </div>
            <div className="col-right">
                <Icon path={mdiLanguageHtml5} size={5} color="#dc4b24"
                      title="HTML5"/>
                <Icon path={mdiLanguageCss3} size={5} color="#254add"
                      title="CSS3"/>
                <Icon path={mdiLanguageJavascript} size={5} color="#ddc71f"
                      title="Javascript" />
                <Icon path={mdiLanguageTypescript} size={5} color="#2a76c5"
                      title="Typescript"/>
                <Icon path={mdiSass} size={5} color="#c86095"
                      title="SASS"/>
                <Icon path={mdiReact} size={5} color="#61dafb"
                      title='React' />
                <Icon path={mdiAngular} size={5} color="#c4232f"
                      title="Angular" />
                <Icon path={mdiBootstrap} size={5} color="#5c3e87"
                      title="Bootstrap" />
                <Icon path={mdiMaterialUi} size={5} color="#2e81cb"
                      title="MaterialUi"/>
            </div>
        </div>
    )
}