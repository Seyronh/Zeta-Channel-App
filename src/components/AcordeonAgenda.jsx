import Btn from './Btn';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import Calendario from './Calendario';
import btnMas from '../assets/img/icon/icon-btn-mas.svg';
import flechaDesplegable from '../assets/img/icon/icon-chevron.svg';


const AcordeonAgenda = ({ toggleSeccion, seccionActiva, diaSeleccionado, setSeleccionadosViernes, setSeleccionadosSabado, setSeleccionadosDomingo, seleccionadosViernes, seleccionadosSabado, seleccionadosDomingo, irASiguiente }) => (

    <div className="mt-12 md:mt-14">
        <button
            onClick={() => toggleSeccion(2)}
            className="flex w-full items-center uppercase font-pixel text-2xl text-left md:text-3xl md:px-2 "
        >
            <span className="flex-1">2. Agenda</span>
            <img
                src={flechaDesplegable}
                alt=""
                aria-hidden="true"
                className={`h-6 w-6 transition-transform ${seccionActiva === 2 ? 'rotate-180' : ''}`}
            />
        </button>

        {seccionActiva === 2 && (
            <div className="mt-4 md:px-2">
                <ul className="flex flex-col text-black font-sans gap-2 md:gap-6">
                    <li className="flex justify-between py-3">
                        <p className="text-pretty md:text-xl">Elige, combina y reserva para no perder tu sitio:</p>
                    </li>
                    <li>
                        {(diaSeleccionado === 0 || diaSeleccionado === 13) && (
                            <Disclosure as="div" className="py-3" defaultOpen={true}>
                                {({ open, close }) => (
                                    <>
                                        <DisclosureButton className="flex justify-between w-full text-left border-b-2 border-black dark:border-white pb-2">
                                            <span className="font-pixel text-xl uppercase text-black dark:text-white md:text-2xl"> Viernes 13 SEP</span>
                                            <img
                                                src={btnMas}
                                                alt="btn desplegar"
                                                className={`h-6 w-6 md:w-10 transition-transform ${open ? 'rotate-180' : ''}`}
                                            />
                                        </DisclosureButton>
                                        <DisclosurePanel transition className="origin-top transition duration-200 ease-out data-closed:-translate-y-6 data-closed:opacity-0 pt-4 flex flex-col gap-4 text-sans">
                                            <Calendario fecha={13} setSeleccionados={setSeleccionadosViernes} seleccionados={seleccionadosViernes} />
                                            <div className="flex justify-center gap-8 my-6 md:hidden">
                                                <Btn to="#" text="Borrar Todo" variant='outlinegreen' size='xs' font='sans' onClick={() => { setSeleccionadosViernes([]) }} />
                                                <Btn to="#" text="Siguiente" variant={seleccionadosViernes.length > 0 ? 'solidgreen' : 'solidblack'} size='xs' font='sans' onClick={() => { if(seleccionadosViernes.length > 0) close() }} />
                                            </div>
                                            <div className="justify-center gap-16 my-6 hidden md:flex">
                                                <Btn to="#" text="Borrar Todo" variant='outlinegreen' size='lg' font='sans' onClick={() => { setSeleccionadosViernes([]) }} />
                                                <Btn to="#" text="Siguiente" variant={seleccionadosViernes.length > 0 ? 'solidgreen' : 'solidblack'} size='lg' font='sans' onClick={() => { if(seleccionadosViernes.length > 0) close() }} />
                                            </div>
                                        </DisclosurePanel>
                                    </>
                                )}
                            </Disclosure>
                        )}
                    </li>
                    <li>
                        {(diaSeleccionado === 0 || diaSeleccionado === 14) && (
                            <Disclosure as="div" className="py-3" defaultOpen={true}>
                                {({ open, close }) => (
                                    <>
                                        <DisclosureButton className="flex justify-between w-full text-left border-b-2 border-black dark:border-white pb-2">
                                            <span className="font-pixel text-xl uppercase text-black dark:text-white md:text-2xl"> Sábado 14 SEP</span>
                                            <img
                                                src={btnMas}
                                                alt="btn desplegar"
                                                className={`h-6 w-6 md:w-10 transition-transform ${open ? 'rotate-180' : ''}`}
                                            />
                                        </DisclosureButton>
                                        <DisclosurePanel transition className="origin-top transition duration-200 ease-out data-closed:-translate-y-6 data-closed:opacity-0 pt-4 flex flex-col gap-4 text-sans">
                                            <Calendario fecha={14} setSeleccionados={setSeleccionadosSabado} seleccionados={seleccionadosSabado} />
                                            <div className="flex justify-center gap-8 my-6 md:hidden">
                                                <Btn to="#" text="Borrar Todo" variant='outlinegreen' size='xs' font='sans' onClick={() => { setSeleccionadosSabado([]) }} />
                                                <Btn to="#" text="Siguiente" variant={seleccionadosSabado.length > 0 ? 'solidgreen' : 'solidblack'} size='xs' font='sans' onClick={() => { if(seleccionadosSabado.length > 0) close() }} />
                                            </div>
                                            <div className="justify-center gap-16 my-6 hidden md:flex">
                                                <Btn to="#" text="Borrar Todo" variant='outlinegreen' size='lg' font='sans' onClick={() => { setSeleccionadosSabado([]) }} />
                                                <Btn to="#" text="Siguiente" variant={seleccionadosSabado.length > 0 ? 'solidgreen' : 'solidblack'} size='lg' font='sans' onClick={() => { if(seleccionadosSabado.length > 0) close() }} />
                                            </div>
                                        </DisclosurePanel>
                                    </>
                                )}
                            </Disclosure>
                        )}
                    </li>
                    <li>
                        {(diaSeleccionado === 0 || diaSeleccionado === 15) && (
                            <Disclosure as="div" className="py-3" defaultOpen={true}>
                                {({ open, close }) => (
                                    <>
                                        <DisclosureButton className="flex justify-between w-full text-left border-b-2 border-black dark:border-white pb-2">
                                            <span className="font-pixel text-xl uppercase text-black dark:text-white md:text-2xl"> Domingo 15 SEP</span>
                                            <img
                                                src={btnMas}
                                                alt="btn desplegar"
                                                className={`h-6 w-6 md:w-10 transition-transform ${open ? 'rotate-180' : ''}`}
                                            />
                                        </DisclosureButton>
                                        <DisclosurePanel transition className="origin-top transition duration-200 ease-out data-closed:-translate-y-6 data-closed:opacity-0 pt-4 flex flex-col gap-4 text-sans">
                                            <Calendario fecha={15} setSeleccionados={setSeleccionadosDomingo} seleccionados={seleccionadosDomingo} />
                                            <div className="flex justify-center gap-8 my-6 md:hidden">
                                                <Btn to="#" text="Borrar Todo" onClick={() => { setSeleccionadosDomingo([]) }} variant='outlinegreen' size='xs' font='sans' />
                                                <Btn to="#" text="Siguiente" variant={seleccionadosDomingo.length > 0 ? 'solidgreen' : 'solidblack'} size='xs' font='sans' onClick={() => { if(seleccionadosDomingo.length > 0) close(); irASiguiente(3) }} />
                                            </div>
                                            <div className="justify-center gap-16 my-6 hidden md:flex">
                                                <Btn to="#" text="Borrar Todo" onClick={() => { setSeleccionadosDomingo([]) }} variant='outlinegreen' size='lg' font='sans' />
                                                <Btn to="#" text="Siguiente" variant={seleccionadosDomingo.length > 0 ? 'solidgreen' : 'solidblack'} size='lg' font='sans' onClick={() => { if(seleccionadosDomingo.length > 0) close(); irASiguiente(3) }} />
                                            </div>
                                        </DisclosurePanel>
                                    </>
                                )}
                            </Disclosure>
                        )}
                    </li>
                </ul>
            </div>
        )}
    </div>


);
export default AcordeonAgenda;
