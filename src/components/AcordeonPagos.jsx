import { useState } from 'react';

import flechaDesplegable from '../assets/img/icon/icon-chevron.svg';
import FormsInput from '../components/FormsInput.jsx';
import Btn from '../components/Btn.jsx';
import GridSeleccionados from '../components/GridSeleccionados.jsx';

import payPal from '../assets/img/icon/pago-paypal.svg';
import visa from '../assets/img/icon/pago-visa.svg';
import googlePay from '../assets/img/icon/pago-google.svg';
import applePay from '../assets/img/icon/pago-apple.svg';


const AcordeonPagos = ({ toggleSeccion, seccionActiva, setSeccionActiva, seleccionadosViernes, seleccionadosSabado, seleccionadosDomingo, entradaDia, precioEntradas, entradaInfantilDia, entrada3Dias, entradaInfantil3Dias, precioTotal, esViernes, nombre, fechaNacimiento, email }) => {

    const [hasPagado, setHasPagado] = useState(false);
    const todoCorrecto = nombre.length > 0 && fechaNacimiento.length > 0 && email.length > 0 && (seleccionadosViernes.length > 0 || seleccionadosSabado.length > 0 || seleccionadosDomingo.length > 0) && (entradaDia > 0 || entradaInfantilDia > 0 || entrada3Dias > 0 || entradaInfantil3Dias > 0);
    return (
        <div className="mt-12 md:mt-14 md:px-2">
            <button
                onClick={() => toggleSeccion(4)}
                className="flex w-full items-center uppercase font-pixel text-2xl text-left md:text-3xl"
            >
                <span className="flex-1">4. Pagos</span>
                <img
                    src={flechaDesplegable}
                    alt=""
                    aria-hidden="true"
                    className={`h-6 w-6 transition-transform ${seccionActiva === 4 ? 'rotate-180' : ''}`}
                />
            </button>

            {seccionActiva === 4 && (
                <div className="mt-4 lg:mx-20">
                    <ul className="flex flex-col gap-3 text-black font-sans">
                        <li className="flex flex-col items-center py-3">
                            <p className="font-bold text-2xl p-2 uppercase md:text-3xl">RESUMEN DE LA COMPRA</p>
                        </li>
                        <li className="flex flex-col gap-4">
                            <div className="flex justify-between">
                                <p className="font-semibold text-black text-lg md:text-xl">Detalles personales</p>
                                <Btn to="#" text="Editar" variant='solidgreen' size='xs' font='sans' onClick={() => { setSeccionActiva(3) }} />
                            </div>
                            <div className="flex justify-between text-black md:text-lg">
                                <div className="flex flex-col gap-1">
                                    <p className="text-black">{nombre}</p>
                                    <p className="text-black">{email}</p>
                                </div>
                                <p className="text-black">{fechaNacimiento}</p>
                            </div>
                        </li>
                        <li className="flex flex-col gap-4 mt-6">
                            <div className="flex justify-between">
                                <p className="font-semibold text-black text-lg md:text-xl">Agenda</p>
                                <Btn to="#" text="Editar" variant='solidgreen' size='xs' font='sans' onClick={() => { setSeccionActiva(2) }} />
                            </div>
                            <div className="flex flex-col gap-6 text-black items-center ">
                                <p className="text-black mt-3 md:text-xl">Autocine Madrid - C. Isla de Java, 2</p>
                                {seleccionadosViernes.length > 0 && <p className="text-black font-bold text-xl mt-3">Viernes 13 SEP</p>}

                                <GridSeleccionados Seleccionados={seleccionadosViernes} />
                                {seleccionadosSabado.length > 0 && <p className="text-black font-bold text-xl mt-6">Sábado 14 SEP</p>}
                                <GridSeleccionados Seleccionados={seleccionadosSabado} />
                                {seleccionadosDomingo.length > 0 && <p className="text-black font-bold text-xl mt-6">Domingo 15 SEP</p>}
                                <GridSeleccionados Seleccionados={seleccionadosDomingo} />
                            </div>
                        </li>
                        <li className="flex flex-col gap-8 mt-6">
                            <div className="flex justify-between">
                                <p className="font-semibold text-black text-lg md:text-xl">Tickets</p>
                                <Btn to="#" text="Editar" variant='solidgreen' size='xs' font='sans' onClick={() => { setSeccionActiva(1) }} />
                            </div>
                            <div className="flex flex-col gap-6 text-black">
                                <div className="grid grid-cols-3 gap-x-4 gap-y-3 px-3 w-full items-center font-sans md:text-xl">
                                    {/* Cabecera del Grid (3 columnas iguales) */}
                                    <span className="text-black font-bold text-center">Entradas</span>
                                    <span className="text-black font-bold text-center">Tipo</span>
                                    <span className="text-black font-bold text-center">Precio</span>

                                    {/* Fila 1: Adulto 1 Día */}
                                    {entradaDia > 0 && (
                                        <>
                                            <p className="text-black text-center">{entradaDia} Adulto</p>
                                            <p className="text-black text-center">1 Día</p>
                                            <p className="text-black text-center">{(esViernes ? precioEntradas.entradaDiaViernes : precioEntradas.entradaDia)}€ <span className="text-neutral-500">x {entradaDia}</span></p>
                                        </>
                                    )}

                                    {/* Fila 2: Infantil 1 Día */}
                                    {entradaInfantilDia > 0 && (
                                        <>
                                            <p className="text-black text-center">{entradaInfantilDia} Infantil</p>
                                            <p className="text-black text-center">1 Día</p>
                                            <p className="text-black text-center">{(esViernes ? precioEntradas.entradaInfantilDiaViernes : precioEntradas.entradaInfantilDia)}€ <span className="text-neutral-500">x {entradaInfantilDia}</span></p>
                                        </>
                                    )}

                                    {/* Fila 3: Adulto 3 Días */}
                                    {entrada3Dias > 0 && (
                                        <>
                                            <p className="text-black text-center">{entrada3Dias} Adulto</p>
                                            <p className="text-black text-center">3 Días</p>
                                            <p className="text-black text-center">{precioEntradas.entrada3Dias}€ <span className="text-neutral-500">x {entrada3Dias}</span></p>
                                        </>
                                    )}

                                    {/* Fila 4: Infantil 3 Días */}
                                    {entradaInfantil3Dias > 0 && (
                                        <>
                                            <p className="text-black text-center">{entradaInfantil3Dias} Infantil</p>
                                            <p className="text-black text-center">3 Días</p>
                                            <p className="text-black text-center">{precioEntradas.entradaInfantil3Dias}€ <span className="text-neutral-500">x {entradaInfantil3Dias}</span></p>
                                        </>
                                    )}
                                </div>
                                <div>
                                    <FormsInput
                                        label="Descuento Usuarios"
                                        placeholder="Inlcuye aquí tu código de descuento"
                                        variant="bordered"
                                        type="text"
                                    />
                                </div>
                                <div className="h-0.5 w-full bg-black my-4"></div>
                                <div className="flex justify-between items-end ">
                                    <p className="text-black text-xl font-bold md:text-2xl">Total</p>
                                    <p className="text-black text-xl font-bold md:text-2xl">{precioTotal} €</p>
                                </div>
                            </div>
                        </li>
                        <li className="flex flex-col items-center gap-6 py-3 md:gap-8">
                            <p className="font-bold text-2xl p-2 uppercase md:text-3xl">Método de pago</p>
                            <ul className="flex gap-6 items-center mb-4 lg:gap-12">
                                <li><button className="bg-green p-2 cursor-pointer">
                                    <img src={visa} alt="Visa" className="w-12 h-12" />
                                </button></li>
                                <li><button className="bg-green p-2 cursor-pointer">
                                    <img src={googlePay} alt="Google Pay" className="w-12 h-12" />
                                </button></li>
                                <li><button className="bg-green p-2 cursor-pointer">
                                    <img src={applePay} alt="Apple Pay" className="w-12 h-12" />
                                </button></li>
                                <li><button className="bg-green p-2 cursor-pointer">
                                    <img src={payPal} alt="PayPal" className="w-12 h-12" />
                                </button></li>
                            </ul>
                            <div className="md:hidden">
                                <Btn to="#" text="Comprar" variant={todoCorrecto ? 'solidgreen' : 'solidblack'} size='xs' font='sans' className="w-full" onClick={() => {if(todoCorrecto) setHasPagado(true)}} />

                            </div>
                            <div className=" hidden md:block md:w-full lg:w-1/2">
                                <Btn to="#" text="Comprar" variant={todoCorrecto ? 'solidgreen' : 'solidblack'} size='lg' font='sans' className="w-full" onClick={() => {if(todoCorrecto) setHasPagado(true)}} />

                            </div>

                            {hasPagado && (
                                <div className="flex flex-col items-center gap-4">
                                    <p className="text-green-600 font-bold text-lg mt-4 text-center text-balance">¡Pago realizado con éxito! Gracias por tu compra.</p>
                                    <p className="text-neutral-600 text-pretty text-center">* Encontrarás tus tickets en el apartado de user.</p>
                                </div>
                            )}

                        </li>
                    </ul>
                </div>
            )}
        </div>
    )
};
export default AcordeonPagos;