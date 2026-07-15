import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { useState } from 'react';

import EntradasIndicador from '../components/EntradasIndicador.jsx';
import Calendario from '../components/Calendario.jsx';
import CierrePopUp from '../components/CierrePopUp.jsx';
import FormsInput from '../components/FormsInput.jsx';

import flechaDesplegable from '../assets/img/icon/icon-chevron.svg';
import iconTickets from '../assets/img/icon/icon-ticket.svg';
import iconInfo from '../assets/img/icon/icon-info.svg';
import btnMas from '../assets/img/icon/icon-btn-mas.svg';
import pegatinaCheckout from '../assets/img/pegatinas/pegatina-checkout.svg';
import { Pix2 } from '../components/Pixel.jsx';
import Btn from '../components/Btn.jsx';



const Tickets = () => {
    const [popupCheckOut, setpopupCheckOut] = useState(true);

    const [entradaDia, setEntradaDia] = useState(1);
    const [entradaInfantilDia, setEntradaInfantilDia] = useState(0);
    const [entrada3Dias, setEntrada3Dias] = useState(0);
    const [entradaInfantil3Dias, setEntradaInfantil3Dias] = useState(0);

    const [infoEntradaDia, setInfoEntradaDia] = useState(false);
    const [infoEntradaInfantilDia, setInfoEntradaInfantilDia] = useState(false);
    const [infoEntrada3Dias, setInfoEntrada3Dias] = useState(false);
    const [infoEntradaInfantil3Dias, setInfoEntradaInfantil3Dias] = useState(false);

    const [seleccionadosViernes, setSeleccionadosViernes] = useState([]);
    const [seleccionadosSabado, setSeleccionadosSabado] = useState([]);
    const [seleccionadosDomingo, setSeleccionadosDomingo] = useState([]);

    const precioEntradas = {
        entradaDia: 30,
        entradaInfantilDia: 15,
        entrada3Dias: 70,
        entradaInfantil3Dias: 35,
        entradaDiaViernes: 15,
        entradaInfantilDiaViernes: 8
    };

    const unicoDia = (entradaDia + entradaInfantilDia) > 0;
    const hayAlgunaSeleccion = (entradaDia + entradaInfantilDia + entrada3Dias + entradaInfantil3Dias) > 0;

    const diaSeleccionado = unicoDia ? (seleccionadosViernes.length > 0 ? 13 : (seleccionadosSabado.length > 0 ? 14 : (seleccionadosDomingo.length > 0 ? 15 : 0))) : 0;

    const esViernes = diaSeleccionado === 13;

    const precioTotal =
        (entradaDia * (esViernes ? precioEntradas.entradaDiaViernes : precioEntradas.entradaDia)) +
        (entradaInfantilDia * (esViernes ? precioEntradas.entradaInfantilDiaViernes : precioEntradas.entradaInfantilDia)) +
        (entrada3Dias * precioEntradas.entrada3Dias) +
        (entradaInfantil3Dias * precioEntradas.entradaInfantil3Dias);

    return (
        <>
            <Pix2 className="absolute top-13 left-0 w-40 h-40 text-white" />
            <div className="bg-pix-light dark:bg-pix-dark pt-26 pb-6"> {/* TO DO - MIRAR LO DEL MARGIN TOP! */}

                <div className={`relative flex flex-col px-4 my-6 ${popupCheckOut ? 'block' : 'hidden'}`}>
                    <div className="p-5 bg-white rounded-xl">
                        <CierrePopUp text="Tickets" setpopupIsOpen={setpopupCheckOut} className="absolute top-0 right-0 left-0 mx-4" />

                        {/* ------------ACORDEÓN ENTRADAS----------- */}
                        <Disclosure as="div" defaultOpen={true}>
                            {({ close }) => (
                                <>
                                    <DisclosureButton className="mt-12 flex w-full items-center uppercase font-pixel text-2xl">
                                        {({ open }) => (
                                            <>
                                                <span className="flex-1 text-left">1. Entrada</span>
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
                                        <ul className="flex flex-col text-black font-sans gap-3">
                                            <li className="flex flex-col gap-4 py-3">
                                                <div className="flex justify-between items-end">
                                                    <div className="flex flex-col gap-2">
                                                        <div className="flex gap-3 items-center">
                                                            <p className="text-xl">Entrada un día</p>
                                                            <button onClick={() => setInfoEntradaDia(!infoEntradaDia)}>
                                                                <img src={iconInfo} alt="Icono información" className="w-6 h-6" />
                                                            </button>
                                                        </div>
                                                        <p className="font-bold text-2xl">{esViernes ? precioEntradas.entradaDiaViernes : precioEntradas.entradaDia} €</p>
                                                    </div>
                                                    <EntradasIndicador entrada={entradaDia} setEntrada={setEntradaDia} desactivado={!unicoDia && hayAlgunaSeleccion} />
                                                </div>
                                                {infoEntradaDia && <p className="text-sm text-neutral-500 text-balance">Incluye todas las proyecciones y actividades de los 3 días del festival</p>}
                                            </li>
                                            <li className="flex flex-col gap-4 py-3">
                                                <div className="flex justify-between items-end">
                                                    <div className="flex flex-col gap-2">
                                                        <div className="flex gap-3 items-center">
                                                            <p className="text-xl">Infantil un día</p>
                                                            <button onClick={() => setInfoEntradaInfantilDia(!infoEntradaInfantilDia)}>
                                                                <img src={iconInfo} alt="Icono información" className="w-6 h-6" />
                                                            </button>
                                                        </div>
                                                        <p className="font-bold text-2xl">{esViernes ? precioEntradas.entradaInfantilDiaViernes : precioEntradas.entradaInfantilDia} €</p>
                                                    </div>
                                                    <EntradasIndicador entrada={entradaInfantilDia} setEntrada={setEntradaInfantilDia} desactivado={!unicoDia && hayAlgunaSeleccion} />
                                                </div>
                                                {infoEntradaInfantilDia && <p className="text-sm text-neutral-500 text-balance">*MENORES DE 12 AÑOS acompañados por un adulto</p>}
                                            </li>
                                            <li className="flex flex-col gap-4 py-3">
                                                <div className="flex justify-between items-end">
                                                    <div className="flex flex-col gap-2">
                                                        <div className="flex gap-3 items-center">
                                                            <p className="text-xl">Abono 3 días</p>
                                                            <button onClick={() => setInfoEntrada3Dias(!infoEntrada3Dias)}>
                                                                <img src={iconInfo} alt="Icono información" className="w-6 h-6" />
                                                            </button>
                                                        </div>
                                                        <p className="font-bold text-2xl">{precioEntradas.entrada3Dias} €</p>
                                                    </div>
                                                    <EntradasIndicador entrada={entrada3Dias} setEntrada={setEntrada3Dias} desactivado={unicoDia && hayAlgunaSeleccion} />
                                                </div>
                                                {infoEntrada3Dias && <p className="text-sm text-neutral-500 text-balance">Incluye todas las proyecciones y actividades de los 3 días del festival</p>}
                                            </li>
                                            <li className="flex flex-col gap-4 py-3">
                                                <div className="flex justify-between items-end">
                                                    <div className="flex flex-col gap-3">
                                                        <div className="flex gap-3 items-center">
                                                            <p className="text-xl">Infantil 3 días</p>
                                                            <button onClick={() => setInfoEntradaInfantil3Dias(!infoEntradaInfantil3Dias)}>
                                                                <img src={iconInfo} alt="Icono información" className="w-6 h-6" />
                                                            </button>
                                                        </div>
                                                        <p className="font-bold text-2xl">{precioEntradas.entradaInfantil3Dias} €</p>

                                                    </div>
                                                    <EntradasIndicador entrada={entradaInfantil3Dias} setEntrada={setEntradaInfantil3Dias} desactivado={unicoDia && hayAlgunaSeleccion} />
                                                </div>
                                                {infoEntradaInfantil3Dias && <p className="text-sm text-neutral-500 text-balance">*MENORES DE 12 AÑOS acompañados por un adulto</p>}
                                            </li>
                                        </ul>
                                        <div>
                                            <div className="flex items-end justify-between ">
                                                <p className="text-xl font-bold mt-6">Total {precioTotal} €</p>
                                                <p className="text-xl font-bold">{entradaDia + entradaInfantilDia + entrada3Dias + entradaInfantil3Dias} Entradas</p>
                                            </div>
                                            <p className="text-sm text-neutral-500 text-pretty mt-1 mb-2">*El coste de la entrada del viernes es a mitad de precio</p>
                                            <Btn to="#" text="Siguiente" variant='solidgreen' size='xs' font='sans' onClick={() => { close() }} />
                                        </div>
                                    </DisclosurePanel>
                                </>)}
                        </Disclosure>


                        {/* -----------ACORDEÓN AGENDA--------------- */}
                        <Disclosure as="div" defaultOpen={true}>
                            {/* TODO: QUE SE ABRA CUANDO LE DOY A SIGUIENTE */}
                            <DisclosureButton className="mt-12 flex w-full items-center uppercase font-pixel text-2xl">
                                {({ open }) => (
                                    <>
                                        <span className="flex-1 text-left">2. Agenda</span>
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
                                <ul className="flex flex-col text-black font-sans gap-2">
                                    <li className="flex justify-between py-3">
                                        <p className="text-pretty">Elige, combina y reserva para no perder tu sitio:</p>
                                    </li>
                                    <li>
                                        {(diaSeleccionado === 0 || diaSeleccionado === 13) &&
                                            <Disclosure as="div" className="py-3" defaultOpen={true}>

                                                {({ open, close }) => (
                                                    <>
                                                        <DisclosureButton className="flex justify-between w-full text-left border-b-2 border-black dark:border-white pb-2">
                                                            <span className="font-pixel text-xl uppercase text-black dark:text-white"> Viernes 13 SEP</span>
                                                            <img
                                                                src={btnMas}
                                                                alt="btn desplegar"
                                                                className={`h-6 w-6 transition-transform ${open ? 'rotate-180' : ''}`}
                                                            />
                                                        </DisclosureButton>

                                                        <DisclosurePanel transition className="origin-top transition duration-200 ease-out data-closed:-translate-y-6 data-closed:opacity-0 pt-4 flex flex-col gap-4 text-sans">

                                                            <Calendario fecha={13} setSeleccionados={setSeleccionadosViernes} seleccionados={seleccionadosViernes} />

                                                            <div className="flex justify-center gap-8 my-6">
                                                                <Btn to="#" text="Borrar Todo" variant='outlinegreen' size='xs' font='sans' onClick={() => { setSeleccionadosViernes([]) }} />
                                                                <Btn to="#" text="Siguiente" variant='solidgreen' size='xs' font='sans' onClick={() => { close() }} />
                                                            </div>

                                                        </DisclosurePanel>

                                                    </>
                                                )}
                                            </Disclosure>}


                                    </li>
                                    <li>
                                        {(diaSeleccionado === 0 || diaSeleccionado === 14) &&
                                            <Disclosure as="div" className="py-3" defaultOpen={true}>

                                                {({ open, close }) => (
                                                    <>
                                                        <DisclosureButton className="flex justify-between w-full text-left border-b-2 border-black dark:border-white pb-2">
                                                            <span className="font-pixel text-xl uppercase text-black dark:text-white"> Sábado 14 SEP</span>
                                                            <img
                                                                src={btnMas}
                                                                alt="btn desplegar"
                                                                className={`h-6 w-6 transition-transform ${open ? 'rotate-180' : ''}`}
                                                            />
                                                        </DisclosureButton>

                                                        <DisclosurePanel transition className="origin-top transition duration-200 ease-out data-closed:-translate-y-6 data-closed:opacity-0 pt-4 flex flex-col gap-4 text-sans">

                                                            <Calendario fecha={14} setSeleccionados={setSeleccionadosSabado} seleccionados={seleccionadosSabado} />
                                                            <div className="flex justify-center gap-8 my-6">
                                                                <Btn to="#" text="Borrar Todo" variant='outlinegreen' size='xs' font='sans' onClick={() => { setSeleccionadosSabado([]) }} />
                                                                <Btn to="#" text="Siguiente" variant='solidgreen' size='xs' font='sans' onClick={() => { close() }} />
                                                            </div>
                                                        </DisclosurePanel>
                                                    </>
                                                )}
                                            </Disclosure>}

                                    </li>
                                    <li>
                                        {(diaSeleccionado === 0 || diaSeleccionado === 15) &&
                                            <Disclosure as="div" className="py-3" defaultOpen={true}>

                                                {({ open, close }) => (
                                                    <>
                                                        <DisclosureButton className="flex justify-between w-full text-left border-b-2 border-black dark:border-white pb-2">
                                                            <span className="font-pixel text-xl uppercase text-black dark:text-white"> Domingo 15 SEP</span>
                                                            <img
                                                                src={btnMas}
                                                                alt="btn desplegar"
                                                                className={`h-6 w-6 transition-transform ${open ? 'rotate-180' : ''}`}
                                                            />
                                                        </DisclosureButton>

                                                        <DisclosurePanel transition className="origin-top transition duration-200 ease-out data-closed:-translate-y-6 data-closed:opacity-0 pt-4 flex flex-col gap-4 text-sans">

                                                            <Calendario fecha={15} setSeleccionados={setSeleccionadosDomingo} seleccionados={seleccionadosDomingo} />
                                                            <div className="flex justify-center gap-8 my-6">
                                                                <Btn to="#" text="Borrar Todo" onClick={() => { setSeleccionadosDomingo([]) }} variant='outlinegreen' size='xs' font='sans' />
                                                                <Btn to="#" text="Siguiente" variant='solidgreen' size='xs' font='sans' onClick={() => { close() }} />
                                                            </div>

                                                        </DisclosurePanel>
                                                    </>
                                                )}
                                            </Disclosure>}

                                    </li>
                                </ul>
                            </DisclosurePanel>
                        </Disclosure>



                        {/* -----------ACORDEÓN DATOS PERSONALES----------- */}
                        <Disclosure as="div" defaultOpen={true}>
                            <DisclosureButton className="mt-12 flex w-full items-center uppercase font-pixel text-2xl">
                                {({ open }) => (
                                    <>
                                        <span className="flex-1 text-left">3. Datos Personales</span>
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
                                <ul className="flex flex-col text-black font-sans gap-8 mt-6">
                                    <li>
                                        <FormsInput
                                            label="Nombre y Apellido"
                                            placeholder="Mónica García"
                                            variant="bordered"
                                            type="text"
                                            required
                                        />
                                    </li>
                                    <li>
                                        <FormsInput
                                            label="Fecha de Nacimiento"
                                            placeholder="dd/mm/aaaa"
                                            variant="bordered"
                                            type="date"
                                            required
                                        />
                                    </li>
                                    <li>
                                        <FormsInput
                                            label="Email"
                                            placeholder="ejemplo@example.com"
                                            variant="bordered"
                                            type="email"
                                            required
                                        />
                                    </li>
                                    <li>
                                        <FormsInput
                                            label="Email"
                                            placeholder="ejemplo@example.com"
                                            variant="bordered"
                                            type="email"
                                            required
                                        />
                                    </li>
                                    <li className="flex gap-2 items-center justify-center w-full">
                                        <FormsInput
                                            type="checkbox"
                                            variant="bordered"
                                            required
                                            className="w-6 h-6 mb-3"
                                        />
                                        <p className="text-lg text-black">
                                            Acepto los{' '}
                                            <span className="text-blue-500 underline cursor-pointer">
                                                términos y condiciones
                                            </span>
                                        </p>
                                    </li>
                                    <li>
                                        <Btn to="#" type="submit" text="Siguiente" variant='solidgreen' size='xs' font='sans' />
                                    </li>
                                </ul>
                            </DisclosurePanel>
                        </Disclosure>



                        {/* -----------ACORDEÓN PAGOS----------- */}
                        <Disclosure as="div" defaultOpen={true}>
                            <DisclosureButton className="mt-12 flex w-full items-center uppercase font-pixel text-2xl">
                                {({ open }) => (
                                    <>
                                        <span className="flex-1 text-left">4. Pagos</span>
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
                                <ul className="flex flex-col text-black font-sans">
                                    <li className="flex flex-col items-center py-3">
                                        <p className="font-bold text-2xl p-2">RESUMEN DE LA COMPRA</p>
                                    </li>
                                </ul>
                            </DisclosurePanel>
                        </Disclosure>
                    </div>

                </div>
                <div className={`mx-auto pt-6 cursor-pointer flex flex-col ${popupCheckOut ? 'hidden' : 'block'}`} onClick={() => setpopupCheckOut(true)}>
                    <div className="relative w-30 h-20 mx-auto">
                        <img src={pegatinaCheckout} alt="Pegatina checkout" className="w-full h-full mx-auto" />
                        <img src={iconTickets} alt="Icono tickets" className="absolute -bottom-2 right-3 w-14 h-14" />
                    </div>
                    <div className="mx-auto text-center bg-white dark:bg-black text-2xl font-pixel rounded-full px-5 py-1 text-black dark:text-white uppercase">
                        Tickets
                    </div>
                </div>
            </div>
        </>
    )
};

export default Tickets;