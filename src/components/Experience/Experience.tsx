import React from "react";
import "./Experience.scss"

export const Experience: React.FC = () => {
    return <div className="container experience">
        <div className="col-left">
            <h2 className="box-title">Experience</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim laboriosam officiis porro, rem soluta tempora.</p>
        </div>
        <div className="experience__item">
            <span className="item__title">Title</span>
            <span>Company</span>
            <p className="item__date">Apr, 2015 — May, 2015</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam cum doloremque ducimus eius enim facere illo ipsa maiores necessitatibus nesciunt, odit quibusdam repellat repudiandae rerum sed sint sunt tenetur ullam.</p>
        </div>
    </div>

}