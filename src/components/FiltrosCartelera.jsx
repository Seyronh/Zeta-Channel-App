import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'

import flechaDesplegable from '../assets/img/icon/icon-chevron.svg';
import salir from "../assets/img/icon/icon-salir.svg";

const FiltrosCartelera = ({ tipoSeleccionado, setTipoSeleccionado, totalResultados, generoSeleccionado, setGeneroSeleccionado, fechaSeleccionada, setFechaSeleccionada }) => {
    // Definimos las opciones que van en el desplegable
    const tipos = [
        { id: 'all', name: 'Todo' },
        { id: 'Película', name: 'Movies' },
        { id: 'Serie', name: 'Series' },
        { id: 'Actividad', name: 'Eventos' }
    ];

    const tipoActualObjeto = tipos.find(tipo => tipo.id === tipoSeleccionado);


    const genero = [
        { id: 'all', name: 'Todo' },
        { id: 'Musical', name: 'Musical' },
        { id: 'Romance', name: 'Romance' },
        { id: 'Juvenil', name: 'Juvenil' },
        { id: 'Animación', name: 'Animación' },
        { id: 'Comedia', name: 'Comedia' }

    ];

    const generoActualObjeto = genero.find(genero => genero.id === generoSeleccionado);

    const fecha = [
        { id: 'all', name: 'Todo' },
        { id: '13', name: 'Viernes' },
        { id: '14', name: 'Sábado' },
        { id: '15', name: 'Domingo' }


    ];

    const fechaActualObjeto = fecha.find(fecha => fecha.id === fechaSeleccionada);


    return (
        <div>
            {/* Cambiamos a un contenedor flex inteligente con transiciones en sus elementos */}
            <nav className={`flex items-center gap-3 justify-between flex-wrap font-sans md:gap-12 lg:gap-36 ${tipoSeleccionado !== "all" || generoSeleccionado !== "all" || fechaSeleccionada !== "all" ? 'mb-10' : 'mb-16'}`}>

                {/* ─── DESPLEGABLE 1: TIPO ─── */}
                <Listbox value={tipoSeleccionado} onChange={setTipoSeleccionado}>
                    <div className={`relative min-w-30 sm:flex-none transition-all duration-300 ${tipoSeleccionado !== 'all' ? 'flex-auto' : 'flex-1'}`}>
                        <ListboxButton className={`w-full flex items-center justify-between gap-3 bg-green text-black font-semi-bold px-6 py-2.5 rounded-full data-open:rounded-l-3xl data-open:rounded-r-3xl data-open:rounded-b-none uppercase group ${tipoSeleccionado === 'all' ? 'data-open:gap-10' : 'data-open:gap-6'}`}>
                            <span>
                                {tipoSeleccionado === 'all' ? 'TIPO' : tipoActualObjeto?.name}
                            </span>
                            <div className={`w-0.5 h-6 ${tipoSeleccionado === 'all' ? 'hidden' : 'block bg-black'}`}></div>
                            <img src={flechaDesplegable} alt="Flecha desplegable" className={`h-4 w-4 transition-transform duration-300 group-data-open:rotate-180 ${tipoSeleccionado === 'all' ? '' : 'hidden'}`} />

                            {tipoSeleccionado !== 'all' && (
                                <button
                                    onClick={() => setTipoSeleccionado("all")}
                                    title="Limpiar filtros"
                                    className="flex items-center justify-center text-black w-4"
                                >
                                    <img src={salir} alt="Limpiar filtros" className="w-4 h-4 invert" />
                                </button>
                            )}
                        </ListboxButton>

                        <ListboxOptions className="absolute left-0 flex flex-col bg-green rounded-b-3xl rounded-t-none overflow-hidden p-2 z-50 -mt-0.5 w-full border-b-2 border-x-2 border-black/10">
                            {tipos.map((tipo) => (
                                <ListboxOption
                                    key={tipo.id}
                                    value={tipo.id}
                                    className={({ selected }) => `
                                    cursor-pointer select-none px-4 py-2.5 text-sm font-semi-bold uppercase rounded-xl transition-colors mb-0.5 last:mb-0 lg:data-focus:bg-black/10 md:text-lg
                                    ${selected ? 'bg-black text-green font-bold' : 'text-black hover:bg-black/10'}
                                `}
                                >
                                    {tipo.name}
                                </ListboxOption>
                            ))}
                        </ListboxOptions>
                    </div>
                </Listbox>

                {/* ─── DESPLEGABLE 2: FECHA ─── */}
                <Listbox value={fechaSeleccionada} onChange={setFechaSeleccionada}>
                    <div className={`relative min-w-30 sm:flex-none transition-all duration-300 ${tipoSeleccionado !== 'all' ? 'flex-auto' : 'flex-1'}`}>
                        <ListboxButton className={`w-full flex items-center justify-between gap-3 bg-green text-black font-semi-bold px-6 py-2.5 rounded-full data-open:rounded-l-3xl data-open:rounded-r-3xl data-open:rounded-b-none uppercase group ${fechaSeleccionada === 'all' ? 'data-open:gap-10' : 'data-open:gap-6'}`}>
                            <span>
                                {fechaSeleccionada === 'all' ? 'FECHA' : fechaActualObjeto?.name}
                            </span>
                            <div className={`w-0.5 h-6 ${fechaSeleccionada === 'all' ? 'hidden' : 'block bg-black'}`}></div>
                            <img src={flechaDesplegable} alt="Flecha desplegable" className={`h-4 w-4 transition-transform duration-300 group-data-open:rotate-180 ${fechaSeleccionada === 'all' ? '' : 'hidden'}`} />

                            {fechaSeleccionada !== 'all' && (
                                <button
                                    onClick={() => setFechaSeleccionada('all')}
                                    title="Limpiar filtros"
                                    className="flex items-center justify-center text-black w-4"
                                >
                                    <img src={salir} alt="Limpiar filtros" className="w-4 h-4 invert" />
                                </button>
                            )}
                        </ListboxButton>

                        <ListboxOptions className="absolute left-0 flex flex-col bg-green rounded-b-3xl rounded-t-none overflow-hidden p-2 z-50 -mt-0.5 w-full border-b-2 border-x-2 border-black/10">
                            {fecha.map((tipo) => (
                                <ListboxOption
                                    key={tipo.id}
                                    value={tipo.id}
                                    className={({ selected }) => `
                                    cursor-pointer select-none px-4 py-2.5 text-sm font-semi-bold uppercase rounded-xl transition-colors mb-0.5 last:mb-0 lg:data-focus:bg-black/10 md:text-lg
                                    ${selected ? 'bg-black text-green font-bold' : 'text-black hover:bg-black/10'}
                                `}
                                >
                                    {tipo.name}
                                </ListboxOption>
                            ))}
                        </ListboxOptions>
                    </div>
                </Listbox>

                {/* ─── DESPLEGABLE 3: GÉNERO  ─── */}
                <Listbox value={generoSeleccionado} onChange={setGeneroSeleccionado}>
                    <div className="relative min-w-30 flex-1">
                        <ListboxButton className={`w-full flex items-center justify-between bg-green text-black font-semi-bold px-6 py-2.5 rounded-full data-open:rounded-l-3xl data-open:rounded-r-3xl data-open:rounded-b-none uppercase group ${generoSeleccionado === 'all' ? 'data-open:gap-10' : 'data-open:gap-6'}`}>
                            <span>
                                {generoSeleccionado === 'all' ? 'GÉNERO' : generoActualObjeto?.name}
                            </span>
                            <img src={flechaDesplegable} alt="Flecha desplegable" className={`h-4 w-4 transition-transform duration-300 group-data-open:rotate-180 ${generoSeleccionado === 'all' ? '' : 'hidden'}`} />
                            <div className={`flex gap-6 ${generoSeleccionado === 'all' ? 'hidden' : 'block'}`}>
                                <div className="w-0.5 h-6 bg-black"></div>
                                {generoSeleccionado !== 'all' && (
                                    <button
                                        onClick={() => setGeneroSeleccionado('all')}
                                        title="Limpiar filtros"
                                        className="flex items-center justify-center text-black w-4"
                                    >
                                        <img src={salir} alt="Limpiar filtros" className="w-4 h-4 invert" />
                                    </button>
                                )}
                            </div>
                        </ListboxButton>

                        <ListboxOptions className="absolute left-0 flex flex-col bg-green rounded-b-3xl rounded-t-none overflow-hidden p-2 z-50 -mt-0.5 w-full border-b-2 border-x-2 border-black/10">
                            {genero.map((tipo) => (
                                <ListboxOption
                                    key={tipo.id}
                                    value={tipo.id}
                                    className={({ selected }) => `
                                    cursor-pointer select-none px-4 py-2.5 text-sm font-semi-bold uppercase rounded-xl transition-colors mb-0.5 last:mb-0 lg:data-focus:bg-black/10 md:text-lg
                                    ${selected ? 'bg-black text-green font-bold' : 'text-black hover:bg-black/10'}
                                `}
                                >
                                    {tipo.name}
                                </ListboxOption>
                            ))}
                        </ListboxOptions>
                    </div>
                </Listbox>
            </nav>

            {(fechaSeleccionada !== "all" || tipoSeleccionado !== "all" || generoSeleccionado !== 'all') && (
                <p className="uppercase text-black font-sans mb-17 text-right md:mb-10 lg:my-12">
                    <span className="font-bold bg-grey rounded-full px-3.5 py-2 md:py-3 lg:px-4.5 lg:mr-6">{totalResultados}</span> Resultados
                </p>
            )}
        </div>
    );
};
export default FiltrosCartelera;
