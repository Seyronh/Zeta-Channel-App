import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';


import flechaDesplegable from '../assets/img/icon/icon-chevron.svg';
import peagtinaStar from '../assets/img/icon/articulo-star-icon.svg';
import peagtinaCloud from '../assets/img/icon/articulo-cloud-icon.svg';
import peagtinaSun from '../assets/img/icon/articulo-sun-icon.svg';

const AcordeonArticulo = ({ desplegable }) => {
    const { tituloEsp, tituloVo, directorx, bandaSonora, saga, genero, sinopsis, personajes } = desplegable;

    const fondos = [peagtinaStar, peagtinaCloud, peagtinaSun];

    return (
        <>
            <Disclosure>
                <DisclosureButton className="mt-12 flex w-full items-center uppercase font-pixel text-2xl">
                    {({ open }) => (
                        <>
                            <span className="flex-1 text-left">información</span>
                            <img
                                src={flechaDesplegable}
                                alt=""
                                aria-hidden="true"
                                className={`h-6 w-6 transition-transform ${open ? 'rotate-180' : ''}`}
                            />
                        </>
                    )}
                </DisclosureButton>
                <DisclosurePanel>
                    <ul className="flex flex-col text-black font-sans md:grid md:grid-cols-2 md:justify-between md:gap-x-8 md:gap-y-2 md:mt-4">
                        <li className="flex justify-between border-b-2 border-black py-3">
                            <p className="font-bold md:text-lg">Título ESP</p>
                            <p>{tituloEsp}</p>
                        </li>
                        <li className="flex justify-between border-b-2 border-black py-3">
                            <p className="font-bold md:text-lg">Título VO</p>
                            <p>{tituloVo}</p>
                        </li>
                        <li className="flex justify-between border-b-2 border-black py-3">
                            <p className="font-bold md:text-lg">Dirección</p>
                            <p>{directorx}</p>
                        </li>
                        <li className="flex justify-between border-b-2 border-black py-3">
                            <p className="font-bold md:text-lg">Música</p>
                            <p>{bandaSonora}</p>
                        </li>
                        <li className="flex justify-between border-b-2 border-black py-3">
                            <p className="font-bold md:text-lg">Saga</p>
                            <p>{saga.join('  - ')}</p>
                        </li>
                        <li className="flex justify-between border-b-2 border-black py-3">
                            <p className="font-bold md:text-lg">Categoria</p>
                            <p>{genero.join('  - ')}</p>
                        </li>
                        <li className="flex flex-col justify-between gap-3 py-3 md:col-span-2">
                            <p className="font-bold md:text-lg">Sinopsis</p>
                            <p>{sinopsis}</p>
                        </li>
                    </ul>
                </DisclosurePanel>
            </Disclosure>
            <Disclosure>
                <DisclosureButton className="pt-6 flex w-full items-center uppercase font-pixel text-2xl">
                    {({ open }) => (
                        <>
                            <span className="flex-1 text-left">reparto</span>
                            <img
                                src={flechaDesplegable}
                                alt=""
                                aria-hidden="true"
                                className={`h-6 w-6 transition-transform ${open ? 'rotate-180' : ''}`}
                            />
                        </>
                    )}
                </DisclosureButton>
                <DisclosurePanel className="text-black">

                    <div className="grid grid-cols-2 justify-between">

                        {personajes.map((actores, posicion) => {
                            const fondo = fondos[posicion % fondos.length];

                            {/* 1. he creado una constante que incluye las imagenes de fondo
                            2.  he añadido la propiedad posicion para que el map diga la posición del personaje
                            3. hemos hecho un módulo (%) de operaciones con arrays
                            4. usamos la propiedad length para saber la longitud de elementos del arrays
                            5. por tanto está dividiendo los fondos a la posicion de cada actor
                        */}

                            return (
                                <div key={actores.id} className="flex flex-col gap-2 items-center w-full">

                                    {/* CONTENEDOR PRINCIPAL */}
                                    <div className="relative aspect-square p-4 flex items-center justify-center overflow-hidden">

                                        <img
                                            src={fondo}
                                            alt={`Fondo ${actores.actor}`}
                                            className="w-full h-full"
                                        />

                                        {/* ha sido imposible crear la mascara de recorte a las imagenes de los actores segun el svg */}

                                        <img
                                            src={actores.imagen}
                                            alt={actores.actor}
                                            className="absolute w-25 h-25 object-top object-cover mt-6"
                                        />

                                    </div>

                                    {/* TEXTOS */}
                                    <div className="text-center">
                                        <h3 className="text-base font-bold text-black leading-tight">{actores.actor}</h3>
                                        <p className="text-neutral-600 font-sans mt-0.5">{actores.personaje}</p>
                                    </div>

                                </div>
                            );
                        })}
                    </div>

                </DisclosurePanel>
            </Disclosure>
        </>
    )

};
export default AcordeonArticulo;