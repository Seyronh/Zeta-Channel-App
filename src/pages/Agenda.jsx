import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';

import Calendario from '../components/Calendario';
import agendaIcon from '../assets/img/icon/icon-agenda.svg';
import { Pix4, /* PixFondo */ } from '../components/Pixel.jsx';
import btnMas from '../assets/img/icon/icon-btn-mas.svg';
import Btn from '../components/Btn.jsx';

const Agenda = () => (

    <>
        <Pix4 className="absolute top-13 right-0 w-40 h-40 z-[-1] text-pix-light" />
        <div className="pt-23 flex items-center gap-4 justify-center mb-12">
            <img src={agendaIcon} alt="Icono de Agenda" className="w-11 h-11" />
            <h1 className="text-5xl leading-0 font-pixel uppercase">AGENDA</h1>
        </div>

        <div className="flex justify-center w-full">
            <ul className="grid grid-cols-2 mb-6 gap-x-12 gap-y-6">
                <li className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-blue shrink-0"></div>
                    <div className="font-pixel uppercase text-xl text-black dark:text-white whitespace-nowrap">Películas</div>
                </li>

                <li className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-pink shrink-0"></div>
                    <div className="font-pixel uppercase text-xl text-black dark:text-white whitespace-nowrap">Series</div>
                </li>

                <li className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-green shrink-0"></div>
                    <div className="font-pixel uppercase text-xl text-black dark:text-white whitespace-nowrap">Eventos</div>
                </li>

                <li className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-gray-400 shrink-0"></div>
                    <div className="font-pixel uppercase text-xl text-black dark:text-white whitespace-nowrap">Descanso</div>
                </li>
            </ul>
        </div>

        <Disclosure as="div" className="p-6" defaultOpen={true}>

            {({ open }) => (
                <>
                    <DisclosureButton className="flex justify-between w-full text-left border-b-2 border-black dark:border-white pb-2">
                        <span className="font-pixel text-xl uppercase"> Viernes 13 SEP</span>
                        <img
                            src={btnMas}
                            alt="btn desplegar"
                            className={`h-6 w-6 transition-transform ${open ? 'rotate-180' : ''}`}
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
                        <span className="font-pixel text-xl uppercase"> Sábado 14 SEP</span>
                        <img
                            src={btnMas}
                            alt="btn desplegar"
                            className={`h-6 w-6 transition-transform ${open ? 'rotate-180' : ''}`}
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
                        <span className="font-pixel text-xl uppercase"> Domingo 15 SEP</span>
                        <img
                            src={btnMas}
                            alt="btn desplegar"
                            className={`h-6 w-6 transition-transform ${open ? 'rotate-180' : ''}`}
                        />
                    </DisclosureButton>

                    <DisclosurePanel transition className="origin-top transition duration-200 ease-out data-closed:-translate-y-6 data-closed:opacity-0 pt-4 flex flex-col gap-4 text-sans">

                        <Calendario fecha={15} />

                    </DisclosurePanel>
                </>
            )}
        </Disclosure>
        <div className="mt-6 mb-12">
            <Btn to="#" text="Descargar Agenda" variant='solidgreen' color='green' size='xs' font='sans' />
        </div>
    </>

);

export default Agenda;