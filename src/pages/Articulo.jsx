import { useParams, /* Navigate, */ Link } from 'react-router-dom';
import { useState } from 'react';

import { CATALOGO } from '../data/films.js';
import Card from '../components/Card.jsx';
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
    /* 3. Si no encontramos el artículo, redirigimos a la página de error TO DO */
    /* if (!catalogo) {
        return <Navigate to="/Error404" replace />; */


    const { tituloEsp, imagen, cartel, horario, genero, fecha, tipo, duracion, sala, trailerVideo, cita, autorCita, imagenesGaleria } = catalogo;

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



    // 1. Primero, hacemos un array que excluya el artículo actual para no recomendarlo a sí mismo
    const restoDelCatalogo = CATALOGO.filter(item => item.id !== catalogo.id);

    // 2. BUSCAMOS RECOMENDACIÓN 1: Que comparta al menos un género
    const recomendadoGenero = restoDelCatalogo.find(item => {
        // Si alguno de los dos no tiene géneros, saltamos
        if (!item.genero || !catalogo.genero) return false;

        // Comprobamos si hay alguna coincidencia entre ambos arrays
        return item.genero.some(genero =>
            catalogo.genero.some(categoria => categoria.toLowerCase() === genero.toLowerCase())
        );
    }); /* some es para comprar que alguno de los generos está dentro entonces acepta esa pelicula como recomendada devuelve true o flase si lo cumple*/

    // 3. BUSCAMOS RECOMENDACIÓN 2: Mismo tipo (ej: Película, Serie, Actividad)
    // Excluimos también el de género para que no se repitan tarjetas si coinciden varias cosas
    const recomendadoTipo = restoDelCatalogo
        .filter(item => item.id !== recomendadoGenero?.id)
        .find(item => item.tipo === catalogo.tipo);

    // 4. BUSCAMOS RECOMENDACIÓN 3: Mismo día/fecha
    // Excluimos los dos anteriores para garantizar que siempre salgan 3 tarjetas distintas
    const recomendadoDia = restoDelCatalogo
        .filter(item => item.id !== recomendadoGenero?.id && item.id !== recomendadoTipo?.id)
        .find(item => item.fecha === catalogo.fecha);

    // Guardamos los tres elegidos en un array limpio (filtrando por si alguno devuelve "undefined")
    // Juntamos las recomendaciones pero guardando el objeto de la peli Y el motivo de la recomendación
    const recomendaciones = [
        recomendadoGenero && { peli: recomendadoGenero, motivo: "Mismo género" },
        recomendadoTipo && { peli: recomendadoTipo, motivo: "Mismo formato" },
        recomendadoDia && { peli: recomendadoDia, motivo: "Mismo día" }
    ].filter(Boolean); // Filtramos los que sean undefined

    return (
        <article className="relative pt-30">
            {/* TAPADERA CARD */}
            <div className="absolute bottom-full top-21 right-0 -mb-11 z-10 ml-27.5">

                <LabelCard className="w-full h-12 relative text-blue" />

                {/* He tenido que crear un componente al svg para poder ponerle el hover como className y además hacer el group-hover para que se haga en modo grupo */}
            </div>
            {/* CONTENIDO */}
            <div className="pt-7 bg-blue rounded-tl-4xl md:pt-12">
                {/* PRIMERA PARTE - IMAGEN -  BTNES - TITULO PRINCIPAL */}
                <div className="flex flex-col gap-6 px-6 md:px-10">
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
                    <h1 className="text-4xl font-bold uppercase md:text-6xl">{tituloEsp}</h1>
                </div>

                {/*  TIRA ROLL */}
                <div className="bg-pink py-2 my-8 md:my-12">
                    <div
                        style={{ backgroundImage: `url(${tiraRollText})` }}
                        className={`w-full h-4 ${styles.roll}`}>
                    </div>
                    {/* TO DO: quizás plantear un roll que conforme scrollees se lea */}
                </div>

                <div className="md:flex md:container md:gap-12 md:px-10 md:items-center">
                    {/* CARTEL + EASTER EGG CERRADO */}
                    <div className={`relative flex flex-col px-10 md:px-0 md:flex-1/2 ${popupIsOpen ? 'block' : 'hidden'}`}>
                        <div className="p-6 bg-white rounded-xl">
                            <CierrePopUp text="Cartel" setpopupIsOpen={setpopupIsOpen} className="absolute top-0 right-0 left-0 mx-10 md:mx-0" />

                            <img src={cartel} alt={tituloEsp} className="w-full rounded-2xl mt-13" />
                            <img src={pegatinaCartel} alt="Pegatina cartel" className="absolute top-40 right-5 w-20 h-20 rotate-6" />
                        </div>
                    </div>
                    <div className={`mx-auto  flex flex-col md:flex-1/2 ${popupIsOpen ? 'hidden' : 'block'}`} onClick={() => setpopupIsOpen(true)}>
                        <div className="relative w-20 h-20 mx-auto">
                            <img src={pegatinaCartel} alt="Pegatina cartel" className="mx-auto" />
                            <img src={iconCartel} alt="Icono cartel" className="absolute bottom-1 -right-1 w-12 h-12" />
                        </div>
                        <div className="mx-auto text-center bg-white dark:bg-black text-2xl font-pixel rounded-full px-5 py-1 text-black dark:text-white uppercase">
                            Cartel
                        </div>
                    </div>

                    {/* INFORMACIÓN DE LA PELÚCULA - HORARIOS, SALA, LUGAR Y BTN COMPRA */}
                    <ul className="flex flex-col gap-4 p-6 md:p-0 md:gap-6 md:flex-1/2">
                        <li className="flex justify-between">
                            <p className="text-[calc(1.25rem+0.25vw)] font-sans text-white">{tipo}</p>
                            <p className="text-[calc(1.25rem+0.25vw)] text-white font-pixel">{duracion} min</p>
                        </li>
                        <li className="w-full h-0.5 bg-white"></li>
                        <li className="flex justify-between md:flex-col md:gap-8">
                            <div className="md:flex md:items-center md:justify-between">
                                <Btn text={`${fecha} sep`} variant='solidpink' size='xs' font='pixel' />
                                <p className="font-pixel text-xl text-white uppercase hidden md:block">Sala {sala}</p>
                            </div>

                            {horario.map((hora) => (
                                <Btn key={hora.hora} text={hora.hora} variant={horariosSeleccionados.includes(hora.hora) ? 'solidblack' : 'outlinewhite'} size='xs' font='pixel' size='xs' font='pixel' estado={hora.plazas === 0 ? 'noDisponible' : (hora.plazas <= 10 ? 'ultimasUnidades' : 'disponible')}
                                    /* map para que se añadan la cantidad de btn segun la cantidad de horas que haya */
                                    onClick={() => { if (hora.plazas > 0) { cambiarHorarioSeleccionado(hora.hora); } }} />
                            )
                            )}


                            <p className="font-pixel text-xl text-white uppercase md:hidden">Sala {sala}</p>
                        </li>
                        <li className="flex items-center gap-3 mx-auto py-2 md:gap-6">
                            <img src={iconUbicacion} alt='Ubicación' />
                            <p className="font-pixel text-white text-lg text-nowrap md:text-wrap md:flex md:flex-col">Autocine Madrid - <span>C. Isla de Java, 2</span></p>
                        </li>
                        <li className="flex justify-center">
                            <Btn to="/Entradas" text="comprar" variant='solidgreen' size='xs' font='sans' className="w-full" />
                        </li>
                    </ul>
                </div>
                {/* FICHA TÉCNICA + EASTER EGG CERRADO */}
                <div className={`relative flex flex-col px-4 my-6 md:px-16 md:my-16 ${popupFicha ? 'block' : 'hidden'}`}>
                    <div className="p-6 bg-white rounded-xl">
                        <CierrePopUp text="Ficha Técnica" setpopupIsOpen={setpopupFicha} className="absolute top-0 right-0 left-0 mx-4 md:mx-16" />
                        <AcordeonArticulo desplegable={catalogo} />
                        <div className="pt-6 flex flex-col gap-6">
                            <h2 className="text-2xl font-pixel uppercase text-black">trailer</h2>
                            <iframe src={trailerVideo} title={`Trailer - ${tituloEsp}`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen style={{ filter: 'grayscale(100%)' }} className="w-full aspect-video rounded-xl"
                            ></iframe>
                            {/* puedo hacer que con un estado lea si le ha dado play y ponga el video o sino la imagen que yo quiera TO DO QUIZÁS MÁS ADELANTE */}
                            <blockquote>
                                <p className="text-black font-sans leading-6 md:text-xl">
                                    {cita}
                                </p>
                                <div className="flex justify-end md:pr-4">
                                    <cite className="text-lg font-bold not-italic md:text-xl">{autorCita}</cite>
                                </div>
                            </blockquote>
                        </div>
                    </div>
                </div>
                <div className={`mx-auto my-8 flex flex-col md:my-16 ${popupFicha ? 'hidden' : 'block'}`} onClick={() => setpopupFicha(true)}>
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
                    <h2 className="text-3xl font-pixel uppercase text-white p-6 md:px-10 md:text-4xl">Galería</h2>
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


                {/* <div> TO DO: poner el pixel-fondo de fondo de la sección de recomendaciones */}
                {/* <img src={pixelFondo} alt="Pixel fondo" className="text-pix-light dark:bg-pix-dark w-full" />
            </div> */}

                {/* PELICULAS RELACIONADAS */}

                {recomendaciones.length > 0 && (
                    <div className="mt-20 border-t-2 border-black/10 pt-12 bg-pix-light dark:bg-pix-dark p-4 md:px-10">
                        {/* aquí iria de fondo el pix-fondo */}
                        <h2 className="text-3xl font-sans font-bold p-3 mb-3 uppercase text-black dark:text-white">También te podría interesar</h2>

                        <div className="container mx-auto grid grid-cols-1 gap-12 md:gap-x-10 md:gap-y-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-20 lg:gap-y-28 pb-16">
                            {recomendaciones.map(({ peli, motivo }) => (
                                <div key={peli.id} className="flex flex-col gap-10">
                                    {/* El texto sutil encima de la tarjeta */}
                                    <span className="uppercase text-neutral-600 font-medium p-3 font-sans dark:text-neutral-300 md:h-16">
                                        {motivo === "Mismo género" && `Si te gusta el ${genero.join(' / ')}`}
                                        {motivo === "Mismo formato" && `Otra ${catalogo.tipo} clave`}
                                        {motivo === "Mismo día" && "Otra opción para el mismo día"}
                                    </span>

                                    {/* Tu tarjeta de siempre */}
                                    <Card card={peli} />
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>


        </article>
    );
}
export default Articulo;
/* TO DO: versión tablet y pc */
/* TO DO: reseteo etiquetas div app entera -- article / section */