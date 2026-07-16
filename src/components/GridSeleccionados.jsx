import { CATALOGO } from '../data/films';

const GridSeleccionados = ({ Seleccionados }) => {

    const obtenerHoraFin = (horaInicio, duracion) => {
        const [horas, minutos] = horaInicio.split(':').map(Number);
        const totalMinutos = horas * 60 + minutos + duracion;
        const horasFin = Math.floor(totalMinutos / 60);
        const minutosFin = totalMinutos % 60;
        return `${horasFin.toString().padStart(2, '0')}:${minutosFin.toString().padStart(2, '0')}`;
    };

    const obtenerClaseDuracion = (duracion) => {
        if (duracion >= 120) return 'row-span-4';
        if (duracion === 90) return 'row-span-3';
        if (duracion === 60) return 'row-span-2';
        return 'row-span-1'; // Quitamos el sm:h-20 para que herede la altura del grid base
    };

    const obtenerClaseFondo = (tipo) => {
        if (tipo === 'Descanso') return 'bg-gray-400 text-black';
        if (tipo === 'Película') return 'bg-blue text-black'; // Asegúrate de tener "bg-blue" o usar "bg-blue-500"
        if (tipo === 'Serie') return 'bg-pink text-black'; // Asegúrate de tener "bg-pink" o usar "bg-pink-500"
        return 'bg-green text-black'; // Asegúrate de tener "bg-green" o usar "bg-green-500"
    };

    return (
        /* 1. Cambiamos 'auto-rows-auto' por 'grid-auto-rows-[80px]' (o el tamaño base que prefieras por "bloque" de tiempo).
        2. Añadimos 'items-stretch' para que los hijos ocupen todo el alto de su celda asignada.
        */
        <div className="grid grid-cols-1 gap-4 w-full h-full auto-rows-[minmax(80px,auto)] items-stretch">
            {Seleccionados.map((sesion) => {
                const [sesionId, sala, horaInicio] = sesion.split('-');
                const sesionReal = CATALOGO.find((item) => item.id === parseInt(sesionId));

                return (
                    <div
                        className={`flex flex-col justify-center items-center p-2 gap-1 ${obtenerClaseFondo(sesionReal?.tipo)} font-sans ${obtenerClaseDuracion(sesionReal?.duracion)}`}
                        key={sesion}
                    >
                        <p className="font-semibold text-black text-lg text-center">
                            {sesionReal?.tituloEsp} - <span className="uppercase">sala {sala}</span>
                        </p>
                        <p className="text-black">
                            {horaInicio} - {obtenerHoraFin(horaInicio, sesionReal?.duracion || 0)}
                        </p>
                    </div>
                );
            })}
        </div>
    )
};

export default GridSeleccionados;