import { CATALOGO } from '../data/films';

const Calendario = ({ fecha, seleccionados, setSeleccionados }) => {
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
                plazas: hora.plazas,
                id: evento.id
            });
        });
    });


    // Inyectamos el DESCANSO general SÓLO si es Sábado 14 o Domingo 15
    if (fecha === 14 || fecha === 15) {
        sesiones.push({
            titulo: 'DESCANSO',
            tipo: 'Descanso',
            duracion: 150, // 14:00 - 16:30
            sala: 'TODAS',
            horaInicio: '14:00'
        });
    }

    // Para extraer la hora de inicio y poder ordenar cronológicamente (ej: "17:00" -> 1700)
    const obtenerMinutos = (horaInicio) => {
        const [horas, minutos] = horaInicio.split(':').map(Number);
        return horas * 60 + minutos;
    };

    // Ordenamos absolutamente todas las sesiones del día por su hora de inicio
    // Si coinciden en hora, los ordenamos por número de sala para mantener la estructura (Sala 1, Sala 2, Sala 3)
    const todasLasSesionesOrdenadas = sesiones.sort((a, b) => {
        const horaFinal = obtenerMinutos(a.horaInicio) - obtenerMinutos(b.horaInicio);
        if (horaFinal !== 0) return horaFinal;
        return String(a.sala).localeCompare(String(b.sala));
    });
    /* sort lo que hace es ordenar los elementos del array según el resultado de la función de comparación */

    // Helper para las clases de fondo
    const obtenerClaseFondo = (tipo) => {
        if (tipo === 'Descanso') return 'bg-gray-400 text-black';
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
        if (duracion >= 120) return 'row-span-4';
        if (duracion === 90) return 'row-span-3';
        if (duracion === 60) return 'row-span-2';
        return 'row-span-1 sm:h-20 md:h-28';
    };

    /* --------ESTA PARTE ES PARA EL CHECKOUT----------- */

    const seSolapan = (sesionA, sesionB) => {
        const inicioA = obtenerMinutos(sesionA.horaInicio);
        const finA = inicioA + sesionA.duracion;

        const inicioB = obtenerMinutos(sesionB.horaInicio);
        const finB = inicioB + sesionB.duracion;

        // Se solapan si el inicio de uno ocurre antes del fin del otro (y viceversa)
        return inicioA < finB && inicioB < finA;
    };

    const AlternarSeleccion = (sesion) => {
        if (seleccionados.includes(sesion)) {
            setSeleccionados(seleccionados.filter((s) => s !== sesion));
        } else {
            setSeleccionados([...seleccionados, sesion]);
        }
    };

    const esInteractivo = seleccionados !== undefined && setSeleccionados !== undefined;



    return (
        <div className="w-full py-4 md:py-6">
            {/* Cabecera de Columnas - Salas */}
            <div className="grid grid-cols-3 gap-3 text-center text-xl font-pixel text-black dark:text-white mb-3 md:text-2xl md:mb-6">
                <div>Sala 1</div>
                <div>Sala 2</div>
                <div>Sala 3</div>
            </div>

            {/* UN ÚNICO GRID GLOBAL: Controla las 3 columnas a la vez */}
            <div className={`grid grid-cols-3 gap-3 font-sans ${fecha === 13 ? 'grid-rows-3' : 'grid-rows-16'} `}>
                {todasLasSesionesOrdenadas.map((sesion) => {
                    // Si el elemento es un descanso o el concurso especial de domingo, ocupa las 3 columnas de golpe
                    const esAnchoCompleto = sesion.sala === 'TODAS';

                    const llave = `${sesion.id}-${sesion.sala}-${sesion.horaInicio}`; // Generamos una llave única para cada sesión

                    // Comprobaciones de estado
                    const estaSeleccionado = esInteractivo && seleccionados.includes(llave);

                    // Está bloqueado si NO está seleccionado, pero se solapa con ALGUNA de las sesiones que SÍ están seleccionadas
                    const estaBloqueado = esInteractivo && !estaSeleccionado && (seleccionados.some((llaveSeleccionada) => {
                        const sesionSeleccionada = todasLasSesionesOrdenadas.find((s) => `${s.id}-${s.sala}-${s.horaInicio}` === llaveSeleccionada);
                        return sesionSeleccionada && seSolapan(sesion, sesionSeleccionada);
                    })
                        || sesion.plazas <= 0); // También bloqueamos si no hay plazas disponibles

                    // Definimos los estilos según el estado
                    let claseColor = obtenerClaseFondo(sesion.tipo);
                    if (esInteractivo && sesion.tipo !== 'Descanso') {
                        if (estaBloqueado) {
                            // Cambia esto por la clase que uses para marcar lo seleccionado (ej: borde verde, o fondo oscuro con texto blanco)
                            claseColor = 'bg-neutral-400 text-black';
                        } else if (!estaSeleccionado) {
                            // El gris oscuro para las celdas deshabilitadas
                            claseColor = 'bg-grey text-black';
                        }
                    }
                    return (
                        <button
                            onClick={() => esInteractivo && !estaBloqueado && sesion.tipo !== 'Descanso' && AlternarSeleccion(llave)}
                            disabled={estaBloqueado}
                            key={`sesion-${llave}`}
                            className={`flex flex-col justify-center items-center text-center p-2 gap-1 transition-all duration-200 md:gap-1 lg:gap-2
                                ${claseColor}
                                ${obtenerClaseDuracion(sesion.duracion)}
                                ${esAnchoCompleto ? 'col-span-3' : ''} 
                            `}
                        >
                            <div className="font-bold text-wrap leading-tight text-center text-md lg:text-lg">{sesion.titulo}</div>
                            <div className="text-sm md:text-base">
                                {sesion.horaInicio} - {obtenerHoraFin(sesion.horaInicio, sesion.duracion)}
                            </div>
                            {sesion.plazas === 0 && esInteractivo && (
                                <span className="relative top-0 bg-black text-white text-[10px] font-sans font-bold px-3 py-0.5 rounded-full uppercase mt-0.5 md:text-[12px]">
                                    agotado
                                </span>
                            )}
                            {sesion.plazas <= 10 && sesion.plazas > 0 && esInteractivo && (
                                <span className="relative top-0 bg-white text-black text-[10px] font-sans font-bold px-3 py-0.5 rounded-full uppercase mt-0.5 mb-0.5 md:text-[12px]">
                                    casi lleno
                                </span>
                            )}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default Calendario;

