import React from 'react';
import { IconType } from 'react-icons'; // Importa IconType de react-icons

interface IconsProps {
  icon: IconType; // Usa IconType para la prop icon
  url ?: string;
}

const IconosLink = ({ icon: Icon, url }: IconsProps) => {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <div className=" w-12 h-12 relative">
        <div className=" w-7 h-7 absolute top-0 left-0 bg-yellow-400 rounded-full">
          <a href={url}>
            <span className="symbols-outlined text-black hover:text-purple-600 visited:text-black text-xl">
              <Icon /> {/* Usa el icono dinámico */}
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export { IconosLink };
