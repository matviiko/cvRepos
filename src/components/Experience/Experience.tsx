import React from 'react';
import './Experience.scss';
import {ExperienceItem} from './ExperienceItem';

export const Experience: React.FC = () => {
  return (
    <div className="container experience">
      <div className="col-left">
        <h2 className="box-title">Experience</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim
          laboriosam officiis porro, rem soluta tempora.
        </p>
      </div>
      <div className="col-left">
        <ExperienceItem
          date="Jun 2020 - Present"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim laboriosam officiis porro, rem soluta tempora."
          company="Freelance"
          title="Javascript Developer"
        />
        <ExperienceItem
          date="Jun 2020 - Present"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim laboriosam officiis porro, rem soluta tempora."
          company="Freelance"
          title="Javascript Developer"
        />
      </div>
    </div>
  );
};
