import { useParams, /* Navigate, */ Link } from 'react-router-dom';
import { useState } from 'react';

import { CATALOGO } from '../data/films.js';
/* import Error404 from './Error404.jsx'; */
import Btn from '../components/Btn.jsx';
import btnMas from '../assets/img/icon/icon-btn-mas.svg';
import tiraRollText from '../assets/img/tira-roll-text.svg';
import styles from './Articulo.module.css';
import LabelCard from '../components/LabelCard.jsx';
import CierrePopUp from '../components/CierrePopUp.jsx';
import CarruselGaleria from '../components/CarruselGaleria.jsx';

import pegatinaCartel from '../assets/img/pegatinas/pegatina-icon-cartel.svg';
import pegatinaDesplegable from '../assets/img/pegatinas/pegatina-icon-desplegable.svg';
import iconCartel from '../assets/img/icon/articulo-cartel-icon.svg';
import iconDesplegable from '../assets/img/icon/articulo-desplegable-icon.svg';
import iconUbicacion from '../assets/img/icon/icon-ubicacion.svg';
import AcordeonArticulo from '../components/AcordeonArticulo.jsx';
/* import pixelFondo from '../assets/img/pixel-fondo.svg';
 */
const Articulo = () => {
    /* 1. Capturamos el slug de la URL */
    const { slug } = useParams();
    /* 2. Buscamos el artículo en el catálogo */
    const catalogo = CATALOGO.find(item => item.slug === slug);
    /* 3. Si no encontramos el artículo, redirigimos a la página de error */
    /* if (!catalogo) {
        return <Navigate to="/Error404" replace />; */


    const { tituloEsp, imagen, cartel, horario, fecha, tipo, duracion, sala, trailerVideo, cita, autorCita, imagenesGaleria } = catalogo;

    /* 4.Si la pelicula existe, mostramos su información */

    /* está el articulo abierto? */
    const [popupIsOpen, setpopupIsOpen] = useState(true);
    const [popupFicha, setpopupFicha] = useState(true);

    /* has seleccionado un horario? */
    const [horariosSeleccionados, setHorariosSeleccionados] = useState([]);
    const cambiarHorarioSeleccionado = (hora) => {
        if (horariosSeleccionados.includes(hora)) {
            const horaQuitada = horariosSeleccionados.filter(horaSeleccionada => horaSeleccionada !== hora)
            setHorariosSeleccionados(horaQuitada)
            console.log(horaQuitada)
        }
        else {
            const horaAnadida = [...horariosSeleccionados, hora]
            setHorariosSeleccionados(horaAnadida)
            console.log(horaAnadida)
        }
    }
    /* el horariosSeleccionados está vacio de por sí lo que hacemos es con el else metemos la hora que le hemos dado, luego si le volvemos a dar hace el filter que borra la hora que coincide a la que le hemos dado */

    return (
        <article className="relative pt-8">
            {/* TAPADERA CARD */}
            <div className="absolute bottom-full right-0 -mb-11 z-10 ml-27.5">

                <LabelCard className="w-full h-12 relative text-blue" />

                {/* He tenido que crear un componente al svg para poder ponerle el hover como className y además hacer el group-hover para que se haga en modo grupo */}
            </div>
            {/* CONTENIDO */}
            <div className="pt-7 pb-6 bg-blue rounded-tl-4xl">
                {/* PRIMERA PARTE - IMAGEN -  BTNES - TITULO PRINCIPAL */}
                <div className="flex flex-col gap-6 px-6">
                    <div className="relative flex flex-col gap-4 md:flex-row md:gap-8">
                        <Link to="/Entradas" className="absolute z-997 top-0 right-0 w-auto h-auto">
                            <img src={btnMas} alt="Más información" />
                        </Link>
                        <div className="relative w-full onject-cover overflow-hidden rounded-4xl">
                            <img src={imagen} alt={tituloEsp} className="w-full" />
                        </div>
                        <div className="absolute top-0 bottom-0 left-0 right-0 z-997 flex items-center justify-center">
                            <Btn to="/Entradas" text="comprar" variant='solidgreen' size='lg' font='sans' />
                        </div>
                    </div>
                    <h1 className="text-4xl font-bold uppercase">{tituloEsp}</h1>
                </div>

                {/*  TIRA ROLL */}
                <div className="bg-pink py-2 my-8">
                    <div
                        style={{ backgroundImage: `url(${tiraRollText})` }}
                        className={`w-full h-4 ${styles.roll}`}>
                    </div>
                    {/* TO DO: quizás plantear un roll que conforme scrollees se lea */}
                </div>

                {/* CARTEL + EASTER EGG CERRADO */}
                <div className={`relative flex flex-col px-10 ${popupIsOpen ? 'block' : 'hidden'}`}>
                    <div className="p-6 bg-white rounded-xl">
                        <CierrePopUp text="Cartel" setpopupIsOpen={setpopupIsOpen} className="absolute top-0 right-0 left-0 mx-10" />

                        <img src={cartel} alt={tituloEsp} className="w-full rounded-2xl mt-13" />
                        <img src={pegatinaCartel} alt="Pegatina cartel" className="absolute top-40 right-5 w-20 h-20 rotate-6" />
                    </div>
                </div>
                <div className={`mx-auto  flex flex-col ${popupIsOpen ? 'hidden' : 'block'}`} onClick={() => setpopupIsOpen(true)}>
                    <div className="relative w-20 h-20 mx-auto">
                        <img src={pegatinaCartel} alt="Pegatina cartel" className="mx-auto" />
                        <img src={iconCartel} alt="Icono cartel" className="absolute bottom-1 -right-1 w-12 h-12" />
                    </div>
                    <div className="mx-auto text-center bg-white dark:bg-black text-2xl font-pixel rounded-full px-5 py-1 text-black dark:text-white uppercase">
                        Cartel
                    </div>
                </div>

                {/* INFORMACIÓN DE LA PELÚCULA - HORARIOS, SALA, LUGAR Y BTN COMPRA */}
                <ul className="flex flex-col gap-4 p-6">
                    <li className="flex justify-between">
                        <p className="text-[calc(1.25rem+0.25vw)] font-sans text-white">{tipo}</p>
                        <p className="text-[calc(1.25rem+0.25vw)] text-white font-pixel">{duracion} min</p>
                    </li>
                    <li className="w-full h-0.5 bg-white"></li>
                    <li className="flex justify-between">
                        <Btn text={`${fecha} sep`} variant='solidpink' size='xs' font='pixel' />

                        {horario.map((hora) => (
                            <Btn key={hora} text={hora} variant={horariosSeleccionados.includes(hora) ? 'solidblack' : 'outlinewhite'} size='xs' font='pixel' size='xs' font='pixel'
                                /* map para que se añadan la cantidad de btn segun la cantidad de horas que haya */
                                onClick={() => cambiarHorarioSeleccionado(hora)} />
                        )
                        )}

                        <p className="font-pixel text-xl text-white uppercase">Sala {sala}</p>
                    </li>
                    <li className="flex items-center gap-3 mx-auto py-2">
                        <img src={iconUbicacion} alt='Ubicación' />
                        <p className="font-pixel text-white text-lg text-nowrap">Autocine Madrid - C. Isla de Java, 2</p>
                    </li>
                    <li className="flex justify-center">
                        <Btn to="/Entradas" text="comprar" variant='solidgreen' size='xs' font='sans' />
                    </li>
                </ul>

                {/* FICHA TÉCNICA + EASTER EGG CERRADO */}
                <div className={`relative flex flex-col px-4 my-6 ${popupFicha ? 'block' : 'hidden'}`}>
                    <div className="p-6 bg-white rounded-xl">
                        <CierrePopUp text="Ficha Técnica" setpopupIsOpen={setpopupFicha} className="absolute top-0 right-0 left-0 mx-4" />
                        <AcordeonArticulo desplegable={catalogo} />
                        <div className="pt-6 flex flex-col gap-6">
                            <h2 className="text-2xl font-pixel uppercase text-black">trailer</h2>
                            <iframe src={trailerVideo} title={`Trailer - ${tituloEsp}`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen style={{ filter: 'grayscale(100%)' }}
                            ></iframe>
                            {/* puedo hacer que con un estado lea si le ha dado play y ponga el video o sino la imagen que yo quiera TO DO QUIZÁS MÁS ADELANTE */}
                            <blockquote>
                                <p className="text-black font-sans leading-6">
                                    {cita}
                                </p>
                                <div className="flex justify-end">
                                    <cite className="text-lg font-bold not-italic">{autorCita}</cite>
                                </div>
                            </blockquote>
                        </div>
                    </div>
                </div>
                <div className={`mx-auto my-6 flex flex-col ${popupFicha ? 'hidden' : 'block'}`} onClick={() => setpopupFicha(true)}>
                    <div className="relative w-30 h-20 mx-auto">
                        <img src={pegatinaDesplegable} alt="Pegatina cartel" className="mx-auto" />
                        <img src={iconDesplegable} alt="Icono cartel" className="absolute bottom-0 right-2 w-12 h-12" />
                    </div>
                    <div className="mx-auto text-center bg-white dark:bg-black text-2xl font-pixel rounded-full px-5 py-1 text-black dark:text-white uppercase">
                        INFORMACIÓN
                    </div>
                </div>

                {/* GALERIA */}
                <div className="flex flex-col">
                    <h2 className="text-3xl font-pixel uppercase text-white p-6">Galería</h2>
                    <CarruselGaleria imagenesGaleria={imagenesGaleria} />
                </div>
                {/*  TIRA ROLL 2 */}
                <div className="bg-green py-2 my-12">
                    <div
                        style={{ backgroundImage: `url(${tiraRollText})` }}
                        className={`w-full h-4 ${styles.roll}`}>
                    </div>
                    {/* TO DO: quizás plantear un roll que conforme scrollees se lea */}
                </div>

                {/* PELICULAS RELACIONADAS */}
                <div>
                    <h2 className="text-3xl font-pixel uppercase text-black dark:text-white bg-pix-light dark:bg-pix-dark">También te podría interesar</h2>
                </div>
            </div>
            {/* <div>
                <img src={pixelFondo} alt="Pixel fondo" className="text-pix-light dark:bg-pix-dark w-full" />
            </div> */}
        </article>
    );
}
export default Articulo;
/* TO DO: versión tablet y pc */
/* TO DO: reseteo etiquetas div app entera -- article / section */