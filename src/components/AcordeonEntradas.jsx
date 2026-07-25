import EntradasIndicador from '../components/EntradasIndicador.jsx';
import Btn from '../components/Btn.jsx';

import flechaDesplegable from '../assets/img/icon/icon-chevron.svg';
import iconInfo from '../assets/img/icon/icon-info.svg';


const AcordeonEntradas = ({ toggleSeccion, seccionActiva, setInfoEntradaDia, infoEntradaDia, esViernes, precioEntradas, entradaDia, setEntradaDia, unicoDia, hayAlgunaSeleccion, irASiguiente, setInfoEntradaInfantilDia, infoEntradaInfantilDia, entradaInfantilDia, setEntradaInfantilDia, entrada3Dias, setInfoEntradaInfantil3Dias, infoEntradaInfantil3Dias, setInfoEntrada3Dias, infoEntrada3Dias, setEntrada3Dias, entradaInfantil3Dias, setEntradaInfantil3Dias, precioTotal }) => (


    <div className="mt-12 md:mt-16">
        <button
            onClick={() => toggleSeccion(1)}
            className="flex w-full items-center uppercase font-pixel text-2xl text-left md:text-3xl md:px-2"
        >
            <span className="flex-1">1. Entrada</span>
            <img
                src={flechaDesplegable}
                alt=""
                aria-hidden="true"
                className={`h-6 w-6 transition-transform ${seccionActiva === 1 ? 'rotate-180' : ''}`}
            />
        </button>

        {seccionActiva === 1 && (
            <div className="mt-4 md:px-2">
                <ul className="flex flex-col text-black font-sans gap-3 md:gap-6">
                    <li className="flex flex-col gap-4 py-3">
                        <div className="flex justify-between items-end">
                            <div className="flex flex-col gap-2">
                                <div className="flex gap-3 items-center">
                                    <p className="text-xl">Entrada un día</p>
                                    <button onClick={() => setInfoEntradaDia(!infoEntradaDia)}>
                                        <img src={iconInfo} alt="Icono información" className="w-6 h-6" />
                                    </button>
                                </div>
                                <p className="font-bold text-2xl">{esViernes ? precioEntradas.entradaDiaViernes : precioEntradas.entradaDia} €</p>
                            </div>
                            <EntradasIndicador entrada={entradaDia} setEntrada={setEntradaDia} desactivado={!unicoDia && hayAlgunaSeleccion} />
                        </div>
                        {infoEntradaDia && <p className="text-sm text-neutral-500 text-pretty md:text-lg">Incluye todas las proyecciones y actividades de los 3 días del festival</p>}
                    </li>
                    <li className="flex flex-col gap-4 py-3">
                        <div className="flex justify-between items-end">
                            <div className="flex flex-col gap-2">
                                <div className="flex gap-3 items-center">
                                    <p className="text-xl">Infantil un día</p>
                                    <button onClick={() => setInfoEntradaInfantilDia(!infoEntradaInfantilDia)}>
                                        <img src={iconInfo} alt="Icono información" className="w-6 h-6" />
                                    </button>
                                </div>
                                <p className="font-bold text-2xl">{esViernes ? precioEntradas.entradaInfantilDiaViernes : precioEntradas.entradaInfantilDia} €</p>
                            </div>
                            <EntradasIndicador entrada={entradaInfantilDia} setEntrada={setEntradaInfantilDia} desactivado={!unicoDia && hayAlgunaSeleccion} />
                        </div>
                        {infoEntradaInfantilDia && <p className="text-sm text-neutral-500 text-pretty md:text-lg">*MENORES DE 12 AÑOS acompañados por un adulto</p>}
                    </li>
                    <li className="flex flex-col gap-4 py-3">
                        <div className="flex justify-between items-end">
                            <div className="flex flex-col gap-2">
                                <div className="flex gap-3 items-center">
                                    <p className="text-xl">Abono 3 días</p>
                                    <button onClick={() => setInfoEntrada3Dias(!infoEntrada3Dias)}>
                                        <img src={iconInfo} alt="Icono información" className="w-6 h-6" />
                                    </button>
                                </div>
                                <p className="font-bold text-2xl">{precioEntradas.entrada3Dias} €</p>
                            </div>
                            <EntradasIndicador entrada={entrada3Dias} setEntrada={setEntrada3Dias} desactivado={unicoDia && hayAlgunaSeleccion} />
                        </div>
                        {infoEntrada3Dias && <p className="text-sm text-neutral-500 text-pretty md:text-lg">Incluye todas las proyecciones y actividades de los 3 días del festival</p>}
                    </li>
                    <li className="flex flex-col gap-4 py-3">
                        <div className="flex justify-between items-end">
                            <div className="flex flex-col gap-3">
                                <div className="flex gap-3 items-center">
                                    <p className="text-xl">Infantil 3 días</p>
                                    <button onClick={() => setInfoEntradaInfantil3Dias(!infoEntradaInfantil3Dias)}>
                                        <img src={iconInfo} alt="Icono información" className="w-6 h-6" />
                                    </button>
                                </div>
                                <p className="font-bold text-2xl">{precioEntradas.entradaInfantil3Dias} €</p>
                            </div>
                            <EntradasIndicador entrada={entradaInfantil3Dias} setEntrada={setEntradaInfantil3Dias} desactivado={unicoDia && hayAlgunaSeleccion} />
                        </div>
                        {infoEntradaInfantil3Dias && <p className="text-sm text-neutral-500 text-pretty md:text-lg">*MENORES DE 12 AÑOS acompañados por un adulto</p>}
                    </li>
                </ul>
                <div className="flex flex-col gap-3 mt-6 md:mt-8">
                    <div className="flex items-end justify-between ">
                        <p className="text-xl font-bold">Total {precioTotal} €</p>
                        <p className="text-xl font-bold">{entradaDia + entradaInfantilDia + entrada3Dias + entradaInfantil3Dias} Entrada{entradaDia + entradaInfantilDia + entrada3Dias + entradaInfantil3Dias !== 1 ? 's' : ''}</p>
                    </div>
                    <p className="text-sm text-neutral-500 text-pretty mt-1 mb-2 md:text-lg">*El coste de la entrada del viernes es a mitad de precio</p>
                    <Btn to="#" text="Siguiente" variant={precioTotal > 0 ? 'solidgreen' : 'solidblack'} size='xs' font='sans' onClick={() => {if(precioTotal>0)irASiguiente(2)}} className="md:mx-20 md:mt-4 lg:mx-75" />
                </div>
            </div>
        )}
    </div>
);
export default AcordeonEntradas;