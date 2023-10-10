import 'tailwindcss/tailwind.css';

import React from 'react';
import { AiFillYoutube } from 'react-icons/ai';

import { FaCoffee, FaHome } from 'react-icons/fa';
import { BsPeopleFill } from 'react-icons/bs';
import {AiOutlineCalendar } from 'react-icons/ai';
import { MdSyncProblem } from 'react-icons/md';
import { RiBearSmileLine } from 'react-icons/ri';
import { SlOrganization } from 'react-icons/sl';
import { TbBrandSuperhuman } from 'react-icons/tb';

import { BarPorcentaje } from '@/components/BarPorcentaje';
import { IconosLink } from '@/components/IconosLink';
import { Separador } from '@/components/Separador';
import { InfoPersonal } from '@/components/InfPersonal';
import { Skill } from '@/components/Skill';
import { Descripcion } from '@/components/Descripcion';
import { Educacion } from '@/components/Educacion';
import VentanaModal from '@/components/VentanaModal';
import {Portafolio} from '@/components/Portafolio';



const Hojadevida: React.FC = () => {
  return (
    
    <div className="grid grid-cols-[20%,50%,10%] gap-0 w-full font-sans bg-gray-10">

            <section className="col-start-1 col-span-2">
                <div className='flex flex-wrap gap-10 my-4'>
                    <div className="w-full bg-white border border-solid border-gray-300 mb-0 p-4 rounded-lg shadow-md">
                        <div className="relative inline-block">
                            <img className="w-40 h-40 rounded-full" src='/cara.jpeg' alt="Sharid Madrid" />
                            <div className="w-4 h-4 bg-green-500 rounded-full absolute bottom-0 right-0"></div>
                        </div>
                        <div className="text-2xl font-semibold text-gray-700">Sharid Samantha Madrid Ospina</div>
                        <div className="text-base font-normal text-gray-600">Ingeniera de Sistemas</div>
                    </div>
                </div>
                <div className="w-full bg-white border border-solid border-gray-300 mb-0 p-4 rounded-lg shadow-md">
                    <div>
                        <InfoPersonal clave='Edad:' valor='23'/>
                        <InfoPersonal clave='Telefono:' valor='3012218887'/>
                        <InfoPersonal clave='Correo:' valor='ssmo1906@gmail.com'/>
                        <InfoPersonal clave='Dirección:' valor='Rionegro, Antioquia'/>
                        <div className="box-content">
                            <div className="box-title">Estado:</div>
                            <div className="box-value available">Disponible</div>
                        </div>
                        
                    </div>
                </div>    
                <div className="w-full bg-white border border-solid border-gray-300 mb-0 p-4 rounded-lg shadow-md">
                    <div className="box-title">Idiomas</div>
                    <div>
                        <BarPorcentaje clave='Español' valor={90} porcentaje={90} />
                    </div>
                        <BarPorcentaje clave='Ingles' valor={40} porcentaje={40} />
                </div>

                <div className="w-full bg-white border border-solid border-gray-300 mb-0 p-4 rounded-lg shadow-md">
                    <div className="box-title">Lenguajes de programación</div>
                    <div>
                        <BarPorcentaje clave='HTML' valor={70} porcentaje={70} />
                        <BarPorcentaje clave='CSS' valor={60} porcentaje={60} />
                        <BarPorcentaje clave='Python' valor={60} porcentaje={60} />
                        <BarPorcentaje clave='React' valor={40} porcentaje={40} />
                    </div>                    
                </div>
                <div className="w-full bg-white border border-solid border-gray-300 mb-20 p-4 rounded-lg shadow-md">
                    <div className="box-title">Habilidades Extra</div>
                    <Skill icon={TbBrandSuperhuman}  valor='Liderazgo' />
                    <Skill icon={MdSyncProblem}  valor='Resolución de problemas' />
                    <Skill icon={RiBearSmileLine}  valor='Capacidad de escucha' />
                    <Skill icon={AiOutlineCalendar}  valor='Planeación' />
                    <Skill icon={SlOrganization}  valor='Organización' />
                    <Skill icon={BsPeopleFill}  valor='Naturalidad al interactuar con el público' />
                </div>
            </section>
            <section className="col-start-3 col-span-3">
                <div id="centro">
                        <div id="contenedor">
                        <div id="presentacion">
                            <div className="contenido">
                            <div className="texto">
                                <div className="contenedor_titulo ">
                                <div className="nombre">Sharid Madrid </div>
                                <span className="titulo">Ingenieria </span>
                                <span className="nombre"> de Sistemas</span>
                                </div >
                        
                                    <Descripcion valor='Soy estudiante de Ingeniería de Sistemas y 
                                                        actualmente me encuentro en el séptimo 
                                                        semestre. Poseo habilidades en desarrollo de 
                                                        software utilizando React, Django, 
                                                        MySQL, HTML, CSS.'/>
                            </div>
                            <div className="botonContratar">
                            <VentanaModal nombre='HIRE ME' valor='He incluyendo ventas y atención al cliente, lo que 
                                                        me ha permitido desarrollar habilidades de 
                                                        comunicación, organización y gestión de 
                                                        archivos' />                               
                            </div>
                            </div>
                            <img src='/Sharid_Madrid.jpeg' alt="Sharid Madrid" id="imagen" />
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
                        <div><h3>Educación</h3></div>
                        </div>
                        <div className="contenedor-texto">
                        <Descripcion valor="Durante mis años de formacion, he estado inmersa en un constante proceso de aprendizaje y crecimiento. 
                        Mis habilidades se han desarrollado en áreas que abarcan desde el diseño y desarrollo de software
                         hasta la gestión de sistemas complejos. Mi formación en este programa me ha proporcionado una base 
                         sólida para abordar desafíos tecnológicos y resolver problemas de manera efectiva."/>
                        </div>
                        
                    </div>
                    <div className=" p-20 flex-1 flex flex-col justify-center items-center text-center">
                        <div className="w-full h-1/2 bg-white p-0 m-0  items-center">
                            <Educacion centroEducativo=' Universidad de Antioquia' 
                                    rolEducativo='Estudiante' 
                                    fechaEducativa='Jun 2018 - Actualmente' 
                                    titulo='Ingenieria de Sistemas' 
                                    valor="Durante mis años de formacion, he estado inmersa en un constante proceso de aprendizaje y crecimiento. 
                                    Mis habilidades una de lsa cosas que mas destaco de mi formación es que me ha proporcionado una base 
                                     sólida para abordar desafíos tecnológicos y resolver problemas de manera efectiva."/>
                            <Separador/>
                            <Educacion centroEducativo=' Universidad de Antioquia' 
                                    rolEducativo='Estudiante' 
                                    fechaEducativa='Jun 2018 - Actualmente' 
                                    titulo='Ingenieria de Sistemas' 
                                    valor="Durante mis años de formacion, he estado inmersa en un constante proceso de aprendizaje y crecimiento. 
                                    Mis habilidades se han desarrollado en áreas que abarcan desde el diseño y desarrollo de software
                                     hasta la gestión de sistemas complejos. Mi formación en este programa me ha proporcionado una base 
                                     sólida para abordar desafíos tecnológicos y resolver problemas de manera efectiva."/>
                            <Separador/>
                            <Educacion centroEducativo=' SENA' 
                                    rolEducativo='Estudiante' 
                                    fechaEducativa='Feb 2019 - Jun 2020' 
                                    titulo='Técnica en Mesa y Bar' 
                                    valor="Esta técnica, me permitió desarrollar habilidades en el ámbito de la hospitalidad y 
                                    el servicio al cliente. Esta formación me ha brindado una comprensión profunda 
                                    de cómo interactuar de manera efectiva con el público y proporcionar experiencias 
                                    de alta calidad."/>
                            <Separador/>
                            <Educacion centroEducativo=' CLASE' 
                                    rolEducativo='Estudiante' 
                                    fechaEducativa='Feb 2018 - Jun 2019' 
                                    titulo='Secretariado ejecutivo' 
                                    valor="completé una formación en Secretariado Ejecutivo con CLASE, 
                                    lo que me ha dotado de habilidades adicionales en la gestión de la información 
                                    y la comunicación eficiente en un entorno profesional."/>
                            <Separador/>
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
                        link='https://github.com/SharidMadrid/Tour-of-Heroes-Angular.git' 
                        descripcionImagen="Tomada de GitHub" 
                        titulo='Tour Of Heroes' 
                        url='/angular2-tour-of-heroes.jpeg' 
                        valor='La aplicación presenta una lista de superhéroes y permite a los usuarios ver detalles de cada superhéroe y realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar)'
                        type='port' /> 

                    <Portafolio 
                        link="https://media-cdn.tripadvisor.com/media/photo-s/0c/bb/a3/97/predator-ride-in-the.jpg"  
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
            </section>
        <section className="col-start-6 col-span-1">
                <div className="w-full h-full pt-73 pb-131 bg-white flex flex-col justify-start items-center gap-19 inline-flex">
                    <div className="text-2b2b2b text-lg font-inter justify-center font-semibold capitalize leading-22.25 break-words">Links</div>
                    <IconosLink icon={AiFillYoutube} url='https://www.youtube.com/' />
                    <IconosLink icon={FaHome} url='https://www.youtube.com/' />
                    <IconosLink icon={FaCoffee} url='https://www.youtube.com/' />
                </div>
        </section>
        </div>
  );
};

export default Hojadevida;