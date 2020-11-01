import React from 'react';
import { ExperienceItem } from '../Experience/ExperienceItem';
import { ISection } from '../../shared/interfaces';

export interface IEducationProps {
  education: ISection;
}

export const Education: React.FC<IEducationProps> = ({ education }) => {
  return (
    <div id="Education" className="container experience">
      <div className="col-left">
        <h2 className="box-title">{education.title}</h2>
        <p>{education.text}</p>
      </div>
      <div className="col-left">
        {education.items
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
