import 'tailwindcss/tailwind.css';

import React from 'react';
import { AiFillYoutube } from 'react-icons/ai';
import { FaCoffee, FaHome} from 'react-icons/fa';
import { BarPorcentaje } from '@/components/BarPorcentaje';
import { IconosLink } from '@/components/IconosLink';
import { Separador } from '@/components/Separador';
import { InfoPersonal } from '@/components/InfPersonal';
import { Skill } from '@/components/Skill';
import { Descripcion } from '@/components/Descripcion';
import { Educacion } from '@/components/Educacion';
import {Portafolio} from '@/components/Portafolio';

const Hojadevida: React.FC = () => {
  return (
    <div className="grid grid-cols-[20%,70%,10%] gap-0 w-full font-sans bg-gray-100">
            <aside className="col-start-1 col-span-2">
                <div className='flex flex-wrap gap-10'>
                    <div className="w-full bg-white border border-solid border-gray-300 mb-0 p-4 rounded-lg shadow-md">
                        <div className="relative inline-block">
                            <img className="w-36 h-36 rounded-full" src="https://via.placeholder.com/150x150" alt="Profile Picture" />
                            <div className="w-4 h-4 bg-green-500 rounded-full absolute bottom-0 right-0"></div>
                        </div>
                        <div className="text-2xl font-semibold text-gray-700">Rayan Adlardard</div>
                        <div className="text-base font-normal text-gray-600">Front-end Developer</div>
                    </div>
                </div>
                <div className="w-full bg-white border border-solid border-gray-300 mb-0 p-4 rounded-lg shadow-md">
                    <div>
                        <InfoPersonal clave='Edad:' valor='23'/>
                        <InfoPersonal clave='Telefono:' valor='3012218887'/>
                        <div className="box-content">
                            <div className="box-title">Freelance:</div>
                            <div className="box-value available">Available</div>
                        </div>
                    </div>
                </div>    
                <div className="w-full bg-white border border-solid border-gray-300 mb-0 p-4 rounded-lg shadow-md">
                    <div className="box-title">Languages</div>
                    <div>
                        <BarPorcentaje clave='Ingles' valor={100} porcentaje={100} />
                    </div>
                    <BarPorcentaje clave='Ingles' valor={50} porcentaje={50} />
                </div>

                <div className="w-full bg-white border border-solid border-gray-300 mb-0 p-4 rounded-lg shadow-md">
                    <div className="box-title">Programming Languages</div>
                    <div>
                        <BarPorcentaje clave='Html' valor={90} porcentaje={90} />
                    </div>

                    <BarPorcentaje clave='Ingles' valor={50} porcentaje={50} />
                    
                </div>
                <div className="w-full bg-white border border-solid border-gray-300 mb-20 p-4 rounded-lg shadow-md">
                    <div className="box-title">Extra Skills</div>
                    <Skill icon={FaHome}  valor='Bootstrap, Materialize' />
                    <Skill icon={FaHome}  valor='Bootstrap, Materialize' />
                </div>
            </aside>
            <main className="col-start-3 col-span-8">
                <div id="centro">
                        <div id="contenedor">
                        <div id="presentacion">
                            <div className="contenido">
                            <div className="texto">
                                <div className="contenedor_titulo">
                                <div className="nombre">I’m Rayan Adlrdard</div>
                                <span className="titulo">Front-end </span>
                                <span className="nombre">Developer</span>
                                </div>
                                    <Descripcion valor='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc lectus.'/>
                            </div>
                            <div className="botonContratar">
                                <a href="https://www.youtube.com/" className="enlace"></a>
                                <div className="textoBoton">HIRE ME ➔</div>
                            </div>
                            </div>
                            <img src="https://via.placeholder.com/326x459" alt="Rayan's Picture" id="imagen" />
                        </div>
                        </div>
                    </div>
                    <div className="centrar">
                        <div className="contenedor_titulo">
                        <div><h3>My Knowledge</h3></div>
                        </div>
                        <div className="contenedor-texto">
                        <Descripcion valor="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc lectus"/>
                        </div>
                    </div>

                    <div id="conocimientos">
                        <div className="grid-container">
                        <Portafolio 
                            icon={FaCoffee}
                            titulo='web development' 
                            valor='blog, e-commerce'
                            type='con' /> 
                         <Portafolio 
                            icon={FaCoffee}
                            titulo='web development' 
                            valor='blog, e-commerce'
                            type='con' /> 
                            <Portafolio 
                            icon={FaCoffee}
                            titulo='web development' 
                            valor='blog, e-commerce'
                            type='con' /> 
                            <Portafolio 
                            icon={FaCoffee}
                            titulo='web development' 
                            valor='blog, e-commerce'
                            type='con' /> 
                            <Portafolio 
                            icon={FaCoffee}
                            titulo='web development' 
                            valor='blog, e-commerce'
                            type='con' /> 
                            <Portafolio 
                            icon={FaCoffee}
                            titulo='web development' 
                            valor='blog, e-commerce'
                            type='con' /> 
                    </div>
                    <div className="centrar">
                        <div className="contenedor_titulo">
                        <div><h3>Education</h3></div>
                        </div>
                        <div className="contenedor-texto">
                        <Descripcion valor="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc lectus"/>
                        </div>
                    </div>
                    <div className=" p-20 flex-1 flex flex-col justify-center items-center text-center">
                        <div className="w-full h-1/2 bg-white p-0 m-0  items-center">
                            <Educacion centroEducativo=' University of Toronto' rolEducativo='Student' fechaEducativa='Jan 2016 - Dec 2021' titulo='Certificado' valor="Lorem ipsum dolor sit amet, consectetur"/>
                            <Separador/>
                            <Educacion centroEducativo=' University of Toronto' rolEducativo='Student' fechaEducativa='Jan 2016 - Dec 2021' titulo='Certificado' valor="Lorem ipsum dolor sit amet, consectetur"/>
                            <Separador/>
                            <Educacion centroEducativo=' University of Toronto' rolEducativo='Student' fechaEducativa='Jan 2016 - Dec 2021' titulo='Certificado' valor="Lorem ipsum dolor sit amet, consectetur"/>

                        </div>
                        
                        
                    </div>
                    <div className="centrar">
                        <div className="contenedor_titulo">
                        <div><h3>Portafolio</h3></div>
                        </div>
                        <div className="contenedor-texto">
                        <Descripcion valor='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,Natoque rutrum semper sed suspendisse nunc lectus.'/>
                        </div>
                    </div>
                    
                    <div id="conocimientos">
                        <div className="grid-container">
                            <Portafolio 
                            link='https://media-cdn.tripadvisor.com/media/photo-s/0c/bb/a3/97/predator-ride-in-the.jpg' 
                            descripcionImagen="Descripción de la imagen" 
                            titulo='How to make web templates' 
                            url='https://www.youtube.com/' 
                            valor='blog, e-commerce'
                            type='port' /> 
                            
                            <Portafolio 
                            link='https://media-cdn.tripadvisor.com/media/photo-s/0c/bb/a3/97/predator-ride-in-the.jpg' 
                            descripcionImagen="Descripción de la imagen" 
                            titulo='How to make web templates' 
                            url='https://www.youtube.com/' 
                            valor='blog, e-commerce'
                            type='port' /> 
                    
                            <Portafolio 
                            link='https://media-cdn.tripadvisor.com/media/photo-s/0c/bb/a3/97/predator-ride-in-the.jpg' 
                            descripcionImagen="Descripción de la imagen" 
                            titulo='How to make web templates' 
                            url='https://www.youtube.com/' 
                            valor='blog, e-commerce'
                            type='port' /> 
                        </div>
                    </div>
                </div>
                    
            </main>
        <div>
                <div className="w-full h-full pt-73 pb-131 bg-white flex flex-col justify-start items-center gap-19 inline-flex">
                    <div className="text-2b2b2b text-lg font-inter justify-center font-semibold capitalize leading-22.25 break-words">Links</div>
                    <IconosLink icon={AiFillYoutube} url='https://www.youtube.com/' />
                    <IconosLink icon={FaHome} url='https://www.youtube.com/' />
                    <IconosLink icon={FaCoffee} url='https://www.youtube.com/' />
                </div>
            </div>
        </div>
  );
};

export default Hojadevida;