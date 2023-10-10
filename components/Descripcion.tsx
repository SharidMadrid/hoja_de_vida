interface DescProps{
    valor: string;

}
const Descripcion = ({valor}:DescProps) =>{
    return (
           
        <span className=" text-gray-500 text-base font-normal font-inter capitalize leading-6 break-words text-justify">{valor}</span>
    );
};
export {Descripcion};