import { Link } from 'react-router-dom';
/* import { useState } from 'react'; */

import btnMas from '../assets/img/icon/icon-btn-mas.svg';
import Btn from './Btn';
import LabelCard from './LabelCard.jsx';


const Card = ({ card }) => {
    const { tituloEsp, imagen, imagenCard, tipo, duracion, fecha, horario, slug
    } = card;


    return (
        <Link to={`/Articulo/${slug}`} className="relative mx-auto bg-pink hover:bg-blue rounded-l-3xl rounded-br-3xl flex flex-col group transition-colors p-4 duration-300">
            <div className="absolute bottom-full right-0 -mb-[2px] z-10">

                <LabelCard className="w-full relative text-pink group-hover:text-blue transition-colors duration-300" />

                {/* He tenido que crear un componente al svg para poder ponerle el hover como className y además hacer el group-hover para que se haga en modo grupo */}
            </div>
            <div className="grid gap-3 grid-cols-3 md:flex-col md:gap-5 md:flex h-full justify-between">
                <div className="col-span-2 flex flex-col gap-4 font-sans justify-around h-full">

                    <h1 className="text-[calc(1.5rem_+_0.5vw)] font-bold uppercase leading-[calc(1.5rem_+_0.5vw)] text-black">{tituloEsp}</h1>


                    <ul className="flex flex-col gap-3">
                        <li className="flex justify-between">
                            <p className="text-[calc(1.25rem_+_0.25vw)] font-sans text-black group-hover:text-white">{tipo}</p>
                            <p className="text-[calc(1.25rem_+_0.25vw)] text-black  group-hover:text-white font-pixel">{duracion} min</p>
                        </li>
                        <li className="w-full h-[2px] bg-black group-hover:bg-white"></li>
                        <li className="flex justify-between">
                            <div>
                                <Btn text={`${fecha} sep`} variant='solidblue' size='xs' font='pixel' />
                            </div>
                            <div className="flex gap-2 md:gap-4">
                                {horario.map((hora) => (
                                    <Btn key={hora.hora} text={hora.hora} variant='outlineblack' size='xs' font='pixel' />
                                )
                                )}
                            </div>
                        </li>
                    </ul>

                </div>
                <div className="h-[160px] md:h-auto">
                    <div className="h-full overflow-hidden rounded-3xl">
                        <img src={imagenCard} alt={tituloEsp} className="will-change-transform w-full h-full object-cover md:hidden" />
                        <img src={imagen} alt={tituloEsp} className="hidden md:block will-change-transform w-full h-full object-cover object-top" />


                        {/* Cuando veias la tarjeta sin el will-change-transform la imagen se veia como sin renderizar o pixelada pero cuando acercaba con el zoom en el buscador como que lo arreglaba, le he preguntado a la ia para ver qué era y es que por defecto el buscador como que la renderiza desde el CPU. Y ahora saca la imagen del flujo normal de renderizado de la CPU y le asigna su propia capa de memoria dedicada en la tarjeta gráfica (GPU). Al ser la GPU la que ahora se encarga de pintar esa tarjeta, aplica algoritmos de suavizado mucho más potentes (como los que usa Photoshop o Figma), eliminando el pixelado o el aspecto borroso (ya no sé si eso afectará a la optimización) */}

                    </div>

                    <div className="absolute bottom-3 right-4">
                        <img src={btnMas} alt="Más información" />
                    </div>
                </div>
            </div>
        </Link>
    )

};

export default Card;


/* TO DO: Filtros */