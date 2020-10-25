import React from 'react';
import { ExperienceItem } from '../Experience/ExperienceItem';

export const Education: React.FC = () => {
  return (
    <div id="Education" className="container experience">
      <div className="col-left">
        <h2 className="box-title">Education</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim
          laboriosam officiis porro, rem soluta tempora.
        </p>
      </div>
      <div className="col-left">
        <ExperienceItem
          title="Geology oil and gas"
          company="Ivano-Frankivsk National Technical University of Oil and Gas"
          date="June 2010 - June 2015"
          text="About University"
        />
      </div>
    </div>
  );
};
