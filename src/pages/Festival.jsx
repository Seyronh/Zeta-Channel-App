import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';

import festivalIcon from '../assets/img/icon/icon-festival.svg';
import btnMas from '../assets/img/icon/icon-btn-mas.svg';
import { sobreNosotros } from '../data/sobreNosotros.js';
import MapaFestival from '../components/MapaFestival.jsx';
import { Pix3, /* PixFondo TO DO*/ } from '../components/Pixel.jsx';

const Festival = () => (
    <section className="pb-10 pt-23">
        <Pix3 className="absolute top-13 right-0 w-30 h-30 z-[-1] text-pix-light dark:text-pix-dark" />
        {/* Cabecera del Festival */}
        <div className="flex items-center gap-4 justify-center mb-6 dark:text-white">
            <img src={festivalIcon} alt="Icono de Festival" className="w-11 h-11 dark:invert" />
            <h1 className="text-5xl leading-0 font-pixel uppercase text-black dark:text-white">Festival</h1>
        </div>

        {/* Acordeones Dinámicos */}
        {sobreNosotros.map((info, posicion) => (
            <Disclosure
                key={info.id}
                as="div"
                className="p-6 dark:text-white"
                // Si es el primer elemento (posicion 0), defaultOpen será true
                defaultOpen={posicion === 0}>
                {({ open }) => (
                    <>
                        <DisclosureButton className="flex justify-between w-full text-left border-b-2 border-black dark:border-white pb-2">
                            <span className="font-pixel text-xl uppercase"> {info.pregunta} </span>
                            <img
                                src={btnMas}
                                alt="btn desplegar"
                                className={`h-6 w-6 transition-transform ${open ? 'rotate-180' : ''}`}
                            />
                        </DisclosureButton>

                        <DisclosurePanel transition className="origin-top transition duration-200 ease-out data-closed:-translate-y-6 data-closed:opacity-0 pt-4 flex flex-col gap-4 text-sans">

                            {/* 1. RENDERIZADO DE PÁRRAFOS (Solo si existen) */}
                            {info.parrafo1 && <span className="block">{info.parrafo1}</span>}


                            {/* 2. RENDERIZADO DE LISTAS CON PUNTO (Solo si existe la lista) */}
                            {info.lista && (
                                <ul className="flex flex-col gap-2 pl-2">
                                    {info.lista.map((elemento, index) => (
                                        <li key={index} className="flex gap-2">
                                            <span>•</span>
                                            <span>{elemento}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}



                            {/* ─── RENDEREAR IMAGEN (SUELTA O EN ARRAY) ─── */}
                            {info.imagen && (
                                <div className="mt-4">
                                    {Array.isArray(info.imagen) ? (
                                        /* SI ES UN ARRAY: Creamos una cuadrícula para que salgan una al lado de la otra */
                                        <div className="flex flex-col gap-4 -mx-6 dark:bg-white">
                                            {info.imagen.map((imgSrc, posicion) => (
                                                <div key={posicion}>
                                                    <img
                                                        src={imgSrc}
                                                        alt={`${info.pregunta} - ${posicion + 1}`}
                                                        className="w-full h-full"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        /* SI ES UNA SOLA IMAGEN: La pintamos normal ocupando todo el ancho */
                                        <div className="w-full overflow-hidden rounded-2xl dark:bg-white">
                                            <img
                                                src={info.imagen}
                                                alt={info.pregunta}
                                                className="w-full h-auto object-cover"
                                            />
                                        </div>
                                    )}
                                </div>
                            )}

                            {/* SI ES EL ACORDEÓN DE LOCALIZACIÓN, PINTAMOS EL MAPA */}
                            {info.pregunta === "Localización" && (
                                <div className="mt-4 -mx-6">
                                    <MapaFestival />
                                </div>
                            )}

                            {/* 3. RENDERIZADO DE FAQ (Emparejando Pregunta + Respuesta una debajo de otra) */}
                            {info.faq && info.respuestas && (
                                <div className="flex flex-col gap-6">
                                    {info.faq.map((preguntaFaq, posicion) => (
                                        <div key={posicion} className="flex flex-col gap-1">
                                            {/* Pregunta */}
                                            <span className="font-bold text-black dark:text-white">
                                                {preguntaFaq}
                                            </span>
                                            {/* Respuesta asociada por el mismo índice */}
                                            <span className="text-neutral-600 dark:text-neutral-300">
                                                {info.respuestas[posicion]}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            )}

                        </DisclosurePanel>
                    </>
                )}
            </Disclosure>
        ))}
    </section>
);

export default Festival;

/* adaptar a tablet y pc TO DO */