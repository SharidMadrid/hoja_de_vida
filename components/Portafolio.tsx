import React from 'react';
import { IconType } from 'react-icons';

interface PortProps {
  titulo: string;
  valor: string;
  link?: string;
  url?: string;
  descripcionImagen?: string;
  icon?: IconType; // Icono opcional
  type: 'port' | 'con';
}

const Portafolio = ({ type = 'port', titulo, valor, link, url, descripcionImagen, icon: Icon }: PortProps) => {
  return (
    <div className="w-full h-1/2 bg-white p-20 m-10 flex flex-row items-center">
      <div>
        <div className="flex flex-col  items-center gap-2 m-0">
          <div>
            <img className=" mb-5 mt-5 h-210 w-300 " src={url} alt={descripcionImagen} />
            <div className="text-3xl  font-bold text-center mb-10 mt-10 h-50 w-50 text-yellow-400">
              {Icon && <Icon />}
            </div>
          </div>
          <span className="text-1xl  font-bold text-center mb-2">{titulo}</span>
          <span className="text-base  text-gray-600 text-center mb-4">{valor}</span>
          {type === 'port' && link && (
            <a className="text-yellow-400 hover:text-purple-600 visited:text-black" href={link}>
              Learn More ᐅ
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export { Portafolio };
