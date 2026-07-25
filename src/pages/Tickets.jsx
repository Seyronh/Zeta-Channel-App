import { useState, useEffect } from 'react';


import CierrePopUp from '../components/CierrePopUp.jsx';
import AcordeonPagos from '../components/AcordeonPagos.jsx';
import AcordeonEntradas from '../components/AcordeonEntradas.jsx';
import AcordeonAgenda from '../components/AcordeonAgenda.jsx';
import AcordeonDatosPersonales from '../components/AcordeonDatosPersonales.jsx';


import iconTickets from '../assets/img/icon/icon-ticket.svg';
import pegatinaCheckout from '../assets/img/pegatinas/pegatina-checkout.svg';
import { Pix2 } from '../components/Pixel.jsx';



const Tickets = ({ seleccionadosViernes, seleccionadosSabado, seleccionadosDomingo, setSeleccionadosViernes, setSeleccionadosSabado, setSeleccionadosDomingo, entradaDia, entradaInfantilDia, entrada3Dias, entradaInfantil3Dias, setEntradaDia, setEntradaInfantilDia, setEntrada3Dias, setEntradaInfantil3Dias }) => {
    const [popupCheckOut, setpopupCheckOut] = useState(true);

    // --- ESTADO PARA CONTROLAR LOS ACORDEONES PRINCIPALES ---
    // 1: Entradas, 2: Agenda, 3: Datos Personales, 4: Pagos
    const [seccionActiva, setSeccionActiva] = useState(1);

    const toggleSeccion = (numSeccion) => {
        // Si ya está abierta, la cierra (pone 0), si no, la abre
        setSeccionActiva(seccionActiva === numSeccion ? 0 : numSeccion);
    };

    const irASiguiente = (siguienteSeccion) => {
        setSeccionActiva(siguienteSeccion);
    };

    const [infoEntradaDia, setInfoEntradaDia] = useState(false);
    const [infoEntradaInfantilDia, setInfoEntradaInfantilDia] = useState(false);
    const [infoEntrada3Dias, setInfoEntrada3Dias] = useState(false);
    const [infoEntradaInfantil3Dias, setInfoEntradaInfantil3Dias] = useState(false);
    const [nombre, setNombre] = useState('');
    const [fechaNacimiento, setFechaNacimiento] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        setSeleccionadosViernes([]);
        setSeleccionadosSabado([]);
        setSeleccionadosDomingo([]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [entradaDia, entradaInfantilDia, entrada3Dias, entradaInfantil3Dias]);

    const precioEntradas = {
        entradaDia: 30,
        entradaInfantilDia: 15,
        entrada3Dias: 70,
        entradaInfantil3Dias: 35,
        entradaDiaViernes: 15,
        entradaInfantilDiaViernes: 8
    };

    const unicoDia = (entradaDia + entradaInfantilDia) > 0;
    const hayAlgunaSeleccion = (entradaDia + entradaInfantilDia + entrada3Dias + entradaInfantil3Dias) > 0;

    const diaSeleccionado = unicoDia ? (seleccionadosViernes.length > 0 ? 13 : (seleccionadosSabado.length > 0 ? 14 : (seleccionadosDomingo.length > 0 ? 15 : 0))) : 0;

    const esViernes = diaSeleccionado === 13;

    const precioTotal =
        (entradaDia * (esViernes ? precioEntradas.entradaDiaViernes : precioEntradas.entradaDia)) +
        (entradaInfantilDia * (esViernes ? precioEntradas.entradaInfantilDiaViernes : precioEntradas.entradaInfantilDia)) +
        (entrada3Dias * precioEntradas.entrada3Dias) +
        (entradaInfantil3Dias * precioEntradas.entradaInfantil3Dias);

    return (
        <>
            <Pix2 className="absolute top-13 left-0 w-40 h-40 text-white" />
            <div className="bg-pix-light dark:bg-pix-dark pt-26 pb-6 ">

                <div className={`container mx-auto relative flex flex-col px-4 my-6 md:px-25 lg:px-60 ${popupCheckOut ? 'block' : 'hidden'}`}>
                    <div className="p-5 bg-white rounded-xl">
                        <CierrePopUp text="Tickets" setpopupIsOpen={setpopupCheckOut} className="absolute top-0 right-0 left-0 mx-4 md:mx-25 lg:mx-60" />

                        {/* ------------ ACORDEÓN 1: ENTRADAS ----------- */}
                        <AcordeonEntradas
                            toggleSeccion={toggleSeccion}
                            seccionActiva={seccionActiva}
                            setInfoEntradaDia={setInfoEntradaDia}
                            infoEntradaDia={infoEntradaDia}
                            esViernes={esViernes}
                            precioEntradas={precioEntradas}
                            entradaDia={entradaDia}
                            setEntradaDia={setEntradaDia}
                            unicoDia={unicoDia}
                            hayAlgunaSeleccion={hayAlgunaSeleccion}
                            irASiguiente={irASiguiente}
                            setInfoEntradaInfantilDia={setInfoEntradaInfantilDia}
                            infoEntradaInfantilDia={infoEntradaInfantilDia}
                            entradaInfantilDia={entradaInfantilDia}
                            setEntradaInfantilDia={setEntradaInfantilDia}
                            entrada3Dias={entrada3Dias}
                            setInfoEntradaInfantil3Dias={setInfoEntradaInfantil3Dias}
                            infoEntradaInfantil3Dias={infoEntradaInfantil3Dias}
                            setInfoEntrada3Dias={setInfoEntrada3Dias}
                            infoEntrada3Dias={infoEntrada3Dias}
                            setEntrada3Dias={setEntrada3Dias}
                            entradaInfantil3Dias={entradaInfantil3Dias}
                            setEntradaInfantil3Dias={setEntradaInfantil3Dias}
                            precioTotal={precioTotal}
                        />


                        {/* ----------- ACORDEÓN 2: AGENDA ----------- */}

                        <AcordeonAgenda toggleSeccion={toggleSeccion} seccionActiva={seccionActiva} diaSeleccionado={diaSeleccionado} setSeleccionadosViernes={setSeleccionadosViernes} setSeleccionadosSabado={setSeleccionadosSabado} setSeleccionadosDomingo={setSeleccionadosDomingo} seleccionadosViernes={seleccionadosViernes} seleccionadosSabado={seleccionadosSabado} seleccionadosDomingo={seleccionadosDomingo} irASiguiente={irASiguiente} />

                        {/* ----------- ACORDEÓN 3: DATOS PERSONALES ----------- */}

                        <AcordeonDatosPersonales toggleSeccion={toggleSeccion} seccionActiva={seccionActiva} irASiguiente={irASiguiente} nombre={nombre} setNombre={setNombre} fechaNacimiento={fechaNacimiento} setFechaNacimiento={setFechaNacimiento} email={email} setEmail={setEmail} />

                        {/* ----------- ACORDEÓN 4: PAGOS ----------- */}
                        <AcordeonPagos toggleSeccion={toggleSeccion} seccionActiva={seccionActiva} setSeccionActiva={setSeccionActiva} seleccionadosViernes={seleccionadosViernes} seleccionadosSabado={seleccionadosSabado} seleccionadosDomingo={seleccionadosDomingo} entradaDia={entradaDia} precioEntradas={precioEntradas} entradaInfantilDia={entradaInfantilDia} entrada3Dias={entrada3Dias} precioTotal={precioTotal} esViernes={esViernes} entradaInfantil3Dias={entradaInfantil3Dias} nombre={nombre} fechaNacimiento={fechaNacimiento} email={email} />
                    </div>

                </div>
                <div className={`mx-auto pt-6 cursor-pointer flex flex-col md:py-40 ${popupCheckOut ? 'hidden' : 'block'}`} onClick={() => setpopupCheckOut(true)}>
                    <div className="relative w-30 h-20 mx-auto">
                        <img src={pegatinaCheckout} alt="Pegatina checkout" className="w-full h-full mx-auto" />
                        <img src={iconTickets} alt="Icono tickets" className="absolute -bottom-2 right-3 w-14 h-14" />
                    </div>
                    <div className="mx-auto text-center bg-white dark:bg-black text-2xl font-pixel rounded-full px-5 py-1 text-black dark:text-white uppercase">
                        Tickets
                    </div>
                </div>
            </div >
        </>
    )
};

export default Tickets;