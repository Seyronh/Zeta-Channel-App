import { useState } from "react";

import Card from "../components/Card.jsx";
import { CATALOGO } from "../data/films.js";
import carteleraIcon from '../assets/img/icon/icon-cartelera.svg';
import FiltrosCartelera from "../components/FiltrosCartelera.jsx";

const Cartelera = () => {
    // La lógica de qué filtro está activo vive aquí arriba
    const [tipoSeleccionado, setTipoSeleccionado] = useState('all');

    // Aquí se filtran las películas reales
    const pelisFiltradas = CATALOGO.filter((peli) => {
        if (tipoSeleccionado === 'all') return true;
        return peli.tipo === tipoSeleccionado;
    });
    return (
        <div className="p-6">
            <div className="flex items-center gap-4 justify-center mb-12">
                <img src={carteleraIcon} alt="Icono de Cartelera" className="w-11 h-11" />
                <h1 className="text-5xl leading-0 font-pixel uppercase">CARTELERA</h1>
            </div>

            <FiltrosCartelera
                tipoSeleccionado={tipoSeleccionado}
                setTipoSeleccionado={setTipoSeleccionado}
                totalResultados={pelisFiltradas.length}
            />

            {/* LAS TARJETAS REORTADAS Y FILTRADAS */}
            <div className="container mx-auto grid grid-cols-1 gap-16 md:gap-x-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-20 lg:gap-y-28">
                {pelisFiltradas.map(peli => (
                    <Card key={peli.id} card={peli} />
                ))}
            </div>
        </div>
    );
};

export default Cartelera;