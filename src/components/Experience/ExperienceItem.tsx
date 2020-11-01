import React from 'react';
import { Experience } from '../../shared/interfaces';

export const ExperienceItem: React.FC<Experience> = experience => {
  return (
    <div className="experience__item">
      <span className="item__title">{experience.title}</span>
      <span>{experience.company}</span>
      <p className="item__date">{experience.date}</p>
      <p>{experience.text}</p>
    </div>
  );
};
