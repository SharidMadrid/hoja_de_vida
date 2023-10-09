import React from 'react';
import { IconType } from 'react-icons';

interface IconsProps {
  valor: string;
  icon: IconType; // Usar IconType para la prop icon
}

const Skill = ({ valor, icon: Icon }: IconsProps) => { 
  return (
    <div className="flex justify-between items-center mb-10">
      <span className="text-yellow-400"><Icon /></span>
      <div className="skill">{valor}</div>
    </div>
  );
};

export { Skill };
