import styles from './Home.module.css';

import { Link } from "react-router-dom"
import pegatinaAgenda from '../assets/img/pegatinas/pegatina-icon-cartel.svg';
import pegatinaUser from '../assets/img/pegatinas/pegatina-user.svg';
import pegatinaFestival from '../assets/img/pegatinas/pegatina-festival.svg';
import pegatinaTickets from '../assets/img/pegatinas/pegatina-checkout.svg';
import pegatinaCartelera from '../assets/img/pegatinas/pegatina-cartelera.svg';
import pegatinaHome from '../assets/img/pegatinas/pegatina-home.svg';
import pegatinaAlert from '../assets/img/pegatinas/pegatina-alert.svg';

import IconoFestival from '../assets/img/icon/icon-festival.svg';
import IconoTickets from '../assets/img/icon/icon-ticket.svg';
import IconoAgenda from '../assets/img/icon/icon-agenda.svg';
import IconoCartelera from '../assets/img/icon/icon-cartelera.svg';
import IconoUser from '../assets/img/icon/icon-user.svg';
import IconoHome from '../assets/img/icon/icon-home.svg';
import IconoAlert from '../assets/img/icon/icon-alert.svg';
import LogoZeta from '../assets/img/logo-zeta-channel.svg';


import CierrePopUp from '../components/CierrePopUp.jsx';
import { useState } from 'react';
import galeria7 from '../assets/img/cartelera/high-school-musical/galeria-7.webp';
import galeria1 from '../assets/img/cartelera/high-school-musical/galeria-1.webp';
import galeria2 from '../assets/img/cartelera/high-school-musical/galeria-2.webp';
import galeria3 from '../assets/img/cartelera/high-school-musical/galeria-3.webp';
import galeria4 from '../assets/img/cartelera/high-school-musical/galeria-4.webp';
import galeria5 from '../assets/img/cartelera/high-school-musical/galeria-5.webp';
import galeria6 from '../assets/img/cartelera/high-school-musical/galeria-6.webp';
import Btn from '../components/Btn.jsx';
const Home = ({ popupHome, setpopupHome, popupQuepasa, setpopupQuepasa }) => {
    const [fotoSeleccionada, setFotoSeleccionada] = useState(0);
    const fotos = [galeria1, galeria2, galeria3, galeria4, galeria5, galeria6, galeria7];
    return (
        <div className="relative pt-13 lg:pt-30 bg-pix-light dark:bg-pix-dark">
            <div>
                {!popupQuepasa && (<Link className={`absolute top-20 left-8 mx-auto pt-6 cursor-pointer flex flex-col`} to="/Festival">
                    <div className="relative w-30 h-20 mx-auto">
                        <img src={pegatinaFestival} alt="Pegatina user" className="w-full h-full mx-auto" />
                        <img src={IconoFestival} alt="Icono festival" className="absolute -bottom-1 right-3 w-14 h-14" />
                    </div>
                    <div className="mx-auto text-center bg-white dark:bg-black text-2xl font-pixel rounded-full px-5 py-1 text-black dark:text-white uppercase">
                        festival
                    </div>
                </Link>)}
                {!popupQuepasa && (<Link className={`absolute top-20 right-8 mx-auto pt-6 cursor-pointer flex flex-col`} to="/Tickets">
                    <div className="relative w-30 h-20 mx-auto">
                        <img src={pegatinaTickets} alt="Pegatina user" className="w-full h-full mx-auto" />
                        <img src={IconoTickets} alt="Icono tickets" className="absolute -bottom-2 right-3 w-14 h-14" />
                    </div>
                    <div className="mx-auto text-center bg-white dark:bg-black text-2xl font-pixel rounded-full px-5 py-1 text-black dark:text-white uppercase">
                        tickets
                    </div>
                </Link>)}
                {!popupQuepasa && (<Link className={`relative mt-50  right-0 left-0 mx-auto pt-6 cursor-pointer flex flex-col`} to="/Agenda">
                    <div className="relative w-30 h-20 mx-auto">
                        <img src={pegatinaAgenda} alt="Pegatina user" className="w-full h-full mx-auto" />
                        <img src={IconoAgenda} alt="Icono agenda" className="absolute bottom-0 right-3 w-14 h-14" />
                    </div>
                    <div className="mx-auto text-center bg-white dark:bg-black text-2xl font-pixel rounded-full px-5 py-1 text-black dark:text-white uppercase">
                        agenda
                    </div>
                </Link>)}
                {popupHome && (
                    <div className={`relative flex flex-col mt-22 -mb-45  mx-6 ${popupHome ? 'block' : 'hidden'}`}>
                        <div className="p-5 bg-white rounded-xl">
                            <CierrePopUp text="alerta festival" setpopupIsOpen={setpopupHome} className="absolute top-0 right-0 left-0 mx-auto bg-blue" />

                            <div className="mt-13">
                                <div className="flex gap-4 items-center px-3">
                                    <img src={IconoAlert} alt="Imagen alerta" className="w-25 h-25 mx-auto" />
                                    <h1 className="text-5xl font-bold font-sans">ALERTA</h1>
                                </div>
                                <div className=" justify-center mt-6">
                                    <Btn text="¿Qué pasa?" onClick={() => {
                                        setpopupQuepasa(true)
                                        setpopupHome(false)
                                    }} />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {popupQuepasa && (
                    <div className={`relative mt-13 mx-auto flex flex-col px-4 ${popupQuepasa ? 'block' : 'hidden'}`}>
                        <div className="pt-20 px-6 bg-white rounded-xl">
                            <CierrePopUp text="alerta festival" setpopupIsOpen={setpopupQuepasa} className="absolute top-0 right-0 left-0 mx-4 bg-blue" />
                            <div className="flex flex-col gap-8 items-center text-center mb-12">
                                <h1 className="text-5xl font-bold font-sans">Estás viendo Zeta Channel</h1>
                                <h2 className="text-2xl font-medium">Tu infancia merece un reencuentro</h2>
                                <Btn to="/Tickets" text="Compra tu entrada" />
                            </div>
                            <div className="flex flex-col gap-4 w-full max-w-md mx-auto mb-12">

                                {/* FOTO GRANDE PRINCIPAL */}
                                <div className="w-full aspect-[3/4] rounded-[2rem] overflow-hidden bg-slate-200">
                                    <img
                                        src={fotos[fotoSeleccionada]}
                                        alt={`Foto ${fotoSeleccionada + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* CONTENEDOR DE MINIATURAS (Dividido en Bloque Izquierdo y Bloque Derecho) */}
                                <div className="grid grid-cols-3 gap-3 w-full">

                                    {/* BLOQUE IZQUIERDO: Las 6 primeras fotos (2 filas de 3) */}
                                    <div className="col-span-2 grid grid-cols-3 gap-3">
                                        {fotos.slice(0, 6).map((foto, index) => (
                                            <div
                                                key={index}
                                                onClick={() => setFotoSeleccionada(index)}
                                                className={`
                        relative overflow-hidden cursor-pointer rounded-2xl aspect-square transition-all duration-200
                        ${index === fotoSeleccionada ? 'ring-4 ring-green scale-[0.98]' : 'hover:scale-[1.02]'}
                    `}
                                            >
                                                <img
                                                    src={foto}
                                                    alt={`Foto ${index + 1}`}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        ))}
                                    </div>

                                    {/* BLOQUE DERECHO: La foto del index 6 (Ocupa las 2 columnas restantes y toda la altura) */}
                                    {fotos[6] && (
                                        <div
                                            onClick={() => setFotoSeleccionada(6)}
                                            className={`
                    col-span-1 relative overflow-hidden cursor-pointer rounded-2xl transition-all duration-200
                    ${fotoSeleccionada === 6 ? 'ring-4 ring-green scale-[0.98]' : 'hover:scale-[1.02]'}
                `}
                                        >
                                            <img
                                                src={fotos[6]}
                                                alt="Foto 7"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    )}

                                </div>

                            </div>
                            <img src={LogoZeta} alt="Logo Zeta Channel" className="w-full h-auto mx-auto px-12" />
                        </div>
                    </div>
                )}
                {!popupHome && !popupQuepasa && (<div className={`absolute top-115 left-0 right-0 mx-auto pt-6 cursor-pointer flex flex-col ${popupHome ? 'hidden' : 'block'}`} onClick={() => setpopupHome(true)}>
                    <div className={`relative w-30 h-20 mx-auto ${styles.animateheartbeat}`}>
                        <img src={pegatinaAlert} alt="Pegatina alerta" className="w-full h-auto mx-auto" />
                        <img src={IconoAlert} alt="Icono alerta" className="absolute bottom-0 right-0 left-0  mx-auto w-14 h-14" />
                        <div className="absolute -top-1 right-1.5 text-white  font-pixel text-3xl text-center bg-red-alert w-9 h-9 rounded-full">
                            <p>1</p>
                        </div>
                    </div>
                </div>)}
                {!popupQuepasa && (<Link className={`relative my-60 ml-40 pt-6 cursor-pointer flex flex-col`} to="/Cartelera">
                    <div className="relative w-30 h-20 mx-auto">
                        <img src={pegatinaCartelera} alt="Pegatina user" className="w-full h-full mx-auto" />
                        <img src={IconoCartelera} alt="Icono cartelera" className="absolute bottom-0 right-3 w-14 h-14" />
                    </div>
                    <div className="mx-auto text-center bg-white dark:bg-black text-2xl font-pixel rounded-full px-5 py-1 text-black dark:text-white uppercase">
                        cartelera
                    </div>
                </Link>)}
                {!popupQuepasa && (<Link className={`relative bottom-60 -left-30 mx-auto pt-6 cursor-pointer flex flex-col`} to="/User">
                    <div className="relative w-30 h-20 mx-auto">
                        <img src={pegatinaUser} alt="Pegatina user" className="w-full h-full mx-auto" />
                        <img src={IconoUser} alt="Icono user" className="absolute bottom-0 right-3 w-14 h-14" />
                    </div>
                    <div className="mx-auto text-center bg-white dark:bg-black text-2xl font-pixel rounded-full px-5 py-1 text-black dark:text-white uppercase">
                        user
                    </div>
                </Link>)}
                {!popupQuepasa && (<Link className={`absolute bottom-25 right-20 mx-auto pt-6 cursor-pointer flex flex-col`} to="/">
                    <div className="relative w-30 h-20 mx-auto">
                        <img src={pegatinaHome} alt="Pegatina Home" className="w-full h-full mx-auto" />
                        <img src={IconoHome} alt="Icono home" className="absolute bottom-0 right-3 w-14 h-14" />
                    </div>
                    <div className="mx-auto text-center bg-white dark:bg-black text-2xl font-pixel rounded-full px-5 py-1 text-black dark:text-white uppercase">
                        home
                    </div>
                </Link>)}
            </div>
        </div >
    )
}
export default Home