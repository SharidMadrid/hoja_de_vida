interface PortProps {
    titulo: string;
    valor: string;
    link: string; 
    url: string; 
    descripcionImagen: string; 
  }
  
  const Portafolio = ({ titulo, valor, link, url, descripcionImagen }: PortProps) => {
    return (
        <div className="bg-white flex flex-col items-center gap-10 m-10 w-auto h-auto">
                <span className="tamaño dorado material-symbols-outlined">computer</span>
            <span className="tituloConocimiento">web development</span>
            <span className="descripcionConocimiento">blog, e-commerce</span>
        </div>
    );
  };
  
  export { Portafolio };
  