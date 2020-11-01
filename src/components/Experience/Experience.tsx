import React from 'react';
import './Experience.scss';
import { ExperienceItem } from './ExperienceItem';
import { ISection } from '../../shared/interfaces';

export interface IExperienceProps {
  experience: ISection;
}

export const Experience: React.FC<IExperienceProps> = ({ experience }) => {
  return (
    <div id="Experience" className="container experience">
      <div className="col-left">
        <h2 className="box-title">{experience.title}</h2>
        <p>{experience.text}</p>
      </div>
      <div className="col-left">
        {experience.items
          ?.map((item, index) => {
            return (
              <ExperienceItem
                key={index}
                title={item.title}
                company={item.company}
                date={item.date}
                text={item.text}
              />
            );
          })
          .reverse()}
      </div>
    </div>
  );
};
