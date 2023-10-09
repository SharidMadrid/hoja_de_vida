interface InfoProps{
    clave: string;
    valor: string;

}
const InfoPersonal = ({clave, valor}:InfoProps) =>{
    return (
        <div className="box-content flex justify-between items-center mb-10">
        <div className="box-title">{clave}</div>
        <div className="box-value">{valor}</div>
    </div>
    );
};
export {InfoPersonal};