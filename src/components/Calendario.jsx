import { CATALOGO } from '../data/films';

const Calendario = ({ fecha }) => {
    // 1. Filtramos los eventos de la fecha seleccionada
    const eventosFiltrados = CATALOGO.filter((evento) => evento.fecha === fecha);

    // 2. Aplanamos y estructuramos la información para tener sesiones individuales
    //    Esto es clave porque un evento puede tener varios horarios/salas en el mismo día.
    const sesiones = [];
    eventosFiltrados.forEach((evento) => {
        evento.horario.forEach((hora) => {
            sesiones.push({
                /* push es un método de los arrays que permite agregar elementos al final del array */
                titulo: evento.tituloEsp,
                tipo: evento.tipo,
                duracion: evento.duracion,
                sala: evento.sala,
                horaInicio: hora.hora,
            });
        });
    });

    // Para extraer la hora de inicio y poder ordenar cronológicamente (ej: "17:00" -> 1700)
    const obtenerMinutos = (horaInicio) => {
        const [horas, minutos] = horaInicio.split(':').map(Number);
        return horas * 60 + minutos;
    };

    // 3. Función para obtener y ordenar las sesiones de una sala específica
    const obtenerSesionesPorSala = (numeroSala) => {
        return sesiones
            .filter((sesion) => {
                // Compara tanto si viene como String ("Sala 1") o como Número (1)
                return sesion.sala === numeroSala;
            })
            .sort((a, b) => obtenerMinutos(a.horaInicio) - obtenerMinutos(b.horaInicio));
        /* sort lo que hace es ordenar los elementos del array según el resultado de la función de comparación */
    };

    // Obtenemos las listas independientes y ordenadas por tiempo para cada sala
    const sala1 = obtenerSesionesPorSala(1);
    const sala2 = obtenerSesionesPorSala(2);
    const sala3 = obtenerSesionesPorSala(3);

    // Helper para las clases de fondo
    const obtenerClaseFondo = (tipo) => {
        if (tipo === 'Película') return 'bg-blue text-black';
        if (tipo === 'Serie') return 'bg-pink text-black';
        return 'bg-green text-black';
    };

    const obtenerHoraFin = (horaInicio, duracion) => {
        const [horas, minutos] = horaInicio.split(':').map(Number);
        const totalMinutos = horas * 60 + minutos + duracion;
        const horasFin = Math.floor(totalMinutos / 60);
        const minutosFin = totalMinutos % 60;
        return `${horasFin.toString().padStart(2, '0')}:${minutosFin.toString().padStart(2, '0')}`;
    };

    // Al meterlos en columnas separadas, es más fácil usar clases de altura (h-X) o padding proporcional,
    // pero si sigues queriendo usar grid interno dentro de cada columna, usamos flex o grid por sala.
    const obtenerClaseDuracion = (duracion) => {
        if (duracion === 120) return 'row-span-4';
        if (duracion === 90) return 'row-span-3';
        if (duracion === 60) return 'row-span-2';
        return 'row-span-1';
    };

    return (
        <div className="w-full py-4">
            {/* Cabecera de Columnas - Salas */}
            <div className="grid grid-cols-3 gap-3 text-center text-xl font-pixel text-black dark:text-white mb-3">
                <div>Sala 1</div>
                <div>Sala 2</div>
                <div>Sala 3</div>
            </div>

            {/* Grid de Eventos Organizado en 3 Columnas Verticales */}
            <div className="grid grid-cols-3 gap-3 font-sans">

                {/* COLUMNA SALA 1 */}
                <div className="grid grid-cols-1 grid-rows-8 gap-3">
                    {sala1.map((sesion, posicion) => (
                        <div
                            key={`sala1-${posicion}`}
                            className={`flex flex-col justify-center items-center text-center p-2 gap-1 ${obtenerClaseFondo(sesion.tipo)} ${obtenerClaseDuracion(sesion.duracion)}`}
                        >
                            <div className="font-bold text-wrap leading-tight">{sesion.titulo}</div>
                            <div className="text-sm">{sesion.horaInicio} - {obtenerHoraFin(sesion.horaInicio, sesion.duracion)}</div>
                        </div>
                    ))}
                </div>

                {/* COLUMNA SALA 2 */}
                <div className="grid grid-cols-1 grid-rows-8 gap-3">
                    {sala2.map((sesion, posicion) => (
                        <div
                            key={`sala2-${posicion}`}
                            className={`flex flex-col justify-center items-center text-center p-2 gap-1 ${obtenerClaseFondo(sesion.tipo)} ${obtenerClaseDuracion(sesion.duracion)}`}
                        >
                            <div className="font-bold text-wrap leading-tight">{sesion.titulo}</div>
                            <div className="text-sm">{sesion.horaInicio} - {obtenerHoraFin(sesion.horaInicio, sesion.duracion)}</div>
                        </div>
                    ))}
                </div>

                {/* COLUMNA SALA 3 */}
                <div className="grid grid-cols-1 grid-rows-8 gap-3">
                    {sala3.map((sesion, posicion) => (
                        <div
                            key={`sala3-${posicion}`}
                            className={`flex flex-col justify-center items-center text-center p-2 gap-1 ${obtenerClaseFondo(sesion.tipo)} ${obtenerClaseDuracion(sesion.duracion)}`}
                        >
                            <div className="font-bold text-wrap leading-tight">{sesion.titulo}</div>
                            <div className="text-sm">{sesion.horaInicio} - {obtenerHoraFin(sesion.horaInicio, sesion.duracion)}</div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Calendario;

{/* Sala 1: Evento 1 */ }
{/* <div className="row-span-2">
                    <div className="w-full h-full p-2 bg-blue text-black flex flex-col justify-center transform hover:bg-blue-hover transition-transform text-center text-[calc(0.9rem+0.25vw)]">
                        <div className="font-bold line-clamp-2 leading-tight">
                            Camp Rock
                        </div>
                        <div>
                            17:00 - 18:30
                        </div>
                    </div>
                </div> */}

{/* Sala 2: Evento Casi Lleno (Serie) */ }
{/* <div className="flex flex-col gap-2">
                    <div className="w-full p-2.5 rounded-lg border bg-pink-300 text-slate-900 border-pink-400 shadow-sm flex flex-col justify-between h-22 relative transform hover:scale-[1.02] transition-transform cursor-pointer"> */}
{/* Badge de Casi Lleno */ }
{/* <span className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-amber-500 text-white text-[8px] font-black px-1.5 py-0.5 rounded uppercase tracking-wide whitespace-nowrap shadow animate-pulse">
                            🔥 CASI LLENO
                        </span>
                        <div className="font-bold text-xs line-clamp-2 leading-tight mt-1">
                            Lizzie McGuire
                        </div>
                        <div className="flex justify-between items-center text-[10px] font-bold mt-2">
                            <span>17:00 - 18:30</span>
                            <span className="bg-amber-600 text-white px-1.5 py-0.2 rounded-full text-[9px]">3</span>
                        </div>
                    </div>
                </div> */}

{/* Sala 3: Evento Completo / Agotado (Actividad) */ }
{/* <div className="flex flex-col gap-2">
                    <div className="w-full p-2.5 rounded-lg border bg-slate-200 text-slate-400 border-slate-300 dark:bg-slate-900 dark:text-slate-600 dark:border-slate-800 opacity-60 flex flex-col justify-between h-22 cursor-not-allowed">
                        <div>
                            <span className="text-[8px] font-black uppercase text-red-600 dark:text-red-500 tracking-wider block mb-1">
                                ⚠️ COMPLETO
                            </span>
                            <div className="font-bold text-xs line-clamp-2 leading-tight line-through">
                                Kahoot Disney
                            </div>
                        </div>
                        <div className="flex justify-between items-center text-[10px] font-semibold mt-2">
                            <span>17:00 - 18:30</span>
                            <span className="text-[8px] italic">Agotado</span>
                        </div>
                    </div>
                </div> */}