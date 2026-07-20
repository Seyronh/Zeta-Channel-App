import styles from './Home.module.css';
import { useState } from 'react';
import { Link } from "react-router-dom"

import { CATALOGO } from "../data/films.js";

import pegatinaAgenda from '../assets/img/pegatinas/pegatina-icon-cartel.svg';
import pegatinaUser from '../assets/img/pegatinas/pegatina-user.svg';
import pegatinaFestival from '../assets/img/pegatinas/pegatina-festival.svg';
import pegatinaTickets from '../assets/img/pegatinas/pegatina-checkout.svg';
import pegatinaCartelera from '../assets/img/pegatinas/pegatina-cartelera.svg';
import pegatinaHome from '../assets/img/pegatinas/pegatina-home.svg';
import pegatinaCarpeta from '../assets/img/pegatinas/pegatina-carpeta-home.svg';
import pegatinaDinosauro from '../assets/img/pegatinas/pegatina-dinosaurio-home.svg';
import pegatinaAlert from '../assets/img/pegatinas/pegatina-alert.svg';

import IconoFestival from '../assets/img/icon/icon-festival.svg';
import IconoTickets from '../assets/img/icon/icon-ticket.svg';
import IconoAgenda from '../assets/img/icon/icon-agenda.svg';
import IconoCartelera from '../assets/img/icon/icon-cartelera.svg';
import IconoUser from '../assets/img/icon/icon-user.svg';
import IconoHome from '../assets/img/icon/icon-home.svg';
import IconoAlert from '../assets/img/icon/icon-alert.svg';
import IconoDinosauro from '../assets/img/icon/icono-dino.svg';
import IconoCarpeta from '../assets/img/icon/icono-carpeta.svg';
import LogoZeta from '../assets/img/logo-zeta-channel.svg';


import CierrePopUp from '../components/CierrePopUp.jsx';
import Card from '../components/Card.jsx';
import Btn from '../components/Btn.jsx';
import { ZonaPixelMovil, ZonaPixelTablet, ZonaPixelPc } from '../components/Pixel.jsx';
import Agenda from './Agenda.jsx';
import SobreNosotros from '../data/sobreNosotros.js';

import galeria7 from '../assets/img/cartelera/high-school-musical/galeria-7.webp';
import galeria1 from '../assets/img/cartelera/high-school-musical/galeria-1.webp';
import galeria2 from '../assets/img/cartelera/high-school-musical/galeria-2.webp';
import galeria3 from '../assets/img/cartelera/high-school-musical/galeria-3.webp';
import galeria4 from '../assets/img/cartelera/high-school-musical/galeria-4.webp';
import galeria5 from '../assets/img/cartelera/high-school-musical/galeria-5.webp';
import galeria6 from '../assets/img/cartelera/high-school-musical/galeria-6.webp';


const Home = ({ popupHome, setpopupHome, popupQuepasa, setpopupQuepasa }) => {
    const [fotoSeleccionada, setFotoSeleccionada] = useState(0);
    const fotos = [galeria1, galeria2, galeria3, galeria4, galeria5, galeria6, galeria7];
    const informacion = SobreNosotros.find((item) => item.id === 1); // Encuentra el objeto con id 1

    return (
        <>
            <div className="relative pt-13 lg:pt-30 bg-pix-light dark:bg-pix-dark">
                <div>
                    {!popupQuepasa && (<Link className={`absolute top-20 left-8 mx-auto pt-6 cursor-pointer flex flex-col md:pl-10 lg:top-30 lg:left-60`} to="/Festival">
                        <div className="relative w-30 h-20 mx-auto">
                            <img src={pegatinaFestival} alt="Pegatina user" className="w-full h-full mx-auto" />
                            <img src={IconoFestival} alt="Icono festival" className="absolute -bottom-1 right-3 w-14 h-14" />
                        </div>
                        <div className="mx-auto text-center bg-white dark:bg-black text-2xl font-pixel rounded-full px-5 py-1 text-black dark:text-white uppercase">
                            festival
                        </div>
                    </Link>)}
                    {!popupQuepasa && (<Link className={`absolute top-20 right-8 mx-auto pt-6 cursor-pointer flex flex-col pr-10 lg:top-30 lg:right-60`} to="/Tickets">
                        <div className="relative w-30 h-20 mx-auto">
                            <img src={pegatinaTickets} alt="Pegatina user" className="w-full h-full mx-auto" />
                            <img src={IconoTickets} alt="Icono tickets" className="absolute -bottom-2 right-3 w-14 h-14" />
                        </div>
                        <div className="mx-auto text-center bg-white dark:bg-black text-2xl font-pixel rounded-full px-5 py-1 text-black dark:text-white uppercase">
                            tickets
                        </div>
                    </Link>)}
                    {!popupQuepasa && (<Link className={`relative mt-50  right-0 left-0 mx-auto pt-6 cursor-pointer flex flex-col lg:mt-40`} to="/Agenda">
                        <div className="relative w-30 h-20 mx-auto">
                            <img src={pegatinaAgenda} alt="Pegatina user" className="w-full h-full mx-auto" />
                            <img src={IconoAgenda} alt="Icono agenda" className="absolute bottom-0 right-3 w-14 h-14" />
                        </div>
                        <div className="mx-auto text-center bg-white dark:bg-black text-2xl font-pixel rounded-full px-5 py-1 text-black dark:text-white uppercase">
                            agenda
                        </div>
                    </Link>)}
                    {popupHome && (
                        <div className={`relative flex flex-col mt-20 -mb-45 mx-6 md:mx-40 lg:mx-150 ${popupHome ? 'block' : 'hidden'}`}>
                            <div className="p-5 bg-white rounded-xl">
                                <CierrePopUp text="alerta festival" setpopupIsOpen={setpopupHome} className="absolute top-0 right-0 left-0 mx-auto bg-blue" />

                                <div className="mt-13 md:mt-20">
                                    <div className="flex gap-4 items-center justify-center px-3 md:gap-8">
                                        <div>
                                            <img src={IconoAlert} alt="Imagen alerta" className="w-20 h-20 mx-auto " />
                                        </div>
                                        <h1 className="text-5xl font-bold font-sans">ALERTA</h1>
                                    </div>
                                    <div className=" justify-center mt-8 mb-4 md:mt-12 md:mx-10">
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
                        <div className={`relative mt-13 pb-10 mx-auto flex flex-col px-4 md:px-10 lg:px-100 md:pb-30 ${popupQuepasa ? 'block' : 'hidden'}`}>
                            <div className="pt-20 px-6 bg-white rounded-xl lg:px-12">
                                <CierrePopUp text="alerta festival" setpopupIsOpen={setpopupQuepasa} className="absolute top-0 right-0 left-0 mx-4 md:mx-10 lg:mx-100 bg-blue" />

                                <div className="lg:flex lg:gap-12 lg:items-center md:pb-16">

                                    <div className="flex flex-col gap-8 items-center text-center mb-12 md:mt-12 md:gap-12 lg:gap-8 lg:mt-6 lg:flex-1/2">
                                        <h1 className="text-5xl font-bold font-sans md:text-7xl lg:text-6xl">Estás viendo Zeta Channel</h1>
                                        <h2 className="text-2xl font-medium md:text-3xl text-balance">Tu infancia merece un reencuentro</h2>
                                        <Btn to="/Tickets" text="Compra tu entrada" />
                                    </div>
                                    <div className="flex flex-col gap-4 mx-auto mb-12 md:flex-row md:pt-6 lg:flex-1/2">

                                        {/* FOTO GRANDE PRINCIPAL*/}
                                        <div className="w-full aspect-3/4 rounded-xl overflow-hidden bg-slate-200 md:rounded-2xl">
                                            <img
                                                src={fotos[fotoSeleccionada]}
                                                alt={`Foto ${fotoSeleccionada + 1}`}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>

                                        {/* CONTENEDOR DE MINIATURAS (Dividido en Bloque Izquierdo y Bloque Derecho) */}
                                        <div className="grid grid-cols-3 gap-3 w-full md:w-1/2 md:grid-cols-1 lg:w-2/4">

                                            {/* BLOQUE IZQUIERDO: Las 6 primeras fotos (2 filas de 3) */}
                                            <div className="col-span-2 grid grid-cols-3 gap-3 md:grid-cols-2 ">
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
                                </div>

                                <img src={LogoZeta} alt="Logo Zeta Channel" className="w-full h-auto mx-auto px-12 md:w-1/2 lg:px-32 lg:w-1/4 md:absolute md:bottom-30 md:left-50 lg:left-170 lg:right-1/2" />

                            </div>
                        </div>
                    )}
                    {!popupHome && !popupQuepasa && (<div className={`absolute top-115 left-0 right-0 mx-auto pt-6 cursor-pointer flex flex-col md:top-120 lg:top-130 ${popupHome ? 'hidden' : 'block'}`} onClick={() => setpopupHome(true)}>
                        <div className={`relative w-30 h-20 mx-auto ${styles.animateheartbeat}`}>
                            <img src={pegatinaAlert} alt="Pegatina alerta" className="w-full h-auto mx-auto" />
                            <img src={IconoAlert} alt="Icono alerta" className="absolute bottom-0 right-0 left-0  mx-auto w-14 h-14" />
                            <div className="absolute -top-1 right-1.5 text-white  font-pixel text-3xl text-center bg-red-alert w-9 h-9 rounded-full">
                                <p>1</p>
                            </div>
                        </div>
                    </div>)}
                    {!popupQuepasa && (<Link className={`relative my-60 ml-40 pt-6 cursor-pointer flex flex-col md:ml-100 lg:pl-80`} to="/Cartelera">
                        <div className="relative w-30 h-20 mx-auto">
                            <img src={pegatinaCartelera} alt="Pegatina user" className="w-full h-full mx-auto" />
                            <img src={IconoCartelera} alt="Icono cartelera" className="absolute bottom-0 right-3 w-14 h-14" />
                        </div>
                        <div className="mx-auto text-center bg-white dark:bg-black text-2xl font-pixel rounded-full px-5 py-1 text-black dark:text-white uppercase">
                            cartelera
                        </div>
                    </Link>)}
                    {!popupQuepasa && (<Link className={`relative bottom-60 -left-30 mx-auto pt-6 cursor-pointer flex flex-col md:pr-60 md:bottom-70 lg:mr-120`} to="/User">
                        <div className="relative w-30 h-20 mx-auto">
                            <img src={pegatinaUser} alt="Pegatina user" className="w-full h-full mx-auto" />
                            <img src={IconoUser} alt="Icono user" className="absolute bottom-0 right-3 w-14 h-14" />
                        </div>
                        <div className="mx-auto text-center bg-white dark:bg-black text-2xl font-pixel rounded-full px-5 py-1 text-black dark:text-white uppercase">
                            user
                        </div>
                    </Link>)}
                    {!popupQuepasa && (<Link className={`absolute bottom-25 right-20 mx-auto pt-6 cursor-pointer flex flex-col md:right-80 lg:right-1/2 lg:bottom-35`} to="/">
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

            <div className="relative pointer-events-none">
                <div className="absolute inset-x-0 top-0 z-0 -mt-2 overflow-hidden w-full">
                    <div className="block w-full md:hidden">
                        <ZonaPixelMovil className="text-pix-light dark:text-pix-dark w-full" />
                    </div>
                    <div className="hidden w-full md:block lg:hidden">
                        <ZonaPixelTablet className="text-pix-light dark:text-pix-dark w-full" />
                    </div>
                    <div className="hidden w-full lg:block">
                        <ZonaPixelPc className="text-pix-light dark:text-pix-dark w-full" />
                    </div>
                </div>
            </div>

            <div className="relative w-30 my-14 h-20 mx-auto z-1">
                <img src={pegatinaCarpeta} alt="Pegatina Carpeta" className="mx-auto" />
                <img src={IconoCarpeta} alt="Icono Carpeta" className="absolute -bottom-2 right-2 w-12 h-12" />
            </div>

            <section className="relative mx-auto py-10 gap-16 px-5 flex flex-col md:px-10 z-1">
                <h2 className="flex justify-center text-4xl font-pixel text-black dark:text-white uppercase text-center md:text-5xl md:mb-5">¿QUÉ TE APETECE RECORDAR?</h2>
                <div className="grid grid-cols-1 gap-16 md:gap-x-10 md:gap-y-18 md:grid-cols-2 lg:grid-cols-3 lg:container lg:mx-auto lg:px-30 lg:gap-20">
                    <Card card={CATALOGO.find((peli) => peli.id === 1)} />
                    <Card card={CATALOGO.find((peli) => peli.id === 3)} />
                    <Card card={CATALOGO.find((peli) => peli.id === 18)} />
                    <Card card={CATALOGO.find((peli) => peli.id === 14)} className="hidden md:block" />
                    <Card card={CATALOGO.find((peli) => peli.id === 26)} className="hidden md:block" />
                    <Card card={CATALOGO.find((peli) => peli.id === 34)} className="hidden md:block" />

                </div>
                <Btn to="/Cartelera" text="Ver cartelera" className="mx-auto" />
            </section>

            <section className="mx-auto -mt-3 flex flex-col">
                <Agenda nobtnVisible={true} />
                <Btn to="/Agenda" text="Ver Agenda" className="mx-auto py-6" />
            </section>

            <div className="relative w-30 mb-25 py-12 h-20 mx-auto md:scale-110 md:mb-30">
                <img src={pegatinaDinosauro} alt="Pegatina Dinosauro" className="mx-auto" />
                <img src={IconoDinosauro} alt="Icono Dinosauro" className="absolute -bottom-14 left-2 w-14 h-14 dark:invert" />
            </div>

            <div className="relative z-10">
                <section className="flex flex-col mx-6 gap-6 text-black dark:text-white md:gap-10 md:mx-8 lg:container lg:mx-auto lg:gap-12">
                    <h2 className="text-4xl font-pixel uppercase text-center md:text-5xl">¿Quienes somos?</h2>
                    <div className="flex flex-col md:flex-row gap-6 md:text-balance lg:ml-20">
                        <p className="md:text-lg">{informacion.parrafo1}</p>
                        <p className="md:text-lg">{informacion.parrafo2}</p>
                    </div>
                    <img src={informacion.imagen} alt="Imagen sobre nosotros" className="mx-auto my-6 bg-white overflow-hidden rounded-2xl md:w-3/4 md:my-1 lg:w-1/2" />
                    <Btn to="/Festival" text="Más Info" className="mx-auto mb-16" />
                </section>

                <div className="absolute bottom-0 rotate-180 w-full -z-10 pointer-events-none overflow-hidden mx-6">
                    <div className="block w-full md:hidden">
                        <ZonaPixelMovil className="text-pix-light dark:text-pix-dark w-full" />
                    </div>
                    <div className="hidden w-full md:block lg:hidden">
                        <ZonaPixelTablet className="text-pix-light dark:text-pix-dark w-full" />
                    </div>
                    <div className="hidden w-full lg:block">
                        <ZonaPixelPc className="text-pix-light dark:text-pix-dark w-full" />
                    </div>
                </div>
            </div>

        </>
    )
}
export default Home