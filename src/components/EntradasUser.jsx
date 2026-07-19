
import qrCode from '../assets/img/icon/qr-entradas.svg';

const EntradasUser = ({ diaSeleccionado, entradaDia, entradaInfantilDia, entrada3Dias, entradaInfantil3Dias }) => {
    // Puedes cambiar este color dinámicamente usando las utilidades de color de tu Tailwind config
    // Ejemplos: 'text-pink', 'text-blue', 'text-green', 'text-purple-300', etc.
    const colorTicket = {
        viernes: 'text-pink',
        sabado: 'text-blue',
        domingo: 'text-green'
    }; // Cambia 'viernes' a 'sabado' o 'domingo' según la entrada que quieras mostrar



    return (
        <div className="mb-4">

            {/* CONTENEDOR PRINCIPAL DE LA ENTRADA */}
            <div className="relative flex p-5 font-sans justify-center">

                {/* SVG DE FONDO (Controlado por color de texto gracias a fill="currentColor") */}
                <svg
                    width="304"
                    height="373"
                    viewBox="0 0 304 373"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`absolute inset-0 w-full h-full ${colorTicket[diaSeleccionado]}`}

                >
                    <path
                        d="M304 24.5C304 12.0527 291.546 0 280.5 0H136C130.241 0 125.366 3.31894 123.729 7.89372L123.695 7.88822L123.59 8.3185C123.468 8.71465 123.368 9.11905 123.295 9.53123L121.219 18.0588L121.214 18.0302C121.214 18.0302 121.199 18.1139 121.169 18.2668L120.804 19.769C120.123 22.1905 119.5 29.5 115 30.426L30 30.426C13.4315 30.426 0 45.5617 0 64.2326V332.491L0.0361328 332.432L0.026744 342.973C0.0119776 359.552 13.4478 373 30.0267 373H274C290.569 373 304 357.864 304 339.193V24.5Z"
                        fill="currentColor"
                    />
                </svg>


                {/* CONTENIDO DE LA ENTRADA (Capa superior) */}
                <div className="relative z-10 flex flex-col pt-10 px-3 text-black ">

                    {/* FECHA */}
                    {diaSeleccionado === 'viernes' && (
                        <h2 className="text-2xl font-bold uppercase mb-4">
                            Viernes 13 Sep
                        </h2>
                    )}
                    {diaSeleccionado === 'sabado' && (
                        <h2 className="text-2xl font-bold uppercase mb-4">
                            Sábado 14 Sep
                        </h2>
                    )}
                    {diaSeleccionado === 'domingo' && (
                        <h2 className="text-2xl font-bold uppercase mb-4">
                            Domingo 15 Sep
                        </h2>
                    )}
                    <div className="flex flex-col px-4">
                        {/* DETALLES DEL LUGAR */}
                        <div className="flex flex-col gap-0.5 leading-5 font-medium mb-4 text-balance items-center">
                            <p>Autocine Madrid</p>
                            <p>C. de la Isla de Java, 2</p>
                        </div>

                        {/* LÍNEA DIVISORIA */}
                        <div className="w-full h-0.5 bg-black opacity-90 mb-3"></div>

                        {/* TIPO DE ENTRADA Y HORA */}
                        <div className="flex justify-between items-center text-lg font-medium mb-4">
                            <div className="flex flex-col items-start gap-2">
                                {(entradaDia > 0 || entrada3Dias > 0) && (
                                    <span>Adulto</span>
                                )}
                                {(entradaInfantilDia > 0 || entradaInfantil3Dias > 0) && (
                                    <span>Infantil</span>
                                )}
                            </div>
                            {diaSeleccionado === 'viernes' && (
                                <span>
                                    17:00 - 21:00
                                </span>
                            )}
                            {(diaSeleccionado === 'sabado' || diaSeleccionado === 'domingo') && (
                                <span>
                                    12:00 - 21:00
                                </span>
                            )}


                        </div>

                        {/* CONTENEDOR PARA EL QR (Centrado en el espacio restante) */}
                        <div className="flex-1 flex items-center justify-center pb-6">
                            {/* Aquí va tu componente o imagen de código QR */}

                            <img src={qrCode} alt="Código QR" className="w-35 h-35" />

                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
};

export default EntradasUser;