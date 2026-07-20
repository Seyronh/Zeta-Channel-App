import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Btn from '../components/Btn.jsx';
import styles from './Error404.module.css';

import pegatinaAgenda from '../assets/img/pegatinas/pegatina-icon-cartel.svg';
import pegatinaUser from '../assets/img/pegatinas/pegatina-user.svg';
import pegatinaFestival from '../assets/img/pegatinas/pegatina-festival.svg';
import pegatinaTickets from '../assets/img/pegatinas/pegatina-checkout.svg';
import pegatinaCartelera from '../assets/img/pegatinas/pegatina-cartelera.svg';
import pegatinaHome from '../assets/img/pegatinas/pegatina-home.svg';

import IconoFestival from '../assets/img/icon/icon-festival.svg';
import IconoTickets from '../assets/img/icon/icon-ticket.svg';
import IconoAgenda from '../assets/img/icon/icon-agenda.svg';
import IconoCartelera from '../assets/img/icon/icon-cartelera.svg';
import IconoUser from '../assets/img/icon/icon-user.svg';
import IconoHome from '../assets/img/icon/icon-home.svg';
import IconoDinosauro from '../assets/img/icon/icono-dino.svg';

const Error404 = () => {
    // isJumping controla si se está ejecutando la animación de salto
    const [isJumping, setIsJumping] = useState(false);

    const handleTriggerJump = () => {
        if (isJumping) return; // Si ya está saltando, no hace nada
        setIsJumping(true);
    };

    // Escuchamos la barra espaciadora (opcional, pero buena práctica)
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.code === 'Space') {
                event.preventDefault(); // Evita scroll
                handleTriggerJump();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isJumping]);
    return (
        <div className="bg-blue pt-15">
            <div className="lg:hidden">
                <div className="pt-20 text-center text-white dark:text-black ">
                    <h1 className="text-[calc(10rem+2vw)] font-bold font-sans">404</h1>
                    <p className="text-6xl font-pixel -mt-5">Página no encontrada</p>
                    <div className={styles.dinoStage}>
                        <img
                            src={IconoDinosauro}
                            alt="Icono de dinosaurio interactivo"
                            // Manejadores de eventos (clic para PC, onTouchStart para móviles más rápido)
                            onClick={handleTriggerJump}
                            onTouchStart={handleTriggerJump}

                            // Cuando termina la animación de SALTO, reseteamos el estado
                            onAnimationEnd={(e) => {
                                // Aseguramos que solo reaccionamos al fin del SALTO, no de la respiración
                                if (e.animationName.includes('chromeJump')) {
                                    setIsJumping(false);
                                }
                            }}

                            // Combinamos clases: siempre tiene .dino (respiración)
                            // Y condicionalmente .jump (salto)
                            className={`${styles.dino} ${isJumping ? styles.jump : ''}`}
                        />
                    </div>

                    <p className="text-xl font-sans mt-6 text-balance leading-6 md:text-2xl">
                        Toca el dinosaurio o pulsa espacio para saltar
                    </p>
                    <div className="md:flex md:justify-center">
                        <Btn to="/" text="Vuelve a probar" className="mt-12 mx-9 mb-20" />
                    </div>
                </div>
                <Link className="absolute top-226 left-8 mx-auto cursor-pointer flex flex-col md:pl-8" to="/Festival">
                    <div className="relative w-30 h-20 mx-auto">
                        <img src={pegatinaFestival} alt="Pegatina user" className="w-full h-full mx-auto" />
                        <img src={IconoFestival} alt="Icono festival" className="absolute -bottom-1 right-3 w-14 h-14" />
                    </div>
                    <div className="mx-auto text-center bg-white dark:bg-black text-2xl font-pixel rounded-full px-5 py-1 text-black dark:text-white uppercase">
                        festival
                    </div>
                </Link>
                <Link className="absolute top-220 right-8 mx-auto pt-6 cursor-pointer flex flex-col md:pr-8 lg:top-40 lg:right-55" to="/Tickets">
                    <div className="relative w-30 h-20 mx-auto">
                        <img src={pegatinaTickets} alt="Pegatina user" className="w-full h-full mx-auto" />
                        <img src={IconoTickets} alt="Icono tickets" className="absolute -bottom-2 right-3 w-14 h-14" />
                    </div>
                    <div className="mx-auto text-center bg-white dark:bg-black text-2xl font-pixel rounded-full px-5 py-1 text-black dark:text-white uppercase">
                        tickets
                    </div>
                </Link>
                <Link className="relative mt-60 right-0 left-0 mx-auto pt-6 cursor-pointer flex flex-col" to="/Agenda">
                    <div className="relative w-30 h-20 mx-auto">
                        <img src={pegatinaAgenda} alt="Pegatina user" className="w-full h-full mx-auto" />
                        <img src={IconoAgenda} alt="Icono agenda" className="absolute bottom-0 right-3 w-14 h-14" />
                    </div>
                    <div className="mx-auto text-center bg-white dark:bg-black text-2xl font-pixel rounded-full px-5 py-1 text-black dark:text-white uppercase">
                        agenda
                    </div>
                </Link>
                <Link className="relative my-10 ml-40 pt-6 cursor-pointer flex flex-col md:ml-110" to="/Cartelera">
                    <div className="relative w-30 h-20 mx-auto">
                        <img src={pegatinaCartelera} alt="Pegatina user" className="w-full h-full mx-auto" />
                        <img src={IconoCartelera} alt="Icono cartelera" className="absolute bottom-0 right-3 w-14 h-14" />
                    </div>
                    <div className="mx-auto text-center bg-white dark:bg-black text-2xl font-pixel rounded-full px-5 py-1 text-black dark:text-white uppercase">
                        cartelera
                    </div>
                </Link>

                <Link className="relative bottom-15 -left-30 mx-auto pt-6 cursor-pointer flex flex-col to md:-left-65 md:bottom-43" to="/User">
                    <div className="relative w-30 h-20 mx-auto">
                        <img src={pegatinaUser} alt="Pegatina user" className="w-full h-full mx-auto" />
                        <img src={IconoUser} alt="Icono user" className="absolute bottom-0 right-3 w-14 h-14" />
                    </div>
                    <div className="mx-auto text-center bg-white dark:bg-black text-2xl font-pixel rounded-full px-5 py-1 text-black dark:text-white uppercase">
                        user
                    </div>
                </Link>
                <Link className="relative bottom-20 left-0 pl-35 cursor-pointer flex flex-col md:pl-0 md:pr-10 md:bottom-25" to="/">
                    <div className="relative w-30 h-20 mx-auto">
                        <img src={pegatinaHome} alt="Pegatina Home" className="w-full h-full mx-auto" />
                        <img src={IconoHome} alt="Icono home" className="absolute bottom-0 right-3 w-14 h-14" />
                    </div>
                    <div className="mx-auto text-center bg-white dark:bg-black text-2xl font-pixel rounded-full px-5 py-1 text-black dark:text-white uppercase">
                        home
                    </div>
                </Link>
            </div>

            {/* -------------- LG VERSION ---------------- */}

            <div className="hidden lg:block relative pb-30">
                <div className="pt-20 text-center text-white dark:text-black ">
                    <h1 className="text-[calc(10rem+2vw)] font-bold font-sans">404</h1>
                    <p className="text-6xl font-pixel -mt-5">Página no encontrada</p>
                    <div className={styles.dinoStage}>
                        <img
                            src={IconoDinosauro}
                            alt="Icono de dinosaurio interactivo"
                            // Manejadores de eventos (clic para PC, onTouchStart para móviles más rápido)
                            onClick={handleTriggerJump}
                            onTouchStart={handleTriggerJump}

                            // Cuando termina la animación de SALTO, reseteamos el estado
                            onAnimationEnd={(e) => {
                                // Aseguramos que solo reaccionamos al fin del SALTO, no de la respiración
                                if (e.animationName.includes('chromeJump')) {
                                    setIsJumping(false);
                                }
                            }}

                            // Combinamos clases: siempre tiene .dino (respiración)
                            // Y condicionalmente .jump (salto)
                            className={`${styles.dino} ${isJumping ? styles.jump : ''}`}
                        />
                    </div>

                    <p className="text-xl font-sans mt-6 text-balance leading-6 md:text-2xl">
                        Toca el dinosaurio o pulsa espacio para saltar
                    </p>
                    <div className="md:flex md:justify-center">
                        <Btn to="/" text="Vuelve a probar" className="mt-12 mx-9 mb-20" />
                    </div>


                    <Link className="absolute top-30 left-80 cursor-pointer flex flex-col" to="/Festival">
                        <div className="relative w-30 h-20 mx-auto">
                            <img src={pegatinaFestival} alt="Pegatina user" className="w-full h-full mx-auto" />
                            <img src={IconoFestival} alt="Icono festival" className="absolute -bottom-1 right-3 w-14 h-14" />
                        </div>
                        <div className="mx-auto text-center bg-white dark:bg-black text-2xl font-pixel rounded-full px-5 py-1 text-black dark:text-white uppercase">
                            festival
                        </div>
                    </Link>
                    <Link className="absolute top-30 right-80 cursor-pointer flex flex-col" to="/Tickets">
                        <div className="relative w-30 h-20 mx-auto">
                            <img src={pegatinaTickets} alt="Pegatina user" className="w-full h-full mx-auto" />
                            <img src={IconoTickets} alt="Icono tickets" className="absolute -bottom-2 right-3 w-14 h-14" />
                        </div>
                        <div className="mx-auto text-center bg-white dark:bg-black text-2xl font-pixel rounded-full px-5 py-1 text-black dark:text-white uppercase">
                            tickets
                        </div>
                    </Link>
                    <Link className="absolute top-105 right-30 cursor-pointer flex flex-col" to="/Agenda">
                        <div className="relative w-30 h-20 mx-auto">
                            <img src={pegatinaAgenda} alt="Pegatina user" className="w-full h-full mx-auto" />
                            <img src={IconoAgenda} alt="Icono agenda" className="absolute bottom-0 right-3 w-14 h-14" />
                        </div>
                        <div className="mx-auto text-center bg-white dark:bg-black text-2xl font-pixel rounded-full px-5 py-1 text-black dark:text-white uppercase">
                            agenda
                        </div>
                    </Link>
                    <Link className="absolute top-105 left-30 cursor-pointer flex flex-col" to="/Cartelera">
                        <div className="relative w-30 h-20 mx-auto">
                            <img src={pegatinaCartelera} alt="Pegatina user" className="w-full h-full mx-auto" />
                            <img src={IconoCartelera} alt="Icono cartelera" className="absolute bottom-0 right-3 w-14 h-14" />
                        </div>
                        <div className="mx-auto text-center bg-white dark:bg-black text-2xl font-pixel rounded-full px-5 py-1 text-black dark:text-white uppercase">
                            cartelera
                        </div>
                    </Link>

                    <Link className="absolute bottom-50 left-100 cursor-pointer flex flex-col" to="/User">
                        <div className="relative w-30 h-20 mx-auto">
                            <img src={pegatinaUser} alt="Pegatina user" className="w-full h-full mx-auto" />
                            <img src={IconoUser} alt="Icono user" className="absolute bottom-0 right-3 w-14 h-14" />
                        </div>
                        <div className="mx-auto text-center bg-white dark:bg-black text-2xl font-pixel rounded-full px-5 py-1 text-black dark:text-white uppercase">
                            user
                        </div>
                    </Link>
                    <Link className="absolute bottom-50 right-100 cursor-pointer flex flex-col" to="/">
                        <div className="relative w-30 h-20 mx-auto">
                            <img src={pegatinaHome} alt="Pegatina Home" className="w-full h-full mx-auto" />
                            <img src={IconoHome} alt="Icono home" className="absolute bottom-0 right-3 w-14 h-14" />
                        </div>
                        <div className="mx-auto text-center bg-white dark:bg-black text-2xl font-pixel rounded-full px-5 py-1 text-black dark:text-white uppercase">
                            home
                        </div>
                    </Link>
                </div>


            </div>

        </div>

    )
};

export default Error404;