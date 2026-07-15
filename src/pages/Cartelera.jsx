import { useState, useMemo } from "react";

import Card from "../components/Card.jsx";
import { CATALOGO } from "../data/films.js";
import carteleraIcon from '../assets/img/icon/icon-cartelera.svg';
import FiltrosCartelera from "../components/FiltrosCartelera.jsx";

import { usePrevNextButtons } from "../data/usePrevNextButtons.js";
import { PrevButton, NextButton } from "../components/BtnCarrusel.jsx";
import { useCarruselIndicadores } from "../data/useCarruselIndicadores.js";
import { DotButton } from "../components/CarruselIndicadores.jsx";

import { Pix1, /* PixFondo */ } from '../components/Pixel.jsx';


const Cartelera = () => {

    // La lógica de qué filtro está activo vive aquí arriba
    const [tipoSeleccionado, setTipoSeleccionado] = useState('all');
    const [generoSeleccionado, setGeneroSeleccionado] = useState('all');
    const [fechaSeleccionada, setFechaSeleccionada] = useState('all');
    // 1. ESTADOS PARA LA PAGINACIÓN
    const [paginaActual, setPaginaActual] = useState(1);
    const cardsPorPagina = 8; // Máximo de cartas en móvil

    // Aquí se filtran las películas reales
    let pelisFiltradas = CATALOGO.filter((peli) => {
        if (tipoSeleccionado === 'all') return true;
        return peli.tipo === tipoSeleccionado;
    });
    pelisFiltradas = pelisFiltradas.filter((peli) => {
        if (generoSeleccionado === 'all') return true;
        return peli.genero.includes(generoSeleccionado);
    });
    pelisFiltradas = pelisFiltradas.filter((peli) => {
        if (fechaSeleccionada === 'all') return true;
        return peli.fecha === parseInt(fechaSeleccionada);
        /* hemos tenido que usar parseInt porque los valores de fecha seleccionada son strings entre comillas  es decir de ponia 14 === "14" cuando eso no es exactamente === pq uno es un numero y el toro es un texto */
    });
    /* estamos usando let para poder cambiar la definición */

    const totalPaginas = Math.ceil(pelisFiltradas.length / cardsPorPagina);
    const indiceUltimaCard = paginaActual * cardsPorPagina;
    const indicePrimeraCard = indiceUltimaCard - cardsPorPagina;
    const pelisPaginadas = pelisFiltradas.slice(indicePrimeraCard, indiceUltimaCard);

    // ─── 2. LA MAGIA: EL FALSO EMBLA API ───
    // Engañamos a tus hooks simulando los métodos que necesitan para funcionar
    const falsoEmblaApi = useMemo(() => {
        return {
            scrollPrev: () => { if (paginaActual > 1) setPaginaActual(p => p - 1); },
            scrollNext: () => { if (paginaActual < totalPaginas) setPaginaActual(p => p + 1); },
            scrollTo: (index) => setPaginaActual(index + 1), // Embla empieza en 0, tus páginas en 1
            canScrollPrev: () => paginaActual > 1,
            canScrollNext: () => paginaActual < totalPaginas,
            scrollSnapList: () => Array.from({ length: totalPaginas }),
            selectedScrollSnap: () => paginaActual - 1,
            // Añadimos un .on vacío para que no explote al intentar escuchar eventos
            on: function () { return this; }
        };
    }, [paginaActual, totalPaginas]);

    // ─── 3. PASAMOS EL FALSO API A TUS HOOKS ORIGINALES ───
    const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(falsoEmblaApi);
    const { selectedIndex, scrollSnaps, onDotButtonClick } = useCarruselIndicadores(falsoEmblaApi);

    return (
        <div className="relative pt-20">
            <Pix1 className="absolute top-13 -left-4 w-40 h-40 text-pix-light dark:text-pix-dark" />
            {/* <div className="absolute bottom-0 left-0 right-0 flex w-full min-h-screen z-[-1] overflow-hidden">
                <PixFondo
                    className="w-full h-full text-pix-light"
                />
                <PixFondo
                    className="w-full h-full text-pix-light"
                /> */}
            {/* MAÑANA ARREGLAR PONER LOS PIXELES POR TAMAÑO */}
            {/* </div> */}

            <div className="p-4">

                <div className="relative flex items-center gap-4 justify-center mb-12">
                    <img src={carteleraIcon} alt="Icono de Cartelera" className="w-11 h-11 dark:invert" />
                    <h1 className="text-5xl leading-0 font-pixel uppercase text-black dark:text-white">CARTELERA</h1>

                </div>

                <FiltrosCartelera
                    tipoSeleccionado={tipoSeleccionado}
                    setTipoSeleccionado={setTipoSeleccionado}
                    generoSeleccionado={generoSeleccionado}
                    setGeneroSeleccionado={setGeneroSeleccionado}
                    fechaSeleccionada={fechaSeleccionada}
                    setFechaSeleccionada={setFechaSeleccionada}

                    totalResultados={pelisFiltradas.length}
                />

                {/* LAS TARJETAS REORTADAS Y FILTRADAS */}
                <div className="container mx-auto grid grid-cols-1 gap-16 md:gap-x-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-20 lg:gap-y-28">
                    {pelisPaginadas.map(peli => (
                        <Card key={peli.id} card={peli} />
                    ))}
                </div>
                {/* ─── 4. RENDERIZADO USANDO TUS PROPIOS COMPONENTES ─── */}
                {totalPaginas > 1 && (
                    <div className="flex items-center justify-center gap-6 mt-16 mb-8 select-none">

                        {/* Botón de atrás idéntico al carrusel */}
                        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />

                        {/* Generador de tus DotButtons exactos */}
                        <div className="flex items-center gap-5">
                            {scrollSnaps.map((_, index) => (
                                <DotButton
                                    key={index}
                                    onClick={() => onDotButtonClick(index)}
                                    className={`transition-all duration-300 rounded-full
                                    ${index === selectedIndex
                                            ? 'w-5 h-5 bg-green' // Estilo activo Y2K
                                            : 'w-5 h-5 bg-black opacity-60 dark:bg-white' // Estilo apagado
                                        }`}
                                />
                            ))}
                        </div>

                        {/* Botón de adelante idéntico al carrusel */}
                        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />

                    </div>
                )}
            </div>
        </div>

    );
};

export default Cartelera;