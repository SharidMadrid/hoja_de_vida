import React from 'react';


interface BarProps {
    clave: string;
    valor: number;
    porcentaje: number;
}

const BarPorcentaje = ({ clave, valor, porcentaje }: BarProps) => {
    return (
        <div>
            <div className="flex justify-between items-center mb-5">
                <div className="text-base font-normal text-gray-600">{clave}</div>
                <div className="text-base font-normal text-gray-600 w-1/3 text-right">{valor}%</div>
            </div>
            <div className="w-40 h-4 bg-gray-300 rounded overflow-hidden flex items-center">
                <div className="h-full bg-yellow-500 rounded" style={{ width: `${porcentaje}%` }}></div>
            </div>
        </div>
    );
};

export  {BarPorcentaje}; 
