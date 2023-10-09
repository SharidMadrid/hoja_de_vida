import { Descripcion } from "./Descripcion";

interface EduProps {
  centroEducativo: string;
  rolEducativo: string;
  fechaEducativa: string;
  titulo: string;
  valor: string;
}

const Educacion = ({
  centroEducativo,
  rolEducativo,
  fechaEducativa,
  titulo,
  valor,
}: EduProps) => {
  return (
    <div className="w-full h-1/2 bg-white p-20 m-0 flex flex-row items-center">
      <div className="flex flex-col w-96 gap-2 mr-5">
        <div className="mb-2 text-2b2b2b text-lg font-inter font-semibold capitalize leading-22.25 break-words">
          {centroEducativo}
        </div>
        <div className="mb-2 text-2b2b2b text-base font-inter font-normal capitalize leading-24 break-words">
        {rolEducativo}
        <span className="text-white text-xs font-inter font-normal leading-4.5 break-words bg-yellow-400 rounded-lg ml-2">
          {fechaEducativa}
        </span>
      </div>
      </div>
      <div className="flex flex-col w-424 h-88 gap-10">
      <div className="mb-2 text-2b2b2b text-lg font-inter font-semibold capitalize leading-22.25 break-words">
        {titulo}
      </div>
      <Descripcion valor={valor} />
    </div>
    </div>
  );
};

export { Educacion };
