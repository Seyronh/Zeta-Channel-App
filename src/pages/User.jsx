import { useState } from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';

import InicioSesion from '../components/InicioSesion.jsx';
import TextoUser from '../components/TextoUser.jsx';
import Registrarse from '../components/Registrarse.jsx';
import CierrePopUp from '../components/CierrePopUp.jsx';
import Btn from '../components/Btn.jsx';
import GridSeleccionados from '../components/GridSeleccionados.jsx';
import EntradasUser from '../components/EntradasUser.jsx';

import flechaDesplegable from '../assets/img/icon/icon-chevron.svg';
import IconoUsuario from '../assets/img/icon/icon-user.svg';
import IconoRegistrarse from '../assets/img/icon/icon-registrarse.svg';
import { Pix4 } from '../components/Pixel.jsx';
import pegatinaUser from '../assets/img/pegatinas/pegatina-user.svg';

const User = ({ seleccionadosViernes, seleccionadosSabado, seleccionadosDomingo, entradaDia, entradaInfantilDia, entrada3Dias, entradaInfantil3Dias, userIniciado, setUserIniciado }) => {

    const [popupUser, setpopupUser] = useState(true);
    const [userRegistrado, setUserRegistrado] = useState(false);
    const [email, setEmail] = useState('');

    const precioEntradas = {
        entradaDia: 30,
        entradaInfantilDia: 15,
        entrada3Dias: 70,
        entradaInfantil3Dias: 35,
        entradaDiaViernes: 15,
        entradaInfantilDiaViernes: 8
    };

    const unicoDia = (entradaDia + entradaInfantilDia) > 0;

    const diaSeleccionado = unicoDia ? (seleccionadosViernes.length > 0 ? 13 : (seleccionadosSabado.length > 0 ? 14 : (seleccionadosDomingo.length > 0 ? 15 : 0))) : 0;

    const esViernes = diaSeleccionado === 13;

    return (

        <div className={`pt-23 px-6 pb-6 lg:pt-45 ${userIniciado && ('bg-pix-light dark:bg-pix-dark')}`}>
            <Pix4 className={`absolute top-13 right-0 w-40 h-40 text-pix-light dark:text-pix-dark lg:top-23 ${userIniciado && ('text-white')}`} />
            <div className="relative flex items-center gap-6 justify-center mb-12">
                {!userIniciado && (
                    <img src={IconoUsuario} alt="Icono de Usuario" className="w-11 h-11 lg:w-14 lg:h-14 dark:invert" />

                )}
                {userIniciado && (
                    <img src={IconoRegistrarse} alt="Icono de Usuario" className="w-11 h-11 lg:w-14 lg:h-14 dark:invert" />
                )}

                <h1 className="text-5xl leading-0 font-pixel uppercase text-black dark:text-white md:text-7xl">user</h1>
            </div>
            {!userIniciado && (
                <>
                    {userRegistrado ? (
                        <Registrarse setUserRegistrado={setUserRegistrado} setUserIniciado={setUserIniciado} email={email} setEmail={setEmail} />
                    ) : (
                        <InicioSesion setUserIniciado={setUserIniciado} setUserRegistrado={setUserRegistrado} setEmail={setEmail} email={email} />
                    )}
                    <TextoUser />
                </>)}
            {userIniciado && (
                <>

                    <div className="relative bg-pix-light dark:bg-pix-dark text-center">
                        <h3 className="text-2xl uppercase text-black dark:text-white font-pixel">Bienvenido de nuevo
                        </h3>
                        <h2 className="text-3xl uppercase text-black dark:text-white font-pixel mb-8 lg:text-4xl"> Usuario
                        </h2>
                        <div className={`${popupUser ? 'block' : 'hidden'} md:mx-10 lg:mx-100`}>
                            <CierrePopUp text="Tu cuenta" setpopupIsOpen={setpopupUser} className="bg-blue" />

                            <ul className="flex flex-col text-black dark:text-white font-sans bg-white px-5 rounded-b-3xl pt-2" >
                                <li><Disclosure as="div" className="py-3" defaultOpen={true}>
                                    {({ open }) => (
                                        <>
                                            <DisclosureButton className="flex justify-between w-full text-left pb-2">
                                                <span className="font-pixel text-2xl uppercase text-black dark:text-white">Perfil</span>
                                                <img
                                                    src={flechaDesplegable}
                                                    alt="btn desplegar"
                                                    className={`h-6 w-6 transition-transform ${open ? 'rotate-180' : ''}`}
                                                />
                                            </DisclosureButton>
                                            <DisclosurePanel transition className="origin-top transition duration-200 ease-out data-closed:-translate-y-6 data-closed:opacity-0 pt-4 flex flex-col gap-4 text-sans">
                                                <div className="flex flex-col gap-4">
                                                    <div className="flex justify-between">
                                                        <p className="font-semibold text-black text-lg">Detalles personales</p>
                                                        <Btn to="#" text="Editar" variant='solidgreen' size='xs' font='sans' onClick={() => { }} />
                                                    </div>
                                                    <div className="flex justify-between text-black">
                                                        <div className="flex flex-col gap-1">
                                                            <p className="text-black text-start">Juanlu Molina Ruiz</p>
                                                            <p className="text-black text-start">{email}</p>
                                                        </div>
                                                        <p className="text-black">02/02/02</p>
                                                    </div>
                                                </div>
                                            </DisclosurePanel>
                                        </>
                                    )}
                                </Disclosure></li>
                                <li><Disclosure as="div" className="py-3" defaultOpen={true}>
                                    {({ open }) => (
                                        <>
                                            <DisclosureButton className="flex justify-between w-full text-left pb-2">
                                                <span className="font-pixel text-2xl uppercase text-black dark:text-white">Agenda</span>
                                                <img
                                                    src={flechaDesplegable}
                                                    alt="btn desplegar"
                                                    className={`h-6 w-6 transition-transform ${open ? 'rotate-180' : ''}`}
                                                />
                                            </DisclosureButton>
                                            <DisclosurePanel transition className="origin-top transition duration-200 ease-out data-closed:-translate-y-6 data-closed:opacity-0 pt-4 flex flex-col gap-4 text-sans">
                                                <div className="flex justify-between">
                                                    <p className="font-semibold text-black text-lg ">Agenda</p>
                                                    <Btn to="#" text="Editar" variant='solidgreen' size='xs' font='sans' />
                                                </div>
                                                <div className="flex flex-col gap-6 text-black items-center">
                                                    <p className="text-black mt-3">Autocine Madrid - C. Isla de Java, 2</p>
                                                    {seleccionadosViernes.length > 0 && <p className="text-black font-bold text-xl mt-3">Viernes 13 SEP</p>}

                                                    <GridSeleccionados Seleccionados={seleccionadosViernes} />
                                                    {seleccionadosSabado.length > 0 && <p className="text-black font-bold text-xl mt-6">Sábado 14 SEP</p>}
                                                    <GridSeleccionados Seleccionados={seleccionadosSabado} />
                                                    {seleccionadosDomingo.length > 0 && <p className="text-black font-bold text-xl mt-6">Domingo 15 SEP</p>}
                                                    <GridSeleccionados Seleccionados={seleccionadosDomingo} />
                                                </div>
                                            </DisclosurePanel>
                                        </>
                                    )}
                                </Disclosure>
                                </li>

                                <li><Disclosure as="div" className="py-3" defaultOpen={true}>
                                    {({ open }) => (
                                        <>
                                            <DisclosureButton className="flex justify-between w-full text-left pb-2">
                                                <span className="font-pixel text-2xl uppercase text-black dark:text-white">entradas</span>
                                                <img
                                                    src={flechaDesplegable}
                                                    alt="btn desplegar"
                                                    className={`h-6 w-6 transition-transform ${open ? 'rotate-180' : ''}`}
                                                />
                                            </DisclosureButton>
                                            <DisclosurePanel transition className="origin-top transition duration-200 ease-out data-closed:-translate-y-6 data-closed:opacity-0 pt-4 flex flex-col gap-4 text-sans">
                                                <div className="flex justify-between">
                                                    <p className="font-semibold text-black text-lg">Tickets</p>
                                                    <Btn to="#" text="Editar" variant='solidgreen' size='xs' font='sans' onClick={() => { }} />
                                                </div>
                                                <div className="flex flex-col gap-6 text-black">
                                                    <div className="grid grid-cols-3 gap-x-4 gap-y-3 px-3 w-full items-center font-sans">
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
                                                    <div className="flex flex-col justify-center gap-12 my-6 lg:grid lg:grid-cols-2 lg:gap-x-2">
                                                        {seleccionadosViernes.length > 0 && (
                                                            <EntradasUser diaSeleccionado="viernes" entradaDia={entradaDia} entrada3Dias={entrada3Dias} entradaInfantilDia={entradaInfantilDia} entradaInfantil3Dias={entradaInfantil3Dias} />
                                                        )}
                                                        {seleccionadosSabado.length > 0 && (
                                                            <EntradasUser diaSeleccionado="sabado" entradaDia={entradaDia} entrada3Dias={entrada3Dias} entradaInfantilDia={entradaInfantilDia} entradaInfantil3Dias={entradaInfantil3Dias} />
                                                        )}
                                                        {seleccionadosDomingo.length > 0 && (
                                                            <EntradasUser diaSeleccionado="domingo" entradaDia={entradaDia} entrada3Dias={entrada3Dias} entradaInfantilDia={entradaInfantilDia} entradaInfantil3Dias={entradaInfantil3Dias} />
                                                        )}
                                                    </div>
                                                </div>
                                            </DisclosurePanel>
                                        </>
                                    )}
                                </Disclosure></li>


                            </ul>

                        </div>
                        <div className={`mx-auto pt-6 cursor-pointer flex flex-col ${popupUser ? 'hidden' : 'block'}`} onClick={() => setpopupUser(true)}>
                            <div className="relative w-30 h-20 mx-auto">
                                <img src={pegatinaUser} alt="Pegatina user" className="w-full h-full mx-auto" />
                                <img src={IconoRegistrarse} alt="Icono registrarse" className="absolute -bottom-2 right-3 w-14 h-14" />
                            </div>
                            <div className="mx-auto text-center bg-white dark:bg-black text-2xl font-pixel rounded-full px-5 py-1 text-black dark:text-white uppercase">
                                Zona User
                            </div>
                        </div>
                        <div className={`flex justify-center md:hidden ${userIniciado && ('mt-6')}`}>
                            <Btn to="#" text="Cerrar sesión" variant='solidgreen' size='xs' font='sans' onClick={() => { setUserIniciado(false); setUserRegistrado(false) }} />
                        </div>
                        <div className={`hidden md:flex justify-center lg:mt-12 ${userIniciado && ('mt-6')}`}>
                            <Btn to="#" text="Cerrar sesión" variant='solidgreen' size='lg' font='sans' onClick={() => { setUserIniciado(false); setUserRegistrado(false) }} />
                        </div>
                    </div>
                </>
            )
            }
        </div >
    );
}

export default User;

