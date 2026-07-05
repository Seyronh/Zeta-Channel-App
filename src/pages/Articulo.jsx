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

import pegatinaCartel from '../assets/img/pegatinas/pegatina-icon-cartel.svg';
/* import pegatinaDesplegable from '../assets/img/pegatinas/pegatina-icon-desplegable.svg'; */
import iconCartel from '../assets/img/icon/articulo-cartel-icon.svg';
/* import iconDesplegable from '../assets/img/icon/articulo-desplegable-icon.svg'; */

const Articulo = () => {
    /* 1. Capturamos el slug de la URL */
    const { slug } = useParams();
    /* 2. Buscamos el artículo en el catálogo */
    const catalogo = CATALOGO.find(item => item.slug === slug);
    /* 3. Si no encontramos el artículo, redirigimos a la página de error */
    /* if (!catalogo) {
        return <Navigate to="/Error404" replace />; */


    const { tituloEsp, imagen, cartel,/* dia,  tipo, duracion, horario, sala, tituloVo, directorx, bandaSonora, saga, genero, sinopsis, personajes, trailerVideo, cita, autorCita, imagenesGaleria */ } = catalogo;

    /* 4.Si la pelicula existe, mostramos su información */

    /* está el articulo abierto? */
    const [popupIsOpen, setpopupIsOpen] = useState(true);

    return (
        <div className="relative pt-8">
            <div className="absolute bottom-full right-0 -mb-11 z-10 ml-27.5">

                <LabelCard className="w-full h-12 relative text-blue" />

                {/* He tenido que crear un componente al svg para poder ponerle el hover como className y además hacer el group-hover para que se haga en modo grupo */}
            </div>
            <div className="pt-7 pb-6 bg-blue rounded-tl-4xl">
                <div className="flex flex-col gap-7 px-6">
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

                <div className="bg-pink py-2 my-8">
                    <div
                        style={{ backgroundImage: `url(${tiraRollText})` }}
                        className={`w-full h-4 ${styles.roll}`}>
                    </div>
                    {/* TO DO: quizás plantear un roll que conforme scrollees se lea */}
                </div>
                <div className={`relative flex flex-col gap-7 px-10 ${popupIsOpen ? 'block' : 'hidden'}`}>
                    <div className="p-6 bg-white rounded-xl">
                        <CierrePopUp text="Cartel" setpopupIsOpen={setpopupIsOpen} className="absolute top-0 right-0 left-0 mx-10" />

                        <img src={cartel} alt={tituloEsp} className="w-full rounded-2xl mt-13" />
                        <img src={pegatinaCartel} alt="Pegatina cartel" className="absolute top-40 right-5 w-20 h-20 rotate-6" />
                    </div>
                </div>
                <div className={`mx-auto flex flex-col ${popupIsOpen ? 'hidden' : 'block'}`} onClick={() => setpopupIsOpen(true)}>
                    <div className="relative w-20 h-20 mx-auto">
                        <img src={pegatinaCartel} alt="Pegatina cartel" className="mx-auto" />
                        <img src={iconCartel} alt="Icono cartel" className="absolute bottom-1 -right-1 w-12 h-12" />
                    </div>
                    <div className="mx-auto text-center bg-white dark:bg-black text-2xl font-pixel rounded-full px-5 py-1 text-black dark:text-white uppercase">
                        Cartel
                    </div>
                </div>
            </div>
        </div >
    );
}
export default Articulo;
/* TO DO: QUE SE CIERRE EL POPUP DEL CARTEL y versión tablet */