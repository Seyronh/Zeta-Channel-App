import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'

import flechaDesplegable from '../assets/img/icon/icon-chevron.svg';
import salir from "../assets/img/icon/icon-salir.svg";

const FiltrosCartelera = ({ tipoSeleccionado, setTipoSeleccionado, totalResultados }) => {
    // Definimos las opciones que van en el desplegable
    const tipos = [
        { id: 'all', name: 'Todo' },
        { id: 'Película', name: 'Películas' },
        { id: 'Serie', name: 'Series' },
        { id: 'Actividad', name: 'Actividades' }
    ];

    const tipoActualObjeto = tipos.find(tipo => tipo.id === tipoSeleccionado);

    const limpiarFiltros = () => {
        setTipoSeleccionado('all');
    };

    return (
        <div>
            <nav className={`flex flex-wrap items-center gap-4 font-sans ${tipoSeleccionado !== 'all' ? 'mb-4' : 'mb-16'}`}>
                <Listbox value={tipoSeleccionado} onChange={setTipoSeleccionado}>
                    <div className="relative">
                        <ListboxButton className={`flex items-center gap-3 bg-green text-black font-semi-bold px-6 py-2.5 rounded-full data-open:rounded-l-3xl data-open:rounded-r-3xl data-open:rounded-b-none transition duration-75 uppercase group ${tipoSeleccionado === 'all' ? 'data-open:gap-10' : 'data-open:gap-6'}`}>
                            <span className={`${tipoSeleccionado === 'all' ? '' : 'border-r-2 border-black pr-2'}`}>
                                {tipoSeleccionado === 'all' ? 'TIPO' : tipoActualObjeto?.name}
                            </span>
                            <img src={flechaDesplegable} alt="Flecha desplegable" className={`h-4 w-4 transition-transform group-data-open:rotate-180 ${tipoSeleccionado === 'all' ? '' : 'hidden'}`} />
                            {/* le ponemos un ? por si no existe, para que lo compruebe, el objeto tipoActualObjeto */}


                            {tipoSeleccionado !== 'all' && (
                                <button
                                    onClick={limpiarFiltros}
                                    title="Limpiar filtros"
                                    className="flex items-center justify-center text-black w-4"
                                >
                                    <img src={salir} alt="Limpiar filtros" className="w-4 h-4 invert" />
                                </button>
                            )}
                        </ListboxButton>

                        <ListboxOptions className="absolute left-0 flex flex-col bg-green rounded-b-3xl rounded-t-none overflow-hidden p-2 z-50 -mt-0.5 w-full">
                            {tipos.map((tipo) => (
                                <ListboxOption
                                    key={tipo.id}
                                    value={tipo.id}
                                    className={({ selected }) => `
                                        cursor-pointer select-none px-4 py-2.5 text-sm font-semi-bold uppercase rounded-xl transition-colors mb-0.5 last:mb-0 lg:data-focus:bg-black/10
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

            {tipoSeleccionado !== 'all' && (
                <p className="uppercase text-black font-sans mb-16 text-right">
                    <span className="font-bold bg-grey rounded-full px-3.5 py-2">{totalResultados}</span>    Resultados
                </p>
            )}
        </div>
    );
};
export default FiltrosCartelera;
