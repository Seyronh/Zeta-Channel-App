import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';

import Calendario from '../components/Calendario';
import agendaIcon from '../assets/img/icon/icon-agenda.svg';
import { Pix4, /* PixFondo */ } from '../components/Pixel.jsx';
import btnMas from '../assets/img/icon/icon-btn-mas.svg';
import Btn from '../components/Btn.jsx';

const Agenda = ({ nobtnVisible }) => (

    <>
        {!nobtnVisible && (
            <Pix4 className="absolute top-13 right-0 w-40 h-40 text-pix-light dark:text-pix-dark md:top-14" />
        )}

        <div className="relative pt-23 flex items-center gap-6 justify-center mb-12 md:pt-32 lg:pt-40 lg:mb-16">
            <img src={agendaIcon} alt="Icono de Agenda" className="w-11 h-11 dark:invert md:w-16 md:h-16" />
            <h1 className="text-5xl leading-0 font-pixel uppercase text-black dark:text-white md:text-7xl">AGENDA</h1>
        </div>

        <div className="relative flex justify-center w-full">
            <ul className="grid grid-cols-2 mb-6 gap-x-12 gap-y-6 md:gap-x-16 md:gap-y-8 lg:gap-x-20 lg:gap-y-10">
                <li className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-blue shrink-0 md:w-7 md:h-7"></div>
                    <div className="font-pixel uppercase text-xl text-black dark:text-white whitespace-nowrap md:text-2xl">Películas</div>
                </li>

                <li className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-pink shrink-0 md:w-7 md:h-7"></div>
                    <div className="font-pixel uppercase text-xl text-black dark:text-white whitespace-nowrap md:text-2xl">Series</div>
                </li>

                <li className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-green shrink-0 md:w-7 md:h-7"></div>
                    <div className="font-pixel uppercase text-xl text-black dark:text-white whitespace-nowrap md:text-2xl">Eventos</div>
                </li>

                <li className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-gray-400 shrink-0 md:w-7 md:h-7"></div>
                    <div className="font-pixel uppercase text-xl text-black dark:text-white whitespace-nowrap md:text-2xl">Descanso</div>
                </li>
            </ul>
        </div>

        <div className="md:container md:px-8 mx-auto">

            <Disclosure as="div" className="p-6" defaultOpen={true}>

                {({ open }) => (
                    <>
                        <DisclosureButton className="flex justify-between w-full text-left border-b-2 border-black dark:border-white pb-2">
                            <span className="font-pixel text-xl uppercase text-black dark:text-white md:text-2xl"> Viernes 13 SEP</span>
                            <img
                                src={btnMas}
                                alt="btn desplegar"
                                className={`h-6 w-6 md:w-7 md:h-7 transition-transform ${open ? 'rotate-180' : ''}`}
                            />
                        </DisclosureButton>

                        <DisclosurePanel transition className="origin-top transition duration-200 ease-out data-closed:-translate-y-6 data-closed:opacity-0 pt-4 flex flex-col gap-4 text-sans">

                            <Calendario fecha={13} />

                        </DisclosurePanel>
                    </>
                )}
            </Disclosure>
            <Disclosure as="div" className="p-6">

                {({ open }) => (
                    <>
                        <DisclosureButton className="flex justify-between w-full text-left border-b-2 border-black dark:border-white pb-2">
                            <span className="font-pixel text-xl uppercase text-black dark:text-white md:text-2xl"> Sábado 14 SEP</span>
                            <img
                                src={btnMas}
                                alt="btn desplegar"
                                className={`h-6 w-6 md:w-7 md:h-7 transition-transform ${open ? 'rotate-180' : ''}`}
                            />
                        </DisclosureButton>

                        <DisclosurePanel transition className="origin-top transition duration-200 ease-out data-closed:-translate-y-6 data-closed:opacity-0 pt-4 flex flex-col gap-4 text-sans">

                            <Calendario fecha={14} />

                        </DisclosurePanel>
                    </>
                )}
            </Disclosure>
            <Disclosure as="div" className="p-6">

                {({ open }) => (
                    <>
                        <DisclosureButton className="flex justify-between w-full text-left border-b-2 border-black dark:border-white pb-2">
                            <span className="font-pixel text-xl uppercase text-black dark:text-white md:text-2xl"> Domingo 15 SEP</span>
                            <img
                                src={btnMas}
                                alt="btn desplegar"
                                className={`h-6 w-6 md:w-7 md:h-7 transition-transform ${open ? 'rotate-180' : ''}`}
                            />
                        </DisclosureButton>

                        <DisclosurePanel transition className="origin-top transition duration-200 ease-out data-closed:-translate-y-6 data-closed:opacity-0 pt-4 flex flex-col gap-4 text-sans">

                            <Calendario fecha={15} />

                        </DisclosurePanel>
                    </>
                )}
            </Disclosure>
            {!nobtnVisible && (
                <>
                    <div className="mt-6 pb-12 px-6 md:hidden">
                        <Btn to="#" text="Descargar Agenda" variant='solidgreen' color='green' size='xs' font='sans' />
                    </div>
                    <div className="hidden mt-6 pb-12 px-6 md:block lg:px-36 lg:pt-6 lg:pb-16">
                        <Btn to="#" text="Descargar Agenda" variant='solidgreen' color='green' size='lg' font='sans' />
                    </div>
                </>
            )}
        </div>
    </>

);

export default Agenda;